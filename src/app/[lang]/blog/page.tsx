import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, BookOpenCheck } from 'lucide-react';
import AdSlot from '@/components/AdSlot';
import NavigationSection from '@/components/sections/NavigationSection';
import { getDictionary, Locale } from '@/i18n/dictionaries';

const guides = [
  { tag: 'Decision guide', title: '全国 JR Pass 什么时候才值得比较？', summary: '用旅行范围和长途移动天数先筛选，避免把单次东京—关西往返误判为必须购买全国券。', href: 'https://japanrailpass.net/en/about_jrp.html', source: 'JR Group' },
  { tag: 'Coverage guide', title: '大阪、京都到广岛：区域券应检查什么？', summary: '确认山阳新干线有效区间、指定席、宫岛渡轮与不能使用的东海道新干线区间。', href: 'https://www.westjr.co.jp/travel-information/en/tickets-passes/jrwest-rail-pass/kansai_hiroshima/', source: 'JR West' },
  { tag: 'Booking guide', title: '北海道铁路券：购买、领取与指定席', summary: '比较预购和站内价格，确认北海道新干线、地铁不在覆盖范围，并提前处理全车指定席列车。', href: 'https://www.jrhokkaido.co.jp/global/english/ticket/railpass/', source: 'JR Hokkaido' },
  { tag: 'Eligibility guide', title: '买券前为什么一定要看“适用资格”？', summary: '不同运营公司的外国旅客票券对护照、居住地和短期停留身份可能有不同要求。', href: 'https://www.jreast.co.jp/en/multi/pass/purchase.html', source: 'JR East' },
  { tag: 'Regional guide', title: '九州铁路券：北九州、南九州还是全九州？', summary: '按主要住宿城市和跨区次数选择覆盖范围，并注意官网预订与其他销售渠道可能价格不同。', href: 'https://www.jrkyushu.co.jp/english/railpass/', source: 'JR Kyushu' },
  { tag: 'Data guide', title: '本站如何核验票价与规则', summary: '了解为什么运营方页面优先、何时显示核验日期，以及哪些来源不会用于生成生产数据。', internal: true, href: 'data-sources', source: 'FindMyJR-Pass' }
];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === 'en' ? 'Japan Rail Pass Guides | FindMyJR-Pass' : lang === 'ja' ? '日本の鉄道パスガイド | FindMyJR-Pass' : '日本铁路周游券攻略｜FindMyJR-Pass',
    description: '以铁路运营方一手资料为依据的日本铁路周游券决策、覆盖范围和购买攻略。',
    alternates: { canonical: '/zh/blog' },
    robots: { index: lang === 'zh', follow: true },
  };
}

export default async function GuidesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  return (
    <>
      <NavigationSection dict={dict} lang={lang} />
      <main className="min-h-screen px-4 py-16 text-slate-800">
        <div className="mx-auto max-w-6xl">
          <Link href={`/${lang}`} className="inline-flex items-center gap-2 text-sm font-bold text-primary"><ArrowLeft className="h-4 w-4" />返回首页</Link>
          <header className="mt-10 max-w-3xl"><p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-primary"><BookOpenCheck className="h-5 w-5" />Official-source guides</p><h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-950">铁路券攻略，不把销售话术当答案</h1><p className="mt-6 text-xl leading-8 text-slate-600">每篇内容从运营方规则出发，明确哪些信息是事实、哪些只是行程判断。最终购买条件以跳转后的官方页面为准。</p></header>

          <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_GUIDES} label={lang === 'zh' ? '广告' : lang === 'ja' ? '広告' : 'Advertisement'} />

          <section className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{guides.map(guide => {
            const href = guide.internal ? `/${lang}/${guide.href}` : guide.href;
            return <article key={guide.title} className="flex min-h-72 flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f7b09a]">{guide.tag}</p><h2 className="mt-4 text-2xl font-bold leading-tight text-slate-950">{guide.title}</h2><p className="mt-4 text-sm leading-6 text-slate-600">{guide.summary}</p><div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5"><span className="text-xs font-semibold text-slate-400">Source: {guide.source}</span><a href={href} target={guide.internal ? undefined : '_blank'} rel={guide.internal ? undefined : 'noopener noreferrer'} className="inline-flex items-center gap-1 text-sm font-bold text-primary">阅读<ArrowUpRight className="h-4 w-4" /></a></div></article>;
          })}</section>
        </div>
      </main>
    </>
  );
}
