'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  intensity?: number;
  priority?: boolean;
}

export function ParallaxBG({ 
  src, // Deprecated, but kept for compatibility logic if needed
  lightSrc,
  darkSrc,
  alt, 
  className = '', 
  intensity = 0.5,
  priority = false
}: ParallaxImageProps & { lightSrc?: string; darkSrc?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  // Calculate parallax offset based on intensity
  const yOffset = intensity * 100; // -100% to 100%
  const y = useTransform(scrollYProgress, [0, 1], [-yOffset, yOffset]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  
  // Usage: if lightSrc/darkSrc provided, use them. Else fallback to src.
  const effectiveLight = lightSrc || src;
  const effectiveDark = darkSrc || src;

  return (
    <div ref={ref} className={`absolute inset-0 z-0 bg-background ${className}`}>
      <motion.div style={{ y, scale }} className="absolute inset-0 w-full h-full">
         {/* Light Mode Image */}
         <div className="absolute inset-0 w-full h-full dark:hidden">
            <Image
              src={effectiveLight}
              alt={alt}
              fill
              className="object-cover opacity-60"
              priority={priority}
            />
         </div>
         {/* Dark Mode Image */}
         <div className="absolute inset-0 w-full h-full hidden dark:block">
            <Image
              src={effectiveDark}
              alt={alt}
              fill
               // "Black and shades" usually implies slightly different opacity or blending
              className="object-cover opacity-60"
              priority={priority}
            />
         </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </motion.div>
    </div>
  );
}
