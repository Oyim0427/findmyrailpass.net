'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const labels = {
  zh: { home: '首页', passes: '周游券与地方券', guides: '官方来源攻略', products: '数字产品', help: '帮助中心', start: '开始比较', open: '打开菜单', close: '关闭菜单' },
  en: { home: 'Home', passes: 'Passes & Directory', guides: 'Official-source guides', products: 'Digital products', help: 'Help center', start: 'Start comparing', open: 'Open menu', close: 'Close menu' },
  ja: { home: 'ホーム', passes: '周遊券・地方きっぷ', guides: '公式情報ガイド', products: 'デジタル商品', help: 'ヘルプ', start: '比較を始める', open: 'メニューを開く', close: 'メニューを閉じる' },
};

export default function MobileNav({ lang = 'zh' }: { lang?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const t = labels[lang as keyof typeof labels] || labels.zh;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden relative z-[100]">
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        aria-label={isOpen ? t.close : t.open}
        aria-expanded={isOpen}
        className="relative z-[100] rounded-lg border border-emerald-200 p-2 text-primary transition-colors hover:bg-primary/10"
        style={{zIndex: 100}}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[99999] bg-slate-950/45 backdrop-blur-sm" onClick={toggleMenu} style={{zIndex: 99999}}>
          <div className="fixed right-0 top-0 h-full w-80 border-l border-slate-200 bg-[#f7f6f2] shadow-2xl" onClick={(e) => e.stopPropagation()} style={{zIndex: 99999}}>
            <div className="p-6">
              {/* Close button */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={toggleMenu}
                  aria-label={t.close}
                  className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 transition-colors hover:border-primary"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="space-y-4">
                <Link
                  href={`/${lang}`}
                  className="block rounded-xl border border-transparent px-4 py-3 text-lg font-semibold text-slate-800 transition-colors hover:border-emerald-200 hover:bg-white hover:text-primary"
                  onClick={toggleMenu}
                >
                  {t.home}
                </Link>
                <Link
                  href={`/${lang}/passlist`}
                  className="block rounded-xl border border-transparent px-4 py-3 text-lg font-semibold text-slate-800 transition-colors hover:border-emerald-200 hover:bg-white hover:text-primary"
                  onClick={toggleMenu}
                >
                  {t.passes}
                </Link>
                <Link
                  href={`/${lang}/blog`}
                  className="block rounded-xl border border-transparent px-4 py-3 text-lg font-semibold text-slate-800 transition-colors hover:border-emerald-200 hover:bg-white hover:text-primary"
                  onClick={toggleMenu}
                >
                  {t.guides}
                </Link>
                <Link
                  href={`/${lang}/products`}
                  className="block rounded-xl border border-transparent px-4 py-3 text-lg font-semibold text-slate-800 transition-colors hover:border-emerald-200 hover:bg-white hover:text-primary"
                  onClick={toggleMenu}
                >
                  {t.products}
                </Link>
                <Link
                  href={`/${lang}/help`}
                  className="block rounded-xl border border-transparent px-4 py-3 text-lg font-semibold text-slate-800 transition-colors hover:border-emerald-200 hover:bg-white hover:text-primary"
                  onClick={toggleMenu}
                >
                  {t.help}
                </Link>
              </nav>

              {/* CTA Button */}
              <div className="mt-8 border-t border-slate-200 pt-6">
                <Link href={`/${lang}#calculator`} onClick={toggleMenu} className="block w-full rounded-xl bg-[#c2410c] px-4 py-3 text-center font-bold text-white transition-colors hover:bg-[#9a3412]">
                  {t.start}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
