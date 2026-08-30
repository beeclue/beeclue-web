import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';

  // Redirect any *.pages.dev traffic (including beeclue-web.pages.dev) permanently to beeclue.com
  if (host.includes('beeclue-web.pages.dev') || host.endsWith('.pages.dev')) {
    const url = request.nextUrl.clone();
    url.host = 'beeclue.com';
    url.protocol = 'https:';
    url.port = '';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static files (_next/static, _next/image, favicon.ico)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
