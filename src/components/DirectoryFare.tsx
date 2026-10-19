import type { ReactNode } from 'react';
import { Baby, BadgePercent, GraduationCap, UserRound, UsersRound } from 'lucide-react';
import { normalizePassDisplayText } from '@/lib/passDisplayText';

type FareKind = 'adult' | 'child' | 'youth' | 'family' | 'special';

function getFareKind(label: string): FareKind {
  if (/小人|小児|こども|子供|小学生/.test(label)) return 'child';
  if (/U25|中・高校生|中高生|高校生|中学生/.test(label)) return 'youth';
  if (/ファミリー|大人\d+名/.test(label)) return 'family';
  if (/シルバー|ゴールド会員/.test(label)) return 'special';
  return 'adult';
}

function getFareLabel(label: string, lang: string): string {
  if (lang === 'ja') return label;
  const age = label.match(/(?:25歳以下|65歳以上)/)?.[0];
  if (lang === 'en') {
    if (/^U25/.test(label)) return age ? 'U25 (25 and under)' : 'U25';
    if (/シルバー/.test(label)) return age ? 'Senior (65 and over)' : 'Senior';
    if (/ゴールド会員/.test(label)) return 'Gold member';
    if (/中・高校生|中高生/.test(label)) return 'Junior / senior high student';
    if (/高校生以上/.test(label)) return 'High school age and over';
    if (/高校生/.test(label)) return 'High school student';
    if (/中学生/.test(label)) return 'Junior high student';
    if (/小学生/.test(label)) return 'Elementary school student';
    if (/ファミリー/.test(label)) return 'Family fare';
    if (/^大人\d+名/.test(label)) return label.replace(/大人(\d+)名/, 'Adults $1').replace(/[＋+]\s*小人(\d+)名/, ' + children $1');
    if (/小人・中学生/.test(label)) return 'Child / junior high';
    if (/小人|小児|こども|子供/.test(label)) return 'Child';
    return 'Adult';
  }
  if (/^U25/.test(label)) return age ? 'U25（25岁及以下）' : 'U25';
  if (/シルバー/.test(label)) return age ? '长者（65岁及以上）' : '长者';
  if (/ゴールド会員/.test(label)) return '金卡会员';
  if (/中・高校生|中高生/.test(label)) return '初中／高中生';
  if (/高校生以上/.test(label)) return '高中生及以上';
  if (/高校生/.test(label)) return '高中生';
  if (/中学生/.test(label)) return '初中生';
  if (/小学生/.test(label)) return '小学生';
  if (/ファミリー/.test(label)) return '家庭票价';
  if (/^大人\d+名/.test(label)) return label.replace(/大人(\d+)名/, '成人$1名').replace(/[＋+]\s*小人(\d+)名/, '＋儿童$1名');
  if (/小人・中学生/.test(label)) return '儿童／初中生';
  if (/小人|小児|こども|子供/.test(label)) return '儿童';
  return '成人';
}

function FareIcon({ kind }: { kind: FareKind }) {
  const className = 'h-5 w-5 text-primary';
  if (kind === 'child') return <Baby className={className} />;
  if (kind === 'youth') return <GraduationCap className={className} />;
  if (kind === 'family') return <UsersRound className={className} />;
  if (kind === 'special') return <BadgePercent className={className} />;
  return <UserRound className={className} />;
}

// Display only: preserve recorded amounts, conditions and family bundles.
// Never turn missing fares into zero or infer a child discount.
export default function DirectoryFare({ value, lang = 'ja', compact = false, trailing }: {
  value?: string;
  lang?: string;
  compact?: boolean;
  trailing?: ReactNode;
}) {
  const text = normalizePassDisplayText(value).replace(/，/g, ',');
  const missingLabel = lang === 'en' ? 'Not recorded' : lang === 'ja' ? '記載なし' : '未记载';
  const fareLabel = String.raw`(?:ファミリー(?:[（(][^）)]*[）)])?|大人\d+名(?:\s*[＋+]\s*小人\d+名)?|U25(?:[（(][^）)]*[）)])?|シルバー(?:[（(][^）)]*[）)])?|ゴールド会員|中・高校生|中高生|高校生以上|高校生|中学生|小学生|小人・中学生|大人|おとな|成人|小人|小児|こども|子供)`;
  const pattern = new RegExp(`(${fareLabel})\\s*[:：]\\s*([\\d,]+\\s*(?:円|ポイント)|[-－—]+(?:円)?)`, 'g');
  const parts: Array<{ text: string; label?: string; kind?: FareKind }> = [];
  let offset = 0;
  for (const match of text.matchAll(pattern)) {
    const before = text.slice(offset, match.index).replace(/^[\s/／]+|[\s/／]+$/g, '');
    if (before) parts.push({ text: before });
    parts.push({
      text: /^[-－—]/.test(match[2]) ? missingLabel : match[2],
      kind: getFareKind(match[1]),
      label: getFareLabel(match[1], lang),
    });
    offset = match.index! + match[0].length;
  }
  const remaining = text.slice(offset).replace(/^[\s/／]+|[\s/／]+$/g, '');
  if (remaining) parts.push({ text: remaining });
  return <div className={`grid min-w-0 gap-3 ${compact ? '' : trailing ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
    {parts.map((part, index) => part.label ? <div key={index} className={compact ? 'flex flex-wrap items-center gap-x-3 gap-y-1' : 'rounded-2xl bg-primary/10 p-5'}>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500"><FareIcon kind={part.kind || 'special'} />{part.label}</span>
      <span className={`block break-words font-bold text-slate-950 ${compact ? 'text-lg' : 'mt-2 text-2xl'}`}>{part.text}</span>
    </div> : <p key={index} className={`break-words text-sm leading-6 text-slate-600 ${compact ? '' : 'sm:col-span-2'}`}>{part.text}</p>)}
    {trailing}
    {!text && <span>—</span>}
  </div>;
}
