'use client';

import dynamic from 'next/dynamic';
import { Navbar } from '@/components/branding/Navbar';
import { HeroSection } from '@/components/branding/HeroSection';
import { ParallaxBG } from '@/components/branding/ParallaxBG';
import { GlassOrbs } from '@/components/branding/GlassOrbs';
import { SignalSection } from '@/components/branding/SignalSection';
import { PillarsSection } from '@/components/branding/PillarsSection'; 
import { LoopSection } from '@/components/branding/LoopSection';
import { BootcampSection } from '@/components/branding/BootcampSection';
import { PlatformSection } from '@/components/branding/PlatformSection';
import { MembershipSection } from '@/components/branding/MembershipSection';
import { ToolkitsSection } from '@/components/branding/ToolkitsSection';
import { TestimonialsSection } from '@/components/branding/TestimonialsSection';
import { AboutSection } from '@/components/branding/AboutSection';
import { FAQSection } from '@/components/branding/FAQSection';
import { CtaSection } from '@/components/branding/CtaSection';
import { ChapterNavigation } from '@/components/branding/ChapterNavigation';

// Lazy Load Footer
const LegalFooter = dynamic(() => import('@/components/branding/LegalFooter').then(mod => mod.LegalFooter));

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background font-sans selection:bg-cyan-500/30">
      <GlassOrbs />
      <Navbar />
      <ChapterNavigation />

      <div className="w-full">
        <HeroSection 
          lightSrc="/images/branding/hero-light-v6-crystalline.png"
          darkSrc="/images/branding/hero-dark-v6-crystalline.png"
        />
        <SignalSection />
        <PillarsSection />
        <LoopSection />
        <BootcampSection />
        <PlatformSection />
        <MembershipSection />
        <ToolkitsSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <CtaSection />
        <div className="bg-background relative z-10 pt-12 pb-8 bg-nano-pattern">
           <LegalFooter />
        </div>
      </div>
    </div>
  );
}
