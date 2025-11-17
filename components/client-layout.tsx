'use client';

import { useEffect, useState } from 'react';
import { BackgroundEffects } from './background-effects';
import { DarkBackgroundEffects } from './dark-background-effects';
import { CursorSpotlight } from './cursor-spotlight';
import { ScrollProgress } from './scroll-progress';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Sync with theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setTheme(isDark ? 'dark' : 'light');
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Initial theme check
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ScrollProgress />
      <CursorSpotlight />
      {theme === 'light' ? <BackgroundEffects /> : <DarkBackgroundEffects />}
      <div className="relative z-10">{children}</div>
    </>
  );
}
