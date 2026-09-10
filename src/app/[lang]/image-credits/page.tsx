import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Images } from 'lucide-react';
import NavigationSection from '@/components/sections/NavigationSection';
import FooterSection from '@/components/sections/FooterSection';
import { getDictionary, type Locale } from '@/i18n/dictionaries';
import { PASS_IMAGE_LIBRARY } from '@/lib/passImages';
import { buildLocalizedMetadata } from '@/lib/seo';

export const dynamic = 'force-static';

const copy = {
  zh: { title: '图片来源与开放授权', intro: '票券图片来自 Wikimedia Commons，并已下载到本站以保证稳定加载。图片按票券收录地区匹配，仅作地区与交通氛围展示，不代表票券覆盖画面中的具体线路。', back: '返回周游券列表', source: '查看原图与授权', note: '本站仅通过 CSS 裁切显示区域，下载的图片文件未做内容修改。各图片的权利仍属于相应作者。' },
  en: { title: 'Image sources and open licences', intro: 'Pass images come from Wikimedia Commons and are stored locally for reliable loading. They are matched by catalogue region for context only and do not imply that a pass covers the exact route shown.', back: 'Back to all passes', source: 'Original file and licence', note: 'Images are only visually cropped with CSS; the downloaded files are otherwise unmodified. Rights remain with their respective creators.' },
  ja: { title: '画像の出典・オープンライセンス', intro: 'きっぷ画像は Wikimedia Commons から取得し、安定表示のためサイト内に保存しています。掲載地域に応じたイメージであり、写真内の路線がきっぷの利用範囲に含まれることを示すものではありません。', back: '周遊券一覧へ戻る', source: '原画像とライセンス', note: 'CSS で表示範囲をトリミングしていますが、ダウンロード画像自体の内容は変更していません。各画像の権利はそれぞれの作者に帰属します。' },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return buildLocalizedMetadata({
    lang,
    path: 'image-credits',
    titles: { zh: '图片来源与开放授权｜FindMyJR-Pass', en: 'Image Credits & Open Licences | FindMyJR-Pass', ja: '画像の出典・オープンライセンス｜FindMyJR-Pass' },
    descriptions: { zh: '查看 FindMyJR-Pass 票券图片的作者、Wikimedia Commons 原图与开放许可证。', en: 'Authors, Wikimedia Commons source files and open licences for pass imagery used by FindMyJR-Pass.', ja: 'FindMyJR-Pass で使用する画像の作者、Wikimedia Commons 原画像、オープンライセンスを確認できます。' },
  });
}

export default async function ImageCreditsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = (lang === 'en' || lang === 'ja' ? lang : 'zh') as Locale;
  const t = copy[locale];
  const dict = getDictionary(locale);

  return (
    <div className="min-h-screen text-slate-950">
      <NavigationSection dict={dict} lang={locale} />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <Link href={`/${locale}/passlist`} className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark"><ArrowLeft className="h-4 w-4" />{t.back}</Link>
        <div className="mt-8 max-w-3xl">
          <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-primary"><Images className="h-5 w-5" />Wikimedia Commons</p>
          <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">{t.title}</h1>
          <p className="mt-5 text-base leading-8 text-slate-600">{t.intro}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PASS_IMAGE_LIBRARY.map(asset => (
            <article key={asset.key} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] bg-slate-100"><Image src={asset.localPath} alt={asset.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></div>
              <div className="p-6">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary-dark">{asset.region}</span>
                <h2 className="mt-4 text-lg font-black leading-7">{asset.title}</h2>
                <p className="mt-2 text-sm text-slate-600">© {asset.author} · <a href={asset.licenseUrl} target="_blank" rel="license noopener noreferrer" className="font-bold text-primary hover:underline">{asset.license}</a></p>
                <a href={asset.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">{t.source}<ExternalLink className="h-4 w-4" /></a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 rounded-2xl border border-slate-200 bg-[#f7f6f2] p-5 text-sm leading-7 text-slate-600">{t.note}</p>
      </main>
      <FooterSection dict={dict} lang={locale} />
    </div>
  );
}
