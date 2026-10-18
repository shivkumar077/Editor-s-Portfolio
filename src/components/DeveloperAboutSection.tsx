'use client';

import React from 'react';
import { DEVELOPER_PROFILE } from '@/data/projects';
import { Terminal, Code, ExternalLink, GitBranch } from 'lucide-react';

export function DeveloperAboutSection() {
  return (
    <section id="developer" className="py-24 px-6 sm:px-8 border-b border-white/[0.08] relative bg-[#070709]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#d9a05b] mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>[03] Architectural Colophon // Developer Profile</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e6] font-normal tracking-tight leading-tight mb-6">
            Engineered by {DEVELOPER_PROFILE.name}
          </h2>

          <p className="text-base sm:text-lg text-[#cfc8ba] font-sans font-light leading-relaxed">
            {DEVELOPER_PROFILE.statement}
          </p>
        </div>

        {/* 3 Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {DEVELOPER_PROFILE.engineeringPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#0a0a0e] border border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#d9a05b]">PILLAR // 0{idx + 1}</span>
                  <Code className="w-4 h-4 text-[#9c9588]" />
                </div>
                <h3 className="font-serif text-2xl text-[#f5f0e6] mb-3">{pillar.title}</h3>
                <p className="text-sm text-[#cfc8ba] font-light leading-relaxed">{pillar.desc}</p>
              </div>
              <div className="w-8 h-[1px] bg-white/[0.15] mt-6" />
            </div>
          ))}
        </div>

        {/* Technical Stack & Repository Link */}
        <div className="p-8 sm:p-10 bg-[#09090c] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#9c9588] mb-3">
              {'// Technology Stack & Deployment Spec'}
            </div>
            <div className="flex flex-wrap gap-2">
              {DEVELOPER_PROFILE.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full font-mono text-xs bg-black/60 border border-white/[0.1] text-[#f5f0e6]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={DEVELOPER_PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#f5f0e6] text-[#08080a] font-mono text-xs uppercase tracking-wider hover:bg-[#d9a05b] transition-colors"
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>Inspect Source Repository</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
