'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/providers/ThemeProvider';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ThemeAwareLogo } from './ThemeAwareLogo';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  
  const navLinks = [
    { to: '/bootcamp', label: 'Bootcamp' },
    { to: '/platform', label: 'Platform' },
    { to: '/membership', label: 'Membership' },
    { to: '/about', label: 'About' },
    { to: '/faq', label: 'FAQ' },
  ];
  
  const isActive = (path: string) => pathname === path;
  
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full glass border-b border-border/50"
      style={{ backdropFilter: 'blur(24px)' }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - CSS Based Monogram */}
          <Link href="/" className="flex items-center gap-3 group">
            <ThemeAwareLogo />
            <span className="hidden sm:block" 
                  style={{ 
                    fontSize: 'var(--text-lg)', 
                    fontWeight: 'var(--font-weight-semibold)',
                    letterSpacing: 'var(--letter-spacing-normal)'
                  }}>
              jerrywilliams.au
            </span>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive(link.to)
                    ? 'bg-muted text-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  letterSpacing: 'var(--letter-spacing-wide)'
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Button asChild variant="default" size="sm" className="bg-foreground text-background hover:bg-foreground/90">
              <Link href="/apply">Apply</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
