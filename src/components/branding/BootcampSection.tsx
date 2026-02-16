'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export function BootcampSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const curriculum = [
    { title: 'Foundation', desc: 'Setup, Mindset, & Environment' },
    { title: 'Ideation', desc: 'Signal Discovery & Problem Selection' },
    { title: 'Validation', desc: 'The Wedge & Market Testing' },
    { title: 'Architecture', desc: 'Stack Decisions & Data Modeling' },
    { title: 'Development', desc: 'Building the Vertical Slice' },
    { title: 'Deployment', desc: 'CI/CD & Production Infrastructure' },
    { title: 'Growth', desc: 'Launch Strategy & Feedback Loops' }
  ];

  return (
    <section id="bootcamp" ref={containerRef} className="py-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Background visual */}
      {/* Background visual */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-50" />
        <div className="absolute inset-0 bg-[url('/images/utility/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div style={{ opacity, y }} className="space-y-8">
            <h2 className="text-sm font-bold tracking-widest text-cyan-500 uppercase">
              The Curriculum
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold leading-tight">
              7 Vertical <br />
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
                Slices of Mastery
              </span>
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              We don&apos;t just teach code. We teach you how to architect, build, and ship a complete product from scratch using the <strong>Canonical Loop</strong>.
            </p>
            
            <div className="pt-8">
              <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-lg font-medium backdrop-blur-md">
                View Full Syllabus
              </button>
            </div>
          </motion.div>

          <div className="relative">
            <div className="space-y-4">
              {curriculum.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-6 p-4 rounded-xl glass-1 hover:glass-2 border border-white/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20 group-hover:border-cyan-500 group-hover:bg-cyan-500/20 transition-all font-mono text-cyan-500 font-bold">
                    0{index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
