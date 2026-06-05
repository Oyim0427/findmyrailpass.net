import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'zh', 'ja'];
const defaultLocale = 'zh';

function getLocale(request: NextRequest): string {
  // Check for country header
  const country = request.headers.get('x-vercel-ip-country');
  if (country) {
    if (country === 'CN' || country === 'TW' || country === 'HK') return 'zh';
    if (country === 'JP') return 'ja';
  }
  
  // Check accept-language
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    if (acceptLanguage.includes('zh')) return 'zh';
    if (acceptLanguage.includes('ja')) return 'ja';
    if (acceptLanguage.includes('en')) return 'en';
  }
  
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Ignore static files, api, images
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images|api|.*\\.).*)',
  ],
};
