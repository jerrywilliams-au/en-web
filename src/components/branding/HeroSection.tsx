import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Link from 'next/link';

interface HeroSectionProps {
  lightSrc?: string; // Kept for compatibility but unused
  darkSrc?: string;
}

export function HeroSection({ lightSrc, darkSrc }: HeroSectionProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Light Theme Background */}
      <div className="absolute inset-0 block dark:hidden">
        <motion.div
           initial={{ scale: 1 }}
           animate={{ scale: 1.05 }}
           transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
           className="w-full h-full"
        >
          <Image
            src="/images/branding/hero/hero_light_16x9.png"
            alt="Hero Background Light"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </motion.div>
        {/* Subtle overlay for text readability in light mode */}
        <div className="absolute inset-0 bg-white/30" />
      </div>

      {/* Dark Theme Background */}
      <div className="absolute inset-0 hidden dark:block">
        <motion.div
           initial={{ scale: 1 }}
           animate={{ scale: 1.05 }}
           transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
           className="w-full h-full"
        >
          <Image
            src="/images/branding/hero/hero_dark_16x9.png"
            alt="Hero Background Dark"
            fill
            className="object-cover opacity-90"
            priority
            quality={100}
          />
        </motion.div>
        {/* Subtle overlay for text readability in dark mode */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 container max-w-7xl mx-auto px-6 text-center">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
         >
           <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
             Turn your idea into a <span className="text-cyan-500 dark:text-cyan-400">real product</span>
           </h1>
           <p className="text-xl md:text-2xl text-gray-600 dark:text-white/80 mb-8 max-w-2xl mx-auto">
             The Neuro-Symbiotic Operating System for Solo Founders.
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Button asChild size="lg" className="rounded-full px-8 text-lg font-semibold bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg shadow-cyan-500/20 dark:bg-cyan-500 dark:hover:bg-cyan-600">
               <Link href="/apply">
                 Apply Now <ArrowRight className="ml-2 w-5 h-5" />
               </Link>
             </Button>
             <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-lg border-gray-300 hover:bg-gray-100 text-gray-900 dark:border-white/20 dark:hover:bg-white/10 dark:text-white backdrop-blur-sm">
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
