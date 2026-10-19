'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutGrid, ListFilter, ArrowUpRight, ArrowRight } from 'lucide-react';
import { ProjectCategory, CATEGORIES, PROJECTS } from '@/data/projects';
import { DraggableGallery } from '@/components/DraggableGallery';
import { ScrambleText } from '@/components/ScrambleText';

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [viewMode, setViewMode] = useState<'gallery' | 'index'>('gallery');
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <main id="main-content" className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto w-full">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/[0.08]">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#d99b43] mb-3 block">
            {'// Selected Works & Filmography'}
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#f7f3eb] font-normal tracking-tight">
            Curated Film Archives
          </h1>
          <p className="mt-4 max-w-xl text-[#cfc8ba] font-sans font-light text-base leading-relaxed">
            Seven hardcoded cinematic explorations spanning psychological drama, commercial spots,
            Nordic cine-poems, alpine expeditions, and tactile celluloid montage.
          </p>
        </div>

        {/* View Switcher Toggle */}
        <div className="flex items-center gap-3 font-mono text-xs">
          <div className="inline-flex items-center p-1 rounded bg-[#080c16] border border-white/[0.08]">
            <button
              onClick={() => setViewMode('gallery')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${
                viewMode === 'gallery'
                  ? 'bg-[#f7f3eb] text-[#05070c] font-medium'
                  : 'text-[#958e80] hover:text-[#f7f3eb]'
              }`}
              aria-label="Interactive Gallery View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Draggable Reel</span>
            </button>
            <button
              onClick={() => setViewMode('index')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${
                viewMode === 'index'
                  ? 'bg-[#f7f3eb] text-[#05070c] font-medium'
                  : 'text-[#958e80] hover:text-[#f7f3eb]'
              }`}
              aria-label="Timeline Index Table View"
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span>Timeline Index</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-12" role="tablist" aria-label="Filter film projects">
        {CATEGORIES.map((cat) => {
          const count =
            cat === 'All'
              ? PROJECTS.length
              : PROJECTS.filter((p) => p.category === cat).length;
          const isSelected = selectedCategory === cat;

          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 border ${
                isSelected
                  ? 'bg-[#d99b43] text-[#05070c] border-[#d99b43] font-medium shadow-lg'
                  : 'bg-[#080c16]/70 text-[#958e80] border-white/[0.08] hover:border-white/[0.2] hover:text-[#f7f3eb]'
              }`}
            >
              <span>{cat}</span>
              <span className={`ml-2 text-[10px] ${isSelected ? 'text-[#05070c]' : 'text-[#6b6559]'}`}>
                [{count.toString().padStart(2, '0')}]
              </span>
            </button>
          );
        })}
      </div>

      {/* View Mode 1: Draggable Horizontal Reel */}
      {viewMode === 'gallery' ? (
        <div>
          <DraggableGallery projects={filteredProjects} />

          {/* Grid Breakdown Below Draggable Reel */}
          <div className="mt-20 pt-16 border-t border-white/[0.08]">
            <div className="font-mono text-xs uppercase tracking-widest text-[#958e80] mb-8">
              {'// Filmography Editorial Layout'}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/work/${project.slug}`}
                  onMouseEnter={() => setHoveredSlug(project.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                  data-cursor="open"
                  className="group flex flex-col bg-[#070b14]/70 border border-white/[0.08] hover:border-white/[0.22] transition-all duration-500 overflow-hidden shadow-xl"
                >
                  <div className="relative w-full aspect-cinemascope overflow-hidden bg-black">
                    <Image
                      src={project.poster}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] uppercase text-[#cfc8ba]">
                      <span className="px-2 py-0.5 rounded bg-black/60 border border-white/[0.1] text-[#d99b43]">
                        [{project.id}]
                      </span>
                      <span>{project.aspectRatio}</span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1 bg-[#060910]">
                    <div>
                      <div className="flex items-center justify-between font-mono text-[11px] text-[#958e80] uppercase tracking-wider mb-2">
                        <span className="text-[#d99b43]">{project.category}</span>
                        <span>{project.year}</span>
                      </div>

                      <h2 className="font-serif text-2xl text-[#f7f3eb] group-hover:text-[#d99b43] transition-colors mb-2">
                        <ScrambleText text={project.title} trigger={hoveredSlug === project.slug} />
                      </h2>

                      <p className="font-sans text-xs text-[#cfc8ba] font-light line-clamp-2 leading-relaxed mb-6">
                        {project.synopsis}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-[#958e80]">
                      <span>{project.runtime}</span>
                      <span className="text-[#f7f3eb] group-hover:text-[#d99b43] inline-flex items-center gap-1 transition-colors">
                        <span>Inspect Cut</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* View Mode 2: Timeline Archive Index Table */
        <div className="overflow-x-auto border border-white/[0.08] bg-[#070b14]/80">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/[0.08] bg-[#0a0f1c] text-[#958e80] uppercase tracking-wider">
                <th className="py-4 px-6 font-normal">Reel</th>
                <th className="py-4 px-6 font-normal">Film Title</th>
                <th className="py-4 px-6 font-normal">Category</th>
                <th className="py-4 px-6 font-normal">Director / Client</th>
                <th className="py-4 px-6 font-normal">Aspect Ratio</th>
                <th className="py-4 px-6 font-normal">Runtime</th>
                <th className="py-4 px-6 font-normal">Cuts</th>
                <th className="py-4 px-6 font-normal text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-[#cfc8ba]">
              {filteredProjects.map((proj) => (
                <tr
                  key={proj.id}
                  className="hover:bg-white/[0.03] transition-colors cursor-pointer group"
                >
                  <td className="py-4 px-6 text-[#d99b43]">[{proj.id}]</td>
                  <td className="py-4 px-6 font-serif text-lg text-[#f7f3eb] group-hover:text-[#d99b43] transition-colors">
                    <Link href={`/work/${proj.slug}`} className="block">
                      {proj.title}
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-[#958e80]">{proj.category}</td>
                  <td className="py-4 px-6 text-[#cfc8ba]">{proj.clientOrDirector}</td>
                  <td className="py-4 px-6 text-[#958e80]">{proj.aspectRatio}</td>
                  <td className="py-4 px-6">{proj.runtime}</td>
                  <td className="py-4 px-6 text-[#958e80]">{proj.timelineStems.cutCount}</td>
                  <td className="py-4 px-6 text-right">
                    <Link
                      href={`/work/${proj.slug}`}
                      className="inline-flex items-center gap-1 text-[#f7f3eb] group-hover:text-[#d99b43] transition-colors"
                    >
                      <span>Open</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
