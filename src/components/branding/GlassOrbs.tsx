'use client';

export function GlassOrbs() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Orb 1: Top Right - Cyan/Blue */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-icy-cyan-500/10 to-blue-600/10 blur-3xl animate-pulse duration-[10s]" />
      
      {/* Orb 2: Bottom Left - Emerald/Teal */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-emerald-500/10 to-teal-600/10 blur-3xl animate-pulse duration-[15s]" />
      
      {/* Orb 3: Center Floating - Purple/Indigo */}
      <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-indigo-500/5 to-purple-600/5 blur-2xl animate-spin-slow opacity-60" />

      {/* Grid Overlay for texture */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03] dark:opacity-[0.05]" />
    </div>
  );
}
