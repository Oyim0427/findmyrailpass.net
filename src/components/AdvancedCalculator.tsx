'use client';

import { useState } from 'react';
import { MapPin, Calendar, Users, Calculator, TrendingUp, Star, CheckCircle, AlertCircle, ArrowRight, ExternalLink, Route, Clock, DollarSign } from 'lucide-react';
import { Route as RouteType, PassRecommendation } from '@/types/pass';
import { jrPasses } from '@/data/passes';

interface RouteSegment {
  from: string;
  to: string;
  cost: number;
  duration: number;
  trainType: string;
}

export default function AdvancedCalculator() {
  const [route, setRoute] = useState<RouteType>({
    from: '',
    to: '',
    duration: 7,
    regions: []
  });
  const [travelers, setTravelers] = useState(1);
  const [routeSegments, setRouteSegments] = useState<RouteSegment[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [recommendations, setRecommendations] = useState<PassRecommendation[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // 模拟路线数据
  const routeData: { [key: string]: RouteSegment[] } = {
    '东京-大阪': [
      { from: '东京', to: '大阪', cost: 13820, duration: 150, trainType: '东海道新干线' },
      { from: '大阪', to: '京都', cost: 560, duration: 15, trainType: 'JR京都线' },
      { from: '京都', to: '奈良', cost: 710, duration: 45, trainType: '奈良线' }
    ],
    '东京-福冈': [
      { from: '东京', to: '博多', cost: 22320, duration: 300, trainType: '山阳新干线' },
      { from: '博多', to: '熊本', cost: 4560, duration: 60, trainType: '九州新干线' }
    ],
    '大阪-札幌': [
      { from: '大阪', to: '东京', cost: 13820, duration: 150, trainType: '东海道新干线' },
      { from: '东京', to: '札幌', cost: 26420, duration: 360, trainType: '东北新干线+北海道新干线' }
    ]
  };

  const calculateAdvancedRecommendations = () => {
    setIsCalculating(true);
    setShowResults(false);
    
    setTimeout(() => {
      const results: PassRecommendation[] = [];
      const routeKey = `${route.from}-${route.to}`;
      const segments = routeData[routeKey] || [];
      
      // 计算单独购票总费用
      const individualCost = segments.reduce((total, segment) => total + segment.cost, 0) * travelers;
      
      jrPasses.forEach(pass => {
        let score = 0;
        let reason = '';
        let savings = 0;
        
        // 地区匹配度评分
        const regionMatch = pass.coverage.regions.some(region => 
          region === route.to || 
          (route.to === '全国' && region === '全国') ||
          (route.to === '关东' && region === '关东') ||
          (route.to === '关西' && region === '关西') ||
          (route.to === '东北' && region === '东北') ||
          (route.to === '九州' && region === '九州')
        );
        
        if (regionMatch) {
          score += 40;
          reason += '✅ 覆盖您的旅行地区 ';
        } else {
          score -= 20;
          reason += '❌ 不覆盖您的旅行地区 ';
        }
        
        // 天数匹配度评分
        const durationMatch = pass.duration.includes(route.duration) || 
                             (route.duration <= Math.max(...pass.duration) && route.duration >= Math.min(...pass.duration));
        
        if (durationMatch) {
          score += 30;
          reason += '✅ 天数匹配 ';
        } else {
          score -= 10;
          reason += '⚠️ 天数不完全匹配 ';
        }
        
        // 价格性价比评分
        const dailyCost = pass.price.adult.regular / Math.min(...pass.duration);
        if (dailyCost < 5000) {
          score += 20;
          reason += '✅ 性价比高 ';
        } else if (dailyCost < 10000) {
          score += 10;
          reason += '⚠️ 价格中等 ';
        } else {
          score -= 5;
          reason += '❌ 价格较高 ';
        }
        
        // 人气评分
        score += pass.popularity * 2;
        reason += `⭐ 人气${pass.popularity}/5星 `;
        
        // 计算节省费用
        const passCost = pass.price.adult.regular * travelers;
        savings = individualCost - passCost;
        
        if (savings > 0) {
          score += 15;
          reason += `💰 可节省¥${savings.toLocaleString()} `;
        } else {
          score -= 10;
          reason += `💸 可能不划算 `;
        }
        
        // 路线覆盖度评分
        const coveredSegments = segments.filter(segment => {
          return pass.trainTypes.some(trainType => 
            segment.trainType.includes(trainType) || 
            trainType === '新干线' && segment.trainType.includes('新干线')
          );
        });
        
        const coverageRatio = coveredSegments.length / segments.length;
        if (coverageRatio >= 0.8) {
          score += 10;
          reason += '✅ 路线覆盖度高 ';
        } else if (coverageRatio >= 0.5) {
          score += 5;
          reason += '⚠️ 路线部分覆盖 ';
        } else {
          score -= 5;
          reason += '❌ 路线覆盖度低 ';
        }
        
        // 只推荐分数大于50的通票
        if (score > 50) {
          results.push({
            pass,
            savings,
            reason,
            score
          });
        }
      });
      
      // 按分数排序
      results.sort((a, b) => b.score - a.score);
      setRecommendations(results);
      setRouteSegments(segments);
      setIsCalculating(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black mb-4">
          🚄 高级智能JR通票计算器
        </h2>
        <p className="text-gray-800">
          基于实际路线规划，AI为您推荐最合适的JR通票并精确计算节省费用
        </p>
      </div>

      <div className="grid lg:grid-cols-8 gap-8">
        {/* 输入区域 */}
        <div className="lg:col-span-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
              <div>
              <label className="block text-sm font-medium text-black mb-2">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  出发地
                </label>
                <select
                  value={route.from}
                  onChange={(e) => setRoute({...route, from: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-black bg-white"
                >
                  <option value="">选择出发地</option>
            <option value="北海道">北海道</option>
            <option value="青森县">青森县</option>
            <option value="岩手县">岩手县</option>
            <option value="宫城县">宫城县</option>
            <option value="秋田县">秋田县</option>
            <option value="山形县">山形县</option>
            <option value="福岛县">福岛县</option>
            <option value="茨城县">茨城县</option>
            <option value="栃木县">栃木县</option>
            <option value="群马县">群马县</option>
            <option value="埼玉县">埼玉县</option>
            <option value="千叶县">千叶县</option>
            <option value="东京都">东京都</option>
            <option value="神奈川县">神奈川县</option>
            <option value="新泻县">新泻县</option>
            <option value="富山县">富山县</option>
            <option value="石川县">石川县</option>
            <option value="福井县">福井县</option>
            <option value="山梨县">山梨县</option>
            <option value="长野县">长野县</option>
            <option value="岐阜县">岐阜县</option>
            <option value="静冈县">静冈县</option>
            <option value="爱知县">爱知县</option>
            <option value="三重县">三重县</option>
            <option value="滋贺县">滋贺县</option>
            <option value="京都府">京都府</option>
            <option value="大阪府">大阪府</option>
            <option value="兵库县">兵库县</option>
            <option value="奈良县">奈良县</option>
            <option value="和歌山县">和歌山县</option>
            <option value="鸟取县">鸟取县</option>
            <option value="岛根县">岛根县</option>
            <option value="冈山县">冈山县</option>
            <option value="广岛县">广岛县</option>
            <option value="山口县">山口县</option>
            <option value="德岛县">德岛县</option>
            <option value="香川县">香川县</option>
            <option value="爱媛县">爱媛县</option>
            <option value="高知县">高知县</option>
            <option value="福冈县">福冈县</option>
            <option value="佐贺县">佐贺县</option>
            <option value="长崎县">长崎县</option>
            <option value="熊本县">熊本县</option>
            <option value="大分县">大分县</option>
            <option value="宫崎县">宫崎县</option>
            <option value="鹿儿岛县">鹿儿岛县</option>
            <option value="冲绳县">冲绳县</option>
                </select>
              </div>

              <div>
              <label className="block text-sm font-medium text-black mb-2">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  目的地
                </label>
                <select
                  value={route.to}
                  onChange={(e) => setRoute({...route, to: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-black bg-white"
                >
            <option value="">选择旅行地区</option>
                  <option value="全国">全国旅行</option>
            <option value="北海道">北海道地区</option>
            <option value="东北">东北地区</option>
                  <option value="关东">关东地区</option>
            <option value="中部">中部地区</option>
                  <option value="关西">关西地区</option>
            <option value="中国">中国地区</option>
            <option value="四国">四国地区</option>
                  <option value="九州">九州地区</option>
                </select>
            </div>

              <div>
              <label className="block text-sm font-medium text-black mb-2">
                  <Calendar className="inline w-4 h-4 mr-2" />
                  旅行天数
                </label>
                <select
                  value={route.duration}
                  onChange={(e) => setRoute({...route, duration: parseInt(e.target.value)})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-black bg-white"
                >
                  <option value={1}>1天</option>
            <option value={2}>2天</option>  
                  <option value={3}>3天</option>
            <option value={4}>4天</option>
                  <option value={5}>5天</option>
            <option value={6}>6天</option>
                  <option value={7}>7天</option>
            <option value={8}>8天</option>
            <option value={9}>9天</option>
            <option value={10}>10天</option>
                  <option value={14}>14天</option>
                  <option value={21}>21天</option>
                </select>
              </div>
              <div>
              <label className="block text-sm font-medium text-black mb-2">
                  <Users className="inline w-4 h-4 mr-2" />
                  旅行人数
                </label>
                <select 
                  value={travelers}
                  onChange={(e) => setTravelers(parseInt(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-black bg-white"
                >
                  <option value={1}>1人</option>
                  <option value={2}>2人</option>
                  <option value={3}>3人</option>
                  <option value={4}>4人</option>
                  <option value={5}>5人以上</option>
                </select>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={calculateAdvancedRecommendations}
              disabled={isCalculating || !route.from || !route.to}
              className="cyber-button px-8 py-4 text-lg font-semibold flex items-center justify-center group mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCalculating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3 relative z-10"></div>
                  <span className="relative z-10">AI分析中...</span>
                </>
              ) : (
                <>
                  <Calculator className="w-5 h-5 mr-3 relative z-10" />
                  <span className="relative z-10">开始高级计算</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 侧边栏信息 */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-black mb-3 flex items-center">
              <Route className="w-5 h-5 mr-2" />
              智能分析功能
            </h3>
            <ul className="space-y-2 text-sm text-gray-800">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                实际路线规划
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                精确费用对比
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                AI智能推荐
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                节省费用计算
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="font-bold text-black mb-3 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              计算优势
            </h3>
            <ul className="space-y-2 text-sm text-gray-800">
              <li>• 基于真实JR票价数据</li>
              <li>• 考虑新干线、特急等不同车型</li>
              <li>• 多维度评分算法</li>
              <li>• 个性化推荐理由</li>
            </ul>
          </div>

      </div>
    </div>


      {/* 路线详情 */}
      {showResults && routeSegments.length > 0 && (
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-black mb-4 flex items-center">
            <Route className="w-5 h-5 mr-2" />
            推荐路线详情
          </h3>
          <div className="space-y-3">
            {routeSegments.map((segment, index) => (
              <div key={index} className="flex items-center justify-between bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <div className="font-medium text-black">
                      {segment.from} → {segment.to}
                    </div>
                    <div className="text-sm text-gray-500">{segment.trainType}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-black text-lg">¥{segment.cost.toLocaleString()}</div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {Math.floor(segment.duration / 60)}h {segment.duration % 60}m
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t pt-3 mt-3">
              <div className="flex justify-between items-center font-bold text-lg">
                <span>单独购票总费用:</span>
                <span className="text-red-600 text-xl">
                  ¥{(routeSegments.reduce((total, segment) => total + segment.cost, 0) * travelers).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 智能推荐结果 */}
      {showResults && recommendations.length > 0 && (
        <div className="mt-8 space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-black mb-2">
              🎯 AI智能推荐结果
            </h3>
            <p className="text-gray-800">
              基于实际路线分析，为您推荐了 {recommendations.length} 个最佳选择
            </p>
          </div>


          {recommendations.map((rec, index) => (
            <div key={rec.pass.id} className={`relative rounded-2xl p-5 sm:p-7 transition-all duration-500 overflow-hidden group hover:shadow-2xl ${
              index === 0 
                ? 'bg-gradient-to-br from-red-50/80 via-pink-50/60 to-rose-50/80 backdrop-blur-sm' 
                : 'bg-white/90 backdrop-blur-sm'
            }`}>
              {/* 炫彩边框效果 */}
              <div className={`absolute inset-0 rounded-2xl p-[3px] ${
                index === 0 
                  ? 'bg-gradient-to-r from-red-500 via-pink-500 via-rose-500 to-red-600 animate-pulse' 
                  : 'bg-gradient-to-r from-red-400 via-pink-400 to-rose-400 group-hover:from-red-500 group-hover:via-pink-500 group-hover:to-rose-500'
              }`}>
                <div className="w-full h-full bg-white/95 backdrop-blur-sm rounded-xl shadow-inner"></div>
              </div>
              
              {/* 装饰性光效 */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-200/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-200/20 to-transparent rounded-full blur-xl"></div>
              
              {/* 内容区域 */}
              <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div className="flex-1 mb-4 sm:mb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                    {index === 0 && (
                      <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white px-4 py-2 rounded text-sm font-bold mb-2 sm:mb-0 sm:mr-3 shadow-xl shadow-amber-400/30 w-fit transition-all duration-300 border border-white/20">
                        ✨ 最佳推荐
                      </span>
                    )}
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <h4 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        {rec.pass.name.en}
                      </h4>
                      <span className="text-sm text-gray-500 mt-1 sm:mt-0 sm:ml-3 font-medium">
                        {rec.pass.name.jp}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3 text-sm sm:text-base">{rec.pass.description}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-3">
                    <div className="flex items-center bg-gradient-to-r from-yellow-50 to-amber-50 px-3 py-2 rounded-full border border-yellow-200/50">
                      <Star className="w-4 h-4 text-yellow-500 mr-2 animate-pulse" />
                      <span className="text-sm font-semibold text-gray-700">
                        推荐分数: <span className="text-yellow-600 font-bold">{rec.score}/100</span>
                      </span>
                    </div>
                    {rec.savings > 0 && (
                      <div className="flex items-center bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-2 rounded-full border border-green-200/50">
                        <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                        <span className="text-sm font-semibold text-green-700">
                          节省 <span className="text-green-600 font-bold">¥{rec.savings.toLocaleString()}</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="text-right sm:ml-6 -mt-8 sm:mt-0">
                  <div className="text-3xl sm:text-3xl font-bold text-red-600 mb-1">
                    ¥{rec.pass.price.adult.regular.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">
                    成人票价格
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-xl p-4 sm:p-5 mb-4 border border-blue-200/30 shadow-sm">
                <h5 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  推荐理由
                </h5>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{rec.reason}</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                  <span className="text-sm font-semibold text-gray-700">覆盖地区:</span>
                  <div className="flex flex-wrap gap-2">
                    {rec.pass.coverage.regions.map((region, i) => (
                      <span key={i} className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium border border-blue-200/50 shadow-sm">
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end pt-4 border-t border-gray-100 space-y-3 sm:space-y-0">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                   <button
                     onClick={() => window.open(rec.pass.officialLinks?.[0]?.url || '#', '_blank')}
                     className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 hover:from-amber-500 hover:via-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg shadow-amber-400/30 hover:shadow-xl"
                   >
                     官方购买
                     <ExternalLink className="w-4 h-4" />
                   </button>
                  <button
                    onClick={() => router.push(`/passes/${rec.pass.id}`)}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    查看详情
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showResults && recommendations.length === 0 && (
        <div className="mt-8 text-center py-8">
          <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-black mb-2">
            暂无推荐
          </h3>
          <p className="text-gray-800">
            根据您的旅行计划，暂时没有找到合适的JR通票推荐。
            <br />
            建议您调整旅行天数或目的地，或考虑单独购买车票。
          </p>
        </div>
      )}
    </div>
  );
}

