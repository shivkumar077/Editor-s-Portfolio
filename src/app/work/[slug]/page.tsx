import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Film,
  Award,
  VolumeX,
  ArrowUpRight,
} from 'lucide-react';
import { PROJECTS } from '@/data/projects';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — Film Details`,
    description: project.synopsis,
    openGraph: {
      title: `${project.title} // Harsh Filmography`,
      description: project.synopsis,
      images: [{ url: project.poster }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <main id="main-content" className="pt-28 pb-24 px-6 sm:px-8 max-w-6xl mx-auto w-full select-none">
      {/* Back to Work Nav */}
      <div className="mb-8">
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#958e80] hover:text-[#f7f3eb] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#d99b43]" />
          <span>Return to Filmography Archive</span>
        </Link>
      </div>

      {/* Cinematic Master Media Area */}
      <section className="relative w-full aspect-cinemascope sm:aspect-video rounded-none overflow-hidden bg-[#020306] border border-white/[0.12] shadow-2xl mb-12">
        <Image
          src={project.poster}
          alt={`${project.title} — Cinematic Master Frame`}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
        />

        {/* Letterbox Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/50 pointer-events-none" />

        {/* HUD Letterbox Top Bar */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-[#cfc8ba] z-10 pointer-events-none">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/[0.1] text-[#d99b43]">
              [{project.id}] {project.category}
            </span>
            <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/[0.08] text-[#f7f3eb]">
              {project.aspectRatio}
            </span>
          </div>

          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/[0.1] text-[#958e80]">
            <VolumeX className="w-3.5 h-3.5" />
            <span>24.00 FPS • AUDIO MUTED</span>
          </div>
        </div>

        {/* HUD Letterbox Bottom Bar */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-[#f7f3eb] z-10 pointer-events-none">
          <div className="flex items-center gap-3 px-3 py-1.5 rounded bg-black/80 backdrop-blur-md border border-white/[0.1]">
            <span className="text-[#d99b43]">TC {project.timecode}</span>
            <span className="text-white/[0.2]">|</span>
            <span>{project.runtime}</span>
            <span className="text-white/[0.2]">|</span>
            <span className="text-[#cfc8ba]">{project.timelineStems.cutCount} Cuts Total</span>
          </div>

          <div className="px-3 py-1.5 rounded bg-black/80 backdrop-blur-md border border-white/[0.1] text-[#958e80] text-[10px]">
            PROXIES FORMATTED FOR APPLE PRORES 422 & ARRIRAW
          </div>
        </div>
      </section>

      {/* Title & Core Overview */}
      <section className="mb-16 pb-12 border-b border-white/[0.08]">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#958e80] mb-4">
          <span className="text-[#d99b43] font-medium">{project.category}</span>
          <span>•</span>
          <span>{project.year}</span>
          <span>•</span>
          <span>{project.clientOrDirector}</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#f7f3eb] font-normal tracking-tight leading-tight mb-4">
          {project.title}
        </h1>

        <p className="font-serif italic text-xl sm:text-2xl text-[#cfc8ba] font-light mb-8">
          {project.subtitle}
        </p>

        <div className="max-w-3xl text-base sm:text-lg text-[#cfc8ba] leading-relaxed font-sans font-light mb-10">
          <p>{project.synopsis}</p>
        </div>

        {/* Accolades */}
        {project.laurelsOrAccolades && project.laurelsOrAccolades.length > 0 && (
          <div className="p-6 rounded bg-[#070b14]/70 border border-white/[0.08]">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#d99b43] mb-3">
              <Award className="w-4 h-4" />
              <span>Festival Selections & Screenings</span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {project.laurelsOrAccolades.map((laurel, i) => (
                <li
                  key={i}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-black/60 border border-white/[0.1] text-[#f7f3eb]"
                >
                  {laurel}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Editor's Room Deep Dive: Rhythm & Temporal Mechanics */}
      <section className="mb-16 pb-12 border-b border-white/[0.08]">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#d99b43] mb-4">
          <Film className="w-4 h-4" />
          <span>The Cutting Room Log // Harsh</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-[#f7f3eb] mb-6 font-normal">
          Temporal Architecture & Rhythm Strategy
        </h2>

        <p className="text-base text-[#cfc8ba] leading-relaxed font-light mb-10 max-w-3xl">
          {project.editorNotes}
        </p>

        {/* Technical Stems & Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 bg-[#070b14]/80 border border-white/[0.08]">
            <div className="font-mono text-[10px] text-[#958e80] uppercase tracking-wider mb-2">
              Pacing Tempo
            </div>
            <div className="font-mono text-sm text-[#f7f3eb]">
              {project.timelineStems.pacingBpm || '24.00 Fixed'}
            </div>
            <div className="text-[11px] text-[#958e80] mt-1">
              {project.timelineStems.cutCount} frame cuts
            </div>
          </div>

          <div className="p-5 bg-[#070b14]/80 border border-white/[0.08]">
            <div className="font-mono text-[10px] text-[#958e80] uppercase tracking-wider mb-2">
              Audio Stems (DX/MX/FX)
            </div>
            <div className="font-mono text-xs text-[#f7f3eb] space-y-1">
              {project.timelineStems.audioStems.map((stem, idx) => (
                <div key={idx} className="truncate">
                  • {stem}
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 bg-[#070b14]/80 border border-white/[0.08]">
            <div className="font-mono text-[10px] text-[#958e80] uppercase tracking-wider mb-2">
              Camera & Glass
            </div>
            <div className="font-mono text-xs text-[#f7f3eb]">{project.cameraFormat}</div>
            <div className="text-[11px] text-[#958e80] mt-1">{project.aspectRatio}</div>
          </div>

          <div className="p-5 bg-[#070b14]/80 border border-white/[0.08]">
            <div className="font-mono text-[10px] text-[#958e80] uppercase tracking-wider mb-2">
              Color Pipeline
            </div>
            <div className="font-mono text-xs text-[#d99b43]">{project.colorGrade}</div>
            <div className="text-[11px] text-[#958e80] mt-1">{project.software.join(' • ')}</div>
          </div>
        </div>
      </section>

      {/* Previous / Next Project Switcher */}
      <footer className="flex flex-wrap items-center justify-between gap-6 pt-4">
        <Link
          href={`/work/${prevProject.slug}`}
          className="group flex items-center gap-3 p-4 rounded bg-[#070b14]/60 border border-white/[0.08] hover:border-[#d99b43] transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-[#d99b43] group-hover:-translate-x-1 transition-transform" />
          <div>
            <div className="font-mono text-[10px] text-[#958e80] uppercase tracking-wider">
              Previous Cut
            </div>
            <div className="font-serif text-lg text-[#f7f3eb] group-hover:text-[#d99b43] transition-colors">
              {prevProject.title}
            </div>
          </div>
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f7f3eb] text-[#05070c] font-mono text-xs uppercase tracking-widest hover:bg-[#d99b43] transition-colors font-medium"
        >
          <span>Commission Similar Project</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        <Link
          href={`/work/${nextProject.slug}`}
          className="group flex items-center gap-3 p-4 rounded bg-[#070b14]/60 border border-white/[0.08] hover:border-[#d99b43] transition-all text-right"
        >
          <div>
            <div className="font-mono text-[10px] text-[#958e80] uppercase tracking-wider">
              Next Cut
            </div>
            <div className="font-serif text-lg text-[#f7f3eb] group-hover:text-[#d99b43] transition-colors">
              {nextProject.title}
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-[#d99b43] group-hover:translate-x-1 transition-transform" />
        </Link>
      </footer>
    </main>
  );
}
