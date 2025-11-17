'use client';

import { useEffect, useRef } from 'react';

export function BackgroundEffects() {
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

    interface Branch {
      x: number;
      y: number;
      angle: number;
      length: number;
      maxLength: number;
      width: number;
      opacity: number;
      growing: boolean;
      children: Branch[];
      age: number;
      color: string;
    }

    const branches: Branch[] = [];
    const maxBranches = 8; // Keep sparse

    // Earthy color palette
    const colors = [
      'rgba(100, 80, 60, ',      // warm brown
      'rgba(120, 95, 70, ',      // sepia
      'rgba(139, 115, 85, ',     // tan
      'rgba(80, 70, 55, ',       // dark brown
    ];

    // Create a new branch
    const createBranch = (
      x?: number,
      y?: number,
      angle?: number,
      width?: number
    ): Branch => {
      return {
        x: x ?? Math.random() * canvas.width,
        y: y ?? Math.random() * canvas.height,
        angle: angle ?? Math.random() * Math.PI * 2,
        length: 0,
        maxLength: 60 + Math.random() * 120,
        width: width ?? 1.5 + Math.random() * 2,
        opacity: 0.12 + Math.random() * 0.15,
        growing: true,
        children: [],
        age: 0,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    // Initialize with a few branches
    for (let i = 0; i < 4; i++) {
      branches.push(createBranch());
    }

    const drawBranch = (branch: Branch) => {
      if (branch.length <= 0) return;

      const endX = branch.x + Math.cos(branch.angle) * branch.length;
      const endY = branch.y + Math.sin(branch.angle) * branch.length;

      // Calculate tapering width
      const progress = branch.length / branch.maxLength;
      const currentWidth = branch.width * (1 - progress * 0.6);

      // Draw the branch with gradient for natural taper
      const gradient = ctx.createLinearGradient(branch.x, branch.y, endX, endY);
      gradient.addColorStop(0, `${branch.color}${branch.opacity})`);
      gradient.addColorStop(1, `${branch.color}${branch.opacity * 0.5})`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = Math.max(0.5, currentWidth);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.beginPath();
      ctx.moveTo(branch.x, branch.y);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      // Draw children branches
      branch.children.forEach(drawBranch);
    };

    const updateBranch = (branch: Branch) => {
      if (branch.growing && branch.length < branch.maxLength) {
        // Grow slowly
        branch.length += 0.4 + Math.random() * 0.3;
        branch.age++;

        // Chance to create a child branch
        const progress = branch.length / branch.maxLength;
        if (
          progress > 0.3 &&
          progress < 0.8 &&
          branch.children.length < 2 &&
          Math.random() < 0.015
        ) {
          const endX = branch.x + Math.cos(branch.angle) * branch.length;
          const endY = branch.y + Math.sin(branch.angle) * branch.length;
          const angleVariation = (Math.random() - 0.5) * Math.PI * 0.6;

          branch.children.push(
            createBranch(
              endX,
              endY,
              branch.angle + angleVariation,
              branch.width * 0.7
            )
          );
        }
      } else if (branch.growing) {
        branch.growing = false;
      }

      // Slowly fade out old branches
      if (!branch.growing) {
        branch.age++;
        if (branch.age > 800) {
          branch.opacity -= 0.002;
        }
      }

      // Update children
      branch.children.forEach(updateBranch);
    };

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw all branches
      branches.forEach((branch) => {
        updateBranch(branch);
        drawBranch(branch);
      });

      // Remove fully faded branches and add new ones
      for (let i = branches.length - 1; i >= 0; i--) {
        if (branches[i].opacity <= 0) {
          branches.splice(i, 1);
        }
      }

      // Occasionally add new branches
      if (branches.length < maxBranches && Math.random() < 0.003) {
        branches.push(createBranch());
      }

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
