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
            [FEATURES]
          </span>
        </div>
        <h2 className="text-4xl font-bold cyber-text text-cyan-400 mb-4">
          为什么选择Find&apos;MyJR-Pass？
        </h2>
        <p className="text-xl text-gray-300 font-light">
          我们提供最全面、最准确的日本周游券信息
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10 max-w-4xl mx-auto">
        <div className="bg-black/80 backdrop-blur-md border p-8 rounded-2xl shadow-lg text-center transition-all duration-300 group aspect-square flex flex-col justify-center" style={{borderColor: '#ffd700', boxShadow: '0 0 20px rgba(255, 215, 0, 0.1)'}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.3)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.1)'}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors" style={{backgroundColor: 'rgba(255, 215, 0, 0.2)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.3)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.2)'}>
            <MapPin className="w-8 h-8" style={{color: '#ffd700'}} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 font-mono tracking-wider">智能路线推荐</h3>
          <p className="text-gray-300 text-left">
            根据您的出发地、目的地和旅行天数，智能推荐最适合的周游券
          </p>
        </div>

        <div className="bg-black/80 backdrop-blur-md border p-8 rounded-2xl shadow-lg text-center transition-all duration-300 group aspect-square flex flex-col justify-center" style={{borderColor: '#00d3f3', boxShadow: '0 0 20px rgba(0, 211, 243, 0.1)'}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 211, 243, 0.3)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 211, 243, 0.1)'}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors" style={{backgroundColor: 'rgba(0, 211, 243, 0.2)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 211, 243, 0.3)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 211, 243, 0.2)'}>
            <Clock className="w-8 h-8" style={{color: '#00d3f3'}} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 font-mono tracking-wider">实时价格对比</h3>
          <p className="text-gray-300 text-left">
            实时更新所有周游券价格，帮您找到最优惠的选择
          </p>
        </div>

        <div className="bg-black/80 backdrop-blur-md border p-8 rounded-2xl shadow-lg text-center transition-all duration-300 group aspect-square flex flex-col justify-center" style={{borderColor: '#ff6b9d', boxShadow: '0 0 20px rgba(255, 107, 157, 0.1)'}} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 107, 157, 0.3)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 107, 157, 0.1)'}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors" style={{backgroundColor: 'rgba(255, 107, 157, 0.2)'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 107, 157, 0.3)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 107, 157, 0.2)'}>
            <Users className="w-8 h-8" style={{color: '#ff6b9d'}} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4 font-mono tracking-wider">用户真实评价</h3>
          <p className="text-gray-300 text-left">
            查看其他旅行者的真实使用体验和评价，做出明智选择
          </p>
        </div>
      </div>
    </section>
  );
}
