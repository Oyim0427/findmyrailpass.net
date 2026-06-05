'use client';

import { ArrowRight } from "lucide-react";
import PassCard from "@/components/PassCard";
import Link from "next/link";
import { JRPass } from '@/types/pass';

interface PassesSectionProps {
  popularPasses: JRPass[];
  dict?: any;
}

export default function PassesSection({ popularPasses, dict }: PassesSectionProps) {
  return (
    <section id="passes" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-teal-50 text-teal-600 rounded-full text-sm font-medium">
              Top Recommendations
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {dict?.popularPasses || '热门周游券推荐'}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {dict?.libraryTitle || '票券资料库：精选最受欢迎的日本铁路通票'}
          </p>
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularPasses.map((pass) => (
              <PassCard key={pass.id} pass={pass} dict={dict} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/passlist" className="btn-primary px-8 py-4 text-lg inline-flex items-center">
            {dict?.viewAllPasses || '查看所有周游券'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
