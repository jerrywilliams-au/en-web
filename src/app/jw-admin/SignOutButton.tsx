'use client';

import { LogOut } from 'lucide-react';

export default function SignOutButton() {
  async function handleSignOut() {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    window.location.href = '/jw-admin/login';
  }

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center gap-1.5 text-xs text-white/40 hover:text-red-400 transition-colors"
    >
      <LogOut className="w-3.5 h-3.5" />
      Sign Out
    </button>
  );
}
