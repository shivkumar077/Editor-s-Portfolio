'use client';

import React, { useState } from 'react';
import { Project, ProjectCategory, CATEGORIES, PROJECTS } from '@/data/projects';
import { CinematicCard } from './CinematicCard';
import { LayoutGrid, ListFilter, Film, ArrowRight } from 'lucide-react';

interface WorkSectionProps {
  onSelectProject: (project: Project) => void;
}

export function WorkSection({ onSelectProject }: WorkSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [viewMode, setViewMode] = useState<'editorial' | 'index'>('editorial');

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="py-24 px-6 sm:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#d9a05b] mb-4">
              <Film className="w-3.5 h-3.5" />
              <span>[01] Filmography & Selected Cuts</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e6] font-normal tracking-tight">
              Curated Works // 2023 — 2025
            </h2>
            <p className="mt-4 max-w-xl text-[#cfc8ba] font-sans font-light text-base leading-relaxed">
              Seven distinct narrative and commercial explorations. Each cut prioritizes temporal
              tension, sensory sound design, and psychological pacing.
            </p>
          </div>

          {/* Controls: Filter & View Switcher */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* View Switcher */}
            <div className="inline-flex items-center p-1 rounded bg-[#0e0e12] border border-white/[0.08] font-mono text-xs">
              <button
                onClick={() => setViewMode('editorial')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${
                  viewMode === 'editorial'
                    ? 'bg-[#f5f0e6] text-[#08080a] font-medium'
                    : 'text-[#9c9588] hover:text-[#f5f0e6]'
                }`}
                aria-label="Editorial Gallery View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Editorial</span>
              </button>
              <button
                onClick={() => setViewMode('index')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${
                  viewMode === 'index'
                    ? 'bg-[#f5f0e6] text-[#08080a] font-medium'
                    : 'text-[#9c9588] hover:text-[#f5f0e6]'
                }`}
                aria-label="Timeline Index View"
              >
                <ListFilter className="w-3.5 h-3.5" />
                <span>Index</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12" role="tablist" aria-label="Filter projects by category">
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
                    ? 'bg-[#d9a05b] text-[#08080a] border-[#d9a05b] font-medium shadow-lg'
                    : 'bg-[#0e0e12]/60 text-[#9c9588] border-white/[0.08] hover:border-white/[0.2] hover:text-[#f5f0e6]'
                }`}
              >
                <span>{cat}</span>
                <span className={`ml-2 text-[10px] ${isSelected ? 'text-[#08080a]' : 'text-[#847e72]'}`}>
                  [{count.toString().padStart(2, '0')}]
                </span>
              </button>
            );
          })}
        </div>

        {/* Editorial Layout Mode */}
        {viewMode === 'editorial' ? (
          <div className="space-y-16">
            {/* Project 1: Monument Hero Frame (if in filter) */}
            {filteredProjects.find((p) => p.id === '01') && (
              <div className="w-full">
                <div className="font-mono text-xs text-[#9c9588] uppercase tracking-widest mb-3 flex items-center justify-between">
                  <span>{'// FEATURE NARRATIVE MASTERPIECE'}</span>
                  <span>ROTTERDAM & VENICE SELECTION</span>
                </div>
                <CinematicCard
                  project={filteredProjects.find((p) => p.id === '01')!}
                  onSelect={onSelectProject}
                  index={0}
                />
              </div>
            )}

            {/* Projects 2 & 3: Asymmetrical Duo Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {filteredProjects.find((p) => p.id === '02') && (
                <div className="lg:col-span-7">
                  <div className="font-mono text-xs text-[#9c9588] uppercase tracking-widest mb-3">
                    {'// COMMERCIAL & HIGH SPEED'}
                  </div>
                  <CinematicCard
                    project={filteredProjects.find((p) => p.id === '02')!}
                    onSelect={onSelectProject}
                    index={1}
                  />
                </div>
              )}

              {filteredProjects.find((p) => p.id === '03') && (
                <div className="lg:col-span-5">
                  <div className="font-mono text-xs text-[#9c9588] uppercase tracking-widest mb-3">
                    {'// MUSIC CINE-POEM'}
                  </div>
                  <CinematicCard
                    project={filteredProjects.find((p) => p.id === '03')!}
                    onSelect={onSelectProject}
                    index={2}
                  />
                </div>
              )}
            </div>

            {/* Project 4: Panoramic Centerpiece */}
            {filteredProjects.find((p) => p.id === '04') && (
              <div className="w-full pt-4">
                <div className="font-mono text-xs text-[#9c9588] uppercase tracking-widest mb-3 flex items-center justify-between">
                  <span>{'// DOCUMENTARY CENTERPIECE // ULTRA-WIDE 2.39:1'}</span>
                  <span>BANFF MOUNTAIN GRAND PRIZE</span>
                </div>
                <CinematicCard
                  project={filteredProjects.find((p) => p.id === '04')!}
                  onSelect={onSelectProject}
                  index={3}
                />
              </div>
            )}

            {/* Projects 5 & 6: Staggered Editorial Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4">
              {filteredProjects.find((p) => p.id === '05') && (
                <div>
                  <div className="font-mono text-xs text-[#9c9588] uppercase tracking-widest mb-3">
                    {'// FASHION & ARCHITECTURE // ACADEMY 4:3'}
                  </div>
                  <CinematicCard
                    project={filteredProjects.find((p) => p.id === '05')!}
                    onSelect={onSelectProject}
                    index={4}
                  />
                </div>
              )}

              {filteredProjects.find((p) => p.id === '06') && (
                <div>
                  <div className="font-mono text-xs text-[#9c9588] uppercase tracking-widest mb-3">
                    {'// CYBER-NOIR // SOUND-FIRST EDITING'}
                  </div>
                  <CinematicCard
                    project={filteredProjects.find((p) => p.id === '06')!}
                    onSelect={onSelectProject}
                    index={5}
                  />
                </div>
              )}
            </div>

            {/* Project 7: Experimental Closing Archive */}
            {filteredProjects.find((p) => p.id === '07') && (
              <div className="w-full pt-4">
                <div className="font-mono text-xs text-[#9c9588] uppercase tracking-widest mb-3 flex items-center justify-between">
                  <span>{'// STRUCTURAL EDITING STUDY // 120 CUTS IN 60 SECONDS'}</span>
                  <span>ACE RECOGNITION</span>
                </div>
                <CinematicCard
                  project={filteredProjects.find((p) => p.id === '07')!}
                  onSelect={onSelectProject}
                  index={6}
                />
              </div>
            )}
          </div>
        ) : (
          /* Timeline Index View (Tabular / Archive) */
          <div className="overflow-x-auto border border-white/[0.08] bg-[#0a0a0d]">
            <table className="w-full text-left font-mono text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/[0.08] bg-[#0e0e12] text-[#9c9588] uppercase tracking-wider">
                  <th className="py-4 px-6 font-normal">Reel</th>
                  <th className="py-4 px-6 font-normal">Film Title</th>
                  <th className="py-4 px-6 font-normal">Category</th>
                  <th className="py-4 px-6 font-normal">Director / Client</th>
                  <th className="py-4 px-6 font-normal">Aspect</th>
                  <th className="py-4 px-6 font-normal">Runtime</th>
                  <th className="py-4 px-6 font-normal">Cuts</th>
                  <th className="py-4 px-6 font-normal text-right">Inspect</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-[#cfc8ba]">
                {filteredProjects.map((proj) => (
                  <tr
                    key={proj.id}
                    onClick={() => onSelectProject(proj)}
                    className="hover:bg-white/[0.03] transition-colors cursor-pointer group"
                  >
                    <td className="py-4 px-6 text-[#d9a05b]">[{proj.id}]</td>
                    <td className="py-4 px-6 font-serif text-lg text-[#f5f0e6] group-hover:text-[#d9a05b] transition-colors">
                      {proj.title}
                    </td>
                    <td className="py-4 px-6 text-[#9c9588]">{proj.category}</td>
                    <td className="py-4 px-6 text-[#cfc8ba]">{proj.clientOrDirector}</td>
                    <td className="py-4 px-6 text-[#9c9588]">{proj.aspectRatio}</td>
                    <td className="py-4 px-6">{proj.runtime}</td>
                    <td className="py-4 px-6 text-[#9c9588]">{proj.timelineStems.cutCount}</td>
                    <td className="py-4 px-6 text-right">
                      <span className="inline-flex items-center gap-1 text-[#f5f0e6] group-hover:text-[#d9a05b] transition-colors">
                        <span>Open</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
