'use client';

import Link from 'next/link';
import Image from 'next/image';

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* SOTA Glass Card - Strict Consistency with Hero/Vision */}
        <div className="relative max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl glass-outline-gradient backdrop-blur-md bg-white/20 dark:bg-black/20 flex flex-col items-center text-center group">
           
           {/* High-Fidelity Crystalline Background (Contained) */}
           <div className="absolute inset-0 z-0">
              <Image 
                src="/images/branding/pricing-ascend-sota.png" 
                alt="Ascension Crystal" 
                fill
                className="object-cover opacity-100 dark:opacity-80 scale-100 group-hover:scale-105 transition-transform duration-[2s]"
                priority
              />
              {/* Heavy Overlay for Text Readability */}
              <div className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent" />
           </div>

           {/* Grid Pattern Overlay */}
           <div className="absolute inset-0 bg-[url('/images/ui-grid.svg')] opacity-10 z-0 bg-repeat mix-blend-overlay" />

           {/* Content Layer */}
           <div className="relative z-10 p-12 md:p-24 w-full flex flex-col items-center">
             
             {/* Badge */}
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 relative group overflow-hidden border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase">
                  System Architecture
                </span>
             </div>

             {/* Main Headline */}
             <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-6 drop-shadow-xl">
               <span className="block text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/70 pb-2">
                 ASCEND TO
               </span>
               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500">
                 THE NEXT TIER
               </span>
             </h2>

             <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed font-medium">
               The definitive platform for AI Architects and High-Scale Entrepreneurs. 
               <span className="block mt-2 opacity-80">Membership tiers opening 2026.</span>
             </p>

             {/* Interactive Waitlist Input (Premium) */}
             <WaitlistForm />

             {/* Footer Indicator */}
             <div className="mt-12 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono opacity-60">
                <span className="w-1 h-1 rounded-full bg-emerald-500" />
                <span>Encrypted • Secure • Priority</span>
             </div>

           </div>
        </div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { useWaitlist } from '@/hooks/useWaitlist';

function WaitlistForm() {
  const [email, setEmail] = useState('');
  const { submit, isLoading, isSuccess, error } = useWaitlist();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    submit(email);
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-md p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md flex flex-col items-center animate-in fade-in zoom-in duration-300">
        <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-foreground">You&apos;re on the list!</h3>
        <p className="text-sm text-muted-foreground">We&apos;ll notify you when spots open up.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md relative group/input">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full opacity-30 group-hover/input:opacity-60 blur transition duration-500" />
      <form onSubmit={handleSubmit} className="relative flex items-center p-1.5 bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-full shadow-2xl overflow-hidden focus-within:border-cyan-500/50 transition-colors">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 bg-transparent border-none text-foreground placeholder-muted-foreground px-6 py-3 focus:outline-none text-sm font-medium disabled:opacity-50"
            disabled={isLoading}
            required
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="px-8 py-3 rounded-full bg-foreground text-background font-bold text-sm tracking-wide hover:scale-105 active:scale-95 transition-all shadow-lg disabled:opacity-80 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                <span>JOINING...</span>
              </>
            ) : (
              'NOTIFY ME'
            )}
          </button>
      </form>
      {error && (
        <p className="absolute -bottom-8 left-0 w-full text-center text-xs font-bold text-red-500 animate-in slide-in-from-top-2">
          {error}
        </p>
      )}
    </div>
  );
}
