'use client';

import Link from "next/link";
import { Train } from "lucide-react";

export default function FooterSection({ dict, lang }: { dict?: any, lang?: string }) {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link href={`/${lang || 'zh'}`} className="text-2xl font-bold text-teal-600 mb-4 flex items-center space-x-2">
              <Train className="w-6 h-6" />
              <span>FindMyJRPass</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {dict?.heroSubtitle || '您的日本铁路通票专家，智能AI助您省钱又省心地畅游全日本。'}
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-teal-100 hover:text-teal-600 transition-colors cursor-pointer">
                in
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-teal-100 hover:text-teal-600 transition-colors cursor-pointer">
                tw
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Features</h3>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><Link href={`/${lang || 'zh'}#calculator`} className="hover:text-teal-600 transition-colors">{dict?.calcTitle || '周游券计算器'}</Link></li>
              <li><Link href={`/${lang || 'zh'}/passlist`} className="hover:text-teal-600 transition-colors">{dict?.viewAllPasses || '全部周游券'}</Link></li>
              <li><a href={`/${lang || 'zh'}#map`} className="hover:text-teal-600 transition-colors">{dict?.mapTitle || '地图查询'}</a></li>
              <li><a href={`/${lang || 'zh'}#passes`} className="hover:text-teal-600 transition-colors">{dict?.popularPasses || '热门推荐'}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Support</h3>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-teal-600 transition-colors">How to Use</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-teal-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Language</h3>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><Link href="/zh" className="hover:text-teal-600 transition-colors flex items-center"><span className={lang === 'zh' ? 'text-teal-600 font-semibold' : ''}>中文 (Chinese)</span></Link></li>
              <li><Link href="/en" className="hover:text-teal-600 transition-colors flex items-center"><span className={lang === 'en' ? 'text-teal-600 font-semibold' : ''}>English</span></Link></li>
              <li><Link href="/ja" className="hover:text-teal-600 transition-colors flex items-center"><span className={lang === 'ja' ? 'text-teal-600 font-semibold' : ''}>日本語 (Japanese)</span></Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} FindMyJRPass. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
