
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const path = url.pathname;

  // 1. Admin Authentication (Cookie-based session)
  if (path.startsWith('/jw-admin')) {
    // Allow the login page itself through
    if (path === '/jw-admin/login') {
      return NextResponse.next();
    }

    // Check for valid session cookie
    const session = req.cookies.get('jw-admin-session');
    if (session?.value === 'authenticated') {
      return NextResponse.next();
    }

    // No valid session — redirect to custom login page
    const loginUrl = new URL('/jw-admin/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}
