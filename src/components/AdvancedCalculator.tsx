'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Calendar, Users, Calculator, TrendingUp, Star, CheckCircle, AlertCircle, ArrowRight, ExternalLink, Route, Clock } from 'lucide-react';
import { Route as RouteType, PassRecommendation, JRPass } from '@/types/pass';

interface RouteSegment {
  from: string;
  to: string;
  cost: number;
  duration: number;
  trainType: string;
}

interface AdvancedCalculatorProps {
  passes: JRPass[];
}

export default function AdvancedCalculator({ passes }: AdvancedCalculatorProps) {
  const router = useRouter();
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
      
      // 计算单独购票总费用（精确计算）
      const individualCost = segments.reduce((total, segment) => total + segment.cost, 0) * travelers;
      
      // 第一步：精准地区匹配筛选
      const regionFilteredPasses = passes.filter(pass => {
        return pass.coverage.regions.some(region => 
          region === route.to || 
          (route.to === '全国' && region === '全国') ||
          (route.to === '北海道' && region === '北海道') ||
          (route.to === '東北' && (region === '東北' || region === '東北')) ||
          (route.to === '関東' && (region === '関東' || region === '関東')) ||
          (route.to === '東海' && (region === '東海' || region === '東海')) ||
          (route.to === '北信越' && region === '北信越') ||
          (route.to === '近畿' && (region === '近畿' || region === '近畿')) ||
          (route.to === '中国' && (region === '中国' || region === '中国')) ||
          (route.to === '四国' && (region === '四国' || region === '四国')) ||
          (route.to === '九州' && (region === '九州' || region === '九州'))
        );
      });
      
      // 第二步：对精准匹配的通票进行综合评分（只处理有成人价格的通票）
      regionFilteredPasses.forEach(pass => {
        if (!pass.price?.adult?.regular || pass.price.adult.regular <= 0) {
          return;
        }
        let score = 0;
        let reason = '';
        let savings = 0;
        let isPerfectMatch = true;
        
        // 地区精准匹配（必须条件，基础分）
        score += 60;
        reason += '🎯 精准地区匹配 ';
        
        // 天数匹配：严格优先完美匹配
        const validDurations = pass.duration.filter(duration => duration <= route.duration);
        const exactDurationMatch = pass.duration.includes(route.duration);
        
        if (exactDurationMatch) {
          // 完美天数匹配，最高分
          score += 40;
          reason += '✅ 天数完美匹配 ';
        } else if (validDurations.length > 0) {
          // 有合适的天数选项，但非完美匹配
          const bestDuration = Math.max(...validDurations);
          score += 25;
          reason += `✅ 天数匹配(${bestDuration}天) `;
          isPerfectMatch = false;
        } else {
          // 天数不匹配，大幅扣分
          const minDuration = Math.min(...pass.duration);
          const maxDuration = Math.max(...pass.duration);
          
          if (minDuration > route.duration) {
            score += 5;
            reason += `⚠️ 天数较长(${minDuration}天) `;
          } else {
            score += 5;
            reason += `⚠️ 天数较短(${maxDuration}天) `;
          }
          isPerfectMatch = false;
        }
        
        // 精确节省费用计算（核心评分项）
        const passCost = pass.price.adult.regular * travelers;
        savings = individualCost - passCost;
        
        if (savings > 0) {
          // 根据节省金额给予不同分数
          if (savings >= 10000) {
            score += 35;
            reason += `💰 大幅节省¥${savings.toLocaleString()} `;
          } else if (savings >= 5000) {
            score += 30;
            reason += `💰 显著节省¥${savings.toLocaleString()} `;
          } else {
            score += 20;
            reason += `💰 节省¥${savings.toLocaleString()} `;
          }
        } else {
          // 不划算，大幅扣分
          score -= 25;
          reason += `💸 不划算(多花¥${Math.abs(savings).toLocaleString()}) `;
          isPerfectMatch = false;
        }
        
        // 路线覆盖度评分
        const coveredSegments = segments.filter(segment => {
          return pass.trainTypes.some(trainType => 
            segment.trainType.includes(trainType) || 
            trainType === '新干线' && segment.trainType.includes('新干线')
          );
        });
        
        const coverageRatio = segments.length > 0 ? coveredSegments.length / segments.length : 1;
        if (coverageRatio >= 0.9) {
          score += 20;
          reason += '✅ 路线全覆盖 ';
        } else if (coverageRatio >= 0.7) {
          score += 15;
          reason += '✅ 路线高覆盖 ';
        } else if (coverageRatio >= 0.5) {
          score += 10;
          reason += '⚠️ 路线部分覆盖 ';
        } else {
          score -= 10;
          reason += '❌ 路线覆盖度低 ';
          isPerfectMatch = false;
        }
        
        // 性价比评分
        const dailyCost = pass.price.adult.regular / Math.min(...pass.duration);
        if (dailyCost < 5000) {
          score += 15;
          reason += '✅ 超高性价比 ';
        } else if (dailyCost < 10000) {
          score += 10;
          reason += '✅ 性价比良好 ';
        } else {
          score += 5;
          reason += '⚠️ 价格适中 ';
        }
        
        // 人气评分
        score += pass.popularity * 2;
        reason += `⭐ 人气${pass.popularity}/5星 `;
        
        // 完美匹配奖励分
        if (isPerfectMatch) {
          score += 15;
          reason += '🏆 完美匹配 ';
        }
        
        // 推荐门槛：优先推荐高分方案
        if (score > 50) {
          results.push({
            pass,
            savings,
            reason,
            score
          });
        }
      });
      
      // 第三步：如果精准匹配没有结果，尝试同地区备选推荐
      if (results.length === 0) {
        // 获取同地区的所有通票作为备选
        const fallbackPasses = passes.filter(pass => {
          return pass.coverage.regions.some(region => 
            region === route.to || 
            (route.to === '全国' && region === '全国') ||
            (route.to === '関東' && region === '関東') ||
            (route.to === '近畿' && region === '近畿') ||
            (route.to === '東北' && region === '東北') ||
            (route.to === '九州' && region === '九州')
          );
        });
        
        // 对备选通票进行评分（降低门槛，只处理有成人价格的通票）
        fallbackPasses.forEach(pass => {
          if (!pass.price?.adult?.regular || pass.price.adult.regular <= 0) {
            return;
          }
          let score = 0;
          let reason = '';
          let savings = 0;
          
          // 地区匹配（基础分）
          score += 40;
          reason += '🎯 同地区匹配 ';
          
          // 天数匹配（放宽要求）
          const validDurations = pass.duration.filter(duration => duration <= route.duration);
          if (validDurations.length > 0) {
            const bestDuration = Math.max(...validDurations);
            score += 20;
            reason += `✅ 天数匹配(${bestDuration}天) `;
          } else {
            score += 5;
            reason += '⚠️ 天数不匹配 ';
          }
          
          // 节省费用
          const passCost = pass.price.adult.regular * travelers;
          savings = individualCost - passCost;
          
          if (savings > 0) {
            score += 25;
            reason += `💰 节省¥${savings.toLocaleString()} `;
          } else {
            score -= 10;
            reason += `💸 不划算(多花¥${Math.abs(savings).toLocaleString()}) `;
          }
          
          // 性价比
          const dailyCost = pass.price.adult.regular / Math.min(...pass.duration);
          if (dailyCost < 10000) {
            score += 10;
            reason += '✅ 性价比良好 ';
          }
          
          // 人气
          score += pass.popularity * 2;
          reason += `⭐ 人气${pass.popularity}/5星 `;
          
          // 降低推荐门槛
          if (score > 30) {
            results.push({
              pass,
              savings,
              reason,
              score
            });
          }
        });
      }
      
      // 按分数排序，确保最佳推荐在第一位
      results.sort((a, b) => b.score - a.score);
      
      setRecommendations(results);
      setRouteSegments(segments);
      setIsCalculating(false);
      setShowResults(true);
    }, 2000); // 精确计算需要更多时间
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black mb-4">
           智能周游券高级计算器
        </h2>
        <div className="flex justify-center mb-4 flex-wrap gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 border border-red-200">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            精准地区匹配
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 border border-red-200">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            精准天数匹配
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 border border-red-200">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            精确节省费用计算
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 border border-red-200">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            综合最佳推荐
          </span>
        </div>
        <p className="text-gray-800">
        智能精准检索：地区必须精准匹配，天数严格优先完美匹配，精确计算节省费用，综合评分选出最佳方案。如无完美匹配，则推荐同地区最优备选方案。
        </p>
      </div>

      <div className="w-full">
        {/* 输入区域 */}
        <div className="w-full space-y-6">
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
            <option value="東北">東北地区</option>
                  <option value="関東">関東地区</option>
            <option value="東海">東海地区</option>
                  <option value="北信越">北信越地区</option>
                  <option value="近畿">近畿地区</option>
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
              🎯 精准推荐结果
            </h3>
            <p className="text-gray-800">
              基于智能精准检索算法，综合地区匹配、天数匹配、节省费用、路线覆盖度等多维度评分，为您推荐了 {recommendations.length} 个最佳方案
            </p>
          </div>


          {recommendations.map((rec, index) => (
            <div key={rec.pass.id} className={`relative rounded-2xl p-5 sm:p-7 transition-all duration-500 overflow-hidden group hover:shadow-2xl ${
              index === 0 
                ? 'bg-gradient-to-br from-red-50/80 via-pink-50/60 to-rose-50/80 backdrop-blur-sm' 
                : 'bg-white/90 backdrop-blur-sm'
            }`}>
              {/* 炫彩边框效果 - 只有最佳推荐有特殊效果 */}
              <div className={`absolute inset-0 rounded-2xl p-[3px] ${
                index === 0 
                  ? 'bg-gradient-to-r from-red-500 via-pink-500 to-red-600 animate-pulse' 
                  : 'bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 group-hover:from-gray-400 group-hover:via-gray-500 group-hover:to-gray-600'
              }`}>
                <div className="w-full h-full bg-white/95 backdrop-blur-sm rounded-xl shadow-inner"></div>
              </div>
              
              {/* 装饰性光效 - 只有最佳推荐有 */}
              {index === 0 && (
                <>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-200/20 to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-200/20 to-transparent rounded-full blur-xl"></div>
                </>
              )}
              
              {/* 内容区域 */}
              <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div className="flex-1 mb-4 sm:mb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                    {/* 只有第一个（最佳推荐）显示标签 */}
                    {index === 0 && (
                      <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 text-white px-4 py-2 rounded text-sm font-bold mb-2 sm:mb-0 sm:mr-3 shadow-xl shadow-amber-400/30 w-fit transition-all duration-300 border border-white/20">
                        🏆 最佳推荐
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
                  {typeof rec.pass.price.adult?.regular === 'number' &&
                    rec.pass.price.adult.regular > 0 && (
                      <>
                        <div className="text-3xl sm:text-3xl font-bold text-red-600 mb-1">
                          ¥{rec.pass.price.adult.regular.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500 mb-1">
                          成人票价格
                        </div>
                      </>
                    )}
                  {typeof rec.pass.price.child?.regular === 'number' &&
                    rec.pass.price.child.regular > 0 && (
                      <>
                        <div className="text-lg text-gray-400">
                          ¥{rec.pass.price.child.regular.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-400">
                          儿童票价格
                        </div>
                      </>
                    )}
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
            根据您的旅行计划，该地区暂时没有找到合适的周游券推荐。
            <br />
            建议您调整目的地或考虑单独购买车票。
          </p>
        </div>
      )}
    </div>
  );
}

