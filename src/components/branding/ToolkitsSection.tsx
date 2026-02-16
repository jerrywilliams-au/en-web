'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function ToolkitsSection() {
  const toolkits = [
    { name: 'Signal', icon: '/images/branding/icon_signal.png', desc: 'Market Research & Validation' },
    { name: 'Legal', icon: '/images/branding/icon_legal.png', desc: 'Corp Incorporation & Contracts' },
    { name: 'Roadmap', icon: '/images/branding/icon_roadmap.png', desc: 'Strategic Planning' },
    { name: 'Repo', icon: '/images/branding/icon_repo.png', desc: 'Project Structure & CI/CD' },
    { name: 'Auth', icon: '/images/branding/icon_auth.png', desc: 'User Management & Security' },
    { name: 'Billing', icon: '/images/branding/icon_billing.png', desc: 'Stripe Integration' },
    { name: 'Data', icon: '/images/branding/icon_data.png', desc: 'Database & Analytics' },
    { name: 'AI', icon: '/images/branding/icon_ai.png', desc: 'LLM Integration & Agents' },
    { name: 'Deploy', icon: '/images/branding/icon_deploy.png', desc: 'Production Infrastructure' },
  ];

  return (
    <section id="toolkits" className="py-24 relative overflow-hidden bg-background bg-nano-pattern">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Ready-to-use <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">Toolkits</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Everything you need to ship. Nothing you don&apos;t.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolkits.map((kit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-6 rounded-2xl glass-1 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:bg-white/5 flex items-center gap-4 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="w-16 h-16 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20 group-hover:border-cyan-500 transition-all relative overflow-hidden">
                 <Image src={kit.icon} alt={kit.name} fill className="object-contain p-3 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 group-hover:text-cyan-400 transition-colors">{kit.name}</h3>
                <p className="text-sm text-muted-foreground leading-snug">{kit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
