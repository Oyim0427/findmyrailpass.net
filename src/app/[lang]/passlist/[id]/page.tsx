import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  Baby,
  CalendarDays,
  CalendarRange,
  CheckCircle2,
  Clock3,
  MapPin,
  Store,
  TicketCheck,
  UserRound,
  ShieldCheck,
  TrainFront,
  Users,
} from 'lucide-react';
import NavigationSection from '@/components/sections/NavigationSection';
import FooterSection from '@/components/sections/FooterSection';
import AdSlot from '@/components/AdSlot';
import PassFeedback from '@/components/PassFeedback';
import PurchaseChannels, { type OfficialPurchaseLink } from '@/components/PurchaseChannels';
import PassFreeAreaDiagram from '@/components/PassFreeAreaDiagram';
import { PassDetailColumns, PassDetailHero, PassDetailMetricCard, PassDetailInfoCard } from '@/components/PassDetailTemplate';
import { getDictionary, type Locale } from '@/i18n/dictionaries';
import { getAllPasses, getPassById } from '@/lib/passData';
import { buildLocalizedMetadata } from '@/lib/seo';
import { getPassImage } from '@/lib/passImages';
import { getLocalizedPassFacts } from '@/lib/passLocalization';
import { getRegionLabel } from '@/lib/regionLabels';
import { normalizePassDisplayText as displayText } from '@/lib/passDisplayText';
import { getPassFeatureLink } from '@/lib/passFeatureLinks';
import { getVerifiedPassAreaStops } from '@/lib/passAreaStops';

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
    salesLocation: '销售地点',
    salesPeriod: '销售期间',
    usePeriod: '使用期间',
    category: '票券分类',
    operatorSales: '运营方官网及指定销售窗口',
    missing: '请在运营方官网确认',
    validity: '有效期间',
    note: '使用前注意',
    sourceTitle: '已核验官方信息',
    sourceBody: '本页内容依据运营方官方信息核验整理。',
    verifiedAt: '最后核验日期',
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
    salesLocation: 'Where it is sold',
    salesPeriod: 'Sales period',
    usePeriod: 'Travel period',
    category: 'Pass category',
    operatorSales: 'Operator website and designated sales channels',
    missing: 'Confirm on the operator website',
    validity: 'Validity period',
    note: 'Before you travel',
    sourceTitle: 'Checked against official information',
    sourceBody: 'This page is checked against the operator’s official information.',
    verifiedAt: 'Last checked',
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
    salesLocation: '発売場所',
    salesPeriod: '発売期間',
    usePeriod: '利用期間',
    category: 'きっぷ分類',
    operatorSales: '運行会社公式サイト・指定販売窓口',
    missing: '運行会社公式サイトで確認',
    validity: '有効期間',
    note: '利用前の注意',
    sourceTitle: '公式情報を確認済み',
    sourceBody: '掲載内容は運行会社の公式情報をもとに確認・整理しています。',
    verifiedAt: '最終確認日',
    related: 'その他の確認済みパス',
    view: 'サイト内詳細を見る',
    days: '日',
  },
};

const verifiedCategoryLabels = {
  zh: { national: '全国通票', regional: '地区通票', local: '地方票券', city: '城市交通券', bus: '巴士通票', private: '私铁票券', special: '特别组合' },
  en: { national: 'Nationwide pass', regional: 'Regional pass', local: 'Local pass', city: 'City transit pass', bus: 'Bus pass', private: 'Private railway pass', special: 'Special combination' },
  ja: { national: '全国パス', regional: '地域パス', local: '地方きっぷ', city: '都市交通券', bus: 'バス乗車券', private: '私鉄きっぷ', special: '特別セット' },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ lang: string; id: string }> }) {
  const { lang, id } = await params;
  const pass = getPassById(id);
  if (!pass) return {};
  const nameZh = displayText(pass.name.cn);
  const nameEn = displayText(pass.name.en);
  const nameJa = displayText(pass.name.jp);

  return buildLocalizedMetadata({
    lang,
    path: `passlist/${pass.id}`,
    titles: {
      zh: `${nameZh}｜价格、范围与购买条件｜FindMyJR-Pass`,
      en: `${nameEn} | Price, Coverage & Conditions | FindMyJR-Pass`,
      ja: `${nameJa}｜料金・利用範囲・購入条件｜FindMyJR-Pass`,
    },
    descriptions: {
      zh: `查看${nameZh}的成人与儿童价格、有效天数、适用范围、利用资格和运营方来源。`,
      en: `See adult and child prices, validity, coverage, eligibility and operator sources for ${nameEn}.`,
      ja: `${nameJa}のおとな・こども料金、有効日数、利用範囲、利用資格、運行会社情報を確認。`,
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
  const facts = getLocalizedPassFacts(pass, locale);
  const name = displayText(locale === 'en' ? pass.name.en : locale === 'ja' ? pass.name.jp : pass.name.cn);
  const official = pass.officialLinks?.[0];
  const officialPurchaseLinks: OfficialPurchaseLink[] = (pass.purchaseLinks ?? [])
    .filter(link => link.type !== 'affiliate' && link.type !== 'sponsored')
    .map(link => ({ url: link.url, kind: 'purchase' }));
  const officialLinks: OfficialPurchaseLink[] = [
    ...officialPurchaseLinks,
    ...(official ? [{ url: official.url, kind: 'details' as const }] : []),
  ];
  const related = getAllPasses().filter(item => item.id !== pass.id).slice(0, 3);
  const description = displayText(locale === 'zh'
    ? `比较${name}的票价、有效期、适用范围与购买渠道。`
    : locale === 'ja'
      ? `${name}の料金・有効期間・利用範囲・購入先を比較。`
      : `Compare fares, validity, coverage and purchase channels for ${name}.`);
  const featureLink = getPassFeatureLink(pass, locale);
  const salesLocation = officialPurchaseLinks.length > 0 ? t.operatorSales : t.missing;
  const usePeriod = displayText(facts.validity) || t.missing;
  const categoryLabel = verifiedCategoryLabels[locale][pass.category];
  const areaStops = getVerifiedPassAreaStops(pass, locale);
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
        <PassDetailHero
          backHref={`/${lang}/passlist`}
          backLabel={t.back}
          eyebrow={t.eyebrow}
          title={name}
          company={displayText(pass.company)}
          badge={t.verified}
          image={getPassImage(pass)}
          category={pass.category}
        />

        <PassDetailColumns aside={<>
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-primary"><ShieldCheck className="h-6 w-6" /></div>
            <h2 className="mt-5 text-xl font-black">{t.sourceTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{t.sourceBody}</p>
            {pass.lastVerifiedAt && <dl className="mt-6 border-t border-slate-100 pt-5 text-sm">
              <dt className="font-bold text-slate-400">{t.verifiedAt}</dt>
              <dd className="mt-1 font-bold text-slate-800">{displayText(pass.lastVerifiedAt)}</dd>
            </dl>}
          </section>
          <PurchaseChannels passId={pass.id} lang={lang} officialLinks={officialLinks} />
          <PassFeedback passId={pass.id} passName={name} passPath={`/${lang}/passlist/${pass.id}/`} lang={lang} />
        </>}>
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-base leading-8 text-slate-700">{displayText(facts.summary)}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {pass.price.adult.regular > 0 && <PassDetailMetricCard icon={UserRound} label={t.adult} value={`¥${pass.price.adult.regular.toLocaleString()}`} />}
                {pass.price.child.regular > 0 && <PassDetailMetricCard icon={Baby} label={t.child} value={`¥${pass.price.child.regular.toLocaleString()}`} />}
                {pass.duration.length > 0 && <PassDetailMetricCard icon={CalendarDays} label={t.duration} value={`${pass.duration.join(' / ')} ${t.days}`} />}
              </div>
              {facts.priceNote && <p className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950"><strong>{t.priceNote}：</strong>{displayText(facts.priceNote)}</p>}
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
                  ...pass.coverage.regions.map(region => (
                    <Link key={region} href={`/${locale}/passlist?region=${encodeURIComponent(region)}`} className="font-bold text-primary hover:text-primary-dark hover:underline">
                      {displayText(getRegionLabel(region, locale))}
                    </Link>
                  )),
                  ...(facts.coverageDescription ? [displayText(facts.coverageDescription)] : []),
                ]}
              />
              <PassDetailInfoCard icon={Users} title={t.audience} items={facts.audience.map(displayText)} />
              <PassDetailInfoCard icon={Store} title={t.salesLocation} items={[salesLocation]} />
              <PassDetailInfoCard icon={CalendarRange} title={t.salesPeriod} items={[t.missing]} />
              <PassDetailInfoCard icon={Clock3} title={t.usePeriod} items={[usePeriod]} />
              <PassDetailInfoCard icon={TicketCheck} title={t.category} items={[categoryLabel]} />
              <PassDetailInfoCard icon={TrainFront} title={t.transport} items={facts.transport.map(displayText)} />
              <PassDetailInfoCard
                icon={CheckCircle2}
                title={t.bestFor}
                items={facts.bestFor.map(displayText)}
                actionHref={featureLink.href}
                actionLabel={featureLink.label}
              />
            </section>

            {facts.note && (
              <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
                <h2 className="font-black text-amber-950">{t.note}</h2>
                <p className="mt-3 text-sm leading-7 text-amber-950/85">{displayText(facts.note)}</p>
              </section>
            )}
        </PassDetailColumns>

        {related.length > 0 && <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black">{t.related}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map(item => {
                const itemName = locale === 'en' ? item.name.en : locale === 'ja' ? item.name.jp : item.name.cn;
                return <Link key={item.id} href={`/${lang}/passlist/${item.id}`} className="group overflow-hidden rounded-2xl border border-slate-200 bg-[#f8faf8] transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md">
                  <div className="relative h-32 overflow-hidden bg-slate-200">
                    <Image
                      src={getPassImage(item)}
                      alt={displayText(itemName)}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" aria-hidden="true" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold text-primary">{displayText(item.company)} · ¥{item.price.adult.regular.toLocaleString()}</p>
                    <h3 className="mt-3 font-black leading-6">{displayText(itemName)}</h3>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-600 group-hover:text-primary">{t.view}<ArrowRight className="h-4 w-4" /></span>
                  </div>
                </Link>;
              })}
            </div>
          </div>
        </section>}
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
