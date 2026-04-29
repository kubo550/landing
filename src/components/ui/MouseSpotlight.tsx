'use client';

import { useEffect, useRef } from 'react';

export function MouseSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return;

    let targetX = 50;
    let targetY = 30;
    let currentX = 50;
    let currentY = 30;
    let frame = 0;

    const onMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth) * 100;
      targetY = (e.clientY / window.innerHeight) * 100;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.07;
      currentY += (targetY - currentY) * 0.07;
      el.style.setProperty('--mx', `${currentX.toFixed(2)}%`);
      el.style.setProperty('--my', `${currentY.toFixed(2)}%`);
      frame = window.requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    frame = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 [z-index:1]"
      style={{
        background:
          'radial-gradient(620px circle at var(--mx, 50%) var(--my, 30%), color-mix(in oklab, var(--color-accent) 22%, transparent) 0%, transparent 60%)',
        mixBlendMode: 'screen',
      }}
    />
  );
}
