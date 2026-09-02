import Link from 'next/link';
import { ArrowLeft, ExternalLink, ShieldCheck } from 'lucide-react';

export default async function DataSourcesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const operators = [
    ['JR Group / JAPAN RAIL PASS', 'https://japanrailpass.net/en/'],
    ['JR Hokkaido', 'https://www.jrhokkaido.co.jp/global/english/'],
    ['JR East', 'https://www.jreast.co.jp/multi/en/'],
    ['JR Central Tourist Pass', 'https://touristpass.jp/en/'],
    ['JR West', 'https://www.westjr.co.jp/travel-information/en/'],
    ['JR Shikoku', 'https://www.jr-shikoku.co.jp/global/en/'],
    ['JR Kyushu', 'https://www.jrkyushu.co.jp/english/'],
    ['Public Transportation Open Data Center', 'https://developer.odpt.org/']
  ];
  return <main className="min-h-screen bg-[#f7f6f2] px-4 py-16 text-slate-800">
    <article className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
      <Link href={`/${lang}`} className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800"><ArrowLeft className="h-4 w-4" />返回首页</Link>
      <p className="mt-10 text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">Data provenance</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">数据来源与更新方法</h1>
      <p className="mt-6 text-lg leading-8 text-slate-600">本站的生产票券库仅接受运营公司、JR 集团及公共机构的一手信息。价格、有效期、适用资格和覆盖范围必须能追溯到对应官方页面。</p>
      <div className="mt-10 space-y-7">
        <section><h2 className="text-xl font-bold text-slate-950">核验规则</h2><ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-slate-600"><li>每条票券记录保存运营方、官方详情页和最后核验日期。</li><li>聚合站、博客和销售平台不能作为票价与规则的唯一来源。</li><li>官方信息冲突时，以运营公司日文页面和购买页为准。</li><li>计算器结果是基于已核验票价的估算，不代表实时库存或最终结算价。</li></ul></section>
        <section><h2 className="text-xl font-bold text-slate-950">更新节奏</h2><p className="mt-3 leading-7 text-slate-600">高流量票券每周自动检查页面变化、每月人工复核；季节限定票在销售期前复核。发现价格或条件变更时先标记待核验，再更新推荐结果。</p></section>
        <section><h2 className="text-xl font-bold text-slate-950">主要一手来源</h2><div className="mt-4 grid gap-3 sm:grid-cols-2">{operators.map(([name, url]) => <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold hover:border-emerald-700"><span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-700" />{name}</span><ExternalLink className="h-4 w-4 text-slate-400" /></a>)}</div></section>
      </div>
      <p className="mt-10 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">付款前请始终在跳转后的官方或合作平台页面再次确认价格、资格、退款条件和列车覆盖范围。</p>
    </article>
  </main>;
}
