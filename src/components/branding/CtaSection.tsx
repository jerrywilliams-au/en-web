'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function CtaSection() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center min-h-[60vh]">
      {/* Background with Asset */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/branding/cta_background.png" 
          alt="Cosmic Background" 
          fill
          className="object-cover opacity-60 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-background/80 md:bg-background/60 backdrop-blur-sm" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Ready to <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">Launch</span>?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            The next cohort starts soon. Secure your spot in the Builder Bootcamp and stop building in silence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a 
              href="/apply"
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-bold text-xl shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:scale-[1.05] transition-all duration-300"
            >
              Apply to Cohort
            </a>
            
            <a 
              href="mailto:hello@jerrywilliams.au" 
              className="w-full sm:w-auto px-10 py-5 rounded-full glass-2 text-foreground font-bold text-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              Contact Team
            </a>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-sm text-muted-foreground/60"
          >
            Limited to 12 seats per cohort. Admission is rolling.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
