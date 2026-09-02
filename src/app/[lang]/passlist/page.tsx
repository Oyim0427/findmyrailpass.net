import { Suspense } from 'react';
import PassListClient from './PassListClient';
import { getAllPasses } from '@/lib/passData';
import { getDictionary, Locale } from '@/i18n/dictionaries';
import { buildLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildLocalizedMetadata({
    lang,
    path: 'passlist',
    titles: {
      zh: '日本铁路周游券列表与官方价格｜FindMyRailPass',
      en: 'Verified Japan Rail Pass List and Official Prices | FindMyRailPass',
      ja: '日本の鉄道パス一覧・公式料金｜FindMyRailPass',
    },
    descriptions: {
      zh: '比较经过核验的日本全国与地区铁路周游券，查看运营方来源、适用范围、价格和官方购买入口。',
      en: 'Compare verified nationwide and regional Japan rail passes with operator sources, coverage, prices and official purchase links.',
      ja: '確認済みの全国・地域鉄道パスを、運行会社の情報、利用範囲、料金、公式購入先とともに比較できます。',
    },
  });
}

export default async function AllPassesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const passes = getAllPasses();
  const dict = getDictionary(lang as Locale);

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-900">Loading...</div>}>
      <PassListClient passes={passes} lang={lang} dict={dict} />
    </Suspense>
  );
}
