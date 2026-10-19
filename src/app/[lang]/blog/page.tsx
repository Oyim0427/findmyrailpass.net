import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, BookOpenCheck, ExternalLink, HelpCircle } from 'lucide-react';
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

const helpCopy = {
  zh: {
    eyebrow: '帮助中心', title: '先确认规则，再付款', intro: '这里解释本站工具的边界。具体运输与销售合同始终由实际运营方或销售方提供。', passes: '查看已核验票券', data: '数据方法', official: 'JR Group 官方网站', contact: '网站问题', contactNote: '铁路运行、退款和预约问题请联系对应运营公司或销售方。',
    faqs: [
      ['如何选择周游券？', '先列出会实际乘坐的跨城路线，再到官方预约网站查询普通票合计。比较覆盖范围、有效天数和资格；不要仅凭“去几个城市”判断。'],
      ['价格是实时的吗？', '不是。本站记录最后核验的运营方价格，计算器也不会查询实时库存。付款前必须在跳转后的官方或明确标注的合作平台确认。'],
      ['全国 JR Pass 包含所有新干线吗？', '不能这样概括。列车、区间、座席和追加票均有例外，例如 Nozomi/Mizuho 须符合 JR Group 当前的追加票规则。'],
      ['周游券能通过自动检票机吗？', '许多现行 JR 票券可使用自动检票机，但不同产品、领取方式与合作线路可能不同。请按照实际票券和运营方说明操作。'],
      ['退款规则都一样吗？', '不一样。退款时间、手续费、兑换前后处理方会因运营公司和购买渠道而异，请在结算前阅读销售方条款。'],
      ['为什么没有列出所有票券？', '本站优先保证来源与核验质量。只有能追溯到运营方精确产品页、并通过质量检查的票券才公开显示。'],
    ],
  },
  en: {
    eyebrow: 'Help center', title: 'Check the rules before you pay', intro: 'This section explains the limits of our tools. The actual operator or seller always provides the transport and sales contract.', passes: 'View verified passes', data: 'Data methods', official: 'JR Group official website', contact: 'Website questions', contactNote: 'Contact the relevant operator or seller about operations, refunds and reservations.',
    faqs: [
      ['How should I choose a rail pass?', 'List the intercity trips you will actually take, then check regular-ticket totals on an official booking site. Compare coverage, validity and eligibility instead of counting cities alone.'],
      ['Are prices real-time?', 'No. We show the last operator price we verified, and the calculator does not check live inventory. Confirm the final amount on the linked official or clearly labelled partner site before paying.'],
      ['Does the nationwide JR Pass include every Shinkansen?', 'No. There are exceptions by train, section, seat and supplemental ticket. For example, Nozomi and Mizuho use the JR Group’s current special-ticket rules.'],
      ['Can I use an automatic ticket gate?', 'Many current JR passes work at automatic gates, but this varies by product, pickup method and partner line. Follow the instructions for the actual pass and operator.'],
      ['Are refund rules the same?', 'No. Deadlines, fees and the responsible party before or after exchange vary by operator and sales channel. Read the seller’s terms before checkout.'],
      ['Why are some passes not listed?', 'Source quality comes first. A pass is public only when it can be traced to an exact operator product page and passes our quality checks.'],
    ],
  },
  ja: {
    eyebrow: 'ヘルプ', title: '支払い前に条件を確認', intro: 'ここでは当サイトのツールの範囲を説明します。運送・販売契約は、実際の運行会社または販売者が提供します。', passes: '確認済みのパスを見る', data: 'データ方針', official: 'JRグループ公式サイト', contact: 'サイトに関するお問い合わせ', contactNote: '運行、払い戻し、予約については該当する運行会社または販売者へお問い合わせください。',
    faqs: [
      ['鉄道パスはどう選べばよいですか？', '実際に乗る都市間区間を列挙し、公式予約サイトで通常きっぷの合計を調べます。都市数だけでなく、利用範囲、有効日数、利用資格を比較してください。'],
      ['価格はリアルタイムですか？', 'いいえ。当サイトは最後に確認した運行会社の価格を表示し、計算機は空席や在庫をリアルタイムで取得しません。支払い前に公式または明示された提携サイトで最終金額をご確認ください。'],
      ['全国版JRパスですべての新幹線に乗れますか？', '一概には言えません。列車、区間、座席、追加券に例外があります。のぞみ・みずほ等はJRグループの最新の追加券ルールをご確認ください。'],
      ['自動改札を利用できますか？', '多くの現行JRパスは自動改札を利用できますが、商品、受取方法、提携路線によって異なります。実際のきっぷと運行会社の案内に従ってください。'],
      ['払い戻し条件は同じですか？', 'いいえ。期限、手数料、引換前後の窓口は運行会社と販売経路で異なります。決済前に販売者の規約をご確認ください。'],
      ['掲載されていないきっぷがあるのはなぜですか？', '情報源と確認品質を優先しています。運行会社の正確な商品ページを確認でき、品質検査を通過したきっぷだけを公開します。'],
    ],
  },
} satisfies Record<SupportedLocale, { eyebrow: string; title: string; intro: string; passes: string; data: string; official: string; contact: string; contactNote: string; faqs: string[][] }>;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildLocalizedMetadata({ lang, path: 'blog', titles: { zh: '日本铁路周游券指南与帮助｜FindMyJR-Pass', en: 'Japan Rail Pass Guides & Help | FindMyJR-Pass', ja: '日本の鉄道パスガイド・ヘルプ｜FindMyJR-Pass' }, descriptions: { zh: '以铁路运营方一手资料为依据的日本铁路周游券指南、常见问题与购买帮助。', en: 'Japan rail pass guides, FAQs and purchase help based on primary operator sources.', ja: '運行会社の一次情報に基づく、日本の鉄道パスガイド、よくある質問、購入前のヘルプ。' } });
}

export default async function GuidesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params; const locale = asLocale(lang); const t = copy[locale]; const help = helpCopy[locale]; const dict = getDictionary(locale as Locale); const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  return <><NavigationSection dict={dict} lang={locale} /><main className="min-h-screen px-4 py-16 text-slate-800"><div className="mx-auto max-w-6xl">
    <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-sm font-bold text-primary"><ArrowLeft className="h-4 w-4" />{t.back}</Link>
    <header className="mt-10 max-w-3xl"><p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-primary"><BookOpenCheck className="h-5 w-5" />{t.eyebrow}</p><h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-950">{t.title}</h1><p className="mt-6 text-xl leading-8 text-slate-600">{t.description}</p></header>
    <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_GUIDES} label={t.ad} />
    <section className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{t.guides.map(([tag, title, summary], index) => { const guide = sharedGuides[index]; const href = guide.internal ? `/${locale}/${guide.href}` : guide.href; return <article key={title} className="flex min-h-72 flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c2410c]">{tag}</p><h2 className="mt-4 text-2xl font-bold leading-tight text-slate-950">{title}</h2><p className="mt-4 text-sm leading-6 text-slate-600">{summary}</p><div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5"><span className="text-xs font-semibold text-slate-500">{t.source}: {guide.source}</span><a href={href} target={guide.internal ? undefined : '_blank'} rel={guide.internal ? undefined : 'noopener noreferrer'} className="inline-flex items-center gap-1 text-sm font-bold text-primary">{t.read}<ArrowUpRight className="h-4 w-4" /></a></div></article>; })}</section>
    <section id="help" className="mt-20 rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)] sm:p-10">
      <header className="max-w-3xl"><p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-primary"><HelpCircle className="h-5 w-5" />{help.eyebrow}</p><h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">{help.title}</h2><p className="mt-5 text-lg leading-8 text-slate-600">{help.intro}</p></header>
      <div className="mt-10 grid gap-4 md:grid-cols-2">{help.faqs.map(([question, answer]) => <article key={question} className="rounded-2xl border border-slate-200 bg-[#f8faf8] p-6"><h3 className="text-lg font-bold text-slate-950">{question}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{answer}</p></article>)}</div>
      <div className="mt-8 flex flex-wrap gap-3"><Link href={`/${locale}/passlist`} className="rounded-xl bg-primary px-5 py-3 font-bold text-white">{help.passes}</Link><Link href={`/${locale}/data-sources`} className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-700">{help.data}</Link><a href="https://japanrailpass.net/en/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-700">{help.official}<ExternalLink className="h-4 w-4" /></a></div>
      {email && <p className="mt-8 text-sm text-slate-600">{help.contact}: <a className="font-bold text-primary" href={`mailto:${email}`}>{email}</a>. {help.contactNote}</p>}
    </section>
  </div></main></>;
}
