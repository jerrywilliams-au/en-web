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
      {/* Dots only — no line through them */}
      <div className="flex flex-col items-center gap-[18px]">
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
            {/* Label (appears left on hover / active) */}
            <span className={`absolute right-8 whitespace-nowrap text-xs font-medium transition-all duration-300 origin-right ${
              activeSection === chapter.id 
                ? 'opacity-100 translate-x-0 text-cyan-500 scale-100' 
                : 'opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-muted-foreground scale-95'
            }`}>
              {chapter.label}
            </span>
            
            {/* Dot */}
            <div className={`rounded-full transition-all duration-300 ${
              activeSection === chapter.id 
                ? 'w-[14px] h-[14px] bg-[#22d3ee] shadow-[0_0_10px_rgba(34,211,238,0.6)]' 
                : 'w-[6px] h-[6px] bg-[#d1d5db] dark:bg-[#6b7280] group-hover:bg-[#67e8f9] dark:group-hover:bg-[#67e8f9]'
            }`} />
          </a>
        ))}
      </div>

      {/* Tail line — starts only after the last circle */}
      <div className="w-[1.5px] h-[28vh] mt-4 bg-gradient-to-b from-[#d1d5db] dark:from-[#4b5563] to-transparent" />
    </div>
  );
}
