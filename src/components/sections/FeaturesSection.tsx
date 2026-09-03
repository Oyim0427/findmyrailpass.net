'use client';

import { Clock, Users, Sparkles } from "lucide-react";
import type { Dictionary } from '@/i18n/dictionaries';

export default function FeaturesSection({ dict }: { dict?: Dictionary }) {
  const defaultFeatures = [
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "透明规则估算",
      desc: "根据出发地、目的地及天数，估算可能合适的周游券组合。",
      color: "bg-primary/10"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "官方价格核验",
      desc: "每条票券价格都能追溯到对应运营公司，并显示核验日期。",
      color: "bg-primary/10"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "清楚的购买路径",
      desc: "官方入口优先，合作链接与广告明确披露。",
      color: "bg-primary/10"
    }
  ];

  const icons = [
    <Sparkles key="1" className="w-6 h-6 text-primary" />,
    <Clock key="2" className="w-6 h-6 text-primary" />,
    <Users key="3" className="w-6 h-6 text-primary" />
  ];

  const features = dict?.featuresList && dict.featuresList.length === 3
    ? dict.featuresList.map((item, index: number) => ({
        icon: icons[index],
        title: item.title,
        desc: item.desc,
        color: "bg-primary/10"
      }))
    : defaultFeatures;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-4">
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            {dict?.contentTitle || '内容入口：按风物与行程组织'}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {dict?.contentDesc || '用可追溯的一手信息，帮助您做出更稳妥的购买判断'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature: { icon: React.ReactNode; title: string; desc: string; color: string }, i: number) => (
            <div key={i} className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
