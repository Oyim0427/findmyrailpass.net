'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Search,
  ArrowRight,
} from 'lucide-react';
import NavigationSection from '@/components/sections/NavigationSection';
import FooterSection from '@/components/sections/FooterSection';
import PassCard from '@/components/PassCard';
import { createPassCatalog, getCatalogKey } from '@/lib/passCatalog';
import AffiliateOffer from '@/components/AffiliateOffer';
import AdSlot from '@/components/AdSlot';
import { JRPass } from '@/types/pass';
import type { Dictionary } from '@/i18n/dictionaries';
import {
  DOMESTIC_DIRECTORY_PASSES,
  DOMESTIC_DIRECTORY_SNAPSHOT_DATE,
  type DomesticDirectoryPass,
  type DomesticPassCategory,
} from '@/data/domesticPassDirectory';
import {
  DIRECTORY_PASS_CATEGORY_ORDER,
  getDirectoryPassCategoryLabel,
} from '@/lib/directoryPassCategories';
import { getRegionLabel } from '@/lib/regionLabels';

interface PassListClientProps {
  passes: JRPass[];
  lang: string;
  dict: Dictionary;
}

const directoryRegions = ['全国', '北海道', '東北', '関東', '東海', '北信越', '近畿', '中国', '四国', '九州'];
const DIRECTORY_PAGE_SIZE = 9;

const copy = {
  zh: {
    // Tabs
    tabVerified: '已核验周游券',
    tabVerifiedSub: 'JR 及主要区域通票',
    tabDirectory: '地方券与一日券目录',
    tabDirectorySub: '仅显示官网精确产品页',

    // Verified Tab
    title: '已核验的日本铁路周游券',
    desc: '只展示能追溯到 JR 集团或运营公司一手页面的票券。价格与规则仍可能变化，付款前请再次确认。',
    search: '搜索票券、运营公司或地区',
    all: '全部',
    national: '全国券',
    regional: '地区券',
    region: '地区',
    filters: '筛选',
    clear: '清除',
    found: '张符合条件的票券',
    empty: '没有符合当前条件的票券。',
    verified: '运营方来源 · 显示核验日期',

    // Directory Tab
    dirEyebrow: '日本国内自由乘车券扩展目录',
    dirTitle: '不只 JR Pass，还有 {count} 张已核验地方铁路券',
    dirDesc: '仅显示可追溯到运营方官网精确产品页、销售日期明确且链接正常的地方券。点击卡片或右侧按钮查看本站详情，左侧按钮前往官网。',
    dirSource: '查看本站数据说明',
    dirSearch: '搜索券名、运营公司、价格或地区',
    dirCategoryTitle: '按交通类型查找',
    dirAllCategories: '全部',
    dirClear: '清除筛选',
    allRegions: '全部地区',
    onSale: '在售',
    limited: '限定',
    dirFound: '条地方券目录记录',
    dirEmpty: '没有找到符合条件的地方券。',
    price: '目录记录价格',
    validity: '有效期',
    period: '销售期',
    official: '运营方官网',
    officialUnavailable: '官网待补充',
    detail: '站内详情',
    load: '显示更多地方券',
    shown: '已显示',
    of: '共',
    qualityTitle: '地方券的显示标准',
    qualityBody: '只有官网精确产品页、来源核验通过、销售日期明确且链接正常的地方券才会显示。其他记录会在管理端隐藏，修复并经人工确认后才能重新上线。',
    switchTabPrompt: '想查找更多地方铁路、地下铁、一日券？',
    switchTabBtn: '浏览已核验地方券目录',
    snapshot: '数据快照',
  },
  en: {
    tabVerified: 'Verified Passes',
    tabVerifiedSub: 'JR & Major Regional Passes',
    tabDirectory: 'Local Pass Directory',
    tabDirectorySub: 'Exact official product pages only',

    title: 'Verified Japan Rail Passes',
    desc: 'Only passes traceable to JR Group or operator pages. Prices and rules can change; always confirm before payment.',
    search: 'Search pass, operator or region',
    all: 'All',
    national: 'Nationwide',
    regional: 'Regional',
    region: 'Region',
    filters: 'Filters',
    clear: 'Clear',
    found: 'verified passes found',
    empty: 'No passes match the current filters.',
    verified: 'Operator sources · Verification dates shown',

    dirEyebrow: 'Japan domestic free-pass directory',
    dirTitle: '{count} verified local passes beyond the major JR passes',
    dirDesc: 'Only local passes with an exact operator product page, verified source, clear sales dates and a working link are shown. Open the on-site detail from the card or right button; the left button opens the operator site.',
    dirSource: 'Read our data notes',
    dirSearch: 'Search pass, operator, price or region',
    dirCategoryTitle: 'Browse by transport type',
    dirAllCategories: 'All',
    dirClear: 'Clear filters',
    allRegions: 'All regions',
    onSale: 'On sale',
    limited: 'Limited',
    dirFound: 'directory entries',
    dirEmpty: 'No local passes match your query.',
    price: 'Directory price record',
    validity: 'Validity',
    period: 'Sales period',
    official: 'Operator site',
    officialUnavailable: 'Site unavailable',
    detail: 'On-site details',
    load: 'Show more passes',
    shown: 'Showing',
    of: 'of',
    qualityTitle: 'Local-pass publication standard',
    qualityBody: 'A local pass is displayed only when its exact official product page, source, sales dates and link have been verified. Other records stay hidden until corrected and manually approved.',
    switchTabPrompt: 'Looking for regional railways, subways or 1-day passes?',
    switchTabBtn: 'Browse Verified Local Passes',
    snapshot: 'Data snapshot',
  },
  ja: {
    tabVerified: '確認済み周遊パス',
    tabVerifiedSub: 'JR・主要フリーパス',
    tabDirectory: '地方きっぷ一覧',
    tabDirectorySub: '公式の商品ページ確認済みのみ',

    title: '確認済みの日本の鉄道パス',
    desc: 'JR グループまたは運行会社の一次ページに遡れるパスのみ掲載。料金・条件は変わるため購入前に再確認してください。',
    search: 'パス・運行会社・エリアを検索',
    all: 'すべて',
    national: '全国パス',
    regional: '地域パス',
    region: 'エリア',
    filters: '絞り込み',
    clear: 'クリア',
    found: '件の確認済みパス',
    empty: '条件に合うパスがありません。',
    verified: '運行会社情報 · 確認日を表示',

    dirEyebrow: '国内フリーきっぷ一覧',
    dirTitle: '主要な JR パス以外の確認済み地方きっぷ {count} 件',
    dirDesc: '事業者公式の商品ページ、出典、発売日、リンクを確認できた地方きっぷだけを掲載します。カードまたは右ボタンでサイト内詳細、左ボタンで公式サイトを確認できます。',
    dirSource: 'データ方針を見る',
    dirSearch: 'きっぷ名・事業者・料金・地域を検索',
    dirCategoryTitle: '交通タイプから探す',
    dirAllCategories: 'すべて',
    dirClear: '絞り込みを解除',
    allRegions: '全地域',
    onSale: '発売中',
    limited: '限定',
    dirFound: '件の一覧',
    dirEmpty: '条件に一致する地方きっぷが見つかりませんでした。',
    price: '一覧記載の料金',
    validity: '有効期間',
    period: '発売期間',
    official: '事業者公式',
    officialUnavailable: '公式サイト未登録',
    detail: 'サイト内詳細',
    load: 'さらに表示',
    shown: '表示中',
    of: '/',
    qualityTitle: '地方きっぷの掲載基準',
    qualityBody: '公式の商品ページ、出典、発売日、リンクを確認できた地方きっぷだけを表示します。その他は管理側で非表示にし、修正と承認後に掲載します。',
    switchTabPrompt: '地方私鉄や地下鉄の一日乗車券をお探しですか？',
    switchTabBtn: '確認済み地方きっぷを見る',
    snapshot: 'データ更新日',
  },
};

type StatusFilter = 'on-sale' | 'limited';
type DirectoryCategoryFilter = 'all' | DomesticPassCategory;
type EligibilityFilter = 'all' | 'everyone' | 'foreign' | 'youth' | 'senior' | 'child';

export default function PassListClient({ passes, lang, dict }: PassListClientProps) {
  const t = copy[lang as keyof typeof copy] || copy.zh;
  const searchParams = useSearchParams();

  // Unified list of passes
  const allPasses = useMemo(() => createPassCatalog(passes, DOMESTIC_DIRECTORY_PASSES), [passes]);

  // Unified filters
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<DirectoryCategoryFilter>('all');
  const [region, setRegion] = useState('all');
  const [status, setStatus] = useState<StatusFilter>('on-sale');
  const [eligibility, setEligibility] = useState<EligibilityFilter>('all');
  const [visibleCount, setVisibleCount] = useState(DIRECTORY_PAGE_SIZE);

  useEffect(() => {
    const urlRegion = searchParams.get('region');
    if (urlRegion && directoryRegions.includes(urlRegion)) {
      setRegion(urlRegion);
      setCategory('regional');
    }
  }, [searchParams]);

  // Filter Unified Passes
  const filteredPasses = useMemo(() => allPasses.filter(pass => {
    const isDirectory = 'salesPeriod' in pass;
    
    // Query
    let searchable = '';
    if (isDirectory) {
      const dp = pass as DomesticDirectoryPass;
      searchable = [dp.name, dp.company, dp.region, dp.priceText, dp.salesPeriod].filter(Boolean).join(' ').toLowerCase();
    } else {
      const jp = pass as JRPass;
      searchable = [jp.name.cn, jp.name.en, jp.name.jp, jp.company, ...jp.coverage.regions].filter(Boolean).join(' ').toLowerCase();
    }
    const matchesQuery = !query.trim() || searchable.includes(query.trim().toLowerCase());
    
    // Category
    const passCategory = isDirectory ? (pass as DomesticDirectoryPass).category : (pass as JRPass).category;
    const matchesCategory = category === 'all' || passCategory === category;
    
    // Region
    let matchesRegion = true;
    if (region !== 'all') {
      if (isDirectory) {
        matchesRegion = (pass as DomesticDirectoryPass).region === region;
      } else {
        matchesRegion = passCategory === 'national' || (pass as JRPass).coverage.regions.includes(region);
      }
    }
    
    // Scheduled directory passes and explicitly limited official passes share
    // the visitor-facing "limited" filter; records needing review stay hidden.
    const matchesStatus = isDirectory
      ? status === 'on-sale'
        ? (pass as DomesticDirectoryPass).status === 'on-sale'
        : (pass as DomesticDirectoryPass).status === 'scheduled'
      : status === 'on-sale'
        ? !(pass as JRPass).isLimitedPeriod
        : (pass as JRPass).isLimitedPeriod === true;
    
    // Eligibility
    let matchesEligibility = true;
    if (eligibility !== 'all') {
      const targetText = isDirectory 
        ? ((pass as DomesticDirectoryPass).priceText + ' ' + (pass as DomesticDirectoryPass).name).toLowerCase()
        : ((pass as JRPass).targetAudience?.join(' ') + ' ' + (pass as JRPass).name.jp).toLowerCase();
        
      if (eligibility === 'foreign') {
        matchesEligibility = !isDirectory || targetText.includes('訪日') || targetText.includes('外国人') || targetText.includes('tourist');
      } else if (eligibility === 'senior') {
        matchesEligibility = targetText.includes('シニア') || targetText.includes('大人の休日') || targetText.includes('高齢') || targetText.includes('60歳') || targetText.includes('65歳') || targetText.includes('50歳');
      } else if (eligibility === 'youth') {
        matchesEligibility = targetText.includes('u25') || targetText.includes('学生') || targetText.includes('25歳以下') || targetText.includes('18歳') || targetText.includes('u22') || targetText.includes('学割');
      } else if (eligibility === 'child') {
        matchesEligibility = targetText.includes('こどもパス') || targetText.includes('小学生限定') || targetText.includes('キッズ');
      } else if (eligibility === 'everyone') {
        const isForeignOnly = !isDirectory; 
        const isSenior = targetText.includes('シニア') || targetText.includes('大人の休日');
        const isYouth = targetText.includes('u25') || targetText.includes('学生') || targetText.includes('学割');
        const isChildOnly = targetText.includes('こどもパス') || targetText.includes('小学生限定');
        matchesEligibility = !isForeignOnly && !isSenior && !isYouth && !isChildOnly;
      }
    }
    
    return matchesQuery && matchesCategory && matchesRegion && matchesStatus && matchesEligibility;
  }), [allPasses, query, category, region, status, eligibility]);

  const visiblePasses = filteredPasses.slice(0, visibleCount);

  const updateCategory = (value: DirectoryCategoryFilter) => { setCategory(value); setVisibleCount(DIRECTORY_PAGE_SIZE); };
  const updateRegion = (value: string) => { setRegion(value); setVisibleCount(DIRECTORY_PAGE_SIZE); };
  const updateStatus = (value: StatusFilter) => { setStatus(value); setVisibleCount(DIRECTORY_PAGE_SIZE); };
  const updateEligibility = (value: EligibilityFilter) => { setEligibility(value); setVisibleCount(DIRECTORY_PAGE_SIZE); };
  const clearFilters = () => {
    setQuery('');
    setCategory('all');
    setRegion('all');
    setStatus('on-sale');
    setEligibility('all');
    setVisibleCount(DIRECTORY_PAGE_SIZE);
  };
  
  // Combine counts for category tabs
  const combinedCategoryCounts = useMemo(() => {
    const counts = { national: 0, regional: 0, city: 0, bus: 0, private: 0, special: 0 } as Record<DomesticPassCategory, number>;
    allPasses.forEach(pass => {
      const cat = 'salesPeriod' in pass ? (pass as DomesticDirectoryPass).category : (pass as JRPass).category as DomesticPassCategory;
      if (counts[cat] !== undefined) counts[cat]++;
    });
    return counts;
  }, [allPasses]);
  return (
    <div className="min-h-screen">
      <NavigationSection dict={dict} lang={lang} />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <header className="grid gap-8 lg:grid-cols-[1fr_21rem] lg:items-end">
          <div className="max-w-4xl">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              {t.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base sm:text-lg leading-7 text-slate-600">{t.desc}</p>
          </div>
          <div className="rounded-2xl border border-emerald-200 bg-primary-dark p-5 text-emerald-50 shadow-md">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">{t.snapshot}</p>
            <p className="mt-2 text-2xl font-bold">{DOMESTIC_DIRECTORY_SNAPSHOT_DATE}</p>
            <Link
              href={`/${lang}/data-sources`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-emerald-200 transition-colors"
            >
              {t.dirSource}<ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </header>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <label className="relative block">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={event => { setQuery(event.target.value); setVisibleCount(DIRECTORY_PAGE_SIZE); }}
              placeholder={t.dirSearch}
              className="field-select pl-12"
            />
          </label>
          <div className="mt-6 border-t border-slate-100 pt-5">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-sm font-black text-slate-900">{t.dirCategoryTitle}</h2>
              {(query || category !== 'all' || region !== 'all' || status !== 'on-sale' || eligibility !== 'all') && (
                <button onClick={clearFilters} className="shrink-0 text-sm font-bold text-[#c2410c] hover:text-[#9a3412]">
                  {t.dirClear}
                </button>
              )}
            </div>
            <div className="-mx-1 mt-3 flex gap-2 overflow-x-auto px-1 pb-2" aria-label={t.dirCategoryTitle}>
              {(['all', ...DIRECTORY_PASS_CATEGORY_ORDER] as DirectoryCategoryFilter[]).map(value => {
                const active = category === value;
                const count = value === 'all' ? allPasses.length : combinedCategoryCounts[value];
                const label = value === 'all' ? t.dirAllCategories : getDirectoryPassCategoryLabel(value, lang);
                return (
                  <button
                    key={value}
                    onClick={() => updateCategory(value)}
                    aria-pressed={active}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                      active
                        ? 'bg-primary text-white shadow-sm'
                        : 'border border-slate-200 bg-primary/10 text-slate-700 hover:border-emerald-300 hover:bg-primary/10'
                    }`}
                  >
                    <span>{label}</span>
                    <span className={`rounded-full px-2 py-0.5 text-xs ${active ? 'bg-white/15 text-white' : 'bg-white text-slate-500'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <select
              value={region}
              onChange={event => updateRegion(event.target.value)}
              className="field-select max-w-52"
            >
              <option value="all">{t.allRegions}</option>
              {directoryRegions.map(value => <option key={value} value={value}>{getRegionLabel(value, lang)}</option>)}
            </select>
            <select
              value={status}
              onChange={event => updateStatus(event.target.value as StatusFilter)}
              className="field-select max-w-56"
            >
              <option value="on-sale">{t.onSale}</option>
              <option value="limited">{t.limited}</option>
            </select>
            <select
              value={eligibility}
              onChange={event => updateEligibility(event.target.value as EligibilityFilter)}
              className="field-select max-w-56"
            >
              <option value="all">{lang === 'en' ? 'All Eligibilities' : lang === 'ja' ? 'すべての対象者' : '全部适用人群'}</option>
              <option value="everyone">{lang === 'en' ? 'Everyone' : lang === 'ja' ? '誰でも利用可' : '所有人适用'}</option>
              <option value="foreign">{lang === 'en' ? 'Foreigners Only' : lang === 'ja' ? '訪日外国人限定' : '仅限外国游客'}</option>
              <option value="youth">{lang === 'en' ? 'Youth/Student' : lang === 'ja' ? '若者・学生限定' : '青年/学生限定'}</option>
              <option value="senior">{lang === 'en' ? 'Seniors Only' : lang === 'ja' ? 'シニア限定' : '仅限长者'}</option>
              <option value="child">{lang === 'en' ? 'Children Only' : lang === 'ja' ? 'こども限定' : '仅限儿童'}</option>
            </select>
          </div>
        </section>

        <p className="my-7 text-sm font-semibold text-slate-500">
          <span className="text-xl font-bold text-slate-950">{filteredPasses.length}</span> {t.found}
        </p>

        {filteredPasses.length ? (
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visiblePasses.map(pass => (
              <PassCard key={getCatalogKey(pass)} pass={pass} dict={dict} lang={lang} />
            ))}
          </section>
        ) : (
          <p className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-600">{t.empty}</p>
        )}

        {visiblePasses.length < filteredPasses.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount(count => count + DIRECTORY_PAGE_SIZE)}
              className="rounded-xl bg-slate-950 hover:bg-slate-800 px-8 py-4 font-bold text-white shadow transition-colors"
            >
              {t.load}
            </button>
          </div>
        )}
        {filteredPasses.length > 0 && (
          <p className="mt-5 text-center text-sm text-slate-500">
            {t.shown} {visiblePasses.length} {t.of} {filteredPasses.length}
          </p>
        )}

        <AffiliateOffer lang={lang} />
        <AdSlot
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_PASSES}
          label={lang === 'zh' ? '广告' : lang === 'ja' ? '広告' : 'Advertisement'}
        />
      </main>

      <FooterSection dict={dict} lang={lang} />
    </div>
  );
}
