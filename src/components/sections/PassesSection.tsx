'use client';

import { ArrowRight } from "lucide-react";
import PassCard from "@/components/PassCard";
import { jrPasses } from "@/data/passes";
import Link from "next/link";

export default function PassesSection() {
  const popularPasses = jrPasses.slice(0, 3);

  return (
    <section id="passes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            热门JR通票推荐
          </h2>
          <p className="text-xl text-gray-600">
            精选最受欢迎的日本铁路通票，覆盖全日本各地区
          </p>
        </div>

        {/* Popular Passes */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">全国通票</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {popularPasses.map((pass) => (
              <PassCard key={pass.id} pass={pass} />
            ))}
          </div>
        </div>

        {/* Regional Passes */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">分区通票</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hokkaido Rail Pass */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg border border-blue-200">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏔️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">北海道铁路周游券</h3>
                <p className="text-gray-600 text-sm">Hokkaido Rail Pass</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">3日券</span>
                  <span className="font-bold text-blue-600">¥16,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">5日券</span>
                  <span className="font-bold text-blue-600">¥22,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">7日券</span>
                  <span className="font-bold text-blue-600">¥24,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">任选4日券</span>
                  <span className="font-bold text-blue-600">¥22,000</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-blue-200">
                <p className="text-xs text-gray-600">覆盖北海道全境JR线路</p>
              </div>
            </div>

            {/* JR East Pass */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl shadow-lg border border-red-200">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏙️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">JR东日本通票</h3>
                <p className="text-gray-600 text-sm">JR East Pass</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">5日券</span>
                  <span className="font-bold text-red-600">¥20,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">任选5日券</span>
                  <span className="font-bold text-red-600">¥20,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">东北地区5日券</span>
                  <span className="font-bold text-red-600">¥20,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">长野新潟5日券</span>
                  <span className="font-bold text-red-600">¥18,000</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-red-200">
                <p className="text-xs text-gray-600">覆盖关东、东北地区</p>
              </div>
            </div>

            {/* JR West Pass */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-2xl shadow-lg border border-yellow-200">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🏯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">JR西日本通票</h3>
                <p className="text-gray-600 text-sm">JR West Pass</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">关西地区1日券</span>
                  <span className="font-bold text-yellow-600">¥2,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">关西广域5日券</span>
                  <span className="font-bold text-yellow-600">¥10,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">山阳山阴7日券</span>
                  <span className="font-bold text-yellow-600">¥20,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">北九州3日券</span>
                  <span className="font-bold text-yellow-600">¥8,500</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-yellow-200">
                <p className="text-xs text-gray-600">覆盖关西、中国、四国、九州</p>
              </div>
            </div>

            {/* JR Central Pass */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl shadow-lg border border-purple-200">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⛰️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">JR东海通票</h3>
                <p className="text-gray-600 text-sm">JR Central Pass</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">高山北陆5日券</span>
                  <span className="font-bold text-purple-600">¥14,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">伊势熊野和歌山5日券</span>
                  <span className="font-bold text-purple-600">¥11,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">升龙道3日券</span>
                  <span className="font-bold text-purple-600">¥7,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">升龙道5日券</span>
                  <span className="font-bold text-purple-600">¥14,000</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-purple-200">
                <p className="text-xs text-gray-600">覆盖中部地区特色线路</p>
              </div>
            </div>

            {/* JR Kyushu Pass */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl shadow-lg border border-orange-200">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🌋</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">JR九州通票</h3>
                <p className="text-gray-600 text-sm">JR Kyushu Pass</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">北九州3日券</span>
                  <span className="font-bold text-orange-600">¥8,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">北九州5日券</span>
                  <span className="font-bold text-orange-600">¥10,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">全九州3日券</span>
                  <span className="font-bold text-orange-600">¥15,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">全九州5日券</span>
                  <span className="font-bold text-orange-600">¥18,000</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-orange-200">
                <p className="text-xs text-gray-600">覆盖九州全境特色列车</p>
              </div>
            </div>

            {/* JR Shikoku Pass */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl shadow-lg border border-green-200">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🌊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">JR四国通票</h3>
                <p className="text-gray-600 text-sm">JR Shikoku Pass</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">3日券</span>
                  <span className="font-bold text-green-600">¥8,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">4日券</span>
                  <span className="font-bold text-green-600">¥9,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">5日券</span>
                  <span className="font-bold text-green-600">¥10,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">7日券</span>
                  <span className="font-bold text-green-600">¥12,000</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-green-200">
                <p className="text-xs text-gray-600">覆盖四国全境JR线路</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/#passes" className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center">
            查看所有JR通票
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
