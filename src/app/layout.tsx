import type { Metadata } from 'next';
import { Cormorant_Garamond, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { FluidBackground } from '@/components/FluidBackground';
import { CustomCursor } from '@/components/CustomCursor';
import { SiteFooter } from '@/components/SiteFooter';

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://harsh-editor.vercel.app'),
  title: {
    default: 'HARSH — Video Editor & Rhythm Designer // Liquid Cinema',
    template: '%s // HARSH Video Editor',
  },
  description:
    'The official cutting room and filmography of Harsh, lead film editor, rhythm designer, and sound architect. Crafting psychological tension and narrative momentum in 24fps.',
  keywords: [
    'Harsh',
    'Video Editor',
    'Film Editor',
    'Commercial Editor',
    'Colorist',
    'Liquid Cinema',
    'DaVinci Resolve Studio 19',
    'Premiere Pro',
    'Avid Media Composer',
  ],
  authors: [{ name: 'Harsh' }, { name: 'Shivkumar' }],
  creator: 'Harsh',
  openGraph: {
    title: 'HARSH — Video Editor & Rhythm Designer',
    description:
      'Crafting human breath, tension, and narrative momentum in 24fps. Explore the selected filmography and cutting room archives.',
    type: 'website',
    locale: 'en_US',
    siteName: 'HARSH Liquid Cinema Portfolio',
    images: [
      {
        url: '/posters/poster-1-chronicles-of-dust.jpg',
        width: 1920,
        height: 1080,
        alt: 'HARSH — Film & Commercial Editor Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HARSH — Video Editor & Rhythm Designer',
    description:
      'Crafting human breath, tension, and narrative momentum in 24fps. Explore the selected filmography and cutting room archives.',
    images: ['/posters/poster-1-chronicles-of-dust.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${geistSans.variable} ${geistMono.variable} dark h-full antialiased selection:bg-[#f7f3eb] selection:text-[#05070c]`}
    >
      <body className="min-h-full flex flex-col bg-[#05070c] text-[#f7f3eb] font-sans relative">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-[#f7f3eb] focus:text-[#05070c] focus:font-mono focus:text-xs focus:uppercase focus:tracking-wider focus:rounded"
        >
          Skip to main content
        </a>

        {/* Liquid Cinema GPU WebGL Fluid Atmosphere */}
        <FluidBackground />

        {/* Subtle Film Grain Noise Texture */}
        <div className="film-grain" aria-hidden="true" />

        {/* Tactile Context-Aware Cursor */}
        <CustomCursor />

        {/* Global Masthead Navigation */}
        <Navbar />

        {/* Route Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          {children}
        </div>

        {/* Global End-Credits Footer */}
        <SiteFooter />
      </body>
    </html>
  );
}
