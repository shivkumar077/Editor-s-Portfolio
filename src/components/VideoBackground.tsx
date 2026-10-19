'use client';

import React, { useRef, useEffect, useState } from 'react';

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reducedMotion) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsLoaded(true))
          .catch(() => {
            // Autoplay permitted or handled gracefully
            setIsLoaded(true);
          });
      }
    } else {
      video.pause();
    }

    // Pause when document is hidden to optimize GPU & battery performance
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        video.pause();
      } else if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        video.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 select-none"
      aria-hidden="true"
    >
      {/* Base matching fallback color while video loads */}
      <div className="absolute inset-0 bg-[#05070c]" />

      {/* Semantic Full-Screen Background Video */}
      <video
        ref={videoRef}
        src="/videos/10214.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Soft legibility overlay to guarantee foreground typography contrast */}
      <div className="absolute inset-0 bg-[#05070c]/50 pointer-events-none" />
    </div>
  );
}
