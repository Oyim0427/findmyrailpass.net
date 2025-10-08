'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={toggleMenu}>
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              {/* Close button */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="space-y-4">
                <Link
                  href="/"
                  className="block py-3 px-4 text-lg font-medium text-gray-900 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                  onClick={toggleMenu}
                >
                  首页
                </Link>
                <Link
                  href="/passes.tsx"
                  className="block py-3 px-4 text-lg font-medium text-gray-900 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                  onClick={toggleMenu}
                >
                  全部周游券
                </Link>
                <Link
                  href="/blog.tsx"
                  className="block py-3 px-4 text-lg font-medium text-gray-900 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                  onClick={toggleMenu}
                >
                  用户故事
                </Link>
                <Link
                  href="/tarot.tsx"
                  className="block py-3 px-4 text-lg font-medium text-gray-900 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                  onClick={toggleMenu}
                >
                  路线塔罗占卜
                </Link>
                <Link
                  href="/help.tsx"
                  className="block py-3 px-4 text-lg font-medium text-gray-900 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                  onClick={toggleMenu}
                >
                  帮助中心
                </Link>
              </nav>

              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  开始规划
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
