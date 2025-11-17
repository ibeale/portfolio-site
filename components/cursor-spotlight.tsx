'use client';

import { useEffect, useRef } from 'react';

export function CursorSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Smooth animation loop
    const animate = () => {
      // Lerp (linear interpolation) for smooth following
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      spotlight.style.transform = `translate(${currentX}px, ${currentY}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="fixed pointer-events-none"
      style={{
        width: '600px',
        height: '600px',
        left: '-300px',
        top: '-300px',
        zIndex: 1,
      }}
    >
      {/* Light mode spotlight */}
      <div className="absolute inset-0 dark:opacity-0 opacity-30 transition-opacity duration-300">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212, 68, 46, 0.15) 0%, rgba(42, 127, 98, 0.08) 30%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* Dark mode spotlight */}
      <div className="absolute inset-0 opacity-0 dark:opacity-40 transition-opacity duration-300">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(78, 205, 196, 0.2) 0%, rgba(149, 225, 211, 0.1) 30%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
      </div>
    </div>
  );
}
