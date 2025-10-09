'use client';

import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function NavigationSection() {
  return (
    <nav className="bg-black/80 backdrop-blur-md border-b border-cyan-400/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold cyber-text text-cyan-400 flex items-center space-x-2">
              <span className="text-2xl">🚄</span>
              <span className="cyber-glow-text">Find*MyJR-Pass</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors font-mono tracking-wider relative group">
              首页
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/passlist" className="text-gray-300 hover:text-cyan-400 transition-colors font-mono tracking-wider relative group">
              全部周游券
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors font-mono tracking-wider relative group">
              用户故事
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/tarot" className="text-gray-300 hover:text-cyan-400 transition-colors font-mono tracking-wider relative group">
              路线塔罗占卜
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/help" className="text-gray-300 hover:text-cyan-400 transition-colors font-mono tracking-wider relative group">
              帮助中心
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/#calculator" className="hidden md:block cyber-button px-6 py-2 text-sm font-semibold">
              开始规划
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
      
      {/* 赛博朋克装饰线 */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
    </nav>
  );
}
