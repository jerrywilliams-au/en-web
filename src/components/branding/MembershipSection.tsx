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

                {/* Antigravity Card */}
                <div className="aspect-square relative rounded-3xl overflow-hidden glass-1 border border-white/10 group cursor-pointer">
                   <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0d1117] to-[#0a0a1a]" />
                   
                   {/* Orbital ring */}
                   <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-[70%] h-[70%] rounded-full border border-cyan-500/20 animate-spin-slow" />
                     <div className="absolute w-[50%] h-[50%] rounded-full border border-cyan-400/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
                   </div>

                   {/* Floating core */}
                   <div className="absolute inset-0 flex items-center justify-center">
                     <div className="relative animate-float">
                       <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-400 to-emerald-400 shadow-[0_0_40px_rgba(34,211,238,0.4)] rotate-45 group-hover:rotate-[225deg] transition-transform duration-700" />
                       <div className="absolute inset-0 w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-400/30 to-emerald-400/30 rotate-45 blur-md" />
                     </div>
                   </div>

                   {/* Label */}
                   <div className="absolute bottom-4 inset-x-0 text-center">
                     <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-cyan-400/70">Antigravity</span>
                   </div>

                   {/* Particle dots */}
                   <div className="absolute top-[20%] left-[25%] w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse" />
                   <div className="absolute top-[35%] right-[20%] w-1.5 h-1.5 bg-emerald-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                   <div className="absolute bottom-[30%] left-[18%] w-1 h-1 bg-cyan-300/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4 pt-12"
              >
                {/* Nano Banana Card */}
                <div className="aspect-square relative rounded-3xl overflow-hidden glass-1 border border-white/10 group cursor-pointer">
                   <div className="absolute inset-0 bg-gradient-to-bl from-[#0f0a1e] via-[#120d1a] to-[#0a0a1a]" />

                   {/* Neural mesh pattern */}
                   <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                     <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute inset-0 opacity-30">
                       <defs>
                         <linearGradient id="nb-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                           <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
                           <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3" />
                         </linearGradient>
                       </defs>
                       {/* Hexagonal neural lines */}
                       <line x1="30" y1="20" x2="70" y2="20" stroke="url(#nb-grad)" strokeWidth="0.5" />
                       <line x1="70" y1="20" x2="85" y2="50" stroke="url(#nb-grad)" strokeWidth="0.5" />
                       <line x1="85" y1="50" x2="70" y2="80" stroke="url(#nb-grad)" strokeWidth="0.5" />
                       <line x1="70" y1="80" x2="30" y2="80" stroke="url(#nb-grad)" strokeWidth="0.5" />
                       <line x1="30" y1="80" x2="15" y2="50" stroke="url(#nb-grad)" strokeWidth="0.5" />
                       <line x1="15" y1="50" x2="30" y2="20" stroke="url(#nb-grad)" strokeWidth="0.5" />
                       {/* Inner connections */}
                       <line x1="30" y1="20" x2="50" y2="50" stroke="url(#nb-grad)" strokeWidth="0.3" />
                       <line x1="70" y1="20" x2="50" y2="50" stroke="url(#nb-grad)" strokeWidth="0.3" />
                       <line x1="85" y1="50" x2="50" y2="50" stroke="url(#nb-grad)" strokeWidth="0.3" />
                       <line x1="70" y1="80" x2="50" y2="50" stroke="url(#nb-grad)" strokeWidth="0.3" />
                       <line x1="30" y1="80" x2="50" y2="50" stroke="url(#nb-grad)" strokeWidth="0.3" />
                       <line x1="15" y1="50" x2="50" y2="50" stroke="url(#nb-grad)" strokeWidth="0.3" />
                       {/* Node dots */}
                       <circle cx="50" cy="50" r="2" fill="#a855f7" opacity="0.8" />
                       <circle cx="30" cy="20" r="1.5" fill="#818cf8" opacity="0.6" />
                       <circle cx="70" cy="20" r="1.5" fill="#818cf8" opacity="0.6" />
                       <circle cx="85" cy="50" r="1.5" fill="#818cf8" opacity="0.6" />
                       <circle cx="70" cy="80" r="1.5" fill="#818cf8" opacity="0.6" />
                       <circle cx="30" cy="80" r="1.5" fill="#818cf8" opacity="0.6" />
                       <circle cx="15" cy="50" r="1.5" fill="#818cf8" opacity="0.6" />
                     </svg>
                   </div>

                   {/* Central nano icon */}
                   <div className="absolute inset-0 flex items-center justify-center">
                     <div className="relative">
                       <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 shadow-[0_0_30px_rgba(168,85,247,0.4)] group-hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-shadow duration-500 flex items-center justify-center">
                         <div className="w-4 h-4 border-2 border-white/80 rounded-full" />
                       </div>
                       {/* Pulsing halo */}
                       <div className="absolute -inset-3 rounded-full border border-purple-500/30 animate-ping" style={{ animationDuration: '3s' }} />
                     </div>
                   </div>

                   {/* Label */}
                   <div className="absolute bottom-4 inset-x-0 text-center">
                     <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-purple-400/70">Nano Banana</span>
                   </div>

                   {/* Ambient particles */}
                   <div className="absolute top-[25%] right-[22%] w-1 h-1 bg-purple-400/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                   <div className="absolute bottom-[25%] left-[22%] w-1.5 h-1.5 bg-indigo-400/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
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
              Your Inner <br />
              <span className="text-white">Circle.</span>
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              This isn&apos;t a course you watch. It&apos;s a curated cohort of builders with skin in the game. We select for ambition, commitment, and a real idea worth shipping.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Application Review — Share your idea & background',
                'Live 1:1 Interview — We meet face to face',
                'Cohort Placement — Join your builder tribe',
                'Lifetime Platform Access — Your command center, forever'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-foreground/80">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <button className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/20">
              Begin Your Application
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
