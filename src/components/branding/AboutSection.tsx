'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden glass-2 border border-white/10 shadow-2xl">
              <Image 
                src="/images/branding/about_page_1771128267546.png" 
                alt="Jerry Williams" 
                fill
                className="object-cover"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
               <div className="absolute bottom-6 left-6 right-6">
                 <div className="text-white font-bold text-xl">Jerry Williams</div>
                 <div className="text-cyan-400 text-sm font-mono">Founder & Architect</div>
               </div>
            </div>
            
            {/* Background Element */}
            <div className="absolute -top-10 -left-10 w-full h-full border border-dashed border-white/10 rounded-2xl -z-10" />
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
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Ship Forever.</span>
            </h3>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              I built this ecosystem because I was tired of seeing brilliant founders get stuck in "tutorial hell" or over-engineering their MVP.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My mission is to equip neurodivergent and solo founders with the <strong>exact</strong> iterative spiral loops, mental models, and production-ready code they need to ship world-class software without the burnout.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <div className="text-3xl font-bold text-white mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Years Shipping SaaS</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Signal, No Noise</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
