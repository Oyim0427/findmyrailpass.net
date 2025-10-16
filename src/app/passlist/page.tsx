'use client';

import NavigationSection from "@/components/sections/NavigationSection";
import FooterSection from "@/components/sections/FooterSection";
import PassCard from "@/components/PassCard";
import { unifiedPasses } from "@/data/all-passes";
import { JRPass } from "@/types/pass";
import { useState, useEffect, Suspense } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

function PassListContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [selectedRating, setSelectedRating] = useState<string>('all');
  const [selectedTrainType, setSelectedTrainType] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const searchParams = useSearchParams();

  // 使用统一数据
  const allPasses = unifiedPasses;

  // 从URL参数获取地区筛选
  useEffect(() => {
    const region = searchParams.get('region');
    if (region) {
      setSelectedRegion(region);
      setSelectedCategory('regional');
    }
  }, [searchParams]);

  const categories = [
    { id: 'all', name: '全部', count: allPasses.length },
    { id: 'national', name: '全国通票', count: allPasses.filter(pass => pass.category === 'national').length },
    { id: 'regional', name: '地区通票', count: allPasses.filter(pass => pass.category === 'regional').length },
    { id: 'city', name: '城市交通券', count: allPasses.filter(pass => pass.category === 'city').length },
    { id: 'bus', name: '巴士通票', count: allPasses.filter(pass => pass.category === 'bus').length },
    { id: 'private', name: '私铁', count: allPasses.filter(pass => pass.category === 'private').length },
    { id: 'special', name: '特别组合', count: allPasses.filter(pass => pass.category === 'special').length }
  ];

  const regions = [
    { id: 'all', name: '全部地区' },
    { id: '北海道', name: '北海道' },
    { id: '东北', name: '东北' },
    { id: '关东', name: '关东' },
    { id: '中部', name: '中部' },
    { id: '关西', name: '关西' },
    { id: '中国', name: '中国' },
    { id: '四国', name: '四国' },
    { id: '九州', name: '九州' }


  ];

  const durationRanges = [
    { id: 'all', name: '全部时长' },
    { id: '1-7', name: '1-3天' },
    { id: '8-14', name: '3-7天' },
    { id: '15-21', name: '7-10天' },
    { id: '22+', name: '10天以上' }
  ];

  const priceRanges = [
    { id: 'all', name: '全部价格' },
    { id: '0-5000', name: '0-5,000円' },
    { id: '5001-10000', name: '5,000-10,000円' },
    { id: '10001-20000', name: '10,000-20,000円' },
    { id: '20001-30000', name: '20,000-30,000円' },
    { id: '30001-40000', name: '30,000-40,000円' },
    { id: '40001+', name: '40,000円以上' }
  ];

  const ratingRanges = [
    { id: 'all', name: '全部评分' },
    { id: '4+', name: '4星以上' },
    { id: '3+', name: '3星以上' },
    { id: '2+', name: '2星以上' }
  ];

  const trainTypes = [
    { id: 'all', name: '全部列车类型' },
    { id: '新干线', name: '新干线' },
    { id: '特急列车', name: '特急列车' },
    { id: '急行列车', name: '急行列车' },
    { id: '普通列车', name: '普通列车' },
    { id: '地铁', name: '地铁' },
    { id: '私铁', name: '私铁' },
    { id: '巴士', name: '巴士' },
    { id: '观光列车', name: '观光列车' }
  ];

  // 筛选周游券
  const filteredPasses = allPasses.filter(pass => {
    // 搜索匹配
    const matchesSearch = searchTerm === '' || 
                         pass.name.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pass.name.jp.includes(searchTerm) ||
                         pass.coverage.regions.some(region => region.includes(searchTerm));
    
    // 分类匹配
    const matchesCategory = selectedCategory === 'all' || 
                           (selectedCategory === 'national' && pass.category === 'national') ||
                           (selectedCategory === 'regional' && pass.category === 'regional') ||
                           (selectedCategory === 'city' && pass.category === 'city');
    
    // 地区匹配
    const matchesRegion = selectedRegion === 'all' || 
                         pass.coverage.regions.includes(selectedRegion);
    
    // 时长匹配
    const matchesDuration = selectedDuration === 'all' || 
                           (selectedDuration === '1-7' && pass.duration.some(d => d >= 1 && d <= 7)) ||
                           (selectedDuration === '8-14' && pass.duration.some(d => d >= 8 && d <= 14)) ||
                           (selectedDuration === '15-21' && pass.duration.some(d => d >= 15 && d <= 21)) ||
                           (selectedDuration === '22+' && pass.duration.some(d => d >= 22));
    
    // 价格匹配
    const matchesPrice = selectedPriceRange === 'all' || 
                        (selectedPriceRange === '0-10000' && pass.price.adult.regular <= 10000) ||
                        (selectedPriceRange === '10000-20000' && pass.price.adult.regular > 10000 && pass.price.adult.regular <= 20000) ||
                        (selectedPriceRange === '20000-30000' && pass.price.adult.regular > 20000 && pass.price.adult.regular <= 30000) ||
                        (selectedPriceRange === '30000+' && pass.price.adult.regular > 30000);
    
    // 评分匹配
    const matchesRating = selectedRating === 'all' || 
                         (selectedRating === '4+' && pass.popularity >= 4) ||
                         (selectedRating === '3+' && pass.popularity >= 3) ||
                         (selectedRating === '2+' && pass.popularity >= 2);
    
    // 列车类型匹配
    const matchesTrainType = selectedTrainType === 'all' || 
                            pass.trainTypes.includes(selectedTrainType);
    
    // URL参数地区匹配（保持向后兼容）
    const urlRegion = searchParams.get('region');
    const matchesUrlRegion = !urlRegion || pass.coverage.regions.includes(urlRegion);
    
    return matchesSearch && matchesCategory && matchesRegion && matchesDuration && 
           matchesPrice && matchesRating && matchesTrainType && matchesUrlRegion;
  });

  // 分页计算
  const totalPages = Math.ceil(filteredPasses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPasses = filteredPasses.slice(startIndex, endIndex);

  // 当筛选条件改变时，重置到第一页
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedRegion, selectedDuration, selectedPriceRange, selectedRating, selectedTrainType]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <NavigationSection />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
             全部周游券
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {searchParams.get('region') 
              ? `浏览${searchParams.get('region')}地区的JR周游券，找到最适合您日本之旅的通行证`
              : '浏览所有JR周游券，找到最适合您日本之旅的通行证'
            }
          </p>
        </div>

        {/* 搜索和筛选 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col gap-4">
            {/* 搜索框和筛选按钮 */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="搜索周游券名称、地区..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-black"
                  />
                </div>
              </div>
              
              {/* 筛选按钮 */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r cyber-button transition-all duration-200 shadow-lg rounded-lg"
              >
                <Filter className="w-5 h-5" />
                高级筛选
                {showFilters && <X className="w-4 h-4" />}
              </button>
            </div>

            {/* 基础分类筛选 */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-400/25 font-bold'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 font-normal'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* 高级筛选面板 */}
            {showFilters && (
              <div className="border-t pt-6 space-y-6">
                {/* 地区筛选 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">地区筛选</h3>
                  <div className="flex flex-wrap gap-2">
                    {regions.map((region) => (
                      <button
                        key={region.id}
                        onClick={() => setSelectedRegion(region.id)}
                        className={`px-3 py-2 text-sm transition-colors ${
                          selectedRegion === region.id
                            ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg font-bold'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 font-normal'
                        }`}
                      >
                        {region.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 时长筛选 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">时长筛选</h3>
                  <div className="flex flex-wrap gap-2">
                    {durationRanges.map((duration) => (
                      <button
                        key={duration.id}
                        onClick={() => setSelectedDuration(duration.id)}
                        className={`px-3 py-2 text-sm transition-colors ${
                          selectedDuration === duration.id
                            ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg font-bold'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 font-normal'
                        }`}
                      >
                        {duration.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 价格筛选 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">价格筛选</h3>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((price) => (
                      <button
                        key={price.id}
                        onClick={() => setSelectedPriceRange(price.id)}
                        className={`px-3 py-2 text-sm transition-colors ${
                          selectedPriceRange === price.id
                            ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg font-bold'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 font-normal'
                        }`}
                      >
                        {price.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 评分筛选 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">评分筛选</h3>
                  <div className="flex flex-wrap gap-2">
                    {ratingRanges.map((rating) => (
                      <button
                        key={rating.id}
                        onClick={() => setSelectedRating(rating.id)}
                        className={`px-3 py-2 text-sm transition-colors ${
                          selectedRating === rating.id
                            ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg font-bold'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 font-normal'
                        }`}
                      >
                        {rating.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 列车类型筛选 */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">列车类型筛选</h3>
                  <div className="flex flex-wrap gap-2">
                    {trainTypes.map((trainType) => (
                      <button
                        key={trainType.id}
                        onClick={() => setSelectedTrainType(trainType.id)}
                        className={`px-3 py-2 text-sm transition-colors ${
                          selectedTrainType === trainType.id
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg font-bold'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 font-normal'
                        }`}
                      >
                        {trainType.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 清除筛选按钮 */}
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedRegion('all');
                      setSelectedDuration('all');
                      setSelectedPriceRange('all');
                      setSelectedRating('all');
                      setSelectedTrainType('all');
                    }}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    清除所有筛选
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 周游券统计信息 */}
        <div className="mb-6 text-center">
          <p className="text-gray-600">
            共找到 <span className="font-semibold text-red-600">{filteredPasses.length}</span> 个周游券
            {totalPages > 1 && (
              <span className="ml-2 text-sm text-gray-500">
                (第 {currentPage} 页，共 {totalPages} 页)
              </span>
            )}
            {(selectedCategory !== 'all' || selectedRegion !== 'all' || selectedDuration !== 'all' || 
              selectedPriceRange !== 'all' || selectedRating !== 'all' || selectedTrainType !== 'all') && (
              <span className="ml-2 text-sm text-gray-500">
                (筛选条件: {
                  [
                    selectedCategory !== 'all' && categories.find(c => c.id === selectedCategory)?.name,
                    selectedRegion !== 'all' && regions.find(r => r.id === selectedRegion)?.name,
                    selectedDuration !== 'all' && durationRanges.find(d => d.id === selectedDuration)?.name,
                    selectedPriceRange !== 'all' && priceRanges.find(p => p.id === selectedPriceRange)?.name,
                    selectedRating !== 'all' && ratingRanges.find(r => r.id === selectedRating)?.name,
                    selectedTrainType !== 'all' && trainTypes.find(t => t.id === selectedTrainType)?.name
                  ].filter(Boolean).join(', ')
                })
              </span>
            )}
          </p>
        </div>

        {/* 周游券列表 */}
        {currentPasses.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPasses.map((pass) => (
              <PassCard key={pass.id} pass={pass} />
            ))}
          </div>
        )}

        {/* 分页组件 */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-12 mb-8">
            <div className="flex items-center space-x-2">
              {/* 上一页按钮 */}
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 font-medium transition-all duration-300 ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300'
                    : 'bg-white text-yellow-600 border border-yellow-400 hover:bg-yellow-400 hover:text-black hover:shadow-lg hover:shadow-yellow-400/50 active:scale-95'
                }`}
              >
                上一页
              </button>

              {/* 页码按钮 */}
              <div className="flex items-center space-x-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-4 py-2 font-medium transition-all duration-300 ${
                        currentPage === pageNum
                          ? 'bg-yellow-400 text-black border border-yellow-400 shadow-lg shadow-yellow-400/50'
                          : 'bg-white text-yellow-600 border border-yellow-400 hover:bg-yellow-400 hover:text-black hover:shadow-lg hover:shadow-yellow-400/50 active:scale-95'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              {/* 下一页按钮 */}
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 font-medium transition-all duration-300 ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-300'
                    : 'bg-white text-yellow-600 border border-yellow-400 hover:bg-yellow-400 hover:text-black hover:shadow-lg hover:shadow-yellow-400/50 active:scale-95'
                }`}
              >
                下一页
              </button>
            </div>
          </div>
        )}

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

export default function AllPassesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <PassListContent />
    </Suspense>
  );
}