import type { DomesticDirectoryPass } from '@/data/domesticPassDirectory';
import type { SupportedLocale } from '@/lib/seo';

type TransportMode = 'rail' | 'subway' | 'tram' | 'bus' | 'monorail' | 'ferry';

const labels: Record<SupportedLocale, Record<TransportMode, string>> = {
  ja: {
    rail: '鉄道',
    subway: '地下鉄',
    tram: '路面電車',
    bus: 'バス',
    monorail: 'モノレール・新交通',
    ferry: 'フェリー',
  },
  zh: {
    rail: '铁路',
    subway: '地铁',
    tram: '有轨电车',
    bus: '巴士',
    monorail: '单轨电车／新交通',
    ferry: '渡轮',
  },
  en: {
    rail: 'Rail',
    subway: 'Subway',
    tram: 'Tram',
    bus: 'Bus',
    monorail: 'Monorail / automated guideway',
    ferry: 'Ferry',
  },
};

/**
 * Directory records do not yet store a structured mode list. Keep the display
 * concrete by deriving only modes named by the product/operator, then use the
 * record category as a conservative fallback instead of vague “transport” copy.
 */
export function getDirectoryTransportModes(pass: DomesticDirectoryPass, locale: SupportedLocale): string[] {
  const name = pass.name.normalize('NFKC');
  const company = pass.company.normalize('NFKC');
  const text = `${name} ${company}`;
  const modes: TransportMode[] = [];
  const add = (mode: TransportMode, pattern: RegExp) => {
    if (pattern.test(text) && !modes.includes(mode)) modes.push(mode);
  };

  add('subway', /地下鉄|メトロ|subway|metro|ドニチカ/i);
  add('tram', /市電|路面電車|軌道|tram|都電|嵐電|阪堺|岡電|広電|とさでん|万葉線|ポートラム|セントラム|どサンこ/i);
  add('bus', /バス|bus|BRT|るーぷる|シャトル/i);
  add('monorail', /モノレール|ゆいレール|リニモ|ガイドウェイ|新交通|monorail/i);
  add('ferry', /フェリー|船|航路|汽船|ferry/i);
  if (/鉄道|電鉄|電車|列車|新幹線|レール|railway|rail|train/i.test(name)
    || (pass.category !== 'bus' && /JR|鉄道|電鉄/i.test(company))) {
    modes.push('rail');
  }

  if (modes.length === 0) modes.push(pass.category === 'bus' ? 'bus' : 'rail');
  return modes.map(mode => labels[locale][mode]);
}
