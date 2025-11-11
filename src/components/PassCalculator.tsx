'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Calendar, Calculator, TrendingUp, Star, CheckCircle, AlertCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { Route, PassRecommendation } from '@/types/pass';
import { unifiedPasses } from '@/ts-data/all-passes';

export default function PassCalculator() {
  const router = useRouter();
  const [route, setRoute] = useState<Route>({
    from: '',
    to: '',
    duration: 7,
    regions: []
  });
  const [isCalculating, setIsCalculating] = useState(false);
  const [recommendations, setRecommendations] = useState<PassRecommendation[]>([]);
  const [showResults, setShowResults] = useState(false);

  // 智能推荐算法
  const calculateRecommendations = () => {
    setIsCalculating(true);
    setShowResults(false);
    
    setTimeout(() => {
      const results: PassRecommendation[] = [];
      
      // 快速精准筛选：首先按地区精准匹配
      const regionFilteredPasses = unifiedPasses.filter(pass => {
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
      
      // 对精准匹配的通票进行评分
      regionFilteredPasses.forEach(pass => {
        let score = 0;
        let reason = '';
        let savings = 0;
        
        // 地区精准匹配（必须条件）
        score += 50; // 基础高分，因为已经通过地区筛选
        reason += '🎯 精准地区匹配 ';
        
        // 天数匹配度评分（允许±2天误差）
        const durationMatch = pass.duration.some(duration => 
          Math.abs(duration - route.duration) <= 2
        );
        
        if (durationMatch) {
          score += 25;
          reason += '✅ 天数完美匹配 ';
        } else {
          score += 10;
          reason += '⚠️ 天数可调整 ';
        }
        
        // 价格性价比评分
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
        score += pass.popularity * 3;
        reason += `⭐ 人气${pass.popularity}/5星 `;
        
        // 大致节省费用估算（快速计算）
        const estimatedDailyCost = route.duration * 8000; // 大致每天8000日元
        const passCost = pass.price.adult.regular;
        savings = Math.max(0, estimatedDailyCost - passCost);
        
        if (savings > 0) {
          score += 10;
          reason += `💰 约节省¥${savings.toLocaleString()} `;
        } else {
          score += 5;
          reason += `💡 价格合理 `;
        }
        
        results.push({
          pass,
          savings,
          reason,
          score
        });
      });
      
      // 按分数排序，突出最佳匹配
      results.sort((a, b) => b.score - a.score);
      setRecommendations(results);
      setIsCalculating(false);
      setShowResults(true);
    }, 1200); // 快速检索
  };


  return (
    <div className="glass-calculator rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
         周游券计算器
        </h2>
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 border border-red-200 ml-1 mr-1">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            快速周游券推荐
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 border border-red-200 ml-1 mr-1">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            快速了解节省金额
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 border border-red-200 ml-1 mr-1">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            快速获取购买链接
          </span>
        </div>
        <p className="text-gray-600">
          输入您的旅行计划，AI为您推荐最合适的周游券并大致计算节省费用
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="inline w-4 h-4 mr-2" />
            出发地
          </label>
          <select
            value={route.from}
            onChange={(e) => setRoute({...route, from: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
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
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="inline w-4 h-4 mr-2" />
            目的地
          </label>
          <select
            value={route.to}
            onChange={(e) => setRoute({...route, to: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
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
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="inline w-4 h-4 mr-2" />
            旅行天数
          </label>
          <select
            value={route.duration}
            onChange={(e) => setRoute({...route, duration: parseInt(e.target.value)})}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 bg-white"
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
              基于您的旅行计划，为您筛选了 {recommendations.length} 个周游券选项
            </p>
          </div>

          {recommendations.map((rec, index) => (
            <div key={rec.pass.id} className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div className="flex-1 mb-4 sm:mb-0">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {rec.pass.name.en}
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm mb-4">
                    <div>
                      <span className="font-medium text-gray-700">覆盖范围：</span>
                      <span className="text-gray-600 block sm:inline">{rec.pass.coverage?.regions?.join('、') || '未知'}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">有效天数：</span>
                      <span className="text-gray-600 block sm:inline">{rec.pass.duration?.join('/') || '未知'}天</span>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="font-medium text-gray-700">适用列车：</span>
                      <span className="text-gray-600 block sm:inline">{rec.pass.trainTypes?.join('、') || '未知'}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">预计节省：</span>
                      <span className="text-green-600 font-semibold block sm:inline">¥{rec.savings?.toLocaleString() || '0'}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right sm:ml-6 -mt-8 sm:mt-0">
                  <div className="text-3xl sm:text-3xl font-bold text-red-600 mb-1">
                    ¥{rec.pass.price.adult.regular.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500 mb-1">
                    成人票价格
                  </div>
                  <div className="text-lg text-gray-400">
                    ¥{rec.pass.price.child.regular.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-400">
                    儿童票价格
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end pt-4 border-t border-gray-100 space-y-3 sm:space-y-0">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    onClick={() => window.open(rec.pass.officialLinks?.[0]?.url || '#', '_blank')}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
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
            根据您的旅行计划，暂时没有找到合适的周游券推荐。
            <br />
            建议您调整旅行天数或目的地，或考虑单独购买车票。
          </p>
        </div>
      )}
    </div>
  );
}

