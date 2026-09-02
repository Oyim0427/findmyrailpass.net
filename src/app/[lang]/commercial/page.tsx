import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function CommercialPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  return <main className="min-h-screen bg-[#f7f6f2] px-4 py-16"><article className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12"><Link href={`/${lang}`} className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800"><ArrowLeft className="h-4 w-4" />返回首页</Link><h1 className="mt-8 text-4xl font-bold text-slate-950">特定商取引法に基づく表記 / 商业交易披露</h1>
    <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 text-sm"><Row k="销售者" v="上线收费前填写法定经营主体名称" /><Row k="负责人" v="上线收费前填写" /><Row k="地址与电话" v="依法可在消费者提出请求后及时披露时，应说明请求方式；否则上线前完整填写" /><Row k="联系方式" v={email || '上线前通过 NEXT_PUBLIC_CONTACT_EMAIL 配置'} /><Row k="销售价格" v="各产品页面与结算页面以日元显示" /><Row k="额外费用" v="互联网连接费、支付服务可能产生的费用由用户承担；如有税费在结算页显示" /><Row k="支付方式与时间" v="由实际接入的支付平台及结算页面说明" /><Row k="交付时间" v="数字下载通常在付款确认后提供；人工服务按产品页标示时间交付" /><Row k="取消与退款" v="数字内容下载后通常不因用户原因退款；瑕疵、重复扣款及法律要求的情形除外。人工服务开始前的取消条件以结算页为准" /></div>
    <p className="mt-6 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">此页已经建立披露结构，但在实际收费前必须补齐真实经营主体、负责人、地址/披露方式、电话、支付和退款条件。不能用占位内容正式开售。</p>
  </article></main>;
}

function Row({ k, v }: { k: string; v: string }) { return <div className="grid border-b border-slate-200 last:border-0 sm:grid-cols-[11rem_1fr]"><div className="bg-slate-50 p-4 font-bold text-slate-700">{k}</div><div className="p-4 leading-6 text-slate-600">{v}</div></div>; }
