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

    // Particle system with depth layers
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      depth: number; // 0-1, where 1 is closest
      opacity: number;
      color: string;
    }> = [];

    // Create particles at different depth layers
    const particleCount = 60;
    const colors = [
      '176, 46%, 56%', // cyan
      '162, 53%, 73%', // mint
      '0, 100%, 71%', // coral
      '24, 7%, 70%', // glow
    ];

    for (let i = 0; i < particleCount; i++) {
      const depth = Math.random();
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        // Closer particles move faster (parallax effect)
        vx: (Math.random() - 0.5) * depth * 0.2,
        vy: (Math.random() - 0.5) * depth * 0.2,
        // Closer particles are larger
        size: 0.5 + depth * 2,
        depth,
        // Closer particles are more opaque
        opacity: 0.1 + depth * 0.25,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with subtle glow
        const glowSize = particle.size * 3;
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          glowSize
        );

        gradient.addColorStop(0, `hsla(${particle.color}, ${particle.opacity})`);
        gradient.addColorStop(0.4, `hsla(${particle.color}, ${particle.opacity * 0.3})`);
        gradient.addColorStop(1, 'hsla(0, 0%, 0%, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw bright center point
        ctx.fillStyle = `hsla(${particle.color}, ${particle.opacity * 1.5})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

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
