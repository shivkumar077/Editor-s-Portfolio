'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Clock, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const [timeStr, setTimeStr] = useState('00:00:00');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const istTime = new Date().toLocaleTimeString('en-GB', {
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
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '/work', index: '01' },
    { label: 'About', href: '/about', index: '02' },
    { label: 'Credits', href: '/credits', index: '03' },
    { label: 'Contact', href: '/contact', index: '04' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#05070c]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl'
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Mark */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Harsh — Liquid Cinema Home"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#d99b43] inline-block animate-pulse" />
            <span className="font-serif tracking-[0.22em] text-lg font-medium text-[#f7f3eb] group-hover:text-[#d99b43] transition-colors">
              HARSH
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] text-[#958e80] tracking-widest uppercase border-l border-white/[0.12] pl-3">
              Liquid Cinema // 24 FPS
            </span>
          </Link>

          {/* Center: Live Timecode & Sound Indicator */}
          <div className="hidden lg:flex items-center gap-5 font-mono text-xs text-[#958e80] tracking-wider">
            <div className="flex items-center gap-2 text-[#cfc8ba]">
              <Clock className="w-3.5 h-3.5 text-[#d99b43]" />
              <span>MUMBAI {timeStr} IST</span>
            </div>
            <span className="text-white/[0.15]">•</span>
            <div className="flex items-center gap-2 text-[#958e80]">
              <VolumeX className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase tracking-widest">
                AUDIO MUTED // 24 FPS PROXIES
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest transition-colors ${
                    isActive ? 'text-[#d99b43] font-medium' : 'text-[#958e80] hover:text-[#f7f3eb]'
                  }`}
                >
                  <span
                    className={`text-[10px] ${
                      isActive ? 'text-[#d99b43]' : 'text-[#d99b43]/50 group-hover:text-[#d99b43]'
                    }`}
                  >
                    {item.index}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider text-[#05070c] bg-[#f7f3eb] hover:bg-[#d99b43] transition-all duration-300 font-medium"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="/contact"
              className="px-3 py-1 rounded-full text-xs font-mono tracking-wider text-[#05070c] bg-[#f7f3eb]"
            >
              Inquire
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-[#f7f3eb] hover:text-[#d99b43] focus:outline-none"
              aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#05070c]/98 backdrop-blur-2xl flex flex-col justify-between px-8 py-24 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-8">
            <div className="font-mono text-xs text-[#d99b43] tracking-widest uppercase">
              {'// Navigation Index'}
            </div>
            {navItems.map((item) => {
              const isActive =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-baseline justify-between border-b border-white/[0.08] pb-4"
                >
                  <span
                    className={`font-serif text-3xl transition-colors ${
                      isActive ? 'text-[#d99b43]' : 'text-[#f7f3eb]'
                    }`}
                  >
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-[#958e80] tracking-widest">
                    [{item.index}]
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-3 font-mono text-xs text-[#958e80] border-t border-white/[0.08] pt-6">
            <div className="flex justify-between items-center text-[#cfc8ba]">
              <span>MUMBAI TIME:</span>
              <span className="text-[#f7f3eb]">{timeStr} IST</span>
            </div>
            <div className="flex justify-between items-center">
              <span>STATUS:</span>
              <span className="text-[#d99b43]">Available for Q1/Q2 2026</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
