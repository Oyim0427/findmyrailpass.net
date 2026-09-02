'use client';

import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import Train3DScene from "@/components/Train3DScene";
import type { Dictionary } from '@/i18n/dictionaries';


export default function HeroSection({ dict, lang = 'zh' }: { dict: Dictionary, lang?: string }) {

  return (
    <section className="bg-mesh pt-28 pb-20 lg:pt-36 lg:pb-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Japan Rail Pass Assistant</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight whitespace-pre-line">
              {dict?.heroTitle || '发现最适合您的日本周游券'}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-light">
              {dict?.heroSubtitle ? (
                dict.heroSubtitle.includes('<br>') ? (
                  dict.heroSubtitle.split('<br>').map((line: string, index: number, array: string[]) => (
                    <span key={index}>
                      {line}
                      {index < array.length - 1 && <br />}
                    </span>
                  ))
                ) : (
                  dict.heroSubtitle
                )
              ) : (
                '用运营方一手信息比较票价、范围与条件，再前往对应官网购买。'
              )}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href="#calculator" 
                className="btn-primary w-full sm:w-auto px-8 py-4 flex items-center justify-center text-lg shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300"
              >
                <span>{dict?.calcTitle || '大师周游券计算器'}</span>
              </a>
              
              <Link 
                href={`/${lang}/passlist`}
                className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-teal-500 text-teal-600 hover:bg-teal-50 font-semibold transition-colors flex items-center justify-center text-lg"
              >
                <span>{dict?.viewAllPasses || '查看所有周游券'}</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></div>
                <span>{lang === 'en' ? 'Operator sources' : lang === 'ja' ? '運行会社公式情報' : '运营方一手来源'}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                <span>{lang === 'en' ? 'Verification dates shown' : lang === 'ja' ? '確認日を表示' : '公开核验日期'}</span>
              </div>
            </div>
          </div>
          
          {/* Right Floating Elements / Simple Calculator */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
            {/* 3D Train Scene */}
            <div className="mb-6">
              <Train3DScene />
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
