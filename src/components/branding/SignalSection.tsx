'use client';


import Image from 'next/image';
import { motion } from 'framer-motion';

export function SignalSection() {


  return (
    <section id="signal" className="py-32 relative overflow-hidden bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content - Staged Reveal */}
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-4"
            >
              The Philosophy
            </motion.h2>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-8"
            >
              Find Your <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">Wedge</span>.
            </motion.h3>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ delay: 0.2 }}
               className="text-xl text-muted-foreground leading-relaxed mb-10 space-y-6"
            >
              <p>
                Most founders fail because they try to build the "Empire" first. They drown in complexity before they find signal.
              </p>
              <p className="text-foreground border-l-2 border-cyan-500 pl-6">
                We teach you to find the <strong>Wedge</strong>—the smallest, most valuable sliver of your product that solves an acute pain point <em>today</em>.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {[
                 { title: 'Laser Focus', desc: 'Ignore the noise. Build only for your first 10 customers.', icon: '/images/branding/icon_focus.png' },
                 { title: 'Rapid Validation', desc: 'Test your hypothesis in days, not months.', icon: '/images/branding/icon_speed.png' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="flex gap-4 p-4 rounded-xl glass-1 border border-white/5 hover:border-cyan-500/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-colors relative">
                     <Image src={item.icon} alt={item.title} width={32} height={32} className="object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Visual Abstract - Animated Slide In */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] w-full flex items-center justify-center"
          >
             {/* Background Glow */}
             <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] -z-10" />
             
             {/* 3D Wedge Image */}
             <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden fix-safari-rounding shadow-2xl shadow-cyan-500/20 border border-white/5">
                <Image 
                  src="/images/branding/signal_wedge.png" 
                  alt="The Wedge Strategy" 
                  fill
                  className="object-contain p-8 hover:scale-105 transition-transform duration-700"
                />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
