'use client';

import React, { useState } from 'react';
import { HARSH_PROFILE } from '@/data/projects';
import {
  Mail,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'Narrative Short',
    timeline: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(HARSH_PROFILE.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Create a mailto URL with prefilled details
    const subject = encodeURIComponent(`[Commission Inquiry] ${formState.projectType} — ${formState.name}`);
    const body = encodeURIComponent(
      `Director/Client: ${formState.name}\n` +
      `Contact: ${formState.email}\n` +
      `Project Format: ${formState.projectType}\n` +
      `Target Delivery: ${formState.timeline}\n\n` +
      `Project Brief:\n${formState.message}`
    );

    window.location.href = `mailto:${HARSH_PROFILE.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#d9a05b] mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>[04] Commission & Booking</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e6] font-normal tracking-tight leading-tight mb-6">
            Initiate a Cutting Room Dialogue
          </h2>

          <p className="text-base sm:text-lg text-[#cfc8ba] font-sans font-light leading-relaxed">
            Harsh accepts a strictly limited volume of narrative features, high-concept commercial
            spots, and visionary music films each season to ensure uncompromising devotion to every
            frame.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Access & Booking Details */}
          <div className="lg:col-span-5 space-y-8">
            {/* Availability Badge Card */}
            <div className="p-6 bg-[#0a0a0e] border border-white/[0.08] relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#d9a05b] animate-ping" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#d9a05b]">
                  Current Availability
                </span>
              </div>
              <p className="font-serif text-xl text-[#f5f0e6] mb-2">{HARSH_PROFILE.availability}</p>
              <p className="text-xs text-[#9c9588] font-mono leading-relaxed">
                Operating globally via Frame.io C2C and high-speed encrypted proxy arrays. Based in
                Mumbai.
              </p>
            </div>

            {/* Direct Email with Copy Button */}
            <div className="p-6 bg-[#0a0a0e] border border-white/[0.08]">
              <div className="font-mono text-xs uppercase tracking-widest text-[#9c9588] mb-3">
                Direct Correspondence
              </div>
              <div className="flex items-center justify-between gap-4 p-3 bg-black/60 border border-white/[0.1] rounded mb-3">
                <span className="font-mono text-xs sm:text-sm text-[#f5f0e6] select-all truncate">
                  {HARSH_PROFILE.contactEmail}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/[0.08] hover:bg-[#d9a05b] hover:text-[#08080a] text-xs font-mono text-[#f5f0e6] transition-colors focus:outline-none"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${HARSH_PROFILE.contactEmail}`}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#d9a05b] hover:underline"
              >
                <span>Launch default mail client</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Social & Industry Directories */}
            <div className="p-6 bg-[#0a0a0e] border border-white/[0.08]">
              <div className="font-mono text-xs uppercase tracking-widest text-[#9c9588] mb-4">
                Filmography Channels
              </div>
              <div className="grid grid-cols-2 gap-3">
                {HARSH_PROFILE.socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black/40 border border-white/[0.06] hover:border-white/[0.2] transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-mono text-xs text-[#f5f0e6] group-hover:text-[#d9a05b] transition-colors">
                        {social.label}
                      </div>
                      <div className="font-mono text-[10px] text-[#9c9588]">{social.handle}</div>
                    </div>
                    <ExternalLink className="w-3 h-3 text-[#9c9588] group-hover:text-[#d9a05b] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Brief Composer */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-[#0a0a0e] border border-white/[0.08]">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#d9a05b] mb-4">
              <MessageSquare className="w-4 h-4" />
              <span>Project Inquiry Sheet</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#f5f0e6] mb-6">
              Tell Harsh About the Vision
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="client-name"
                    className="block font-mono text-xs uppercase tracking-wider text-[#9c9588] mb-2"
                  >
                    Your Name / Production Company *
                  </label>
                  <input
                    id="client-name"
                    required
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alistair Vance // Solitude Filmworks"
                    className="w-full px-4 py-3 bg-[#08080a] border border-white/[0.1] rounded text-[#f5f0e6] font-mono text-xs placeholder:text-[#4e4a42] focus:border-[#d9a05b] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="client-email"
                    className="block font-mono text-xs uppercase tracking-wider text-[#9c9588] mb-2"
                  >
                    Contact Email *
                  </label>
                  <input
                    id="client-email"
                    required
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="director@studio.com"
                    className="w-full px-4 py-3 bg-[#08080a] border border-white/[0.1] rounded text-[#f5f0e6] font-mono text-xs placeholder:text-[#4e4a42] focus:border-[#d9a05b] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="project-type"
                    className="block font-mono text-xs uppercase tracking-wider text-[#9c9588] mb-2"
                  >
                    Project Category
                  </label>
                  <select
                    id="project-type"
                    value={formState.projectType}
                    onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                    className="w-full px-4 py-3 bg-[#08080a] border border-white/[0.1] rounded text-[#f5f0e6] font-mono text-xs focus:border-[#d9a05b] focus:outline-none transition-colors"
                  >
                    <option value="Narrative Short / Feature">Narrative Short / Feature</option>
                    <option value="Commercial / Brand Campaign">Commercial / Brand Campaign</option>
                    <option value="Music Video / Cine-Poem">Music Video / Cine-Poem</option>
                    <option value="Documentary Short / Series">Documentary Short / Series</option>
                    <option value="Fashion & Art Film">Fashion & Art Film</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="project-timeline"
                    className="block font-mono text-xs uppercase tracking-wider text-[#9c9588] mb-2"
                  >
                    Target Delivery Window
                  </label>
                  <input
                    id="project-timeline"
                    type="text"
                    value={formState.timeline}
                    onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                    placeholder="e.g. Rough cut by May 2026"
                    className="w-full px-4 py-3 bg-[#08080a] border border-white/[0.1] rounded text-[#f5f0e6] font-mono text-xs placeholder:text-[#4e4a42] focus:border-[#d9a05b] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="project-brief"
                  className="block font-mono text-xs uppercase tracking-wider text-[#9c9588] mb-2"
                >
                  Project Brief & Editorial Scope *
                </label>
                <textarea
                  id="project-brief"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Outline the narrative premise, shooting format (ARRI/RED/16mm), estimated raw footage runtime, and desired emotional cadence..."
                  className="w-full px-4 py-3 bg-[#08080a] border border-white/[0.1] rounded text-[#f5f0e6] font-mono text-xs placeholder:text-[#4e4a42] focus:border-[#d9a05b] focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#f5f0e6] text-[#08080a] font-mono text-xs uppercase tracking-widest hover:bg-[#d9a05b] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Project Brief to Harsh</span>
              </button>

              {submitted && (
                <div className="p-3 bg-green-950/40 border border-green-800/40 rounded text-center font-mono text-xs text-green-300">
                  Brief formatted and forwarded to mail client. Harsh responds within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
