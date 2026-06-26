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
        <div className="max-w-4xl mx-auto">
          {/* Map Visualization */}
          <div className="relative glass-card p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <Link href="/passlist?region=北海道" className="h-16 bg-orange-50 rounded-xl flex items-center justify-center hover:bg-orange-100 hover:shadow-md transition-all duration-300 cursor-pointer group border border-orange-100">
                <div className="text-center">
                  <MapPin className="w-5 h-5 text-orange-500 mx-auto mb-1 group-hover:-translate-y-1 transition-transform" />
                  <div className="text-sm font-bold text-orange-700">北海道</div>
                </div>
              </Link>
              
              <Link href="/passlist?region=东北" className="h-16 bg-purple-50 rounded-xl flex items-center justify-center hover:bg-purple-100 hover:shadow-md transition-all duration-300 cursor-pointer group border border-purple-100">
                <div className="text-center">
                  <MapPin className="w-5 h-5 text-purple-500 mx-auto mb-1 group-hover:-translate-y-1 transition-transform" />
                  <div className="text-sm font-bold text-purple-700">东北</div>
                </div>
              </Link>
              
              <Link href="/passlist?region=关东" className="h-16 bg-blue-50 rounded-xl flex items-center justify-center hover:bg-blue-100 hover:shadow-md transition-all duration-300 cursor-pointer group border border-blue-100">
                <div className="text-center">
                  <MapPin className="w-5 h-5 text-blue-500 mx-auto mb-1 group-hover:-translate-y-1 transition-transform" />
                  <div className="text-sm font-bold text-blue-700">关东</div>
                </div>
              </Link>
              
              <Link href="/passlist?region=中部" className="h-16 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer group border border-gray-200">
                <div className="text-center">
                  <MapPin className="w-5 h-5 text-gray-500 mx-auto mb-1 group-hover:-translate-y-1 transition-transform" />
                  <div className="text-sm font-bold text-gray-700">中部</div>
                </div>
              </Link>
              
              <Link href="/passlist?region=关西" className="h-16 bg-teal-50 rounded-xl flex items-center justify-center hover:bg-teal-100 hover:shadow-md transition-all duration-300 cursor-pointer group border border-teal-100">
                <div className="text-center">
                  <MapPin className="w-5 h-5 text-teal-500 mx-auto mb-1 group-hover:-translate-y-1 transition-transform" />
                  <div className="text-sm font-bold text-teal-700">关西</div>
                </div>
              </Link>

              <Link href="/passlist?region=中国" className="h-16 bg-amber-50 rounded-xl flex items-center justify-center hover:bg-amber-100 hover:shadow-md transition-all duration-300 cursor-pointer group border border-amber-100">
                <div className="text-center">
                  <MapPin className="w-5 h-5 text-amber-500 mx-auto mb-1 group-hover:-translate-y-1 transition-transform" />
                  <div className="text-sm font-bold text-amber-700">中国</div>
                </div>
              </Link>
              
              <Link href="/passlist?region=四国" className="h-16 bg-indigo-50 rounded-xl flex items-center justify-center hover:bg-indigo-100 hover:shadow-md transition-all duration-300 cursor-pointer group border border-indigo-100">
                <div className="text-center">
                  <MapPin className="w-5 h-5 text-indigo-500 mx-auto mb-1 group-hover:-translate-y-1 transition-transform" />
                  <div className="text-sm font-bold text-indigo-700">四国</div>
                </div>
              </Link>
              
              <Link href="/passlist?region=九州" className="h-16 bg-yellow-50 rounded-xl flex items-center justify-center hover:bg-yellow-100 hover:shadow-md transition-all duration-300 cursor-pointer group border border-yellow-100">
                <div className="text-center">
                  <MapPin className="w-5 h-5 text-yellow-500 mx-auto mb-1 group-hover:-translate-y-1 transition-transform" />
                  <div className="text-sm font-bold text-yellow-700">九州</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
