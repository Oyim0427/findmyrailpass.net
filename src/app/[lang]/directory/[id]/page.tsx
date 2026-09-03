import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  BadgeJapaneseYen,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Database,
  MapPin,
  ShieldCheck,
  TicketCheck,
  TrainFront,
} from 'lucide-react';
import NavigationSection from '@/components/sections/NavigationSection';
import FooterSection from '@/components/sections/FooterSection';
import { getDictionary, type Locale } from '@/i18n/dictionaries';
import { buildLocalizedMetadata } from '@/lib/seo';
import {
  DOMESTIC_DIRECTORY_PASSES,
  DOMESTIC_DIRECTORY_SNAPSHOT_DATE,
  type DomesticDirectoryPass,
} from '@/data/domesticPassDirectory';
import {
  resolveDirectoryOfficialSource,
  type DirectoryOfficialSourceKind,
} from '@/data/directoryOfficialSourceOverrides';
import { getDirectoryPassCategoryLabel } from '@/lib/directoryPassCategories';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return DOMESTIC_DIRECTORY_PASSES.map(pass => ({ id: pass.id }));
}

const copy = {
  zh: {
    back: '返回地方券目录',
    directory: '地方券目录',
    category: '票券分类',
    eyebrow: 'FindMyJR-Pass 站内周游券详情',
    price: '参考价格',
    validity: '有效期',
    salesPeriod: '销售期间',
    usePeriod: '使用期间',
    salesLocation: '销售地点',
    missing: '目录暂无记录',
    sourceTitle: '数据来源与核验状态',
    sourceBody: '本站把公开目录信息整理为独立详情页，并保存关联来源用于后台校正。为避免来回跳转，本页不提供 BIGLOBE 或运营方外链。',
    sourceDomain: '来源域名',
    checked: '资料快照',
    corrected: '历史失效地址已替换',
    exact: '已找到运营方的对应产品页',
    overview: '已找到运营方的票券总览页',
    recorded: '已记录关联来源，尚未逐项人工复核',
    unavailable: '运营方来源仍待补充',
    warningTitle: '购买前请再次确认',
    warningBody: '票价、适用对象、销售地点和使用限制可能临时变化。本页用于检索与比较，不是车票，也不构成销售承诺。',
    related: '同一运营方或地区的其他票券',
    relatedCta: '查看详情',
    statusOnSale: '目录标记在售',
    statusScheduled: '即将或定期开售',
    statusReview: '季节／特定日，待复核',
    dataNotes: '了解本站的数据处理方式',
  },
  en: {
    back: 'Back to the local-pass directory',
    directory: 'Local-pass directory',
    category: 'Pass category',
    eyebrow: 'FindMyJR-Pass on-site pass detail',
    price: 'Reference price',
    validity: 'Validity',
    salesPeriod: 'Sales period',
    usePeriod: 'Travel period',
    salesLocation: 'Where it is sold',
    missing: 'Not recorded in the directory',
    sourceTitle: 'Source and review status',
    sourceBody: 'We turn public directory records into standalone on-site pages and retain related sources for background checks. This page does not link visitors to BIGLOBE or operator sites.',
    sourceDomain: 'Source domain',
    checked: 'Data snapshot',
    corrected: 'A stale historical URL was replaced',
    exact: 'A matching operator product page was found',
    overview: 'An operator ticket overview was found',
    recorded: 'A related source is recorded but not individually reviewed',
    unavailable: 'An operator source still needs to be added',
    warningTitle: 'Confirm again before buying',
    warningBody: 'Fares, eligibility, sales locations and restrictions can change at short notice. This page is for discovery and comparison; it is not a ticket or sales promise.',
    related: 'More passes from the same operator or area',
    relatedCta: 'View details',
    statusOnSale: 'Listed on sale',
    statusScheduled: 'Scheduled or recurring sale',
    statusReview: 'Seasonal/specific dates; review needed',
    dataNotes: 'How we process directory data',
  },
  ja: {
    back: '地方きっぷ一覧へ戻る',
    directory: '地方きっぷ一覧',
    category: 'きっぷ分類',
    eyebrow: 'FindMyJR-Pass サイト内きっぷ詳細',
    price: '参考価格',
    validity: '有効期間',
    salesPeriod: '発売期間',
    usePeriod: '利用期間',
    salesLocation: '発売場所',
    missing: '一覧に記録がありません',
    sourceTitle: '出典と確認状況',
    sourceBody: '公開一覧の情報をサイト内の個別ページに整理し、関連元は裏側の確認用として保存します。BIGLOBE や事業者サイトへの外部リンクは設置していません。',
    sourceDomain: '出典ドメイン',
    checked: 'データスナップショット',
    corrected: '過去の無効 URL を差し替え済み',
    exact: '事業者の該当商品ページを確認',
    overview: '事業者のお得なきっぷ一覧を確認',
    recorded: '関連元を記録済み・個別の目視確認前',
    unavailable: '事業者の出典を追加確認中',
    warningTitle: '購入前に再確認してください',
    warningBody: '料金、利用資格、発売場所、利用制限は予告なく変わる場合があります。本ページは検索・比較用であり、乗車券や販売保証ではありません。',
    related: '同じ事業者・地域のその他のきっぷ',
    relatedCta: '詳細を見る',
    statusOnSale: '発売中表記',
    statusScheduled: '発売予定・定期発売',
    statusReview: '季節・特定日／要確認',
    dataNotes: 'データの扱いについて',
  },
};

function getPass(id: string) {
  return DOMESTIC_DIRECTORY_PASSES.find(pass => pass.id === id);
}

function getRelatedPasses(pass: DomesticDirectoryPass) {
  const sameCompany = DOMESTIC_DIRECTORY_PASSES.filter(item => item.id !== pass.id && item.company === pass.company);
  const sameCategory = DOMESTIC_DIRECTORY_PASSES.filter(
    item => item.id !== pass.id && item.category === pass.category && item.region === pass.region && item.company !== pass.company,
  );
  const sameRegion = DOMESTIC_DIRECTORY_PASSES.filter(
    item => item.id !== pass.id && item.region === pass.region && item.category !== pass.category && item.company !== pass.company,
  );
  return [...sameCompany, ...sameCategory, ...sameRegion].slice(0, 3);
}

function sourceLabel(kind: DirectoryOfficialSourceKind, t: (typeof copy)['zh']) {
  if (kind === 'exact-product') return t.exact;
  if (kind === 'operator-overview') return t.overview;
  if (kind === 'recorded-related') return t.recorded;
  return t.unavailable;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const { lang, id } = await params;
  const pass = getPass(id);
  if (!pass) return {};

  return buildLocalizedMetadata({
    lang,
    path: `directory/${pass.id}`,
    titles: {
      zh: `${pass.name}｜票价、有效期与销售期｜FindMyJR-Pass`,
      en: `${pass.name} | Price, Validity & Sales Period | FindMyJR-Pass`,
      ja: `${pass.name}｜料金・有効期間・発売期間｜FindMyJR-Pass`,
    },
    descriptions: {
      zh: `查看${pass.company}「${pass.name}」的参考价格、有效期、销售期间、使用期间与来源状态。全部内容在本站详情页展示。`,
      en: `See the recorded price, validity, sales period, travel period and source status for ${pass.name} by ${pass.company}, all on one on-site page.`,
      ja: `${pass.company}「${pass.name}」の参考料金、有効期間、発売期間、利用期間、出典状況をサイト内で確認できます。`,
    },
  });
}

export default async function DirectoryPassDetailPage({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const { lang, id } = await params;
  const pass = getPass(id);
  if (!pass) notFound();

  const locale = (lang === 'en' || lang === 'ja' ? lang : 'zh') as keyof typeof copy;
  const t = copy[locale];
  const dict = getDictionary(locale as Locale);
  const source = resolveDirectoryOfficialSource(pass);
  const categoryLabel = getDirectoryPassCategoryLabel(pass.category, locale);
  const relatedPasses = getRelatedPasses(pass);
  const status = pass.status === 'on-sale'
    ? t.statusOnSale
    : pass.status === 'scheduled'
      ? t.statusScheduled
      : t.statusReview;
  const statusClass = pass.status === 'on-sale'
    ? 'bg-teal-100 text-primary-dark'
    : pass.status === 'scheduled'
      ? 'bg-sky-100 text-sky-900'
      : 'bg-amber-100 text-amber-950';
  const factRows = [
    { label: t.price, value: pass.priceText, icon: BadgeJapaneseYen },
    { label: t.validity, value: pass.validityText, icon: Clock3 },
    { label: t.salesPeriod, value: pass.salesPeriod, icon: CalendarDays },
    { label: t.usePeriod, value: pass.usePeriodText, icon: TrainFront },
    { label: t.salesLocation, value: pass.salesLocationText, icon: TicketCheck },
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pass.name,
    description: `${pass.company} ${pass.name} — ${pass.salesPeriod}`,
    inLanguage: locale === 'zh' ? 'zh-CN' : locale,
    about: {
      '@type': 'Thing',
      name: pass.name,
      category: 'Rail pass',
    },
  };

  return (
    <div className="min-h-screen text-slate-950">
      <NavigationSection dict={dict} lang={lang} />
      <main>
        <section className="relative overflow-hidden border-b border-emerald-950/10 bg-gradient-to-br from-[#062f2b] via-[#0b4a43] to-[#0d6570] text-white">
          <div aria-hidden="true" className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-teal-100">
              <Link href={`/${lang}/directory`} className="inline-flex items-center gap-2 font-semibold hover:text-white">
                <ArrowLeft className="h-4 w-4" />{t.back}
              </Link>
              <span aria-hidden="true">/</span>
              <span>{t.directory}</span>
            </nav>

            <div className="mt-10 max-w-4xl">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                <Database className="h-4 w-4" />{t.eyebrow}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/12 px-3 py-1 text-xs font-bold text-white ring-1 ring-inset ring-white/20">
                  {pass.region}
                </span>
                <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs font-bold text-cyan-50 ring-1 ring-inset ring-cyan-200/25">
                  {categoryLabel}
                </span>
                <span className={`rounded-full px-3 py-1 text-xs font-bold ${statusClass}`}>{status}</span>
              </div>
              <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-5xl">{pass.name}</h1>
              <p className="mt-5 flex items-center gap-2 text-base font-semibold text-emerald-50 sm:text-lg">
                <Building2 className="h-5 w-5 text-cyan-200" />{pass.company}
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_21rem] lg:px-8 lg:py-14">
          <article className="space-y-8">
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 bg-primary/10/80 px-6 py-5 sm:px-8">
                <h2 className="flex items-center gap-3 text-xl font-black text-slate-950">
                  <TicketCheck className="h-6 w-6 text-primary" />{pass.name}
                </h2>
              </div>
              <dl className="divide-y divide-slate-100">
                {factRows.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="grid gap-2 px-6 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6 sm:px-8">
                    <dt className="flex items-center gap-2 text-sm font-bold text-slate-500">
                      <Icon className="h-4 w-4 text-primary" />{label}
                    </dt>
                    <dd className={`text-sm font-semibold leading-6 ${value ? 'text-slate-800' : 'text-slate-400'}`}>
                      {value || t.missing}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <h2 className="flex items-center gap-3 text-lg font-black text-amber-950">
                <ShieldCheck className="h-6 w-6" />{t.warningTitle}
              </h2>
              <p className="mt-3 text-sm leading-7 text-amber-950/85">{t.warningBody}</p>
            </section>
          </article>

          <aside className="space-y-6">
            <section className="rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-100 text-primary">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-lg font-black text-slate-950">{t.sourceTitle}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{t.sourceBody}</p>

              <dl className="mt-6 space-y-4 border-t border-slate-100 pt-5 text-sm">
                <div>
                  <dt className="font-bold text-slate-400">{t.category}</dt>
                  <dd className="mt-1 font-semibold text-slate-800">{categoryLabel}</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-400">{t.sourceDomain}</dt>
                  <dd className="mt-1 break-all font-semibold text-slate-800">{source.domain || t.unavailable}</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-400">{t.checked}</dt>
                  <dd className="mt-1 font-semibold text-slate-800">{DOMESTIC_DIRECTORY_SNAPSHOT_DATE}</dd>
                </div>
              </dl>

              <p className="mt-5 rounded-2xl bg-primary/10 p-4 text-sm font-bold leading-6 text-primary-dark">
                {sourceLabel(source.kind, t)}
                {source.corrected && <span className="mt-1 block text-xs font-semibold text-primary">{t.corrected}</span>}
              </p>

              <Link href={`/${lang}/data-sources`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark">
                {t.dataNotes}<ArrowRight className="h-4 w-4" />
              </Link>
            </section>

            <div className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-300">
                <MapPin className="h-4 w-4" />{pass.region}
              </p>
              <p className="mt-3 text-lg font-black">{pass.company}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{pass.salesPeriod}</p>
            </div>
          </aside>
        </div>

        {relatedPasses.length > 0 && (
          <section className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-black tracking-tight text-slate-950">{t.related}</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {relatedPasses.map(item => (
                  <Link
                    key={item.id}
                    href={`/${lang}/directory/${item.id}`}
                    className="group rounded-2xl border border-slate-200 bg-[#f8faf8] p-5 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
                  >
                    <p className="text-xs font-bold text-primary">
                      {getDirectoryPassCategoryLabel(item.category, locale)} · {item.region} · {item.company}
                    </p>
                    <h3 className="mt-3 font-black leading-6 text-slate-950">{item.name}</h3>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-600 group-hover:text-primary">
                      {t.relatedCta}<ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <FooterSection dict={dict} lang={lang} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
