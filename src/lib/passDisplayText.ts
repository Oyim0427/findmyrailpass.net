/** Normalize imported pass copy for display without changing the source records. */
export function normalizePassDisplayText(value: string | null | undefined): string {
  if (!value) return '';
  return value
    .replace(/[０-９]/g, digit => String.fromCharCode(digit.charCodeAt(0) - 0xfee0))
    .replace(/[／⁄∕]/g, '/')
    .replace(/(?<=\d)\s*\/\s*(?=\d)/g, '/')
    .replace(/(?<=\d)\s*\/\s*(?=～)/g, '')
    .replace(/\s*\/\s*$/, '')
    .trim();
}
