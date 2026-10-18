import type { Metadata } from 'next';
import { Cormorant_Garamond, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

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
  title: 'HARSH — Film & Commercial Editor // The Auteur Portfolio',
  description:
    'The official cutting room and filmography of Harsh, lead video editor, colorist, and sound architect. Crafting rhythm, psychological tension, and narrative momentum in 24fps.',
  keywords: [
    'Harsh',
    'Film Editor',
    'Video Editor',
    'Colorist',
    'Auteur Portfolio',
    'DaVinci Resolve',
    'Premiere Pro',
    'Commercial Editor',
    'Narrative Film',
  ],
  authors: [{ name: 'Harsh' }, { name: 'Shivkumar' }],
  creator: 'Harsh',
  openGraph: {
    title: 'HARSH — Film & Commercial Editor',
    description:
      'Crafting rhythm, psychological tension, and narrative momentum in 24fps. Explore the filmography and cutting room archives.',
    type: 'website',
    locale: 'en_US',
    siteName: 'HARSH Portfolio',
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
    title: 'HARSH — Film & Commercial Editor',
    description:
      'Crafting rhythm, psychological tension, and narrative momentum in 24fps. Explore the filmography and cutting room archives.',
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
      className={`${cormorantGaramond.variable} ${geistSans.variable} ${geistMono.variable} dark h-full antialiased selection:bg-[#f5f0e6] selection:text-[#08080a]`}
    >
      <body className="min-h-full flex flex-col bg-[#08080a] text-[#f5f0e6] font-sans relative">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-[#f5f0e6] focus:text-[#08080a] focus:font-mono focus:text-xs focus:uppercase focus:tracking-wider focus:rounded"
        >
          Skip to main content
        </a>
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
