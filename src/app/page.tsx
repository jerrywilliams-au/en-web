'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { WaitlistForm } from '@/components/branding/WaitlistForm';
import { ThemeAwareLogo } from '@/components/branding/ThemeAwareLogo';

export default function ComingSoonPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white selection:bg-cyan-500/30">
      
      {/* Background Layer - Cinematic Dark Hero */}
      <div className="absolute inset-0 z-0">
        <motion.div
           initial={{ scale: 1.1 }}
           animate={{ scale: 1.0 }}
           transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
           className="relative w-full h-full"
        >
          <Image
            src="/images/branding/hero/hero_dark_calculated_v7.png"
            alt="Cinematic Background"
            fill
            className="object-cover opacity-60"
            priority
            quality={100}
          />
        </motion.div>
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 pointer-events-none" />
        <div className="absolute inset-0 bg-nano-pattern opacity-20 pointer-events-none" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container max-w-4xl mx-auto px-6 py-12 flex flex-col items-center text-center">
        
        {/* Brand Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <ThemeAwareLogo />
            <span className="text-2xl font-semibold tracking-wide text-white/90">jerrywilliams.au</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10 space-y-4"
        >
           <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-900/10 backdrop-blur-md mb-4">
             <span className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase">
               System Initializing
             </span>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 leading-tight drop-shadow-2xl">
             Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Extraordinary</span><br />
             Is Being Built.
           </h1>
           
           <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
             We are currently upgrading the **Neuro-Symbiotic Operating System**. 
             Secure your early access spot below.
           </p>
        </motion.div>

        {/* Waitlist Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-md"
        >
           <div className="glass-2 p-1 rounded-3xl shadow-2xl shadow-cyan-900/20">
             <div className="bg-black/40 backdrop-blur-xl rounded-[1.3rem] overflow-hidden">
               <WaitlistForm />
             </div>
           </div>
        </motion.div>

        {/* Footer Info */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.0, duration: 1 }}
           className="mt-16 text-sm text-gray-600 font-mono"
        >
          <p>SYSTEM STATUS: <span className="text-emerald-500">OPTIMIZNG</span></p>
          <p className="mt-2 text-xs opacity-50">&copy; {new Date().getFullYear()} Jerry Williams. All rights reserved.</p>
        </motion.div>

      </div>
    </main>
  );
}
