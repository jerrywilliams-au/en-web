'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface FocusContextType {
  isFocusMode: boolean;
  enableFocusMode: () => void;
  disableFocusMode: () => void;
  toggleFocusMode: () => void;
  focusTarget: string | null;
  setFocusTarget: (target: string | null) => void;
}

const FocusContext = createContext<FocusContextType | undefined>(undefined);

interface FocusProviderProps {
  children: React.ReactNode;
}

export function FocusProvider({ children }: FocusProviderProps) {
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [focusTarget, setFocusTarget] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Apply focus-mode-active class to html element for global effects
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const root = document.documentElement;
    if (isFocusMode) {
      root.classList.add('focus-mode-active');
    } else {
      root.classList.remove('focus-mode-active');
    }
  }, [isFocusMode, mounted]);

  const enableFocusMode = useCallback(() => {
    setIsFocusMode(true);
  }, []);

  const disableFocusMode = useCallback(() => {
    setIsFocusMode(false);
    setFocusTarget(null);
  }, []);

  const toggleFocusMode = useCallback(() => {
    setIsFocusMode(prev => {
      if (!prev) {
        return true;
      } else {
        setFocusTarget(null);
        return false;
      }
    });
  }, []);

  return (
    <FocusContext.Provider 
      value={{ 
        isFocusMode, 
        enableFocusMode, 
        disableFocusMode, 
        toggleFocusMode,
        focusTarget,
        setFocusTarget,
      }}
    >
      {children}
    </FocusContext.Provider>
  );
}

export function useFocus() {
  const context = useContext(FocusContext);
  if (context === undefined) {
    throw new Error('useFocus must be used within a FocusProvider');
  }
  return context;
}

// Helper component to mark content as focus target
export function FocusTarget({ 
  children, 
  id 
}: { 
  children: React.ReactNode; 
  id: string;
}) {
  const { isFocusMode, focusTarget } = useFocus();
  
  const isFocused = isFocusMode && focusTarget === id;
  const isDimmed = isFocusMode && focusTarget && focusTarget !== id;
  
  return (
    <div 
      className={`
        transition-all duration-300
        ${isFocused ? 'focus-enhanced glass-focus' : ''}
        ${isDimmed ? 'dimmed-interactive' : ''}
      `}
    >
      {children}
    </div>
  );
}

// Helper component for non-focus content (always dimmed in focus mode)
export function FocusDimmed({ 
  children,
  interactive = false,
}: { 
  children: React.ReactNode;
  interactive?: boolean;
}) {
  const { isFocusMode } = useFocus();
  
  return (
    <div 
      className={`
        transition-all duration-300
        ${isFocusMode ? (interactive ? 'dimmed-interactive' : 'dimmed') : ''}
      `}
    >
      {children}
    </div>
  );
}
