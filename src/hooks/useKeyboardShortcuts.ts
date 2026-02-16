'use client';

import { useEffect, useCallback } from 'react';

type KeyBinding = {
  key: string;
  ctrl?: boolean;
  meta?: boolean;
  shift?: boolean;
  alt?: boolean;
  action: () => void;
  description?: string;
};

export function useKeyboardShortcuts(bindings: KeyBinding[]) {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Skip if user is typing in an input
    const target = event.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
      // Allow Escape even in inputs
      if (event.key !== 'Escape') return;
    }

    for (const binding of bindings) {
      const keyMatch = event.key.toLowerCase() === binding.key.toLowerCase();
      const ctrlMatch = binding.ctrl ? event.ctrlKey : !event.ctrlKey;
      const metaMatch = binding.meta ? event.metaKey : !event.metaKey;
      const shiftMatch = binding.shift ? event.shiftKey : !event.shiftKey;
      const altMatch = binding.alt ? event.altKey : !event.altKey;

      if (keyMatch && ctrlMatch && metaMatch && shiftMatch && altMatch) {
        event.preventDefault();
        binding.action();
        return;
      }
    }
  }, [bindings]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}

// Common shortcuts hook for the Chat UI
export function useChatKeyboardShortcuts({
  onNewChat,
  onFocusSearch,
  onDeleteSelected,
}: {
  onNewChat: () => void;
  onFocusSearch: () => void;
  onDeleteSelected?: () => void;
}) {
  useKeyboardShortcuts([
    {
      key: 'n',
      meta: true,
      action: onNewChat,
      description: 'New Chat',
    },
    {
      key: 'k',
      meta: true,
      action: onFocusSearch,
      description: 'Focus Search',
    },
    ...(onDeleteSelected ? [{
      key: 'Backspace',
      action: onDeleteSelected,
      description: 'Delete Selected',
    }] : []),
  ]);
}
