import NavigationSection from "@/components/sections/NavigationSection";
import HeroSection from "@/components/sections/HeroSection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import OmikujiSection from "@/components/sections/OmikujiSection";
import MapSection from "@/components/sections/MapSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PassesSection from "@/components/sections/PassesSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import FooterSection from "@/components/sections/FooterSection";
import TrustRevenueSection from "@/components/sections/TrustRevenueSection";
import { getAllPasses, getPopularPasses } from "@/lib/passData";
import { getDictionary, Locale } from "@/i18n/dictionaries";
import { buildLocalizedMetadata } from '@/lib/seo';

export { generateStaticParams } from './layout';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildLocalizedMetadata({
    lang,
    path: '',
    titles: {
      zh: 'FindMyRailPass｜日本铁路周游券比较与官方购买入口',
      en: 'FindMyRailPass | Compare Japan Rail Passes with Official Sources',
      ja: 'FindMyRailPass｜鉄道パス比較・公式購入案内',
    },
    descriptions: {
      zh: '比较日本全国及地区铁路周游券，查看运营方一手价格、覆盖范围、核验日期与官方购买入口。',
      en: 'Compare nationwide and regional Japan rail passes using operator-sourced prices, coverage, verification dates and official booking links.',
      ja: '運行会社の一次情報をもとに、日本全国・地域の鉄道パス料金、利用範囲、確認日と公式購入先を比較。',
    },
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang as Locale);
  
  const passes = getAllPasses();
  const popularPasses = getPopularPasses();

  return (
    <div className="min-h-screen bg-slate-50 relative">
      <NavigationSection dict={dict} lang={lang} />
      <HeroSection dict={dict} lang={lang} />
      <TrustRevenueSection lang={lang} />
      <CalculatorSection passes={passes} dict={dict} lang={lang} />
      <PassesSection popularPasses={popularPasses} dict={dict} lang={lang} />
      <MapSection dict={dict} lang={lang} />
      <FeaturesSection dict={dict} />
      <CTASection dict={dict} lang={lang} />
      <FAQSection dict={dict} />
      <OmikujiSection dict={dict} />
      <FooterSection dict={dict} lang={lang} />
    </div>
  );
}
