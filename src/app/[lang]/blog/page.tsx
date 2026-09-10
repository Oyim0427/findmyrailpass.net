import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, BookOpenCheck } from 'lucide-react';
import AdSlot from '@/components/AdSlot';
import NavigationSection from '@/components/sections/NavigationSection';
import { getDictionary, Locale } from '@/i18n/dictionaries';
import { asLocale, buildLocalizedMetadata, SupportedLocale } from '@/lib/seo';

const sharedGuides = [
  { href: 'https://japanrailpass.net/en/about_jrp.html', source: 'JR Group' },
  { href: 'https://www.westjr.co.jp/travel-information/en/tickets-passes/jrwest-rail-pass/kansai_hiroshima/', source: 'JR West' },
  { href: 'https://www.jrhokkaido.co.jp/global/english/ticket/railpass/', source: 'JR Hokkaido' },
  { href: 'https://www.jreast.co.jp/en/multi/pass/purchase.html', source: 'JR East' },
  { href: 'https://www.jrkyushu.co.jp/english/railpass/', source: 'JR Kyushu' },
  { href: 'data-sources', source: 'FindMyJR-Pass', internal: true },
];

const copy = {
  zh: {
    back: '返回首页', eyebrow: '官方来源指南', title: '铁路券攻略，不把销售话术当答案', description: '每篇内容从运营方规则出发，明确哪些信息是事实、哪些只是行程判断。最终购买条件以跳转后的官方页面为准。', read: '阅读', source: '来源', ad: '广告',
    guides: [
      ['决策指南', '全国 JR Pass 什么时候才值得比较？', '用旅行范围和长途移动天数先筛选，避免把单次东京—关西往返误判为必须购买全国券。'],
      ['覆盖范围', '大阪、京都到广岛：区域券应检查什么？', '确认山阳新干线有效区间、指定席、宫岛渡轮与不能使用的东海道新干线区间。'],
      ['购买指南', '北海道铁路券：购买、领取与指定席', '比较预购和站内价格，确认北海道新干线、地铁不在覆盖范围，并提前处理全车指定席列车。'],
      ['资格指南', '买券前为什么一定要看“适用资格”？', '不同运营公司的外国旅客票券对护照、居住地和短期停留身份可能有不同要求。'],
      ['地区指南', '九州铁路券：北九州、南九州还是全九州？', '按主要住宿城市和跨区次数选择覆盖范围，并注意官网预订与其他销售渠道可能价格不同。'],
      ['数据说明', '本站如何核验票价与规则', '了解为什么运营方页面优先、何时显示核验日期，以及哪些来源不会用于生成公开数据。'],
    ],
  },
  en: {
    back: 'Back to home', eyebrow: 'Official-source guides', title: 'Rail pass guides without the sales pitch', description: 'Each guide starts with operator rules and separates verified facts from itinerary judgement. Always confirm final purchase conditions on the linked official page.', read: 'Read', source: 'Source', ad: 'Advertisement',
    guides: [
      ['Decision guide', 'When is the nationwide JR Pass worth comparing?', 'Filter by travel area and long-distance travel days before treating a single Tokyo–Kansai round trip as a reason to buy a nationwide pass.'],
      ['Coverage guide', 'Osaka or Kyoto to Hiroshima: what should you check?', 'Check the valid Sanyo Shinkansen section, reserved seats, Miyajima ferry coverage and the excluded Tokaido Shinkansen section.'],
      ['Booking guide', 'Hokkaido rail passes: purchase, pickup and seats', 'Compare advance and station prices, note exclusions such as subways and the Hokkaido Shinkansen, and plan for all-reserved trains.'],
      ['Eligibility guide', 'Why eligibility matters before you buy', 'Foreign-visitor passes can apply different passport, residence and temporary-visitor requirements depending on the operator.'],
      ['Regional guide', 'Kyushu rail passes: Northern, Southern or All Kyushu?', 'Choose coverage based on your overnight bases and cross-region trips, and note that official and reseller prices may differ.'],
      ['Data guide', 'How this site verifies fares and rules', 'See why operator pages take priority, how verification dates work and which sources are excluded from public data.'],
    ],
  },
  ja: {
    back: 'ホームへ戻る', eyebrow: '公式情報に基づくガイド', title: '販売文句に頼らない鉄道パスガイド', description: '運行会社の規則を起点に、確認できた事実と旅程上の判断を分けて説明します。最終的な購入条件はリンク先の公式ページでご確認ください。', read: '読む', source: '出典', ad: '広告',
    guides: [
      ['判断ガイド', '全国版JRパスを比較するべきなのはどんな時？', '旅行範囲と長距離移動の日数から絞り込み、東京―関西の単純往復だけで全国版が必要だと判断しないためのポイントを整理します。'],
      ['利用範囲', '大阪・京都から広島へ：地域パスの確認点', '山陽新幹線の有効区間、指定席、宮島フェリー、東海道新幹線の対象外区間を確認します。'],
      ['購入ガイド', '北海道の鉄道パス：購入・受取・指定席', '事前購入と駅での価格、北海道新幹線や地下鉄の対象外、全車指定席列車への対応を確認します。'],
      ['利用資格', '購入前に利用資格を確認する理由', '訪日旅行者向けきっぷは、運行会社ごとにパスポート、居住地、短期滞在資格の条件が異なる場合があります。'],
      ['地域ガイド', '九州の鉄道パス：北部・南部・全九州？', '主な宿泊地と地域をまたぐ回数から範囲を選び、公式予約と他の販売経路で価格が異なる可能性も確認します。'],
      ['データ方針', '当サイトの運賃・規則の確認方法', '運行会社ページを優先する理由、確認日の表示方法、公開データに使わない情報源を説明します。'],
    ],
  },
} satisfies Record<SupportedLocale, { back: string; eyebrow: string; title: string; description: string; read: string; source: string; ad: string; guides: string[][] }>;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildLocalizedMetadata({ lang, path: 'blog', titles: { zh: '日本铁路周游券指南｜FindMyJR-Pass', en: 'Japan Rail Pass Guides | FindMyJR-Pass', ja: '日本の鉄道パスガイド｜FindMyJR-Pass' }, descriptions: { zh: '以铁路运营方一手资料为依据的日本铁路周游券决策、覆盖范围和购买指南。', en: 'Japan rail pass decision, coverage and booking guides based on primary operator sources.', ja: '運行会社の一次情報に基づく、日本の鉄道パスの選び方・利用範囲・購入ガイド。' } });
}

export default async function GuidesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params; const locale = asLocale(lang); const t = copy[locale]; const dict = getDictionary(locale as Locale);
  return <><NavigationSection dict={dict} lang={locale} /><main className="min-h-screen px-4 py-16 text-slate-800"><div className="mx-auto max-w-6xl">
    <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-sm font-bold text-primary"><ArrowLeft className="h-4 w-4" />{t.back}</Link>
    <header className="mt-10 max-w-3xl"><p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-primary"><BookOpenCheck className="h-5 w-5" />{t.eyebrow}</p><h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-950">{t.title}</h1><p className="mt-6 text-xl leading-8 text-slate-600">{t.description}</p></header>
    <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_GUIDES} label={t.ad} />
    <section className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{t.guides.map(([tag, title, summary], index) => { const guide = sharedGuides[index]; const href = guide.internal ? `/${locale}/${guide.href}` : guide.href; return <article key={title} className="flex min-h-72 flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c2410c]">{tag}</p><h2 className="mt-4 text-2xl font-bold leading-tight text-slate-950">{title}</h2><p className="mt-4 text-sm leading-6 text-slate-600">{summary}</p><div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5"><span className="text-xs font-semibold text-slate-500">{t.source}: {guide.source}</span><a href={href} target={guide.internal ? undefined : '_blank'} rel={guide.internal ? undefined : 'noopener noreferrer'} className="inline-flex items-center gap-1 text-sm font-bold text-primary">{t.read}<ArrowUpRight className="h-4 w-4" /></a></div></article>; })}</section>
  </div></main></>;
}
