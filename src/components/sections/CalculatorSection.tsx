'use client';

import { useState } from 'react';
import PassCalculator from "@/components/PassCalculator";
import AdvancedCalculator from "@/components/AdvancedCalculator";

export default function CalculatorSection() {
  const [calculatorType, setCalculatorType] = useState<'basic' | 'advanced'>('basic');

  return (
    <section id="calculator" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 赛博朋克装饰背景 */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-yellow-500/5"></div>
        
        {/* 计算器类型选择 */}
        <div className="text-center mb-12 relative z-10">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-yellow-500/20 border border-yellow-400 text-yellow-400 text-sm font-mono tracking-wider">
            [JR PASS CALCULATOR]
            </span>
          </div>
          <h2 className="text-4xl font-bold cyber-text text-cyan-400 mb-4">
            JR通票计算器
          </h2>
          <p className="text-gray-400 font-mono text-sm tracking-wider">
            选择计算模式以开始分析
          </p>
          <div className="inline-flex bg-black/50 border border-cyan-400/30 rounded-lg p-1 backdrop-blur-sm">
            <button
              onClick={() => setCalculatorType('basic')}
              className={`px-8 py-3 rounded-md font-medium transition-all duration-300 font-mono tracking-wider ${
                calculatorType === 'basic'
                  ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/25'
                  : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10'
              }`}
            >
              [BASIC MODE]
            </button>
            <button
              onClick={() => setCalculatorType('advanced')}
              className={`px-8 py-3 rounded-md font-medium transition-all duration-300 font-mono tracking-wider ${
                calculatorType === 'advanced'
                  ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/25'
                  : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10'
              }`}
            >
              [ADVANCED AI]
            </button>
          </div>
        </div>

        {/* 渲染对应的计算器 */}
        <div className="relative z-10">
          {calculatorType === 'basic' ? <PassCalculator /> : <AdvancedCalculator />}
        </div>
      </div>
    </section>
  );
}
