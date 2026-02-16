'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function PillarsSection() {
  const pillars = [
    {
      title: 'Ideator',
      role: 'Visionary',
      desc: 'Bridging the gap between reality and possibility. AI-driven ideation & strategic roadmapping.',
      image: '/images/branding/pillar_ideator.png',
      color: 'text-cyan-400',
      border: 'hover:border-white/40',
      glowColor: '0 188 212',
      bar: 'bg-cyan-500'
    },
    {
      title: 'Entrepreneur',
      role: 'Builder',
      desc: 'Sustainable business models. ROI, scalability, and market fit. Turning tech into value.',
      image: '/images/branding/pillar_entrepreneur.png',
      color: 'text-emerald-400',
      border: 'hover:border-white/40',
      glowColor: '52 211 153',
      bar: 'bg-emerald-500'
    },
    {
      title: 'Architect',
      role: 'Engineer',
      desc: 'Technical excellence. Distributed systems, cloud infra, and optimizing inference pipelines.',
      image: '/images/branding/pillar_architect.png',
      color: 'text-indigo-400',
      border: 'hover:border-white/40',
      glowColor: '129 140 248',
      bar: 'bg-indigo-500'
    }
  ];

  return (
    <section id="pillars" className="py-32 relative overflow-hidden bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Three Pillars of <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">Mastery</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            An ecosystem designed for shipping.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`pillar-card group relative rounded-2xl border border-white/15 bg-card/50 backdrop-blur-sm transition-all duration-500 overflow-hidden ${pillar.border}`}
              style={{ '--glow': pillar.glowColor } as React.CSSProperties}
            >
              {/* Image Section — in normal flow, not overlapping */}
              <div className="relative h-52 w-full overflow-hidden opacity-90 group-hover:opacity-100 transition-all duration-500">
                 <Image 
                   src={pillar.image} 
                   alt={`${pillar.title} Abstract`} 
                   fill
                   className="object-cover object-center brightness-[1.25] contrast-[1.1] group-hover:brightness-[1.5] group-hover:scale-105 transition-all duration-700"
                 />
                 {/* Colored glow on hover */}
                 <div className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-b ${
                   pillar.title === 'Ideator' ? 'from-cyan-500/40 via-cyan-500/10' :
                   pillar.title === 'Entrepreneur' ? 'from-emerald-500/40 via-emerald-500/10' :
                   'from-indigo-500/40 via-indigo-500/10'
                 } to-transparent`} />
              </div>
              
              {/* Text Section — below the image */}
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-2">
                  <span className={`${pillar.color} drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]`}>{pillar.title}</span>
                </h3>
                <div className={`h-1 w-12 ${pillar.bar} mb-4 rounded-full shadow-[0_0_8px_currentColor]`} />
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
