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
  const copy = lang === 'ja' ? {
    badges: ['全サイトの周遊券を検索', '確認可能な運賃を比較', 'サイト内詳細・公式リンク'],
    description: '地方きっぷも含めて検索。地域・種類で候補を絞り、確認済みの価格を比較できます。',
  } : lang === 'en' ? {
    badges: ['Search all passes', 'Compare available fares', 'On-site details & official links'],
    description: 'Search local tickets and rail passes together. Filter by region and category, and compare verified fares.',
  } : {
    badges: ['搜索全站周游券', '比较可核验票价', '站内详情与官网链接'],
    description: '地方券也能一起搜索，按地区与类别筛选候选，并比较已有明确价格的票券。',
  };
  return (
    <section id="calculator" className="py-24 bg-primary/10 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-teal-100 rounded-2xl mb-6 shadow-sm">
            <Calculator className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            {dict?.calcTitle || '大师周游券计算器'}
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-50 text-orange-700 text-sm font-bold border border-orange-200">
              <CheckCircle2 className="w-4 h-4 text-orange-600" strokeWidth={3} />
              {copy.badges[0]}
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-50 text-orange-700 text-sm font-bold border border-orange-200">
              <CheckCircle2 className="w-4 h-4 text-orange-600" strokeWidth={3} />
              {copy.badges[1]}
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-50 text-orange-700 text-sm font-bold border border-orange-200">
              <CheckCircle2 className="w-4 h-4 text-orange-600" strokeWidth={3} />
              {copy.badges[2]}
            </span>
          </div>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {copy.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative z-20">
          <AdvancedCalculator passes={passes} lang={lang} />
        </div>
      </div>
    </section>
  );
}
