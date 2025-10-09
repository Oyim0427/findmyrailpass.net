'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Calendar, Users, Calculator, TrendingUp, Star, CheckCircle, AlertCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { Route, PassRecommendation } from '@/types/pass';
import { jrPasses } from '@/data/passes';

export default function PassCalculator() {
  const router = useRouter();
  const [route, setRoute] = useState<Route>({
    from: '',
    to: '',
    duration: 7,
    regions: []
  });
  const [travelers, setTravelers] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);
  const [recommendations, setRecommendations] = useState<PassRecommendation[]>([]);
  const [showResults, setShowResults] = useState(false);

  // 智能推荐算法
  const calculateRecommendations = () => {
    setIsCalculating(true);
    setShowResults(false);
    
    setTimeout(() => {
      const results: PassRecommendation[] = [];
      
      // 根据路线和天数计算推荐
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
        
        // 计算节省费用（模拟）
        const estimatedIndividualCost = route.duration * 8000; // 假设每天8000日元
        const passCost = pass.price.adult.regular * travelers;
        savings = (estimatedIndividualCost * travelers) - passCost;
        
        if (savings > 0) {
          score += 15;
          reason += `💰 可节省¥${savings.toLocaleString()} `;
        } else {
          score -= 10;
          reason += `💸 可能不划算 `;
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
      setIsCalculating(false);
      setShowResults(true);
    }, 1500);
  };


  return (
    <div className="glass-calculator rounded-2xl shadow-xl p-8 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          🚄 智能JR通票计算器
        </h2>
        <p className="text-gray-600">
          输入您的旅行计划，AI为您推荐最合适的JR通票并计算节省费用
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
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

      <div className="text-center mb-8">
        <button
          onClick={calculateRecommendations}
          disabled={isCalculating || !route.from || !route.to}
          className="cyber-button px-8 py-4 text-lg font-semibold flex items-center justify-center group mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isCalculating ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3 relative z-10"></div>
              <span className="relative z-10">AI计算中...</span>
            </>
          ) : (
            <>
              <Calculator className="w-5 h-5 mr-3 relative z-10" />
              <span className="relative z-10">开始智能计算</span>
            </>
          )}
        </button>
      </div>

      {/* 智能推荐结果 */}
      {showResults && recommendations.length > 0 && (
        <div className="mt-8 space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              🎯 AI智能推荐结果
            </h3>
            <p className="text-gray-600">
              基于您的旅行计划，为您推荐了 {recommendations.length} 个最佳选择
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
                  <button
                    onClick={() => router.push(`/passes/${rec.pass.id}`)}
                    className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center shadow-lg shadow-amber-400/25"
                  >
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
