# Harsh — Editor's Portfolio

A cinematic, editorial portfolio for video editor Harsh.

## Creative direction
- **The Auteur:** pure black backgrounds, warm ivory typography, oversized cinematic frames, restrained editorial details.
- **Motion:** slow, weightless movement inspired by still water; video previews play on hover and return to a still state when the pointer leaves.
- **Work:** curated projects with hardcoded metadata; no database or custom backend required.
- **About:** a profile for Harsh, plus a separate developer credit/About Me for the person who built the website.
- **Contact:** directs potential clients to Harsh.

## Planned stack
- Next.js App Router, React, TypeScript
- Tailwind CSS and custom CSS
- GSAP + ScrollTrigger for choreographed motion where appropriate
- Vercel deployment
- Optimized local video previews and posters, with CDN delivery if needed

## Local development

```bash
npx create-next-app@latest editors-portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd editors-portfolio
npm run dev
```

Open http://localhost:3000.

## Asset organization
Place video previews in `public/videos/` and poster/still images in `public/posters/`. Keep titles, descriptions, and paths in a typed file such as `src/data/projects.ts`. Avoid committing large source footage when optimized previews or a video CDN are more appropriate.

## Design principles
1. The work comes first: animations frame the films, never compete with them.
2. Use purposeful motion rather than effects for their own sake.
3. Keep playback accessible, touch-friendly, and keyboard operable.
4. Respect reduced-motion preferences and never autoplay audio.
5. Prioritize performance and a distinct mobile composition.

## Status
Repository initialized with the creative brief. Application source will be added as the local Next.js project is built and pushed.
