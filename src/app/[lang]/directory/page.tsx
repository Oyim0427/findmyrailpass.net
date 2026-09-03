import { Suspense } from 'react';
import PassListClient from '../passlist/PassListClient';
import { getAllPasses } from '@/lib/passData';
import { getDictionary, Locale } from '@/i18n/dictionaries';
import { buildLocalizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildLocalizedMetadata({
    lang,
    path: 'directory',
    titles: {
      zh: '日本在售铁路一日券与自由乘车券目录｜FindMyJR-Pass',
      en: 'Current Japan Railway Free-Pass Directory | FindMyJR-Pass',
      ja: '発売中の鉄道フリーきっぷ一覧｜FindMyJR-Pass',
    },
    descriptions: {
      zh: '浏览日本全国地方铁路、地铁与路面电车仍在售或已公布下一销售期的自由乘车券，并在本站查看每张券的价格、有效期和销售信息。',
      en: 'Browse current and scheduled free passes from regional railways, subways and tram operators across Japan, with a complete on-site detail page for every pass.',
      ja: '全国の地方鉄道・地下鉄・路面電車で発売中、または次回発売予定のフリーきっぷを、1件ずつサイト内の詳細ページで掲載。',
    },
  });
}

export default async function DirectoryPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const passes = getAllPasses();
  const dict = getDictionary(lang as Locale);

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-transparent text-gray-900">Loading...</div>}>
      <PassListClient passes={passes} lang={lang} dict={dict} initialTab="directory" />
    </Suspense>
  );
}
