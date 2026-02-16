'use client';

import { Navbar } from '@/components/branding/Navbar';
import { LegalFooter } from '@/components/branding/LegalFooter';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const roles = [
  { value: '', label: 'Select your primary focus…' },
  { value: 'architect', label: 'AI Architect — I build systems' },
  { value: 'entrepreneur', label: 'AI Entrepreneur — I build businesses' },
  { value: 'ideator', label: 'Product Ideator — I design visions' },
  { value: 'enterprise', label: 'Enterprise Leader — I lead teams' },
  { value: 'other', label: 'Other — Something different' },
];

export default function ApplyPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    role: '',
    goals: '',
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    // Mock API call — replace with real endpoint
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSuccess(true);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero + Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
        {/* Background layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/branding/cta_background.png"
            alt=""
            fill
            className="object-cover opacity-40 dark:opacity-30 mix-blend-screen"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-[120px]" />

        <div className="relative z-10 container max-w-5xl mx-auto px-6">
          {/* Success State */}
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-lg mx-auto text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-tr from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-emerald-500/30">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold mb-4">You&apos;re on the list</h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                We&apos;ve reserved your spot. You&apos;ll receive an email when the next cohort opens with details on the interview process.
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-foreground/10 hover:bg-foreground/20 text-foreground font-medium transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </a>
            </motion.div>
          ) : (
            <>
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono tracking-widest uppercase mb-6">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
                  Limited to 12 seats per cohort
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
                  Join the <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">Waitlist</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                  Admission is selective. Tell us about yourself and what you&apos;re building — we&apos;ll reach out when the next cohort opens.
                </p>
              </motion.div>

              {/* Form Card */}
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto rounded-2xl border border-white/[0.08] dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl shadow-2xl shadow-black/5 dark:shadow-black/40 p-8 md:p-10 space-y-6"
              >
                {/* Accent bar */}
                <div className="h-[2px] -mt-8 md:-mt-10 -mx-8 md:-mx-10 mb-6 bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/80 ml-0.5">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ada Lovelace"
                      className="w-full px-4 py-3 rounded-xl bg-background/80 dark:bg-white/5 border border-black/[0.08] dark:border-white/[0.08] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/30 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/80 ml-0.5">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ada@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-background/80 dark:bg-white/5 border border-black/[0.08] dark:border-white/[0.08] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/30 transition-all"
                    />
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="space-y-1.5">
                  <label htmlFor="linkedin" className="text-sm font-medium text-foreground/80 ml-0.5">
                    LinkedIn / Portfolio <span className="text-muted-foreground/50">(optional)</span>
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/you"
                    className="w-full px-4 py-3 rounded-xl bg-background/80 dark:bg-white/5 border border-black/[0.08] dark:border-white/[0.08] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/30 transition-all"
                  />
                </div>

                {/* Role */}
                <div className="space-y-1.5">
                  <label htmlFor="role" className="text-sm font-medium text-foreground/80 ml-0.5">I identify mostly as…</label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background/80 dark:bg-white/5 border border-black/[0.08] dark:border-white/[0.08] text-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/30 transition-all appearance-none"
                  >
                    {roles.map(r => (
                      <option key={r.value} value={r.value} disabled={r.value === ''}>{r.label}</option>
                    ))}
                  </select>
                </div>

                {/* Goals */}
                <div className="space-y-1.5">
                  <label htmlFor="goals" className="text-sm font-medium text-foreground/80 ml-0.5">What are you looking to build?</label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={3}
                    value={formData.goals}
                    onChange={handleChange}
                    placeholder="I want to build a RAG-powered agent for…"
                    className="w-full px-4 py-3 rounded-xl bg-background/80 dark:bg-white/5 border border-black/[0.08] dark:border-white/[0.08] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/30 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.01] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2.5"
                >
                  {isLoading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Securing Your Spot…
                    </>
                  ) : (
                    <>
                      Join the Waitlist
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-[13px] text-center text-muted-foreground/60 pt-1">
                  By joining you agree to our{' '}
                  <a href="/privacy" className="underline hover:text-foreground transition-colors">Privacy Policy</a>
                  {' '}and{' '}
                  <a href="/terms" className="underline hover:text-foreground transition-colors">Terms of Service</a>.
                </p>
              </motion.form>
            </>
          )}
        </div>
      </section>

      <LegalFooter />
    </div>
  );
}
