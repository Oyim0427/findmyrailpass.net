'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, CalendarDays, ExternalLink, MapPin, ReceiptJapaneseYen, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { JRPass } from '@/types/pass';
import { event } from '@/lib/analytics';

interface AdvancedCalculatorProps {
  passes: JRPass[];
  lang?: string;
}

interface FitResult {
  pass: JRPass;
  score: number;
  reasons: string[];
  totalPassCost: number;
  difference?: number;
}

const regions = ['全国', '北海道', '東北', '関東', '東海', '北信越', '近畿', '中国', '四国', '九州'];

const copy = {
  zh: {
    origin: '主要出发地区', destination: '主要旅行地区', days: '旅行天数', travelers: '成人旅客人数', children: '儿童旅客人数', budget: '普通票总预算（可选）', budgetHint: '填入从官方购票网站查到的所有成人普通票合计；留空则只比较适配度。', compare: '比较适合的周游券', comparing: '正在按官方票券规则比较…', select: '请选择出发地区和旅行地区', results: '适配度比较结果', resultDesc: '依据官方覆盖范围、有效天数与乘车强度排序。不是实时票价或库存查询。', verified: '已在全站周游券中搜索', passTotal: '通票合计', budgetDiffSave: '比输入预算低', budgetDiffMore: '比输入预算高', fitStrong: '较高适配', fitPossible: '可作为候选', fitLow: '需谨慎比较', details: '查看详情', buy: '官方网站', disclaimer: '结果仅用于缩小候选范围。线路例外、资格、指定席、追加费用及最终价格请以运营方购买页为准。', noResults: '当前全站库中没有覆盖该组合的周游券。可考虑普通票，或调整旅行地区。', nationwide: '全国旅行', sameRegion: '覆盖主要旅行地区', originCovered: '同时覆盖出发地区', nationalCoverage: '全国券可跨区使用', daysFit: '有效天数适合行程', daysShort: '通票有效期短于整个行程，请集中使用', daysLong: '通票天数长于行程，可能浪费', intensityFit: '长途乘车频率较高', budgetBetter: '票券总价低于您输入的普通票预算', budgetWorse: '票券总价高于您输入的普通票预算', person: '人', day: '天'
  },
  en: {
    origin: 'Primary origin region', destination: 'Primary travel region', days: 'Trip length', travelers: 'Adult travellers', children: 'Child travellers', budget: 'Total regular-ticket budget (optional)', budgetHint: 'Enter the adult-ticket total you found on official booking sites. Leave blank for fit-only ranking.', compare: 'Compare suitable passes', comparing: 'Checking official pass rules…', select: 'Select an origin and travel region', results: 'Pass fit comparison', resultDesc: 'Ranked by official coverage, validity and travel intensity—not live fares or inventory.', verified: 'Searched across all passes', passTotal: 'Pass total', budgetDiffSave: 'below your budget', budgetDiffMore: 'above your budget', fitStrong: 'Strong fit', fitPossible: 'Possible fit', fitLow: 'Compare carefully', details: 'View details', buy: 'Official website', disclaimer: 'Use this to narrow your shortlist. Check operator pages for route exceptions, eligibility, reservations, surcharges and final prices.', noResults: 'No pass in our entire database covers this combination. Consider regular tickets or change the travel region.', nationwide: 'Nationwide travel', sameRegion: 'Covers the main travel region', originCovered: 'Also covers the origin region', nationalCoverage: 'Nationwide coverage supports cross-region travel', daysFit: 'Validity fits the trip', daysShort: 'Validity is shorter than the trip; concentrate travel days', daysLong: 'Validity is longer than the trip and may be wasted', intensityFit: 'Higher intercity travel intensity', budgetBetter: 'Pass total is below your entered ticket budget', budgetWorse: 'Pass total is above your entered ticket budget', person: 'traveller(s)', day: 'day(s)'
  },
  ja: {
    origin: '主な出発エリア', destination: '主な旅行エリア', days: '旅行日数', travelers: '大人人数', children: '子供人数', budget: '通常きっぷ合計予算（任意）', budgetHint: '公式予約サイトで調べた大人通常きっぷの合計を入力。空欄なら適合度のみ比較します。', compare: '適したパスを比較', comparing: '公式ルールで比較中…', select: '出発エリアと旅行エリアを選択', results: 'パス適合度の比較', resultDesc: '公式の利用範囲・有効日数・乗車頻度で並べ替えます。リアルタイム運賃・在庫ではありません。', verified: '全サイトのパスを検索しました', passTotal: 'パス合計', budgetDiffSave: '入力予算より安い', budgetDiffMore: '入力予算より高い', fitStrong: '適合度が高い', fitPossible: '候補', fitLow: '要比較', details: '詳細を見る', buy: '公式サイト', disclaimer: '候補を絞るための結果です。例外区間、利用資格、指定席、追加料金、最終価格は運行会社の購入ページで確認してください。', noResults: '全サイトのデータベース内にこの組み合わせをカバーするパスはありません。通常きっぷまたは旅行エリアの変更をご検討ください。', nationwide: '全国旅行', sameRegion: '主な旅行エリアをカバー', originCovered: '出発エリアもカバー', nationalCoverage: '全国パスで地域をまたぐ移動が可能', daysFit: '有効日数が旅程に合う', daysShort: '有効期間が旅行全体より短いため集中利用が必要', daysLong: '有効日数が旅行より長く余る可能性', intensityFit: '都市間移動の頻度が高い', budgetBetter: '入力した通常きっぷ予算よりパス合計が安い', budgetWorse: '入力した通常きっぷ予算よりパス合計が高い', person: '人', day: '日'
  }
};

export default function AdvancedCalculator({ passes, lang = 'zh' }: AdvancedCalculatorProps) {
  const t = copy[lang as keyof typeof copy] || copy.zh;
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [tripDays, setTripDays] = useState(7);
  const [travellers, setTravellers] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [ticketBudget, setTicketBudget] = useState('');
  const [results, setResults] = useState<FitResult[] | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const comparePasses = () => {
    if (!origin || !destination) return;
    setIsCalculating(true);
    const budget = Number(ticketBudget) > 0 ? Number(ticketBudget) : undefined;

    const ranked = passes.flatMap((pass): FitResult[] => {
      const passRegions = pass.coverage.regions;
      const isNational = pass.category === 'national' || passRegions.includes('全国');
      const destinationCovered = destination === '全国' ? isNational : isNational || passRegions.includes(destination);
      if (!destinationCovered) return [];

      let score = 0;
      const reasons: string[] = [];
      if (destination === '全国' && isNational) {
        score += 45;
        reasons.push(t.nationwide);
      } else if (passRegions.includes(destination)) {
        score += 45;
        reasons.push(t.sameRegion);
      } else if (isNational) {
        score += origin !== destination ? 30 : 18;
        reasons.push(t.nationalCoverage);
      }

      if (passRegions.includes(origin)) {
        score += 15;
        reasons.push(t.originCovered);
      } else if (origin !== destination && !isNational && !passRegions.includes(origin)) {
        score -= 12;
      }

      const validity = Math.min(...pass.duration);
      if (validity === tripDays || validity === tripDays + 1) {
        score += 25;
        reasons.push(t.daysFit);
      } else if (validity < tripDays) {
        score += 15;
        reasons.push(t.daysShort);
      } else {
        score += 5;
        reasons.push(t.daysLong);
      }

      const totalPassCost = pass.price.adult.regular * travellers + (pass.price.child?.regular || 0) * childrenCount;
      let difference: number | undefined;
      if (budget !== undefined) {
        difference = budget - totalPassCost;
        if (difference >= 0) {
          score += 20;
          reasons.push(t.budgetBetter);
        } else {
          score -= 20;
          reasons.push(t.budgetWorse);
        }
      }

      if (pass.sourceAuthority === 'operator') score += 5;
      return [{ pass, score: Math.max(0, Math.min(100, score)), reasons, totalPassCost, difference }];
    }).sort((a, b) => b.score - a.score || a.totalPassCost - b.totalPassCost).slice(0, 4);

    window.setTimeout(() => {
      setResults(ranked);
      setIsCalculating(false);
      event({ action: 'pass_fit_calculated', category: 'calculator', label: `${origin}:${destination}:${tripDays}:${childrenCount}:${budget ? 'with_budget' : 'fit_only'}` });
    }, 450);
  };

  const fitLabel = (score: number) => score >= 75 ? t.fitStrong : score >= 55 ? t.fitPossible : t.fitLow;
  const passName = (pass: JRPass) => lang === 'en' ? pass.name.en : lang === 'ja' ? pass.name.jp : pass.name.cn;

  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
      <div className="grid gap-5 p-6 sm:grid-cols-2 sm:p-9 lg:grid-cols-3">
        <Field label={t.origin} icon={<MapPin className="h-4 w-4" />}>
          <select value={origin} onChange={(e) => { setOrigin(e.target.value); setResults(null); }} className="field-select"><option value="">{t.select}</option>{regions.filter(r => r !== '全国').map(r => <option key={r} value={r}>{r}</option>)}</select>
        </Field>
        <Field label={t.destination} icon={<MapPin className="h-4 w-4" />}>
          <select value={destination} onChange={(e) => { setDestination(e.target.value); setResults(null); }} className="field-select"><option value="">{t.select}</option>{regions.map(r => <option key={r} value={r}>{r}</option>)}</select>
        </Field>
        <Field label={t.days} icon={<CalendarDays className="h-4 w-4" />}>
          <select value={tripDays} onChange={(e) => setTripDays(Number(e.target.value))} className="field-select">{[2,3,4,5,6,7,8,10,14,21].map(n => <option key={n} value={n}>{n} {t.day}</option>)}</select>
        </Field>
        <Field label={t.travelers} icon={<Users className="h-4 w-4" />}>
          <select value={travellers} onChange={(e) => setTravellers(Number(e.target.value))} className="field-select">{[1,2,3,4,5].map(n => <option key={n} value={n}>{n} {t.person}</option>)}</select>
        </Field>
        <Field label={t.children} icon={<Users className="h-4 w-4" />}>
          <select value={childrenCount} onChange={(e) => setChildrenCount(Number(e.target.value))} className="field-select">{[0,1,2,3,4,5].map(n => <option key={n} value={n}>{n} {t.person}</option>)}</select>
        </Field>
        <Field label={t.budget} icon={<ReceiptJapaneseYen className="h-4 w-4" />}>
          <div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">¥</span><input inputMode="numeric" value={ticketBudget} onChange={(e) => setTicketBudget(e.target.value.replace(/\D/g, ''))} placeholder="50000" className="field-select" style={{ paddingLeft: '2.5rem' }} /></div>
        </Field>
        <p className="text-xs leading-5 text-slate-500 sm:col-span-2 lg:col-span-3">{t.budgetHint}</p>
        <button onClick={comparePasses} disabled={!origin || !destination || isCalculating} className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-4 shadow-lg disabled:cursor-not-allowed disabled:opacity-40 sm:col-span-2 lg:col-span-3">
          {isCalculating ? t.comparing : t.compare}<ArrowRight className="h-5 w-5" />
        </button>
      </div>

      {results && <div className="border-t border-slate-200 bg-[#f7f6f2] p-6 sm:p-9">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div><h3 className="text-2xl font-bold text-slate-950">{t.results}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{t.resultDesc}</p></div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary"><ShieldCheck className="h-4 w-4" />{t.verified}</span>
        </div>

        {results.length ? <div className="mt-6 grid gap-4">{results.map((result, index) => {
          const purchase = result.pass.purchaseLinks?.[0];
          const official = result.pass.officialLinks?.[0];
          return <article key={result.pass.id} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex flex-col justify-between gap-5 md:flex-row">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2"><span className={`rounded-full px-3 py-1 text-xs font-bold ${result.score >= 75 ? 'bg-teal-100 text-primary-dark' : result.score >= 55 ? 'bg-amber-100 text-amber-900' : 'bg-slate-100 text-slate-700'}`}>{fitLabel(result.score)} · {result.score}</span>{index === 0 && <span className="text-xs font-semibold text-slate-400">#1</span>}</div>
                <h4 className="mt-3 text-xl font-bold text-slate-950">{passName(result.pass)}</h4>
                <ul className="mt-4 flex flex-wrap gap-2">{result.reasons.map(reason => <li key={reason} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{reason}</li>)}</ul>
              </div>
              <div className="shrink-0 md:text-right"><p className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.passTotal}</p><p className="mt-1 text-2xl font-bold text-slate-950">¥{result.totalPassCost.toLocaleString()}</p>{result.difference !== undefined && <p className={`mt-1 text-sm font-semibold ${result.difference >= 0 ? 'text-primary' : 'text-rose-700'}`}>¥{Math.abs(result.difference).toLocaleString()} {result.difference >= 0 ? t.budgetDiffSave : t.budgetDiffMore}</p>}</div>
            </div>
            <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
              <Link href={`/${lang}/passlist/${result.pass.id}`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-sm font-bold text-slate-700 hover:border-primary">{t.details}</Link>
              {purchase ? <a href={purchase.url} target="_blank" rel={purchase.type === 'affiliate' ? 'sponsored noopener noreferrer' : 'noopener noreferrer'} onClick={() => event({ action: 'outbound_click', category: 'calculator_purchase', label: result.pass.id })} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#c2410c] px-4 py-3 text-sm font-bold text-white hover:bg-[#9a3412]">{t.buy}<ExternalLink className="h-4 w-4" /></a> : official ? <a href={official.url} target="_blank" rel="noopener noreferrer" onClick={() => event({ action: 'outbound_click', category: 'calculator_official', label: result.pass.id })} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#c2410c] px-4 py-3 text-sm font-bold text-white hover:bg-[#9a3412]">{t.buy}<ExternalLink className="h-4 w-4" /></a> : null}
            </div>
          </article>;
        })}</div> : <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">{t.noResults}</p>}

        <p className="mt-6 flex gap-2 rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-900"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />{t.disclaimer}</p>
      </div>}
    </div>
  );
}

function Field({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700">{icon}{label}</span>{children}</label>;
}
