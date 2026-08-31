'use client';

import { MapPin, Map as MapIcon } from "lucide-react";
import Link from "next/link";

export default function MapSection({ dict }: { dict?: any }) {


  return (
    <section id="map" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-2xl mb-6 shadow-sm">
            <MapIcon className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            {dict?.mapTitle || '周游券地图'}
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            可视化查看各周游券的覆盖范围，点击对应地区选择适合您行程的周游券
          </p>
        </div>

        {/* Map Area */}
        <div className="max-w-5xl mx-auto">
          {/* Map Visualization */}
          <div className="relative glass-card p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { id: '北海道', name: '北海道', img: 'https://images.unsplash.com/photo-1580495612201-64e03b0d463d?q=80&w=600&auto=format&fit=crop' },
                { id: '东北', name: '东北', img: 'https://images.unsplash.com/photo-1542640244-7e672d6cb466?q=80&w=600&auto=format&fit=crop' },
                { id: '关东', name: '关东', img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=600&auto=format&fit=crop' },
                { id: '中部', name: '中部', img: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=600&auto=format&fit=crop' },
                { id: '关西', name: '关西', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop' },
                { id: '中国', name: '中国', img: 'https://images.unsplash.com/photo-1524413840845-3802865d45ef?q=80&w=600&auto=format&fit=crop' },
                { id: '四国', name: '四国', img: 'https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?q=80&w=600&auto=format&fit=crop' },
                { id: '九州', name: '九州', img: 'https://images.unsplash.com/photo-1534433139360-6b6070650c82?q=80&w=600&auto=format&fit=crop' }
              ].map((region) => (
                <Link 
                  key={region.id} 
                  href={`/passlist?region=${region.name}`}
                  className="group relative h-36 sm:h-44 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${region.img})` }}
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 transition-opacity duration-300 group-hover:opacity-90" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-5">
                    <MapPin className="w-6 h-6 text-white mb-2 opacity-90 group-hover:-translate-y-1 transition-transform duration-300 drop-shadow-md" />
                    <div className="text-lg sm:text-xl font-bold text-white tracking-widest drop-shadow-md">{region.name}</div>
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
