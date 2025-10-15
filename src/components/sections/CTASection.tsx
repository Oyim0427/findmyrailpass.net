'use client';

import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* 赛博朋克装饰背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-yellow-500/5 to-yellow-500/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/5 to-yellow-500/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-400 text-cyan-400 text-sm font-mono tracking-wider">
            [LET&apos;S GO!]
          </span>
        </div>
        <h2 className="text-4xl font-bold cyber-text text-cyan-400 mb-4">
          准备开始您的日本之旅？
        </h2>
        <p className="text-xl text-gray-300 mb-8 font-light">
          立即使用我们的智能推荐系统，找到最适合您的JR通票
        </p>
        <a href="#calculator" className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center rounded-lg">
          开始规划旅程
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
