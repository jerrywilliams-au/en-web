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
      border: 'group-hover:border-cyan-500/50',
      shadow: 'group-hover:shadow-cyan-500/20',
      bar: 'bg-cyan-500'
    },
    {
      title: 'Entrepreneur',
      role: 'Builder',
      desc: 'Sustainable business models. ROI, scalability, and market fit. Turning tech into value.',
      image: '/images/branding/pillar_entrepreneur.png',
      color: 'text-emerald-400',
      border: 'group-hover:border-emerald-500/50',
      shadow: 'group-hover:shadow-emerald-500/20',
      bar: 'bg-emerald-500'
    },
    {
      title: 'Architect',
      role: 'Engineer',
      desc: 'Technical excellence. Distributed systems, cloud infra, and optimizing inference pipelines.',
      image: '/images/branding/pillar_architect.png',
      color: 'text-indigo-400',
      border: 'group-hover:border-indigo-500/50',
      shadow: 'group-hover:shadow-indigo-500/20',
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
              className={`group relative p-8 rounded-2xl glass-1 glass-hover ${pillar.border} transition-all duration-300 hover:shadow-2xl ${pillar.shadow} overflow-hidden`}
            >
              {/* Cinematic Header Image */}
              <div className="absolute top-0 left-0 right-0 h-48 w-full opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                 <Image 
                   src={pillar.image} 
                   alt={`${pillar.title} Abstract`} 
                   fill
                   className="object-cover object-top"
                 />
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
              </div>
              
              <div className="relative z-10 mt-32">
                <h3 className="text-3xl font-bold mb-2 flex items-center gap-3">
                  <span className={`${pillar.color} drop-shadow-md`}>{pillar.title}</span>
                </h3>
                <div className={`h-1 w-12 ${pillar.bar} mb-6 rounded-full`} />
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
