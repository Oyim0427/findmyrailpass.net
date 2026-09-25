import Link from 'next/link';
import { ArrowRight, BadgeJapaneseYen, Database, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

const copy = {
  zh: {
    eyebrow: '一手信息 · 清楚披露', title: '比较留在本站，购买由实际销售者完成',
    desc: '票价、范围和购买条件优先取自 JR 集团及各运营公司官网。本站不售票、不收取票款；官方与 Affiliate 链接会明确区分。',
    source: '查看数据方法', cards: [
      ['免费比较工具', '按行程比较单买车票与区域券，结果是估算，不冒充实时票价。', '开始计算'],
      ['官方与合作购买入口', '跳转后的运营方或合作平台负责付款、出票、取消和退款。', '浏览票券'],
      ['佣金透明披露', 'Affiliate 链接会清楚标注；购买成立时本站可能获得佣金。', '了解本站如何盈利'],
      ['本站不处理票款', '本站不保存银行卡、护照或完整订单资料，也不提供自己的票券结算。', '查看付款说明'],
    ]
  },
  en: {
    eyebrow: 'First-party sources · Clear disclosure', title: 'Compare here; buy from the actual seller',
    desc: 'Prices, coverage and eligibility are checked against JR Group and operator websites. We do not sell tickets or collect fares, and official and affiliate links are clearly distinguished.',
    source: 'See our data method', cards: [
      ['Free comparison', 'Compare individual tickets with regional passes. Results are estimates, never presented as live fares.', 'Calculate now'],
      ['Official & partner purchase', 'The operator or partner handles payment, ticket delivery, cancellation and refunds.', 'Browse passes'],
      ['Transparent commission', 'Affiliate links are labelled. We may earn a commission when a purchase is completed.', 'How we earn'],
      ['No ticket payments here', 'We do not store card, passport or full order data and provide no first-party ticket checkout.', 'Read payment information'],
    ]
  },
  ja: {
    eyebrow: '一次情報 · 明確な開示', title: '比較は当サイト、購入は実際の販売者で',
    desc: '料金・利用範囲・条件はJRグループと各運行会社の公式サイトで確認。当サイトはきっぷを販売・集金せず、公式リンクとアフィリエイトリンクを明確に区別します。',
    source: 'データ方針を見る', cards: [
      ['無料比較ツール', '通常運賃と地域パスを比較。結果は概算で、リアルタイム運賃とは表示しません。', '計算する'],
      ['公式・提携購入先', '決済、発券、取消、払戻しはリンク先の運行会社・提携販売サイトが行います。', 'パスを見る'],
      ['報酬を明確に表示', 'アフィリエイトリンクを明示し、購入成立時に報酬を得る場合があります。', '収益の仕組み'],
      ['当サイトでは集金しません', 'カード、パスポート、完全な注文情報を保存せず、独自のきっぷ決済もありません。', '決済案内を見る'],
    ]
  }
};

const icons = [Sparkles, BadgeJapaneseYen, ExternalLink, ShieldCheck];

export default function TrustRevenueSection({ lang = 'zh' }: { lang?: string }) {
  const t = copy[lang as keyof typeof copy] || copy.zh;
  const hrefs = [`/${lang}#calculator`, `/${lang}/passlist`, `/${lang}/disclosure`, `/${lang}/commercial`];
  return (
    <section className="border-y border-slate-200 bg-[#f7f6f2] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{t.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 leading-normal">{t.title}</h2>
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
