'use client';

import React, { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const [cursorText, setCursorText] = useState('');
  const [cursorMode, setCursorMode] = useState<'default' | 'hover' | 'drag' | 'open' | 'play'>(
    'default'
  );
  const [visible, setVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const isTouchRef = useRef(false);

  useEffect(() => {
    // Check if device supports fine pointer (mouse/trackpad)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') {
        isTouchRef.current = true;
        setVisible(false);
        document.body.classList.remove('has-custom-cursor');
        return;
      }

      document.body.classList.add('has-custom-cursor');
      setVisible(true);
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Context detection on hover
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const mode = cursorTarget.getAttribute('data-cursor');
        if (mode === 'drag') {
          setCursorMode('drag');
          setCursorText('DRAG');
          return;
        } else if (mode === 'open') {
          setCursorMode('open');
          setCursorText('OPEN');
          return;
        } else if (mode === 'play') {
          setCursorMode('play');
          setCursorText('PLAY');
          return;
        } else if (mode === 'explore') {
          setCursorMode('open');
          setCursorText('EXPLORE');
          return;
        }
      }

      const interactive = target.closest('a, button, input, textarea, [role="button"]');
      if (interactive) {
        setCursorMode('hover');
        setCursorText('');
      } else {
        setCursorMode('default');
        setCursorText('');
      }
    };

    const handlePointerLeave = () => setVisible(false);
    const handlePointerEnter = () => setVisible(true);

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);
    document.addEventListener('mouseenter', handlePointerEnter);

    // Smooth RAF loop for the trailing outer ring
    let rafId: number;
    const updateRing = () => {
      if (!isTouchRef.current) {
        ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.18;
        ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.18;

        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
        }
      }
      rafId = requestAnimationFrame(updateRing);
    };
    updateRing();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
      document.removeEventListener('mouseenter', handlePointerEnter);
      cancelAnimationFrame(rafId);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  if (!visible) return null;

  const isSpecial = cursorMode === 'drag' || cursorMode === 'open' || cursorMode === 'play';

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden" aria-hidden="true">
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-[#d99b43] transition-opacity duration-200"
        style={{ willChange: 'transform' }}
      />

      {/* Trailing Responsive Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full transition-all duration-300 ease-out border ${
          isSpecial
            ? '-ml-9 -mt-9 w-18 h-18 bg-[#05070c]/85 border-[#d99b43] text-[#f7f3eb] shadow-lg backdrop-blur-sm scale-100'
            : cursorMode === 'hover'
            ? '-ml-5 -mt-5 w-10 h-10 border-[#d99b43]/70 bg-[#d99b43]/10 scale-105'
            : '-ml-4 -mt-4 w-8 h-8 border-white/25 bg-transparent scale-90'
        }`}
        style={{ willChange: 'transform' }}
      >
        {cursorText && (
          <span className="font-mono text-[9px] font-medium tracking-widest text-[#f7f3eb] uppercase">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
