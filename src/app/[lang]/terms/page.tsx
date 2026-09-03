import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <main className="min-h-screen px-4 py-16"><article className="prose prose-slate mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12"><Link href={`/${lang}`} className="not-prose inline-flex items-center gap-2 text-sm font-bold text-primary"><ArrowLeft className="h-4 w-4" />返回首页</Link><h1>使用条款</h1>
    <h2>信息性质</h2><p>本站提供旅行信息、票券筛选与估算工具，不是铁路运营公司、旅行社或实时订票系统。计算结果不构成价格保证、法律建议或运输合同。</p>
    <h2>官方条件优先</h2><p>票价、适用资格、覆盖范围、退款、指定席和运行状态可能变化。购买与乘车前必须在运营方或实际销售平台确认；与本站内容不一致时，以其最新条款为准。</p>
    <h2>数字产品与服务</h2><p>数字下载与人工复核的价格、交付、取消和退款条件应显示在结算页及商业披露页。已经下载的数字内容是否可退款，依适用法律和结算页说明处理。</p>
    <h2>知识产权</h2><p>本站原创文字、界面与工具受适用法律保护。铁路公司名称和商标属于其权利人；引用不表示获得官方背书。</p>
    <h2>责任限制</h2><p>在法律允许范围内，本站不对班次取消、信息变更、误车、额外票价或第三方服务造成的间接损失负责。</p>
    <p className="text-sm text-slate-400">最后更新：2026-09-01</p>
  </article></main>;
}
