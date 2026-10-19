import React from 'react';
import { Metadata } from 'next';
import { Terminal, Code, GitBranch, ExternalLink } from 'lucide-react';
import { DEVELOPER_PROFILE } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Architectural Credits & Colophon // Shivkumar',
  description:
    'Engineering manifesto, performance budget, and technical colophon for Harsh\'s Liquid Cinema portfolio by Shivkumar.',
};

export default function CreditsPage() {
  return (
    <main id="main-content" className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full select-none">
      {/* Header */}
      <div className="max-w-3xl mb-16 pb-12 border-b border-white/[0.08]">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#d99b43] mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>{'// 03 Colophon & Engineering Credits'}</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#f7f3eb] font-normal tracking-tight leading-tight mb-6">
          Architectural Colophon // {DEVELOPER_PROFILE.name}
        </h1>

        <p className="text-base sm:text-lg text-[#cfc8ba] font-sans font-light leading-relaxed">
          {DEVELOPER_PROFILE.statement}
        </p>
      </div>

      {/* 3 Engineering Pillars */}
      <section className="mb-20">
        <div className="font-mono text-xs uppercase tracking-widest text-[#958e80] mb-8">
          {'// Core Software Architecture Principles'}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEVELOPER_PROFILE.engineeringPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#070b14]/70 border border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#d99b43]">PILLAR // 0{idx + 1}</span>
                  <Code className="w-4 h-4 text-[#958e80]" />
                </div>
                <h2 className="font-serif text-2xl text-[#f7f3eb] mb-3 font-normal">{pillar.title}</h2>
                <p className="text-sm text-[#cfc8ba] font-light leading-relaxed">{pillar.desc}</p>
              </div>
              <div className="w-8 h-[1px] bg-white/[0.15] mt-6" />
            </div>
          ))}
        </div>
      </section>

      {/* Technical Stack & Performance Budgets */}
      <section className="p-8 sm:p-12 bg-[#070b14]/80 border border-white/[0.08] mb-20">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12">
          <div className="lg:max-w-md">
            <span className="font-mono text-xs uppercase tracking-widest text-[#d99b43] mb-3 block">
              {'// Engineering Specifications'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#f7f3eb] mb-4 font-normal">
              Zero-Bloat Digital Craft
            </h2>
            <p className="text-sm text-[#cfc8ba] font-light leading-relaxed mb-6">
              Unlike generic portfolio templates reliant on heavy UI frameworks and excessive runtime
              scripts, this digital space runs on a stripped-back, high-performance static Next.js 16
              architecture delivering instantaneous navigation and fluid 60fps animations.
            </p>
            <div className="space-y-2 font-mono text-xs text-[#958e80]">
              <div className="flex justify-between border-b border-white/[0.06] pb-2">
                <span>Core Web Vitals CLS:</span>
                <span className="text-[#f7f3eb]">0.00 (Zero Layout Shift)</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.06] pb-2">
                <span>Hydration Time:</span>
                <span className="text-[#f7f3eb]">&lt; 120ms</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.06] pb-2">
                <span>Contrast Ratio:</span>
                <span className="text-[#d99b43]">15.2:1 (Exceeds WCAG AAA)</span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="font-mono text-xs uppercase tracking-widest text-[#958e80] mb-4">
              {'// Technology Stack Tokens'}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {DEVELOPER_PROFILE.stack.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-black/60 border border-white/[0.08] font-mono text-xs text-[#f7f3eb]"
                >
                  <span className="text-[#d99b43] mr-1.5">•</span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-xs text-[#958e80]">
                Source code hosted and verified on GitHub
              </span>
              <a
                href={DEVELOPER_PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f7f3eb] text-[#05070c] font-mono text-xs uppercase tracking-widest hover:bg-[#d99b43] transition-colors font-medium"
              >
                <GitBranch className="w-4 h-4" />
                <span>Inspect Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
