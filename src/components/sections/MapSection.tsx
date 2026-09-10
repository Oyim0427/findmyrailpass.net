'use client';

import { MapPin, Map as MapIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from '@/i18n/dictionaries';

export default function MapSection({ dict, lang = 'zh' }: { dict?: Dictionary, lang?: string }) {
  const locale = lang === 'en' || lang === 'ja' ? lang : 'zh';
  const description = {
    zh: '按地区查看周游券覆盖范围，快速找到适合行程的票券。',
    en: 'Browse rail passes by region and quickly find options that fit your itinerary.',
    ja: '地域ごとに周遊券を探し、旅程に合うきっぷをすばやく見つけられます。',
  }[locale];
  const regionNames: Record<string, Record<'zh' | 'en' | 'ja', string>> = {
    '北海道': { zh: '北海道', en: 'Hokkaido', ja: '北海道' },
    '東北': { zh: '东北', en: 'Tohoku', ja: '東北' },
    '関東': { zh: '关东', en: 'Kanto', ja: '関東' },
    '北信越': { zh: '北信越', en: 'Hokushinetsu', ja: '北信越' },
    '近畿': { zh: '关西', en: 'Kansai', ja: '関西' },
    '中国': { zh: '中国地区', en: 'Chugoku', ja: '中国' },
    '四国': { zh: '四国', en: 'Shikoku', ja: '四国' },
    '九州': { zh: '九州', en: 'Kyushu', ja: '九州' },
  };

  return (
    <section id="map" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6 shadow-sm">
            <MapIcon className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            {dict?.mapTitle || '周游券地图'}
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Map Area */}
        <div className="max-w-5xl mx-auto">
          {/* Map Visualization */}
          <div className="relative glass-card p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { id: '北海道', image: '/images/regions/hokkaido.jpg' },
                { id: '東北', image: '/images/regions/tohoku.jpg' },
                { id: '関東', image: '/images/regions/kanto.jpg' },
                { id: '北信越', image: '/images/regions/hokushinetsu.jpg' },
                { id: '近畿', image: '/images/regions/kansai.jpg' },
                { id: '中国', image: '/images/regions/chugoku.jpg' },
                { id: '四国', image: '/images/regions/shikoku.jpg' },
                { id: '九州', image: '/images/regions/kyushu.jpg' }
              ].map((region) => (
                <Link 
                  key={region.id} 
                  href={`/${lang}/passlist?region=${region.id}`}
                  className="group relative h-36 sm:h-44 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Background Image */}
                  <Image 
                    src={region.image} 
                    alt={regionNames[region.id][locale]}
                    fill 
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110" 
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 transition-opacity duration-300 group-hover:opacity-90" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-5">
                    <MapPin className="w-6 h-6 text-white mb-2 opacity-90 group-hover:-translate-y-1 transition-transform duration-300 drop-shadow-md" />
                    <div className="text-lg sm:text-xl font-bold text-white tracking-widest drop-shadow-md">{regionNames[region.id][locale]}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
