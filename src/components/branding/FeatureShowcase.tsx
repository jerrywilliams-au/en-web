'use client';

import Image from 'next/image';
import Link from 'next/link';

export function FeatureShowcase() {
  return (
    <section id="platform" className="py-24 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Dual Advantage</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Why just learn the theory? We give you the keys to the production environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Feature 1: The Academy */}
          <div className="group relative p-8 rounded-3xl glass-1 glass-hover hover:glass-2 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 -mr-16 -mt-16 opacity-10 group-hover:opacity-40 transition-opacity duration-500">
               <Image 
                 src="/images/branding/icon-bulb.png" 
                 alt="Academy Abstract" 
                 fill
                 className="object-contain"
               />
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-orange-500/10 to-amber-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider rounded-full border border-orange-500/20">
                  The Knowledge
                </span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Architectural Academy</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Curated learning paths based on your personalized learning style. 
                Move from "Ideator" to "Architect" with structured modules on RAG, Agents, and Scalable Systems.
              </p>

              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Personalized Learning Style Access",
                  "Deep Dives: Vectors, Embeddings, LLMs",
                  "Pattern Library & Reference Architectures",
                  "Weekly Expert Q&A Sessions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8 border-t border-border/10">
                <Link href="/academy" className="text-orange-600 dark:text-orange-400 font-bold hover:underline flex items-center gap-2 group-hover:gap-3 transition-all">
                  Example Curriculum
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Feature 2: The Platform */}
          <div className="group relative p-8 rounded-3xl glass-1 hover:glass-2 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 -mr-16 -mt-16 opacity-10 group-hover:opacity-40 transition-opacity duration-500">
               <Image 
                 src="/images/branding/icon-robot.png" 
                 alt="Platform Abstract" 
                 fill
                 className="object-contain"
               />
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-icy-cyan-500/10 to-blue-600/10 text-icy-cyan-600 dark:text-icy-cyan-400 text-xs font-bold uppercase tracking-wider rounded-full border border-icy-cyan-500/20">
                  The Tool
                </span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">SaaS Environment</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Don't just watch videos. Build inside the Jerry Williams AI SaaS Platform.
                You get a <strong>Single-User License</strong> included with your training.
              </p>

              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Full Access to AI SaaS Features",
                  "Integrated Vector Memory & RAG",
                  "Multi-Agent Orchestration Canvas",
                  "Production-Ready Python/Next.js Stack"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-icy-cyan-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-icy-cyan-600 dark:text-icy-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8 border-t border-border/10">
                <Link href="/platform" className="text-icy-cyan-600 dark:text-icy-cyan-400 font-bold hover:underline flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore Features
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
