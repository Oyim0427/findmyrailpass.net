'use client';

import { Calculator } from "lucide-react";
import AdvancedCalculator from "@/components/AdvancedCalculator";
import { JRPass } from '@/types/pass';

interface CalculatorSectionProps {
  passes: JRPass[];
  dict?: any;
}

export default function CalculatorSection({ passes, dict }: CalculatorSectionProps) {
  return (
    <section id="calculator" className="py-24 bg-teal-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-teal-100 rounded-2xl mb-6 shadow-sm">
            <Calculator className="w-8 h-8 text-teal-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            {dict?.calcTitle || '免费周游券计算器'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            {dict?.calcDesc || '输入您的行程，智能系统将为您推荐最省钱的日本铁路周游券组合。'}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 border-0 shadow-lg bg-white/60">
            <AdvancedCalculator passes={passes} />
          </div>
        </div>
      </div>
    </section>
  );
}
