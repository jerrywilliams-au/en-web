import Link from 'next/link';
import { LogOut, Settings } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Top Bar */}
      <header className="border-b border-white/5 bg-black/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
              <Settings className="w-3.5 h-3.5 text-black" />
            </div>
            <span className="text-sm font-semibold tracking-tight text-white">Admin Console</span>
            <span className="text-white/20 text-xs font-mono">/ jerrywilliams.au</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
              target="_blank"
            >
              View Site ↗
            </Link>
            <form action="/api/admin/auth" method="DELETE">
              <button
                formAction="/api/admin/auth"
                type="submit"
                onClick={async (e) => {
                  e.preventDefault();
                  await fetch('/api/admin/auth', { method: 'DELETE' });
                  window.location.href = '/jw-admin/login';
                }}
                className="flex items-center gap-1.5 text-xs text-white/40 hover:text-red-400 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        {children}
      </main>
    </div>
  );
}
