import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Film, Award, Sliders, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { HARSH_PROFILE } from '@/data/projects';

export const metadata: Metadata = {
  title: 'About Harsh — Film & Commercial Editor',
  description:
    'Harsh is a film and commercial editor specializing in rhythmic momentum, narrative psychology, and high-impact sound design.',
};

export default function AboutPage() {
  return (
    <main id="main-content" className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full select-none">
      {/* Header & Portrait / Editorial Duo */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24 pb-16 border-b border-white/[0.08]">
        {/* Left: Bio & Manifesto */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#d99b43] mb-4">
            <Film className="w-3.5 h-3.5" />
            <span>{'// 02 The Editor\'s Room // Profile'}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#f7f3eb] font-normal tracking-tight leading-tight mb-6">
            Editing is the invisible governance of human attention.
          </h1>

          <p className="text-base sm:text-lg text-[#cfc8ba] font-sans font-light leading-relaxed mb-8">
            {HARSH_PROFILE.bioSummary}
          </p>

          <div className="p-6 bg-[#070b14]/80 border-l-2 border-[#d99b43] mb-8 font-serif italic text-lg sm:text-xl text-[#f7f3eb]">
            &ldquo;A cut is never merely a splice in time. It is a breath, a pulse, a deliberate calibration of human neuro-rhythm.&rdquo;
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#f7f3eb] text-[#05070c] font-mono text-xs uppercase tracking-widest hover:bg-[#d99b43] transition-colors font-medium"
            >
              <span>Explore Selected Cuts</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/[0.12] text-[#f7f3eb] font-mono text-xs uppercase tracking-widest hover:border-[#d99b43] hover:text-[#d99b43] transition-colors"
            >
              <span>Book a Consultation</span>
            </Link>
          </div>
        </div>

        {/* Right: Portrait / Studio Silhouette Placeholder Frame */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[3/4] bg-[#070b14] border border-white/[0.1] p-8 flex flex-col justify-between overflow-hidden shadow-2xl">
            {/* Ambient Background Graphic */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#101726]/40 via-[#070b14] to-[#04060b] pointer-events-none" />

            <div className="relative z-10 font-mono text-xs text-[#958e80] uppercase tracking-wider flex justify-between">
              <span>EST. MUMBAI // 2026</span>
              <span className="text-[#d99b43]">STUDIO MONITORING</span>
            </div>

            <div className="relative z-10 my-auto text-center py-12">
              <span className="font-serif text-5xl sm:text-7xl font-bold tracking-[0.2em] text-[#f7f3eb]/20 block mb-3">
                HARSH
              </span>
              <div className="font-mono text-xs text-[#cfc8ba] uppercase tracking-widest">
                Lead Film Editor & Colorist
              </div>
              <div className="text-[11px] text-[#958e80] mt-2 font-mono">
                [ PORTRAIT PLACEHOLDER // CUTTING SUITE SILHOUETTE ]
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/[0.08] font-mono text-xs text-[#958e80] flex justify-between">
              <span>Frame.io C2C Certified</span>
              <span>10-Bit DCI-P3</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Tenets */}
      <section className="mb-24 pb-16 border-b border-white/[0.08]">
        <div className="font-mono text-xs uppercase tracking-widest text-[#958e80] mb-8">
          {'// The Three Pillars of the Cutting Room'}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HARSH_PROFILE.manifesto.map((tenet, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#070b14]/70 border border-white/[0.08] flex flex-col justify-between"
            >
              <div className="font-mono text-xs text-[#d99b43] mb-6">
                TENET // 0{idx + 1}
              </div>
              <p className="font-serif text-xl sm:text-2xl text-[#f7f3eb] leading-snug font-normal">
                &ldquo;{tenet}&rdquo;
              </p>
              <div className="w-8 h-[1px] bg-white/[0.2] mt-8" />
            </div>
          ))}
        </div>
      </section>

      {/* 4 Core Disciplines */}
      <section className="mb-24 pb-16 border-b border-white/[0.08]">
        <div className="font-mono text-xs uppercase tracking-widest text-[#958e80] mb-8">
          {'// Technical Disciplines & Craft'}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HARSH_PROFILE.disciplines.map((disc, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#070b14]/70 border border-white/[0.08] hover:border-white/[0.2] transition-colors"
            >
              <div className="font-mono text-xs text-[#958e80] mb-2">[0{idx + 1}]</div>
              <h2 className="font-serif text-2xl text-[#f7f3eb] mb-3">{disc.title}</h2>
              <p className="text-sm text-[#cfc8ba] font-light leading-relaxed mb-6">
                {disc.description}
              </p>
              <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-[#d99b43]">
                {disc.metric}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hardware & NLE Suite */}
      <section className="mb-24 pb-16 border-b border-white/[0.08]">
        <div className="p-8 sm:p-12 bg-[#070b14]/80 border border-white/[0.08]">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12">
            <div className="lg:max-w-md">
              <div className="font-mono text-xs uppercase tracking-widest text-[#d99b43] mb-3 flex items-center gap-2">
                <Sliders className="w-4 h-4" />
                <span>The Editing Rig</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#f7f3eb] mb-4 font-normal">
                Hardware, Monitoring & NLE Toolchain
              </h2>
              <p className="text-sm text-[#cfc8ba] font-light leading-relaxed">
                A pristine technical environment is non-negotiable. Every edit is assembled and
                graded on 10-bit DCI-P3 calibrated displays with Genelec acoustic monitoring,
                ensuring seamless translation to cinema projection, broadcast, and mobile screens.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 flex-1">
              {HARSH_PROFILE.hardwareAndSuite.map((group, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="font-mono text-xs text-[#f7f3eb] uppercase tracking-wider pb-2 border-b border-white/[0.08]">
                    {group.category}
                  </div>
                  <ul className="space-y-2">
                    {group.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-xs text-[#cfc8ba] font-mono flex items-start gap-2"
                      >
                        <span className="text-[#d99b43] mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Screenings & Festival Laurels */}
      <section>
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#d99b43] mb-6">
          <Award className="w-4 h-4" />
          <span>Festival Selections & Honors</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {HARSH_PROFILE.awardsAndRecognition.map((award, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#070b14]/70 border border-white/[0.06] flex items-center gap-3 font-mono text-xs text-[#f7f3eb]"
            >
              <CheckCircle2 className="w-4 h-4 text-[#d99b43] shrink-0" />
              <span>{award}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
