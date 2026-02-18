export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 font-sans">
      <nav className="border-b border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 py-4 flex items-center justify-between">
         <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
             <span className="text-white dark:text-black font-bold text-xs">JW</span>
           </div>
           <span className="font-semibold text-sm tracking-wide">Admin Control</span>
         </div>
         <a href="/" target="_blank" className="text-xs text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
            View Live Site &rarr;
         </a>
      </nav>
      <main className="container max-w-3xl mx-auto py-10 px-6">
        {children}
      </main>
    </div>
  );
}
