'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Calendar, Calculator, TrendingUp, Star, CheckCircle, AlertCircle, ArrowRight, ExternalLink, Users, Train } from 'lucide-react';
import { Route, PassRecommendation, JRPass } from '@/types/pass';

interface PassCalculatorProps {
  passes: JRPass[];
}

// 都道府县到周游券大区的映射表
const PREFECTURE_TO_REGION: Record<string, string> = {
  "北海道": "北海道",
  "青森县": "東北", "岩手县": "東北", "宫城县": "東北", "秋田县": "東北", "山形县": "東北", "福岛县": "東北",
  "茨城县": "関東", "栃木县": "関東", "群马县": "関東", "埼玉县": "関東", "千叶县": "関東", "东京都": "関東", "神奈川县": "関東",
  "新泻县": "北信越", "富山县": "北信越", "石川县": "北信越", "福井县": "北信越", "山梨县": "北信越", "长野县": "北信越",
  "岐阜县": "東海", "静冈县": "東海", "爱知县": "東海", "三重县": "東海",
  "滋贺县": "近畿", "京都府": "近畿", "大阪府": "近畿", "兵库县": "近畿", "奈良县": "近畿", "和歌山县": "近畿",
  "鸟取县": "中国", "岛根县": "中国", "冈山县": "中国", "广岛县": "中国", "山口县": "中国",
  "德岛县": "四国", "香川县": "四国", "爱媛县": "四国", "高知县": "四国",
  "福冈县": "九州", "佐贺县": "九州", "长崎县": "九州", "熊本县": "九州", "大分县": "九州", "宫崎县": "九州", "鹿儿岛县": "九州",
  "冲绳县": "九州"
};

export default function PassCalculator({ passes }: PassCalculatorProps) {
  const router = useRouter();
  const [route, setRoute] = useState({
    from: '',
    to: '',
    duration: 7,
    adults: 1,
    children: 0,
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
      const fromRegion = PREFECTURE_TO_REGION[route.from];
      const toRegion = route.to;
      
      // 1. 初步精准过滤：根据出发地和目的地筛选
      const filteredPasses = passes.filter(pass => {
        const passRegions = pass.coverage?.regions || [];
        const isNational = pass.category === 'national' || passRegions.includes('全国') || passRegions.includes('全日本');
        
        if (isNational) return true; // 全国券始终作为跨区备选
        if (toRegion === '全国') return isNational; // 如果游客明确要游玩全国，只展示全国券
        
        // 跨大区游玩（例如从东京到大阪，出发区与目的区不同）
        if (fromRegion && fromRegion !== toRegion && toRegion !== '全国') {
            // 必须包含目的大区
            return passRegions.includes(toRegion);
        }
        
        // 同大区游玩，或仅指定了目的地
        return passRegions.some(region => 
          region === toRegion || 
          region.includes(toRegion) || 
          toRegion.includes(region)
        );
      });
      
      // 2. 多维度智能评分
      filteredPasses.forEach(pass => {
        if (!pass.price?.adult?.regular || pass.price.adult.regular <= 0) {
          return;
        }
        
        let score = 0;
        let reason = '';
        let savings = 0;
        
        const passRegions = pass.coverage?.regions || [];
        const isNational = pass.category === 'national' || passRegions.includes('全国') || passRegions.includes('全日本');
        
        // --- 区域匹配度得分 (满分40) ---
        if (toRegion === '全国') {
            if (isNational) {
                score += 40;
                reason += '🎯完美覆盖全国旅行 ';
            }
        } else {
            if (fromRegion && fromRegion !== toRegion) {
                if (passRegions.includes(fromRegion) && passRegions.includes(toRegion)) {
                    score += 40;
                    reason += '🎯精准覆盖跨区行程 ';
                } else if (isNational) {
                    score += 30;
                    reason += '🗾全国券可覆盖此行程 ';
                } else if (passRegions.includes(toRegion)) {
                    score += 30;
                    reason += '🎯覆盖核心区域 ';
                }
            } else {
                if (passRegions.includes(toRegion) && !isNational) {
                    score += 40;
                    reason += '🎯深度覆盖目标区域 ';
                } else if (isNational) {
                    score += 20;
                    reason += '🗾全国可用但可能溢价 ';
                }
            }
        }
        
        // --- 天数匹配度得分 (满分30) ---
        const closestDuration = pass.duration.reduce((prev, curr) => 
            Math.abs(curr - route.duration) < Math.abs(prev - route.duration) ? curr : prev
        , pass.duration[0] || 7);
        
        const durationDiff = Math.abs(closestDuration - route.duration);
        if (durationDiff === 0) {
          score += 30;
          reason += '✅有效期完美契合 ';
        } else if (durationDiff <= 2) {
          score += 20;
          reason += '✅有效期较为合适 ';
        } else if (closestDuration > route.duration) {
          score += 10;
          reason += '⚠️券期比行程略长 ';
        } else {
          score += 5;
          reason += '⚠️券期无法覆盖全程 ';
        }
        
        // --- 人气与综合评价得分 (满分15) ---
        const popScore = (pass.popularity || 3) * 3;
        score += popScore;
        reason += `⭐综合评星${pass.popularity}/5 `;
        
        // --- 节省金额估算与性价比得分 (满分15) ---
        let dailyEstimate = 5000; 
        if (toRegion === '全国') dailyEstimate = 12000; // 新干线自由穿梭，日均成本极高
        else if (fromRegion && fromRegion !== toRegion) dailyEstimate = 10000; // 跨区单程或往返，日均成本较高
        else dailyEstimate = 6000; // 区域内普通游玩
        
        const totalEstimatedFare = dailyEstimate * route.duration * route.adults + (dailyEstimate / 2) * route.duration * route.children;
        
        const adultPrice = pass.price.adult.regular;
        const childPrice = pass.price.child?.regular || (adultPrice / 2);
        const totalPassCost = (adultPrice * route.adults) + (childPrice * route.children);
        
        savings = Math.max(0, totalEstimatedFare - totalPassCost);
        
        if (savings > 0) {
          score += 15;
          reason += `💰约省¥${savings.toLocaleString()} `;
        } else {
          score += 5; 
          reason += `💡价格合理 `;
        }
        
        results.push({
          pass,
          savings,
          reason,
          score
        });
      });
      
      // 按分数高低排序，仅展示最优的6个结果
      results.sort((a, b) => b.score - a.score);
      setRecommendations(results.slice(0, 6));
      setIsCalculating(false);
      setShowResults(true);
    }, 1200); 
  };


  return (
    <div className="glass-calculator rounded-2xl shadow-xl p-6 sm:p-10 max-w-5xl mx-auto border border-white/40 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight flex items-center justify-center gap-3">
          <Calculator className="w-8 h-8 text-red-600" />
          大师周游券计算器
        </h2>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-100">
            <TrendingUp className="w-3 h-3 mr-1" />
            AI智能匹配算法
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
            <CheckCircle className="w-3 h-3 mr-1" />
            涵盖全国百种券票
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-700 border border-green-100">
            <Star className="w-3 h-3 mr-1" />
            性价比直观对比
          </span>
        </div>
        <p className="text-gray-600 text-lg">
          基于海量交通数据，输入行程需求，为您精准推荐最高性价比的专属周游券方案。
        </p>
      </div>

      {/* 表单区域 */}
      <div className="bg-white/80 rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-red-500" />
              入境/出发城市
            </label>
            <select
              value={route.from}
              onChange={(e) => setRoute({...route, from: e.target.value})}
              className="w-full p-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 bg-white transition-shadow shadow-sm hover:border-red-300"
            >
              <option value="">请选择您入境或出发的都道府县</option>
              {Object.keys(PREFECTURE_TO_REGION).map(pref => (
                <option key={pref} value={pref}>{pref}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-blue-500" />
              主要游玩区域
            </label>
            <select
              value={route.to}
              onChange={(e) => setRoute({...route, to: e.target.value})}
              className="w-full p-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 bg-white transition-shadow shadow-sm hover:border-red-300"
            >
              <option value="">请选择您想要深度游玩的区域</option>
              <option value="全国">🗾 全国大范围游玩</option>
              <option value="北海道">❄️ 北海道地区</option>
              <option value="東北">🍎 東北地区</option>
              <option value="関東">🗼 関東地区 (东京及周边)</option>
              <option value="東海">🗻 東海地区 (富士山、名古屋)</option>
              <option value="北信越">🏔️ 北信越地区 (长野、新潟)</option>
              <option value="近畿">🏯 近畿/关西地区 (大阪、京都)</option>
              <option value="中国">⛩️ 中国地区 (广岛等)</option>
              <option value="四国">🌊 四国地区</option>
              <option value="九州">🌋 九州地区</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-gray-500" />
              计划游玩天数
            </label>
            <select
              value={route.duration}
              onChange={(e) => setRoute({...route, duration: parseInt(e.target.value)})}
              className="w-full p-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 bg-white transition-shadow shadow-sm hover:border-red-300"
            >
              {[1,2,3,4,5,6,7,8,9,10,14,21].map(d => (
                <option key={d} value={d}>{d} 天</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
              <Users className="w-4 h-4 mr-2 text-gray-500" />
              成人 (12岁及以上)
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                max="20"
                value={route.adults}
                onChange={(e) => setRoute({...route, adults: parseInt(e.target.value) || 1})}
                className="w-full p-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 bg-white transition-shadow shadow-sm hover:border-red-300"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">人</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
              <Users className="w-4 h-4 mr-2 text-gray-500" />
              儿童 (6-11岁)
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                max="20"
                value={route.children}
                onChange={(e) => setRoute({...route, children: parseInt(e.target.value) || 0})}
                className="w-full p-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 bg-white transition-shadow shadow-sm hover:border-red-300"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">人</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <button
          onClick={calculateRecommendations}
          disabled={isCalculating || !route.from || !route.to}
          className="cyber-button px-10 py-4 text-xl font-bold flex items-center justify-center group mx-auto disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto shadow-lg hover:shadow-red-500/30 transition-all rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white"
        >
          {isCalculating ? (
            <>
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3 relative z-10"></div>
              <span className="relative z-10 tracking-widest">匹配中...</span>
            </>
          ) : (
            <>
              <Calculator className="w-6 h-6 mr-3 relative z-10" />
              <span className="relative z-10 tracking-widest">开始精确匹配</span>
            </>
          )}
        </button>
      </div>

      {/* 智能推荐结果 */}
      {showResults && recommendations.length > 0 && (
        <div className="mt-12 space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-500">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Star className="text-yellow-500 fill-yellow-500" />
                大师级推荐榜单
              </h3>
              <p className="text-gray-500 mt-1">
                为您总共 ({route.adults}成人 {route.children > 0 ? `, ${route.children}儿童` : ''}) 计算的综合花费
              </p>
            </div>
            <div className="text-sm bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full font-medium">
              找到 {recommendations.length} 个方案
            </div>
          </div>

          <div className="grid gap-6">
            {recommendations.map((rec, index) => {
              const totalAdultCost = rec.pass.price.adult.regular * route.adults;
              const childPrice = rec.pass.price.child?.regular || (rec.pass.price.adult.regular / 2);
              const totalChildCost = childPrice * route.children;
              const totalCost = totalAdultCost + totalChildCost;
              
              const tags = rec.reason.split(' ').filter(Boolean);

              return (
                <div key={rec.pass.id} className="relative bg-white rounded-2xl p-6 border-2 border-transparent hover:border-red-500 transition-all shadow-sm hover:shadow-xl flex flex-col md:flex-row gap-6 overflow-hidden group">
                  {index === 0 && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl z-10 shadow-sm">
                      首选推荐
                    </div>
                  )}
                  {index === 1 && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl z-10 shadow-sm">
                      高性价比
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                        <Train className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                          {rec.pass.name.cn || rec.pass.name.jp}
                        </h4>
                        <div className="text-xs text-gray-400 mt-0.5">{rec.pass.name.en}</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tags.map((tag, i) => (
                        <span key={i} className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                          tag.includes('🎯') || tag.includes('✅') ? 'bg-green-50 text-green-700' :
                          tag.includes('💰') ? 'bg-orange-50 text-orange-700' :
                          'bg-gray-50 text-gray-600'
                        }`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-600 mb-4 bg-gray-50/50 p-3 rounded-xl">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="truncate" title={rec.pass.coverage?.regions?.join('、')}>
                          {rec.pass.coverage?.regions?.slice(0, 3).join('、')}
                          {rec.pass.coverage?.regions?.length > 3 ? '等' : ''}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span>可选 {rec.pass.duration?.join('/')} 天</span>
                      </div>
                      {rec.pass.trainTypes && rec.pass.trainTypes.length > 0 && (
                        <div className="flex items-center gap-2 col-span-2">
                          <Train className="w-4 h-4 text-gray-400" />
                          <span className="truncate text-gray-500">涵盖: {rec.pass.trainTypes.slice(0, 3).join('、')}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="md:w-64 flex flex-col justify-between border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">总计费用 (¥)</div>
                      <div className="text-3xl font-black text-red-600 tracking-tight">
                        ¥{totalCost.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-400 mt-1 flex justify-between">
                        <span>成人: ¥{rec.pass.price.adult.regular.toLocaleString()} × {route.adults}</span>
                        {route.children > 0 && <span>儿童: ¥{childPrice.toLocaleString()} × {route.children}</span>}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-2">
                      {rec.pass.officialLinks?.[0]?.url && (
                         <button
                           onClick={() => window.open(rec.pass.officialLinks[0].url, '_blank')}
                           className="w-full bg-gray-900 hover:bg-black text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
                         >
                           官网购买 <ExternalLink className="w-4 h-4" />
                         </button>
                      )}
                      <button
                        onClick={() => router.push(`/passes/${rec.pass.id}`)}
                        className="w-full bg-red-50 hover:bg-red-100 text-red-700 px-4 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 border border-red-100"
                      >
                        查看详细图文 <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {showResults && recommendations.length === 0 && (
        <div className="mt-12 text-center py-16 bg-white rounded-2xl border border-dashed border-gray-300">
          <div className="w-20 h-20 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-10 h-10 text-yellow-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            未找到完全匹配的周游券
          </h3>
          <p className="text-gray-500 max-w-md mx-auto">
            基于您当前的“出发地”和“目的地”组合，暂无覆盖两地的通票。
            建议您：<br/>
            1. 尝试选择更近的游玩区域<br/>
            2. 选择“全国”作为游玩区域<br/>
            3. 单独购买新干线车票更为划算
          </p>
        </div>
      )}
    </div>
  );
}
