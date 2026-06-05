'use client';

import { useState } from 'react';
import { Sparkles, Zap, Star, Heart, AlertTriangle } from 'lucide-react';

interface OmikujiSectionProps {
  dict?: any;
}

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
    color: 'from-rose-400 to-red-500',
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
    color: 'from-orange-400 to-amber-500',
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
    color: 'from-teal-400 to-emerald-500',
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
    color: 'from-blue-400 to-indigo-500',
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
    color: 'from-slate-400 to-gray-500',
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

export default function OmikujiSection({ dict }: OmikujiSectionProps) {
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
    
    setAnimationPhase('rotating');
    
    setTimeout(() => {
      setAnimationPhase('revealing');
      
      setTimeout(() => {
        setIsDrawing(false);
        setAnimationPhase('revealing');
        
        const randomIndex = Math.floor(Math.random() * omikujiResults.length);
        const drawnResult = omikujiResults[randomIndex];
        setResult(drawnResult);
        setShowResult(true);
      }, 2000);
    }, 1000);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-rose-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-rose-50 rounded-2xl mb-6 shadow-sm">
            <Sparkles className="w-8 h-8 text-rose-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {dict?.omikujiTitle || '行前抽签'}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
            {dict?.omikujiDesc || '让AI为您预测日本之旅的运势，抽一支数字签文，看看旅途的兆头如何。'}
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="relative mb-8">
            <div className="glass-card p-10 text-center">
              <div className="mb-8">
                <div className="relative mx-auto w-24 h-40 mb-6">
                  <div className={`absolute top-5 left-1/2 transform -translate-x-1/2 w-16 h-24 bg-gradient-to-b from-amber-600 to-amber-700 rounded-t-xl shadow-inner z-10 transition-transform duration-1000 ${
                    animationPhase === 'rotating' && isDrawing ? 'animate-spin' : ''
                  }`}>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-amber-800/30 rounded-full"></div>
                    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-amber-800/30 rounded-full"></div>
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-amber-800/30 rounded-full"></div>
                  </div>
                  
                  <div className={`absolute top-15 left-1/2 transform -translate-x-1/2 w-1.5 h-16 bg-red-400 rounded-full shadow-sm z-0 transition-all duration-500 ${
                    showSticks && animationPhase === 'revealing' 
                      ? 'translate-y-12 opacity-100' 
                      : showSticks && animationPhase === 'retracting'
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-0 opacity-0'
                  }`}></div>
                  
                  <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black/5 rounded-full blur-sm"></div>
                </div>
                
                <p className="text-gray-600 mb-8">
                  点击下方按钮，抽取属于您的旅途运势
                </p>
              </div>
              <button
                onClick={drawOmikuji}
                disabled={isDrawing}
                className={`px-8 py-4 font-semibold text-lg rounded-full transition-all duration-300 w-full sm:w-auto ${
                  isDrawing
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-rose-500 hover:bg-rose-600 text-white shadow-lg hover:shadow-rose-500/30 hover:-translate-y-1'
                }`}
              >
                {isDrawing ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-3"></div>
                    占卜中...
                  </div>
                ) : (
                  '开始抽签'
                )}
              </button>
            </div>
          </div>

          {showResult && result && (
            <div className="animate-fadeIn mt-8">
              <div className="bg-white rounded-3xl p-8 border border-rose-100 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-rose-400 to-red-500"></div>
                
                <div className="text-center pt-4">
                  <div className="mb-6">
                    <div className={`w-16 h-16 mx-auto bg-gradient-to-b ${result.color} rounded-2xl flex items-center justify-center mb-4 shadow-md transform -rotate-3`}>
                      <div className="text-white">
                        {result.icon}
                      </div>
                    </div>
                    <h4 className={`text-4xl font-bold mb-3 bg-gradient-to-r ${result.color} bg-clip-text text-transparent`}>{result.type}</h4>
                    <p className="text-xl text-gray-800 font-medium">{result.message}</p>
                  </div>
                  
                  <div className="w-16 h-1 bg-gray-100 mx-auto rounded-full mb-8"></div>
                  
                  <div className="bg-rose-50 rounded-2xl p-6 mb-8 text-rose-800 font-medium text-lg border border-rose-100">
                    {result.advice}
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6 text-left">
                    <div>
                      <h5 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                        <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3 text-sm">吉</span>
                        建议事项
                      </h5>
                      <ul className="space-y-3">
                        {result.suggestions.map((suggestion, index) => (
                          <li key={index} className="flex items-start text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 mr-3 shrink-0"></div>
                            <span className="leading-relaxed">{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-bold text-gray-900 mb-4 flex items-center text-lg">
                        <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mr-3 text-sm">忌</span>
                        避免事项
                      </h5>
                      <ul className="space-y-3">
                        {result.avoid.map((item, index) => (
                          <li key={index} className="flex items-start text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 mr-3 shrink-0"></div>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
