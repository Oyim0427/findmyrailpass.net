import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function DisclosurePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <main className="min-h-screen px-4 py-16 text-slate-800"><article className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
    <Link href={`/${lang}`} className="inline-flex items-center gap-2 text-sm font-bold text-primary"><ArrowLeft className="h-4 w-4" />返回首页</Link>
    <h1 className="mt-10 text-4xl font-bold text-slate-950">Affiliate、广告与编辑披露</h1>
    <div className="mt-8 space-y-7 leading-7 text-slate-600">
      <section><h2 className="text-xl font-bold text-slate-950">Affiliate 链接</h2><p className="mt-2">部分“查看售价”或“合作平台购买”链接可能为 Affiliate 链接。您通过这些链接完成购买时，本站可能获得佣金，通常不会增加您的支付价格。此类链接使用 sponsored 标记并在按钮附近明确说明。</p></section>
      <section><h2 className="text-xl font-bold text-slate-950">官方链接</h2><p className="mt-2">标注“官方详情”或“官方购买”的链接直接前往铁路运营公司或 JR 集团页面，本站不会从这些官方跳转中收取佣金。</p></section>
      <section><h2 className="text-xl font-bold text-slate-950">广告</h2><p className="mt-2">未来可能在攻略与资料页展示广告。广告不会伪装成票券推荐，也不会插入计算结果的核心决策区域。</p></section>
      <section><h2 className="text-xl font-bold text-slate-950">编辑独立性</h2><p className="mt-2">推荐顺序优先考虑覆盖范围、适用天数、估算节省额与官方规则，不因佣金高低改变“是否值得买”的结论。没有可靠一手来源的产品不会进入生产票券库。</p></section>
    </div>
    <p className="mt-10 text-sm text-slate-400">最后更新：2026-09-01</p>
  </article></main>;
}
