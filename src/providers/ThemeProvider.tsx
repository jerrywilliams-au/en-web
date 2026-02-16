'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  highContrast: boolean;
  setHighContrast: (enabled: boolean) => void;
  toggleHighContrast: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

export function ThemeProvider({ children, defaultTheme = 'dark' }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [highContrast, setHighContrastState] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme') as Theme | null;
    const storedContrast = localStorage.getItem('high-contrast') === 'true';
    
    if (stored) {
      setThemeState(stored);
    }
    setHighContrastState(storedContrast);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    
    // Remove existing classes
    root.classList.remove('light', 'dark', 'high-contrast');
    
    // Apply theme
    root.classList.add(theme);
    
    // Apply high contrast
    if (highContrast) {
      root.classList.add('high-contrast');
    }
    
    // Persist to localStorage
    localStorage.setItem('theme', theme);
    localStorage.setItem('high-contrast', String(highContrast));
  }, [theme, highContrast, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const setHighContrast = (enabled: boolean) => {
    setHighContrastState(enabled);
  };

  const toggleHighContrast = () => {
    setHighContrastState(prev => !prev);
  };

  // Prevent flash of wrong theme
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider 
      value={{ 
        theme, 
        setTheme, 
        toggleTheme,
        highContrast,
        setHighContrast,
        toggleHighContrast,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
