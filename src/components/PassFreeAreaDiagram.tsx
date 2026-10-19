import { MapPinned } from 'lucide-react';
import type { PassAreaStop } from '@/lib/passAreaStops';

const labels = {
  zh: {
    title: '乘车自由区域',
    schematic: '概略图',
    guide: '主要车站／地区',
    confirm: '精确区间请以运营方官网为准',
    mapLabel: '周游券主要车站和地区的线路示意图',
  },
  en: {
    title: 'Unlimited travel area',
    schematic: 'Schematic',
    guide: 'Key stations / areas',
    confirm: 'Confirm exact coverage with the operator',
    mapLabel: 'Schematic route showing key stations and areas for this pass',
  },
  ja: {
    title: '乗車フリーエリア',
    schematic: '概略図',
    guide: '主な駅・エリア',
    confirm: '正確な区間は運行会社の公式情報で確認',
    mapLabel: 'このきっぷの主な駅とエリアを示す路線概略図',
  },
} as const;

type Props = {
  lang: 'zh' | 'en' | 'ja';
  stops: readonly PassAreaStop[];
};

const MAP_WIDTH = 740;
const MAP_HEIGHT = 410;

function getMapTransform(stops: readonly PassAreaStop[]) {
  if (stops.length === 0) return { scale: 1, translateX: 0, translateY: 0 };

  const xs = stops.map(stop => stop.x);
  const ys = stops.map(stop => stop.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const spanX = Math.max(maxX - minX, 1);
  const spanY = Math.max(maxY - minY, 1);
  const scale = Math.min(3.4, Math.max(1, Math.min(600 / spanX, 270 / spanY)));
  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;

  return {
    scale,
    translateX: (MAP_WIDTH / 2) - (centerX * scale),
    translateY: (MAP_HEIGHT / 2) - (centerY * scale),
  };
}

export default function PassFreeAreaDiagram({ lang, stops }: Props) {
  const t = labels[lang];
  const visibleStops = stops.slice(0, 12);
  const { scale, translateX, translateY } = getMapTransform(visibleStops);

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-6 py-5 sm:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-primary">
            <MapPinned className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-black text-slate-950">{t.title}</h2>
        </div>
        <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-bold text-primary-dark">{t.schematic}</span>
      </div>

      <div className="relative overflow-hidden bg-[#f4faf9] p-3 sm:p-5">
        <div className="absolute inset-0 opacity-50" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(rgba(15,118,110,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15,118,110,.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="relative z-10 flex flex-col gap-1 border-b border-primary/10 bg-[#f4faf9]/90 px-1 pb-3 sm:flex-row sm:items-center sm:justify-between sm:px-2">
          <div className="text-xs font-black text-primary-dark">{t.guide}</div>
          <div className="text-[10px] font-bold text-slate-500">{t.confirm}</div>
        </div>
        <svg viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`} role="img" aria-label={t.mapLabel} className="relative mt-2 h-full min-h-[20rem] w-full">
          <g transform={`translate(${translateX} ${translateY}) scale(${scale})`}>
            <g fill="#cfe6e1" stroke="#acd1ca" strokeWidth={2 / scale} strokeLinejoin="round" aria-hidden="true">
              <path d="M605 15H704Q712 15 712 23V80Q712 88 704 88H652V100H622Q614 100 614 92V78H598V43H605Z" />
              <path d="M584 64H622V91H606V105H572V80H584Z" />
              <path d="M538 94H560V125H554V160H548V194H556V270H532V240H515V278H488V290H454V276H421V289H383V296H348V327H335V343H306V296H263V288H216V294H130Q122 294 122 286V258H230V250H296L322 232H373L398 213H438L450 184H480V157H499V124H516V102H538Z" />
              <path d="M168 306H294V335H258V348H210V341H190V358H160V331H168Z" />
              <path d="M78 294H150V329H139V372H126V390H84V360H52V333H70V310H78Z" />
              <path d="M18 359H45V389H15V371H18Z" />
            </g>
            {visibleStops.map((point, index) => {
              const above = index % 2 === 0;
              const labelX = point.x + ((index % 3 === 0 ? -5 : index % 3 === 1 ? 5 : 0) / scale);
              const labelY = point.y + ((above ? -17 : 27) / scale);
              return <g key={`${point.key}-${index}`} className="text-primary">
                <circle cx={point.x} cy={point.y} r={18 / scale} fill="currentColor" opacity="0.13" />
                <circle cx={point.x} cy={point.y} r={7 / scale} fill="currentColor" stroke="#ffffff" strokeWidth={3 / scale} />
                <text x={labelX} y={labelY} textAnchor="middle" fill="#0f766e" fontSize={12 / scale} fontWeight="800" paintOrder="stroke" stroke="#f4faf9" strokeWidth={4 / scale} strokeLinejoin="round">
                  {point.label}
                </text>
              </g>;
            })}
          </g>
        </svg>
      </div>
    </section>
  );
}
