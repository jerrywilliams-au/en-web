'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export function LoopSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to active step (0-3)
  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest < 0.25) setActiveStep(0);
      else if (latest < 0.5) setActiveStep(1);
      else if (latest < 0.75) setActiveStep(2);
      else setActiveStep(3);
    });
  }, [scrollYProgress]);

  const steps = [
    { id: 'compass', title: 'Compass', desc: 'Define Success. Set your North Star.', icon: '/images/branding/icon_compass.png', color: 'text-cyan-400', bg: 'bg-cyan-500' },
    { id: 'build', title: 'Build', desc: 'Vertical Slice. Essential features only.', icon: '/images/branding/icon_build.png', color: 'text-emerald-400', bg: 'bg-emerald-500' },
    { id: 'teach', title: 'Teach', desc: 'Teach-Back. Explanation proves mastery.', icon: '/images/branding/icon_teach.png', color: 'text-purple-400', bg: 'bg-purple-500' },
    { id: 'refine', title: 'Refine', desc: 'Feedback Loop. Ruthless iteration.', icon: '/images/branding/icon_refine.png', color: 'text-amber-400', bg: 'bg-amber-500' },
  ];

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Dynamic Visual */}
          <div className="relative h-[500px] w-full flex items-center justify-center">
            {/* Background Circle */}
            <div className="absolute w-[400px] h-[400px] rounded-full border border-white/10" />
            
            {/* Active Highlight */}
            <motion.div 
               animate={{ rotate: activeStep * 90 }}
               className="absolute w-[400px] h-[400px] rounded-full border-t-2 border-cyan-500 transition-all duration-500"
            />
            
            {/* Center Visual - Changes based on step */}
            <div className="relative z-10 w-64 h-64 glass-2 rounded-full flex items-center justify-center border border-white/10 shadow-2xl">
               <motion.div
                 key={activeStep}
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.4 }}
                 className="relative w-32 h-32"
               >
                 <Image 
                   src={steps[activeStep].icon} 
                   alt={steps[activeStep].title}
                   fill
                   className="object-contain"
                 />
               </motion.div>
            </div>
            
            <div className="absolute inset-0 bg-transparent radial-gradient" />
          </div>

          {/* Right: Scroll Content */}
          <div className="space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              The <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">Canonical Loop</span>
            </h2>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-6 p-6 rounded-2xl transition-all duration-500 ${
                    activeStep === index 
                      ? 'glass-2 border-cyan-500/30 translate-x-4 bg-cyan-500/5' 
                      : 'opacity-30 border border-transparent'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full ${activeStep === index ? step.bg : 'bg-white/10'} flex items-center justify-center text-black font-bold shrink-0 transition-colors`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold transition-colors ${activeStep === index ? step.color : 'text-foreground'}`}>
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
