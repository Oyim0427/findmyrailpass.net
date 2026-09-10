import Link from 'next/link';
import { ArrowLeft, Check, Download, FileSpreadsheet, Route, Sparkles, type LucideIcon } from 'lucide-react';
import { asLocale, buildLocalizedMetadata, SupportedLocale } from '@/lib/seo';

const copy = {
  zh: { back: '返回首页', eyebrow: '免费工具与开发计划', title: '本站当前不卖周游券，也不接受任何付款', intro: '周游券会跳转到运营方或合作销售平台购买。下面的行程工具目前仅作为免费资源或开发计划展示，不提供本站结算。', notice: '当前付款状态：本站无收款页面、无付费订阅、无数字产品销售。', download: '免费下载铁路行程检查清单 CSV', passes: '浏览周游券与官方购买入口', status: '开发计划 · 暂不收费', plans: [
    { name: 'Japan Rail Trip Planner', desc: '规划中的多城市行程、预算、预约与行李检查模板。', features: ['每日车程与换乘表', '普通票 vs 周游券预算', '座席与大件行李预约清单', '中文 / English / 日本語'] },
    { name: 'Route Review', desc: '规划中的复杂路线检查工具，整理票券组合、换乘风险、行李和预约提醒。', features: ['完整行程检查', '购票顺序提示', '高风险换乘提醒', '官方来源链接'] },
    { name: 'Planner Pro', desc: '规划中的多城市路线保存、区域券组合比较与任务导出工具。', features: ['保存与复制行程', '多人总价比较', '官方来源变更提醒', 'PDF / CSV 导出'] },
  ] },
  en: { back: 'Back to home', eyebrow: 'Free tools and roadmap', title: 'This site does not sell rail passes or accept payments', intro: 'Rail-pass purchases are completed on an operator or partner seller’s site. The itinerary tools below are currently free resources or roadmap items, with no first-party checkout.', notice: 'Current payment status: no site checkout, paid subscription or digital-product sale.', download: 'Download the free rail-trip checklist (CSV)', passes: 'Browse passes and official purchase links', status: 'Roadmap · Not for sale', plans: [
    { name: 'Japan Rail Trip Planner', desc: 'A planned multi-city itinerary, budget, reservation and luggage-check template.', features: ['Daily train and transfer table', 'Regular tickets vs pass budget', 'Seat and oversized-luggage checklist', '中文 / English / 日本語'] },
    { name: 'Route Review', desc: 'A planned complex-route checking tool for pass combinations, transfer risk, luggage and reservations.', features: ['Complete itinerary check', 'Purchase-order guidance', 'High-risk transfer alerts', 'Official-source links'] },
    { name: 'Planner Pro', desc: 'A planned tool for saved multi-city routes, regional-pass combinations and task exports.', features: ['Save and duplicate itineraries', 'Group total-price comparison', 'Official-source change alerts', 'PDF / CSV export'] },
  ] },
  ja: { back: 'ホームへ戻る', eyebrow: '無料ツール・開発予定', title: '当サイトは鉄道パスを販売せず、決済も受け付けません', intro: '鉄道パスは運行会社または提携販売サイトで購入します。以下の旅程ツールは現在、無料資料または開発予定として掲載し、当サイトの決済はありません。', notice: '現在の決済状況：当サイトの決済画面、有料購読、デジタル商品の販売はありません。', download: '鉄道旅行チェックリスト（CSV）を無料ダウンロード', passes: '鉄道パスと公式購入先を見る', status: '開発予定 · 販売していません', plans: [
    { name: 'Japan Rail Trip Planner', desc: '複数都市の旅程、予算、予約、荷物確認をまとめる計画中のテンプレート。', features: ['毎日の乗車・乗換表', '通常きっぷとパスの予算比較', '座席・大型荷物予約チェック', '中文 / English / 日本語'] },
    { name: 'Route Review', desc: 'パスの組合せ、乗換リスク、荷物、予約を整理する計画中の確認ツール。', features: ['旅程全体の確認', '購入順序の案内', '乗換リスクの注意', '公式情報リンク'] },
    { name: 'Planner Pro', desc: '複数都市の旅程保存、地域パスの組合せ比較、タスク出力を行う計画中のツール。', features: ['旅程の保存・複製', '複数人の総額比較', '公式情報の変更通知', 'PDF / CSV 出力'] },
  ] },
} satisfies Record<SupportedLocale, { back: string; eyebrow: string; title: string; intro: string; notice: string; download: string; passes: string; status: string; plans: { name: string; desc: string; features: string[] }[] }>;

const visual: { icon: LucideIcon; article: string; iconClass: string; body: string; check: string; status: string }[] = [
  { icon: FileSpreadsheet, article: 'border border-slate-200 bg-white text-slate-800', iconClass: 'text-[#c2410c]', body: 'text-slate-600', check: 'text-primary', status: 'bg-slate-100 text-slate-600' },
  { icon: Route, article: 'bg-slate-950 text-white', iconClass: 'text-primary-light', body: 'text-slate-300', check: 'text-primary-light', status: 'bg-white/10 text-slate-200' },
  { icon: Sparkles, article: 'border border-emerald-200 bg-primary-dark text-white', iconClass: 'text-amber-300', body: 'text-teal-100', check: 'text-amber-300', status: 'bg-white/10 text-emerald-50' },
];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) { const { lang } = await params; return buildLocalizedMetadata({ lang, path: 'products', titles: { zh: '免费行程工具与开发计划｜FindMyJR-Pass', en: 'Free Trip Tools and Roadmap | FindMyJR-Pass', ja: '無料旅行ツール・開発予定｜FindMyJR-Pass' }, descriptions: { zh: '下载免费铁路行程清单，并查看本站的工具开发计划与当前无收款状态。', en: 'Download a free rail-trip checklist and see the tool roadmap and current no-payment status.', ja: '無料チェックリスト、ツールの開発予定、現在決済を受け付けていないことをご案内します。' } }); }

export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = asLocale(lang);
  const t = copy[locale];
  return <main className="min-h-screen px-4 py-16 text-slate-800"><div className="mx-auto max-w-5xl"><Link href={`/${locale}`} className="inline-flex items-center gap-2 text-sm font-bold text-primary"><ArrowLeft className="h-4 w-4" />{t.back}</Link><div className="mt-10 max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{t.eyebrow}</p><h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">{t.title}</h1><p className="mt-6 text-xl leading-8 text-slate-600">{t.intro}</p></div><p className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-4 font-semibold text-amber-950">{t.notice}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="/downloads/japan-rail-trip-checklist.csv" download className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary bg-white px-5 py-3 font-bold text-primary-dark"><Download className="h-5 w-5" />{t.download}</a><Link href={`/${locale}/passlist`} className="inline-flex items-center justify-center rounded-xl bg-[#c2410c] px-5 py-3 font-bold text-white hover:bg-[#9a3412]">{t.passes}</Link></div>
    <div className="mt-12 grid gap-6 md:grid-cols-3">{t.plans.map((plan, index) => { const style = visual[index]; const Icon = style.icon; return <article key={plan.name} className={`flex flex-col rounded-3xl p-8 shadow-sm ${style.article}`}><Icon className={`h-8 w-8 ${style.iconClass}`} /><h2 className="mt-5 text-2xl font-bold">{plan.name}</h2><p className={`mt-3 ${style.body}`}>{plan.desc}</p><ul className="mt-6 space-y-3 text-sm">{plan.features.map(feature => <li key={feature} className="flex gap-2"><Check className={`h-5 w-5 shrink-0 ${style.check}`} />{feature}</li>)}</ul><div className={`mt-auto rounded-xl p-4 pt-8 text-sm font-semibold ${style.status}`}>{t.status}</div></article>; })}</div>
  </div></main>;
}
