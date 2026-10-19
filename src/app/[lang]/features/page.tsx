import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import NavigationSection from '@/components/sections/NavigationSection';
import FooterSection from '@/components/sections/FooterSection';
import PassCard from '@/components/PassCard';
import { OFFICIAL_PASSES } from '@/data/officialPasses';
import { DOMESTIC_DIRECTORY_PASSES } from '@/data/domesticPassDirectory';
import { createPassCatalog, getCatalogKey, isDirectoryPass } from '@/lib/passCatalog';
import { getDictionary } from '@/i18n/dictionaries';
import { buildLocalizedMetadata } from '@/lib/seo';

export const dynamic = 'force-static';
const copy = {
  zh: { title: '周游券特集', intro: '从旅行主题出发，比较适合你的周游券。打开详情，看看价格、期限与使用条件。', compare: '按我的行程比较', sections: [
    ['城市漫游', '适合在一座城市慢慢探索。比较一日券与按小时计时的票券，再确认地铁、路面电车等可用交通。'],
    ['北海道铁路旅行', '连接城市与自然。比较旅行范围和有效日数，并留意市内交通是否需要另购车票。'],
    ['关西自由行', '从城市观光到周边出游。先确定目的地，再比较不同铁路公司的通票范围。'],
    ['跨地区铁路旅行', '适合多城市行程。比较广域券与全国券，也可以用计算器查看符合出发地和目的地的候选。'],
  ] },
  en: { title: 'Pass collections', intro: 'Start with your travel style. Explore pass prices, validity and conditions to find a good fit.', compare: 'Compare my trip', sections: [
    ['City discoveries', 'Compare day tickets and hourly passes for exploring one city. Check which subways, trams and buses are included.'],
    ['Hokkaido by rail', 'Plan your journey between cities and nature. Compare validity and coverage, including whether local transport needs a separate ticket.'],
    ['Explore Kansai', 'Choose your destinations, then compare the areas served by each railway and pass.'],
    ['Journeys across regions', 'Explore options for multi-city itineraries. Compare regional and nationwide passes with your planned route.'],
  ] },
  ja: { title: '周遊券特集', intro: '旅のテーマから、あなたに合う一枚を。料金・有効期間・利用条件を見比べて、次のお出かけを計画しましょう。', compare: '自分の旅程で比較する', sections: [
    ['街歩きを楽しむ', '一つの街をじっくり巡る旅に。一日券と時間制のきっぷを比べ、地下鉄・市電・バスの利用範囲を確認しましょう。'],
    ['北海道を鉄道で巡る', '街と自然をつなぐ旅へ。有効日数と移動範囲を比較し、市内交通が別料金かどうかも確認しましょう。'],
    ['関西のお出かけ', '街の観光から近郊への小旅行まで。行きたい場所を決めて、鉄道会社ごとのパスを見比べましょう。'],
    ['エリアをまたぐ鉄道旅', '複数の都市を訪れる旅に。広域パスと全国パスを比べ、出発地・目的地に合う候補を探しましょう。'],
  ] },
};

const sectionIds = ['city', 'hokkaido', 'kansai', 'multi-region'] as const;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildLocalizedMetadata({ lang, path: 'features', titles: { zh: copy.zh.title, en: copy.en.title, ja: copy.ja.title }, descriptions: { zh: copy.zh.intro, en: copy.en.intro, ja: copy.ja.intro } });
}

export default async function FeaturesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = lang === 'en' || lang === 'ja' ? lang : 'zh';
  const t = copy[locale], dict = getDictionary(locale);
  const catalog = createPassCatalog(OFFICIAL_PASSES, DOMESTIC_DIRECTORY_PASSES);
  const groups = [
    catalog.filter(pass => pass.category === 'city'),
    catalog.filter(pass => pass.majorRegions.includes('北海道')),
    catalog.filter(pass => pass.majorRegions.includes('近畿')),
    catalog.filter(pass => pass.majorRegions.length > 1),
  ].map(group => group.slice(0, 4).map(pass => isDirectoryPass(pass) ? { ...pass, sourceDetailUrl: '' } : pass));
  return <div className="min-h-screen text-slate-950">
    <NavigationSection lang={locale} />
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mx-auto mb-14 max-w-3xl text-center">
        <span className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary"><BookOpen className="h-8 w-8" /></span>
        <h1 className="mt-5 text-4xl font-black">{t.title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">{t.intro}</p>
        <Link href={`/${locale}#calculator`} className="mt-6 inline-flex items-center gap-2 font-bold text-primary">{t.compare}<ArrowRight className="h-4 w-4" /></Link>
      </header>
      {t.sections.map(([title, description], index) => <section id={sectionIds[index]} key={title} className="mb-8 scroll-mt-24 rounded-[2rem] border border-slate-200 bg-white/85 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)] sm:p-8">
        <div className="mb-6 border-b border-slate-100 pb-5">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="mt-3 max-w-4xl leading-7 text-slate-600">{description}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{groups[index].map(pass => <PassCard key={getCatalogKey(pass)} pass={pass} lang={locale} dict={dict} compact />)}</div>
      </section>)}
    </main>
    <FooterSection lang={locale} dict={dict} />
  </div>;
}
