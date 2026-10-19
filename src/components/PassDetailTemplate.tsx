import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ShieldCheck, type LucideIcon } from 'lucide-react';

export const passDetailTones: Record<string, string> = {
  national: 'from-[#172554] via-[#1e3a8a] to-[#2563eb]',
  regional: 'from-[#064e3b] via-[#047857] to-[#0f766e]',
  city: 'from-[#7c2d12] via-[#c2410c] to-[#9a3412]',
};

export function PassDetailHero({ backHref, backLabel, eyebrow, title, company, badge, image, category }: {
  backHref: string;
  backLabel: string;
  eyebrow: string;
  title: string;
  company?: string;
  badge?: string;
  image: string;
  category: string;
}) {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-br ${passDetailTones[category] || passDetailTones.regional} text-white`}>
      <Image src={image} alt={title} fill priority sizes="100vw" className="object-cover object-center opacity-65" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/65 to-slate-900/25" />
      <div aria-hidden="true" className="absolute -right-16 -top-24 h-80 w-80 rounded-full border-[48px] border-white/10" />
      <div aria-hidden="true" className="absolute -bottom-28 right-24 h-64 w-64 rounded-full border-[42px] border-white/10" />
      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <Link href={backHref} className="inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white">
          <ArrowLeft className="h-4 w-4" />{backLabel}
        </Link>
        <p className="mt-10 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/75">
          <ShieldCheck className="h-4 w-4" />{eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">{title}</h1>
        {(company || badge) && (
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold">
            {company && <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">{company}</span>}
            {badge && <span className="rounded-full bg-white px-4 py-2 text-slate-900">{badge}</span>}
          </div>
        )}
      </div>
    </section>
  );
}

export function PassDetailColumns({ children, aside }: { children: ReactNode; aside: ReactNode }) {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-8 lg:py-14">
      <article className="space-y-8">{children}</article>
      <aside><div className="space-y-6">{aside}</div></aside>
    </div>
  );
}

export function PassDetailMetricCard({ icon: Icon, label, value, inlineLabel = false }: {
  icon: LucideIcon;
  label: string;
  value: ReactNode;
  inlineLabel?: boolean;
}) {
  if (inlineLabel) return (
    <div className="min-w-0 rounded-2xl bg-primary/10 p-5">
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500">
        <Icon aria-hidden="true" className="h-5 w-5 text-primary" />{label}
      </span>
      <div className="mt-2 break-words text-2xl font-bold leading-tight text-slate-950">{value}</div>
    </div>
  );

  return (
    <div className="min-w-0 rounded-2xl bg-primary/10 p-5">
      <Icon aria-hidden="true" className="h-5 w-5 text-primary" />
      <p className="mt-3 text-xs font-bold text-slate-500">{label}</p>
      <div className="mt-1 break-words text-2xl font-black leading-tight text-slate-950">{value}</div>
    </div>
  );
}

export function PassDetailInfoCard({ icon: Icon, title, items, actionHref, actionLabel }: {
  icon: LucideIcon;
  title: string;
  items: ReactNode[];
  actionHref?: string;
  actionLabel?: string;
}) {
  const visibleItems = items.filter(Boolean);
  if (visibleItems.length === 0) return null;
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="flex items-center gap-3 text-lg font-black"><Icon className="h-5 w-5 text-primary" />{title}</h2>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
        {visibleItems.map((item, index) => <li key={index} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{item}</li>)}
      </ul>
      {actionHref && actionLabel && (
        <Link href={actionHref} className="mt-5 inline-flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-bold text-primary transition hover:text-primary-dark">
          {actionLabel}<ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </section>
  );
}
