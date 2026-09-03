'use client';

import Link from 'next/link';
import Image from 'next/image';
import { JRPass } from '@/types/pass';
import { ArrowRight, CalendarDays, MapPin, ShieldCheck, Ticket, Database } from 'lucide-react';
import { event } from '@/lib/analytics';
import type { Dictionary } from '@/i18n/dictionaries';
import { DomesticDirectoryPass } from '@/data/domesticPassDirectory';
import { resolveDirectoryOfficialSource } from '@/data/directoryOfficialSourceOverrides';

interface PassCardProps {
  pass: JRPass | DomesticDirectoryPass;
  onClick?: () => void;
  dict?: Dictionary;
  lang?: string;
}

const tones: Record<string, string> = {
  national: 'from-[#172554] via-[#1e3a8a] to-[#2563eb]',
  regional: 'from-[#064e3b] via-[#047857] to-[#0f766e]',
  city: 'from-[#7c2d12] via-[#c2410c] to-[#9a3412]',
};

export default function PassCard({ pass, onClick, dict, lang = 'zh' }: PassCardProps) {
  const isDirectory = 'salesPeriod' in pass;
  
  const name = isDirectory
    ? (pass as DomesticDirectoryPass).name
    : lang === 'en' ? (pass as JRPass).name.en : lang === 'ja' ? (pass as JRPass).name.jp : (pass as JRPass).name.cn;
    
  const jrPass = !isDirectory ? pass as JRPass : null;
  const dirPass = isDirectory ? pass as DomesticDirectoryPass : null;

  const imageUrl = jrPass?.coverage?.map || '/images/nophoto.svg';

  const purchase = jrPass?.purchaseLinks?.[0];
  const dirSource = dirPass ? resolveDirectoryOfficialSource(dirPass) : null;
  
  const detailHref = isDirectory ? `/${lang}/directory/${pass.id}` : `/${lang}/passlist/${pass.id}`;
  
  const description = isDirectory 
    ? (lang === 'en' ? 'Local pass from directory.' : lang === 'ja' ? '地方きっぷ一覧からの情報です。' : '来自地方券目录的信息。') + (dirPass?.salesPeriod ? ` ${lang === 'en' ? 'Sales Period:' : lang === 'ja' ? '発売期間:' : '销售期:'} ${dirPass.salesPeriod}` : '')
    : lang === 'en'
    ? `An official ${pass.company} rail pass for ${jrPass!.coverage.regions.join(', ')}. Check the operator page for current coverage, eligibility and purchase conditions.`
    : lang === 'ja'
      ? `${pass.company} が提供する ${jrPass!.coverage.regions.join('・')} エリアの公式鉄道パスです。最新の範囲・利用資格・購入条件は運行会社ページでご確認ください。`
      : jrPass!.description;
      
  const tags = isDirectory 
    ? [dirPass!.status === 'on-sale' ? (lang === 'en' ? 'On Sale' : lang === 'ja' ? '発売中' : '在售') : dirPass!.status === 'scheduled' ? (lang === 'en' ? 'Scheduled' : lang === 'ja' ? '予定' : '即将开售') : (lang === 'en' ? 'Review' : lang === 'ja' ? '確認中' : '季节/待核验')]
    : lang === 'zh' ? jrPass!.bestFor.slice(0, 2) : [];

  const trackOutbound = (url: string) => {
    event({ action: 'outbound_click', category: 'purchase', label: `${pass.id}:${url}` });
  };

  return (
    <article className="group h-full overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)] flex flex-col" onClick={onClick}>
      <div className="relative min-h-[12rem] flex flex-col justify-between overflow-hidden p-6 text-white">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/20 to-slate-950/90" />
        
        <div className="relative flex items-start justify-between gap-3">
          {isDirectory ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-900/60 px-3 py-1 text-xs font-semibold backdrop-blur-md"><Database className="h-3.5 w-3.5" />{lang === 'en' ? 'Directory pass' : lang === 'ja' ? '一覧きっぷ' : '目录收录'}</span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-primary-dark/60 px-3 py-1 text-xs font-semibold backdrop-blur-md"><ShieldCheck className="h-3.5 w-3.5" />{lang === 'en' ? 'Operator source' : lang === 'ja' ? '運行会社公式情報' : '运营方一手来源'}</span>
          )}
          <span className="text-xs font-medium text-white/90 drop-shadow-sm text-right leading-tight max-w-[45%]">{pass.company}</span>
        </div>
        <h3 className="relative mt-6 text-xl sm:text-2xl font-bold leading-tight drop-shadow-md text-balance">{name}</h3>
      </div>

      <div className="flex min-h-[27rem] flex-col p-6">
        <div className="flex items-end justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{dict?.priceAdult || '成人价格起'}</p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
              {isDirectory ? dirPass?.priceText || '---' : `¥${jrPass!.price.adult.regular.toLocaleString()}`}
            </p>
          </div>
          <div className="text-right text-sm text-slate-500 max-w-[40%]">
            <CalendarDays className="mb-1 ml-auto h-4 w-4 text-primary" />
            <div className="line-clamp-2">
              {isDirectory ? (dirPass?.validityText || dirPass?.usePeriodText || '---') : `${jrPass!.duration.join(' / ')} ${lang === 'en' ? 'days' : '日'}`}
            </div>
          </div>
        </div>

        <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{tag}</span>)}
        </div>
        <div className="mt-5 space-y-2 text-xs text-slate-500">
          <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-slate-400" />{isDirectory ? dirPass!.region : jrPass!.coverage.regions.join(' · ')}</p>
          {!isDirectory && (
            <p className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-primary" />{lang === 'en' ? `Verified ${jrPass!.lastVerifiedAt}` : lang === 'ja' ? `${jrPass!.lastVerifiedAt} 確認` : `${jrPass!.lastVerifiedAt} 官方核验`}</p>
          )}
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
          <Link href={detailHref} onClick={(event) => event.stopPropagation()} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-3 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary">{dict?.details || '站内详情'}<ArrowRight className="h-4 w-4" /></Link>
          {isDirectory ? (
            dirSource?.url ? (
              <a href={dirSource.url} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.stopPropagation(); trackOutbound(dirSource.url!); }} className="btn-primary inline-flex items-center justify-center gap-2 px-3 py-3 text-sm"><Ticket className="h-4 w-4" />{lang === 'en' ? 'Official' : lang === 'ja' ? '公式サイト' : '官网'}</a>
            ) : null
          ) : (
            purchase && <a href={purchase.url} target="_blank" rel={purchase.type === 'affiliate' ? 'sponsored noopener noreferrer' : 'noopener noreferrer'} onClick={(e) => { e.stopPropagation(); trackOutbound(purchase.url); }} className="btn-primary inline-flex items-center justify-center gap-2 px-3 py-3 text-sm"><Ticket className="h-4 w-4" />{purchase.type === 'official' ? (dict?.buyNow || '官方购买') : (lang === 'en' ? 'Check price' : '查看售价')}</a>
          )}
        </div>
      </div>
    </article>
  );
}
