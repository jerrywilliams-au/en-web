'use client';

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-8 glass-1">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-icy-cyan-400 to-blue-600 flex items-center justify-center shadow-lg">
            <span className="text-white text-sm font-bold">JW</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-foreground">Jerry Williams</span>
            <span className="text-xs text-muted-foreground">AI Stack Solutions Architect</span>
          </div>
        </div>
        
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Jerry Williams. All rights reserved.
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            📍 Adelaide, Australia
          </span>
        </div>
      </div>
    </footer>
  );
}
