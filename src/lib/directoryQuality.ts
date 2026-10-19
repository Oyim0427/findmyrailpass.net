import type { DomesticDirectoryPass } from '@/data/domesticPassDirectory';

export function japanToday(): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Tokyo', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(new Date());
}

/** Keep archived URLs available without recommending a recorded expired sale. */
export function getDirectoryAvailability(pass: DomesticDirectoryPass, today = japanToday()): DomesticDirectoryPass['status'] {
  if (pass.status === 'ended' || (pass.endDate && pass.endDate < today)) return 'ended';
  if (pass.status === 'needs-review') return 'needs-review';
  if (pass.startDate && pass.startDate > today) return 'scheduled';
  return 'on-sale';
}

export function hasRecordedFare(value?: string): boolean {
  return /\d[\d,]*\s*(?:円|ポイント|yen|JPY)/i.test((value || '').normalize('NFKC'));
}

export function getDirectoryPriceText(value?: string): string | undefined {
  return hasRecordedFare(value) ? value : undefined;
}
