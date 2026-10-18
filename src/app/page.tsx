'use client';

import React, { useState, useCallback } from 'react';
import { Project, PROJECTS } from '@/data/projects';
import { Navigation } from '@/components/Navigation';
import { HeroWordmark } from '@/components/HeroWordmark';
import { WorkSection } from '@/components/WorkSection';
import { HarshAboutSection } from '@/components/HarshAboutSection';
import { DeveloperAboutSection } from '@/components/DeveloperAboutSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ProjectViewerModal } from '@/components/ProjectViewerModal';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProject = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const handleNavigateProject = useCallback(
    (direction: 'next' | 'prev') => {
      if (!selectedProject) return;
      const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
      const nextIndex =
        direction === 'next'
          ? (currentIndex + 1) % PROJECTS.length
          : (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
      setSelectedProject(PROJECTS[nextIndex]);
    },
    [selectedProject]
  );

  return (
    <div className="min-h-screen bg-[#08080a] text-[#f5f0e6] relative selection:bg-[#f5f0e6] selection:text-[#08080a]">
      {/* Top Fixed Masthead Navigation */}
      <Navigation />

      {/* Main Semantic Landmark */}
      <main id="main-content" className="relative z-10 flex flex-col">
        {/* Hero Section with Monumental HARSH Wordmark */}
        <HeroWordmark />

        {/* Selected Filmography / Work Section with 7 Projects */}
        <WorkSection onSelectProject={handleSelectProject} />

        {/* Harsh's Cutting Room Philosophy & Story */}
        <HarshAboutSection />

        {/* Dedicated Developer Architecture & Colophon */}
        <DeveloperAboutSection />

        {/* Booking & Direct Communication */}
        <ContactSection />
      </main>

      {/* Auteur Footer */}
      <Footer />

      {/* Immersive Project Viewer Modal */}
      <ProjectViewerModal
        project={selectedProject}
        onClose={handleCloseModal}
        onNavigate={handleNavigateProject}
      />
    </div>
  );
}
