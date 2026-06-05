'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function CTASection({ dict, lang }: { dict?: any, lang?: string }) {
  return (
    <section className="py-24 relative overflow-hidden bg-teal-600">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center justify-center space-x-2 bg-teal-500/30 text-teal-50 px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm border border-teal-400/30">
          <Sparkles className="w-4 h-4" />
          <span>Ready to go?</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          {dict?.ctaTitle || '准备开始您的日本之旅？'}
        </h2>
        
        <p className="text-xl text-teal-100 mb-10 font-light max-w-2xl mx-auto">
          {dict?.ctaDesc || '立即使用我们的智能推荐系统，找到最适合您的周游券。一次计算，全盘掌握！'}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${lang || 'zh'}#calculator`} className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-bold inline-flex items-center justify-center hover:bg-teal-50 transition-colors shadow-xl shadow-teal-900/20">
            {dict?.calcTitle ? '开始免费计算' : '开始免费计算'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link href={`/${lang || 'zh'}/passlist`} className="bg-teal-700/50 text-white border border-teal-500 px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center hover:bg-teal-700 transition-colors backdrop-blur-sm">
            {dict?.viewAllPasses || '浏览所有周游券'}
          </Link>
        </div>
      </div>
    </section>
  );
}
