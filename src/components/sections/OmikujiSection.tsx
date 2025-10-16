'use client';

import { useState } from 'react';
import { Sparkles, Zap, Star, Heart, AlertTriangle } from 'lucide-react';

interface OmikujiResult {
  type: '大吉' | '中吉' | '小吉' | '吉' | '凶';
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
    color: 'from-red-500 via-pink-500 to-purple-600',
    icon: <Sparkles className="w-8 h-8" />,
    advice: '大胆探索，尝试新体验，好运连连！',
    suggestions: [
      '尝试当地特色美食',
      '参观传统神社和寺庙',
      '体验温泉文化',
      '购买纪念品和特产'
    ],
    avoid: [
      '过度消费',
      '忽视安全规则',
      '错过预订时间',
      '忽视当地文化'
    ]
  },
  {
    type: '中吉',
    message: '旅途顺利，会有不错的收获！',
    color: 'from-orange-500 via-amber-500 to-yellow-500',
    icon: <Star className="w-8 h-8" />,
    advice: '保持积极心态，享受每一刻！',
    suggestions: [
      '制定详细的行程计划',
      '学习基本日语问候语',
      '体验当地文化活动',
      '记录美好时光'
    ],
    avoid: [
      '匆忙赶路',
      '忽视当地习俗',
      '过度依赖手机导航',
      '忽视个人安全'
    ]
  },
  {
    type: '小吉',
    message: '平稳愉快的旅程在等待您！',
    color: 'from-green-500 via-emerald-500 to-teal-500',
    icon: <Heart className="w-8 h-8" />,
    advice: '细心规划，稳中求进！',
    suggestions: [
      '提前预订住宿和交通',
      '准备应急联系方式',
      '了解当地天气情况',
      '保持开放心态'
    ],
    avoid: [
      '临时改变重要计划',
      '忽视健康管理',
      '与当地人发生冲突',
      '忽视天气变化'
    ]
  },
  {
    type: '吉',
    message: '旅途会有小惊喜等着您！',
    color: 'from-blue-500 via-cyan-500 to-indigo-500',
    icon: <Zap className="w-6 h-6" />,
    advice: '保持开放心态，留意身边的美好！',
    suggestions: [
      '关注细节和美好瞬间',
      '与当地人友好交流',
      '尝试新的交通方式',
      '保持感恩之心'
    ],
    avoid: [
      '抱怨小问题',
      '忽视安全提醒',
      '过度紧张',
      '忽视时间管理'
    ]
  },
  {
    type: '凶',
    message: '需要小心谨慎，但不必过分担心！',
    color: 'from-gray-500 via-slate-500 to-zinc-500',
    icon: <AlertTriangle className="w-6 h-6" />,
    advice: '提前做好充分准备，谨慎行事！',
    suggestions: [
      '购买旅行保险',
      '准备应急资金',
      '学习基本急救知识',
      '保持冷静和耐心'
    ],
    avoid: [
      '冒险行为',
      '忽视安全警告',
      '独自前往偏僻地区',
      '过度依赖他人'
    ]
  }
];

export default function OmikujiSection() {
  const [isDrawing, setIsDrawing] = useState(false);
  const [result, setResult] = useState<OmikujiResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showSticks, setShowSticks] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'rotating' | 'revealing' | 'retracting'>('idle');

  const drawOmikuji = () => {
    if (isDrawing) return;
    
    setIsDrawing(true);
    setShowResult(false);
    setResult(null);
    setShowSticks(true);
    
    // 开始动画 - 只执行一次
    setAnimationPhase('rotating');
    
    // 竹筒旋转阶段 (1秒)
    setTimeout(() => {
      setAnimationPhase('revealing');
      
      // 签露出后保持在revealing状态，不再缩回
      // 2秒后显示结果
      setTimeout(() => {
        setIsDrawing(false);
        setAnimationPhase('revealing'); // 保持签在出来的状态
        
        // 显示结果
        const randomIndex = Math.floor(Math.random() * omikujiResults.length);
        const drawnResult = omikujiResults[randomIndex];
        setResult(drawnResult);
        setShowResult(true);
      }, 2000);
    }, 1000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* 赛博朋克背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-none blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-none blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-500/10 rounded-none blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-400 text-cyan-400 text-sm font-mono tracking-wider">
              [OMIKUJI FORTUNE]
            </span>
          </div>
          <h2 className="text-4xl font-bold cyber-text text-cyan-400 mb-4">
          赛博抽签占卜
          </h2>
          <p className="text-gray-400 font-mono text-sm tracking-wider">
          让AI为您预测日本之旅的运势，抽一支数字签文，看看旅途的兆头如何。结合传统占卜文化与现代科技，为您带来独特的旅行体验！
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* 抽签盒 */}
          <div className="relative mb-8">
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm p-8 border border-purple-500/30 shadow-2xl">
              <div className="text-center">
                <div className="mb-8">
                  {/* 竹筒容器 - 向上移动 */}
                  <div className="relative mx-auto w-24 h-40 mb-4">
                    {/* 竹筒主体 - 向上移动 */}
                    <div className={`absolute top-5 left-1/2 transform -translate-x-1/2 w-16 h-24 bg-gradient-to-b from-amber-800 to-amber-600 rounded-t-2xl border-2 border-amber-700 shadow-lg z-10 transition-transform duration-1000 ${
                      animationPhase === 'rotating' && isDrawing ? 'animate-spin' : ''
                    }`}>
                      {/* 竹筒纹理 */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-amber-500 rounded-full"></div>
                      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-amber-500 rounded-full"></div>
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-amber-500 rounded-full"></div>
                      <div className="absolute bottom-11 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-amber-500 rounded-full"></div>
                      <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-amber-500 rounded-full"></div>
                      <div className="absolute bottom-17 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-amber-500 rounded-full"></div>
                    </div>
                    
                    {/* 从竹筒内部伸出的签 - 一半被竹筒遮住 */}
                    <div className={`absolute top-15 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-red-500 to-red-600 rounded-full shadow-lg z-0 transition-all duration-500 ${
                      showSticks && animationPhase === 'revealing' 
                        ? 'translate-y-12 opacity-100' 
                        : showSticks && animationPhase === 'retracting'
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-0 opacity-0'
                    }`}>
                      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-red-300 rounded-full"></div>
                    </div>
                    
                    {/* 竹筒底部阴影 - 调整位置 */}
                    <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black/20 rounded-full blur-sm"></div>
                  </div>
                  
                  <p className="text-gray-300">这是基于AI算法的娱乐性占卜，结合了日本传统文化元素和现代科技。
                  抽签结果仅供参考，真正的旅途体验还需要您亲自去感受和创造！点击下方按钮，让AI为您抽取旅途运势</p>
                </div>
                <button
                  onClick={drawOmikuji}
                  disabled={isDrawing}
                  className={`px-8 py-4 font-bold text-lg transition-all duration-300 transform ${
                    isDrawing
                      ? 'bg-gradient-to-r from-gray-500 to-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 hover:scale-105 shadow-lg shadow-purple-500/30 hover:shadow-xl'
                  } text-white`}
                >
                  {isDrawing ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      AI占卜中...
                    </div>
                  ) : (
                    '开始抽签'
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* 抽签结果 */}
          {showResult && result && (
            <div className="animate-fadeIn">
              <div className="relative bg-gradient-to-b from-white to-red-50 rounded-2xl p-6 border-2 border-red-400 shadow-xl">
                {/* 神社签的装饰性顶部 */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-red-500 rounded-t-lg"></div>
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-14 h-2 bg-red-400 rounded-t-md"></div>
                
                <div className="text-center pt-4">
                  {/* 神社签的标题区域 */}
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-b from-red-600 to-red-700 rounded-full flex items-center justify-center mb-3 shadow-lg border-2 border-red-300">
                      <div className="text-white text-2xl">
                        {result.icon}
                      </div>
                    </div>
                    <h4 className="text-3xl font-bold mb-2 text-red-700 tracking-wider">{result.type}</h4>
                    <p className="text-lg mb-4 text-gray-800 font-medium">{result.message}</p>
                  </div>
                  
                  {/* 神社签的传统分割线 */}
                  <div className="relative mb-6">
                    <div className="w-full h-0.5 bg-red-400"></div>
                  </div>
                  
                  {/* 神社签的吉利话区域 */}
                  <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-none p-4 border border-red-200 mb-6">
                    <p className="text-base font-medium text-red-800 leading-relaxed">{result.advice}</p>
                  </div>
                  
                  {/* 建议事项 */}
                  <div className="mb-6">
                    <h5 className="text-lg font-bold text-red-700 mb-3 text-center">✨ 建议事项</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {result.suggestions.map((suggestion, index) => (
                        <div key={index} className="bg-green-50 border border-green-200 rounded-none p-3 text-sm text-green-800">
                          <span className="font-medium">•</span> {suggestion}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* 避免事项 */}
                  <div className="mb-6">
                    <h5 className="text-lg font-bold text-red-700 mb-3 text-center">⚠️ 避免事项</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {result.avoid.map((item, index) => (
                        <div key={index} className="bg-orange-50 border border-orange-200 rounded-none p-3 text-sm text-orange-800">
                          <span className="font-medium">•</span> {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* 神社签的底部装饰 */}
                  <div className="mt-4 flex justify-center space-x-1">
                    <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          )}


        </div>
      </div>
    </section>
  );
}
