'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import { HeroBackgroundCarousel } from './HeroBackgroundCarousel';

interface HeroSectionProps {
  lightSrc?: string; // Kept for compatibility but unused
  darkSrc?: string;
}

export function HeroSection({ lightSrc, darkSrc }: HeroSectionProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Cinematic Background Carousel */}
      <HeroBackgroundCarousel />
      
      <div className="relative z-10 container max-w-7xl mx-auto px-6 text-center">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
         >
           <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
             Turn your idea into a <span className="text-cyan-400">real product</span>
           </h1>
           <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
             The Neuro-Symbiotic Operating System for Solo Founders.
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Button asChild size="lg" className="rounded-full px-8 text-lg font-semibold bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/20">
               <Link href="/apply">
                 Apply Now <ArrowRight className="ml-2 w-5 h-5" />
               </Link>
             </Button>
             <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-lg border-white/20 hover:bg-white/10 hover:text-white backdrop-blur-sm">
               <Link href="/#bootcamp">
                 View Curriculum <PlayCircle className="ml-2 w-5 h-5" />
               </Link>
             </Button>
           </div>
         </motion.div>
      </div>
    </div>
  );
}
