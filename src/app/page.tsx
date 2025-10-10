'use client';

import NavigationSection from "@/components/sections/NavigationSection";
import HeroSection from "@/components/sections/HeroSection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import OmikujiSection from "@/components/sections/OmikujiSection";
import MapSection from "@/components/sections/MapSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import PassesSection from "@/components/sections/PassesSection";
import CTASection from "@/components/sections/CTASection";
import FooterSection from "@/components/sections/FooterSection";

export default function Page() {
  return (
    <div className="min-h-screen cyber-grid relative">
      {/* 赛博朋克背景效果 */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-transparent to-yellow-500/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <NavigationSection />
      <HeroSection />
      <CalculatorSection />
      <OmikujiSection />
      <MapSection />
      <FeaturesSection />
      <PassesSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
