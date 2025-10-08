'use client';

import { MapPin, Clock, Users } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          为什么选择FindMyJR-Pass？
        </h2>
        <p className="text-xl text-gray-600">
          我们提供最全面、最准确的日本铁路通票信息
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">智能路线推荐</h3>
          <p className="text-gray-600">
            根据您的出发地、目的地和旅行天数，智能推荐最适合的JR通票
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">实时价格对比</h3>
          <p className="text-gray-600">
            实时更新所有JR通票价格，帮您找到最优惠的选择
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">用户真实评价</h3>
          <p className="text-gray-600">
            查看其他旅行者的真实使用体验和评价，做出明智选择
          </p>
        </div>
      </div>
    </section>
  );
}
