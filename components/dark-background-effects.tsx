'use client';

import { useEffect, useRef } from 'react';

export function DarkBackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Characters for code rain (realistic code symbols and operators)
    const chars = '01{}<>[]();:,./\|+-*=&%$#@!~`^?_abcdefxyz';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    // Array of drops - one per column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start at random positions above screen
    }

    // Colors for different types of "code"
    const colors = [
      'rgba(78, 205, 196, 0.8)', // cyan
      'rgba(149, 225, 211, 0.8)', // mint
      'rgba(255, 107, 107, 0.6)', // coral
    ];

    // Animation loop
    let animationId: number;
    let frameCount = 0;

    const animate = () => {
      // Fade effect for trailing
      ctx.fillStyle = 'rgba(15, 20, 25, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Pick random character
        const char = chars[Math.floor(Math.random() * chars.length)];

        // Pick color (mostly cyan, occasional coral/mint)
        const colorIndex = Math.random() > 0.85 ? Math.floor(Math.random() * colors.length) : 0;
        ctx.fillStyle = colors[colorIndex];

        // Draw the character
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(char, x, y);

        // Reset drop to top randomly after it has passed the screen
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down (very slow)
        drops[i] += 0.15;
      }

      frameCount++;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
