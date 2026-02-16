'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/components/ui/utils';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'hero', label: 'Home' },
  { id: 'video', label: 'Vision' },
  { id: 'pillars', label: 'Pillars' },
  { id: 'features', label: 'Platform' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Contact' },
];

export function ScrollProgress() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.getElementById('snap-container');
      if (!scrollContainer) return;

      const scrollPosition = scrollContainer.scrollTop;
      const windowHeight = window.innerHeight;
      
      // Calculate active section based on scroll position + offset
      // Using a slightly lower threshold (0.4) to trigger change earlier as user scrolls
      const index = Math.round(scrollPosition / windowHeight);
      
      if (sections[index]) {
        setActiveSection(sections[index].id);
      }
    };

    const scrollContainer = document.getElementById('snap-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative flex items-center justify-end"
          aria-label={`Scroll to ${section.label}`}
        >
          {/* Label (Tooltip style) */}
          <span className={cn(
            "absolute right-8 py-1 px-3 rounded-md text-xs font-medium transition-all duration-300 opacity-0 -translate-x-2 pointer-events-none",
            "bg-foreground/90 text-background backdrop-blur-sm",
            "group-hover:opacity-100 group-hover:translate-x-0"
          )}>
            {section.label}
          </span>

          {/* Dot Indicator */}
          <div className={cn(
            "w-3 h-3 rounded-full transition-all duration-300 border border-foreground/40 backdrop-blur-[2px]",
            activeSection === section.id 
              ? "bg-cyan-500 border-cyan-500 scale-125 shadow-[0_0_10px_rgba(6,182,212,0.5)]" 
              : "bg-foreground/10 hover:bg-foreground/30 group-hover:scale-110"
          )} />
          
          {/* Connecting Line (Visual Flair for Active) */}
          {activeSection === section.id && (
             <div className="absolute right-[5px] top-full h-4 w-[1px] bg-cyan-500/0" />
          )}
        </button>
      ))}
    </div>
  );
}
