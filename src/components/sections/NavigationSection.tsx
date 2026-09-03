'use client';

import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { Train, Globe } from "lucide-react";
import { usePathname } from "next/navigation";
import type { Dictionary } from '@/i18n/dictionaries';

export default function NavigationSection({ dict, lang }: { dict?: Dictionary, lang?: string }) {
  const pathname = usePathname();

  const switchLanguage = (newLang: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = newLang;
    return segments.join('/');
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href={`/${lang || 'zh'}`} className="text-2xl font-bold text-primary flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Train className="w-8 h-8" />
              <span className="tracking-tight">FindMyJR-Pass</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href={`/${lang || 'zh'}`} className="text-gray-600 hover:text-primary transition-colors font-medium relative group">
              {dict?.home || '首页'}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/100 transition-all group-hover:w-full"></span>
            </Link>
            <Link href={`/${lang || 'zh'}/passlist`} className="text-gray-600 hover:text-primary transition-colors font-medium relative group">
              {lang === 'en' ? 'All Passes' : lang === 'ja' ? 'すべてのパス' : '全部周游券'}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/100 transition-all group-hover:w-full"></span>
            </Link>
            <Link href={`/${lang || 'zh'}/blog`} className="text-gray-600 hover:text-primary transition-colors font-medium relative group">
              {lang === 'en' ? 'User Stories' : lang === 'ja' ? 'ユーザーの声' : '用户故事'}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/100 transition-all group-hover:w-full"></span>
            </Link>
            <Link href={`/${lang || 'zh'}/help`} className="text-gray-600 hover:text-primary transition-colors font-medium relative group">
              {lang === 'en' ? 'Help Center' : lang === 'ja' ? 'ヘルプセンター' : '帮助中心'}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/100 transition-all group-hover:w-full"></span>
            </Link>
            
            <div className="relative group flex items-center cursor-pointer text-gray-500 hover:text-primary">
              <Globe className="w-5 h-5 mr-1" />
              <span className="text-sm font-medium uppercase">{lang || 'zh'}</span>
              
              <div className="absolute top-full right-0 mt-2 w-24 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                <Link href={switchLanguage('zh')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary text-center">中文</Link>
                <Link href={switchLanguage('en')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary text-center">English</Link>
                <Link href={switchLanguage('ja')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary text-center">日本語</Link>
              </div>
            </div>
            
            <Link href={`/${lang || 'zh'}#calculator`} className="btn-primary px-6 py-2 text-sm">
              {dict?.calcTitle ? '开始查询' : '开始查询'}
            </Link>
          </div>
          
          <div className="flex items-center md:hidden">
            <MobileNav lang={lang || 'zh'} />
          </div>
        </div>
      </div>
    </nav>
  );
}
