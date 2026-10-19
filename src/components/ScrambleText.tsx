'use client';

import React, { useState, useEffect, useRef } from 'react';

const CIPHER_CHARS = '0123456789/:TCFPS∆■►';

interface ScrambleTextProps {
  text: string;
  className?: string;
  trigger?: boolean;
}

export function ScrambleText({ text, className = '', trigger = false }: ScrambleTextProps) {
  const [scrambled, setScrambled] = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!trigger) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let iteration = 0;
    const maxIterations = 8;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setScrambled(() =>
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < (iteration / maxIterations) * text.length) {
              return text[index];
            }
            return CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)];
          })
          .join('')
      );

      iteration += 1;
      if (iteration > maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setScrambled(null);
      }
    }, 35);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [trigger, text]);

  const output = trigger && scrambled !== null ? scrambled : text;

  return <span className={className}>{output}</span>;
}
