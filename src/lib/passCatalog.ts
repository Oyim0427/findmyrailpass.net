import type { JRPass } from '@/types/pass';
import type { DomesticDirectoryPass } from '@/data/domesticPassDirectory';

export type CatalogPass = JRPass | DomesticDirectoryPass;

export function isDirectoryPass(pass: CatalogPass): pass is DomesticDirectoryPass {
  return 'salesPeriod' in pass;
}

export function getCatalogKey(pass: CatalogPass): string {
  return `${isDirectoryPass(pass) ? 'directory' : 'verified'}:${pass.id}`;
}

// Preserve the two source schemas and provenance; never invent structured local fares.
export function createPassCatalog(verified: JRPass[], directory: DomesticDirectoryPass[]): CatalogPass[] {
  return [...new Map([...verified, ...directory].map(pass => [getCatalogKey(pass), pass])).values()];
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
  | 'daysFit' | 'daysShort' | 'daysLong' | 'directoryRegion' | 'directoryBroad' | 'directoryReview';

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
  const regions = isDirectoryPass(pass) ? [pass.region] : pass.coverage.regions;
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
  const allRegions = !input.destination || input.destination === 'all';
  const budget = input.budget !== undefined && Number.isFinite(input.budget) && input.budget > 0 ? input.budget : undefined;

  return catalog.flatMap((pass): CalculatorMatch[] => {
    if (input.category !== 'all' && input.category && pass.category !== input.category) return [];
    if (!matchesCatalogKeyword(pass, input.query)) return [];

    const directory = isDirectoryPass(pass);
    const passRegions = directory ? [pass.region] : pass.coverage.regions;
    const broadListing = directory && pass.region === '全国';
    // A discovery index filed under 全国 is NOT verified nationwide coverage.
    const nationalCoverage = !directory && (pass.category === 'national' || passRegions.includes('全国'));
    const regionMatch = passRegions.includes(input.destination);
    if (!allRegions && !regionMatch && !nationalCoverage && !broadListing) return [];

    let score = 0;
    const reasons: MatchReason[] = [];
    if (directory) {
      if (broadListing) {
        reasons.push('directoryBroad');
        score += 5;
      } else {
        reasons.push('directoryRegion');
        score += allRegions ? 10 : 40;
      }
      reasons.push('directoryReview');
      return [{ pass, key: getCatalogKey(pass), score, reasons }];
    }

    if (!allRegions) {
      reasons.push(nationalCoverage ? 'nationalMatch' : 'regionMatch');
      score += regionMatch ? 45 : 25;
    }
    if (input.origin && (nationalCoverage || passRegions.includes(input.origin))) {
      reasons.push('originMatch');
      score += 10;
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
