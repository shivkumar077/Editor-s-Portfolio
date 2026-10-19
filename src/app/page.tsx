'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Film } from 'lucide-react';
import { PROJECTS, HARSH_PROFILE } from '@/data/projects';
import { DraggableGallery } from '@/components/DraggableGallery';

export default function HomePage() {
  const heroProject = PROJECTS[0]; // Chronicles of Dust

  return (
    <main id="main-content" className="flex flex-col w-full">
      {/* 1. Immersive Opening Sequence */}
      <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-6 sm:px-8 border-b border-white/[0.08] overflow-hidden select-none">
        {/* Giant Monolithic Watermark Backdrop */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0"
          aria-hidden="true"
        >
          <span className="font-serif text-[20vw] font-bold tracking-[0.24em] text-[#f7f3eb]/[0.035] whitespace-nowrap leading-none transform translate-y-6">
            HARSH
          </span>
        </div>

        {/* Top Editorial Annotation */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-[#958e80]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#d99b43] animate-pulse" />
            <span className="text-[#f7f3eb] font-medium">Harsh // Cutting Room</span>
            <span className="text-white/[0.15]">|</span>
            <span className="text-[#cfc8ba]">Film & Commercial Editor</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-[#958e80]">
            <span>TC 00:00:24:00</span>
            <span className="text-white/[0.15]">•</span>
            <span>24.000 FPS</span>
            <span className="text-white/[0.15]">•</span>
            <span className="text-[#d99b43]">DCI-P3 CALIBRATED</span>
          </div>
        </div>

        {/* Central Asymmetric Composition */}
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Statement & Typography */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] bg-[#070b14]/70 backdrop-blur-sm font-mono text-[11px] uppercase tracking-widest text-[#cfc8ba] mb-8">
              <Film className="w-3.5 h-3.5 text-[#d99b43]" />
              <span>Liquid Cinema // Phase 2 Redesign</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#f7f3eb] leading-[1.06] mb-8">
              Sculpting human breath, tension, and narrative momentum.
            </h1>

            <p className="max-w-xl text-base sm:text-lg text-[#cfc8ba] font-sans font-light leading-relaxed mb-10">
              A cut is never a simple splice in time. It is a psychological calibration of the audience’s
              nervous system. Harsh crafts visceral narrative velocity across festival cinema,
              commercial spots, and cinematic music films.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/work"
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#f7f3eb] text-[#05070c] font-mono text-xs uppercase tracking-widest hover:bg-[#d99b43] transition-all duration-300 font-medium"
              >
                <span>Enter Filmography [07]</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/[0.12] text-[#f7f3eb] font-mono text-xs uppercase tracking-widest hover:border-[#d99b43] hover:text-[#d99b43] transition-all duration-300 bg-white/[0.02]"
              >
                <span>The Editor&apos;s Room</span>
              </Link>
            </div>
          </div>

          {/* Right: Floating Sculptural Frame Preview */}
          <div className="lg:col-span-5 relative">
            <Link
              href={`/work/${heroProject.slug}`}
              className="group block relative aspect-cinemascope sm:aspect-video rounded-none overflow-hidden bg-[#020306] border border-white/[0.12] hover:border-[#d99b43] transition-all duration-700 shadow-2xl"
              data-cursor="open"
            >
              <Image
                src={heroProject.poster}
                alt={heroProject.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] text-[#cfc8ba] uppercase">
                <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/[0.1] text-[#d99b43]">
                  FEATURED SELECTION
                </span>
                <span className="text-[#958e80]">{heroProject.aspectRatio}</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#f7f3eb]">
                <div>
                  <div className="font-serif text-xl sm:text-2xl group-hover:text-[#d99b43] transition-colors">
                    {heroProject.title}
                  </div>
                  <div className="font-mono text-[10px] text-[#958e80] uppercase">
                    {heroProject.clientOrDirector} • {heroProject.year}
                  </div>
                </div>
                <div className="p-2 rounded-full bg-[#f7f3eb] text-[#05070c] group-hover:bg-[#d99b43] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-[#958e80]">
              <span>[ 01 / 07 ] VENICE & ROTTERDAM</span>
              <span className="text-[#d99b43]">CLICK TO INSPECT CUT</span>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Cue */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-white/[0.08] flex items-center justify-between font-mono text-xs text-[#958e80]">
          <div className="flex items-center gap-3">
            <ArrowDown className="w-3.5 h-3.5 text-[#d99b43] animate-bounce" />
            <span className="uppercase tracking-widest text-[#cfc8ba]">
              Drag Horizontal Reel Below
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-6">
            <span>DaVinci Resolve Studio 19</span>
            <span>•</span>
            <span>Premiere Pro</span>
            <span>•</span>
            <span>Avid Media Composer</span>
          </div>
        </div>
      </section>

      {/* 2. Interactive Draggable Horizontal Gallery */}
      <section className="py-20 border-b border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#d99b43] block mb-2">
              {'// 01 Selected Filmography'}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#f7f3eb] font-normal">
              Tactile Motion Gallery
            </h2>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#f7f3eb] hover:text-[#d99b43] transition-colors"
          >
            <span>View Complete Filmography Table</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#d99b43]" />
          </Link>
        </div>

        <DraggableGallery projects={PROJECTS} />
      </section>

      {/* 3. Editor's Room Manifesto Teaser */}
      <section className="py-24 px-6 sm:px-8 border-b border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-widest text-[#d99b43] block mb-3">
              {'// 02 The Editor\'s Discipline'}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#f7f3eb] leading-tight mb-6">
              Editing is invisible governance.
            </h2>
            <p className="text-sm sm:text-base text-[#cfc8ba] font-light leading-relaxed mb-8">
              True editing is invisible when emotional resonance demands it, and brutally surgical
              when visceral velocity is required. Every cut is measured against human heartbeat and eye trace.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.12] font-mono text-xs uppercase tracking-widest text-[#f7f3eb] hover:border-[#d99b43] hover:text-[#d99b43] transition-colors"
            >
              <span>Explore Harsh&apos;s Methodology</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HARSH_PROFILE.disciplines.slice(0, 4).map((disc, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#070b14]/70 border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs text-[#d99b43] mb-2">[0{idx + 1}]</div>
                  <h3 className="font-serif text-xl text-[#f7f3eb] mb-2">{disc.title}</h3>
                  <p className="text-xs text-[#cfc8ba] font-light leading-relaxed mb-4">
                    {disc.description}
                  </p>
                </div>
                <div className="font-mono text-[10px] text-[#958e80] pt-3 border-t border-white/[0.06]">
                  {disc.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact & Commission Prompt */}
      <section className="py-24 px-6 sm:px-8 relative bg-[#04060b]/40 backdrop-blur-sm border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#d99b43] block mb-3">
              {'// 03 Commission Availability'}
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#f7f3eb] leading-tight mb-4">
              Initiate a Cut Dialogue
            </h2>
            <p className="max-w-xl text-sm sm:text-base text-[#cfc8ba] font-light leading-relaxed">
              Available for select narrative features, high-concept commercial campaigns, and music
              films for Q1/Q2 2026.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#f7f3eb] text-[#05070c] font-mono text-xs uppercase tracking-widest hover:bg-[#d99b43] transition-colors font-medium"
            >
              <span>Transmit Project Brief</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={`mailto:${HARSH_PROFILE.contactEmail}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/[0.12] text-[#f7f3eb] font-mono text-xs uppercase tracking-widest hover:border-[#d99b43] hover:text-[#d99b43] transition-colors"
            >
              <span>Direct Email</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
