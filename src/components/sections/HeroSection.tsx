'use client';

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          发现最适合您的
          <span className="text-red-600">日本铁路通票</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          智能推荐系统帮您找到最经济实惠的JR通票，让您的日本之旅更加便捷和节省
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#calculator" className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center">
            开始查询
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <Link href="/passlist" className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-colors text-center">
            查看所有周游券
          </Link>
        </div>
      </div>
    </section>
  );
}
