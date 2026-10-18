'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause, Maximize2 } from 'lucide-react';
import { Project } from '@/data/projects';

interface CinematicCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export function CinematicCard({ project, onSelect, index }: CinematicCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [progress, setProgress] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Hover-to-play architecture for future local videos
  const handleMouseEnter = () => {
    setIsHovered(true);

    if (project.videoSrc && !videoError && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsVideoPlaying(true);
          })
          .catch(() => {
            // Browsers may restrict autoplay or file doesn't exist yet
            setIsVideoPlaying(false);
          });
      }
    }

    // Simulate timeline playback scrubbing bar for preview feel
    let currentProg = 0;
    progressIntervalRef.current = setInterval(() => {
      currentProg = (currentProg + 2) % 100;
      setProgress(currentProg);
    }, 100);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
    setProgress(0);
  };

  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  // Aspect ratio classes based on project specs
  const getAspectClass = () => {
    if (project.aspectRatio.includes('2.39')) return 'aspect-cinemascope';
    if (project.aspectRatio.includes('4:3')) return 'aspect-academy';
    if (project.aspectRatio.includes('1.85')) return 'aspect-european';
    return 'aspect-video';
  };

  return (
    <article
      className="group relative flex flex-col w-full bg-[#0a0a0d] border border-white/[0.08] hover:border-white/[0.22] transition-all duration-700 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Cinematic Frame Container */}
      <div
        className={`relative w-full ${getAspectClass()} overflow-hidden bg-[#040405] cursor-pointer`}
        onClick={() => onSelect(project)}
      >
        {/* Poster Image */}
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={project.poster}
            alt={`${project.title} — Cinematic Still`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority={index < 2}
            className={`object-cover transition-transform duration-1000 ease-out ${
              isHovered ? 'scale-[1.035]' : 'scale-100'
            }`}
          />
        </div>

        {/* Video Element (Hover-to-Play Architecture) */}
        {project.videoSrc && !videoError && (
          <video
            ref={videoRef}
            src={project.videoSrc}
            muted
            loop
            playsInline
            preload="none"
            onError={() => setVideoError(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 pointer-events-none ${
              isVideoPlaying ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Cinematic Vignette & Ambient Darkness */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-[#08080a]/60 pointer-events-none" />

        {/* Top Letterbox Bar / Technical Slate */}
        <div className="absolute top-0 left-0 right-0 p-4 sm:p-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-[#cfc8ba] z-10 pointer-events-none">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/[0.1] text-[#d9a05b]">
              [{project.id}]
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-black/50 backdrop-blur-md border border-white/[0.08] text-[#f5f0e6]">
              {project.category}
            </span>
            <span className="text-[10px] text-[#9c9588]">{project.year}</span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[10px]">
            <span className="hidden md:inline-block text-[#9c9588]">
              {project.frameRate}
            </span>
            <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/[0.1] text-[#f5f0e6]">
              {project.aspectRatio}
            </span>
          </div>
        </div>

        {/* Hover Scrubbing / Status Indicator */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none z-10 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/75 backdrop-blur-md border border-white/[0.15] text-[#f5f0e6] font-mono text-xs uppercase tracking-widest shadow-2xl">
            {isVideoPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-[#d9a05b]" />
                <span>Playing Video Proxy</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-[#d9a05b] fill-[#d9a05b]" />
                <span>Inspect Film Reel</span>
              </>
            )}
            <span className="text-white/[0.2] mx-1">|</span>
            <Maximize2 className="w-3 h-3 text-[#9c9588]" />
          </div>
        </div>

        {/* Simulated or Live Timecode Playback Scrub Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.1] z-10">
          <div
            className="h-full bg-[#d9a05b] transition-all duration-100"
            style={{ width: `${isHovered ? progress : 0}%` }}
          />
        </div>
      </div>

      {/* Editorial Metadata Footer */}
      <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 bg-[#09090c] border-t border-white/[0.06]">
        <div>
          <div className="flex items-center justify-between gap-4 font-mono text-xs text-[#9c9588] tracking-widest uppercase mb-2">
            <span className="text-[#d9a05b]">{project.clientOrDirector}</span>
            <span>TC {project.timecode}</span>
          </div>

          <h3
            onClick={() => onSelect(project)}
            className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#f5f0e6] group-hover:text-[#d9a05b] transition-colors cursor-pointer mb-2"
          >
            {project.title}
          </h3>

          <p className="font-sans text-sm text-[#cfc8ba] line-clamp-2 leading-relaxed mb-6 font-light">
            {project.synopsis}
          </p>
        </div>

        {/* Technical Timeline Badges & CTA */}
        <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-[#9c9588]">
            <span className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]">
              {project.runtime}
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]">
              {project.timelineStems.cutCount} Cuts
            </span>
            <span className="hidden md:inline-block px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[#cfc8ba]">
              {project.role}
            </span>
          </div>

          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#f5f0e6] group-hover:text-[#d9a05b] transition-colors focus:outline-none"
            aria-label={`Open detailed viewer for ${project.title}`}
          >
            <span>Timeline Specs</span>
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
