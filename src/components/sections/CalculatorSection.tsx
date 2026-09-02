'use client';

import { Calculator, CheckCircle2 } from "lucide-react";
import AdvancedCalculator from "@/components/AdvancedCalculator";
import { JRPass } from '@/types/pass';
import type { Dictionary } from '@/i18n/dictionaries';

interface CalculatorSectionProps {
  passes: JRPass[];
  dict?: Dictionary;
  lang?: string;
}

export default function CalculatorSection({ passes, dict, lang }: CalculatorSectionProps) {
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            {dict?.calcTitle || '大师周游券计算器'}
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-50 text-orange-700 text-sm font-bold border border-orange-200">
              <CheckCircle2 className="w-4 h-4 text-orange-600" strokeWidth={3} />
              快速周游券推荐
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-50 text-orange-700 text-sm font-bold border border-orange-200">
              <CheckCircle2 className="w-4 h-4 text-orange-600" strokeWidth={3} />
              快速了解节省金额
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-50 text-orange-700 text-sm font-bold border border-orange-200">
              <CheckCircle2 className="w-4 h-4 text-orange-600" strokeWidth={3} />
              快速获取购买链接
            </span>
          </div>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            输入旅行计划，用规则估算比较周游券与单独购票；实际价格请在官方页面确认
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative z-20">
          <AdvancedCalculator passes={passes} lang={lang} />
        </div>
      </div>
    </section>
  );
}
