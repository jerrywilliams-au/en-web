'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export function PlatformSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0.2, 0.8], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <section id="platform" ref={containerRef} className="py-32 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            The <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">Platform</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Your AI-powered command center. Track your journey, join live sessions, and ship real products — all in one place.
          </motion.p>
        </div>

        <motion.div 
          style={{ scale, opacity }}
          className="relative aspect-video w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden fix-safari-rounding glass-2 border border-white/10 shadow-2xl shadow-cyan-500/10 group"
        >
           <Image
             src="/images/branding/platform_dashboard_premium.png"
             alt="Platform Dashboard"
             fill
             className="object-cover transition-transform duration-700 group-hover:scale-105"
           />
           
           {/* Overlay UI elements for "Active" feel */}
           <div className="absolute top-4 left-4 right-4 h-8 bg-black/40 rounded-lg flex items-center px-4 gap-2 backdrop-blur-sm">
             <div className="flex gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500/50" />
               <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
               <div className="w-3 h-3 rounded-full bg-green-500/50" />
             </div>
             <div className="px-3 py-1 bg-white/5 rounded text-xs text-muted-foreground font-mono ml-4 w-64">
               jerrywilliams.au/dashboard
             </div>
           </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          {[
            { title: 'Hands-On Build Sessions', desc: 'Live 1:1 and group sessions. Build your real product alongside an experienced architect.' },
            { title: 'AI-Powered Assistance', desc: 'Your personal AI co-pilot integrated into every stage of the iterative spiral loop.' },
            { title: 'Selective Admission', desc: 'We review every applicant. Share your idea, your background — and meet us face to face.' }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="p-6 rounded-2xl glass-1 border border-white/5 text-center hover:bg-white/5 transition-colors"
            >
              <h3 className="font-bold text-lg mb-2 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
