'use client';

import Link from "next/link";
import { Train } from "lucide-react";
import type { Dictionary } from '@/i18n/dictionaries';

export default function FooterSection({ dict, lang }: { dict?: Dictionary, lang?: string }) {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 md:col-span-3">
            <Link href={`/${lang || 'zh'}`} className="text-2xl font-bold text-teal-600 mb-4 flex items-center space-x-2">
              <Train className="w-6 h-6" />
              <span>FindMyRailPass</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {dict?.heroSubtitle || '基于铁路运营方一手信息，比较日本铁路周游券与普通车票。'}
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">产品与服务</h3>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><Link href={`/${lang || 'zh'}#calculator`} className="hover:text-teal-600 transition-colors">{dict?.calcTitle || '周游券计算器'}</Link></li>
              <li><Link href={`/${lang || 'zh'}/passlist`} className="hover:text-teal-600 transition-colors">{dict?.viewAllPasses || '全部周游券'}</Link></li>
              <li><a href={`/${lang || 'zh'}#map`} className="hover:text-teal-600 transition-colors">{dict?.mapTitle || '地图查询'}</a></li>
              <li><a href={`/${lang || 'zh'}#passes`} className="hover:text-teal-600 transition-colors">{dict?.popularPasses || '热门推荐'}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">关于</h3>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><Link href={`/${lang || 'zh'}/data-sources`} className="hover:text-teal-600 transition-colors">数据来源与更新方法</Link></li>
              <li><Link href={`/${lang || 'zh'}/disclosure`} className="hover:text-teal-600 transition-colors">编辑与推荐原则</Link></li>
              <li><Link href={`/${lang || 'zh'}/products`} className="hover:text-teal-600 transition-colors">数字产品</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">法律与政策</h3>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><Link href={`/${lang || 'zh'}/privacy`} className="hover:text-teal-600 transition-colors">隐私与 Cookie</Link></li>
              <li><Link href={`/${lang || 'zh'}/terms`} className="hover:text-teal-600 transition-colors">使用条款</Link></li>
              <li><Link href={`/${lang || 'zh'}/disclosure`} className="hover:text-teal-600 transition-colors">Affiliate 与广告披露</Link></li>
              <li><Link href={`/${lang || 'zh'}/commercial`} className="hover:text-teal-600 transition-colors">特定商取引法に基づく表記</Link></li>
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
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} FindMyRailPass. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
