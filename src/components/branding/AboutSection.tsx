'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Full-section ambient backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 animate-float">
          <Image 
            src="/images/branding/about_north_star.png" 
            alt="" 
            fill 
            className="object-contain"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full animate-pulse-glow" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Rotating outer ring */}
            <div className="absolute -inset-6 flex items-center justify-center pointer-events-none">
              <div className="w-full h-full rounded-2xl border border-dashed border-indigo-500/20 animate-spin-slow" />
            </div>
            
            {/* Glow behind photo */}
            <div className="absolute inset-0 bg-indigo-500/10 rounded-2xl blur-3xl animate-pulse-glow" />
            
            <div className="aspect-square relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
              <Image 
                src="/images/branding/about_page_1771128267546.png" 
                alt="Jerry Williams" 
                fill
                className="object-cover"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
               <div className="absolute bottom-6 left-6 right-6">
                 <div className="text-white font-bold text-xl">Jerry Williams</div>
                 <div className="text-indigo-400 text-sm font-mono">Ideator | Entrepreneur | Architect</div>
               </div>
            </div>
            
            {/* Floating particles */}
            {[...Array(4)].map((_, i) => (
              <motion.div 
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-indigo-400/60"
                style={{
                  top: `${15 + i * 22}%`,
                  left: i % 2 === 0 ? '-3%' : '103%',
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.7,
                }}
              />
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-sm font-bold tracking-widest text-indigo-400 uppercase mb-2">
              About the Mission
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Design Once. <br />
              <span className="animate-gradient-shift bg-[length:200%_auto] bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Ship Forever.</span>
            </h3>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              I built this ecosystem because I was tired of seeing brilliant founders get stuck in &quot;tutorial hell&quot; or over-engineering their MVP.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My mission is to equip neurodivergent and solo founders with the <strong>exact</strong> iterative spiral loops, mental models, and production-ready code they need to ship world-class software without the burnout.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-white mb-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">10+</div>
                <div className="text-sm text-muted-foreground">Years Shipping SaaS</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-white mb-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">100%</div>
                <div className="text-sm text-muted-foreground">Signal, No Noise</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
