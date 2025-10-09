'use client';

import { MapPin, Clock, Users } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      {/* 赛博朋克装饰背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-yellow-500/5"></div>
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="text-center mb-16 relative z-10">
        <div className="mb-4">
          <span className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-400 text-cyan-400 text-sm font-mono tracking-wider">
            [FEATURES MODULE]
          </span>
        </div>
        <h2 className="text-4xl font-bold cyber-text text-cyan-400 mb-4">
          为什么选择Find'MyJR-Pass？
        </h2>
        <p className="text-xl text-gray-300 font-light">
          我们提供最全面、最准确的日本铁路通票信息
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        <div className="bg-black/80 backdrop-blur-md border border-cyan-400/30 p-8 rounded-2xl shadow-lg text-center hover:shadow-cyan-400/25 transition-all duration-300 group">
          <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-500/30 transition-colors">
            <MapPin className="w-8 h-8 text-cyan-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 font-mono tracking-wider">智能路线推荐</h3>
          <p className="text-gray-300">
            根据您的出发地、目的地和旅行天数，智能推荐最适合的JR通票
          </p>
        </div>

        <div className="bg-black/80 backdrop-blur-md border border-yellow-400/30 p-8 rounded-2xl shadow-lg text-center hover:shadow-yellow-400/25 transition-all duration-300 group">
          <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500/30 transition-colors">
            <Clock className="w-8 h-8 text-yellow-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 font-mono tracking-wider">实时价格对比</h3>
          <p className="text-gray-300">
            实时更新所有JR通票价格，帮您找到最优惠的选择
          </p>
        </div>

        <div className="bg-black/80 backdrop-blur-md border border-yellow-400/30 p-8 rounded-2xl shadow-lg text-center hover:shadow-yellow-400/25 transition-all duration-300 group">
          <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500/30 transition-colors">
            <Users className="w-8 h-8 text-yellow-400" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 font-mono tracking-wider">用户真实评价</h3>
          <p className="text-gray-300">
            查看其他旅行者的真实使用体验和评价，做出明智选择
          </p>
        </div>
      </div>
    </section>
  );
}
