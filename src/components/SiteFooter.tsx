'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { DEVELOPER_PROFILE } from '@/data/projects';

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 py-20 px-6 sm:px-8 bg-[#04060a]/75 backdrop-blur-md border-t border-white/[0.08] select-none">
      <div className="max-w-7xl mx-auto flex flex-col justify-between gap-16">
        {/* End Credits Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-12 border-b border-white/[0.08]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#d99b43] mb-3 block">
              {'// Cinematic End Credits'}
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#f7f3eb] font-normal tracking-tight">
              HARSH // LIQUID CINEMA
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#958e80] hover:text-[#f7f3eb] transition-colors focus:outline-none"
              aria-label="Scroll to top of page"
            >
              <span>Back to Surface</span>
              <ArrowUp className="w-4 h-4 text-[#d99b43] group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Column Editorial Credits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 font-mono text-xs text-[#958e80]">
          <div>
            <div className="text-[#f7f3eb] uppercase tracking-wider mb-3">Film & Commercial Editor</div>
            <p className="text-[#cfc8ba] leading-relaxed mb-4">
              Harsh — Crafting human breath, tension, and narrative momentum in 24fps.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1 text-[#d99b43] hover:underline"
            >
              <span>Read Editor Profile</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          <div>
            <div className="text-[#f7f3eb] uppercase tracking-wider mb-3">Architectural Colophon</div>
            <p className="text-[#cfc8ba] leading-relaxed mb-4">
              Designed & Engineered by {DEVELOPER_PROFILE.name} — Built with Next.js 16, React 19, and GPU-driven WebGL dynamics.
            </p>
            <Link
              href="/credits"
              className="inline-flex items-center gap-1 text-[#d99b43] hover:underline"
            >
              <span>Inspect Colophon</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          <div>
            <div className="text-[#f7f3eb] uppercase tracking-wider mb-3">Selected Filmography</div>
            <ul className="space-y-2 text-[#cfc8ba]">
              <li>
                <Link href="/work" className="hover:text-[#f7f3eb] transition-colors">
                  • 07 Curated Works (2023–2025)
                </Link>
              </li>
              <li>
                <Link href="/work/chronicles-of-dust" className="hover:text-[#f7f3eb] transition-colors">
                  • Chronicles of Dust (Venice Shorts)
                </Link>
              </li>
              <li>
                <Link href="/work/the-last-horizon" className="hover:text-[#f7f3eb] transition-colors">
                  • The Last Horizon (Alpine Doc)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[#f7f3eb] uppercase tracking-wider mb-3">Booking & Inquiries</div>
            <p className="text-[#cfc8ba] leading-relaxed mb-4">
              Operating globally via Frame.io C2C and high-speed encrypted proxies.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-[#d99b43] hover:underline"
            >
              <span>Initiate Dialogue</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#6b6559]">
          <div>
            © 2026 Harsh. All cinematographic rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>WCAG AAA Compliant</span>
            <span>•</span>
            <span>Zero Autoplay Audio</span>
            <span>•</span>
            <a
              href={DEVELOPER_PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#958e80] hover:text-[#d99b43] transition-colors"
            >
              GitHub Source
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
