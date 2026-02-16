'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ThemeAwareLogo } from './ThemeAwareLogo';

export function LegalFooter() {
  const year = new Date().getFullYear();

  return (
    /* 
     * @locked: COMPONENT_STRUCTURE
     * @reason: North Star Branding (Footer Layout)
     * @sota: Verified 2026-02-11. FROZEN layout.
     * @bypass: Requires strict sponsor approval.
     */
    <footer className="relative border-t border-border mt-24 overflow-hidden">
      {/* Background with Glass Effect */}
      <div className="absolute inset-0 glass-3 -z-10 bg-background/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background/80 -z-5 pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <ThemeAwareLogo />
              <div className="flex flex-col">
                <span className="font-bold text-foreground text-lg tracking-tight">Jerry Williams</span>
                <span className="text-xs text-muted-foreground tracking-wide font-medium">SOLO NEUROSYMBIOTIC OS</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Helping solo founders and architects design, build, and scale world-class AI SaaS platforms. 
              Driven by the "North Star" philosophy: Design once, ship fast, prove with teach-back.
            </p>
          </div>

          {/* Product Column */}
          <div className="space-y-6">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider opacity-80">Product</h4>
            <ul className="space-y-3">
              <li><Link href="/#bootcamp" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">Bootcamp</Link></li>
              <li><Link href="/#platform" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">Platform</Link></li>
              <li><Link href="/#membership" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">Membership</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider opacity-80">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/#about" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">About</Link></li>
              <li><Link href="/#faq" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">FAQ</Link></li>
              <li><Link href="/apply" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">Apply</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-6">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider opacity-80">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-icy-cyan-500 transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-icy-cyan-500 transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-border/50 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© {year} Jerry Williams. All rights reserved.</span>
          </div>
          <div>
            Designed for clarity and signal.
          </div>
        </div>
      </div>
    </footer>
  );
}
