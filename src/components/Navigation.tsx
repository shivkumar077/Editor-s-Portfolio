'use client';

import React, { useState, useEffect } from 'react';
import { VolumeX, Menu, X, Clock, ArrowUpRight } from 'lucide-react';

export function Navigation({
  onOpenContact,
}: {
  onOpenContact?: () => void;
}) {
  const [timeStr, setTimeStr] = useState<string>('00:00:00');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString('en-GB', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
      });
      setTimeStr(istTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work', number: '01' },
    { label: 'Philosophy', href: '#philosophy', number: '02' },
    { label: 'Developer', href: '#developer', number: '03' },
    { label: 'Contact', href: '#contact', number: '04' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5'
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand & Status */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="group flex items-center gap-3 focus-visible:outline-none"
              aria-label="Harsh — Return to top"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#d9a05b] inline-block animate-pulse" />
              <span className="font-serif tracking-[0.25em] text-lg font-medium text-[#f5f0e6] group-hover:text-[#d9a05b] transition-colors">
                HARSH
              </span>
              <span className="hidden sm:inline-block font-mono text-[11px] text-[#9c9588] tracking-widest uppercase border-l border-white/[0.12] pl-3">
                Cutting Room // 24 FPS
              </span>
            </a>
          </div>

          {/* Center: Live Timecode & Reel Status */}
          <div className="hidden lg:flex items-center gap-5 font-mono text-xs text-[#9c9588] tracking-wider">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#d9a05b]" />
              <span>MUMBAI {timeStr} IST</span>
            </div>
            <span className="text-white/[0.15]">•</span>
            <div className="flex items-center gap-2 text-[#cfc8ba]">
              <VolumeX className="w-3.5 h-3.5 text-[#9c9588]" />
              <span className="text-[11px] uppercase tracking-widest text-[#9c9588]">
                Audio Muted // Video Scrub Ready
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#9c9588] hover:text-[#f5f0e6] transition-colors"
              >
                <span className="text-[10px] text-[#d9a05b]/70 group-hover:text-[#d9a05b]">
                  {item.number}
                </span>
                <span>{item.label}</span>
              </a>
            ))}

            <a
              href="#contact"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider text-[#08080a] bg-[#f5f0e6] hover:bg-[#d9a05b] transition-all duration-300"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="#contact"
              className="px-3 py-1 rounded-full text-xs font-mono tracking-wider text-[#08080a] bg-[#f5f0e6]"
            >
              Inquire
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#f5f0e6] hover:text-[#d9a05b] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#08080a]/98 backdrop-blur-xl flex flex-col justify-between px-8 py-24 md:hidden transition-all duration-500"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-8">
            <div className="font-mono text-xs text-[#d9a05b] tracking-widest uppercase">
              {'// Navigation Index'}
            </div>
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-baseline justify-between border-b border-white/[0.08] pb-4"
              >
                <span className="font-serif text-3xl text-[#f5f0e6] hover:text-[#d9a05b] transition-colors">
                  {item.label}
                </span>
                <span className="font-mono text-xs text-[#9c9588] tracking-widest">
                  [{item.number}]
                </span>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 font-mono text-xs text-[#9c9588] border-t border-white/[0.08] pt-6">
            <div className="flex justify-between items-center text-[#cfc8ba]">
              <span>MUMBAI TIME:</span>
              <span className="text-[#f5f0e6]">{timeStr} IST</span>
            </div>
            <div className="flex justify-between items-center">
              <span>STATUS:</span>
              <span className="text-[#d9a05b]">Accepting Commissions</span>
            </div>
            <div className="text-[11px] text-[#9c9588] mt-2">
              All video previews stream muted in accordance with editorial audio standards.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
