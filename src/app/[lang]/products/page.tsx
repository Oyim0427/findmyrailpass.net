import Link from 'next/link';
import { ArrowLeft, Check, Download, FileSpreadsheet, Route, Sparkles } from 'lucide-react';

export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const plannerUrl = process.env.NEXT_PUBLIC_PRODUCT_PLANNER_URL;
  const reviewUrl = process.env.NEXT_PUBLIC_ROUTE_REVIEW_URL;
  const proUrl = process.env.NEXT_PUBLIC_PRO_APP_URL;
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const fallbackUrl = email ? `mailto:${email}?subject=${encodeURIComponent('FindMyJR-Pass product waitlist')}` : undefined;
  const cta = (url: string | undefined, active: string) => url
    ? <a href={url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#c2410c] px-5 py-4 font-bold text-white hover:bg-[#9a3412]">{active}</a>
    : fallbackUrl ? <a href={fallbackUrl} className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-current px-5 py-4 font-bold">加入开售通知</a> : <span className="mt-6 block rounded-xl bg-slate-100 p-4 text-center text-sm font-semibold text-slate-500">配置支付链接后开放</span>;
  return <main className="min-h-screen px-4 py-16 text-slate-800"><div className="mx-auto max-w-5xl">
    <Link href={`/${lang}`} className="inline-flex items-center gap-2 text-sm font-bold text-primary"><ArrowLeft className="h-4 w-4" />返回首页</Link>
    <div className="mt-10 max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Digital products</p><h1 className="mt-3 text-5xl font-bold tracking-tight text-slate-950">把复杂的铁路行程，整理成能直接出发的计划</h1><p className="mt-6 text-xl leading-8 text-slate-600">先下载免费清单；配置正式结算链接与商业信息后，付费模板、人工复核与 Pro 服务会自动开放。</p></div>
    <a href="/downloads/japan-rail-trip-checklist.csv" download className="mt-10 inline-flex items-center gap-2 rounded-xl border border-primary bg-white px-5 py-3 font-bold text-primary-dark"><Download className="h-5 w-5" />免费下载铁路行程检查清单 CSV</a>
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      <article className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"><FileSpreadsheet className="h-8 w-8 text-[#f7b09a]" /><h2 className="mt-5 text-2xl font-bold text-slate-950">Japan Rail Trip Planner</h2><p className="mt-3 text-slate-600">Notion / Excel 双版本的多城市行程、预算、预约与行李检查模板。</p><ul className="mt-6 space-y-3 text-sm text-slate-700">{['每日车程与换乘表','普通票 vs 周游券预算','座席与大件行李预约清单','中文 / English / 日本語'].map(x => <li key={x} className="flex gap-2"><Check className="h-5 w-5 text-primary" />{x}</li>)}</ul><div className="mt-auto pt-8"><div className="rounded-xl bg-slate-100 p-4 text-sm font-semibold text-slate-600">计划售价：¥1,200</div>{cta(plannerUrl, '购买并下载')}</div></article>
      <article className="flex flex-col rounded-3xl bg-slate-950 p-8 text-white shadow-sm"><Route className="h-8 w-8 text-primary-light" /><h2 className="mt-5 text-2xl font-bold">Route Review</h2><p className="mt-3 text-slate-300">面向复杂路线的人工复核：票券组合、换乘风险、行李和预约提醒。</p><ul className="mt-6 space-y-3 text-sm text-slate-200">{['一次完整行程复核','可执行的购票顺序','高风险换乘提醒','48 小时内交付'].map(x => <li key={x} className="flex gap-2"><Check className="h-5 w-5 text-primary-light" />{x}</li>)}</ul><div className="mt-auto pt-8"><div className="rounded-xl bg-white/10 p-4 text-sm font-semibold text-slate-200">计划售价：¥4,800</div>{cta(reviewUrl, '提交行程复核')}</div></article>
      <article className="flex flex-col rounded-3xl border border-emerald-200 bg-primary-dark p-8 text-white shadow-sm"><Sparkles className="h-8 w-8 text-amber-300" /><h2 className="mt-5 text-2xl font-bold">Planner Pro</h2><p className="mt-3 text-teal-100">保存多城市路线、比较多张区域券组合，并导出每天的购买与预约任务。</p><ul className="mt-6 space-y-3 text-sm text-emerald-50">{['保存与复制行程','多人总价比较','官方来源变更提醒','PDF / CSV 导出'].map(x => <li key={x} className="flex gap-2"><Check className="h-5 w-5 text-amber-300" />{x}</li>)}</ul><div className="mt-auto pt-8"><div className="rounded-xl bg-white/10 p-4 text-sm font-semibold text-emerald-50">计划订阅：¥680 / 月</div>{cta(proUrl, '打开 Planner Pro')}</div></article>
    </div>
  </div></main>;
}
