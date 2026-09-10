'use client';

import Link from 'next/link';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { event } from '@/lib/analytics';

const copy = {
  zh: ['合作平台价格', '此链接为 Affiliate 链接；如您在合作平台完成购买，本站可能获得佣金，通常不会增加您的价格。付款、出票、取消与退款均由该平台处理。', '前往合作平台', '查看披露'],
  en: ['Partner price', 'This is an affiliate link. We may earn a commission if you buy on the partner site, normally at no extra cost to you. That partner handles payment, ticket delivery, cancellation and refunds.', 'Go to partner site', 'Read disclosure'],
  ja: ['提携サイトの価格', 'アフィリエイトリンクです。提携サイトで購入が成立すると、通常お客様の支払額を増やさず当サイトが報酬を受け取る場合があります。決済、発券、取消、払戻しは提携サイトが行います。', '提携サイトへ', '開示を見る']
};

export default function AffiliateOffer({ lang = 'zh' }: { lang?: string }) {
  const url = process.env.NEXT_PUBLIC_AFFILIATE_RAIL_URL;
  if (!url) return null;
  const t = copy[lang as keyof typeof copy] || copy.zh;
  return <aside className="my-10 rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
      <div className="max-w-2xl"><p className="flex items-center gap-2 text-sm font-bold text-primary-light"><ShieldCheck className="h-4 w-4" />Affiliate</p><h2 className="mt-2 text-2xl font-bold">{t[0]}</h2><p className="mt-3 text-sm leading-6 text-slate-300">{t[1]} <Link href={`/${lang}/disclosure`} className="underline">{t[3]}</Link></p></div>
      <a href={url} target="_blank" rel="sponsored noopener noreferrer" onClick={() => event({ action: 'outbound_click', category: 'affiliate', label: 'rail_partner' })} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#c2410c] px-6 py-4 font-bold text-white hover:bg-[#9a3412]">{t[2]}<ExternalLink className="h-5 w-5" /></a>
    </div>
  </aside>;
}
