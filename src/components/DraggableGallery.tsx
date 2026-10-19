'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Project, PROJECTS } from '@/data/projects';
import { ScrambleText } from './ScrambleText';

interface DraggableGalleryProps {
  projects?: Project[];
}

export function DraggableGallery({ projects = PROJECTS }: DraggableGalleryProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Drag physics state refs (avoid React re-renders during 60fps drag)
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const rafMomentumRef = useRef<number | null>(null);

  // Update active index based on scroll position
  const updateScrollState = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const scrollLeft = el.scrollLeft;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);

    // Approximate active center project
    const cardWidth = 420; // approximate card width + gap
    const index = Math.min(
      Math.max(0, Math.round(scrollLeft / cardWidth)),
      projects.length - 1
    );
    setActiveIndex(index);
  }, [projects.length]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener('scroll', updateScrollState);
  }, [updateScrollState]);

  // Pointer drag events with inertial physics
  const onPointerDown = (e: React.PointerEvent) => {
    // Only primary button
    if (e.button !== 0) return;

    const el = containerRef.current;
    if (!el) return;

    if (rafMomentumRef.current) {
      cancelAnimationFrame(rafMomentumRef.current);
    }

    isDraggingRef.current = true;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
    dragDistanceRef.current = 0;
    velocityRef.current = 0;
    lastXRef.current = e.pageX;
    lastTimeRef.current = performance.now();

    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const el = containerRef.current;
    if (!el) return;

    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.35; // smooth friction ratio
    el.scrollLeft = scrollLeftRef.current - walk;

    dragDistanceRef.current += Math.abs(x - startXRef.current);

    // Calculate instantaneous velocity for release momentum
    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 10) {
      velocityRef.current = (e.pageX - lastXRef.current) / dt;
      lastXRef.current = e.pageX;
      lastTimeRef.current = now;
    }
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    const el = containerRef.current;
    if (!el) return;

    try {
      el.releasePointerCapture(e.pointerId);
    } catch {
      // Ignored if capture already lost
    }

    // Apply natural inertial momentum decay after release
    let v = velocityRef.current * 16; // scale velocity
    const decay = () => {
      if (Math.abs(v) > 0.4 && el) {
        el.scrollLeft -= v;
        v *= 0.91; // damping factor
        rafMomentumRef.current = requestAnimationFrame(decay);
      }
    };
    rafMomentumRef.current = requestAnimationFrame(decay);
  };

  // Click vs Drag distinction
  const handleCardClick = (e: React.MouseEvent, slug: string) => {
    if (dragDistanceRef.current > 8) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    router.push(`/work/${slug}`);
  };

  // Keyboard navigation & programmatic buttons
  const scrollStep = (direction: 'left' | 'right') => {
    const el = containerRef.current;
    if (!el) return;
    const offset = direction === 'left' ? -480 : 480;
    el.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full py-8 select-none" data-cursor="drag">
      {/* Top Gallery Header & Active Index */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-[#d99b43] tracking-widest uppercase">
            {'// Horizontal Project Reel'}
          </span>
          <span className="text-white/[0.15]">•</span>
          <span className="font-mono text-xs text-[#cfc8ba]">
            [{String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}]
          </span>
        </div>

        {/* Accessible Alternative Navigation Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollStep('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll gallery left"
            className={`p-2.5 rounded-full border border-white/[0.1] bg-[#05070c]/70 transition-all ${
              canScrollLeft
                ? 'text-[#f7f3eb] hover:border-[#d99b43] hover:text-[#d99b43]'
                : 'text-[#4a453c] border-white/[0.04] cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollStep('right')}
            disabled={!canScrollRight}
            aria-label="Scroll gallery right"
            className={`p-2.5 rounded-full border border-white/[0.1] bg-[#05070c]/70 transition-all ${
              canScrollRight
                ? 'text-[#f7f3eb] hover:border-[#d99b43] hover:text-[#d99b43]'
                : 'text-[#4a453c] border-white/[0.04] cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Draggable Reel Track */}
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="w-full overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing px-6 sm:px-12 md:px-20 py-4 flex gap-8 touch-pan-x"
        role="region"
        aria-label="Draggable project film reel"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') scrollStep('left');
          if (e.key === 'ArrowRight') scrollStep('right');
        }}
      >
        <div ref={trackRef} className="flex gap-8 items-stretch shrink-0">
          {projects.map((project, idx) => {
            const isHovered = hoveredSlug === project.slug;

            return (
              <div
                key={project.id}
                onClick={(e) => handleCardClick(e, project.slug)}
                onMouseEnter={() => setHoveredSlug(project.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
                data-cursor="open"
                className="group relative w-[80vw] sm:w-[500px] md:w-[560px] shrink-0 bg-[#080c16]/80 border border-white/[0.08] hover:border-white/[0.22] transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl"
              >
                {/* Cinematic Poster Frame */}
                <div className="relative w-full aspect-cinemascope overflow-hidden bg-[#020306]">
                  <Image
                    src={project.poster}
                    alt={`${project.title} — Frame Still`}
                    fill
                    sizes="(max-width: 768px) 80vw, 560px"
                    priority={idx < 2}
                    className={`object-cover transition-transform duration-700 ease-out ${
                      isHovered ? 'scale-[1.04]' : 'scale-100'
                    }`}
                  />

                  {/* Letterbox Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070c] via-transparent to-black/50 pointer-events-none" />

                  {/* Top Film Slate */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-[#cfc8ba] z-10 pointer-events-none">
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/[0.1] text-[#d99b43]">
                      [{project.id}] {project.category}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/[0.1] text-[#958e80]">
                      {project.aspectRatio}
                    </span>
                  </div>

                  {/* Center Action Hint */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#d99b43]/50 text-[#f7f3eb] font-mono text-xs uppercase tracking-widest">
                      <span>Explore Cut</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#d99b43]" />
                    </div>
                  </div>
                </div>

                {/* Editorial Metadata Footer */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 bg-[#070b14] border-t border-white/[0.06]">
                  <div>
                    <div className="flex items-center justify-between gap-4 font-mono text-xs text-[#958e80] tracking-widest uppercase mb-2">
                      <span className="text-[#d99b43]">{project.clientOrDirector}</span>
                      <span>TC {project.timecode}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-[#f7f3eb] group-hover:text-[#d99b43] transition-colors mb-2">
                      <ScrambleText text={project.title} trigger={isHovered} />
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#cfc8ba] line-clamp-2 leading-relaxed mb-6 font-light">
                      {project.synopsis}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-[#958e80]">
                    <div className="flex items-center gap-3">
                      <span>{project.runtime}</span>
                      <span>•</span>
                      <span>{project.timelineStems.cutCount} Cuts</span>
                    </div>

                    <span className="text-[#f7f3eb] group-hover:text-[#d99b43] inline-flex items-center gap-1 transition-colors">
                      <span>Details</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reel Scrubbing Cue */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-6 flex items-center justify-between font-mono text-[11px] text-[#6b6559]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#d99b43] animate-pulse" />
          <span>DRAG HORIZONTALLY TO SCRUB REEL • CLICK OR ENTER TO OPEN DETAILS</span>
        </div>
        <div className="hidden sm:block">
          <span>{projects.length} FILM ENTRIES HARDCODED</span>
        </div>
      </div>
    </div>
  );
}
