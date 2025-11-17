'use client';

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-muted/30 z-50 no-print">
      <div
        className="h-full bg-gradient-to-r from-vermillion via-jade to-cyan transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
      {/* Terminal-style position indicator */}
      <div
        className="absolute top-1 font-mono text-xs px-2 py-0.5 bg-background/90 border border-border rounded-sm opacity-0 hover:opacity-100 transition-opacity"
        style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
      >
        {Math.round(progress)}%
      </div>
    </div>
  );
}
