'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

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
    { id: 'compass', title: 'Compass', desc: 'Define Success. Set your North Star.', icon: '/images/branding/icon_compass_premium.png', color: 'text-cyan-400', bg: 'bg-cyan-500', glow: '6 182 212', ring: 'border-white/20' },
    { id: 'build', title: 'Build', desc: 'Spiral Iteration. Essential features only.', icon: '/images/branding/icon_build_premium.png', color: 'text-emerald-400', bg: 'bg-emerald-500', glow: '16 185 129', ring: 'border-white/20' },
    { id: 'teach', title: 'Teach', desc: 'Teach-Back. Explanation proves mastery.', icon: '/images/branding/icon_teach_premium.png', color: 'text-purple-400', bg: 'bg-purple-500', glow: '139 92 246', ring: 'border-white/20' },
    { id: 'refine', title: 'Refine', desc: 'Feedback Loop. Ruthless iteration.', icon: '/images/branding/icon_refine_premium.png', color: 'text-amber-400', bg: 'bg-amber-500', glow: '245 158 11', ring: 'border-white/20' },
  ];

  const activeGlow = steps[activeStep].glow;

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Ambient Background Glow — shifts color with active step */}
        <motion.div 
          className="absolute inset-0 z-0 transition-all duration-1000"
          animate={{
            background: `radial-gradient(ellipse 80% 50% at 30% 50%, rgb(${activeGlow} / 0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 70% 60%, rgb(${activeGlow} / 0.04) 0%, transparent 60%)`
          }}
        />

        <div className="container max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left: Dynamic Visual with Spiral Hero */}
          <div className="relative h-[500px] w-full flex items-center justify-center">
            
            {/* Outer rotating ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className={`absolute w-[420px] h-[420px] rounded-full border border-dashed ${steps[activeStep].ring} transition-colors duration-700`}
            />
            
            {/* Middle ring — counter-rotate */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute w-[360px] h-[360px] rounded-full border border-white/5"
            />

            {/* Active arc highlight */}
            <motion.div 
              animate={{ rotate: activeStep * 90 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="absolute w-[420px] h-[420px] rounded-full"
              style={{
                background: `conic-gradient(from 0deg, rgb(${activeGlow} / 0.6) 0deg, transparent 90deg, transparent 360deg)`,
                mask: 'radial-gradient(transparent 48%, black 49%, black 50%, transparent 51%)'
              }}
            />
            
            {/* Center: Premium Icon with glow backdrop */}
            <div className="relative z-10">
              {/* Glow backdrop */}
              <motion.div 
                animate={{ 
                  boxShadow: `0 0 60px 20px rgb(${activeGlow} / 0.3), 0 0 120px 40px rgb(${activeGlow} / 0.1)`,
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  boxShadow: { duration: 0.7 },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-0 rounded-full"
              />
              
              <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-white/10 backdrop-blur-xl bg-black/40 flex items-center justify-center relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.6, rotate: 20 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="relative w-44 h-44"
                  >
                    <Image 
                      src={steps[activeStep].icon} 
                      alt={steps[activeStep].title}
                      fill
                      className="object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: `rgb(${activeGlow})` }}
                animate={{
                  x: [0, Math.sin(i * 60 * Math.PI / 180) * 200],
                  y: [0, Math.cos(i * 60 * Math.PI / 180) * 200],
                  opacity: [0.8, 0],
                  scale: [1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* Right: Scroll Content */}
          <div className="space-y-10">
            <div>
              <motion.h2 
                className="text-sm font-bold tracking-widest uppercase mb-4"
                style={{ color: `rgb(${activeGlow})` }}
              >
                The Learning Engine
              </motion.h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">
                The <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-400">Iterative Spiral Loop</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-md">
                Four phases. Infinite depth. Each revolution builds mastery.
              </p>
            </div>
            
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  animate={activeStep === index ? { x: 12 } : { x: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`flex items-center gap-5 p-5 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    activeStep === index 
                      ? `bg-white/5 backdrop-blur-xl border-white/20` 
                      : 'border-transparent opacity-40 hover:opacity-60'
                  }`}
                  style={activeStep === index ? {
                    boxShadow: `0 0 20px rgb(${step.glow} / 0.15), inset 0 0 20px rgb(${step.glow} / 0.05)`
                  } : undefined}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step number with glow ring */}
                  <div className={`relative w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
                    activeStep === index ? step.bg + ' text-black shadow-lg' : 'bg-white/5 text-white/50'
                  }`}>
                    {activeStep === index && (
                      <motion.div 
                        layoutId="step-ring"
                        className="absolute inset-[-4px] rounded-full border-2"
                        style={{ borderColor: `rgb(${step.glow} / 0.5)` }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      />
                    )}
                    <span className="text-lg font-bold font-mono">{index + 1}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className={`text-xl font-bold transition-colors duration-300 ${
                      activeStep === index ? step.color : 'text-foreground/60'
                    }`}>
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>

                  {/* Active indicator */}
                  {activeStep === index && (
                    <motion.div
                      layoutId="active-indicator"
                      className="w-2 h-8 rounded-full"
                      style={{ backgroundColor: `rgb(${step.glow})` }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
