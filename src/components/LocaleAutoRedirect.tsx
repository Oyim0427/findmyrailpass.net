'use client';

import { useEffect } from 'react';
import { localeFromBrowser, localeFromCountry, SiteLocale } from '@/lib/localeDetection';
import { TrainFront } from 'lucide-react';

const COUNTRY_LOOKUP_URL = 'https://api.country.is/';
const LOOKUP_TIMEOUT_MS = 2_000;

type CountryLookupResponse = {
  country?: unknown;
};

export default function LocaleAutoRedirect() {
  useEffect(() => {
    const controller = new AbortController();
    let redirected = false;

    const redirect = (locale: SiteLocale) => {
      if (redirected) return;
      redirected = true;
      window.location.replace(`/${locale}/`);
    };

    const browserFallback = () => {
      const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
      redirect(localeFromBrowser(languages));
    };

    const timeout = window.setTimeout(() => {
      controller.abort();
      browserFallback();
    }, LOOKUP_TIMEOUT_MS);

    void fetch(COUNTRY_LOOKUP_URL, {
      cache: 'no-store',
      credentials: 'omit',
      referrerPolicy: 'no-referrer',
      signal: controller.signal,
    })
      .then(async response => {
        if (!response.ok) throw new Error(`Country lookup failed (${response.status})`);
        return response.json() as Promise<CountryLookupResponse>;
      })
      .then(result => {
        if (typeof result.country !== 'string' || !/^[A-Za-z]{2}$/.test(result.country)) {
          throw new Error('Country lookup returned an invalid country code');
        }
        redirect(localeFromCountry(result.country));
      })
      .catch(error => {
        if (error instanceof DOMException && error.name === 'AbortError') return;
        browserFallback();
      })
      .finally(() => window.clearTimeout(timeout));

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f8f6]">
      <section
        aria-live="polite"
        aria-busy="true"
        className="flex flex-col items-center justify-center"
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute h-24 w-24 animate-ping rounded-full bg-emerald-200/50" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm">
            <TrainFront className="h-8 w-8 animate-bounce" strokeWidth={2} />
          </div>
        </div>
      </section>
    </main>
  );
}
