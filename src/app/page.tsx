'use client';

import NavigationSection from "@/components/sections/NavigationSection";
import HeroSection from "@/components/sections/HeroSection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import MapSection from "@/components/sections/MapSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PassesSection from "@/components/sections/PassesSection";
import CTASection from "@/components/sections/CTASection";
import FooterSection from "@/components/sections/FooterSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <NavigationSection />
      <HeroSection />
      <CalculatorSection />
      <MapSection />
      <FeaturesSection />
      <PassesSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
