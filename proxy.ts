import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { PAGES, PROTECTED_ROUTES_ARRAY, REGISTRATION_TOKEN_COOKIE_NAME } from '@/constants';

import { isRouteMatch } from '@/utils';

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (/\.(.*)$/.test(pathname)) {
    return NextResponse.next();
  }

  const hasCookie = request.cookies.has(REGISTRATION_TOKEN_COOKIE_NAME);

  if (!hasCookie && isRouteMatch(pathname, PROTECTED_ROUTES_ARRAY)) {
    return NextResponse.redirect(new URL(`${PAGES.notFound}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api|redirect).*)',
    '/dashboard/',
    '/dashboard/:path*',
  ],
};
