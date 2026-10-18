# Harsh — Editor's Portfolio // The Auteur Edition

A cinematic, editorial portfolio for film and commercial video editor **Harsh**.

## Creative Direction
- **The Auteur:** Solid near-black background (`#08080a`), warm ivory typography (`#f5f0e6`), giant low-contrast "HARSH" hero wordmark, and oversized cinematic frames.
- **Still-Water Motion:** Meditative, weightless movement inspired by still water; hover-to-play architecture prepared for local video proxies in `public/videos/` with smooth crossfading, scrub progress tracking, and zero autoplay audio.
- **Work (Filmography):** 7 curated cinematic projects (*Chronicles of Dust*, *Obsidian Nights*, *Hymn for the Lost*, *The Last Horizon*, *Maison de L'Ombre*, *Neon Verse*, *Kinetic Archive*) with typed metadata in `src/data/projects.ts`, aspect ratio tags, and timeline timecodes.
- **Immersive Project Viewer:** Dedicated modal inspector featuring master frame player simulation, detailed editor's cut notes, audio/video stem breakdown, technical specs, festival laurels, and keyboard navigation (`Left`, `Right`, `Esc`).
- **The Philosophy of the Cut (Harsh Profile):** Creative manifesto, 4 core cutting disciplines, NLE toolchain (DaVinci Resolve Studio 19, Premiere Pro, Avid Media Composer), monitoring gear, and festival laurels.
- **Architectural Colophon (Developer Profile):** Dedicated profile honoring creative technologist and frontend architect **Shivkumar**, detailing technical pillars, performance budgets, and technology stack.
- **Commission & Contact:** Direct email with one-click copy toast feedback, interactive project brief composer, industry directory links (Vimeo, IMDb, Instagram, YouTube, LinkedIn), and real-time availability beacon.

## Architecture & Technology Stack
- **Framework:** Next.js 16 (App Router with Turbopack)
- **UI & Logic:** React 19, TypeScript 5
- **Styling:** Tailwind CSS v4 & custom CSS still-water dynamics
- **Typography:** Cormorant Garamond & Geist Mono (via `next/font/google`)
- **Icons:** Lucide React
- **Accessibility:** WCAG AAA high-contrast compliance, full ARIA modal dialog patterns, and `@media (prefers-reduced-motion: reduce)` support.

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run linting
npm run lint

# Compile production build
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the cutting room.

## Asset Organization
- `public/posters/`: High-resolution photographic film still posters for all 7 projects.
- `public/videos/`: Target directory for future local MP4/WebM video proxies (e.g., `chronicles-of-dust.mp4`).
- `src/data/projects.ts`: Strictly typed project and profile definitions.

## Release Gates & QA Status
- **TypeScript:** Strict type checks (`npx tsc --noEmit`) pass with 0 errors.
- **ESLint:** Strict lint checks (`npm run lint`) pass with 0 warnings and 0 errors.
- **Production Build:** Static page generation passes successfully (`npm run build`).
- **Audio Policy:** Strictly zero autoplay audio. All video previews stream muted.
