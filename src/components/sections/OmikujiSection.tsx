'use client';

import { useState } from 'react';
import { Shuffle, Sparkles, Zap, Star, Heart, AlertTriangle } from 'lucide-react';

interface OmikujiResult {
  type: '大吉' | '中吉' | '小吉' | '吉' | '凶';
  message: string;
  color: string;
  icon: React.ReactNode;
  advice: string;
}

const omikujiResults: OmikujiResult[] = [
  {
    type: '大吉',
    message: '您的日本之旅将充满惊喜与美好！',
    color: 'from-red-500 via-pink-500 to-purple-600',
    icon: <Sparkles className="w-8 h-8" />,
    advice: '建议：大胆探索，尝试新体验，好运连连！'
  },
  {
    type: '中吉',
    message: '旅途顺利，会有不错的收获！',
    color: 'from-orange-500 via-amber-500 to-yellow-500',
    icon: <Star className="w-8 h-8" />,
    advice: '建议：保持积极心态，享受每一刻！'
  },
  {
    type: '小吉',
    message: '平稳愉快的旅程在等待您！',
    color: 'from-green-500 via-emerald-500 to-teal-500',
    icon: <Heart className="w-8 h-8" />,
    advice: '建议：细心规划，稳中求进！'
  },
  {
    type: '吉',
    message: '旅途会有小惊喜等着您！',
    color: 'from-blue-500 via-cyan-500 to-indigo-500',
    icon: <Zap className="w-6 h-6" />,
    advice: '建议：保持开放心态，留意身边的美好！'
  },
  {
    type: '凶',
    message: '需要小心谨慎，但不必过分担心！',
    color: 'from-gray-500 via-slate-500 to-zinc-500',
    icon: <AlertTriangle className="w-6 h-6" />,
    advice: '建议：提前做好充分准备，谨慎行事！'
  }
];

export default function OmikujiSection() {
  const [isDrawing, setIsDrawing] = useState(false);
  const [result, setResult] = useState<OmikujiResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const drawOmikuji = () => {
    if (isDrawing) return;
    
    setIsDrawing(true);
    setShowResult(false);
    setResult(null);

    // 模拟抽签过程
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * omikujiResults.length);
      const drawnResult = omikujiResults[randomIndex];
      setResult(drawnResult);
      setIsDrawing(false);
      setShowResult(true);
    }, 3000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* 赛博朋克背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              🔮 赛博抽签占卜
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            让AI为您预测日本之旅的运势，抽一支数字签文，看看旅途的兆头如何
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* 抽签盒 */}
          <div className="relative mb-8">
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30 shadow-2xl">
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30">
                    <Shuffle className={`w-10 h-10 text-white ${isDrawing ? 'animate-spin' : ''}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">数字签筒</h3>
                  <p className="text-gray-300">点击下方按钮，让AI为您抽取旅途运势</p>
                </div>

                <button
                  onClick={drawOmikuji}
                  disabled={isDrawing}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform ${
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
                    '🎯 开始抽签'
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* 抽签结果 */}
          {showResult && result && (
            <div className="animate-fadeIn">
              <div className={`bg-gradient-to-br ${result.color} rounded-3xl p-8 border border-white/20 shadow-2xl backdrop-blur-sm`}>
                <div className="text-center text-white">
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                      <div className="text-white">
                        {result.icon}
                      </div>
                    </div>
                    <h4 className="text-3xl font-bold mb-2">{result.type}</h4>
                    <p className="text-xl mb-4 opacity-90">{result.message}</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20">
                    <p className="text-lg font-medium">{result.advice}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 抽签说明 */}
          <div className="mt-8 text-center">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30">
              <h4 className="text-lg font-bold text-white mb-3">🔮 占卜说明</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                这是基于AI算法的娱乐性占卜，结合了日本传统文化元素和现代科技。
                抽签结果仅供参考，真正的旅途体验还需要您亲自去感受和创造！
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
