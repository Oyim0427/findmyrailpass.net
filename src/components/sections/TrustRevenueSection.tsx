import Link from 'next/link';
import { ArrowRight, BadgeJapaneseYen, Database, FileDown, ShieldCheck, Sparkles } from 'lucide-react';

const copy = {
  zh: {
    eyebrow: '一手信息 · 清楚披露', title: '先帮你做对决定，再讨论购买',
    desc: '票价、范围和购买条件优先取自 JR 集团及各运营公司官网。每张票都标明核验日期，并直接跳转到对应官方页面。',
    source: '查看数据方法', cards: [
      ['免费比较工具', '按行程比较单买车票与区域券，结果是估算，不冒充实时票价。', '开始计算'],
      ['官方与合作预订', '默认直达运营方；未来合作链接会明确标注 Affiliate。', '浏览票券'],
      ['数字行程产品', '可打印的铁路行程表、预算模板和换乘检查清单。', '查看数字产品'],
      ['Pro Web 服务', '下一阶段提供多城市、多人、不同座席的深度优化与保存。', '了解路线优化器'],
    ]
  },
  en: {
    eyebrow: 'First-party sources · Clear disclosure', title: 'Make the right decision before you buy',
    desc: 'Prices, coverage and eligibility are checked against JR Group and operator websites. Each pass shows its verification date and links to the matching official page.',
    source: 'See our data method', cards: [
      ['Free comparison', 'Compare individual tickets with regional passes. Results are estimates, never presented as live fares.', 'Calculate now'],
      ['Official & partner booking', 'Operator links come first. Future affiliate links will always be labelled.', 'Browse passes'],
      ['Digital trip products', 'Printable rail itineraries, budget sheets and transfer checklists.', 'View products'],
      ['Pro web service', 'Multi-city, group and seat-class optimisation with saved trips is next.', 'Explore optimiser'],
    ]
  },
  ja: {
    eyebrow: '一次情報 · 明確な開示', title: '購入の前に、正しい判断を',
    desc: '料金・利用範囲・条件は JR グループと各運行会社の公式サイトで確認。各パスに確認日と公式ページへのリンクを表示します。',
    source: 'データ方針を見る', cards: [
      ['無料比較ツール', '通常運賃と地域パスを比較。結果は概算で、リアルタイム運賃とは表示しません。', '計算する'],
      ['公式・提携予約', '運行会社へのリンクを優先。提携リンクは必ず明示します。', 'パスを見る'],
      ['デジタル旅行商品', '印刷できる鉄道旅程、予算表、乗換チェックリスト。', '商品を見る'],
      ['Pro Web サービス', '複数都市・グループ・座席クラスを最適化し、旅程を保存。', '最適化を見る'],
    ]
  }
};

const icons = [Sparkles, BadgeJapaneseYen, FileDown, ShieldCheck];

export default function TrustRevenueSection({ lang = 'zh' }: { lang?: string }) {
  const t = copy[lang as keyof typeof copy] || copy.zh;
  const hrefs = [`/${lang}#calculator`, `/${lang}/passlist`, `/${lang}/products`, `/${lang}#calculator`];
  return (
    <section className="border-y border-slate-200 bg-[#f7f6f2] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{t.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">{t.title}</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">{t.desc}</p>
            <Link href={`/${lang}/data-sources`} className="mt-6 inline-flex items-center gap-2 font-bold text-primary hover:text-primary-dark"><Database className="h-5 w-5" />{t.source}<ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.cards.map(([title, desc, action], index) => {
              const Icon = icons[index];
              return <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <Icon className="h-6 w-6 text-[#f7b09a]" />
                <h3 className="mt-4 text-lg font-bold text-slate-950">{title}</h3>
                <p className="mt-2 min-h-16 text-sm leading-6 text-slate-600">{desc}</p>
                <Link href={hrefs[index]} className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">{action}<ArrowRight className="h-4 w-4" /></Link>
              </article>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
