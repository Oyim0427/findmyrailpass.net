import fs from 'node:fs';
import path from 'node:path';
import {
  DIRECTORY_PASS_CATEGORIES,
  DIRECTORY_PASS_CATEGORY_RULE_VERSION,
  classifyDirectoryPass,
} from './lib/classify-directory-pass.mjs';
import {
  DIRECTORY_CANDIDATES_FILE,
  PUBLICATION_HISTORY_FILE,
  PUBLICATION_REVIEW_FILE,
  publicationFingerprint,
  readGeneratedDirectory,
  readPublicationState,
  readSourceResearch,
  writePublicationState,
} from './lib/directory-publication.mjs';

const BASE_URL = 'https://www2s.biglobe.ne.jp/~t_aoyagi/railway/free/';
const SNAPSHOT_DATE = process.env.DIRECTORY_SNAPSHOT_DATE || new Date().toISOString().slice(0, 10);
const OUTPUT_FILE = path.resolve('src/data/domesticPassDirectory.ts');
const REPORT_FILE = path.resolve('reports/biglobe-directory-sync.json');
const OFFICIAL_SOURCE_OVERRIDES_FILE = path.resolve('src/data/directoryOfficialSourceOverrides.ts');
const REGION_PAGES = [
  ['全国', 'zenkoku.htm'],
  ['北海道', 'hokkaido.htm'],
  ['東北', 'tohoku.htm'],
  ['関東', 'kanto.htm'],
  ['東海', 'tokai.htm'],
  ['北信越', 'hokusinetu.htm'],
  ['近畿', 'kinki.htm'],
  ['中国', 'tyugoku.htm'],
  ['四国', 'sikoku.htm'],
  ['九州', 'kyusyu.htm'],
];

// Directory geography is a discovery hint, not a verified route map.
// The nationwide index can include cross-region products that are not nationwide.
const DIRECTORY_MAJOR_REGION_OVERRIDES = {
  jreast04: ['北海道', '東北', '関東', '北信越'],
};

function majorRegionsForDirectoryPass(pass) {
  return DIRECTORY_MAJOR_REGION_OVERRIDES[pass.id] || (pass.region === '全国' ? [] : [pass.region]);
}

const decoder = new TextDecoder('shift_jis');

function readOfficialSourceOverrides() {
  const source = fs.readFileSync(OFFICIAL_SOURCE_OVERRIDES_FILE, 'utf8');
  return Object.fromEntries([...source.matchAll(/\s'([^']+)': \{\s+url: '([^']+)',\s+kind: '(exact-product|operator-overview)',\s+\}/g)]
    .map(([, previousUrl, url, kind]) => [previousUrl, { url, kind }]));
}

const officialSourceOverrides = readOfficialSourceOverrides();
const previouslyPublishedPasses = readGeneratedDirectory();
const publicationState = readPublicationState();
const sourceResearch = readSourceResearch();

function decodeEntities(value) {
  const entities = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&([a-z]+);/gi, (match, name) => entities[name.toLowerCase()] ?? match);
}

function cleanText(value = '') {
  return decodeEntities(value)
    .replace(/<br\s*\/?\s*>/gi, ' / ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[\u00a0\s]+/g, ' ')
    .replace(/\s*\/\s*/g, ' / ')
    .trim();
}

async function fetchShiftJis(url) {
  const response = await fetch(url, {
    redirect: 'follow',
    headers: { 'user-agent': 'FindMyRailPass data-maintenance/1.0' },
    signal: AbortSignal.timeout(20000),
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return decoder.decode(await response.arrayBuffer());
}

function parseDateParts(year, month, day) {
  return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), 23, 59, 59));
}

function resolveAvailability(rawPeriod) {
  const period = rawPeriod.replace(/\s+/g, '');
  if (/(終了|終売|発売休止|販売休止|発売中止|販売中止)/.test(period)) return { include: false, status: 'ended' };
  if (/発売中/.test(period)) return { include: true, status: 'on-sale' };

  const today = new Date(`${SNAPSHOT_DATE}T00:00:00Z`);
  const fullDates = [...period.matchAll(/(20\d{2})\/(\d{1,2})\/(\d{1,2})/g)];
  const start = fullDates[0] ? parseDateParts(...fullDates[0].slice(1, 4)) : undefined;
  let end = fullDates.length > 1 ? parseDateParts(...fullDates.at(-1).slice(1, 4)) : undefined;

  const shortEnd = period.match(/[〜~～-](\d{1,2})\/(\d{1,2})(?!.*20\d{2})/);
  if (!end && start && shortEnd) end = parseDateParts(start.getUTCFullYear(), shortEnd[1], shortEnd[2]);
  if (!end && fullDates.length === 1 && /^[〜~～]/.test(period)) end = start;

  if (end && end < today) return { include: false, status: 'ended-by-date', endDate: end.toISOString().slice(0, 10) };
  if (start && start > today) return { include: true, status: 'scheduled', startDate: start.toISOString().slice(0, 10), endDate: end?.toISOString().slice(0, 10) };
  if (start || end) return { include: true, status: 'on-sale', startDate: start?.toISOString().slice(0, 10), endDate: end?.toISOString().slice(0, 10) };
  return { include: true, status: 'needs-review' };
}

function parseIndex(region, html) {
  const rows = [...html.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map(match => match[1]);
  const tickets = [];
  let company = '';

  for (const row of rows) {
    const companyCell = row.match(/<(?:th|td)\b[^>]*rowspan[^>]*>([\s\S]*?)<\/(?:th|td)>/i)
      ?? row.match(/<th\b[^>]*>([\s\S]*?)<\/th>/i);
    if (companyCell) company = cleanText(companyCell[1])
      .replace(/\s*全国\s*欄も?\s*\/?\s*参照して下さい.*/u, '')
      .replace(/\s*\/\s*$/u, '')
      .trim();
    const periodCell = row.match(/<td\b[^>]*class=["']?cell3["']?[^>]*>([\s\S]*?)<\/td>/i);
    if (!periodCell) continue;

    const anchors = [...row.matchAll(/<a\b[^>]*href=["']?([^"' >]+)["']?[^>]*>([\s\S]*?)(?:<\/a>|<\/td>)/gi)]
      .filter(match => /\.html?$/i.test(match[1]) && !REGION_PAGES.some(([, page]) => page === match[1]));
    const ticketAnchor = anchors.at(-1);
    if (!ticketAnchor) continue;

    const salesPeriod = cleanText(periodCell[1]);
    const availability = resolveAvailability(salesPeriod);
    tickets.push({
      id: ticketAnchor[1].replace(/\.html?$/i, '').toLowerCase(),
      name: cleanText(ticketAnchor[2]),
      company: company || '发行方待确认',
      region,
      salesPeriod,
      sourceDetailUrl: new URL(ticketAnchor[1], BASE_URL).href,
      ...availability,
    });
  }
  return tickets;
}

function extractDetailField(html, labels) {
  for (const label of labels) {
    const pattern = new RegExp(`<th\\b[^>]*>\\s*${label}\\s*<\\/th>\\s*<td\\b[^>]*>([\\s\\S]*?)<\\/td>`, 'i');
    const match = html.match(pattern);
    if (match) return cleanText(match[1]);
  }
  return undefined;
}

function parseDetail(html) {
  const related = html.match(/<th\b[^>]*>\s*関連情報\s*<\/th>\s*<td\b[^>]*>([\s\S]*?)<\/td>/i)?.[1] ?? '';
  const relatedLinks = [...related.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)]
    .map(match => match[1])
    .filter(url => /^https?:\/\//i.test(url) && !/biglobe\.ne\.jp/i.test(url));

  return {
    relatedUrl: relatedLinks[0],
    priceText: extractDetailField(html, ['ねだん', '値段', '価格']),
    validityText: extractDetailField(html, ['有効期間']),
    usePeriodText: extractDetailField(html, ['利用期間']),
    salesLocationText: extractDetailField(html, ['発売箇所']),
  };
}

async function mapWithConcurrency(items, concurrency, mapper) {
  const results = new Array(items.length);
  let cursor = 0;
  await Promise.all(Array.from({ length: concurrency }, async () => {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await mapper(items[index], index);
    }
  }));
  return results;
}

const indexResults = await Promise.all(REGION_PAGES.map(async ([region, page]) => {
  const url = new URL(page, BASE_URL).href;
  const html = await fetchShiftJis(url);
  return { region, url, tickets: parseIndex(region, html) };
}));

const discovered = indexResults.flatMap(result => result.tickets);
const activeCandidates = discovered.filter(ticket => ticket.include);
const deduplicated = [...new Map(activeCandidates.map(ticket => [ticket.sourceDetailUrl, ticket])).values()];
const detailFailures = [];

const passes = await mapWithConcurrency(deduplicated, 8, async ticket => {
  try {
    const html = await fetchShiftJis(ticket.sourceDetailUrl);
    return { ...ticket, ...parseDetail(html) };
  } catch (error) {
    detailFailures.push({ url: ticket.sourceDetailUrl, error: error instanceof Error ? error.message : String(error) });
    return ticket;
  }
});

const regionOrder = new Map(REGION_PAGES.map(([region], index) => [region, index]));
passes.sort((a, b) => (regionOrder.get(a.region) ?? 99) - (regionOrder.get(b.region) ?? 99) || a.company.localeCompare(b.company, 'ja') || a.name.localeCompare(b.name, 'ja'));
const candidatePasses = passes.map(ticket => {
  const { include: _include, ...publicTicket } = ticket;
  const override = publicTicket.relatedUrl ? officialSourceOverrides[publicTicket.relatedUrl] : undefined;
  const researched = sourceResearch.passes[publicTicket.id];
  void _include;
  const overriddenTicket = override ? {
    ...publicTicket,
    relatedUrl: override.url,
    officialSourceKind: override.kind,
    relatedUrlCorrected: override.url !== publicTicket.relatedUrl,
  } : publicTicket;
  const sourcedTicket = researched?.status === 'verified'
    && researched.url
    && ['exact-product', 'operator-overview'].includes(researched.kind)
    ? {
        ...overriddenTicket,
        relatedUrl: researched.url,
        officialSourceKind: researched.kind,
        relatedUrlCorrected: researched.url !== publicTicket.relatedUrl,
      }
    : overriddenTicket;
  return {
    ...sourcedTicket,
    majorRegions: majorRegionsForDirectoryPass(sourcedTicket),
    category: classifyDirectoryPass(sourcedTicket),
  };
});

const officialEndedIds = new Set(candidatePasses
  .filter(pass => sourceResearch.passes[pass.id]?.status === 'ended')
  .map(pass => pass.id));
const visibilityIssues = candidatePasses.map(pass => {
  const issues = [];
  const research = sourceResearch.passes[pass.id];
  if (officialEndedIds.has(pass.id)) issues.push('official-source-ended');
  if (pass.status === 'needs-review') issues.push('sales-date-needs-review');
  if (pass.officialSourceKind !== 'exact-product') issues.push(pass.officialSourceKind === 'operator-overview' ? 'operator-overview-only' : 'official-source-unconfirmed');
  if (!research || research.status === 'unresolved') issues.push('source-research-unresolved');
  if (research?.status === 'broken') issues.push('source-link-broken');
  return { pass, issues: [...new Set(issues)] };
});
const hiddenByQuality = visibilityIssues
  .filter(item => item.issues.length)
  .map(({ pass, issues }) => ({
    id: pass.id,
    name: pass.name,
    company: pass.company,
    region: pass.region,
    status: pass.status,
    salesPeriod: pass.salesPeriod,
    endDate: sourceResearch.passes[pass.id]?.endDate || pass.endDate,
    relatedUrl: pass.relatedUrl,
    officialSourceKind: pass.officialSourceKind,
    issues,
  }));
const hiddenIds = new Set(hiddenByQuality.map(pass => pass.id));
const eligibleCandidatePasses = candidatePasses.filter(pass => !hiddenIds.has(pass.id));
const eligibleIds = new Set(eligibleCandidatePasses.map(pass => pass.id));
const revokedApprovals = [];
for (const id of Object.keys(publicationState.approvals)) {
  if (eligibleIds.has(id)) continue;
  revokedApprovals.push(id);
  delete publicationState.approvals[id];
}
if (revokedApprovals.length) {
  publicationState.updatedAt = new Date().toISOString();
  publicationState.lastRevocationReason = 'not-eligible-under-exact-official-source-policy';
  writePublicationState(publicationState);
}

const approvedIds = new Set(eligibleCandidatePasses
  .filter(pass => publicationState.approvals[pass.id]?.fingerprint === publicationFingerprint(pass))
  .map(pass => pass.id));
const approvedPasses = eligibleCandidatePasses.filter(pass => approvedIds.has(pass.id));
const pendingNew = eligibleCandidatePasses
  .filter(pass => !approvedIds.has(pass.id))
  .map(pass => ({
    ...pass,
    approvalFingerprint: publicationFingerprint(pass),
    reviewReason: publicationState.approvals[pass.id] ? 'changed-sales-period' : 'new-pass',
  }));
const candidateById = new Map(eligibleCandidatePasses.map(pass => [pass.id, pass]));
const discoveredById = new Map(discovered.map(pass => [pass.id, pass]));
const pendingById = new Map(pendingNew.map(pass => [pass.id, pass]));
const autoOffline = previouslyPublishedPasses
  .filter(pass => !approvedIds.has(pass.id))
  .map(pass => {
    const discoveredPass = discoveredById.get(pass.id);
    let reason = 'not-in-current-active-source';
    const quality = hiddenByQuality.find(item => item.id === pass.id);
    if (quality) reason = `quality-hidden:${quality.issues.join(',')}`;
    else if (pendingById.has(pass.id)) reason = 'changed-sales-period-awaiting-approval';
    else if (discoveredPass && !discoveredPass.include) reason = discoveredPass.status;
    else if (candidateById.has(pass.id)) reason = 'approval-missing';
    return {
      id: pass.id,
      name: pass.name,
      company: pass.company,
      region: pass.region,
      salesPeriod: pass.salesPeriod,
      endDate: sourceResearch.passes[pass.id]?.endDate || pass.endDate,
      relatedUrl: pass.relatedUrl,
      reason,
    };
  });

const categoryCounts = Object.fromEntries(DIRECTORY_PASS_CATEGORIES.map(category => [
  category,
  approvedPasses.filter(ticket => ticket.category === category).length,
]));

const header = `// Generated by scripts/sync-biglobe-directory.mjs on ${SNAPSHOT_DATE}.\n// BIGLOBE is a discovery source; visitor-facing records use on-site detail pages.\n\n`;
const output = `${header}import type { MajorRegion } from '@/types/pass';\n\nexport type DomesticPassCategory = 'national' | 'regional' | 'city' | 'bus' | 'private' | 'special';\n\nexport type DomesticDirectoryPass = {\n  id: string;\n  name: string;\n  company: string;\n  region: MajorRegion | '全国';\n  majorRegions: MajorRegion[]; // 目录大区候选，并非已核实的可乘车区间\n  category: DomesticPassCategory;\n  salesPeriod: string;\n  status: 'on-sale' | 'scheduled' | 'needs-review';\n  sourceDetailUrl: string;\n  relatedUrl?: string;\n  officialSourceKind?: 'exact-product' | 'operator-overview';\n  relatedUrlCorrected?: boolean;\n  priceText?: string;\n  validityText?: string;\n  usePeriodText?: string;\n  salesLocationText?: string;\n  startDate?: string;\n  endDate?: string;\n};\n\nexport const DOMESTIC_DIRECTORY_SNAPSHOT_DATE = ${JSON.stringify(SNAPSHOT_DATE)};\nexport const DOMESTIC_DIRECTORY_CATEGORY_RULE_VERSION = ${JSON.stringify(DIRECTORY_PASS_CATEGORY_RULE_VERSION)};\nexport const DOMESTIC_DIRECTORY_PASSES: DomesticDirectoryPass[] = ${JSON.stringify(approvedPasses, null, 2)};\n`;

fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
fs.mkdirSync(path.dirname(REPORT_FILE), { recursive: true });
fs.writeFileSync(OUTPUT_FILE, output);
fs.writeFileSync(DIRECTORY_CANDIDATES_FILE, `${JSON.stringify({
  generatedAt: new Date().toISOString(),
  snapshotDate: SNAPSHOT_DATE,
  candidates: candidatePasses.map(pass => ({
    ...pass,
    approvalFingerprint: publicationFingerprint(pass),
  })),
}, null, 2)}\n`);
fs.writeFileSync(PUBLICATION_REVIEW_FILE, `${JSON.stringify({
  generatedAt: new Date().toISOString(),
  snapshotDate: SNAPSHOT_DATE,
  counts: {
    activeCandidates: eligibleCandidatePasses.length,
    published: approvedPasses.length,
    pendingApproval: pendingNew.length,
    autoOffline: autoOffline.length,
    hiddenByQuality: hiddenByQuality.length,
    revokedApprovals: revokedApprovals.length,
  },
  pendingApproval: pendingNew,
  hiddenByQuality,
  autoOffline,
}, null, 2)}\n`);
const priorHistory = fs.existsSync(PUBLICATION_HISTORY_FILE)
  ? JSON.parse(fs.readFileSync(PUBLICATION_HISTORY_FILE, 'utf8'))
  : { schemaVersion: 1, events: [] };
const newEvents = autoOffline.map(pass => ({ ...pass, detectedAt: new Date().toISOString(), snapshotDate: SNAPSHOT_DATE }));
const eventMap = new Map([...priorHistory.events, ...newEvents].map(event => [
  [event.id, event.reason, event.endDate || '', event.salesPeriod || ''].join('|'),
  event,
]));
fs.writeFileSync(PUBLICATION_HISTORY_FILE, `${JSON.stringify({ schemaVersion: 1, events: [...eventMap.values()] }, null, 2)}\n`);
const report = {
  snapshotDate: SNAPSHOT_DATE,
  discoverySource: BASE_URL,
  regionalIndexes: indexResults.map(({ region, url, tickets }) => ({ region, url, discovered: tickets.length, included: tickets.filter(ticket => ticket.include).length })),
  discoveredRows: discovered.length,
  excludedEnded: discovered.filter(ticket => !ticket.include).length,
  includedBeforeDeduplication: activeCandidates.length,
  includedAfterDeduplication: candidatePasses.length,
  excludedByOfficialSource: officialEndedIds.size,
  eligibleAfterOfficialCheck: eligibleCandidatePasses.length,
  publishedAfterApproval: approvedPasses.length,
  pendingApproval: pendingNew.length,
  autoOffline: autoOffline.length,
  hiddenByQuality: hiddenByQuality.length,
  revokedApprovals: revokedApprovals.length,
  categoryRuleVersion: DIRECTORY_PASS_CATEGORY_RULE_VERSION,
  categoryCounts,
  withRelatedUrl: approvedPasses.filter(ticket => ticket.relatedUrl).length,
  correctedOfficialUrls: approvedPasses.filter(ticket => ticket.relatedUrlCorrected).length,
  exactProductSources: approvedPasses.filter(ticket => ticket.officialSourceKind === 'exact-product').length,
  operatorOverviewSources: approvedPasses.filter(ticket => ticket.officialSourceKind === 'operator-overview').length,
  needsReview: approvedPasses.filter(ticket => ticket.status === 'needs-review').length,
  detailFailures,
};
fs.writeFileSync(REPORT_FILE, `${JSON.stringify(report, null, 2)}\n`);
console.log(`BIGLOBE directory: ${report.discoveredRows} rows, ${report.excludedEnded} ended/expired excluded, ${report.includedAfterDeduplication} discovery candidates found.`);
console.log(`${report.excludedByOfficialSource} additional pass(es) excluded because the official source shows the product ended.`);
console.log(`${report.publishedAfterApproval} approved passes published; ${report.pendingApproval} await approval; ${report.autoOffline} removed automatically.`);
console.log(`${report.hiddenByQuality} passes hidden by the exact-official-source policy; ${report.revokedApprovals} stale approvals revoked.`);
console.log(`${report.withRelatedUrl} entries include a related operator/issuer URL; ${report.needsReview} require date review.`);
console.log(`${report.correctedOfficialUrls} entries use repaired official-source URLs (${report.exactProductSources} exact product, ${report.operatorOverviewSources} operator overview).`);
console.log(`Data: ${path.relative(process.cwd(), OUTPUT_FILE)} | Report: ${path.relative(process.cwd(), REPORT_FILE)}`);
