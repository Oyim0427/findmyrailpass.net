'use client';

import Link from "next/link";
import { Train } from "lucide-react";
import type { Dictionary } from '@/i18n/dictionaries';

export default function FooterSection({ dict, lang }: { dict?: Dictionary, lang?: string }) {
  const locale = lang === 'en' || lang === 'ja' ? lang : 'zh';
  const copy = {
    zh: {
      tagline: '基于铁路运营方一手信息，比较日本铁路周游券与普通车票。本站不售票、不收取票款。', products: '比较与查询', calculator: '周游券计算器', all: '全部周游券', local: '地方券目录', map: '地图查询', popular: '热门推荐', about: '关于本站', sources: '数据来源与更新方法', credits: '图片来源与授权', editorial: '编辑与推荐原则', digital: '免费工具与开发计划', legal: '法律与政策', privacy: '隐私与 Cookie', terms: '使用条款', disclosure: 'Affiliate 与广告披露', commercial: '购买与付款说明', language: '语言', rights: '保留所有权利。',
    },
    en: {
      tagline: 'Compare Japan rail passes and regular tickets using primary operator information. We do not sell tickets or collect fares.', products: 'Compare & browse', calculator: 'Rail pass calculator', all: 'All passes', local: 'Local pass directory', map: 'Browse by region', popular: 'Popular passes', about: 'About', sources: 'Data sources & updates', credits: 'Image credits', editorial: 'Editorial principles', digital: 'Free tools & roadmap', legal: 'Legal & policies', privacy: 'Privacy & cookies', terms: 'Terms of use', disclosure: 'Affiliate & ad disclosure', commercial: 'Purchase & payment', language: 'Language', rights: 'All rights reserved.',
    },
    ja: {
      tagline: '運行会社の一次情報をもとに、日本の鉄道パスと通常きっぷを比較します。当サイトはきっぷを販売せず、代金を受領しません。', products: '比較・検索', calculator: '鉄道パス計算機', all: 'すべてのパス', local: '地方きっぷ一覧', map: '地域から探す', popular: '人気のパス', about: 'サイトについて', sources: '情報源と更新方法', credits: '画像クレジット', editorial: '編集・推薦方針', digital: '無料ツール・開発予定', legal: '法務・ポリシー', privacy: 'プライバシーとCookie', terms: '利用規約', disclosure: 'アフィリエイト・広告表示', commercial: '購入・決済のご案内', language: '言語', rights: 'All rights reserved.',
    },
  }[locale];
  return (
    <footer className="bg-[#edf7f8] border-t border-teal-100/80 pt-16 pb-8 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 md:col-span-3">
            <Link href={`/${lang || 'zh'}`} className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Train className="w-6 h-6 text-primary" />
              <span>FindMyJR-Pass</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              {dict?.heroSubtitle || copy.tagline}
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">{copy.products}</h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li><Link href={`/${lang || 'zh'}#calculator`} className="hover:text-primary transition-colors">{dict?.calcTitle || copy.calculator}</Link></li>
              <li><Link href={`/${lang || 'zh'}/passlist`} className="hover:text-primary transition-colors">{dict?.viewAllPasses || copy.all}</Link></li>
              <li><Link href={`/${lang || 'zh'}/passlist?tab=directory`} className="hover:text-primary transition-colors">{copy.local}</Link></li>
              <li><a href={`/${lang || 'zh'}#map`} className="hover:text-primary transition-colors">{dict?.mapTitle || copy.map}</a></li>
              <li><a href={`/${lang || 'zh'}#passes`} className="hover:text-primary transition-colors">{dict?.popularPasses || copy.popular}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">{copy.about}</h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li><Link href={`/${lang || 'zh'}/data-sources`} className="hover:text-primary transition-colors">{copy.sources}</Link></li>
              <li><Link href={`/${lang || 'zh'}/image-credits`} className="hover:text-primary transition-colors">{copy.credits}</Link></li>
              <li><Link href={`/${lang || 'zh'}/disclosure`} className="hover:text-primary transition-colors">{copy.editorial}</Link></li>
              <li><Link href={`/${lang || 'zh'}/products`} className="hover:text-primary transition-colors">{copy.digital}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">{copy.legal}</h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li><Link href={`/${lang || 'zh'}/privacy`} className="hover:text-primary transition-colors">{copy.privacy}</Link></li>
              <li><Link href={`/${lang || 'zh'}/terms`} className="hover:text-primary transition-colors">{copy.terms}</Link></li>
              <li><Link href={`/${lang || 'zh'}/disclosure`} className="hover:text-primary transition-colors">{copy.disclosure}</Link></li>
              <li><Link href={`/${lang || 'zh'}/commercial`} className="hover:text-primary transition-colors">{copy.commercial}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">{copy.language}</h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li><Link href="/zh" className="hover:text-primary transition-colors flex items-center"><span className={lang === 'zh' ? 'text-primary font-bold' : ''}>中文 (Chinese)</span></Link></li>
              <li><Link href="/en" className="hover:text-primary transition-colors flex items-center"><span className={lang === 'en' ? 'text-primary font-bold' : ''}>English</span></Link></li>
              <li><Link href="/ja" className="hover:text-primary transition-colors flex items-center"><span className={lang === 'ja' ? 'text-primary font-bold' : ''}>日本語 (Japanese)</span></Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200/70 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} FindMyJR-Pass. {copy.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
