'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AlertTriangle, ArrowRight, CalendarDays, ExternalLink, MapPin, ReceiptJapaneseYen, Search, Ticket, Users } from 'lucide-react';
import type { JRPass } from '@/types/pass';
import { DOMESTIC_DIRECTORY_PASSES } from '@/data/domesticPassDirectory';
import { resolveDirectoryOfficialSource } from '@/data/directoryOfficialSourceOverrides';
import { DIRECTORY_PASS_CATEGORY_ORDER, getDirectoryPassCategoryLabel } from '@/lib/directoryPassCategories';
import { createPassCatalog, getCatalogDetailHref, isDirectoryPass, searchCalculatorCatalog, searchCatalogByKeyword, type CalculatorMatch } from '@/lib/passCatalog';
import { event } from '@/lib/analytics';
import { getPassImage } from '@/lib/passImages';
import { getRegionLabel } from '@/lib/regionLabels';

interface AdvancedCalculatorProps {
  passes: JRPass[];
  lang?: string;
}

const RESULT_PAGE_SIZE = 4;
const regions = ['全国', '北海道', '東北', '関東', '東海', '北信越', '近畿', '中国', '四国', '九州'];
const copy = {
  zh: {
    search: '搜索周游券', placeholder: '券名、运营方或地区，例如：札幌、箱根、JR', category: '票券类别', allCategories: '全部类别', local: '地方券',
    suggestions: '关键词匹配', suggestionCount: '找到 {count} 张，显示前 {shown} 张；按 Enter 可查看全部匹配结果', noSuggestion: '没有找到对应票券，请尝试更短的关键词。',
    origin: '主要出发地区（可选）', destination: '主要旅行地区', anyOrigin: '不限出发地区', allRegions: '全部地区',
    days: '旅行天数', travelers: '成人旅客人数', children: '儿童旅客人数', person: '人', day: '天',
    budget: '普通票总预算（可选）', budgetHint: '请输入所有成人及儿童的普通票合计。仅对有明确成人／儿童价格的票券显示差额；地方券价格、儿童年龄条件及实际覆盖线路请到官网确认。',
    compare: '搜索全站周游券并比较', catalog: '搜索范围：{total} 张票券，包含官方来源票券及地方券。留空关键词、选择全部地区和类别，即可浏览全部。',
    results: '全站周游券搜索结果', resultCount: '在 {total} 张票券中找到 {matched} 张，已显示 {shown} 张',
    resultDesc: '按地区匹配及已知有效天数排序。地方券按目录收录地区列为候选，不代表已确认覆盖您的行程。',
    official: '官方来源票券', directory: '地方券目录 · 待核验', passTotal: '所选人数票价合计', recordedPrice: '目录记录价格', unknownPrice: '价格待确认', noCalculation: '暂不计算总价及预算差额',
    budgetDiffSave: '比输入预算低', budgetDiffMore: '比输入预算高', validity: '有效期', sales: '销售期',
    details: '查看站内详情', buy: '官方网站', more: '显示更多（剩余 {count} 张）', noResults: '没有找到匹配的票券。试试缩短关键词，或把地区、类别切换为全部。',
    disclaimer: '预算差额不等于实际节省金额，不含未覆盖路段、追加费用或有效期外的车费。季节券、销售状态、利用资格及最终价格请以官网为准。',
    reasons: { regionMatch: '官方范围包含旅行地区', nationalMatch: '全国型票券，请核对具体线路', originMatch: '官方范围也包含出发地区', daysFit: '有效天数与行程相同', daysShort: '有效期短于行程，需集中使用', daysLong: '有效期长于行程', directoryRegion: '按目录收录地区匹配', directoryBroad: '全国／跨区目录，实际范围待核验', directoryReview: '价格、日期及利用条件待官网核验' },
  },
  en: {
    search: 'Search rail passes', placeholder: 'Pass name, operator or region, e.g. JR, Hokkaido', category: 'Pass category', allCategories: 'All categories', local: 'Local passes',
    suggestions: 'Keyword matches', suggestionCount: '{count} found · Showing the first {shown}; press Enter to view all matches', noSuggestion: 'No matching pass. Try a shorter keyword.',
    origin: 'Primary origin (optional)', destination: 'Primary travel region', anyOrigin: 'Any origin', allRegions: 'All regions',
    days: 'Trip length', travelers: 'Adult travellers', children: 'Child travellers', person: 'traveller(s)', day: 'day(s)',
    budget: 'Total regular-ticket budget (optional)', budgetHint: 'Include regular tickets for all adults and children. Differences are shown only when the required fares are available. Confirm local fares, child age limits and route coverage with the operator.',
    compare: 'Search and compare all passes', catalog: 'Search {total} passes from official sources and the local directory. Leave keywords blank and select all regions and categories to see every pass.',
    results: 'Site-wide pass results', resultCount: '{matched} matches out of {total} passes · Showing {shown}',
    resultDesc: 'Sorted by region match and known validity. Local passes are candidates based on their directory region, not confirmed coverage of your itinerary.',
    official: 'Official-source pass', directory: 'Local directory · Check details', passTotal: 'Pass total for your group', recordedPrice: 'Directory-listed price', unknownPrice: 'Price to be confirmed', noCalculation: 'Total and budget difference not calculated',
    budgetDiffSave: 'below your budget', budgetDiffMore: 'above your budget', validity: 'Validity', sales: 'Sales period',
    details: 'View on-site details', buy: 'Official website', more: 'Show more ({count} remaining)', noResults: 'No matching passes. Try fewer keywords, all regions or all categories.',
    disclaimer: 'A budget difference is not guaranteed savings. Uncovered routes, surcharges and travel outside the validity period are excluded. Check seasonal availability, eligibility and final prices on the official website.',
    reasons: { regionMatch: 'Official area includes the travel region', nationalMatch: 'Nationwide pass; check individual routes', originMatch: 'Official area also includes the origin', daysFit: 'Validity matches trip length', daysShort: 'Shorter validity; concentrate travel days', daysLong: 'Validity is longer than the trip', directoryRegion: 'Matched by directory region', directoryBroad: 'National / cross-region directory; coverage unconfirmed', directoryReview: 'Confirm fares, dates and eligibility with the operator' },
  },
  ja: {
    search: '周遊券を検索', placeholder: 'きっぷ名・運行会社・地域（例：札幌、箱根、JR）', category: 'きっぷの種類', allCategories: 'すべての種類', local: '地方きっぷ',
    suggestions: 'キーワードの候補', suggestionCount: '{count} 件中、先頭 {shown} 件を表示。Enter で該当結果をすべて表示', noSuggestion: '該当するきっぷがありません。短いキーワードをお試しください。',
    origin: '主な出発エリア（任意）', destination: '主な旅行エリア', anyOrigin: '出発エリアを指定しない', allRegions: 'すべての地域',
    days: '旅行日数', travelers: '大人人数', children: '子供人数', person: '人', day: '日',
    budget: '通常きっぷ合計予算（任意）', budgetHint: '大人・子供全員分の通常きっぷ合計を入力してください。必要な運賃が明確なパスのみ差額を表示します。地方きっぷの運賃、子供の年齢条件、利用区間は公式サイトでご確認ください。',
    compare: '全サイトの周遊券を検索・比較', catalog: '公式情報のパスと地方きっぷ、計 {total} 件を検索。キーワードを空欄にし、地域と種類を「すべて」にすると全件表示できます。',
    results: '全サイトの周遊券検索結果', resultCount: '全 {total} 件中 {matched} 件が該当 · {shown} 件表示中',
    resultDesc: '地域の一致と確認済みの有効日数で並べ替えます。地方きっぷは掲載地域による候補であり、旅程全体の利用可否を保証しません。',
    official: '公式情報のパス', directory: '地方きっぷ一覧 · 要確認', passTotal: '選択人数分のパス合計', recordedPrice: '目録の記載価格', unknownPrice: '価格は要確認', noCalculation: '合計・予算差額は未計算',
    budgetDiffSave: '入力予算より安い', budgetDiffMore: '入力予算より高い', validity: '有効期間', sales: '発売期間',
    details: 'サイト内の詳細を見る', buy: '公式サイト', more: 'さらに表示（残り {count} 件）', noResults: '該当するきっぷがありません。キーワードを減らすか、地域・種類を「すべて」に変更してください。',
    disclaimer: '予算との差額は実際の節約額ではありません。対象外区間、追加料金、有効期間外の運賃は含みません。季節限定券の発売状況、利用資格、最終価格は公式サイトでご確認ください。',
    reasons: { regionMatch: '公式の利用範囲に旅行エリアを含む', nationalMatch: '全国型パス・個別の路線を要確認', originMatch: '公式の利用範囲に出発エリアも含む', daysFit: '有効日数と旅行日数が一致', daysShort: '旅行より有効期間が短いため集中利用が必要', daysLong: '旅行より有効期間が長い', directoryRegion: '目録の掲載地域で一致', directoryBroad: '全国・広域の目録掲載券、実際の範囲は要確認', directoryReview: '価格・日付・利用条件を公式サイトで要確認' },
  },
};

export default function AdvancedCalculator({ passes, lang = 'zh' }: AdvancedCalculatorProps) {
  const locale = lang === 'en' || lang === 'ja' ? lang : 'zh';
  const t = copy[locale];
  const catalog = useMemo(() => createPassCatalog(passes, DOMESTIC_DIRECTORY_PASSES), [passes]);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('all');
  const [query, setQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [category, setCategory] = useState('all');
  const [tripDays, setTripDays] = useState(7);
  const [travellers, setTravellers] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [ticketBudget, setTicketBudget] = useState('');
  const [results, setResults] = useState<CalculatorMatch[] | null>(null);
  const [visibleCount, setVisibleCount] = useState(RESULT_PAGE_SIZE);
  const resultsRef = useRef<HTMLDivElement>(null);
  const keywordMatches = useMemo(() => searchCatalogByKeyword(catalog, query), [catalog, query]);
  const keywordSuggestions = keywordMatches.slice(0, 6);

  useEffect(() => {
    if (results === null) return;
    // A fresh search starts at the results heading. Expanding more results must
    // preserve the reader's position, so visibleCount is not a dependency.
    resultsRef.current?.focus({ preventScroll: true });
    resultsRef.current?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });
  }, [results]);

  const comparePasses = () => {
    const budget = Number(ticketBudget) > 0 ? Number(ticketBudget) : undefined;
    setResults(searchCalculatorCatalog(catalog, { origin, destination, query, category, tripDays, adults: travellers, children: childrenCount, budget }));
    setVisibleCount(RESULT_PAGE_SIZE);
    event({ action: 'pass_fit_calculated', category: 'calculator', label: `${origin}:${destination}:${tripDays}:${childrenCount}:${budget ? 'with_budget' : 'fit_only'}` });
  };

  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
      <form onSubmit={(e) => { e.preventDefault(); comparePasses(); }} onChange={() => { setResults(null); setVisibleCount(RESULT_PAGE_SIZE); }} className="grid gap-5 p-6 sm:grid-cols-2 sm:p-9 lg:grid-cols-3">
        <div
          className="relative z-20 sm:col-span-2"
          onFocusCapture={() => setSearchOpen(true)}
          onBlurCapture={(event) => {
            const nextTarget = event.relatedTarget as Node | null;
            if (!nextTarget || !event.currentTarget.contains(nextTarget)) setSearchOpen(false);
          }}
        >
          <label htmlFor="pass-keyword" className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700">
            <Search className="h-4 w-4" />{t.search}
          </label>
          <input
            id="pass-keyword"
            type="search"
            role="combobox"
            value={query}
            onChange={(event) => { setQuery(event.target.value); setSearchOpen(true); }}
            onKeyDown={(event) => { if (event.key === 'Enter' && event.nativeEvent.isComposing) event.preventDefault(); }}
            onClick={() => setSearchOpen(true)}
            placeholder={t.placeholder}
            aria-expanded={searchOpen && query.trim().length > 0}
            aria-controls="pass-keyword-suggestions"
            autoComplete="off"
            className="field-select"
          />
          {searchOpen && query.trim().length > 0 && (
            <div id="pass-keyword-suggestions" aria-label={t.suggestions} className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.18)]">
              {keywordSuggestions.length > 0 ? (
                <>
                  <p className="border-b border-slate-100 bg-slate-50 px-4 py-2 text-xs font-semibold leading-5 text-slate-600">
                    {t.suggestionCount.replace('{count}', keywordMatches.length.toLocaleString()).replace('{shown}', keywordSuggestions.length.toLocaleString())}
                  </p>
                  <div className="max-h-[22rem] overflow-y-auto">
                    {keywordSuggestions.map(pass => {
                      const directory = isDirectoryPass(pass);
                      const name = directory ? pass.name : locale === 'en' ? pass.name.en : locale === 'ja' ? pass.name.jp : pass.name.cn;
                      const region = directory ? pass.region : pass.coverage.regions.map(value => getRegionLabel(value, locale)).join(' / ');
                      return (
                        <Link
                          key={directory ? `directory:${pass.id}` : `verified:${pass.id}`}
                          href={getCatalogDetailHref(pass, locale)}
                          onClick={() => setSearchOpen(false)}
                          className="group flex min-w-0 items-center gap-3 border-b border-slate-100 p-3 last:border-0 hover:bg-primary/5 focus:bg-primary/5 focus:outline-none"
                        >
                          <span className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                            <Image src={getPassImage(pass)} alt="" fill sizes="80px" className="object-cover transition duration-300 group-hover:scale-105" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-sm font-bold text-slate-950 group-hover:text-primary-dark">{name}</span>
                            <span className="mt-1 block truncate text-xs text-slate-500">{pass.company} · {region}</span>
                          </span>
                          <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-primary" />
                        </Link>
                      );
                    })}
                  </div>
                </>
              ) : <p className="px-4 py-4 text-sm text-slate-600">{t.noSuggestion}</p>}
            </div>
          )}
        </div>
        <Field label={t.category} icon={<Ticket className="h-4 w-4" />}>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="field-select">
            <option value="all">{t.allCategories}</option>
            {DIRECTORY_PASS_CATEGORY_ORDER.map(value => <option key={value} value={value}>{getDirectoryPassCategoryLabel(value, locale)}</option>)}
            {catalog.some(pass => pass.category === 'local') && <option value="local">{t.local}</option>}
          </select>
        </Field>
        <Field label={t.origin} icon={<MapPin className="h-4 w-4" />}>
          <select value={origin} onChange={(e) => setOrigin(e.target.value)} className="field-select"><option value="">{t.anyOrigin}</option>{regions.filter(r => r !== '全国').map(r => <option key={r} value={r}>{getRegionLabel(r, locale)}</option>)}</select>
        </Field>
        <Field label={t.destination} icon={<MapPin className="h-4 w-4" />}>
          <select value={destination} onChange={(e) => setDestination(e.target.value)} className="field-select"><option value="all">{t.allRegions}</option>{regions.map(r => <option key={r} value={r}>{getRegionLabel(r, locale)}</option>)}</select>
        </Field>
        <Field label={t.days} icon={<CalendarDays className="h-4 w-4" />}>
          <select value={tripDays} onChange={(e) => setTripDays(Number(e.target.value))} className="field-select">{[1,2,3,4,5,6,7,8,10,14,21].map(n => <option key={n} value={n}>{n} {t.day}</option>)}</select>
        </Field>
        <Field label={t.travelers} icon={<Users className="h-4 w-4" />}>
          <select value={travellers} onChange={(e) => setTravellers(Number(e.target.value))} className="field-select">{[1,2,3,4,5].map(n => <option key={n} value={n}>{n} {t.person}</option>)}</select>
        </Field>
        <Field label={t.children} icon={<Users className="h-4 w-4" />}>
          <select value={childrenCount} onChange={(e) => setChildrenCount(Number(e.target.value))} className="field-select">{[0,1,2,3,4,5].map(n => <option key={n} value={n}>{n} {t.person}</option>)}</select>
        </Field>
        <Field label={t.budget} icon={<ReceiptJapaneseYen className="h-4 w-4" />}>
          <div className="relative"><span aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">¥</span><input inputMode="numeric" value={ticketBudget} onChange={(e) => setTicketBudget(e.target.value.replace(/\D/g, ''))} placeholder="50000" className="field-select" style={{ paddingLeft: '2.5rem' }} /></div>
        </Field>
        <p className="text-xs leading-5 text-slate-500 sm:col-span-2 lg:col-span-3">{t.budgetHint}</p>
        <p className="rounded-xl bg-primary/10 p-3 text-sm leading-6 text-slate-700 sm:col-span-2 lg:col-span-3">{t.catalog.replace('{total}', catalog.length.toLocaleString())}</p>
        <button type="submit" className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-4 shadow-lg sm:col-span-2 lg:col-span-3">
          {t.compare}<ArrowRight className="h-5 w-5" />
        </button>
      </form>

      {results !== null && <div ref={resultsRef} id="calculator-results" role="region" aria-labelledby="calculator-results-title" tabIndex={-1} className="scroll-mt-24 border-t border-slate-200 bg-[#f7f6f2] p-6 outline-none sm:p-9">
        <h3 id="calculator-results-title" className="text-2xl font-bold text-slate-950">{t.results}</h3>
        <p role="status" className="mt-2 font-semibold text-primary-dark">{t.resultCount.replace('{total}', catalog.length.toLocaleString()).replace('{matched}', results.length.toLocaleString()).replace('{shown}', Math.min(visibleCount, results.length).toLocaleString())}</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{t.resultDesc}</p>

        {results.length ? <div className="mt-6 grid gap-4">{results.slice(0, visibleCount).map(result => {
          const pass = result.pass;
          const directory = isDirectoryPass(pass);
          const name = directory ? pass.name : locale === 'en' ? pass.name.en : locale === 'ja' ? pass.name.jp : pass.name.cn;
          const detailHref = getCatalogDetailHref(pass, locale);
          const officialUrl = directory ? resolveDirectoryOfficialSource(pass).url : pass.purchaseLinks?.find(link => link.type === 'official')?.url || pass.officialLinks[0]?.url;
          return <article key={result.key} className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="relative -mx-5 -mt-5 mb-5 h-40 overflow-hidden border-b border-slate-100 bg-slate-100 sm:-mx-6 sm:-mt-6 sm:h-48">
              <Image src={getPassImage(pass)} alt={name} fill sizes="(min-width: 1024px) 56rem, 100vw" className="object-cover transition-transform duration-500 hover:scale-105" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
            </div>
            <div className="flex flex-col justify-between gap-5 md:flex-row">
              <div className="min-w-0 flex-1">
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${directory ? 'bg-amber-50 text-amber-900' : 'bg-teal-50 text-teal-800'}`}>{directory ? t.directory : t.official}</span>
                <h4 className="mt-3 break-words text-xl font-bold text-slate-950"><Link href={detailHref} className="hover:text-primary-dark hover:underline">{name}</Link></h4>
                <p className="mt-2 text-sm text-slate-500">{pass.company} · {directory ? pass.region : pass.coverage.regions.map(value => getRegionLabel(value, locale)).join(' / ')} · {pass.category === 'local' ? t.local : getDirectoryPassCategoryLabel(pass.category, locale)}</p>
                <p className="mt-2 text-sm text-slate-600">{t.validity}: {directory ? pass.validityText || '—' : `${pass.duration.join(' / ')} ${t.day}`}</p>
                {directory && <p className="mt-1 text-sm text-slate-600">{t.sales}: {pass.salesPeriod || '—'}</p>}
                <ul className="mt-4 flex flex-wrap gap-2">{result.reasons.map(reason => <li key={reason} className="rounded-xl bg-slate-100 px-3 py-1 text-xs leading-5 text-slate-700">{t.reasons[reason]}</li>)}</ul>
              </div>
              <div className="min-w-0 md:w-56 md:shrink-0 md:text-right">
                <p className="text-xs font-bold text-slate-500">{directory ? t.recordedPrice : t.passTotal}</p>
                <p className={`mt-1 break-words font-bold text-slate-950 ${directory ? 'text-base leading-7' : 'text-2xl'}`}>{result.totalPassCost !== undefined ? `¥${result.totalPassCost.toLocaleString()}` : directory ? pass.priceText || t.unknownPrice : t.unknownPrice}</p>
                {result.totalPassCost === undefined && <p className="mt-2 text-xs leading-5 text-amber-800">{t.noCalculation}</p>}
                {result.difference !== undefined && <p className={`mt-2 text-sm font-semibold ${result.difference >= 0 ? 'text-teal-700' : 'text-rose-700'}`}>¥{Math.abs(result.difference).toLocaleString()} {result.difference >= 0 ? t.budgetDiffSave : t.budgetDiffMore}</p>}
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
              {officialUrl && <a href={officialUrl} target="_blank" rel="noopener noreferrer" onClick={() => event({ action: 'outbound_click', category: 'calculator_official', label: pass.id })} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-sm font-bold text-slate-700 hover:border-primary">{t.buy}<ExternalLink className="h-4 w-4" /></a>}
              <Link href={detailHref} className="btn-primary inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold">{t.details}<ArrowRight className="h-4 w-4" /></Link>
            </div>
          </article>;
        })}</div> : <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">{t.noResults}</p>}

        {visibleCount < results.length && <button type="button" onClick={() => setVisibleCount(count => count + RESULT_PAGE_SIZE)} className="mt-6 w-full rounded-xl border border-primary px-5 py-3 font-bold text-primary-dark hover:bg-primary/10">{t.more.replace('{count}', (results.length - visibleCount).toLocaleString())}</button>}
        <p className="mt-6 flex gap-2 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-900"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />{t.disclaimer}</p>
      </div>}
    </div>
  );
}

function Field({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) {
  return <label className="block min-w-0"><span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700">{icon}{label}</span>{children}</label>;
}
