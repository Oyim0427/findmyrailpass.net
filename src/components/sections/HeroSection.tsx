'use client';

import { useState } from 'react';
import { ArrowRight, Calculator, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CITIES = ['东京', '大阪', '京都', '金泽', '广岛', '福冈', '熊本'];

interface RouteInfo {
  ticketCost: number;
  passKey: string;
  passPrice: number;
  coverageKey: string;
}

function getRouteInfo(from: string, to: string): RouteInfo {
  if (from === to) {
    return {
      ticketCost: 0,
      passKey: 'noPass',
      passPrice: 0,
      coverageKey: 'sameCity'
    };
  }

  const key = [from, to].sort().join('-');

  switch (key) {
    case '东京-大阪':
      return {
        ticketCost: 27640,
        passKey: 'jrPass',
        passPrice: 50000,
        coverageKey: 'tokyoOsaka'
      };
    case '东京-京都':
      return {
        ticketCost: 28340,
        passKey: 'jrPass',
        passPrice: 50000,
        coverageKey: 'tokyoKyoto'
      };
    case '东京-金泽':
      return {
        ticketCost: 28760,
        passKey: 'hokurikuArch',
        passPrice: 30000,
        coverageKey: 'tokyoKanazawa'
      };
    case '大阪-广岛':
      return {
        ticketCost: 21260,
        passKey: 'kansaiHiroshima',
        passPrice: 17000,
        coverageKey: 'osakaHiroshima'
      };
    case '熊本-福冈':
      return {
        ticketCost: 10460,
        passKey: 'northKyushu',
        passPrice: 14000,
        coverageKey: 'kumamotoFukuoka'
      };
    case '京都-大阪':
      return {
        ticketCost: 1120,
        passKey: 'regularTicket',
        passPrice: 0,
        coverageKey: 'kyotoOsaka'
      };
    case '大阪-金泽':
      return {
        ticketCost: 16000,
        passKey: 'kansaiHokuriku',
        passPrice: 19000,
        coverageKey: 'osakaKanazawa'
      };
    case '京都-金泽':
      return {
        ticketCost: 15000,
        passKey: 'kansaiHokuriku',
        passPrice: 19000,
        coverageKey: 'kyotoKanazawa'
      };
    case '东京-广岛':
      return {
        ticketCost: 38800,
        passKey: 'jrPass',
        passPrice: 50000,
        coverageKey: 'tokyoHiroshima'
      };
    case '东京-福冈':
      return {
        ticketCost: 45600,
        passKey: 'jrPass',
        passPrice: 50000,
        coverageKey: 'tokyoFukuoka'
      };
    case '广岛-福冈':
      return {
        ticketCost: 18000,
        passKey: 'hiroshimaYamaguchi',
        passPrice: 15000,
        coverageKey: 'hiroshimaFukuoka'
      };
    case '熊本-东京':
      return {
        ticketCost: 50000,
        passKey: 'jrPass',
        passPrice: 50000,
        coverageKey: 'kumamotoTokyo'
      };
    case '大阪-福冈':
      return {
        ticketCost: 31000,
        passKey: 'sanyoSanyin',
        passPrice: 23000,
        coverageKey: 'osakaFukuoka'
      };
    default:
      return {
        ticketCost: 25000,
        passKey: 'jrPass',
        passPrice: 50000,
        coverageKey: 'default'
      };
  }
}

export default function HeroSection({ dict }: { dict: any }) {
  const [fromCity, setFromCity] = useState('东京');
  const [toCity, setToCity] = useState('大阪');
  const [travelers, setTravelers] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const currentRoute = getRouteInfo(fromCity, toCity);
  const totalTicketCost = currentRoute.ticketCost * travelers;
  const totalPassPrice = currentRoute.passPrice * travelers;
  const savings = totalTicketCost - totalPassPrice;

  const recommendedPassName = dict?.quickCalc?.passes?.[currentRoute.passKey] || currentRoute.passKey;
  const coverageText = dict?.quickCalc?.coverage?.[currentRoute.coverageKey] || currentRoute.coverageKey;

  const handleQuickCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setShowResult(true);
    }, 600);
  };

  return (
    <section className="bg-mesh pt-28 pb-20 lg:pt-36 lg:pb-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Japan Rail Pass Assistant</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight whitespace-pre-line">
              {dict?.heroTitle || '发现最适合您的日本周游券'}
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-light">
              {dict?.heroSubtitle ? (
                dict.heroSubtitle.includes('<br>') ? (
                  dict.heroSubtitle.split('<br>').map((line: string, index: number, array: string[]) => (
                    <span key={index}>
                      {line}
                      {index < array.length - 1 && <br />}
                    </span>
                  ))
                ) : (
                  dict.heroSubtitle
                )
              ) : (
                '智能挑选省钱日本周游券，助您轻松无忧规划行程。'
              )}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href="#calculator" 
                className="btn-primary w-full sm:w-auto px-8 py-4 flex items-center justify-center text-lg shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300"
              >
                <span>{dict?.calcTitle || '大师周游券计算器'}</span>
                <Calculator className="ml-2 w-5 h-5 animate-bounce" />
              </a>
              
              <Link 
                href="/passlist" 
                className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-teal-500 text-teal-600 hover:bg-teal-50 font-semibold transition-colors flex items-center justify-center text-lg"
              >
                <span>{dict?.viewAllPasses || '查看所有周游券'}</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></div>
                <span>Data Updated</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                <span>AI Ready</span>
              </div>
            </div>
          </div>
          
          {/* Right Floating Elements / Simple Calculator */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
            <div className="glass-card p-6 sm:p-8 relative z-10 transition-all duration-300 shadow-xl border border-white/20 bg-white/70 backdrop-blur-md rounded-3xl">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-teal-100 text-teal-600 p-2.5 rounded-2xl shadow-sm">
                    <Calculator className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-0.5">
                      {dict?.quickCalc?.title || '简易周游券计算器'}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {dict?.quickCalc?.subtitle || '快速估算是否值得买券'}
                    </p>
                  </div>
                </div>
              </div>

              {!showResult ? (
                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-2">
                        {dict?.quickCalc?.from || '出发地'}
                      </label>
                      <select
                        value={fromCity}
                        onChange={(e) => setFromCity(e.target.value)}
                        className="w-full p-3.5 border border-gray-200 rounded-xl text-sm text-gray-800 bg-white shadow-inner focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                      >
                        {CITIES.map(city => (
                          <option key={city} value={city}>
                            {dict?.quickCalc?.cities?.[city] || city}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-2">
                        {dict?.quickCalc?.to || '目的地'}
                      </label>
                      <select
                        value={toCity}
                        onChange={(e) => setToCity(e.target.value)}
                        className="w-full p-3.5 border border-gray-200 rounded-xl text-sm text-gray-800 bg-white shadow-inner focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                      >
                        {CITIES.map(city => (
                          <option key={city} value={city}>
                            {dict?.quickCalc?.cities?.[city] || city}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-2">
                      {dict?.quickCalc?.travelerCount || '同行旅客人数'}
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setTravelers(num)}
                          className={`py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                            travelers === num
                              ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20 scale-105'
                              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {num}{dict?.quickCalc?.person || '人'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleQuickCalculate}
                    disabled={isCalculating}
                    className="w-full btn-primary py-4 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    {isCalculating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>{dict?.quickCalc?.calculating || '智能比对中...'}</span>
                      </>
                    ) : (
                      <>
                        <Calculator className="w-4 h-4" />
                        <span>{dict?.quickCalc?.startEstimate || '开始快速估算'}</span>
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-2.5 text-sm">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>
                        {dict?.quickCalc?.route || '路线'}: {dict?.quickCalc?.cities?.[fromCity] || fromCity} ⇆ {dict?.quickCalc?.cities?.[toCity] || toCity} ({dict?.quickCalc?.roundTrip || '往返'})
                      </span>
                      <span>
                        {dict?.quickCalc?.passengers || '人数'}: {travelers}{dict?.quickCalc?.person || '人'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200/50 pb-2">
                      <span className="text-gray-600">
                        {dict?.quickCalc?.regularTicket || '常规购票 (单买车票)'}:
                      </span>
                      <span className="font-bold text-gray-900">¥{totalTicketCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center pt-0.5">
                      <span className="text-gray-600">
                        {dict?.quickCalc?.recommendedPassLabel || '推荐周游券'} ({recommendedPassName}):
                      </span>
                      <span className="font-bold text-teal-600">¥{totalPassPrice.toLocaleString()}</span>
                    </div>
                  </div>

                  {savings > 0 ? (
                    <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-2xl p-4 text-xs space-y-1.5 shadow-sm">
                      <div className="font-bold text-emerald-950 flex items-center gap-1.5">
                        {dict?.quickCalc?.recommendPassTitle || '🎉 强烈推荐购买周游券！'}
                      </div>
                      <div className="text-emerald-800 font-medium">
                        {dict?.quickCalc?.recommendPassSave || '使用该通票，预计可节省'}{' '}
                        <span className="font-extrabold text-sm text-emerald-600">¥{savings.toLocaleString()}</span>
                        {dict?.quickCalc?.recommendPassSaveSuffix || '！'}
                      </div>
                      <p className="text-[10px] text-emerald-600/90 leading-relaxed mt-1">{coverageText}</p>
                    </div>
                  ) : (
                    <div className="bg-amber-50 border border-amber-100 text-amber-800 rounded-2xl p-4 text-xs space-y-1.5 shadow-sm">
                      <div className="font-bold text-amber-950 flex items-center gap-1.5">
                        {dict?.quickCalc?.avoidPassTitle || '⚠️ 建议直接购买单程车票'}
                      </div>
                      <div className="text-amber-800 font-medium">
                        {dict?.quickCalc?.avoidPassCost || '使用该通票反而需多花'}{' '}
                        <span className="font-bold text-red-500">¥{Math.abs(savings).toLocaleString()}</span>
                        {dict?.quickCalc?.avoidPassCostSuffix || '。'}
                      </div>
                      <p className="text-[10px] text-amber-700/90 leading-relaxed mt-1">{coverageText}</p>
                    </div>
                  )}

                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={() => setShowResult(false)}
                      className="flex-1 py-3 px-4 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 bg-white transition-all text-center"
                    >
                      {dict?.quickCalc?.reestimate || '重新估算'}
                    </button>
                    <a
                      href="#calculator"
                      className="flex-[1.5] btn-primary py-3 px-4 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-md shadow-teal-500/10 hover:shadow-lg"
                    >
                      <span>{dict?.quickCalc?.proCalcLink || '大师计算器定制'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            {/* Decorative background blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
