'use client';

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
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center">
      {/* Dots container */}
      <div className="flex flex-col items-center gap-4 relative py-2">
        {/* Vertical line through dots */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1.5px] bg-zinc-300/60 dark:bg-zinc-700/60" />

        {chapters.map((chapter) => (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            className="group relative flex items-center justify-center"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(chapter.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {/* Label (Absolute Left) */}
            <span className={`absolute right-8 whitespace-nowrap text-xs font-medium transition-all duration-300 origin-right ${
              activeSection === chapter.id 
                ? 'opacity-100 translate-x-0 text-cyan-500 scale-100' 
                : 'opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-muted-foreground scale-95'
            }`}>
              {chapter.label}
            </span>
            
            {/* Dot */}
            <div className="relative z-10 flex items-center justify-center w-5 h-5">
               {/* Background mask */}
               <div className={`absolute rounded-full bg-background transition-all duration-300 ${
                 activeSection === chapter.id ? 'w-5 h-5' : 'w-3 h-3'
               }`} />

               {/* The Visible Dot */}
              <div className={`rounded-full transition-all duration-300 relative z-20 ${
                activeSection === chapter.id 
                  ? 'w-3.5 h-3.5 bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.7)]' 
                  : 'w-[6px] h-[6px] bg-zinc-400 dark:bg-zinc-500 group-hover:bg-cyan-400/60'
              }`} />
            </div>
          </a>
        ))}
      </div>

      {/* Vertical tail line extending toward footer */}
      <div className="w-[1.5px] h-[30vh] bg-gradient-to-b from-zinc-300/60 dark:from-zinc-700/60 to-transparent" />
    </div>
  );
}
