'use client';

import React from 'react';
import { HARSH_PROFILE } from '@/data/projects';
import { Sliders, Film, Award, CheckCircle2 } from 'lucide-react';

export function HarshAboutSection() {
  return (
    <section id="philosophy" className="py-24 px-6 sm:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#d9a05b] mb-4">
            <Film className="w-3.5 h-3.5" />
            <span>[02] The Editor&apos;s Philosophy // Harsh</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e6] font-normal tracking-tight leading-tight mb-6">
            Editing is the invisible governance of emotion.
          </h2>

          <p className="text-base sm:text-lg text-[#cfc8ba] font-sans font-light leading-relaxed">
            {HARSH_PROFILE.bioSummary}
          </p>
        </div>

        {/* The 3 Core Manifesto Tenets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {HARSH_PROFILE.manifesto.map((tenet, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#0a0a0e] border border-white/[0.08] relative flex flex-col justify-between"
            >
              <div className="font-mono text-xs text-[#d9a05b] mb-6">
                TENET // 0{idx + 1}
              </div>
              <p className="font-serif text-xl sm:text-2xl text-[#f5f0e6] leading-snug font-normal">
                &ldquo;{tenet}&rdquo;
              </p>
              <div className="w-8 h-[1px] bg-white/[0.2] mt-8" />
            </div>
          ))}
        </div>

        {/* 4 Core Disciplines Grid */}
        <div className="mb-20">
          <div className="font-mono text-xs uppercase tracking-widest text-[#9c9588] mb-6">
            {'// Core Cutting Room Disciplines'}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HARSH_PROFILE.disciplines.map((disc, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#0a0a0d] border border-white/[0.08] hover:border-white/[0.2] transition-colors"
              >
                <div className="font-mono text-xs text-[#9c9588] mb-2">[0{idx + 1}]</div>
                <h3 className="font-serif text-2xl text-[#f5f0e6] mb-3">{disc.title}</h3>
                <p className="text-sm text-[#cfc8ba] font-light leading-relaxed mb-6">
                  {disc.description}
                </p>
                <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-[#d9a05b]">
                  {disc.metric}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Suite & Hardware Rack */}
        <div className="p-8 sm:p-12 bg-[#09090c] border border-white/[0.08] mb-20">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12">
            <div className="lg:max-w-md">
              <div className="font-mono text-xs uppercase tracking-widest text-[#d9a05b] mb-3 flex items-center gap-2">
                <Sliders className="w-4 h-4" />
                <span>The Technical Suite</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#f5f0e6] mb-4">
                Hardware, Monitoring & NLE Toolchain
              </h3>
              <p className="text-sm text-[#cfc8ba] font-light leading-relaxed">
                A pristine technical environment is non-negotiable. Every edit is assembled and
                graded on 10-bit DCI-P3 calibrated displays with Genelec acoustic monitoring,
                ensuring seamless translation to cinema projection, broadcast, and mobile screens.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 flex-1">
              {HARSH_PROFILE.hardwareAndSuite.map((group, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="font-mono text-xs text-[#f5f0e6] uppercase tracking-wider pb-2 border-b border-white/[0.08]">
                    {group.category}
                  </div>
                  <ul className="space-y-2">
                    {group.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-xs text-[#cfc8ba] font-mono flex items-start gap-2"
                      >
                        <span className="text-[#d9a05b] mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Accolades & Festival Selections */}
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#d9a05b] mb-6">
            <Award className="w-4 h-4" />
            <span>Festival Laurels & Screenings</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HARSH_PROFILE.awardsAndRecognition.map((award, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#0a0a0d] border border-white/[0.06] flex items-center gap-3 font-mono text-xs text-[#f5f0e6]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#d9a05b] shrink-0" />
                <span>{award}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
