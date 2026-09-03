import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import NavigationSection from '@/components/sections/NavigationSection';
import { getDictionary, Locale } from '@/i18n/dictionaries';

const faqs = [
  ['如何选择周游券？', '先列出会实际乘坐的跨城路线，再到官方预约网站查询普通票合计。比较覆盖范围、有效天数和资格；不要仅凭“去几个城市”判断。'],
  ['价格是实时的吗？', '不是。本站记录最后核验的运营方价格，计算器也不会查询实时库存。付款前必须在跳转后的官方或明确标注的合作平台确认。'],
  ['全国 JR Pass 包含所有新干线吗？', '不应这样概括。列车、区间、座席和追加票均有例外。例如 Nozomi/Mizuho 需要符合 JR Group 当前规则的专用追加票。'],
  ['周游券能通过自动检票机吗？', '许多现行 JR 票券可使用自动检票机，但不同产品、领取方式与合作线路可能不同。请按照实际票券和运营方说明操作。'],
  ['退款规则都一样吗？', '不一样。退款时间、手续费、兑换前后处理方都会因运营公司和购买渠道而异，请在结算前阅读销售方条款。'],
  ['为什么没有列出上千种票券？', '本站优先保证来源与核验质量。只有能追溯到运营方一手页面、并完成结构化复核的票券才进入生产推荐库。']
];

export default async function HelpPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  return (
    <>
      <NavigationSection dict={dict} lang={lang} />
      <main className="min-h-screen px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <Link href={`/${lang}`} className="inline-flex items-center gap-2 text-sm font-bold text-primary"><ArrowLeft className="h-4 w-4" />返回首页</Link>
          <header className="mt-10 max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Help center</p><h1 className="mt-3 text-5xl font-bold tracking-tight text-slate-950">先确认规则，再付款</h1><p className="mt-5 text-xl leading-8 text-slate-600">这里解释本站工具的边界。具体运输与销售合同始终由实际运营方或销售方提供。</p></header>
          <section className="mt-12 grid gap-4 md:grid-cols-2">{faqs.map(([q, a]) => <article key={q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h2 className="text-lg font-bold text-slate-950">{q}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{a}</p></article>)}</section>
          <div className="mt-10 flex flex-wrap gap-3"><Link href={`/${lang}/passlist`} className="rounded-xl bg-primary px-5 py-3 font-bold text-white">查看已核验票券</Link><Link href={`/${lang}/data-sources`} className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-700">数据方法</Link><a href="https://japanrailpass.net/en/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-700">JR Group 官方网站<ExternalLink className="h-4 w-4" /></a></div>
          {email && <p className="mt-10 text-sm text-slate-600">网站问题：<a className="font-bold text-primary" href={`mailto:${email}`}>{email}</a>。铁路运行、退款和预约问题请联系对应运营公司或销售方。</p>}
        </div>
      </main>
    </>
  );
}
