'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export function VideoSection() {
  const [content, setContent] = useState({
    title: "The First Tenant: Jerry Williams",
    description: "See how the system was built using itself. Ideas → Executable systems → Repeatable scale.",
    badge: "Case Study: The First Tenant",
    videoTag: "Discussion: Building as a Solo Founder"
  });

  useEffect(() => {
    fetch('/api/cms/landing-content')
      .then(res => res.json())
      .then(data => {
        if (data.video) {
           setContent(prev => ({
             ...prev,
             title: data.video.title || prev.title,
             description: data.video.description || prev.description,
             badge: data.video.badge || prev.badge,
             videoTag: data.video.videoTag || prev.videoTag
           }));
        }
      })
      .catch(err => console.error('Failed to load video content', err));
  }, []);

  return (
    <section className="relative h-full flex items-center overflow-hidden py-12 lg:py-0">
      <div className="container max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
          
          {/* Left: Narrative */}
          <div className="max-w-2xl text-left space-y-10 z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 relative group overflow-hidden">
                <div className="absolute inset-0 p-[1px] rounded-full bg-gradient-to-r from-cyan-500/50 to-emerald-500/50 -z-10" />
                <div className="absolute inset-[1px] rounded-full bg-background -z-10" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                <span className="text-xs font-semibold tracking-wide text-foreground/90 uppercase">
                  {content.badge}
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                {content.title}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                {content.description}
              </p>
            </div>

            {/* Topics Grid */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Solo Founder Architecture", text: "Patterns for 10x leverage." },
                { title: "Rapid Iteration Strategies", text: "Speed without technical debt." },
                { title: "Product-Market Fit First", text: "Validation over complexity." }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all group">
                   <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500 font-bold border border-cyan-500/20 group-hover:scale-110 transition-transform">
                     {i + 1}
                   </div>
                   <div>
                     <h4 className="font-bold text-foreground">{item.title}</h4>
                     <p className="text-sm text-muted-foreground">{item.text}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Rich Image + Nano-Glass Card (Strict Alignment with Hero) */}
          <div className="hidden lg:flex justify-end h-full">
            <div className="relative w-full max-w-lg aspect-[15/16] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl flex flex-col items-center justify-between group cursor-pointer glass-outline-gradient transition-all duration-500 backdrop-blur-sm bg-white/20 dark:bg-black/20">
               {/* Rich Image Background (Unified Theme) */}
               <div className="absolute inset-0">
                  <Image 
                    src="/images/branding/vision-discussion-sota.png" 
                    alt="Vision Background"
                    fill
                    className="object-cover transition-opacity duration-700"
                  />
                  {/* Overlay Gradient for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
               </div>

               {/* Transparency: Removed heavy gradients, kept subtle overlay for readability */}
               <div className="absolute inset-0 bg-transparent z-0" />
               <div className="absolute inset-0 bg-[url('/images/ui-grid.svg')] opacity-20 z-0 bg-repeat" />
               
               {/* Header: Case Study */}
               <div className="w-full p-6 text-center z-10">
                  <span className="inline-block px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400 text-xs font-mono tracking-widest uppercase">
                    CASE STUDY: THE FIRST TENANT
                  </span>
               </div>

               {/* Center Play/Action */}
               <div className="z-10 flex flex-col items-center gap-4">
                 <div className="w-20 h-20 rounded-full glass-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-cyan-400 ml-1"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                 </div>
               </div>

               {/* Footer: Discussion Details */}
               <div className="w-full p-6 z-10 pb-8">
                  <div className="glass-1 p-4 rounded-xl border border-black/5 dark:border-white/5 backdrop-blur-md bg-white/30 dark:bg-black/30 flex items-center justify-between shadow-lg">
                     <div className="text-left">
                        <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-1">
                          Discussion: Building as a Solo Founder
                        </div>
                        <div className="text-lg font-bold text-foreground dark:text-white leading-tight">
                          System Architecture Deep Dive
                        </div>
                     </div>
                     <div className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 text-xs font-mono font-medium text-foreground/80 dark:text-white/80">
                       12:45
                     </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

