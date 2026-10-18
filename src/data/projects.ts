export type ProjectCategory =
  | 'All'
  | 'Narrative'
  | 'Commercial'
  | 'Music Video'
  | 'Documentary'
  | 'Fashion & Art';

export interface TimelineStems {
  videoTracks: number;
  audioStems: string[];
  cutCount: number;
  pacingBpm?: string;
  proxyCodec?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  category: Exclude<ProjectCategory, 'All'>;
  clientOrDirector: string;
  productionCompany?: string;
  role: string;
  runtime: string;
  aspectRatio: string;
  timecode: string;
  frameRate: string;
  cameraFormat: string;
  colorGrade: string;
  software: string[];
  poster: string;
  videoSrc?: string;
  featured: boolean;
  layoutVariant:
    | 'monument'
    | 'split-wide'
    | 'split-tall'
    | 'centerpiece'
    | 'offset-left'
    | 'offset-right'
    | 'archive';
  synopsis: string;
  editorNotes: string;
  timelineStems: TimelineStems;
  laurelsOrAccolades?: string[];
  tags: string[];
}

export const CATEGORIES: ProjectCategory[] = [
  'All',
  'Narrative',
  'Commercial',
  'Music Video',
  'Documentary',
  'Fashion & Art',
];

export const PROJECTS: Project[] = [
  {
    id: '01',
    slug: 'chronicles-of-dust',
    title: 'Chronicles of Dust',
    subtitle: 'Psychological Tension in Desert Isolation',
    year: '2025',
    category: 'Narrative',
    clientOrDirector: 'Dir. Alistair Vance',
    productionCompany: 'Solitude Filmworks & Lumina Labs',
    role: 'Lead Film Editor & Sound Architect',
    runtime: '18m 42s',
    aspectRatio: '2.39:1 Anamorphic',
    timecode: '01:14:22:18',
    frameRate: '23.976 fps',
    cameraFormat: 'ARRI Alexa Mini LF / Cooke Anamorphic /i',
    colorGrade: 'DaVinci Resolve Studio / Custom Kodak 2383 D55 Print Stock',
    software: ['DaVinci Resolve Studio 19', 'Avid Media Composer', 'iZotope RX 11'],
    poster: '/posters/poster-1-chronicles-of-dust.jpg',
    videoSrc: '/videos/chronicles-of-dust.mp4',
    featured: true,
    layoutVariant: 'monument',
    synopsis:
      'Set against the parched desert outposts of the Thar, two estranged brothers confront a fractured inheritance as impending dust storms sever all communication with the outside world.',
    editorNotes:
      'The dramatic tension was unlocked not through hyperactive cutting, but by delaying the reverse angle. We held on silence until the arid desert wind and atmospheric pressure became palpable. The climax relies on rhythmic micro-adjustments on character glances, tightening from 4-second held closeups down to instinctual 8-frame splices.',
    timelineStems: {
      videoTracks: 4,
      audioStems: ['Dialogue DX (Cleaned)', 'Desert Ambience MX', 'Sub-Bass Drone', 'Foley FX'],
      cutCount: 142,
      pacingBpm: '54 BPM Slow Burn',
      proxyCodec: 'Apple ProRes 422 Proxy (1080p)',
    },
    laurelsOrAccolades: [
      'Official Selection — Venice Shorts 2025',
      'Best Editing — Raindance Film Festival',
      'Vimeo Staff Pick Premiere',
    ],
    tags: ['Narrative Drama', 'Slow Cinema', 'Psychological', '35mm Aesthetic'],
  },
  {
    id: '02',
    slug: 'obsidian-nights',
    title: 'Obsidian Nights',
    subtitle: 'Tokyo Subterranean Aerodynamics',
    year: '2025',
    category: 'Commercial',
    clientOrDirector: 'Porsche Design x Studio Noir',
    productionCompany: 'Kurogane Creative Tokyo',
    role: 'Lead Editor & Rhythm Designer',
    runtime: '90s Director’s Cut',
    aspectRatio: '16:9 Cinematic',
    timecode: '00:01:30:00',
    frameRate: '24.000 fps',
    cameraFormat: 'Sony VENICE 2 8K / Hawk V-Lite Anamorphic',
    colorGrade: 'High-Contrast Cyan & Tungsten Noir / Monochromatic Midtones',
    software: ['Adobe Premiere Pro 2025', 'After Effects 2025', 'Soundtoys 5'],
    poster: '/posters/poster-2-obsidian-nights.jpg',
    videoSrc: '/videos/obsidian-nights.mp4',
    featured: false,
    layoutVariant: 'split-wide',
    synopsis:
      'A nocturnal sprint through Tokyo’s subterranean expressways, highlighting the brutalist aerodynamics and silent electric torque of experimental hyper-prototypes.',
    editorNotes:
      'Engineered around syncopated transient audio hits and mechanical whip pans. The pacing fluctuates like a high-rev gearbox: lingering on sleek aerodynamic reflections before erupting into 12-frame strobe cuts synchronized to modular synth arpeggios.',
    timelineStems: {
      videoTracks: 8,
      audioStems: ['Electric Motor Whine (SFX)', 'Tire Friction', 'Modular Synth Score', 'Sub Drop'],
      cutCount: 88,
      pacingBpm: '134 BPM Kinetic',
      proxyCodec: 'Apple ProRes 422 LT',
    },
    laurelsOrAccolades: ['Clio Awards — Bronze (Cinematography & Editing)', 'Ciclope Asia Shortlist'],
    tags: ['Automotive', 'Commercial', 'Sound Design', 'High-Speed Match Cut'],
  },
  {
    id: '03',
    slug: 'hymn-for-the-lost',
    title: 'Hymn for the Lost',
    subtitle: 'Acoustic Elegies on Black Sands',
    year: '2024',
    category: 'Music Video',
    clientOrDirector: 'Dir. Elena Rostova / Artist: Elena Vane',
    productionCompany: 'Mercury KX & Nordic Cine-Poetry',
    role: 'Editor & Colorist',
    runtime: '4m 15s',
    aspectRatio: '1.85:1 European Widescreen',
    timecode: '00:04:15:00',
    frameRate: '24.000 fps',
    cameraFormat: 'ARRI Amira / Zeiss Super Speeds (1982 Vintage Glass)',
    colorGrade: 'Desaturated Slate Blue, Cold Mist & Warm Skin Tones',
    software: ['DaVinci Resolve Studio 19', 'Adobe Premiere Pro'],
    poster: '/posters/poster-3-hymn-for-the-lost.jpg',
    videoSrc: '/videos/hymn-for-the-lost.mp4',
    featured: false,
    layoutVariant: 'split-tall',
    synopsis:
      'An intimate visual poem exploring grief, memory, and spiritual rebirth captured across Icelandic black sand shores and abandoned coastal cathedrals.',
    editorNotes:
      'Edited strictly to the organic rubato and breath of the solo cello performance rather than a rigid digital grid. Frame transitions act as harmonic modulations, allowing the wave crashes to swallow visual cuts seamlessly.',
    timelineStems: {
      videoTracks: 3,
      audioStems: ['Solo Cello Master', 'Ocean Swell Ambience', 'Foley Footsteps on Basalt'],
      cutCount: 36,
      pacingBpm: 'Free Tempo / Rubato',
      proxyCodec: 'DNxHR HQ',
    },
    laurelsOrAccolades: ['Berlin Music Video Awards Nominee', '1.4 Awards — Flying High Gold'],
    tags: ['Music Video', 'Poetic Realism', 'Natural Light', 'Celluloid Texture'],
  },
  {
    id: '04',
    slug: 'the-last-horizon',
    title: 'The Last Horizon',
    subtitle: 'Karakoram Winter Solo Traverse',
    year: '2024',
    category: 'Documentary',
    clientOrDirector: 'Dir. Marcus Haze & Harsh',
    productionCompany: 'Patagonia Media & Alpine Archives',
    role: 'Lead Documentary Editor & Narrative Architect',
    runtime: '26m 10s',
    aspectRatio: '2.39:1 Ultra Panavision',
    timecode: '00:26:10:00',
    frameRate: '23.976 fps',
    cameraFormat: 'RED V-Raptor 8K VV / Leica R Vintage Primes',
    colorGrade: 'Photochemical Bleach Bypass Simulation with Pure Alpine Snow Rolloff',
    software: ['Avid Media Composer 2024', 'DaVinci Resolve Studio 19', 'FabFilter Pro-Q 3'],
    poster: '/posters/poster-4-the-last-horizon.jpg',
    videoSrc: '/videos/the-last-horizon.mp4',
    featured: true,
    layoutVariant: 'centerpiece',
    synopsis:
      'An unassisted solo winter traverse across the knife-edge ridges of the Karakoram. A severe, unfiltered meditation on solitude, hypothermia, and the unforgiving sublime.',
    editorNotes:
      'Sifting through 110 hours of raw expedition helmet cameras and helicopter wide shots required radical emotional discipline. We stripped back narrative voiceover to let the howling gale and rhythmic crampon crunches tell the physiological journey.',
    timelineStems: {
      videoTracks: 6,
      audioStems: ['Expedition Helmet Mic', 'Glacial Winds', 'Spindrift Foley', 'Low Sub Pressure'],
      cutCount: 210,
      pacingBpm: 'Variable Atmospheric',
      proxyCodec: 'Apple ProRes 422 Proxy',
    },
    laurelsOrAccolades: [
      'Banff Mountain Film Festival — Best Mountain Film',
      'Kendall Mountain Festival Grand Prize',
    ],
    tags: ['Documentary', 'High Alpine', 'Extreme Endurance', 'Minimalist Soundscape'],
  },
  {
    id: '05',
    slug: 'maison-de-lombre',
    title: 'Maison de L’Ombre',
    subtitle: 'Brutalist Geometry & Tailored Silhouette',
    year: '2024',
    category: 'Fashion & Art',
    clientOrDirector: 'Maison de L’Ombre Paris',
    productionCompany: 'Atelier Monochrome',
    role: 'Editor, Colorist & Motion Collage',
    runtime: '2m 30s',
    aspectRatio: '4:3 Academy Format',
    timecode: '00:02:30:12',
    frameRate: '24.000 fps',
    cameraFormat: '16mm Arriflex 416 / Cooke Kinetal Primes',
    colorGrade: 'High-Density Silver Gelatin Monochromatic Grade',
    software: ['DaVinci Resolve Studio 19', 'Premiere Pro', 'Dehancer Pro'],
    poster: '/posters/poster-5-maison-de-lombre.jpg',
    videoSrc: '/videos/maison-de-lombre.mp4',
    featured: false,
    layoutVariant: 'offset-left',
    synopsis:
      'An architectural choreography of heavy wools, raw silks, and dramatic chiaroscuro light cast within an abandoned brutalist villa in northern France.',
    editorNotes:
      'Cut strictly within the 4:3 Academy frame. Jump cuts were aligned along architectural axes and seam lines, turning garment drapery into sculptural kinetic gestures.',
    timelineStems: {
      videoTracks: 2,
      audioStems: ['Minimalist Tape Loop', 'Concrete Reverb Footsteps', 'Silk Fabric Whooshes'],
      cutCount: 52,
      pacingBpm: '72 BPM Stately',
      proxyCodec: 'ProRes 4444',
    },
    laurelsOrAccolades: ['London Fashion Film Festival — Best Editing & Art Direction'],
    tags: ['Fashion Film', '16mm Celluloid', 'Brutalist Architecture', 'Academy 4:3'],
  },
  {
    id: '06',
    slug: 'neon-verse',
    title: 'Neon Verse // Tokyo Protocol',
    subtitle: 'Analog Courier in a Synthetic Dystopia',
    year: '2024',
    category: 'Narrative',
    clientOrDirector: 'Dir. Kenji Takahashi',
    productionCompany: 'Neo-Shinjuku Cinema Syndicate',
    role: 'Lead Film Editor & Sound Design',
    runtime: '14m 05s',
    aspectRatio: '2.39:1 Anamorphic',
    timecode: '00:14:05:08',
    frameRate: '23.976 fps',
    cameraFormat: 'ARRI Alexa 35 / Atlas Orion Anamorphic Series',
    colorGrade: 'Deep Shadow Tungsten & Emerald Green Neon Split',
    software: ['Adobe Premiere Pro 2025', 'DaVinci Resolve Studio 19', 'Nuendo 13'],
    poster: '/posters/poster-6-neon-verse.jpg',
    videoSrc: '/videos/neon-verse.mp4',
    featured: false,
    layoutVariant: 'offset-right',
    synopsis:
      'In a rain-soaked near-future metropolis, an analog data courier must navigate corporate surveillance networks to deliver a final unencrypted magnetic tape.',
    editorNotes:
      'The entire audio rhythm was built around analog magnetic tape clicks, typewriter strikes, and rain patter. We engineered pre-lap J-cuts where future sounds leak backward across the edit point to disorient the viewer into the protagonist’s paranoia.',
    timelineStems: {
      videoTracks: 5,
      audioStems: ['Analog Tape SFX', 'Rain Ambience 5.1', 'Distorted Synth Wave', 'DX Narration'],
      cutCount: 165,
      pacingBpm: '88 BPM Syncopated',
      proxyCodec: 'Apple ProRes 422 HQ',
    },
    laurelsOrAccolades: ['Sitges Film Festival Official Selection', 'Fantastic Fest Austin'],
    tags: ['Cyber-Noir', 'Sci-Fi Narrative', 'Sound Design Heavy', 'Anamorphic Flare'],
  },
  {
    id: '07',
    slug: 'kinetic-archive',
    title: 'Kinetic Archive // 24 FPS Study',
    subtitle: 'Physical Steenbeck Cutting Room & 120-Cut Velocity Study',
    year: '2023',
    category: 'Fashion & Art',
    clientOrDirector: 'Harsh (Self-Directed Structural Cut)',
    productionCompany: 'The Editor’s Room Experimental',
    role: 'Director, Editor & Analog Splice Master',
    runtime: '60s Velocity Cut',
    aspectRatio: '16:9 Multi-Split & 35mm Flat',
    timecode: '00:01:00:00',
    frameRate: '24.000 fps',
    cameraFormat: 'Arriflex 35 III & Bell & Howell 2709 (Physical 35mm Celluloid)',
    colorGrade: 'Raw Kodak Eastman 5247 Film Stock Scan',
    software: ['Steenbeck Flatbed 35mm Table', 'DaVinci Resolve Studio 19'],
    poster: '/posters/poster-7-kinetic-archive.jpg',
    videoSrc: '/videos/kinetic-archive.mp4',
    featured: false,
    layoutVariant: 'archive',
    synopsis:
      'A visceral exploration of tactile film editing: razor blades, tape splicers, lightbox loupes, and match-action motion vectors executing 120 cuts across 60 seconds.',
    editorNotes:
      'A tribute to the tactile origin of editing. Every single cut honors the kinetic momentum of the preceding frame — eye trace vector, rotational acceleration, or chromatic reversal. An antidote to lazy algorithmic pacing.',
    timelineStems: {
      videoTracks: 1,
      audioStems: ['Physical Film Clatter', 'Razor Splicer Snap', 'Motor Hum', 'Sync Beep 1kHz'],
      cutCount: 120,
      pacingBpm: '120 BPM Hard Lock',
      proxyCodec: 'Uncompressed 10-bit DPX',
    },
    laurelsOrAccolades: ['Featured in American Cinema Editors (ACE) Student Showcase'],
    tags: ['Tactile Celluloid', 'Kinetic Montage', 'Match Cut Masterclass', 'Experimental'],
  },
];

export interface EditorProfile {
  name: string;
  wordmark: string;
  title: string;
  location: string;
  availability: string;
  bioSummary: string;
  manifesto: string[];
  disciplines: {
    title: string;
    description: string;
    metric: string;
  }[];
  hardwareAndSuite: {
    category: string;
    items: string[];
  }[];
  awardsAndRecognition: string[];
  socialLinks: {
    label: string;
    url: string;
    handle: string;
  }[];
  contactEmail: string;
}

export const HARSH_PROFILE: EditorProfile = {
  name: 'Harsh',
  wordmark: 'HARSH',
  title: 'Film & Commercial Video Editor',
  location: 'Mumbai, India // Operating Globally',
  availability: 'Accepting Select Feature & Commercial Projects (Q1/Q2 2026)',
  bioSummary:
    'Harsh is a film and commercial editor specializing in rhythmic momentum, narrative psychology, and high-impact sound design. Working across narrative shorts, festival cinema, luxury automotive, and experimental music films, his cutting room is where chaos is distilled into undeniable emotional cadence.',
  manifesto: [
    'A cut is never merely a splice in time. It is a breath, a pulse, a deliberate calibration of human neuro-rhythm.',
    'True editing is invisible when emotional resonance demands it, and brutally surgical when visceral velocity is required.',
    'Sound design is half the cut: a room tone, a pre-lap transient, or three frames of complete silence holds more power than a thousand explosions.',
  ],
  disciplines: [
    {
      title: 'Narrative Architecture',
      description:
        'Carving character subtext, structural tension, and emotional catharsis out of sprawling dailies.',
      metric: 'Over 200+ hours of narrative dailies shaped',
    },
    {
      title: 'Rhythm & Micro-Pacing',
      description:
        'Precision timing calibrated down to individual frames to control the audience’s eye trace and physiological heartbeat.',
      metric: 'Frame-accurate temporal dynamics',
    },
    {
      title: 'Sound-First Cutting',
      description:
        'Designing immersive audio beds, J/L cut overlaps, and tactile diegetic textures parallel to visual assembly.',
      metric: 'Full multi-stem audio pre-mixes',
    },
    {
      title: 'Color & Texture Science',
      description:
        'Advanced DaVinci Resolve color pipelines, custom 35mm grain simulations, and LUT calibration for cinematic film response.',
      metric: 'DCI-P3 & Rec.709 calibrated monitoring',
    },
  ],
  hardwareAndSuite: [
    {
      category: 'NLE & Software Suite',
      items: [
        'DaVinci Resolve Studio 19 (Advanced Color & Fairlight)',
        'Adobe Premiere Pro 2025',
        'Avid Media Composer 2024',
        'Adobe After Effects & Boris FX Mocha',
        'iZotope RX 11 Advanced Audio Restoration',
      ],
    },
    {
      category: 'Hardware & Monitoring',
      items: [
        'Apple Silicon M-Series Max Studio Rig',
        'Dual Color-Calibrated Reference Displays (DCI-P3 10-Bit)',
        'Blackmagic Design DaVinci Resolve Mini Panel',
        'Genelec 8030C Studio Monitors & Subwoofer',
        'Sennheiser HD650 Open-Back Reference Cans',
      ],
    },
    {
      category: 'Remote Workflow & Pipeline',
      items: [
        'Frame.io Camera-to-Cloud (C2C) Certified',
        'LucidLink & Aspera High-Speed File Transport',
        'Dedicated 1Gbps Fiber Symmetric Uplink',
        'RAID-0 NVMe Production Scratch Arrays',
      ],
    },
  ],
  awardsAndRecognition: [
    'Venice Shorts 2025 — Official Selection (Chronicles of Dust)',
    'Raindance Film Festival — Best Editing in Short Form',
    'Clio Awards Bronze — Automotive Craft',
    'Berlin Music Video Awards Nominee',
    'Banff Mountain Film Festival — Best Alpine Short',
    'Vimeo Staff Pick Premiere (Twice Featured)',
  ],
  socialLinks: [
    { label: 'Vimeo', url: 'https://vimeo.com', handle: '@harsh-editor' },
    { label: 'IMDb', url: 'https://imdb.com', handle: 'Harsh' },
    { label: 'Instagram', url: 'https://instagram.com', handle: '@harsh.cuts' },
    { label: 'YouTube', url: 'https://youtube.com', handle: '@harsh-films' },
    { label: 'LinkedIn', url: 'https://linkedin.com', handle: 'harsh-film-editor' },
  ],
  contactEmail: 'harsh.editor.film@gmail.com',
};

export interface DeveloperProfile {
  name: string;
  role: string;
  githubUrl: string;
  portfolioUrl?: string;
  statement: string;
  engineeringPillars: {
    title: string;
    desc: string;
  }[];
  stack: string[];
}

export const DEVELOPER_PROFILE: DeveloperProfile = {
  name: 'Shivkumar',
  role: 'Frontend Architect & Creative Technologist',
  githubUrl: 'https://github.com/shivkumar077/Editor-s-Portfolio',
  statement:
    'Crafted with obsessive attention to digital typography, performance budgets, and cinematic interaction mechanics. This platform is intentionally built without generic UI frameworks, heavy telemetry, or extraneous libraries — delivering a monolithic, tranquil, 60fps digital gallery worthy of auteur cinema.',
  engineeringPillars: [
    {
      title: 'Zero-Bloat Next.js Architecture',
      desc: 'Next.js 16 App Router with Turbopack, fully static HTML export capability, sub-second hydration, and zero layout shift (CLS 0.00).',
    },
    {
      title: 'Hover-to-Play Video Engine',
      desc: 'Custom headless HTML5 video proxy controller with muted preview scrubbing, hardware-accelerated crossfades, and automatic fallback for image posters.',
    },
    {
      title: 'Accessible & Motion-Respectful',
      desc: 'WCAG AAA contrast typography (#F5F0E6 on #08080A), full keyboard trap management for modals, ARIA dialog specs, and graceful prefers-reduced-motion degradation.',
    },
  ],
  stack: [
    'Next.js 16 (App Router)',
    'React 19',
    'TypeScript 5',
    'Tailwind CSS v4',
    'Lucide React',
    'Custom CSS Still-Water Dynamics',
  ],
};
