import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const response = NextResponse.json({ success: true });
    // Set a secure, httpOnly session cookie
    response.cookies.set('jw-admin-session', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 8, // 8 hours
      path: '/',
    });
    return response;
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete('jw-admin-session');
  return response;
}
