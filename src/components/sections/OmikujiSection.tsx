'use client';

import { useState, useEffect } from 'react';
import { Sparkles, Zap, Star, Heart, AlertTriangle, X, RotateCcw } from 'lucide-react';
import type { Dictionary } from '@/i18n/dictionaries';

interface OmikujiSectionProps {
  dict?: Dictionary;
}

interface OmikujiResult {
  type: string;
  message: string;
  color: string;
  icon: React.ReactNode;
  advice: string;
  suggestions: string[];
  avoid: string[];
}

const omikujiResults: OmikujiResult[] = [
  {
    type: '大吉',
    message: '您的日本之旅将充满惊喜与美好！',
    color: 'from-rose-400 to-red-500',
    icon: <Sparkles className="w-8 h-8" />,
    advice: '随心所欲地去探索吧，处处皆有好运相伴。',
    suggestions: [
      '尝试从没去过的冷门小众景点',
      '品尝当地特色限定美食',
      '早起观赏日出或清晨的神社',
      '购买一份给自己或家人的纪念礼物'
    ],
    avoid: [
      '过度按部就班，缺乏即兴变化',
      '为了赶行程而忽略眼前的风景',
      '在同一个地方停留过久错失其他精彩'
    ]
  },
  {
    type: '中吉',
    message: '旅程平稳顺遂，细节之中见真章。',
    color: 'from-orange-400 to-amber-500',
    icon: <Star className="w-8 h-8" />,
    advice: '关注旅途中的微小美好，不经意的转角往往藏着惊喜。',
    suggestions: [
      '在当地老咖啡馆悠闲地度过午后',
      '乘坐复古电车体验慢节奏生活',
      '向当地居民或店员请教地道推荐',
      '用相机记录光影变化的瞬间'
    ],
    avoid: [
      '行李过多影响行动灵活性',
      '盲目跟风排长队的热门餐厅',
      '忽视交通换乘时间的充裕度'
    ]
  },
  {
    type: '小吉',
    message: '偶有小插曲，但不改旅途整体乐趣。',
    color: 'from-teal-400 to-blue-500',
    icon: <Heart className="w-8 h-8" />,
    advice: '保持开放包容的心态，意料之外也是旅行的独有馈赠。',
    suggestions: [
      '随身准备雨具应对天气突变',
      '保留半天不设限制的自由漫游时间',
      '尝试一件稍微超出舒适圈的新鲜事物',
      '品尝便利店的当季新品甜品'
    ],
    avoid: [
      '把日程安排得过于紧凑密集',
      '为小失误或突发状况过分懊恼',
      '忘记提前检查景区营业与闭馆时间'
    ]
  }
];

const omikujiStyles = [
  { color: 'from-rose-400 to-red-500', icon: <Sparkles className="w-8 h-8" /> },
  { color: 'from-orange-400 to-amber-500', icon: <Star className="w-8 h-8" /> },
  { color: 'from-teal-400 to-blue-500', icon: <Heart className="w-8 h-8" /> },
  { color: 'from-teal-400 to-indigo-500', icon: <Zap className="w-6 h-6" /> },
  { color: 'from-slate-400 to-gray-500', icon: <AlertTriangle className="w-6 h-6" /> }
];

export default function OmikujiSection({ dict }: OmikujiSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [result, setResult] = useState<OmikujiResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showSticks, setShowSticks] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'rotating' | 'revealing' | 'retracting'>('idle');

  // 当用户滚动到周游券地图 (#map) 时自动弹出
  useEffect(() => {
    const target = document.getElementById('map');
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAutoOpened) {
          setIsOpen(true);
          setHasAutoOpened(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [hasAutoOpened]);

  const drawOmikuji = () => {
    if (isDrawing) return;
    
    setIsDrawing(true);
    setShowResult(false);
    setResult(null);
    setShowSticks(true);
    setAnimationPhase('rotating');
    
    setTimeout(() => {
      setAnimationPhase('revealing');
      
      setTimeout(() => {
        setIsDrawing(false);
        setAnimationPhase('revealing');
        
        const dataArray = dict?.omikujiResultsData || omikujiResults;
        const randomIndex = Math.floor(Math.random() * dataArray.length);
        const drawnData = dataArray[randomIndex];
        const drawnStyle = omikujiStyles[randomIndex % omikujiStyles.length];
        
        setResult({
          ...drawnData,
          color: drawnStyle.color,
          icon: drawnStyle.icon
        });
        setShowResult(true);
      }, 1500);
    }, 800);
  };

  const resetDraw = () => {
    setShowResult(false);
    setResult(null);
    setShowSticks(false);
    setAnimationPhase('idle');
  };

  return (
    <>
      {/* 悬浮小挂件：关闭后仍可在右下角重新唤起 */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 shadow-xl border border-teal-100 hover:scale-105 transition-all text-slate-800 text-sm font-semibold backdrop-blur-md"
          title={dict?.omikujiTitle || '行前抽签'}
        >
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span>{dict?.omikujiTitle || '行前抽签'}</span>
        </button>
      )}

      {/* 弹窗遮罩与卡片 */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/50 backdrop-blur-sm transition-all duration-300 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-teal-100/80 max-h-[90vh] flex flex-col transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 关闭按钮 */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-30 w-9 h-9 flex items-center justify-center rounded-full bg-slate-100/80 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 抽签主内容 */}
            {!showResult ? (
              <div className="grid md:grid-cols-5 flex-1">
                {/* 左侧文字区 */}
                <div className="md:col-span-2 p-8 flex flex-col justify-center bg-white">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center mb-5 text-primary">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                    {dict?.omikujiTitle || '行前抽签'}
                  </h3>
                  <p className="text-sm text-gray-500 font-light mt-3 leading-relaxed">
                    {dict?.omikujiDesc || '轻互动，不抢主线 CTA'}
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-xs text-gray-400">
                    <span>☆ {dict?.omikujiLegend?.[0] || '大吉'}</span>
                    <span>☆ {dict?.omikujiLegend?.[1] || '中吉'}</span>
                    <span>☆ {dict?.omikujiLegend?.[2] || '小吉'}</span>
                  </div>
                </div>

                {/* 右侧抽签互动区 */}
                <div className="md:col-span-3 bg-gradient-to-br from-teal-50/70 via-cyan-50/50 to-white p-8 border-t md:border-t-0 md:border-l border-teal-100/60 flex flex-col items-center justify-center relative">
                  <div className="relative mx-auto w-24 h-36 mb-4">
                    <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 w-14 h-20 bg-gradient-to-b from-[#b46b48] to-[#925032] rounded-t-lg shadow-inner z-10 transition-transform duration-1000 ${
                      animationPhase === 'rotating' && isDrawing ? 'animate-spin' : ''
                    }`}>
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-black/20 rounded-full"></div>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-black/20 rounded-full"></div>
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-10 h-0.5 bg-black/20 rounded-full"></div>
                    </div>
                    
                    <div className={`absolute top-12 left-1/2 transform -translate-x-1/2 w-1.5 h-14 bg-red-500 rounded-full shadow-sm z-0 transition-all duration-500 ${
                      showSticks && animationPhase === 'revealing' 
                        ? 'translate-y-8 opacity-100' 
                        : showSticks && animationPhase === 'retracting'
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-0 opacity-0'
                    }`}></div>
                    
                    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-black/5 rounded-full blur-sm"></div>
                  </div>

                  <p className="text-gray-600 mb-6 text-sm font-medium text-center">
                    {dict?.omikujiInstruction || '点击下方按钮，抽取属于您的旅途运势'}
                  </p>

                  <button
                    onClick={drawOmikuji}
                    disabled={isDrawing}
                    className={`w-full sm:w-auto px-8 py-3.5 font-bold text-base rounded-xl transition-all duration-300 shadow-md ${
                      isDrawing
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'btn-primary text-white hover:shadow-lg hover:-translate-y-0.5'
                    }`}
                  >
                    {isDrawing ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2.5"></div>
                        {dict?.omikujiDrawing || '占卜中...'}
                      </div>
                    ) : (
                      dict?.omikujiDraw || '开始抽签'
                    )}
                  </button>
                </div>
              </div>
            ) : (
              /* 抽签结果展示区 */
              result && (
                <div className="p-6 sm:p-8 overflow-y-auto max-h-[80vh]">
                  <div className="text-center pt-2">
                    <div className={`w-14 h-14 mx-auto bg-gradient-to-b ${result.color} rounded-2xl flex items-center justify-center mb-3 shadow-md transform -rotate-3 text-white`}>
                      {result.icon}
                    </div>
                    <h4 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${result.color} bg-clip-text text-transparent`}>
                      {result.type}
                    </h4>
                    <p className="text-lg text-gray-800 font-medium">{result.message}</p>
                    
                    <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium">
                      <span className={`bg-gradient-to-r ${result.color} bg-clip-text text-transparent`}>
                        {result.advice}
                      </span>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4 mt-6 text-left">
                      <div className="bg-teal-50/50 p-4 rounded-xl border border-teal-100/50">
                        <h5 className="font-bold text-gray-900 mb-2 flex items-center text-sm">
                          <span className="w-6 h-6 rounded-full bg-teal-100 text-primary flex items-center justify-center mr-2 text-xs font-bold">
                            {dict?.omikujiGood || '吉'}
                          </span>
                          {dict?.omikujiSuggestions || '建议事项'}
                        </h5>
                        <ul className="space-y-2 text-xs text-gray-700">
                          {result.suggestions.map((suggestion, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-primary mr-1.5">•</span>
                              <span>{suggestion}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-orange-50/50 p-4 rounded-xl border border-orange-100/50">
                        <h5 className="font-bold text-gray-900 mb-2 flex items-center text-sm">
                          <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mr-2 text-xs font-bold">
                            {dict?.omikujiBad || '忌'}
                          </span>
                          {dict?.omikujiAvoid || '避免事项'}
                        </h5>
                        <ul className="space-y-2 text-xs text-gray-700">
                          {result.avoid.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-orange-500 mr-1.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-3 pt-2">
                      <button
                        onClick={resetDraw}
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
                      >
                        <RotateCcw className="w-4 h-4" />
                        再抽一次
                      </button>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="px-6 py-2.5 rounded-xl btn-primary text-sm font-semibold text-white transition shadow"
                      >
                        完成
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}

