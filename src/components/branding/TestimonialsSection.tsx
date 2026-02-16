'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Founder, Nexus AI',
      quote: 'The Builder Bootcamp forced me to stop over-engineering and start shipping. I went from zero to revenue in 6 weeks.',
      image: '/images/branding/portrait_alex.png'
    },
    {
      name: 'Sam Rivera',
      role: 'Indie Hacker',
      quote: 'I used to get stuck in "tutorial hell." This program gave me the structure and accountability to actually launch.',
      image: '/images/branding/portrait_sam.png'
    },
    {
      name: 'Sarah Kim',
      role: 'Product Designer',
      quote: 'The Design System and UI Kits alone are worth the price. My app looks premium without me spending hours on CSS.',
      image: '/images/branding/portrait_sarah.png'
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Builders <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">Shipping Real Products</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl glass-1 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
               <div className="relative w-20 h-20 mb-6 rounded-2xl overflow-hidden border-2 border-cyan-500/20 shrink-0 mx-auto md:mx-0">
                 <Image 
                   src={t.image} 
                   alt={t.name}
                   fill
                   className="object-cover"
                 />
               </div>
              <p className="text-lg text-muted-foreground mb-6 italic flex-grow leading-relaxed">&quot;{t.quote}&quot;</p>
              <div>
                <h4 className="font-bold text-foreground text-lg">{t.name}</h4>
                <p className="text-sm text-cyan-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
