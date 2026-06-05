import { ArrowRight, Calculator, Map, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection({ dict }: { dict: any }) {
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
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              {dict?.heroTitle || '三国语言的日本交通券 AI 助手'}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-light">
              {dict?.heroSubtitle || '让用户一眼知道怎么用: 先算，再看，再买'}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href="#calculator" 
                className="btn-primary w-full sm:w-auto px-8 py-4 flex items-center justify-center text-lg"
              >
                <span>{dict?.calcTitle || '免费周游券计算器'}</span>
                <Calculator className="ml-2 w-5 h-5" />
              </a>
              
              <Link 
                href="/passlist" 
                className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-teal-500 text-teal-600 hover:bg-teal-50 font-semibold transition-colors flex items-center justify-center text-lg"
              >
                <span>{dict?.viewAllPasses || '查看所有周游券'}</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                <span>Data Updated</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                <span>AI Ready</span>
              </div>
            </div>
          </div>
          
          {/* Right Floating Elements / Image Replacement */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
            <div className="glass-card p-8 relative z-10 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Route Optimizer</h3>
                  <p className="text-teal-600 text-sm font-medium">高级计算器专业版</p>
                </div>
                <div className="bg-teal-100 text-teal-600 p-2 rounded-lg">
                  <Map className="w-6 h-6" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="h-2 bg-gray-100 rounded-full w-3/4"></div>
                <div className="h-2 bg-gray-100 rounded-full w-full"></div>
                <div className="h-2 bg-gray-100 rounded-full w-5/6"></div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                <div className="text-sm text-gray-500">Premium Feature</div>
                <button className="text-teal-600 font-semibold text-sm flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
            
            {/* Decorative background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
