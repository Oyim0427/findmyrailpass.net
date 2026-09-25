'use client';

import Link from 'next/link';
import { ExternalLink, Landmark, ShieldCheck, Store, Ticket } from 'lucide-react';
import { event } from '@/lib/analytics';
import {
  getPartnerPurchaseLinks,
  PARTNER_PURCHASE_PROVIDERS,
  type PartnerProviderId,
} from '@/data/partnerPurchaseLinks';

export type OfficialPurchaseLink = {
  url: string;
  kind: 'details' | 'purchase';
};

const copy = {
  zh: {
    title: '选择购买渠道',
    body: '本站不收取票款。请在运营方官网或已标明的合作平台完成付款、出票、取消与退款。',
    official: '运营方官网',
    officialDetails: '查看官网详情',
    officialPurchase: '前往官网购买',
    partners: '合作购票平台',
    affiliate: 'Affiliate 预留',
    pending: '准备中',
    open: '查看价格',
    disclosure: '了解佣金与付款责任',
  },
  en: {
    title: 'Choose where to buy',
    body: 'This site does not collect ticket payments. Complete payment, ticket delivery, cancellation and refunds with the operator or clearly labelled partner.',
    official: 'Operator website',
    officialDetails: 'View official details',
    officialPurchase: 'Buy on official site',
    partners: 'Partner booking sites',
    affiliate: 'Affiliate placeholder',
    pending: 'Coming soon',
    open: 'Check price',
    disclosure: 'Commission and payment responsibility',
  },
  ja: {
    title: '購入先を選ぶ',
    body: '当サイトは代金を受領しません。決済、発券、取消、払戻しは運行会社公式サイトまたは明示された提携サイトで行います。',
    official: '運行会社公式サイト',
    officialDetails: '公式詳細を見る',
    officialPurchase: '公式サイトで購入',
    partners: '提携予約サイト',
    affiliate: 'Affiliate 予約枠',
    pending: '準備中',
    open: '価格を見る',
    disclosure: '報酬と決済責任について',
  },
} as const;

export default function PurchaseChannels({
  passId,
  lang = 'zh',
  officialLinks = [],
}: {
  passId: string;
  lang?: string;
  officialLinks?: readonly OfficialPurchaseLink[];
}) {
  const locale = lang === 'en' || lang === 'ja' ? lang : 'zh';
  const t = copy[locale];
  const partnerLinks = getPartnerPurchaseLinks(passId);
  const partnerByProvider = new Map<PartnerProviderId, string>(
    partnerLinks.map(link => [link.provider, link.url]),
  );
  const uniqueOfficialLinks = officialLinks.filter(
    (link, index, links) => links.findIndex(item => item.url === link.url) === index,
  );

  const track = (category: string, label: string) => {
    event({ action: 'outbound_click', category, label: `${passId}:${label}` });
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-orange-700">
        <Ticket className="h-6 w-6" />
      </div>
      <h2 className="mt-5 text-lg font-black text-slate-950">{t.title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{t.body}</p>

      <div className="mt-6">
        <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-slate-500">
          <Landmark className="h-4 w-4 text-primary" />{t.official}
        </p>
        <div className="mt-3 grid gap-2">
          {uniqueOfficialLinks.map(link => (
            <a
              key={`${link.kind}:${link.url}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('official_purchase', link.url)}
              className={link.kind === 'purchase'
                ? 'inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white transition hover:bg-primary-dark'
                : 'inline-flex items-center justify-center gap-2 rounded-xl border border-primary px-4 py-3 text-sm font-bold text-primary transition hover:bg-primary/10'}
            >
              {link.kind === 'purchase' ? t.officialPurchase : t.officialDetails}
              <ExternalLink className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-6 border-t border-slate-100 pt-6">
        <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-slate-500">
          <Store className="h-4 w-4 text-orange-600" />{t.partners}
        </p>
        <div className="mt-3 grid gap-2">
          {PARTNER_PURCHASE_PROVIDERS.map(provider => {
            const url = partnerByProvider.get(provider.id);
            return url ? (
              <a
                key={provider.id}
                href={url}
                target="_blank"
                rel="sponsored noopener noreferrer"
                onClick={() => track('affiliate_purchase', provider.id)}
                className="flex items-center justify-between gap-3 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm transition hover:border-orange-400"
              >
                <span><strong className="block text-slate-950">{provider.name}</strong><span className="text-xs font-semibold text-orange-700">Affiliate</span></span>
                <span className="inline-flex items-center gap-1 font-bold text-orange-700">{t.open}<ExternalLink className="h-4 w-4" /></span>
              </a>
            ) : (
              <div key={provider.id} aria-disabled="true" className="flex items-center justify-between gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-500">
                <span><strong className="block text-slate-700">{provider.name}</strong><span className="text-xs">{t.affiliate}</span></span>
                <span className="rounded-full bg-slate-200 px-2.5 py-1 text-xs font-bold text-slate-600">{t.pending}</span>
              </div>
            );
          })}
        </div>
      </div>

      <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-slate-500">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
        <Link href={`/${locale}/disclosure`} className="font-bold text-primary hover:underline">{t.disclosure}</Link>
      </p>
    </section>
  );
}
