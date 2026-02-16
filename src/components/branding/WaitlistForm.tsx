'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function WaitlistForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSuccess(true);
    // In a real app, we would POST the data here
  }

  if (isSuccess) {
    return (
      <div className="text-center p-8 glass-2 rounded-3xl animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-gradient-to-tr from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/20">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">You&apos;re on the list!</h3>
        <p className="text-muted-foreground mb-8">
          We&apos;ve reserved your spot. Watch your inbox for exclusive updates and early access invitations.
        </p>
        <button 
          onClick={() => router.push('/')}
          className="px-6 py-2 bg-foreground/10 hover:bg-foreground/20 text-foreground rounded-lg font-medium transition-colors"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 glass-2 p-8 md:p-10 rounded-3xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-icy-cyan-400 via-blue-500 to-purple-600" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium ml-1">Full Name</label>
          <input 
            type="text" 
            id="name" 
            required 
            className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-icy-cyan-500/50 focus:border-icy-cyan-500/50 outline-none transition-all placeholder:text-muted-foreground/50"
            placeholder="Ada Lovelace"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium ml-1">Email Address</label>
          <input 
            type="email" 
            id="email" 
            required 
            className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-icy-cyan-500/50 focus:border-icy-cyan-500/50 outline-none transition-all placeholder:text-muted-foreground/50"
            placeholder="ada@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="linkedin" className="text-sm font-medium ml-1">LinkedIn / Website (Optional)</label>
        <input 
          type="text" 
          id="linkedin" 
          className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-icy-cyan-500/50 focus:border-icy-cyan-500/50 outline-none transition-all placeholder:text-muted-foreground/50"
          placeholder="linkedin.com/in/ada"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="role" className="text-sm font-medium ml-1">I identify mostly as...</label>
        <select 
          id="role" 
          className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-icy-cyan-500/50 focus:border-icy-cyan-500/50 outline-none transition-all appearance-none"
        >
          <option value="architect">AI Architect (Technical)</option>
          <option value="entrepreneur">AI Entrepreneur (Business)</option>
          <option value="ideator">product Ideator (Visionary)</option>
          <option value="enterprise">Enterprise Leader</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="goals" className="text-sm font-medium ml-1">What are you looking to build?</label>
        <textarea 
          id="goals" 
          rows={3}
          className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-icy-cyan-500/50 focus:border-icy-cyan-500/50 outline-none transition-all placeholder:text-muted-foreground/50 resize-none"
          placeholder="I want to build a RAG agent for..."
        />
      </div>

      <button 
        type="submit" 
        disabled={isLoading}
        className="w-full py-4 text-lg font-bold text-white bg-black dark:bg-gradient-to-r dark:from-icy-cyan-600 dark:to-emerald-600 rounded-xl hover:scale-[1.02] shadow-lg shadow-ice-cyan-500/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
      >
        {isLoading ? (
          <>
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Securing Spot...
          </>
        ) : (
          <>
            Join Exclusive Waitlist
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>

      <p className="text-xs text-center text-muted-foreground pt-2">
        Limited spots available for the Beta cohort.
      </p>
    </form>
  );
}
