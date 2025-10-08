'use client';

import { MapPin, Search, Filter } from "lucide-react";
import { jrPasses, regions } from "@/data/passes";
import { JRPass } from "@/types/pass";
import Link from "next/link";
import { useState } from "react";

export default function MapSection() {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedPass, setSelectedPass] = useState<JRPass | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPasses = jrPasses.filter(pass => {
    if (selectedRegion !== 'all' && !pass.coverage.regions.includes(selectedRegion)) {
      return false;
    }
    if (searchTerm && !pass.name.en.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !pass.name.jp.includes(searchTerm)) {
      return false;
    }
    return true;
  });

  const regionColors = {
    '全国': 'bg-red-500',
    '关东': 'bg-blue-500',
    '关西': 'bg-green-500',
    '东北': 'bg-purple-500',
    '九州': 'bg-yellow-500',
    '中国': 'bg-pink-500',
    '四国': 'bg-indigo-500',
    '北海道': 'bg-orange-500'
  };

  return (
    <section id="map" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🗺️ 通票覆盖地图
          </h2>
          <p className="text-xl text-gray-600">
            可视化查看各JR通票的覆盖范围，选择适合您行程的通票
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                筛选条件
              </h3>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  搜索通票
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="输入通票名称..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Region Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  选择地区
                </label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="all">全部地区</option>
                  {regions.map(region => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pass List */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">通票列表</h4>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {filteredPasses.map((pass) => (
                    <div
                      key={pass.id}
                      onClick={() => setSelectedPass(pass)}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedPass?.id === pass.id
                          ? 'bg-red-100 border-2 border-red-500'
                          : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                      }`}
                    >
                      <div className="font-medium text-gray-900">{pass.name.en}</div>
                      <div className="text-sm text-gray-600">{pass.name.jp}</div>
                      <div className="flex items-center mt-2">
                        <span className="text-sm font-semibold text-red-600">
                          ¥{pass.price.adult.regular.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500 ml-2">
                          {pass.duration.join('/')}天
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">日本地图</h3>
              
              {/* Map Visualization */}
              <div className="relative bg-gray-100 rounded-lg p-8 min-h-96">
                <div className="grid grid-cols-4 gap-4 h-96">
                  {/* 北海道 */}
                  <div className="col-span-4 h-16 bg-gradient-to-r from-orange-200 to-orange-300 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-orange-800">北海道</div>
                    </div>
                  </div>
                  
                  {/* 东北 */}
                  <div className="col-span-2 h-32 bg-gradient-to-r from-purple-200 to-purple-300 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-purple-800">东北</div>
                    </div>
                  </div>
                  
                  {/* 关东 */}
                  <div className="col-span-2 h-32 bg-gradient-to-r from-blue-200 to-blue-300 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-blue-800">关东</div>
                    </div>
                  </div>
                  
                  {/* 中部 */}
                  <div className="col-span-1 h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                      <div className="text-xs font-semibold text-gray-700">中部</div>
                    </div>
                  </div>
                  
                  {/* 关西 */}
                  <div className="col-span-2 h-24 bg-gradient-to-r from-green-200 to-green-300 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-6 h-6 text-green-600 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-green-800">关西</div>
                    </div>
                  </div>
                  
                  {/* 中国 */}
                  <div className="col-span-1 h-24 bg-gradient-to-r from-pink-200 to-pink-300 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-5 h-5 text-pink-600 mx-auto mb-1" />
                      <div className="text-xs font-semibold text-pink-700">中国</div>
                    </div>
                  </div>
                  
                  {/* 四国 */}
                  <div className="col-span-1 h-16 bg-gradient-to-r from-indigo-200 to-indigo-300 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-4 h-4 text-indigo-600 mx-auto mb-1" />
                      <div className="text-xs font-semibold text-indigo-700">四国</div>
                    </div>
                  </div>
                  
                  {/* 九州 */}
                  <div className="col-span-3 h-16 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-6 h-6 text-yellow-600 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-yellow-800">九州</div>
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-6 p-4 bg-white rounded-lg border">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">图例</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {regions.map(region => (
                      <div key={region} className="flex items-center">
                        <div className={`w-4 h-4 rounded ${regionColors[region as keyof typeof regionColors] || 'bg-gray-400'} mr-2`}></div>
                        <span className="text-sm text-gray-700">{region}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Selected Pass Info */}
              {selectedPass && (
                <div className="mt-6 p-6 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    选中通票: {selectedPass.name.en}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">基本信息</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>日文名称: {selectedPass.name.jp}</li>
                        <li>价格: ¥{selectedPass.price.adult.regular.toLocaleString()}</li>
                        <li>天数: {selectedPass.duration.join(' / ')}天</li>
                        <li>类别: {selectedPass.category === 'national' ? '全国通票' : 
                                  selectedPass.category === 'regional' ? '地区通票' : '地方通票'}</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">覆盖地区</h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedPass.coverage.regions.map(region => (
                          <span
                            key={region}
                            className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                              regionColors[region as keyof typeof regionColors] || 'bg-gray-400'
                            }`}
                          >
                            {region}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-3">
                    <Link
                      href={`/passes/${selectedPass.id}`}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                    >
                      查看详情
                    </Link>
                    <button className="border border-red-600 text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-50 transition-colors">
                      立即购买
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
