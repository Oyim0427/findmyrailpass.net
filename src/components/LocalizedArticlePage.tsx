import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { asLocale } from '@/lib/seo';

export default function LocalizedArticlePage({ lang, title, eyebrow, children, prose = true }: { lang: string; title: string; eyebrow?: string; children: React.ReactNode; prose?: boolean }) {
  const locale = asLocale(lang);
  const back = { zh: '返回首页', en: 'Back to home', ja: 'ホームへ戻る' }[locale];
  return <main className="min-h-screen px-4 py-16 text-slate-800"><article className={`${prose ? 'prose prose-slate' : ''} mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12`}>
    <Link href={`/${locale}`} className={`${prose ? 'not-prose ' : ''}inline-flex items-center gap-2 text-sm font-bold text-primary`}><ArrowLeft className="h-4 w-4" />{back}</Link>
    {eyebrow && <p className={`${prose ? 'not-prose ' : ''}mt-10 text-sm font-bold uppercase tracking-[0.18em] text-primary`}>{eyebrow}</p>}
    <h1 className={prose ? undefined : 'mt-3 text-4xl font-bold tracking-tight text-slate-950'}>{title}</h1>
    {children}
  </article></main>;
}
