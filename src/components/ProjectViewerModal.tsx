'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Film,
  VolumeX,
  Award,
  ArrowUpRight,
} from 'lucide-react';
import { Project, PROJECTS } from '@/data/projects';

interface ProjectViewerModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
}

export function ProjectViewerModal({
  project,
  onClose,
  onNavigate,
}: ProjectViewerModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Keyboard navigation & escape listener
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate('prev');
      } else if (e.key === 'ArrowRight') {
        onNavigate('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose, onNavigate]);

  if (!project) return null;

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-[#08080a]/95 backdrop-blur-2xl overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={`Project detail for ${project.title}`}
    >
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Main Modal Canvas */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-6xl max-h-[92vh] flex flex-col bg-[#0b0b0e] border border-white/[0.12] rounded-none shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <header className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between bg-[#08080a] font-mono text-xs uppercase tracking-widest text-[#9c9588]">
          <div className="flex items-center gap-3">
            <span className="text-[#d9a05b]">TIMELINE INSPECTOR</span>
            <span className="text-white/[0.15]">{'//'}</span>
            <span className="text-[#f5f0e6]">
              [{project.id} / 07] {project.title}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-[11px] text-[#9c9588]">
              <span>[←/→] Navigate</span>
              <span className="text-white/[0.15]">•</span>
              <span>[ESC] Close</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded text-[#cfc8ba] hover:text-[#f5f0e6] hover:bg-white/[0.05] transition-colors focus:outline-none"
              aria-label="Close project viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto flex-1 divide-y divide-white/[0.08]">
          {/* Main Visual Frame (Player Simulation) */}
          <section className="relative w-full aspect-video sm:aspect-cinemascope bg-[#040405] overflow-hidden select-none">
            <Image
              src={project.poster}
              alt={`${project.title} — Master Frame`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />

            {/* Letterbox Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />

            {/* HUD Metadata Overlay */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-[#cfc8ba]">
              <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/[0.1]">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>PREVIEW STREAM</span>
                <span className="text-white/[0.2]">|</span>
                <span className="text-[#d9a05b]">{project.aspectRatio}</span>
              </div>

              <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/[0.1] text-[#9c9588]">
                <VolumeX className="w-3.5 h-3.5 text-[#9c9588]" />
                <span>24.00 FPS • AUDIO MUTED</span>
              </div>
            </div>

            {/* Bottom HUD Bar */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-[#f5f0e6] z-10">
              <div className="flex items-center gap-3 px-3 py-1.5 rounded bg-black/75 backdrop-blur-md border border-white/[0.1]">
                <span className="text-[#d9a05b]">TC {project.timecode}</span>
                <span className="text-white/[0.2]">|</span>
                <span>{project.runtime}</span>
                <span className="text-white/[0.2]">|</span>
                <span className="text-[#cfc8ba]">{project.timelineStems.cutCount} Cuts Total</span>
              </div>

              <div className="px-3 py-1.5 rounded bg-black/75 backdrop-blur-md border border-white/[0.1] text-[#9c9588] text-[10px]">
                PREPARED FOR 4K PRORES PROXY PLAYBACK
              </div>
            </div>
          </section>

          {/* Project Editorial Overview & Synopsis */}
          <section className="p-6 sm:p-10 bg-[#09090c]">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#9c9588] mb-3">
                <span className="text-[#d9a05b] font-medium">{project.category}</span>
                <span>•</span>
                <span>{project.year}</span>
                <span>•</span>
                <span>{project.clientOrDirector}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-[#f5f0e6] font-normal leading-tight mb-4">
                {project.title}
              </h2>

              <p className="font-serif italic text-lg sm:text-xl text-[#cfc8ba] mb-8 font-light">
                {project.subtitle}
              </p>

              <div className="prose prose-invert max-w-none text-sm sm:text-base text-[#cfc8ba] leading-relaxed font-sans font-light mb-8">
                <p>{project.synopsis}</p>
              </div>

              {/* Accolades / Laurels */}
              {project.laurelsOrAccolades && project.laurelsOrAccolades.length > 0 && (
                <div className="p-4 rounded border border-white/[0.08] bg-white/[0.02] mb-8">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#d9a05b] mb-3">
                    <Award className="w-4 h-4" />
                    <span>Festival Selections & Honors</span>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {project.laurelsOrAccolades.map((laurel, i) => (
                      <li
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-black/50 border border-white/[0.1] text-[#f5f0e6]"
                      >
                        {laurel}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* Editor's Room Deep Dive: Philosophy & Cut Mechanics */}
          <section className="p-6 sm:p-10 bg-[#0b0b0f]">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#d9a05b] mb-4">
              <Film className="w-4 h-4" />
              <span>Editor&apos;s Cut Notes {'//'} Harsh</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#f5f0e6] mb-4">
              Temporal Architecture & Rhythm Strategy
            </h3>

            <p className="text-sm sm:text-base text-[#cfc8ba] leading-relaxed font-light mb-8">
              {project.editorNotes}
            </p>

            {/* Technical Stems & Specs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              <div className="p-4 bg-[#08080a] border border-white/[0.08]">
                <div className="font-mono text-[10px] text-[#9c9588] uppercase tracking-wider mb-1">
                  Timeline Pacing
                </div>
                <div className="font-mono text-sm text-[#f5f0e6]">
                  {project.timelineStems.pacingBpm || '24.00 Fixed'}
                </div>
                <div className="text-[11px] text-[#9c9588] mt-1">
                  {project.timelineStems.cutCount} frame transitions
                </div>
              </div>

              <div className="p-4 bg-[#08080a] border border-white/[0.08]">
                <div className="font-mono text-[10px] text-[#9c9588] uppercase tracking-wider mb-1">
                  Audio Stems (DX/MX/FX)
                </div>
                <div className="font-mono text-xs text-[#f5f0e6] space-y-0.5">
                  {project.timelineStems.audioStems.slice(0, 2).map((stem, idx) => (
                    <div key={idx} className="truncate">
                      • {stem}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#08080a] border border-white/[0.08]">
                <div className="font-mono text-[10px] text-[#9c9588] uppercase tracking-wider mb-1">
                  Camera & Lenses
                </div>
                <div className="font-mono text-xs text-[#f5f0e6] truncate">
                  {project.cameraFormat}
                </div>
                <div className="text-[11px] text-[#9c9588] mt-1">{project.aspectRatio}</div>
              </div>

              <div className="p-4 bg-[#08080a] border border-white/[0.08]">
                <div className="font-mono text-[10px] text-[#9c9588] uppercase tracking-wider mb-1">
                  Color Pipeline
                </div>
                <div className="font-mono text-xs text-[#d9a05b] truncate">
                  {project.colorGrade}
                </div>
                <div className="text-[11px] text-[#9c9588] mt-1">
                  {project.software.join(' • ')}
                </div>
              </div>
            </div>
          </section>

          {/* Navigation Footer for Switching Projects */}
          <footer className="p-6 bg-[#08080a] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <button
              onClick={() => onNavigate('prev')}
              className="flex items-center gap-2 px-4 py-2 rounded border border-white/[0.1] text-[#cfc8ba] hover:text-[#f5f0e6] hover:border-[#d9a05b] transition-all"
            >
              <ChevronLeft className="w-4 h-4 text-[#d9a05b]" />
              <div className="text-left">
                <div className="text-[10px] text-[#9c9588] uppercase">Prev Cut</div>
                <div className="text-xs truncate max-w-[140px] sm:max-w-none">
                  {prevProject.title}
                </div>
              </div>
            </button>

            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f5f0e6] text-[#08080a] font-mono text-xs uppercase tracking-wider hover:bg-[#d9a05b] transition-colors"
            >
              <span>Inquire Regarding Similar Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => onNavigate('next')}
              className="flex items-center gap-2 px-4 py-2 rounded border border-white/[0.1] text-[#cfc8ba] hover:text-[#f5f0e6] hover:border-[#d9a05b] transition-all text-right"
            >
              <div className="text-right">
                <div className="text-[10px] text-[#9c9588] uppercase">Next Cut</div>
                <div className="text-xs truncate max-w-[140px] sm:max-w-none">
                  {nextProject.title}
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#d9a05b]" />
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
