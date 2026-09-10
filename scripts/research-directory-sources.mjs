import fs from 'node:fs';
import {
  DIRECTORY_CANDIDATES_FILE,
  SOURCE_RESEARCH_FILE,
  readGeneratedDirectory,
  readSourceResearch,
} from './lib/directory-publication.mjs';

const checkedAt = new Date().toISOString();
const USER_AGENT = 'FindMyRailPass source-audit/1.0 (+local catalog maintenance)';
const BLOCKED_SEARCH_HOSTS = /(biglobe\.ne\.jp|wikipedia\.org|jorudan\.co\.jp|rakuten\.|jalan\.|ameblo\.jp|note\.com|facebook\.com|instagram\.com|x\.com)$/i;

const MANUAL_RESEARCH_RECORDS = {
  jrsikoku67: {
    status: 'ended',
    url: 'https://www.jr-eki.com/ticket/brand/2-5IM',
    kind: 'exact-product',
    endDate: '2026-03-31',
    note: 'JR四国公式ページで発売終了日2026-03-30、利用終了日2026-03-31を確認。公開対象から除外する。',
  },
  mizuma01: {
    status: 'verified',
    url: 'https://www.suitetsu.com/train/infomation/',
    kind: 'operator-overview',
    note: '水間鉄道公式の鉄道案内。現行の個別商品ページを確認できないため、運行会社概要として扱う。',
  },
  nagasaki02: {
    status: 'verified',
    url: 'https://www.naga-den.com/pages/11/',
    kind: 'exact-product',
    note: '長崎電気軌道公式の24時間乗車券案内。旧URL /publics/index/11/ を置換。',
  },
  nagasaki04: {
    status: 'verified',
    url: 'https://www.city.nagasaki.lg.jp/page/64856.html',
    kind: 'exact-product',
    note: '長崎市公式の路面電車×乗合タクシー24時間券案内。',
  },
  maihama01: {
    status: 'broken',
    url: 'https://www.tokyodisneyresort.jp/tdr/resortline/fare/',
    kind: 'exact-product',
    note: '公式の商品ページだが、日次リンク検査でタイムアウトするため公開対象から一時除外。',
  },
};

for (const id of ['solaseed01', 'solaseed02', 'solaseed03', 'solaseed04', 'solaseed05']) {
  MANUAL_RESEARCH_RECORDS[id] = {
    status: 'broken',
    url: 'https://www.solaseedair.jp/promotion/jrkyushu-freeticket/?krt=service-inflight',
    kind: 'exact-product',
    note: '公式の商品ページだが、日次リンク検査でHTTP 500になるため公開対象から一時除外。',
  };
}

function cleanHtml(value = '') {
  return value
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(?:nbsp|ensp|emsp);/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/\s+/g, ' ')
    .trim();
}

function normalize(value = '') {
  return String(value).normalize('NFKC').toLowerCase().replace(/[\s・･ー\-‐‑–—―~〜～()（）\[\]【】「」『』<>＜＞\/:：・,，.。'"“”‘’]/g, '');
}

function decodeBody(buffer, contentType = '') {
  const charset = contentType.match(/charset\s*=\s*["']?([^;"'\s]+)/i)?.[1]?.toLowerCase();
  const label = /shift[_-]?jis|sjis|windows-31j/.test(charset || '') ? 'shift_jis' : 'utf-8';
  try { return new TextDecoder(label).decode(buffer); } catch { return new TextDecoder().decode(buffer); }
}

async function fetchPage(url) {
  const started = Date.now();
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      headers: { 'user-agent': USER_AGENT, accept: 'text/html,application/xhtml+xml,application/pdf;q=0.8,*/*;q=0.5' },
      signal: AbortSignal.timeout(18000),
    });
    const contentType = response.headers.get('content-type') || '';
    const buffer = await response.arrayBuffer();
    const html = /html|text|xml/i.test(contentType) ? decodeBody(buffer, contentType) : '';
    return {
      reachable: response.ok,
      status: response.status,
      finalUrl: response.url,
      text: cleanHtml(html),
      latencyMs: Date.now() - started,
    };
  } catch (error) {
    return {
      reachable: false,
      status: 0,
      error: error instanceof Error ? error.message : String(error),
      latencyMs: Date.now() - started,
      text: '',
    };
  }
}

function candidateLinks(html) {
  const links = [];
  for (const match of html.matchAll(/class=["'][^"']*result__a[^"']*["'][^>]*href=["']([^"']+)["']/gi)) {
    const decoded = match[1].replace(/&amp;/g, '&');
    try {
      const parsed = new URL(decoded, 'https://duckduckgo.com');
      const target = parsed.searchParams.get('uddg') || parsed.href;
      const host = new URL(target).hostname.replace(/^www\./, '');
      if (/^https?:/i.test(target) && !BLOCKED_SEARCH_HOSTS.test(host)) links.push(target);
    } catch { /* Ignore malformed search result URLs. */ }
  }
  return [...new Set(links)].slice(0, 5);
}

async function searchOfficialCandidate(pass) {
  const query = `\"${pass.name}\" ${pass.company} 公式`;
  try {
    const response = await fetch(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`, {
      headers: { 'user-agent': USER_AGENT },
      signal: AbortSignal.timeout(15000),
    });
    const html = await response.text();
    for (const url of candidateLinks(html)) {
      const page = await fetchPage(url);
      const body = normalize(page.text);
      if (!page.reachable || !body.includes(normalize(pass.name))) continue;
      return {
        query,
        suggestedUrl: page.finalUrl || url,
        suggestionHttpStatus: page.status,
        note: body.includes(normalize(pass.company))
          ? '名称と運行会社名が一致する候補。公開情報へ採用する前に管理画面で人が確認してください。'
          : '名称が一致する候補。公式性を人が確認してください。',
      };
    }
    return { query, note: '検索したが、名称を本文で確認できる公式候補を特定できなかった。' };
  } catch (error) {
    return { query, note: `検索失敗: ${error instanceof Error ? error.message : String(error)}` };
  }
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

const candidates = fs.existsSync(DIRECTORY_CANDIDATES_FILE)
  ? JSON.parse(fs.readFileSync(DIRECTORY_CANDIDATES_FILE, 'utf8')).candidates
  : readGeneratedDirectory();
const previous = readSourceResearch();
const pageCache = new Map();
const fetchCached = url => {
  if (!pageCache.has(url)) pageCache.set(url, fetchPage(url));
  return pageCache.get(url);
};

const results = await mapWithConcurrency(candidates, 8, async pass => {
  const manual = MANUAL_RESEARCH_RECORDS[pass.id];
  if (manual) return [pass.id, { ...manual, checkedAt, originalUrl: pass.relatedUrl }];

  if (!pass.relatedUrl) {
    const searched = await searchOfficialCandidate(pass);
    return [pass.id, { status: 'unresolved', checkedAt, originalUrl: null, ...searched }];
  }

  const page = await fetchCached(pass.relatedUrl);
  const body = normalize(page.text);
  const nameMatches = normalize(pass.name).length >= 3 && body.includes(normalize(pass.name));
  const companyMatches = normalize(pass.company).length >= 3 && body.includes(normalize(pass.company));
  if (page.reachable && nameMatches) {
    return [pass.id, {
      status: 'verified',
      checkedAt,
      url: page.finalUrl || pass.relatedUrl,
      originalUrl: pass.relatedUrl,
      kind: 'exact-product',
      httpStatus: page.status,
      note: '参照ページ本文で券名を確認。',
    }];
  }
  if (page.reachable && companyMatches) {
    return [pass.id, {
      status: 'verified',
      checkedAt,
      url: page.finalUrl || pass.relatedUrl,
      originalUrl: pass.relatedUrl,
      kind: 'operator-overview',
      httpStatus: page.status,
      note: '公式運行会社名は確認できたが、券名の完全一致は確認できないため会社概要として扱う。',
    }];
  }

  const searched = await searchOfficialCandidate(pass);
  return [pass.id, {
    status: page.reachable ? 'unresolved' : 'broken',
    checkedAt,
    originalUrl: pass.relatedUrl,
    httpStatus: page.status,
    error: page.error,
    ...searched,
  }];
});

const researchedPasses = Object.fromEntries(results);
for (const [id, record] of Object.entries(previous.passes || {})) {
  if (!researchedPasses[id] && record.status === 'verified') researchedPasses[id] = record;
}

const output = {
  schemaVersion: 1,
  checkedAt,
  counts: {
    total: candidates.length,
    verified: Object.values(researchedPasses).filter(item => item.status === 'verified').length,
    ended: Object.values(researchedPasses).filter(item => item.status === 'ended').length,
    unresolved: Object.values(researchedPasses).filter(item => item.status === 'unresolved').length,
    broken: Object.values(researchedPasses).filter(item => item.status === 'broken').length,
    suggested: Object.values(researchedPasses).filter(item => item.suggestedUrl).length,
  },
  passes: researchedPasses,
};
fs.mkdirSync('data', { recursive: true });
fs.writeFileSync(SOURCE_RESEARCH_FILE, `${JSON.stringify(output, null, 2)}\n`);
console.log(`Source research: ${output.counts.verified} verified, ${output.counts.ended} officially ended, ${output.counts.unresolved} unresolved, ${output.counts.broken} broken, ${output.counts.suggested} search suggestions.`);
console.log(`Report data: ${SOURCE_RESEARCH_FILE}`);
