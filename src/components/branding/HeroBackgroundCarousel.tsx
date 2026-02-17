'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const heroImages = [
  {
    src: '/images/branding/hero/hero_filter.png',
    alt: 'Eliminating Noise: Crystalline Prism Filter',
    label: 'Eliminating Noise'
  },
  {
    src: '/images/branding/hero/hero_path.png',
    alt: 'Focusing on Signals: High-Clarity Beam',
    label: 'Focusing on Signals'
  },
  {
    src: '/images/branding/hero/hero_core.png',
    alt: 'Peak Strength: Architectural Core',
    label: 'Peak Strength'
  }
];

export function HeroBackgroundCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); // 6 seconds per slide

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: 1.5, ease: 'easeInOut' },
            scale: { duration: 8, ease: 'linear' } 
          }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={heroImages[currentIndex].src}
            alt={heroImages[currentIndex].alt}
            fill
            className="object-cover opacity-80"
            priority={true}
            quality={100}
          />
          {/* Subtle overlay gradient to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Optional: Status Indicators (minimal) */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-20">
        {heroImages.map((_, idx) => (
          <div 
            key={idx}
            className={`h-1 rounded-full transition-all duration-500 ${
              idx === currentIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
