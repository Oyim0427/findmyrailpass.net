'use client';

import { MapPin } from "lucide-react";
import Link from "next/link";

export default function MapSection() {
  const regionColors = {
    '全国': 'bg-red-500',
    '关东': 'bg-blue-500',
    '关西': 'bg-green-500',
    '东北': 'bg-purple-500',
    '九州': 'bg-yellow-500',
    '中国': 'bg-yellow-500',
    '四国': 'bg-indigo-500',
    '北海道': 'bg-orange-500'
  };

  return (
    <section id="map" className="py-20 relative">
      {/* 赛博朋克装饰背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-cyan-500/5"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-yellow-500/20 border border-yellow-400 text-yellow-400 text-sm font-mono tracking-wider">
              [JR-PASS MAP]
            </span>
          </div>
          <h2 className="text-4xl font-bold cyber-text text-cyan-400 mb-4">
            通票地图
          </h2>
          <p className="text-xl text-gray-300 font-light">
            可视化查看各周游券的覆盖范围，选择适合您行程的周游券
          </p>
        </div>

        {/* Map Area */}
        <div className="max-w-4xl mx-auto">
              {/* Map Visualization */}
              <div className="relative bg-gray-50 border border-gray-200 rounded-lg p-8 min-h-96">
                <div className="space-y-4">
                  {/* 北海道 - 占宽度1/3，单独一行，靠右 */}
                  <div className="flex justify-end">
                    <Link href="/passlist?region=北海道" className="w-1/3 h-16 bg-gradient-to-r from-orange-200 to-orange-300 rounded-lg flex items-center justify-center hover:from-orange-300 hover:to-orange-400 transition-all duration-300 cursor-pointer group">
                      <div className="text-center">
                        <MapPin className="w-5 h-5 text-orange-600 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                        <div className="text-sm font-semibold text-orange-800">北海道</div>
                      </div>
                    </Link>
                  </div>
                  
                  {/* 东北 - 占宽度1/3，单独一行，靠右 */}
                  <div className="flex justify-end">
                    <Link href="/passlist?region=东北" className="w-1/3 h-16 bg-gradient-to-r from-purple-200 to-purple-300 rounded-lg flex items-center justify-center hover:from-purple-300 hover:to-purple-400 transition-all duration-300 cursor-pointer group">
                      <div className="text-center">
                        <MapPin className="w-5 h-5 text-purple-600 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                        <div className="text-sm font-semibold text-purple-800">东北</div>
                      </div>
                    </Link>
                  </div>
                  
                  {/* 中国、关西、中部、关东 - 一行，平均分 */}
                  <div className="grid grid-cols-4 gap-4">
                    <Link href="/passlist?region=中国" className="h-16 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-lg flex items-center justify-center hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 cursor-pointer group">
                      <div className="text-center">
                        <MapPin className="w-4 h-4 text-yellow-600 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                        <div className="text-xs font-semibold text-yellow-700">中国</div>
                      </div>
                    </Link>
                    
                    <Link href="/passlist?region=关西" className="h-16 bg-gradient-to-r from-green-200 to-green-300 rounded-lg flex items-center justify-center hover:from-green-300 hover:to-green-400 transition-all duration-300 cursor-pointer group">
                      <div className="text-center">
                        <MapPin className="w-4 h-4 text-green-600 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                        <div className="text-xs font-semibold text-green-800">关西</div>
                      </div>
                    </Link>
                    
                    <Link href="/passlist?region=中部" className="h-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center hover:from-gray-300 hover:to-gray-400 transition-all duration-300 cursor-pointer group">
                      <div className="text-center">
                        <MapPin className="w-4 h-4 text-gray-600 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                        <div className="text-xs font-semibold text-gray-700">中部</div>
                      </div>
                    </Link>
                    
                    <Link href="/passlist?region=关东" className="h-16 bg-gradient-to-r from-blue-200 to-blue-300 rounded-lg flex items-center justify-center hover:from-blue-300 hover:to-blue-400 transition-all duration-300 cursor-pointer group">
                      <div className="text-center">
                        <MapPin className="w-4 h-4 text-blue-600 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                        <div className="text-xs font-semibold text-blue-800">关东</div>
                      </div>
                    </Link>
                  </div>
                  
                  {/* 九州和四国 - 同一行，各占1/4宽度，右侧留2个空白区域 */}
                  <div className="grid grid-cols-4 gap-4">
                    <Link href="/passlist?region=九州" className="h-16 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-lg flex items-center justify-center hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 cursor-pointer group">
                      <div className="text-center">
                        <MapPin className="w-4 h-4 text-yellow-600 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                        <div className="text-sm font-semibold text-yellow-800">九州</div>
                      </div>
                    </Link>
                    
                    <Link href="/passlist?region=四国" className="h-16 bg-gradient-to-r from-indigo-200 to-indigo-300 rounded-lg flex items-center justify-center hover:from-indigo-300 hover:to-indigo-400 transition-all duration-300 cursor-pointer group">
                      <div className="text-center">
                        <MapPin className="w-4 h-4 text-indigo-600 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                        <div className="text-sm font-semibold text-indigo-700">四国</div>
                      </div>
                    </Link>
                    
                    {/* 空白区域 */}
                    <div></div>
                    <div></div>
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">📍 地区图例</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {Object.keys(regionColors).map(region => (
                      <div key={region} className="flex items-center">
                        <div className={`w-4 h-4 rounded ${regionColors[region as keyof typeof regionColors] || 'bg-gray-400'} mr-2`}></div>
                        <span className="text-sm text-gray-700">{region}</span>
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
