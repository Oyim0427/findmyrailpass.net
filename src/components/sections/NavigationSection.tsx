'use client';

import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function NavigationSection() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-red-600">🚄 FindMyJR-Pass</div>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors">首页</Link>
            <Link href="/#passes" className="text-gray-700 hover:text-red-600 transition-colors font-medium">全部周游券</Link>
            <Link href="/blog" className="text-gray-700 hover:text-red-600 transition-colors">用户故事</Link>
            <Link href="/tarot" className="text-gray-700 hover:text-red-600 transition-colors">路线塔罗占卜</Link>
            <Link href="/help" className="text-gray-700 hover:text-red-600 transition-colors">帮助中心</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/#calculator" className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
              开始规划
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
}
