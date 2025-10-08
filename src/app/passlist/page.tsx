'use client';

import NavigationSection from "@/components/sections/NavigationSection";
import FooterSection from "@/components/sections/FooterSection";
import PassCard from "@/components/PassCard";
import { jrPasses } from "@/data/passes";
import { useState } from 'react';
import { Grid, Filter, Search } from 'lucide-react';

export default function AllPassesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: '全部', count: jrPasses.length },
    { id: 'national', name: '全国版', count: jrPasses.filter(p => p.category === 'national').length },
    { id: 'regional', name: '地区版', count: jrPasses.filter(p => p.category === 'regional').length }
  ];

  const filteredPasses = jrPasses.filter(pass => {
    // 如果没有搜索词，显示所有周游券
    const matchesSearch = searchTerm === '' || 
                         pass.name.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pass.name.jp.includes(searchTerm) ||
                         pass.coverage.regions.some(region => region.includes(searchTerm));
    const matchesCategory = selectedCategory === 'all' || pass.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <NavigationSection />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🚄 全部周游券
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            浏览所有JR周游券，找到最适合您日本之旅的通行证
          </p>
        </div>

        {/* 搜索和筛选 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* 搜索框 */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="搜索周游券名称、地区..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>
            
            {/* 分类筛选 */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 周游券统计信息 */}
        <div className="mb-6 text-center">
          <p className="text-gray-600">
            共找到 <span className="font-semibold text-red-600">{filteredPasses.length}</span> 个周游券
            {selectedCategory !== 'all' && (
              <span className="ml-2 text-sm">
                (筛选条件: {categories.find(c => c.id === selectedCategory)?.name})
              </span>
            )}
          </p>
        </div>

        {/* 周游券网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPasses.map((pass) => (
            <PassCard key={pass.id} pass={pass} />
          ))}
        </div>

        {/* 无结果提示 */}
        {filteredPasses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">未找到匹配的周游券</h3>
            <p className="text-gray-600">请尝试调整搜索条件或筛选器</p>
          </div>
        )}
      </main>

      <FooterSection />
    </div>
  );
}
