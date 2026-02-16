'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ChapterNavigation() {
  const [activeSection, setActiveSection] = useState('hero');

  const chapters = [
    { id: 'hero', label: 'Start' },
    { id: 'signal', label: 'Signal' },
    { id: 'pillars', label: 'Pillars' },
    { id: 'loop', label: 'Loop' },
    { id: 'bootcamp', label: 'Curriculum' },
    { id: 'platform', label: 'Platform' },
    { id: 'membership', label: 'Membership' },
    { id: 'toolkits', label: 'Toolkits' },
    { id: 'about', label: 'About' },
    { id: 'testimonials', label: 'Stories' },
    { id: 'faq', label: 'FAQ' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = chapters.map(c => document.getElementById(c.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(chapters[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-row items-center gap-4">
      <div className="flex flex-col items-center gap-6 relative py-4">
        {/* Continuous Vertical Line - Centered */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-zinc-200 dark:bg-zinc-800 rounded-full -z-10" />

        {chapters.map((chapter) => (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            className="group relative flex items-center justify-center p-2"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(chapter.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {/* Label (Absolute Left) */}
            <span className={`absolute right-10 whitespace-nowrap text-xs font-medium transition-all duration-300 origin-right ${
              activeSection === chapter.id 
                ? 'opacity-100 translate-x-0 text-cyan-500 scale-100' 
                : 'opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-muted-foreground scale-95'
            }`}>
              {chapter.label}
            </span>
            
            {/* Dot Container - High Z-index to mask line */}
            <div className="relative z-10 flex items-center justify-center w-4 h-4">
               {/* 
                 Masking Background Circle 
                 This solid circle matches the page background to "cut" the line visually.
               */}
               <div className={`absolute inset-0 rounded-full bg-background transition-all duration-300 ${
                 activeSection === chapter.id ? 'scale-125' : 'scale-100'
               }`} />

               {/* Active Halo */}
               {activeSection === chapter.id && (
                  <motion.div 
                    layoutId="active-dot-halo"
                    className="absolute -inset-2 bg-cyan-500/20 rounded-full z-[-1]"
                    transition={{ duration: 0.3 }}
                  />
               )}

               {/* The Visible Dot */}
              <div className={`rounded-full transition-all duration-300 relative z-20 ${
                activeSection === chapter.id 
                  ? 'w-4 h-4 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]' 
                  : 'w-2 h-2 bg-zinc-300 dark:bg-zinc-600 group-hover:bg-cyan-400/50'
              }`} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
