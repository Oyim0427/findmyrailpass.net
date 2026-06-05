'use client';

import { MapPin, Map as MapIcon } from "lucide-react";
import Link from "next/link";

export default function MapSection({ dict }: { dict?: any }) {
  const regionColors = {
    '全国': 'bg-rose-500',
    '关东': 'bg-blue-500',
    '关西': 'bg-teal-500',
    '东北': 'bg-purple-500',
    '九州': 'bg-yellow-500',
    '中国': 'bg-amber-500',
    '四国': 'bg-indigo-500',
    '北海道': 'bg-orange-500'
  };

  return (
    <section id="map" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-2xl mb-6 shadow-sm">
            <MapIcon className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            {dict?.mapTitle || '地图查询：把目的地和票务直连起来'}
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            可视化查看各周游券的覆盖范围，点击对应地区选择适合您行程的周游券
          </p>
        </div>

        {/* Map Area */}
        <div className="max-w-4xl mx-auto">
          {/* Map Visualization */}
          <div className="relative glass-card p-8 min-h-96">
            <div className="space-y-4">
              {/* 北海道 - 占宽度1/3，单独一行，靠右 */}
              <div className="flex justify-end">
                <Link href="/passlist?region=北海道" className="w-1/3 h-16 bg-orange-50 rounded-xl flex items-center justify-center hover:bg-orange-100 hover:shadow-md transition-all duration-300 cursor-pointer group border border-orange-100">
                  <div className="text-center">
                    <MapPin className="w-5 h-5 text-orange-500 mx-auto mb-1 group-hover:-translate-y-1 transition-transform" />
                    <div className="text-sm font-bold text-orange-700">北海道</div>
                  </div>
                </Link>
              </div>
              
              {/* 东北 - 占宽度1/3，单独一行，靠右 */}
              <div className="flex justify-end">
                <Link href="/passlist?region=东北" className="w-1/3 h-16 bg-purple-50 rounded-xl flex items-center justify-center hover:bg-purple-100 hover:shadow-md transition-all duration-300 cursor-pointer group border border-purple-100">
                  <div className="text-center">
                    <MapPin className="w-5 h-5 text-purple-500 mx-auto mb-1 group-hover:-translate-y-1 transition-transform" />
                    <div className="text-sm font-bold text-purple-700">东北</div>
                  </div>
                </Link>
              </div>
              
              {/* 中国、关西、中部、关东 - 一行，平均分 */}
              <div className="grid grid-cols-4 gap-4">
                <Link href="/passlist?region=中国" className="h-16 bg-amber-50 rounded-xl flex items-center justify-center hover:bg-amber-100 hover:shadow-md transition-all duration-300 cursor-pointer group border border-amber-100">
                  <div className="text-center">
                    <MapPin className="w-4 h-4 text-amber-500 mx-auto mb-1 group-hover:-translate-y-1 transition-transform" />
                    <div className="text-xs font-bold text-amber-700">中国</div>
                  </div>
                </Link>
                
                <Link href="/passlist?region=关西" className="h-16 bg-teal-50 rounded-xl flex items-center justify-center hover:bg-teal-100 hover:shadow-md transition-all duration-300 cursor-pointer group border border-teal-100">
                  <div className="text-center">
                    <MapPin className="w-4 h-4 text-teal-500 mx-auto mb-1 group-hover:-translate-y-1 transition-transform" />
                    <div className="text-xs font-bold text-teal-700">关西</div>
                  </div>
                </Link>
                
                <Link href="/passlist?region=中部" className="h-16 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer group border border-gray-200">
                  <div className="text-center">
                    <MapPin className="w-4 h-4 text-gray-500 mx-auto mb-1 group-hover:-translate-y-1 transition-transform" />
                    <div className="text-xs font-bold text-gray-700">中部</div>
                  </div>
                </Link>
                
                <Link href="/passlist?region=关东" className="h-16 bg-blue-50 rounded-xl flex items-center justify-center hover:bg-blue-100 hover:shadow-md transition-all duration-300 cursor-pointer group border border-blue-100">
                  <div className="text-center">
                    <MapPin className="w-4 h-4 text-blue-500 mx-auto mb-1 group-hover:-translate-y-1 transition-transform" />
                    <div className="text-xs font-bold text-blue-700">关东</div>
                  </div>
                </Link>
              </div>
              
              {/* 九州和四国 - 同一行，各占1/4宽度，右侧留2个空白区域 */}
              <div className="grid grid-cols-4 gap-4">
                <Link href="/passlist?region=九州" className="h-16 bg-yellow-50 rounded-xl flex items-center justify-center hover:bg-yellow-100 hover:shadow-md transition-all duration-300 cursor-pointer group border border-yellow-100">
                  <div className="text-center">
                    <MapPin className="w-4 h-4 text-yellow-500 mx-auto mb-1 group-hover:-translate-y-1 transition-transform" />
                    <div className="text-sm font-bold text-yellow-700">九州</div>
                  </div>
                </Link>
                
                <Link href="/passlist?region=四国" className="h-16 bg-indigo-50 rounded-xl flex items-center justify-center hover:bg-indigo-100 hover:shadow-md transition-all duration-300 cursor-pointer group border border-indigo-100">
                  <div className="text-center">
                    <MapPin className="w-4 h-4 text-indigo-500 mx-auto mb-1 group-hover:-translate-y-1 transition-transform" />
                    <div className="text-sm font-bold text-indigo-700">四国</div>
                  </div>
                </Link>
                
                {/* 空白区域 */}
                <div></div>
                <div></div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-8 p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
              <h4 className="text-base font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                地区图例
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.keys(regionColors).map(region => (
                  <div key={region} className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${regionColors[region as keyof typeof regionColors] || 'bg-gray-400'} mr-2`}></div>
                    <span className="text-sm text-gray-600 font-medium">{region}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
