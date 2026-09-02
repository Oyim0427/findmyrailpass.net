'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Filter, Search, ShieldCheck, X } from 'lucide-react';
import NavigationSection from '@/components/sections/NavigationSection';
import FooterSection from '@/components/sections/FooterSection';
import PassCard from '@/components/PassCard';
import AffiliateOffer from '@/components/AffiliateOffer';
import AdSlot from '@/components/AdSlot';
import { JRPass } from '@/types/pass';
import type { Dictionary } from '@/i18n/dictionaries';

interface PassListClientProps { passes: JRPass[]; lang: string; dict: Dictionary; }

const regions = ['北海道', '東北', '関東', '東海', '北信越', '近畿', '中国', '四国', '九州'];
const copy = {
  zh: { title: '已核验的日本铁路周游券', desc: '只展示能追溯到 JR 集团或运营公司一手页面的票券。价格与规则仍可能变化，付款前请再次确认。', search: '搜索票券、运营公司或地区', all: '全部', national: '全国券', regional: '地区券', region: '地区', filters: '筛选', clear: '清除', found: '张符合条件的票券', empty: '没有符合当前条件的票券。', verified: '运营方来源 · 显示核验日期' },
  en: { title: 'Verified Japan rail passes', desc: 'Only passes traceable to JR Group or operator pages. Prices and rules can change; always confirm before payment.', search: 'Search pass, operator or region', all: 'All', national: 'Nationwide', regional: 'Regional', region: 'Region', filters: 'Filters', clear: 'Clear', found: 'verified passes found', empty: 'No passes match the current filters.', verified: 'Operator sources · Verification dates shown' },
  ja: { title: '確認済みの日本の鉄道パス', desc: 'JR グループまたは運行会社の一次ページに遡れるパスのみ掲載。料金・条件は変わるため購入前に再確認してください。', search: 'パス・運行会社・エリアを検索', all: 'すべて', national: '全国パス', regional: '地域パス', region: 'エリア', filters: '絞り込み', clear: 'クリア', found: '件の確認済みパス', empty: '条件に合うパスがありません。', verified: '運行会社情報 · 確認日を表示' }
};

export default function PassListClient({ passes, lang, dict }: PassListClientProps) {
  const t = copy[lang as keyof typeof copy] || copy.zh;
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<'all' | 'national' | 'regional'>('all');
  const [region, setRegion] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const urlRegion = searchParams.get('region');
    if (urlRegion && regions.includes(urlRegion)) {
      setRegion(urlRegion);
      setCategory('regional');
    }
  }, [searchParams]);

  const filtered = useMemo(() => passes.filter(pass => {
    const searchable = [pass.name.cn, pass.name.en, pass.name.jp, pass.company, ...pass.coverage.regions].filter(Boolean).join(' ').toLowerCase();
    const matchesQuery = !query.trim() || searchable.includes(query.trim().toLowerCase());
    const matchesCategory = category === 'all' || pass.category === category;
    const matchesRegion = region === 'all' || pass.category === 'national' || pass.coverage.regions.includes(region);
    return matchesQuery && matchesCategory && matchesRegion;
  }), [passes, query, category, region]);

  const clear = () => { setQuery(''); setCategory('all'); setRegion('all'); };

  return <div className="min-h-screen bg-[#f7f6f2]">
    <NavigationSection dict={dict} lang={lang} />
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-3xl text-center">
        <p className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800"><ShieldCheck className="h-5 w-5" />{t.verified}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">{t.title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">{t.desc}</p>
      </header>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <div className="flex flex-col gap-3 md:flex-row">
          <label className="relative flex-1"><Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" /><input value={query} onChange={e => setQuery(e.target.value)} placeholder={t.search} className="field-select pl-12" /></label>
          <button onClick={() => setShowFilters(!showFilters)} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-bold text-slate-700 hover:border-emerald-700"><Filter className="h-5 w-5" />{t.filters}{showFilters && <X className="h-4 w-4" />}</button>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">{(['all', 'national', 'regional'] as const).map(value => <button key={value} onClick={() => setCategory(value)} className={`rounded-full px-4 py-2 text-sm font-bold transition ${category === value ? 'bg-emerald-800 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>{value === 'all' ? t.all : value === 'national' ? t.national : t.regional}</button>)}</div>

        {showFilters && <div className="mt-6 border-t border-slate-200 pt-5"><div className="flex items-center justify-between"><h2 className="font-bold text-slate-900">{t.region}</h2><button onClick={clear} className="text-sm font-bold text-[#c2410c]">{t.clear}</button></div><div className="mt-3 flex flex-wrap gap-2"><button onClick={() => setRegion('all')} className={`rounded-full px-4 py-2 text-sm font-semibold ${region === 'all' ? 'bg-slate-900 text-white' : 'border border-slate-200'}`}>{t.all}</button>{regions.map(value => <button key={value} onClick={() => setRegion(value)} className={`rounded-full px-4 py-2 text-sm font-semibold ${region === value ? 'bg-slate-900 text-white' : 'border border-slate-200'}`}>{value}</button>)}</div></div>}
      </section>

      <p className="my-7 text-center text-sm font-semibold text-slate-500"><span className="text-lg font-bold text-slate-950">{filtered.length}</span> {t.found}</p>
      {filtered.length ? <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map(pass => <PassCard key={pass.id} pass={pass} dict={dict} lang={lang} />)}</section> : <p className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-600">{t.empty}</p>}

      <AffiliateOffer lang={lang} />
      <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_PASSES} label={lang === 'zh' ? '广告' : lang === 'ja' ? '広告' : 'Advertisement'} />
    </main>
    <FooterSection dict={dict} lang={lang} />
  </div>;
}
