import type { JRPass } from '@/types/pass';
import type { DomesticDirectoryPass } from '@/data/domesticPassDirectory';

export type CatalogPass = JRPass | DomesticDirectoryPass;

export function isDirectoryPass(pass: CatalogPass): pass is DomesticDirectoryPass {
  return 'salesPeriod' in pass;
}

export function getCatalogKey(pass: CatalogPass): string {
  return `${isDirectoryPass(pass) ? 'directory' : 'verified'}:${pass.id}`;
}

function normalizeDirectoryText(value: string | null | undefined): string {
  return (value || '').normalize('NFKC').replace(/\s+/g, ' ').trim();
}

function normalizeOfficialUrl(value: string | undefined): string {
  if (!value) return '';
  try {
    const url = new URL(value);
    url.hash = '';
    return url.href.replace(/\/$/, '').toLowerCase();
  } catch {
    return '';
  }
}

function directoryProductKey(pass: DomesticDirectoryPass): string {
  return [
    normalizeDirectoryText(pass.name),
    normalizeDirectoryText(pass.company),
    normalizeDirectoryText(pass.region),
    normalizeOfficialUrl(pass.relatedUrl),
  ].join('|');
}

function hasClearSalesPeriod(pass: DomesticDirectoryPass): boolean {
  return pass.status !== 'needs-review'
    && Boolean(pass.startDate || pass.endDate || /(発売中|通年|常時)/.test(pass.salesPeriod));
}

function hasUsefulDetailContent(pass: DomesticDirectoryPass): boolean {
  return [pass.priceText, pass.validityText, pass.usePeriodText, pass.salesLocationText]
    .filter(value => normalizeDirectoryText(value).length > 0)
    .length >= 2;
}

export type DirectoryIndexDecision = {
  indexable: boolean;
  canonicalId: string;
  reasons: string[];
};

function getDirectoryBaseIssues(pass: DomesticDirectoryPass): string[] {
  const reasons: string[] = [];
  if (pass.officialSourceKind !== 'exact-product') reasons.push('official-product-source-required');
  if (!normalizeOfficialUrl(pass.relatedUrl)) reasons.push('valid-official-url-required');
  if (!hasClearSalesPeriod(pass)) reasons.push('clear-sales-period-required');
  if (!hasUsefulDetailContent(pass)) reasons.push('insufficient-detail-content');
  if (!normalizeDirectoryText(pass.name) || !normalizeDirectoryText(pass.company) || !normalizeDirectoryText(pass.region)) {
    reasons.push('identity-fields-required');
  }
  return reasons;
}

export function getDirectoryIndexDecision(
  pass: DomesticDirectoryPass,
  directory: DomesticDirectoryPass[],
): DirectoryIndexDecision {
  const reasons = getDirectoryBaseIssues(pass);
  const key = directoryProductKey(pass);
  const canonical = directory.find(item => directoryProductKey(item) === key && getDirectoryBaseIssues(item).length === 0) || pass;
  if (canonical.id !== pass.id) reasons.push(`duplicate-of:${canonical.id}`);
  return { indexable: reasons.length === 0, canonicalId: canonical.id, reasons };
}

function joinDistinct(values: (string | undefined)[]): string | undefined {
  const distinct = [...new Set(values.map(normalizeDirectoryText).filter(Boolean))];
  return distinct.length ? distinct.join(' / ') : undefined;
}

function mergeDirectoryProductGroup(group: DomesticDirectoryPass[]): DomesticDirectoryPass {
  const primary = group[0];
  if (group.length === 1) return primary;
  const priceText = group.some(item => item.id === 'kumamotoshi01') && group.some(item => item.id === 'kumamotoshi03')
    ? '紙券 / Paper：大人 700円・小人 350円 ／ モバイル券 / Mobile：大人 500円・小人 250円'
    : joinDistinct(group.map(item => item.priceText));
  return {
    ...primary,
    priceText,
    validityText: joinDistinct(group.map(item => item.validityText)),
    usePeriodText: joinDistinct(group.map(item => item.usePeriodText)),
    salesLocationText: joinDistinct(group.map(item => item.salesLocationText)),
    relatedUrlCorrected: group.some(item => item.relatedUrlCorrected),
  };
}

/**
 * Return only records that are safe to publish and index. Identical product
 * records discovered under multiple source pages are merged into the first ID.
 * The old detail ID can remain generated as noindex for backwards compatibility.
 */
export function getIndexableDirectoryPasses(directory: DomesticDirectoryPass[]): DomesticDirectoryPass[] {
  const groups = new Map<string, DomesticDirectoryPass[]>();
  for (const pass of directory) {
    const decision = getDirectoryIndexDecision(pass, directory);
    if (decision.reasons.some(reason => !reason.startsWith('duplicate-of:'))) continue;
    const key = directoryProductKey(pass);
    groups.set(key, [...(groups.get(key) || []), pass]);
  }
  return [...groups.values()].map(group => mergeDirectoryProductGroup(
    [...new Map(group.map(pass => [pass.id, pass])).values()],
  ));
}

// Preserve the two source schemas and provenance; never invent structured local fares.
export function createPassCatalog(verified: JRPass[], directory: DomesticDirectoryPass[]): CatalogPass[] {
  return [...new Map([...verified, ...getIndexableDirectoryPasses(directory)].map(pass => [getCatalogKey(pass), pass])).values()];
}

export function getCatalogDetailHref(pass: CatalogPass, lang: string): string {
  return `/${lang}/${isDirectoryPass(pass) ? 'directory' : 'passlist'}/${pass.id}`;
}

export interface CalculatorQuery {
  origin: string;
  destination: string;
  query: string;
  category: string;
  tripDays: number;
  adults: number;
  children: number;
  budget?: number;
}

export type MatchReason = 'regionMatch' | 'nationalMatch' | 'originMatch'
  | 'bothFocused' | 'bothBroad' | 'destinationOnly' | 'originOnly'
  | 'daysFit' | 'daysShort' | 'daysLong' | 'directoryRegion' | 'directoryReview';

export interface CalculatorMatch {
  pass: CatalogPass;
  key: string;
  score: number;
  reasons: MatchReason[];
  totalPassCost?: number;
  difference?: number;
}

const regionAliases: Record<string, string> = {
  全国: '全国 全日本 nationwide japan', 北海道: '北海道 hokkaido', 東北: '东北 tohoku',
  関東: '关东 kanto', 東海: '东海 tokai', 北信越: '北陆 北陸 hokuriku hokushinetsu',
  近畿: '关西 関西 kansai kinki', 中国: '中国 chugoku', 四国: '四国 shikoku', 九州: '九州 kyushu',
};
const categoryAliases: Record<string, string> = {
  national: '全国通票 全国パス nationwide', regional: '地区通票 地域パス regional',
  city: '城市交通券 都市交通券 地铁 地下鉄 metro subway tram', bus: '巴士通票 バス bus',
  private: '私铁 私鉄 private rail', special: '特别组合 特別セット special combo', local: '地方 local',
};

function normalize(text: string | null | undefined): string {
  return (text || '').normalize('NFKC').toLowerCase().replace(/\s+/g, ' ').trim();
}

function searchableText(pass: CatalogPass): string {
  const regions = isDirectoryPass(pass) ? [pass.region, ...pass.majorRegions] : [...pass.coverage.regions, ...pass.majorRegions];
  const fields = isDirectoryPass(pass)
    ? [pass.name, pass.company, pass.priceText, pass.validityText, pass.salesPeriod]
    : [pass.name.cn, pass.name.en, pass.name.jp, pass.company, pass.description];
  return normalize([...fields, ...regions, ...regions.map(region => regionAliases[region]), categoryAliases[pass.category]].filter(Boolean).join(' '));
}

function matchesCatalogKeyword(pass: CatalogPass, query: string): boolean {
  const words = normalize(query).split(' ').filter(Boolean);
  if (!words.length) return true;
  const haystack = searchableText(pass);
  return words.every(word => haystack.includes(word));
}

/**
 * Keyword-only search for the calculator's instant suggestions. It deliberately
 * ignores the trip filters so a user can always discover a pass by name,
 * operator or region before deciding how to narrow the comparison.
 */
export function searchCatalogByKeyword(catalog: CatalogPass[], query: string): CatalogPass[] {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return [];

  return catalog
    .filter(pass => matchesCatalogKeyword(pass, normalizedQuery))
    .sort((a, b) => {
      const aName = normalize(isDirectoryPass(a) ? a.name : `${a.name.cn} ${a.name.jp} ${a.name.en}`);
      const bName = normalize(isDirectoryPass(b) ? b.name : `${b.name.cn} ${b.name.jp} ${b.name.en}`);
      const aCompany = normalize(a.company);
      const bCompany = normalize(b.company);
      const rank = (name: string, company: string) => name === normalizedQuery
        ? 4
        : name.startsWith(normalizedQuery)
          ? 3
          : name.includes(normalizedQuery)
            ? 2
            : company.includes(normalizedQuery)
              ? 1
              : 0;
      return rank(bName, bCompany) - rank(aName, aCompany) || getCatalogKey(a).localeCompare(getCatalogKey(b));
    });
}

export function searchCalculatorCatalog(catalog: CatalogPass[], input: CalculatorQuery): CalculatorMatch[] {
  const destination = input.destination && input.destination !== 'all' ? input.destination : '';
  const origin = input.origin && input.origin !== '全国' ? input.origin : '';
  const budget = input.budget !== undefined && Number.isFinite(input.budget) && input.budget > 0 ? input.budget : undefined;

  return catalog.flatMap((pass): CalculatorMatch[] => {
    if (input.category !== 'all' && input.category && pass.category !== input.category) return [];
    if (!matchesCatalogKeyword(pass, input.query)) return [];

    const directory = isDirectoryPass(pass);
    const passRegions = pass.majorRegions;
    // A directory record filed under 全国 is not evidence of nationwide coverage.
    const nationalCoverage = !directory && pass.coverage.regions.includes('全国');
    const includesRegion = (region: string) => nationalCoverage || passRegions.some(passRegion => passRegion === region);
    const destinationMatch = Boolean(destination && (destination === '全国' ? nationalCoverage : includesRegion(destination)));
    const originMatch = Boolean(origin && includesRegion(origin));
    if (destination === '全国' && !nationalCoverage) return [];
    if (destination && !destinationMatch && !originMatch) return [];

    const plannedRegions = new Set([origin, destination].filter(region => region && region !== '全国'));
    const hasExtraRegions = nationalCoverage || passRegions.some(region => !plannedRegions.has(region));
    // Geographic tiers always outrank duration and price. A one-sided result is
    // a discovery candidate, never a claim that the whole itinerary is covered.
    const tier = destination && origin
      ? destinationMatch && originMatch ? (hasExtraRegions ? 3 : 4) : destinationMatch ? 2 : originMatch ? 1 : 0
      : destination ? destinationMatch ? (hasExtraRegions ? 3 : 4) : 0
        : origin && originMatch ? (hasExtraRegions ? 3 : 4) : 0;
    let score = tier * 100;
    const reasons: MatchReason[] = [];
    if (destination && origin) {
      if (destinationMatch && originMatch) reasons.push(hasExtraRegions ? 'bothBroad' : 'bothFocused');
      else if (destinationMatch) reasons.push('destinationOnly');
      else if (originMatch) reasons.push('originOnly');
    }
    if (directory) {
      reasons.push('directoryRegion');
      reasons.push('directoryReview');
      return [{ pass, key: getCatalogKey(pass), score, reasons }];
    }

    if (destinationMatch) {
      reasons.push(nationalCoverage ? 'nationalMatch' : 'regionMatch');
    }
    if (originMatch) {
      reasons.push('originMatch');
    }
    const durations = pass.duration.filter(days => Number.isFinite(days) && days > 0);
    const validity = durations.sort((a, b) => Math.abs(a - input.tripDays) - Math.abs(b - input.tripDays))[0];
    if (validity !== undefined) {
      reasons.push(validity === input.tripDays ? 'daysFit' : validity < input.tripDays ? 'daysShort' : 'daysLong');
      score += validity === input.tripDays ? 25 : validity < input.tripDays ? 15 : 5;
    }

    // Missing child prices must never be treated as free tickets.
    const adultPrice = pass.price.adult.regular;
    const childPrice = pass.price.child?.regular;
    const hasPrices = Number.isFinite(adultPrice) && adultPrice > 0
      && (input.children === 0 || (Number.isFinite(childPrice) && childPrice > 0));
    const totalPassCost = hasPrices ? adultPrice * input.adults + (input.children ? childPrice * input.children : 0) : undefined;
    const difference = budget !== undefined && totalPassCost !== undefined ? budget - totalPassCost : undefined;
    score += 5;
    return [{ pass, key: getCatalogKey(pass), score, reasons, totalPassCost, difference }];
  }).sort((a, b) => b.score - a.score || a.key.localeCompare(b.key));
}
