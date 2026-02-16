'use client';

import Image from 'next/image';
import { useTheme } from '@/providers/ThemeProvider';
import { useEffect, useState } from 'react';

export function ThemeAwareLogo() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative w-14 h-14">
         {/* Placeholder to prevent layout shift */}
      </div>
    );
  }

  const isDark = theme === 'dark' || resolvedTheme === 'dark';

  return (
    <div className="relative w-14 h-14">
       <Image 
         src="/images/branding/monogram-glass.png" 
         alt="JW Monogram" 
         fill 
         className={`object-contain transition-all duration-300 ${
           isDark 
             ? 'drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]' 
             : 'filter brightness-0 saturate-100 invert-0 opacity-80' 
             /* In light mode, simple glass might be too white. 
                If the base image is white/transparent, 'brightness-0' makes it black. 
                Adjust filters to make it visible on white. */
         }`}
       />
       {/* 
         Fallback for Light Mode if simple filter isn't enough:
         If the monogram is white, 'invert' makes it black.
       */}
       {!isDark && (
          <Image 
            src="/images/branding/monogram-glass.png" 
            alt="JW Monogram Dark" 
            fill 
            className="object-contain invert opacity-90"
          />
       )}
    </div>
  );
}
