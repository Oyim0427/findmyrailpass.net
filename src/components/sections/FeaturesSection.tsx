'use client';

import { MapPin, Clock, Users, Shield, Sparkles } from "lucide-react";

export default function FeaturesSection({ dict }: { dict?: any }) {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-teal-600" />,
      title: "智能推荐计算",
      desc: "根据出发地、目的地及天数，AI极速为您推荐最佳行程与最省钱的周游券组合。",
      color: "bg-teal-50"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "实时价格对比",
      desc: "同步多平台售价，一眼看清各个周游券的优惠力度，不再为比价发愁。",
      color: "bg-blue-50"
    },
    {
      icon: <Users className="w-6 h-6 text-rose-600" />,
      title: "真实经验分享",
      desc: "汇集真实用户的行程心得与点评，避坑指南让您的日本之旅更顺畅。",
      color: "bg-rose-50"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-sm font-medium border border-gray-200">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            {dict?.contentTitle || '内容入口：按风物与行程组织'}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {dict?.contentDesc || '我们提供最全面、最准确的日本周游券信息，帮您省钱又省心'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, i) => (
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
