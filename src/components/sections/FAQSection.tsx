'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import type { Dictionary } from '@/i18n/dictionaries';

const copy = {
  zh: { title: '常见问题', description: '解答周游券购买和使用中的常见疑问', faqs: [
    ['应该什么时候购买日本铁路周游券？', '建议在行程和长距离移动基本确定后购买，并确认领取期限、销售期和使用资格。不同票券条件不同，请以运营方页面为准。'], ['周游券包含哪些线路？', '每张票券的覆盖范围不同。即使是全国版也可能有列车、座席或追加票例外，请查看本站详情和运营方最新路线图。'], ['可以用周游券乘坐地铁吗？', '通常不能把 JR 票券用于地铁或私铁，但部分地区组合券包含合作线路。请逐张确认适用范围。'], ['儿童票的规定是什么？', '儿童年龄、免费同行和是否占座的条件因产品而异。计算器只在价格明确时估算，最终以运营方规则为准。'],
  ] },
  en: { title: 'Frequently asked questions', description: 'Common questions about buying and using Japan rail passes', faqs: [
    ['When should I buy a Japan rail pass?', 'Buy after your itinerary and long-distance trips are reasonably settled, and check pickup deadlines, sales periods and eligibility. Conditions vary by pass, so follow the operator page.'], ['Which lines does a pass include?', 'Coverage differs by product. Even nationwide passes may have train, seat or supplemental-ticket exceptions. Check the on-site detail and the operator’s latest route map.'], ['Can I use a rail pass on the subway?', 'JR passes generally do not cover subways or private railways, although some regional combination tickets include partner lines. Check each product’s coverage.'], ['How do child fares work?', 'Age limits, free accompanying children and seat rules vary by product. The calculator estimates child prices only when they are clear; the operator’s rules are final.'],
  ] },
  ja: { title: 'よくある質問', description: '日本の鉄道パスの購入・利用に関する主な質問', faqs: [
    ['鉄道パスはいつ購入すればよいですか？', '旅程と長距離移動がある程度決まった後、受取期限、発売期間、利用資格を確認して購入します。条件は商品ごとに異なるため、運行会社ページを優先してください。'], ['どの路線が利用できますか？', '利用範囲は商品ごとに異なります。全国版でも列車、座席、追加券に例外があるため、サイト内詳細と運行会社の最新路線図をご確認ください。'], ['地下鉄でも使えますか？', '通常、JRのパスで地下鉄や私鉄は利用できません。ただし、地域の組合せきっぷには提携路線を含む場合があります。商品ごとに確認してください。'], ['こども料金の条件は？', '年齢区分、無料で同伴できる人数、座席利用の条件は商品ごとに異なります。計算機は料金が明確な場合だけ試算し、最終条件は運行会社の規則に従います。'],
  ] },
};

export default function FAQSection({ dict, lang = 'zh' }: { dict?: Dictionary; lang?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); const locale = lang === 'en' || lang === 'ja' ? lang : 'zh'; const t = copy[locale]; const faqs = dict?.faqs || t.faqs.map(([question, answer]) => ({ question, answer }));
  return <section className="relative bg-transparent py-24"><div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"><div className="mb-16 text-center"><div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-primary/10 p-3 shadow-sm"><HelpCircle className="h-8 w-8 text-primary" /></div><h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">{dict?.faqTitle || t.title}</h2><p className="text-lg text-gray-500">{dict?.faqDesc || t.description}</p></div><div className="space-y-4">{faqs.map((faq, index) => <div key={faq.question} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-primary hover:shadow-md"><button className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none" onClick={() => setOpenIndex(openIndex === index ? null : index)} aria-expanded={openIndex === index}><span className="pr-8 text-lg font-bold text-gray-800">{faq.question}</span><span className={`shrink-0 rounded-full p-2 ${openIndex === index ? 'bg-primary/10' : ''}`}><ChevronDown className={`h-5 w-5 transition-transform ${openIndex === index ? 'rotate-180 text-primary' : 'text-gray-400'}`} /></span></button><div className={`overflow-hidden transition-all ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}><div className="mx-6 border-t border-gray-100 pb-6 pt-4 leading-relaxed text-gray-600">{faq.answer}</div></div></div>)}</div></div></section>;
}
