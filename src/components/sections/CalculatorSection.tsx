'use client';

import { useState } from 'react';
import PassCalculator from "@/components/PassCalculator";
import AdvancedCalculator from "@/components/AdvancedCalculator";

export default function CalculatorSection() {
  const [calculatorType, setCalculatorType] = useState<'basic' | 'advanced'>('basic');

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 计算器类型选择 */}
        <div className="text-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setCalculatorType('basic')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                calculatorType === 'basic'
                  ? 'bg-white text-red-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              基础计算器
            </button>
            <button
              onClick={() => setCalculatorType('advanced')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                calculatorType === 'advanced'
                  ? 'bg-white text-red-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              高级智能计算器
            </button>
          </div>
        </div>

        {/* 渲染对应的计算器 */}
        {calculatorType === 'basic' ? <PassCalculator /> : <AdvancedCalculator />}
      </div>
    </section>
  );
}
