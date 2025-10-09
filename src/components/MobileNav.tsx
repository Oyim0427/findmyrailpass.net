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
    <div className="md:hidden relative z-[100]">
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-lg text-cyan-400 hover:bg-cyan-400/10 transition-colors border border-cyan-400/30 hover:border-cyan-400/60 relative z-[100]"
        style={{zIndex: 100}}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-sm" onClick={toggleMenu} style={{zIndex: 99999}}>
          <div className="fixed right-0 top-0 h-full w-80 bg-gray-900 border-l border-cyan-400/30 shadow-2xl shadow-cyan-400/20" onClick={(e) => e.stopPropagation()} style={{zIndex: 99999}}>
            <div className="p-6">
              {/* Close button */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-lg text-cyan-400 hover:bg-cyan-400/10 transition-colors border border-cyan-400/30 hover:border-cyan-400/60"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="space-y-4">
                <Link
                  href="/"
                  className="block py-3 px-4 text-lg font-medium text-white hover:bg-cyan-400/10 hover:text-cyan-400 rounded-lg transition-colors border border-transparent hover:border-cyan-400/30 font-orbitron"
                  onClick={toggleMenu}
                >
                  首页
                </Link>
                <Link
                  href="/passlist"
                  className="block py-3 px-4 text-lg font-medium text-white hover:bg-cyan-400/10 hover:text-cyan-400 rounded-lg transition-colors border border-transparent hover:border-cyan-400/30 font-orbitron"
                  onClick={toggleMenu}
                >
                  全部周游券
                </Link>
                <Link
                  href="/blog"
                  className="block py-3 px-4 text-lg font-medium text-white hover:bg-cyan-400/10 hover:text-cyan-400 rounded-lg transition-colors border border-transparent hover:border-cyan-400/30 font-orbitron"
                  onClick={toggleMenu}
                >
                  用户故事
                </Link>
                <Link
                  href="/tarot"
                  className="block py-3 px-4 text-lg font-medium text-white hover:bg-cyan-400/10 hover:text-cyan-400 rounded-lg transition-colors border border-transparent hover:border-cyan-400/30 font-orbitron"
                  onClick={toggleMenu}
                >
                  路线塔罗占卜
                </Link>
                <Link
                  href="/help"
                  className="block py-3 px-4 text-lg font-medium text-white hover:bg-cyan-400/10 hover:text-cyan-400 rounded-lg transition-colors border border-transparent hover:border-cyan-400/30 font-orbitron"
                  onClick={toggleMenu}
                >
                  帮助中心
                </Link>
              </nav>

              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-cyan-400/30">
                <button className="w-full cyber-button py-3 px-4 rounded font-semibold transition-all duration-200">
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
