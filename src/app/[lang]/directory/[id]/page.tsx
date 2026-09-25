import Link from 'next/link';
import Image from 'next/image';
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
import AdSlot from '@/components/AdSlot';
import PassFeedback from '@/components/PassFeedback';
import PurchaseChannels from '@/components/PurchaseChannels';
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
import { getPassImage } from '@/lib/passImages';
import { getDirectoryIndexDecision, getIndexableDirectoryPasses } from '@/lib/passCatalog';
import { getRegionLabel } from '@/lib/regionLabels';

export const dynamic = 'force-static';
export const dynamicParams = false;
const INDEXABLE_DIRECTORY_PASSES = getIndexableDirectoryPasses(DOMESTIC_DIRECTORY_PASSES);

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
    adult: '成人',
    child: '儿童',
    validity: '有效期',
    salesPeriod: '销售期间',
    usePeriod: '使用期间',
    salesLocation: '销售地点',
    missing: '目录暂无记录',
    sourceTitle: '数据来源与核验状态',
    sourceBody: '本站把公开目录信息整理为独立详情页，并保存关联来源用于后台校正。页面详情不跳转 BIGLOBE；经过核验的运营方产品入口会在购买渠道中单独提供。',
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
    adult: 'Adult',
    child: 'Child',
    validity: 'Validity',
    salesPeriod: 'Sales period',
    usePeriod: 'Travel period',
    salesLocation: 'Where it is sold',
    missing: 'Not recorded in the directory',
    sourceTitle: 'Source and review status',
    sourceBody: 'We turn public directory records into standalone on-site pages and retain related sources for background checks. Details do not send visitors to BIGLOBE; a verified operator product page is listed separately under purchase channels.',
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
    adult: '大人',
    child: '小人',
    validity: '有効期間',
    salesPeriod: '発売期間',
    usePeriod: '利用期間',
    salesLocation: '発売場所',
    missing: '一覧に記録がありません',
    sourceTitle: '出典と確認状況',
    sourceBody: '公開一覧の情報をサイト内の個別ページに整理し、関連元は裏側の確認用として保存します。詳細表示はBIGLOBEへ移動せず、確認済みの事業者商品ページは購入先欄に分けて掲載します。',
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

function getRawPass(id: string) {
  return DOMESTIC_DIRECTORY_PASSES.find(pass => pass.id === id);
}

function getPass(id: string) {
  return INDEXABLE_DIRECTORY_PASSES.find(pass => pass.id === id) || getRawPass(id);
}

function getRelatedPasses(pass: DomesticDirectoryPass) {
  const sameCompany = INDEXABLE_DIRECTORY_PASSES.filter(item => item.id !== pass.id && item.company === pass.company);
  const sameCategory = INDEXABLE_DIRECTORY_PASSES.filter(
    item => item.id !== pass.id && item.category === pass.category && item.region === pass.region && item.company !== pass.company,
  );
  const sameRegion = INDEXABLE_DIRECTORY_PASSES.filter(
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

function splitAdultChildPrice(value: string | undefined) {
  const match = value?.match(/^大人\s*[:：]?\s*([\d,]+円)\s*(?:[／/]\s*|\s+)小人\s*[:：]?\s*([\d,]+円)$/);
  return match ? { adult: match[1], child: match[2] } : null;
}

function splitPriceVariants(value: string | undefined) {
  if (!value) return null;
  const segments = value.trim().replace(/\s*\/\s*$/, '').split(/\s+\/\s*/);
  if (segments.length < 2) return null;

  const variants: Array<{ label: string; adult: string; child: string }> = [];
  for (const segment of segments) {
    const match = segment.match(/^(.+?)\s*大人\s*[:：]?\s*([\d,]+円)\s*(?:[／/]\s*|\s+)小人\s*[:：]?\s*([\d,]+円)$/);
    if (!match) return null;
    variants.push({ label: match[1].trim().replace(/[：:]$/, ''), adult: match[2], child: match[3] });
  }
  return variants;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const { lang, id } = await params;
  const rawPass = getRawPass(id);
  if (!rawPass) return {};
  const pass = getPass(id);
  if (!pass) return {};
  const locale = lang === 'en' || lang === 'ja' ? lang : 'zh';
  const regionLabel = getRegionLabel(pass.region, locale);
  const decision = getDirectoryIndexDecision(rawPass, DOMESTIC_DIRECTORY_PASSES);

  const metadata = buildLocalizedMetadata({
    lang,
    path: `directory/${pass.id}`,
    titles: {
      zh: `${pass.name}｜${pass.company}・${regionLabel}票价与有效期｜FindMyJR-Pass`,
      en: `${pass.name} | ${pass.company}, ${regionLabel} | Price & Validity`,
      ja: `${pass.name}｜${pass.company}・${regionLabel}｜料金・有効期間`,
    },
    descriptions: {
      zh: `查看${pass.company}「${pass.name}」的参考价格（${pass.priceText || '以官网为准'}）、有效期、销售期间、使用期间与官方来源核验状态。`,
      en: `Check ${pass.name} by ${pass.company}: recorded price (${pass.priceText || 'see operator'}), validity, sales period, travel period and verified source status.`,
      ja: `${pass.company}「${pass.name}」の参考料金（${pass.priceText || '公式サイトで確認'}）、有効期間、発売期間、利用期間、公式情報の確認状況。`,
    },
  });
  if (decision.indexable) return metadata;
  const canonicalPath = (value: 'zh' | 'en' | 'ja') => `/${value}/directory/${decision.canonicalId}`;
  return {
    ...metadata,
    robots: { index: false, follow: true },
    alternates: {
      canonical: canonicalPath(locale),
      languages: { 'zh-CN': canonicalPath('zh'), en: canonicalPath('en'), ja: canonicalPath('ja'), 'x-default': canonicalPath('en') },
    },
  };
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
  const regionLabel = getRegionLabel(pass.region, locale);
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
  const adultChildPrice = splitAdultChildPrice(pass.priceText);
  const priceVariants = splitPriceVariants(pass.priceText);
  const overviewPrice = adultChildPrice
    ? `${t.adult}：${adultChildPrice.adult}、${t.child}：${adultChildPrice.child}`
    : pass.priceText;
  const factRows = [
    { label: t.price, value: pass.priceText, icon: BadgeJapaneseYen },
    { label: t.validity, value: pass.validityText, icon: Clock3 },
    { label: t.salesPeriod, value: pass.salesPeriod, icon: CalendarDays },
    { label: t.usePeriod, value: pass.usePeriodText, icon: TrainFront },
    { label: t.salesLocation, value: pass.salesLocationText, icon: TicketCheck },
  ];
  const overview = locale === 'zh'
    ? `${pass.name}由${pass.company}发行，本站将其归入${regionLabel}的${categoryLabel}。${priceVariants ? '不同票种的参考价格见下方' : `当前记录价格为${overviewPrice || t.missing}`}，有效期为${pass.validityText || t.missing}，销售期为${pass.salesPeriod}。`
    : locale === 'en'
      ? `${pass.name} is issued by ${pass.company} and listed as a ${categoryLabel} for ${regionLabel}. ${priceVariants ? 'Prices by ticket type are shown below' : `The recorded price is ${overviewPrice || t.missing}`}; validity is ${pass.validityText || t.missing}, and the sales period is ${pass.salesPeriod}.`
      : `${pass.name}は${pass.company}が発売する、${regionLabel}の${categoryLabel}です。${priceVariants ? '券種ごとの参考料金は下記に掲載しています' : `記録料金は${overviewPrice || t.missing}`}、有効期間は${pass.validityText || t.missing}、発売期間は${pass.salesPeriod}です。`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pass.name,
    description: `${pass.company} ${pass.name} — ${pass.salesPeriod}`,
    inLanguage: locale === 'zh' ? 'zh-CN' : locale,
    dateModified: DOMESTIC_DIRECTORY_SNAPSHOT_DATE,
    isBasedOn: source.url,
    publisher: { '@type': 'Organization', name: 'FindMyJR-Pass' },
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
          <Image src={getPassImage(pass)} alt={pass.name} fill priority sizes="100vw" className="object-cover object-center opacity-60" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-950/70 to-slate-950/30" />
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
                  {regionLabel}
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
              <p className="px-6 py-5 text-sm leading-7 text-slate-600 sm:px-8">{overview}</p>
              <dl className="divide-y divide-slate-100">
                {factRows.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="grid gap-2 px-6 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6 sm:px-8">
                    <dt className="flex items-center gap-2 text-sm font-bold text-slate-500">
                      <Icon className="h-4 w-4 text-primary" />{label}
                    </dt>
                    <dd className={`text-sm font-semibold leading-6 ${value ? 'text-slate-800' : 'text-slate-400'}`}>
                      {label === t.price && priceVariants ? (
                        <div className="grid gap-3 md:grid-cols-2">
                          {priceVariants.map((variant, index) => (
                            <div key={`${variant.label}-${index}`} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                              <div className="font-bold text-slate-900">{variant.label}</div>
                              <div className="mt-3 grid grid-cols-2 gap-3 border-t border-slate-200 pt-3">
                                <div><div className="text-xs text-slate-500">{t.adult}</div><div className="mt-1 text-base font-bold">{variant.adult}</div></div>
                                <div><div className="text-xs text-slate-500">{t.child}</div><div className="mt-1 text-base font-bold">{variant.child}</div></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : label === t.price && adultChildPrice ? (
                        <div className="grid gap-2 sm:grid-cols-2">
                          <div><span className="mr-2 text-slate-500">{t.adult}</span>{adultChildPrice.adult}</div>
                          <div><span className="mr-2 text-slate-500">{t.child}</span>{adultChildPrice.child}</div>
                        </div>
                      ) : value || t.missing}
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

            <PurchaseChannels
              passId={pass.id}
              lang={lang}
              officialLinks={source.kind === 'exact-product' && source.url ? [{ url: source.url, kind: 'details' }] : []}
            />

            <div className="rounded-3xl bg-slate-950 p-6 text-white">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-cyan-300">
                <MapPin className="h-4 w-4" />{regionLabel}
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
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#f8faf8] transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
                  >
                    <div className="relative h-32 overflow-hidden bg-slate-200">
                      <Image
                        src={getPassImage(item)}
                        alt={item.name}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" aria-hidden="true" />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-bold text-primary">
                        {getDirectoryPassCategoryLabel(item.category, locale)} · {item.region} · {item.company}
                      </p>
                      <h3 className="mt-3 font-black leading-6 text-slate-950">{item.name}</h3>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-600 group-hover:text-primary">
                        {t.relatedCta}<ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
        <PassFeedback passId={pass.id} passName={pass.name} passPath={`/${lang}/directory/${pass.id}/`} lang={lang} />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AdSlot
            slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_PASS_DETAIL}
            label={lang === 'zh' ? '广告' : lang === 'ja' ? '広告' : 'Advertisement'}
          />
        </div>
      </main>
      <FooterSection dict={dict} lang={lang} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
