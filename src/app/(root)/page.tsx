import Link from 'next/link';

export default function RootPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f8f6] px-5 py-12 text-slate-950">
      <section className="w-full max-w-3xl rounded-[2rem] border border-emerald-900/10 bg-white px-6 py-10 text-center shadow-[0_24px_80px_rgba(15,23,42,0.10)] sm:px-12 sm:py-14">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-700">FindMyJR-Pass</p>
        <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">Choose your language</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          日本の鉄道パスを比較する言語を選択してください<br />
          请选择浏览日本铁路周游券的语言
        </p>
        <nav aria-label="Language selection" className="mt-9 grid gap-3 sm:grid-cols-3">
          <Link href="/zh/" lang="zh-CN" hrefLang="zh-CN" className="rounded-2xl bg-emerald-800 px-5 py-4 font-bold text-white transition hover:bg-emerald-900 focus:outline-none focus:ring-4 focus:ring-emerald-200">中文</Link>
          <Link href="/ja/" lang="ja" hrefLang="ja" className="rounded-2xl border border-slate-300 bg-white px-5 py-4 font-bold text-slate-800 transition hover:border-emerald-700 hover:text-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-100">日本語</Link>
          <Link href="/en/" lang="en" hrefLang="en" className="rounded-2xl border border-slate-300 bg-white px-5 py-4 font-bold text-slate-800 transition hover:border-emerald-700 hover:text-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-100">English</Link>
        </nav>
      </section>
    </main>
  );
}
