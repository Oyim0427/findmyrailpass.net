'use client';

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      {/* 赛博朋克装饰元素 */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-cyan-400 rotate-45 opacity-30 animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 border-2 border-yellow-400 rotate-12 opacity-30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-yellow-400 rotate-45 opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="text-center relative z-10">
        <div className="mb-4">
          <span className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-400 text-cyan-400 text-sm font-mono tracking-wider">
            [JAPAN RAIR PASS]
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-white">发现最适合您的</span>
          <br />
          <span className="cyber-text cyber-glow-text text-cyan-400">
            日本铁路通票
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-light">
        智能推荐系统为您精选最经济实惠的JR通票，结合创新的旅行抽签系统，助力您轻松规划日本行程。让旅行更加便捷高效，同时最大限度地节省花费，开启智能省钱新体验！
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#calculator" className="cyber-button px-8 py-4 text-lg font-bold flex items-center justify-center group">
            <span className="relative z-10">开始查询</span>
            <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <Link href="/passlist" className="px-8 py-4 text-lg font-semibold border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 text-center font-mono tracking-wider group">
            <span className="group-hover:text-white transition-colors">查看所有周游券</span>
          </Link>
        </div>
        
        {/* 数据流效果 */}
        <div className="mt-12 flex justify-center space-x-8 text-sm text-gray-400 font-mono">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>系统运行正常</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <span>数据同步中</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <span>AI分析就绪</span>
          </div>
        </div>
      </div>
    </section>
  );
}
