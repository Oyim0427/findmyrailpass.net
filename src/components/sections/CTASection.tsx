'use client';

import { ArrowRight, Sparkles, Train, Map, Ticket } from 'lucide-react';
import Link from 'next/link';
import type { Dictionary } from '@/i18n/dictionaries';

export default function CTASection({ dict, lang }: { dict?: Dictionary, lang?: string }) {
  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-teal-800 rounded-3xl py-16 sm:py-24 shadow-2xl">
          {/* Decorative background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-teal-700 to-slate-800"></div>
            
            {/* Soft glowing orbs */}
            <div className="absolute top-0 right-0 w-full h-full max-w-2xl bg-teal-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 translate-x-1/3 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-full h-full max-w-2xl bg-emerald-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 -translate-x-1/3 translate-y-1/3"></div>
            
            {/* Decorative thematic patterns */}
            <Train className="absolute top-10 left-10 w-64 h-64 text-white opacity-[0.04] -rotate-12 transform -translate-x-1/4" strokeWidth={1} />
            <Map className="absolute bottom-10 right-10 w-80 h-80 text-white opacity-[0.04] rotate-12 transform translate-x-1/4" strokeWidth={1} />
            <Ticket className="absolute top-1/3 left-2/3 w-48 h-48 text-white opacity-[0.03] rotate-45" strokeWidth={1} />
            
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
          {dict?.ctaDesc || '先用透明规则估算，再到运营方官网确认价格与购买条件。'}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${lang || 'zh'}#calculator`} className="bg-white text-teal-600 px-8 py-4 rounded-xl text-lg font-bold inline-flex items-center justify-center hover:bg-teal-50 transition-colors shadow-xl shadow-teal-900/20">
            {dict?.calcTitle ? '开始免费计算' : '开始免费计算'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link href={`/${lang || 'zh'}/passlist`} className="bg-white/20 text-white border border-white/40 px-8 py-4 rounded-xl text-lg font-semibold inline-flex items-center justify-center hover:bg-white/30 transition-colors backdrop-blur-md shadow-lg shadow-teal-900/10">
            {dict?.viewAllPasses || '浏览所有周游券'}
          </Link>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
}
