import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  BadgeJapaneseYen,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  MapPin,
  ShieldCheck,
  Ticket,
  TrainFront,
  Users,
} from 'lucide-react';
import NavigationSection from '@/components/sections/NavigationSection';
import FooterSection from '@/components/sections/FooterSection';
import { getDictionary, type Locale } from '@/i18n/dictionaries';
import { getAllPasses, getPassById } from '@/lib/passData';
import { buildLocalizedMetadata } from '@/lib/seo';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPasses().map(pass => ({ id: pass.id }));
}

const copy = {
  zh: {
    back: '返回已核验周游券',
    eyebrow: 'FindMyJR-Pass 站内周游券详情',
    verified: '运营方信息已核验',
    adult: '成人参考价格',
    child: '儿童参考价格',
    duration: '有效天数',
    priceNote: '价格说明',
    coverage: '适用范围',
    audience: '适用对象',
    transport: '可乘坐交通工具',
    bestFor: '适合这样的行程',
    validity: '有效期间',
    note: '使用前注意',
    sourceTitle: '来源与购买',
    sourceBody: '本页是 FindMyJR-Pass 整理的站内详情。票价和规则可能变化，付款前请通过运营方页面再次确认。',
    verifiedAt: '最后核验日期',
    official: '运营方详细',
    buy: '官方购买',
    related: '其他已核验周游券',
    view: '查看站内详情',
    days: '日',
  },
  en: {
    back: 'Back to verified passes',
    eyebrow: 'FindMyJR-Pass on-site pass detail',
    verified: 'Checked against operator information',
    adult: 'Adult reference price',
    child: 'Child reference price',
    duration: 'Validity',
    priceNote: 'Price note',
    coverage: 'Coverage',
    audience: 'Eligibility',
    transport: 'Included transport',
    bestFor: 'Best for',
    validity: 'Validity period',
    note: 'Before you travel',
    sourceTitle: 'Sources and purchase',
    sourceBody: 'This is an on-site FindMyJR-Pass detail page. Fares and rules can change, so confirm them with the operator before payment.',
    verifiedAt: 'Last checked',
    official: 'Operator details',
    buy: 'Official purchase',
    related: 'Other verified passes',
    view: 'View on-site details',
    days: 'days',
  },
  ja: {
    back: '確認済み周遊パスへ戻る',
    eyebrow: 'FindMyJR-Pass サイト内パス詳細',
    verified: '運行会社情報で確認済み',
    adult: 'おとな参考価格',
    child: 'こども参考価格',
    duration: '有効日数',
    priceNote: '料金の補足',
    coverage: '利用可能エリア',
    audience: '利用資格',
    transport: '利用できる交通機関',
    bestFor: 'おすすめの旅程',
    validity: '有効期間',
    note: '利用前の注意',
    sourceTitle: '出典・購入',
    sourceBody: 'このページは FindMyJR-Pass が整理したサイト内詳細です。料金・条件は変わる場合があるため、購入前に運行会社ページで再確認してください。',
    verifiedAt: '最終確認日',
    official: '運行会社の詳細',
    buy: '公式購入',
    related: 'その他の確認済みパス',
    view: 'サイト内詳細を見る',
    days: '日',
  },
};

const tones: Record<string, string> = {
  national: 'from-[#172554] via-[#1e3a8a] to-[#2563eb]',
  regional: 'from-[#064e3b] via-[#047857] to-[#0f766e]',
  city: 'from-[#7c2d12] via-[#c2410c] to-[#9a3412]',
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const { lang, id } = await params;
  const pass = getPassById(id);
  if (!pass) return {};

  return buildLocalizedMetadata({
    lang,
    path: `passlist/${pass.id}`,
    titles: {
      zh: `${pass.name.cn}｜价格、范围与购买条件｜FindMyJR-Pass`,
      en: `${pass.name.en} | Price, Coverage & Conditions | FindMyJR-Pass`,
      ja: `${pass.name.jp}｜料金・利用範囲・購入条件｜FindMyJR-Pass`,
    },
    descriptions: {
      zh: `查看${pass.name.cn}的成人与儿童价格、有效天数、适用范围、利用资格和运营方来源。`,
      en: `See adult and child prices, validity, coverage, eligibility and operator sources for ${pass.name.en}.`,
      ja: `${pass.name.jp}のおとな・こども料金、有効日数、利用範囲、利用資格、運行会社情報を確認。`,
    },
  });
}

export default async function VerifiedPassDetailPage({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const { lang, id } = await params;
  const pass = getPassById(id);
  if (!pass) notFound();

  const locale = (lang === 'en' || lang === 'ja' ? lang : 'zh') as keyof typeof copy;
  const t = copy[locale];
  const dict = getDictionary(locale as Locale);
  const name = locale === 'en' ? pass.name.en : locale === 'ja' ? pass.name.jp : pass.name.cn;
  const official = pass.officialLinks?.[0];
  const purchase = pass.purchaseLinks?.[0];
  const related = getAllPasses().filter(item => item.id !== pass.id).slice(0, 3);
  const description = locale === 'zh'
    ? pass.description
    : locale === 'ja'
      ? `${pass.company} が提供する鉄道パスです。利用範囲・資格・購入条件をこのページで確認できます。`
      : `An official rail pass from ${pass.company}. Review its coverage, eligibility and purchase conditions on this page.`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    inLanguage: locale === 'zh' ? 'zh-CN' : locale,
    about: { '@type': 'Thing', name, category: 'Rail pass' },
  };

  return (
    <div className="min-h-screen text-slate-950">
      <NavigationSection dict={dict} lang={lang} />
      <main>
        <section className={`relative overflow-hidden bg-gradient-to-br ${tones[pass.category] || tones.regional} text-white`}>
          <div aria-hidden="true" className="absolute -right-16 -top-24 h-80 w-80 rounded-full border-[48px] border-white/10" />
          <TrainFront aria-hidden="true" className="absolute -bottom-16 right-4 h-64 w-64 rotate-[-8deg] text-white/10" strokeWidth={1} />
          <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
            <Link href={`/${lang}/passlist`} className="inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white">
              <ArrowLeft className="h-4 w-4" />{t.back}
            </Link>
            <p className="mt-10 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/75">
              <ShieldCheck className="h-4 w-4" />{t.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">{name}</h1>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">{pass.company}</span>
              <span className="rounded-full bg-white px-4 py-2 text-slate-900">{t.verified}</span>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-8 lg:py-14">
          <article className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-base leading-8 text-slate-700">{description}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-primary/10 p-5">
                  <BadgeJapaneseYen className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-xs font-bold text-slate-400">{t.adult}</p>
                  <p className="mt-1 text-2xl font-black">¥{pass.price.adult.regular.toLocaleString()}</p>
                </div>
                <div className="rounded-2xl bg-primary/10 p-5">
                  <Users className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-xs font-bold text-slate-400">{t.child}</p>
                  <p className="mt-1 text-2xl font-black">¥{pass.price.child.regular.toLocaleString()}</p>
                </div>
                <div className="rounded-2xl bg-primary/10 p-5">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-xs font-bold text-slate-400">{t.duration}</p>
                  <p className="mt-1 text-2xl font-black">{pass.duration.join(' / ')} {t.days}</p>
                </div>
              </div>
              {pass.price.freeText && <p className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950"><strong>{t.priceNote}：</strong>{pass.price.freeText}</p>}
            </section>

            <section className="grid gap-5 md:grid-cols-2">
              <InfoCard icon={MapPin} title={t.coverage} items={[...pass.coverage.regions, ...(pass.coverage.description ? [pass.coverage.description] : [])]} />
              <InfoCard icon={Users} title={t.audience} items={pass.targetAudience} />
              <InfoCard icon={TrainFront} title={t.transport} items={pass.trainTypes} />
              <InfoCard icon={CheckCircle2} title={t.bestFor} items={pass.bestFor} />
            </section>

            {pass.validityPeriod?.description && (
              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="flex items-center gap-3 text-xl font-black"><CalendarDays className="h-6 w-6 text-primary" />{t.validity}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-700">{pass.validityPeriod.description}</p>
              </section>
            )}

            {pass.ticket_note && (
              <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
                <h2 className="font-black text-amber-950">{t.note}</h2>
                <p className="mt-3 text-sm leading-7 text-amber-950/85">{pass.ticket_note}</p>
              </section>
            )}
          </article>

          <aside>
            <section className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-primary"><ShieldCheck className="h-6 w-6" /></div>
              <h2 className="mt-5 text-xl font-black">{t.sourceTitle}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{t.sourceBody}</p>
              <dl className="mt-6 border-t border-slate-100 pt-5 text-sm">
                <dt className="font-bold text-slate-400">{t.verifiedAt}</dt>
                <dd className="mt-1 font-bold text-slate-800">{pass.lastVerifiedAt || '—'}</dd>
              </dl>
              <div className="mt-6 grid gap-3">
                {official && <a href={official.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary px-4 py-3 text-sm font-bold text-primary hover:bg-primary/10">{t.official}<ExternalLink className="h-4 w-4" /></a>}
                {purchase && <a href={purchase.url} target="_blank" rel={purchase.type === 'affiliate' ? 'sponsored noopener noreferrer' : 'noopener noreferrer'} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#c2410c] px-4 py-3 text-sm font-bold text-white hover:bg-[#9a3412]"><Ticket className="h-4 w-4" />{t.buy}</a>}
              </div>
            </section>
          </aside>
        </div>

        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black">{t.related}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map(item => {
                const itemName = locale === 'en' ? item.name.en : locale === 'ja' ? item.name.jp : item.name.cn;
                return <Link key={item.id} href={`/${lang}/passlist/${item.id}`} className="group rounded-2xl border border-slate-200 bg-[#f8faf8] p-5 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md">
                  <p className="text-xs font-bold text-primary">{item.company} · ¥{item.price.adult.regular.toLocaleString()}</p>
                  <h3 className="mt-3 font-black leading-6">{itemName}</h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-600 group-hover:text-primary">{t.view}<ArrowRight className="h-4 w-4" /></span>
                </Link>;
              })}
            </div>
          </div>
        </section>
      </main>
      <FooterSection dict={dict} lang={lang} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}

function InfoCard({ icon: Icon, title, items }: { icon: typeof MapPin; title: string; items: string[] }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="flex items-center gap-3 text-lg font-black"><Icon className="h-5 w-5 text-primary" />{title}</h2>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
        {items.map(item => <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/100" />{item}</li>)}
      </ul>
    </section>
  );
}
