'use client';

import React from 'react';
import { ArrowDown, Film } from 'lucide-react';

export function HeroWordmark() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-6 sm:px-8 border-b border-white/[0.06] overflow-hidden select-none">
      {/* Giant Low-Contrast HARSH Wordmark Backdrop */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <span className="font-serif text-[18vw] font-bold tracking-[0.22em] text-[#f5f0e6]/[0.032] whitespace-nowrap leading-none transform translate-y-4 animate-water-float">
          HARSH
        </span>
      </div>

      {/* Subtle Horizontal Still-Water Atmosphere Line */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#f5f0e6]/[0.05] to-transparent pointer-events-none" />

      {/* Top Meta Strip */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-[#9c9588]">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#d9a05b] animate-pulse" />
          <span className="text-[#f5f0e6]/90 font-medium">Harsh // Cutting Room</span>
          <span className="text-white/[0.15]">|</span>
          <span className="text-[#9c9588]">Auteur Film & Commercial Editor</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-[#9c9588]">
          <span>[ REC 00:00:24:00 ]</span>
          <span>ARRI RAW / 4K PRORES</span>
          <span className="text-[#d9a05b]">DCI-P3 CALIBRATED</span>
        </div>
      </div>

      {/* Main Editorial Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full my-auto py-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] bg-[#0e0e12]/60 backdrop-blur-sm font-mono text-[11px] uppercase tracking-widest text-[#cfc8ba] mb-8">
          <Film className="w-3.5 h-3.5 text-[#d9a05b]" />
          <span>The Auteur Edition // Phase 1 Filmography</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#f5f0e6] leading-[1.05] mb-8">
          Governing human breath, tension, and narrative momentum.
        </h1>

        <p className="max-w-2xl text-base sm:text-lg text-[#cfc8ba] font-sans font-light leading-relaxed mb-10">
          A cut is never a simple splice in time. It is a psychological calibration of the audience’s
          nervous system. Harsh crafts visceral narrative momentum across feature narratives,
          commercial films, and high-concept music cinema.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#f5f0e6] text-[#08080a] font-mono text-xs uppercase tracking-widest hover:bg-[#d9a05b] transition-all duration-300"
          >
            <span>Explore 7 Films</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#philosophy"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/[0.12] text-[#f5f0e6] font-mono text-xs uppercase tracking-widest hover:border-[#d9a05b] hover:text-[#d9a05b] transition-all duration-300 bg-white/[0.02]"
          >
            <span>The Cutting Room Manifesto</span>
          </a>

          <a
            href="#developer"
            className="inline-flex items-center gap-2 px-4 py-3.5 text-[#9c9588] font-mono text-xs uppercase tracking-widest hover:text-[#f5f0e6] transition-colors"
          >
            <span>Developer Colophon</span>
          </a>
        </div>
      </div>

      {/* Bottom Technical Spec Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-6 font-mono text-xs text-[#9c9588]">
        <div className="flex items-center gap-6">
          <div>
            <span className="text-[#f5f0e6]">07</span>
            <span className="text-[#9c9588] ml-1.5 uppercase">Featured Works</span>
          </div>
          <span className="text-white/[0.15]">•</span>
          <div>
            <span className="text-[#f5f0e6]">24.00</span>
            <span className="text-[#9c9588] ml-1.5 uppercase">Cadence (FPS)</span>
          </div>
          <span className="text-white/[0.15]">•</span>
          <div className="hidden sm:block">
            <span className="text-[#d9a05b]">100%</span>
            <span className="text-[#9c9588] ml-1.5 uppercase">Lossless Master Proxies</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-[11px] tracking-wider uppercase">
          <span>DaVinci Resolve Studio 19</span>
          <span className="text-white/[0.2]">/</span>
          <span>Premiere Pro</span>
          <span className="text-white/[0.2]">/</span>
          <span>Avid Media Composer</span>
        </div>
      </div>
    </section>
  );
}
