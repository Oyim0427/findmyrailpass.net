import type { Metadata } from "next";
import { asLocale, SITE_URL } from '@/lib/seo';

export async function generateStaticParams() {
  return [{ lang: 'zh' }, { lang: 'en' }, { lang: 'ja' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = asLocale(lang);
  const titles: Record<string, string> = {
    zh: 'FindMyJR-Pass｜日本铁路周游券比较与官方购买入口',
    en: 'FindMyJR-Pass | Compare Japan Rail Passes with Official Sources',
    ja: 'FindMyJR-Pass｜鉄道パス比較・公式購入案内'
  };
  const descriptions: Record<string, string> = {
    zh: '比较日本全国及地区铁路周游券，查看运营方一手价格、覆盖范围、核验日期与官方购买入口。',
    en: 'Compare nationwide and regional Japan rail passes using operator-sourced prices, coverage, verification dates and official booking links.',
    ja: '運行会社の一次情報をもとに、日本全国・地域の鉄道パス料金、利用範囲、確認日と公式購入先を比較。'
  };
  return {
    metadataBase: new URL(SITE_URL),
    title: titles[locale],
    description: descriptions[locale],
    robots: { index: locale === 'zh', follow: true },
    other: { 'content-language': locale === 'zh' ? 'zh-CN' : locale },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = asLocale(lang);
  return <><script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang=${JSON.stringify(locale === 'zh' ? 'zh-CN' : locale)}` }} />{children}</>;
}
