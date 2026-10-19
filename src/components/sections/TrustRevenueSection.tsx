import Link from 'next/link';
import { ArrowRight, BadgeJapaneseYen, Database, BookOpen, ShoppingBag, Sparkles } from 'lucide-react';

const copy = {
  "zh": {
    "eyebrow": "找到适合你的旅行方式",
    "title": "比较周游券的优劣，让每一程更值得",
    "desc": "从价格、有效天数到可用地区，轻松看懂不同周游券的特点。结合你的目的地和行程，找到更合适的选择。",
    "source": "了解我们的比较依据",
    "cards": [
      [
        "免费比较工具",
        "输入旅行计划，比较周游券与单独购票的参考费用。",
        "开始比较"
      ],
      [
        "发现适合你的票券",
        "从全国通票到城市一日券，按地区和交通类型轻松筛选。",
        "浏览周游券"
      ],
      [
        "周游券特集",
        "按旅行主题探索票券，发现周末出游、城市漫游和跨地区旅行的选择。",
        "探索特集"
      ],
      [
        "更快捷地购买周游券",
        "查看票券详情与购买渠道，快速前往官网或合作平台购买。",
        "寻找购票入口"
      ]
    ]
  },
  "en": {
    "eyebrow": "Find your way to travel",
    "title": "Compare the possibilities. Find your perfect pass.",
    "desc": "Explore prices, validity and travel areas side by side. Find the pass that suits your destinations and the way you want to travel.",
    "source": "How we compare",
    "cards": [
      [
        "Free trip comparison",
        "Compare available pass fares with your individual-ticket budget.",
        "Start comparing"
      ],
      [
        "Find your next pass",
        "Explore nationwide passes, regional routes and city tickets.",
        "Browse passes"
      ],
      [
        "Pass collections",
        "Discover passes for city breaks, weekend outings and regional adventures.",
        "Explore collections"
      ],
      [
        "A quicker way to buy",
        "Find pass details and follow official or partner links to purchase.",
        "Find purchase options"
      ]
    ]
  },
  "ja": {
    "eyebrow": "あなたの旅に、ぴったりの一枚を",
    "title": "周遊券の違いを比べて、もっと自分らしい旅へ",
    "desc": "料金・有効日数・利用エリアを見比べて、それぞれの魅力を発見。行きたい場所や旅のスタイルに合う周遊券を見つけましょう。",
    "source": "比較の基準を見る",
    "cards": [
      [
        "無料で旅の費用を比較",
        "旅の予定を入力して、周遊券と通常きっぷの参考料金を比較できます。",
        "比較を始める"
      ],
      [
        "旅に合うパスを探す",
        "全国パスから街歩きの一日券まで、地域や交通機関から絞り込めます。",
        "パスを探す"
      ],
      [
        "周遊券特集",
        "街歩き、週末のお出かけ、広域旅行。テーマから次の旅の一枚を探しましょう。",
        "特集を見る"
      ],
      [
        "周遊券の購入をもっとスムーズに",
        "気になるパスの詳細と購入先をまとめて確認。公式・提携サイトへすぐに進めます。",
        "購入できるパスを見る"
      ]
    ]
  }
};

const icons = [Sparkles, BadgeJapaneseYen, BookOpen, ShoppingBag];

export default function TrustRevenueSection({ lang = 'zh' }: { lang?: string }) {
  const t = copy[lang as keyof typeof copy] || copy.zh;
  const hrefs = [`/${lang}#calculator`, `/${lang}/passlist`, `/${lang}/features`, `/${lang}/passlist`];
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
