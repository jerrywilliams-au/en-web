'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function MembershipSection() {
  return (
    <section id="membership" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-black/20">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="aspect-[4/5] relative rounded-3xl overflow-hidden fix-safari-rounding glass-1 border border-white/10 shadow-xl shadow-cyan-500/5">
                   <Image src="/images/branding/portrait_member_male.png" alt="Community Member" fill className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transition-transform" />
                </div>
                <div className="aspect-square relative rounded-3xl overflow-hidden glass-1 border border-white/10">
                   {/* Placeholder for resource thumbnail */}
                   <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center">
                     <span className="font-mono text-cyan-500 text-4xl">Aa</span>
                   </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4 pt-12"
              >
                <div className="aspect-square relative rounded-3xl overflow-hidden glass-1 border border-white/10">
                   {/* Placeholder for template thumbnail */}
                    <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                     <span className="font-mono text-indigo-500 text-4xl">{`{ }`}</span>
                   </div>
                </div>
                <div className="aspect-[4/5] relative rounded-3xl overflow-hidden fix-safari-rounding glass-1 border border-white/10 shadow-xl shadow-purple-500/5">
                   <Image src="/images/branding/portrait_member_female.png" alt="Community Member" fill className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transition-transform" />
                </div>
              </motion.div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/10 blur-[100px] -z-10" />
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-sm font-bold tracking-widest text-emerald-500 uppercase mb-4">
              Membership
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Never Build <br />
              <span className="text-white">Alone Again.</span>
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Join a high-signal community of builders. Get access to our resource library, office hours, and the shared knowledge of peer founders.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Weekly Office Hours with Jerry',
                'Access to Private Discord',
                'Library of Notion & Figma Templates',
                'Code Snippets & Starter Repos'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-foreground/80">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <button className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/20">
              Join the Community
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
