'use client';

import { ArrowRight } from "lucide-react";
import PassCard from "@/components/PassCard";
import { popularPasses } from "@/ts-data/all-passes";
import Link from "next/link";

export default function PassesSection() {

  return (
    <section id="passes" className="py-20 relative">
      {/* 赛博朋克装饰背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-cyan-500/5"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-yellow-500/20 border border-yellow-400 text-yellow-400 text-sm font-mono tracking-wider">
              [PASSES RECOMMEND]
            </span>
          </div>
          <h2 className="text-4xl font-bold cyber-text text-cyan-400 mb-4">
            热门周游券推荐
          </h2>
          <p className="text-xl text-gray-300 font-light">
            精选最受欢迎的日本铁路通票，覆盖全日本各地区
          </p>
        </div>

        {/* Top Rated Passes */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularPasses.map((pass) => (
              <PassCard key={pass.id} pass={pass} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/passlist" className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center">
            查看所有周游券
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
