'use client';

import { JRPass } from '@/types/pass';
import { CalendarDays, ExternalLink, MapPin, ShieldCheck, Ticket, TrainFront } from 'lucide-react';
import { event } from '@/lib/analytics';
import type { Dictionary } from '@/i18n/dictionaries';

interface PassCardProps {
  pass: JRPass;
  onClick?: () => void;
  dict?: Dictionary;
  lang?: string;
}

const tones: Record<string, string> = {
  national: 'from-[#172554] via-[#1e3a8a] to-[#2563eb]',
  regional: 'from-[#064e3b] via-[#047857] to-[#0f766e]',
  city: 'from-[#7c2d12] via-[#c2410c] to-[#ea580c]',
};

export default function PassCard({ pass, onClick, dict, lang = 'zh' }: PassCardProps) {
  const name = lang === 'en' ? pass.name.en : lang === 'ja' ? pass.name.jp : pass.name.cn;
  const purchase = pass.purchaseLinks?.[0];
  const official = pass.officialLinks?.[0];
  const detailHref = official?.url;
  const description = lang === 'en'
    ? `An official ${pass.company} rail pass for ${pass.coverage.regions.join(', ')}. Check the operator page for current coverage, eligibility and purchase conditions.`
    : lang === 'ja'
      ? `${pass.company} が提供する ${pass.coverage.regions.join('・')} エリアの公式鉄道パスです。最新の範囲・利用資格・購入条件は運行会社ページでご確認ください。`
      : pass.description;
  const tags = lang === 'zh' ? pass.bestFor.slice(0, 2) : [];

  const trackOutbound = (kind: 'official_detail' | 'purchase', url: string) => {
    event({ action: 'outbound_click', category: kind, label: `${pass.id}:${url}` });
  };

  return (
    <article className="group h-full overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]" onClick={onClick}>
      <div className={`relative min-h-40 overflow-hidden bg-gradient-to-br ${tones[pass.category] || tones.regional} p-6 text-white`}>
        <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full border-[24px] border-white/10" />
        <TrainFront className="absolute -bottom-7 -right-2 h-32 w-32 rotate-[-8deg] text-white/10" strokeWidth={1.2} />
        <div className="relative flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur"><ShieldCheck className="h-3.5 w-3.5" />{lang === 'en' ? 'Operator source' : lang === 'ja' ? '運行会社公式情報' : '运营方一手来源'}</span>
          <span className="text-xs text-white/75">{pass.company}</span>
        </div>
        <h3 className="relative mt-8 max-w-[85%] text-2xl font-bold leading-tight">{name}</h3>
      </div>

      <div className="flex min-h-[27rem] flex-col p-6">
        <div className="flex items-end justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{dict?.priceAdult || '成人价格起'}</p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-slate-950">¥{pass.price.adult.regular.toLocaleString()}</p>
          </div>
          <div className="text-right text-sm text-slate-500"><CalendarDays className="mb-1 ml-auto h-4 w-4 text-emerald-700" />{pass.duration.join(' / ')} {lang === 'en' ? 'days' : '日'}</div>
        </div>

        <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => <span key={tag} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">{tag}</span>)}
        </div>
        <div className="mt-5 space-y-2 text-xs text-slate-500">
          <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-slate-400" />{pass.coverage.regions.join(' · ')}</p>
          <p className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-emerald-700" />{lang === 'en' ? `Verified ${pass.lastVerifiedAt}` : lang === 'ja' ? `${pass.lastVerifiedAt} 確認` : `${pass.lastVerifiedAt} 官方核验`}</p>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
          {detailHref && <a href={detailHref} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.stopPropagation(); trackOutbound('official_detail', detailHref); }} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-3 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-700 hover:text-emerald-800">{dict?.details || '官方详情'}<ExternalLink className="h-4 w-4" /></a>}
          {purchase && <a href={purchase.url} target="_blank" rel={purchase.type === 'affiliate' ? 'sponsored noopener noreferrer' : 'noopener noreferrer'} onClick={(e) => { e.stopPropagation(); trackOutbound('purchase', purchase.url); }} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#c2410c] px-3 py-3 text-sm font-bold text-white transition hover:bg-[#9a3412]"><Ticket className="h-4 w-4" />{purchase.type === 'official' ? (dict?.buyNow || '官方购买') : (lang === 'en' ? 'Check price' : '查看售价')}</a>}
        </div>
      </div>
    </article>
  );
}
