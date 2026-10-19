import Link from 'next/link';
import DirectoryFare from '@/components/DirectoryFare';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  ShieldCheck,
  Store,
  TicketCheck,
  TrainFront,
  Users,
} from 'lucide-react';
import NavigationSection from '@/components/sections/NavigationSection';
import FooterSection from '@/components/sections/FooterSection';
import AdSlot from '@/components/AdSlot';
import PassFeedback from '@/components/PassFeedback';
import PurchaseChannels from '@/components/PurchaseChannels';
import PassFreeAreaDiagram from '@/components/PassFreeAreaDiagram';
import { PassDetailColumns, PassDetailHero, PassDetailInfoCard, PassDetailMetricCard } from '@/components/PassDetailTemplate';
import { getDictionary, type Locale } from '@/i18n/dictionaries';
import { buildLocalizedMetadata } from '@/lib/seo';
import {
  DOMESTIC_DIRECTORY_PASSES,
  DOMESTIC_DIRECTORY_SNAPSHOT_DATE,
  type DomesticDirectoryPass,
} from '@/data/domesticPassDirectory';
import {
  resolveDirectoryOfficialSource,
} from '@/data/directoryOfficialSourceOverrides';
import { getDirectoryPassCategoryLabel } from '@/lib/directoryPassCategories';
import { getPassImage } from '@/lib/passImages';
import { getCatalogPassName, getDirectoryIndexDecision, getIndexableDirectoryPasses } from '@/lib/passCatalog';
import { getRegionLabel } from '@/lib/regionLabels';
import { normalizePassDisplayText as displayText } from '@/lib/passDisplayText';
import { getDirectoryAvailability, getDirectoryPriceText } from '@/lib/directoryQuality';
import { getPassEligibilityLabel } from '@/lib/passEligibility';
import { getPassFeatureLink } from '@/lib/passFeatureLinks';
import { getDirectoryTransportModes } from '@/lib/passTransport';
import { getDirectoryPassAreaStops } from '@/lib/passAreaStops';

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
    coverage: '适用范围',
    transport: '可乘坐交通工具',
    bestFor: '适合这样的行程',
    eyebrow: 'FindMyJR-Pass 站内周游券详情',
    price: '参考价格',
    adult: '成人',
    child: '儿童',
    validity: '有效期',
    salesPeriod: '销售期间',
    usePeriod: '使用期间',
    salesLocation: '销售地点',
    eligibility: '适用人群',
    missing: '目录暂无记录',
    sourceTitle: '官方来源与记录日期',
    sourceBody: '本页提供运营方产品链接及已记录资料。价格、资格及当前销售状态请以官网为准。',
    checked: '资料记录日期',
    warningTitle: '购买前请再次确认',
    warningBody: '票价、适用对象、销售地点和使用限制可能临时变化。本页用于检索与比较，不是车票，也不构成销售承诺。',
    related: '同一运营方或地区的其他票券',
    relatedCta: '查看详情',
    statusOnSale: '目录标记在售',
    statusScheduled: '即将或定期开售',
    statusReview: '季节／特定日，待复核',
  },
  en: {
    back: 'Back to the local-pass directory',
    directory: 'Local-pass directory',
    category: 'Pass category',
    coverage: 'Coverage',
    transport: 'Included transport',
    bestFor: 'Best for',
    eyebrow: 'FindMyJR-Pass on-site pass detail',
    price: 'Reference price',
    adult: 'Adult',
    child: 'Child',
    validity: 'Validity',
    salesPeriod: 'Sales period',
    usePeriod: 'Travel period',
    salesLocation: 'Where it is sold',
    eligibility: 'Eligibility',
    missing: 'Not recorded in the directory',
    sourceTitle: 'Official source and record date',
    sourceBody: 'Operator links and recorded information are provided for reference. Confirm current fares, eligibility and availability with the operator.',
    checked: 'Record date',
    warningTitle: 'Confirm again before buying',
    warningBody: 'Fares, eligibility, sales locations and restrictions can change at short notice. This page is for discovery and comparison; it is not a ticket or sales promise.',
    related: 'More passes from the same operator or area',
    relatedCta: 'View details',
    statusOnSale: 'Listed on sale',
    statusScheduled: 'Scheduled or recurring sale',
    statusReview: 'Seasonal/specific dates; review needed',
  },
  ja: {
    back: '地方きっぷ一覧へ戻る',
    directory: '地方きっぷ一覧',
    category: 'きっぷ分類',
    coverage: '利用可能エリア',
    transport: '利用できる交通機関',
    bestFor: 'おすすめの旅程',
    eyebrow: 'FindMyJR-Pass サイト内きっぷ詳細',
    price: '参考価格',
    adult: '大人',
    child: '小人',
    validity: '有効期間',
    salesPeriod: '発売期間',
    usePeriod: '利用期間',
    salesLocation: '発売場所',
    eligibility: '利用資格',
    missing: '一覧に記録がありません',
    sourceTitle: '公式の出典・記録日',
    sourceBody: '事業者の商品ページと記録済み情報を掲載しています。現在の料金・利用資格・発売状況は公式サイトでご確認ください。',
    checked: '情報記録日',
    warningTitle: '購入前に再確認してください',
    warningBody: '料金、利用資格、発売場所、利用制限は予告なく変わる場合があります。本ページは検索・比較用であり、乗車券や販売保証ではありません。',
    related: '同じ事業者・地域のその他のきっぷ',
    relatedCta: '詳細を見る',
    statusOnSale: '発売中表記',
    statusScheduled: '発売予定・定期発売',
    statusReview: '季節・特定日／要確認',
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

function splitSalesLocations(value: string): string[] {
  const normalized = displayText(value)
    .replace(/<br\s*\/?>?/gi, ' / ')
    .replace(/(案内所|発売所|窓口|車内|MaaS\(スマートフォン\))\s+(?=\S)/g, '$1 / ');

  return normalized
    .split(/\s*\/\s*/)
    .flatMap(group => {
      const commaItems = group.split(/[、,，]/).map(item => item.trim()).filter(Boolean);
      return commaItems.length > 1 && commaItems.length <= 6 ? commaItems : [group.trim()];
    })
    .filter(Boolean);
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const { lang, id } = await params;
  const rawPass = getRawPass(id);
  if (!rawPass) return {};
  const pass = getPass(id);
  if (!pass) return {};
  const locale = lang === 'en' || lang === 'ja' ? lang : 'zh';
  const decision = getDirectoryIndexDecision(rawPass, DOMESTIC_DIRECTORY_PASSES);
  const names = {
    zh: displayText(getCatalogPassName(pass, 'zh')),
    en: displayText(getCatalogPassName(pass, 'en')),
    ja: displayText(getCatalogPassName(pass, 'ja')),
  };
  const company = displayText(pass.company);
  const price = displayText(getDirectoryPriceText(pass.priceText));

  const metadata = buildLocalizedMetadata({
    lang,
    path: `directory/${pass.id}`,
    titles: {
      zh: `${names.zh}｜${company}・${getRegionLabel(pass.region, 'zh')}票价与有效期｜FindMyJR-Pass`,
      en: `${names.en} | ${company}, ${getRegionLabel(pass.region, 'en')} | Price & Validity`,
      ja: `${names.ja}｜${company}・${getRegionLabel(pass.region, 'ja')}｜料金・有効期間`,
    },
    descriptions: {
      zh: `查看${company}「${names.zh}」的参考价格（${price || '以官网为准'}）、有效期、销售期间、使用期间与官方来源核验状态。`,
      en: `Check ${names.en} by ${company}: recorded price (${price || 'see operator'}), validity, sales period, travel period and verified source status.`,
      ja: `${company}「${names.ja}」の参考料金（${price || '公式サイトで確認'}）、有効期間、発売期間、利用期間、公式情報の確認状況。`,
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
  const name = displayText(getCatalogPassName(pass, locale));
  const company = displayText(pass.company);
  const categoryLabel = displayText(getDirectoryPassCategoryLabel(pass.category, locale));
  const regionLabel = displayText(getRegionLabel(pass.region, locale));
  const relatedPasses = getRelatedPasses(pass);
  const availability = getDirectoryAvailability(pass);
  const status = availability === 'ended'
    ? (locale === 'zh' ? '记录销售期已结束' : locale === 'en' ? 'Recorded sales period ended' : '記録された発売期間は終了')
    : availability === 'on-sale'
    ? t.statusOnSale
    : availability === 'scheduled'
      ? t.statusScheduled
      : t.statusReview;
  const priceText = displayText(getDirectoryPriceText(pass.priceText));
  const validityText = displayText(pass.validityText);
  const salesPeriod = displayText(pass.salesPeriod);
  const usePeriodText = displayText(pass.usePeriodText);
  const salesLocationText = displayText(pass.salesLocationText);
  const eligibility = getPassEligibilityLabel(pass, locale);
  const featureLink = getPassFeatureLink(pass, locale);
  const transportModes = getDirectoryTransportModes(pass, locale);
  const areaStops = getDirectoryPassAreaStops(pass, locale);
  const overview = locale === 'zh'
    ? `${name}由${company}发行，本站将其归入${regionLabel}的${categoryLabel}。下方整理已记录的价格与使用条件，购买前请以运营方公布的信息为准。`
    : locale === 'en'
      ? `${name} is issued by ${company} and listed as a ${categoryLabel} for ${regionLabel}. Recorded prices and conditions appear below; check the operator before buying.`
      : `${name}は${company}が発売する、${regionLabel}の${categoryLabel}です。記録済みの料金・利用条件を下記に整理しています。購入前に事業者の最新情報をご確認ください。`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description: `${company} ${name} — ${salesPeriod}`,
    inLanguage: locale === 'zh' ? 'zh-CN' : locale,
    dateModified: pass.lastVerifiedAt || DOMESTIC_DIRECTORY_SNAPSHOT_DATE,
    isBasedOn: source.url,
    publisher: { '@type': 'Organization', name: 'FindMyJR-Pass' },
    about: {
      '@type': 'Thing',
      name,
      category: 'Rail pass',
    },
  };

  return (
    <div className="min-h-screen text-slate-950">
      <NavigationSection dict={dict} lang={lang} />
      <main>
        <PassDetailHero
          backHref={`/${lang}/directory`}
          backLabel={t.back}
          eyebrow={t.eyebrow}
          title={name}
          company={company}
          badge={status}
          image={getPassImage(pass)}
          category={pass.category}
        />

        <PassDetailColumns aside={<>
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-primary"><ShieldCheck className="h-6 w-6" /></div>
            <h2 className="mt-5 text-xl font-black">{t.sourceTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{t.sourceBody}</p>
            <dl className="mt-6 border-t border-slate-100 pt-5 text-sm">
              <div><dt className="font-bold text-slate-400">{t.checked}</dt><dd className="mt-1 font-semibold text-slate-800">{pass.lastVerifiedAt || DOMESTIC_DIRECTORY_SNAPSHOT_DATE}</dd></div>
            </dl>
          </section>
          <PurchaseChannels
            passId={pass.id}
            lang={lang}
            officialLinks={source.kind === 'exact-product' && source.url ? [{ url: source.url, kind: 'details' }] : []}
          />
          <PassFeedback passId={pass.id} passName={name} passPath={`/${lang}/directory/${pass.id}/`} lang={lang} />
        </>}>
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-base leading-8 text-slate-700">{overview}</p>
            {availability === 'ended' && <p role="status" className="mt-4 rounded-xl bg-amber-50 p-4 text-sm font-bold text-amber-950">{locale === 'zh' ? '本页为历史记录，不再作为在售票券推荐。是否续售请到官网确认。' : locale === 'en' ? 'This is an archived record and is no longer recommended as on sale. Check the operator for any renewal.' : 'このページは過去の記録です。発売中のきっぷとしては紹介していません。継続発売の有無は公式サイトでご確認ください。'}</p>}
            <div className="mt-8">
              <h2 className="mb-3 text-sm font-bold text-slate-500">{t.price}</h2>
              <DirectoryFare
                value={priceText}
                lang={locale}
                trailing={validityText ? <PassDetailMetricCard icon={CalendarDays} label={t.validity} value={validityText} inlineLabel /> : undefined}
              />
            </div>
            <p className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950"><strong>{t.warningTitle}：</strong>{t.warningBody}</p>
          </section>

          <PassFreeAreaDiagram
            lang={locale}
            stops={areaStops}
          />

          <section className="grid gap-5 md:grid-cols-2">
            <PassDetailInfoCard
              icon={MapPin}
              title={t.coverage}
              items={[
                <Link key={pass.region} href={`/${locale}/passlist?region=${encodeURIComponent(pass.region)}`} className="font-bold text-primary hover:text-primary-dark hover:underline">
                  {regionLabel}
                </Link>,
              ]}
            />
            <PassDetailInfoCard icon={Users} title={t.eligibility} items={[eligibility]} />
            <PassDetailInfoCard icon={Store} title={t.salesLocation} items={salesLocationText ? splitSalesLocations(salesLocationText) : [t.missing]} />
            <PassDetailInfoCard icon={CalendarDays} title={t.salesPeriod} items={[salesPeriod || t.missing]} />
            <PassDetailInfoCard icon={Clock3} title={t.usePeriod} items={[usePeriodText || t.missing]} />
            <PassDetailInfoCard icon={TicketCheck} title={t.category} items={[categoryLabel]} />
            <PassDetailInfoCard icon={TrainFront} title={t.transport} items={transportModes} />
            <PassDetailInfoCard
              icon={CheckCircle2}
              title={t.bestFor}
              items={[
                locale === 'zh'
                  ? `适合以${regionLabel}为中心移动的行程`
                  : locale === 'en'
                    ? `Trips focused on ${regionLabel}`
                    : `${regionLabel}を中心に移動する旅程`,
              ]}
              actionHref={featureLink.href}
              actionLabel={featureLink.label}
            />
          </section>
        </PassDetailColumns>

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
                        alt={displayText(getCatalogPassName(item, locale))}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" aria-hidden="true" />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-bold text-primary">
                        {displayText(getDirectoryPassCategoryLabel(item.category, locale))} · {displayText(item.region)} · {displayText(item.company)}
                      </p>
                      <h3 className="mt-3 font-black leading-6 text-slate-950">{displayText(getCatalogPassName(item, locale))}</h3>
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
