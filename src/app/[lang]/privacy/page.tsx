import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  return <PolicyShell lang={lang} title="隐私与 Cookie 政策">
    <p>本站以数据最小化为原则。静态页面本身不要求注册，也不直接保存护照、付款卡或旅行证件资料。</p>
    <h2>访问分析</h2><p>配置 Google Analytics 后，可能处理页面访问、设备类型、来源页面、国家/地区级位置和站内操作事件，用于改进内容与转化路径。本站不会在分析事件标签中发送姓名、邮箱或完整行程。</p>
    <h2>广告与 Cookie</h2><p>配置 Google AdSense 后，Google 及其合作方可能按其政策使用 Cookie 或类似技术展示与衡量广告。广告组件在未配置发布商账号时不会加载。</p>
    <h2>Affiliate 与外部网站</h2><p>点击合作链接会离开本站，合作平台将按其隐私政策处理访问和购买数据。本站可能收到不包含完整付款资料的订单归因或佣金报告。</p>
    <h2>联系与删除请求</h2><p>通过邮件联系时，我们会使用您主动提供的信息回复问题。{email ? <>隐私请求：<a className="font-bold text-emerald-800" href={`mailto:${email}`}>{email}</a>。</> : '正式上线前应在环境变量中配置联系邮箱。'}</p>
    <p className="text-sm text-slate-400">最后更新：2026-09-01</p>
  </PolicyShell>;
}

function PolicyShell({ lang, title, children }: { lang: string; title: string; children: React.ReactNode }) {
  return <main className="min-h-screen bg-[#f7f6f2] px-4 py-16"><article className="prose prose-slate mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12"><Link href={`/${lang}`} className="not-prose inline-flex items-center gap-2 text-sm font-bold text-emerald-800"><ArrowLeft className="h-4 w-4" />返回首页</Link><h1>{title}</h1>{children}</article></main>;
}
