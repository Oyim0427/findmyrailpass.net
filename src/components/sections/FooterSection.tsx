'use client';

import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="bg-black/90 backdrop-blur-md border-t border-cyan-400/30 py-16 relative">
      {/* 赛博朋克装饰背景 */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold cyber-text text-cyan-400 mb-4 flex items-center space-x-2">
              <span className="text-2xl">🚄</span>
              <span className="cyber-glow-text">Find&apos;MyJR-Pass</span>
            </div>
            <p className="text-gray-400 font-mono text-sm tracking-wider">
              您的日本铁路通票专家，帮您找到最经济实惠的旅行方案
            </p>
            <div className="mt-4 flex space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs font-mono">SYSTEM ONLINE</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 cyber-text text-cyan-400">[PRODUCTS]</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/passes" className="hover:text-cyan-400 transition-colors font-mono text-sm tracking-wider">通票查询</Link></li>
              <li><a href="#map" className="hover:text-cyan-400 transition-colors font-mono text-sm tracking-wider">覆盖地图</a></li>
              <li><Link href="/blog" className="hover:text-cyan-400 transition-colors font-mono text-sm tracking-wider">用户故事</Link></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors font-mono text-sm tracking-wider">价格对比</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 cyber-text text-cyan-400">[SUPPORT]</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors font-mono text-sm tracking-wider">使用指南</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors font-mono text-sm tracking-wider">常见问题</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors font-mono text-sm tracking-wider">联系我们</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors font-mono text-sm tracking-wider">意见反馈</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 cyber-text text-cyan-400">[SOCIAL]</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors font-mono text-sm tracking-wider">微信公众号</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors font-mono text-sm tracking-wider">微博</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors font-mono text-sm tracking-wider">小红书</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors font-mono text-sm tracking-wider">抖音</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cyan-400/30 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-mono text-sm tracking-wider">
              &copy;Find&apos;MyJR-Pass.2025 All rights reserved.
            </p>
            <div className="flex space-x-6 text-xs text-gray-500 font-mono tracking-wider">
              <span>VERSION 2.0.1</span>
              <span>|</span>
              <span>BUILD 2025.10</span>
              <span>|</span>
              <span className="text-green-400">STATUS: ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* 底部装饰线 */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
    </footer>
  );
}
