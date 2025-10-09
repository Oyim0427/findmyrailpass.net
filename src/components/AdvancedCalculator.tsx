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
    <div className="glass-calculator rounded-2xl shadow-xl p-8 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          🚄 高级智能JR通票计算器
        </h2>
        <p className="text-gray-600">
          基于实际路线规划，AI为您推荐最合适的JR通票并精确计算节省费用
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* 输入区域 */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  出发地
                </label>
                <select
                  value={route.from}
                  onChange={(e) => setRoute({...route, from: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">选择出发地</option>
                  <option value="东京">东京</option>
                  <option value="大阪">大阪</option>
                  <option value="京都">京都</option>
                  <option value="福冈">福冈</option>
                  <option value="札幌">札幌</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  目的地
                </label>
                <select
                  value={route.to}
                  onChange={(e) => setRoute({...route, to: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">选择目的地</option>
                  <option value="全国">全国旅行</option>
                  <option value="关东">关东地区</option>
                  <option value="关西">关西地区</option>
                  <option value="东北">东北地区</option>
                  <option value="九州">九州地区</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline w-4 h-4 mr-2" />
                  旅行天数
                </label>
                <select
                  value={route.duration}
                  onChange={(e) => setRoute({...route, duration: parseInt(e.target.value)})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value={1}>1天</option>
                  <option value={3}>3天</option>
                  <option value={5}>5天</option>
                  <option value={7}>7天</option>
                  <option value={14}>14天</option>
                  <option value={21}>21天</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="inline w-4 h-4 mr-2" />
                  旅行人数
                </label>
                <select 
                  value={travelers}
                  onChange={(e) => setTravelers(parseInt(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value={1}>1人</option>
                  <option value={2}>2人</option>
                  <option value={3}>3人</option>
                  <option value={4}>4人</option>
                  <option value={5}>5人以上</option>
                </select>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={calculateAdvancedRecommendations}
              disabled={isCalculating || !route.from || !route.to}
              className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center mx-auto shadow-lg shadow-amber-400/25"
            >
              {isCalculating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  AI分析中...
                </>
              ) : (
                <>
                  <Calculator className="w-5 h-5 mr-3" />
                  开始高级计算
                </>
              )}
            </button>
          </div>
        </div>

        {/* 侧边栏信息 */}
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center">
              <Route className="w-5 h-5 mr-2" />
              智能分析功能
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
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
            <h3 className="font-bold text-gray-900 mb-3 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              计算优势
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
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
        <div className="mt-8 glass-calculator-light rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Route className="w-5 h-5 mr-2" />
            推荐路线详情
          </h3>
          <div className="space-y-3">
            {routeSegments.map((segment, index) => (
              <div key={index} className="flex items-center justify-between glass-calculator-card rounded-lg p-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {segment.from} → {segment.to}
                    </div>
                    <div className="text-sm text-gray-500">{segment.trainType}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">¥{segment.cost.toLocaleString()}</div>
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
                <span className="text-red-600">
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
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              🎯 AI智能推荐结果
            </h3>
            <p className="text-gray-600">
              基于实际路线分析，为您推荐了 {recommendations.length} 个最佳选择
            </p>
          </div>

          {recommendations.map((rec, index) => (
            <div key={rec.pass.id} className={`border-2 rounded-xl p-6 transition-all duration-300 ${
              index === 0 ? 'border-red-500 bg-red-50/20' : 'border-gray-200/50 glass-calculator-card'
            }`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    {index === 0 && (
                      <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-3 shadow-lg shadow-amber-400/25">
                        🏆 最佳推荐
                      </span>
                    )}
                    <h4 className="text-xl font-bold text-gray-900">
                      {rec.pass.name.en}
                    </h4>
                    <span className="ml-3 text-sm text-gray-500">
                      {rec.pass.name.jp}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{rec.pass.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">
                        推荐分数: {rec.score}/100
                      </span>
                    </div>
                    {rec.savings > 0 && (
                      <div className="flex items-center text-green-600">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">
                          节省 ¥{rec.savings.toLocaleString()}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="text-right ml-6">
                  <div className="text-2xl font-bold text-red-600 mb-1">
                    ¥{rec.pass.price.adult.regular.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">
                    {rec.pass.duration.join('/')}天券
                  </div>
                </div>
              </div>

              <div className="glass-calculator-light rounded-lg p-4 mb-4">
                <h5 className="font-medium text-gray-900 mb-2">推荐理由:</h5>
                <p className="text-sm text-gray-700">{rec.reason}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">覆盖地区:</span>
                  <div className="flex space-x-1">
                    {rec.pass.coverage.regions.map((region, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center shadow-lg shadow-amber-400/25">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    查看详情
                  </button>
                  <button className="border border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
                    立即购买
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showResults && recommendations.length === 0 && (
        <div className="mt-8 text-center py-8">
          <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            暂无推荐
          </h3>
          <p className="text-gray-600">
            根据您的旅行计划，暂时没有找到合适的JR通票推荐。
            <br />
            建议您调整旅行天数或目的地，或考虑单独购买车票。
          </p>
        </div>
      )}
    </div>
  );
}
