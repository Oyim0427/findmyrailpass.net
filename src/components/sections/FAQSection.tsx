'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import type { Dictionary } from '@/i18n/dictionaries';

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection({ dict }: { dict?: Dictionary }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQ[] = dict?.faqs || [
    {
      question: '我应该什么时候购买日本铁路周游券 (JR Pass)?',
      answer: '建议您在出发前往日本之前的1-3个月内购买。购买后，您将收到兑换券（MCO），该兑换券自开具之日起3个月内有效。'
    },
    {
      question: 'JR Pass 包含哪些线路？',
      answer: '全国版 JR Pass 包含几乎所有的 JR 集团营运的铁路列车（包括新干线、特急、急行、快速及普通列车），以及 JR 巴士公司的本地路线和 JR 西日本宫岛渡轮。但请注意，“希望号”(Nozomi) 和“瑞穗号”(Mizuho) 新干线需另外购买专用车票。'
    },
    {
      question: '我可以使用 JR Pass 乘坐地铁吗？',
      answer: '一般情况下不可以。JR Pass 仅限 JR 运营的线路使用，不能用于乘坐东京 Metro 地铁、都营地铁或其他私营铁路（如小田急、京王等）。不过，JR 拥有覆盖主要景点的市内环线（如东京山手线、大阪环状线），这些都涵盖在内。'
    },
    {
      question: '儿童票的规定是什么？',
      answer: '购买周游券时，6-11岁的儿童可享受儿童票（大约为成人票价的一半）。5岁及以下的婴幼儿如果不需要单独预定座位，可以免费随同成人乘车。'
    }
  ];

  return (
    <section className="py-24 bg-transparent relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6 shadow-sm">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            {dict?.faqTitle || '常见问题 (FAQ)'}
          </h2>
          <p className="text-lg text-gray-500">
            {dict?.faqDesc || '解答您关于周游券购买和使用的常见疑问'}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-green-300 bg-white shadow-sm hover:shadow-md"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-lg text-gray-800 pr-8">{faq.question}</span>
                <div className={`p-2 rounded-full flex-shrink-0 transition-colors ${openIndex === index ? 'bg-primary/10' : 'bg-transparent'}`}>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-green-600' : 'text-gray-400'}`} 
                  />
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
