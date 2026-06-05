import NavigationSection from "@/components/sections/NavigationSection";
import HeroSection from "@/components/sections/HeroSection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import OmikujiSection from "@/components/sections/OmikujiSection";
import MapSection from "@/components/sections/MapSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PassesSection from "@/components/sections/PassesSection";
import CTASection from "@/components/sections/CTASection";
import FooterSection from "@/components/sections/FooterSection";
import { getAllPasses, getPopularPasses } from "@/lib/passData";
import { getDictionary, Locale } from "@/i18n/dictionaries";

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
      <HeroSection dict={dict} />
      <CalculatorSection passes={passes} dict={dict} />
      <OmikujiSection dict={dict} />
      <MapSection dict={dict} />
      <FeaturesSection dict={dict} />
      <PassesSection popularPasses={popularPasses} dict={dict} />
      <CTASection dict={dict} lang={lang} />
      <FooterSection dict={dict} lang={lang} />
    </div>
  );
}
