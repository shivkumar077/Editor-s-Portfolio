'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';
import { HARSH_PROFILE, DEVELOPER_PROFILE } from '@/data/projects';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 sm:px-8 bg-[#060608] border-t border-white/[0.08] relative select-none">
      <div className="max-w-7xl mx-auto flex flex-col justify-between gap-12">
        {/* Top Strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-12 border-b border-white/[0.06]">
          <div className="flex items-center gap-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d9a05b]" />
            <span className="font-serif tracking-[0.25em] text-xl font-medium text-[#f5f0e6]">
              HARSH
            </span>
            <span className="text-white/[0.15]">/</span>
            <span className="font-mono text-xs text-[#9c9588] tracking-widest uppercase">
              The Auteur Edition
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9c9588] hover:text-[#f5f0e6] transition-colors focus:outline-none"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-[#d9a05b] group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Middle Colophon Details */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 font-mono text-xs text-[#9c9588]">
          <div>
            <div className="text-[#f5f0e6] uppercase tracking-wider mb-2">Editorial Lead</div>
            <p className="text-[#cfc8ba] leading-relaxed">
              {HARSH_PROFILE.name} — Film & Commercial Editor. Calibrated for 24fps narrative
              and high-impact temporal rhythm.
            </p>
          </div>

          <div>
            <div className="text-[#f5f0e6] uppercase tracking-wider mb-2">Architecture & Code</div>
            <p className="text-[#cfc8ba] leading-relaxed">
              {DEVELOPER_PROFILE.name} — Built with Next.js 16, React 19, TypeScript, and custom
              cinema frame mechanics.
            </p>
          </div>

          <div>
            <div className="text-[#f5f0e6] uppercase tracking-wider mb-2">Sound & Video Policy</div>
            <p className="text-[#cfc8ba] leading-relaxed">
              Strictly zero autoplay audio. Video previews stream silent in accordance with industry
              standards.
            </p>
          </div>

          <div>
            <div className="text-[#f5f0e6] uppercase tracking-wider mb-2">Location & Transit</div>
            <p className="text-[#cfc8ba] leading-relaxed">
              Mumbai, India (IST). Remote workflows facilitated via Frame.io C2C and high-speed
              proxies.
            </p>
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#847e72]">
          <div>
            © 2026 Harsh. All cinematographic rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>WCAG AAA Compliant</span>
            <span>•</span>
            <span>Prefers-Reduced-Motion Enabled</span>
            <span>•</span>
            <a
              href={DEVELOPER_PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9c9588] hover:text-[#d9a05b] transition-colors"
            >
              GitHub Source
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
