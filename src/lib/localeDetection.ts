export type SiteLocale = 'zh' | 'ja' | 'en';

const CHINESE_LANGUAGE_COUNTRIES = new Set(['CN', 'HK', 'MO', 'TW']);

export function localeFromCountry(countryCode?: string | null): SiteLocale {
  const normalizedCountry = countryCode?.trim().toUpperCase();

  if (normalizedCountry === 'JP') return 'ja';
  if (normalizedCountry && CHINESE_LANGUAGE_COUNTRIES.has(normalizedCountry)) return 'zh';
  return 'en';
}

export function localeFromBrowser(languages?: readonly string[] | null): SiteLocale {
  for (const language of languages ?? []) {
    const normalizedLanguage = language.trim().toLowerCase();
    if (normalizedLanguage === 'ja' || normalizedLanguage.startsWith('ja-')) return 'ja';
    if (normalizedLanguage === 'zh' || normalizedLanguage.startsWith('zh-')) return 'zh';
  }

  return 'en';
}
