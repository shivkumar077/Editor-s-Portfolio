'use client';

import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import { HARSH_PROFILE } from '@/data/projects';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'Narrative Short / Feature',
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

    const subject = encodeURIComponent(
      `[Commission Inquiry] ${formState.projectType} — ${formState.name}`
    );
    const body = encodeURIComponent(
      `Director/Client: ${formState.name}\n` +
      `Contact Email: ${formState.email}\n` +
      `Project Category: ${formState.projectType}\n` +
      `Target Delivery: ${formState.timeline}\n\n` +
      `Project Brief:\n${formState.message}`
    );

    window.location.href = `mailto:${HARSH_PROFILE.contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main id="main-content" className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full select-none">
      {/* Header with Oversized Typography */}
      <div className="max-w-4xl mb-16 pb-12 border-b border-white/[0.08]">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#d99b43] mb-4">
          <Mail className="w-3.5 h-3.5" />
          <span>{'// 04 Commission & Inquiry Dialogue'}</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-7xl lg:text-8xl text-[#f7f3eb] font-normal tracking-tight leading-[1.04] mb-8">
          Initiate a Cutting Room Dialogue
        </h1>

        <p className="text-base sm:text-xl text-[#cfc8ba] font-sans font-light leading-relaxed">
          Harsh accepts a strictly curated roster of narrative features, commercial films, and
          cinematic music videos per season to ensure frame-by-frame devotion.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Access & Channels */}
        <div className="lg:col-span-5 space-y-8">
          {/* Availability Status Card */}
          <div className="p-8 bg-[#070b14]/80 border border-white/[0.08] relative">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#d99b43] animate-ping" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#d99b43]">
                Commission Availability
              </span>
            </div>
            <p className="font-serif text-2xl text-[#f7f3eb] mb-2">{HARSH_PROFILE.availability}</p>
            <p className="text-xs text-[#958e80] font-mono leading-relaxed">
              Operating globally via Frame.io Camera-to-Cloud and high-speed encrypted proxy arrays.
              Based in Mumbai (IST).
            </p>
          </div>

          {/* Email with Instant Copy Action */}
          <div className="p-8 bg-[#070b14]/80 border border-white/[0.08]">
            <div className="font-mono text-xs uppercase tracking-widest text-[#958e80] mb-3">
              Direct Correspondence
            </div>
            <div className="flex items-center justify-between gap-4 p-3.5 bg-black/60 border border-white/[0.1] rounded mb-4">
              <span className="font-mono text-xs sm:text-sm text-[#f7f3eb] select-all truncate">
                {HARSH_PROFILE.contactEmail}
              </span>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/[0.08] hover:bg-[#d99b43] hover:text-[#05070c] text-xs font-mono text-[#f7f3eb] transition-colors focus:outline-none"
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
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#d99b43] hover:underline"
            >
              <span>Launch mail client directly</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Social Channels & Directories */}
          <div className="p-8 bg-[#070b14]/80 border border-white/[0.08]">
            <div className="font-mono text-xs uppercase tracking-widest text-[#958e80] mb-4">
              Filmography Channels & Socials
            </div>
            <div className="grid grid-cols-2 gap-3">
              {HARSH_PROFILE.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-black/40 border border-white/[0.06] hover:border-white/[0.2] transition-colors flex items-center justify-between group"
                >
                  <div>
                    <div className="font-mono text-xs text-[#f7f3eb] group-hover:text-[#d99b43] transition-colors">
                      {social.label}
                    </div>
                    <div className="font-mono text-[10px] text-[#958e80]">{social.handle}</div>
                  </div>
                  <ExternalLink className="w-3 h-3 text-[#958e80] group-hover:text-[#d99b43] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Project Brief Composer */}
        <div className="lg:col-span-7 p-8 sm:p-12 bg-[#070b14]/90 border border-white/[0.08]">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#d99b43] mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>Interactive Project Brief Sheet</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#f7f3eb] mb-6 font-normal">
            Brief the Cutting Room
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-xs uppercase tracking-wider text-[#958e80] mb-2"
                >
                  Director / Client / Studio *
                </label>
                <input
                  id="contact-name"
                  required
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Alistair Vance // Solitude Filmworks"
                  className="w-full px-4 py-3 bg-[#05070c] border border-white/[0.1] rounded text-[#f7f3eb] font-mono text-xs placeholder:text-[#4a453c] focus:border-[#d99b43] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-xs uppercase tracking-wider text-[#958e80] mb-2"
                >
                  Contact Email Address *
                </label>
                <input
                  id="contact-email"
                  required
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="director@studio.com"
                  className="w-full px-4 py-3 bg-[#05070c] border border-white/[0.1] rounded text-[#f7f3eb] font-mono text-xs placeholder:text-[#4a453c] focus:border-[#d99b43] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="contact-category"
                  className="block font-mono text-xs uppercase tracking-wider text-[#958e80] mb-2"
                >
                  Project Category
                </label>
                <select
                  id="contact-category"
                  value={formState.projectType}
                  onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                  className="w-full px-4 py-3 bg-[#05070c] border border-white/[0.1] rounded text-[#f7f3eb] font-mono text-xs focus:border-[#d99b43] focus:outline-none transition-colors"
                >
                  <option value="Narrative Short / Feature">Narrative Short / Feature</option>
                  <option value="Commercial / Brand Campaign">Commercial / Brand Campaign</option>
                  <option value="Music Video / Cine-Poem">Music Video / Cine-Poem</option>
                  <option value="Documentary Short / Feature">Documentary Short / Feature</option>
                  <option value="Fashion & Art Film">Fashion & Art Film</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-timeline"
                  className="block font-mono text-xs uppercase tracking-wider text-[#958e80] mb-2"
                >
                  Target Rough Cut Window
                </label>
                <input
                  id="contact-timeline"
                  type="text"
                  value={formState.timeline}
                  onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                  placeholder="e.g. Dailies delivery by May 2026"
                  className="w-full px-4 py-3 bg-[#05070c] border border-white/[0.1] rounded text-[#f7f3eb] font-mono text-xs placeholder:text-[#4a453c] focus:border-[#d99b43] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-brief"
                className="block font-mono text-xs uppercase tracking-wider text-[#958e80] mb-2"
              >
                Project Scope & Creative Brief *
              </label>
              <textarea
                id="contact-brief"
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Outline narrative premise, raw footage volume, shooting camera format (ARRI/RED/16mm), and desired rhythmic pacing..."
                className="w-full px-4 py-3 bg-[#05070c] border border-white/[0.1] rounded text-[#f7f3eb] font-mono text-xs placeholder:text-[#4a453c] focus:border-[#d99b43] focus:outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#f7f3eb] text-[#05070c] font-mono text-xs uppercase tracking-widest hover:bg-[#d99b43] transition-all duration-300 flex items-center justify-center gap-2 font-medium"
            >
              <Send className="w-4 h-4" />
              <span>Format & Transmit Brief to Harsh</span>
            </button>

            {submitted && (
              <div className="p-4 bg-green-950/40 border border-green-800/40 rounded text-center font-mono text-xs text-green-300">
                Brief compiled and launched in mail client. Harsh responds within 24 hours.
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
