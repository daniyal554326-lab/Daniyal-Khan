import { CaseStudy, ServiceItem, ProcessStep, Testimonial, StudioStat, OfficeLocation } from '../types';

export const STUDIO_INFO = {
  name: 'Studio Forma',
  tagline: 'We architect digital experiences, brand identities, and software that redefine modern industry leaders.',
  mission: 'Founded in 2021, Studio Forma is an independent design & technology practice collaborating with forward-thinking founders, venture funds, and cultural institutions globally.',
  foundedYear: '2021',
  availability: 'Available for Q3/Q4 2026',
  email: 'hello@studioforma.design',
  phone: '+1 (415) 890-3420',
  address: '424 Broadway, 5th Floor, Soho, New York, NY 10013',
};

export const STUDIO_STATS: StudioStat[] = [
  {
    value: '48+',
    label: 'Global Awards',
    description: 'Awwwards Site of the Year, FWA of the Day, Red Dot Best of Best'
  },
  {
    value: '$420M+',
    label: 'Client Capital Raised',
    description: 'Series A to IPO backed by a16z, Sequoia, Index Ventures'
  },
  {
    value: '99.2%',
    label: 'On-Time Delivery',
    description: 'Sprint-based agile engineering with zero scope compromise'
  },
  {
    value: '14',
    label: 'Timezones Supported',
    description: 'Distributed design pods in New York, London, and Tokyo'
  }
];

export const CLIENT_LOGOS = [
  { name: 'Vanguard Audio', label: 'VANGUARD' },
  { name: 'Aether Robotics', label: 'AETHER LABS' },
  { name: 'Lumina Energy', label: 'LUMINA' },
  { name: 'Prism Capital', label: 'PRISM VC' },
  { name: 'Kroma Atelier', label: 'KROMA' },
  { name: 'Synapse AI', label: 'SYNAPSE' },
  { name: 'Nordic Flow', label: 'NORDIC' },
  { name: 'Onyx Pay', label: 'ONYX' }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'aether-spatial',
    title: 'Aether Spatial Intelligence',
    client: 'Aether Robotics',
    year: '2025',
    category: 'digital',
    categoryLabel: 'Digital Product & 3D Web',
    summary: 'Next-generation spatial computing dashboard and generative autonomous robotics command console.',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop'
    ],
    deliverables: ['Web3D Realtime Console', 'Design System Architecture', 'Telemetry Interface', 'Motion Guidelines'],
    metrics: [
      { label: 'Latency Reduction', value: '-64%' },
      { label: 'Pilot Adoption Rate', value: '94%' },
      { label: 'Seed Round Raised', value: '$24M' }
    ],
    challenge: 'Aether developed autonomous spatial mapping drones for industrial logistics but lacked an intuitive, low-latency telemetry control suite that non-technical operators could master within minutes.',
    solution: 'We engineered an adaptive dark UI system built on lightweight WebGL canvas shaders, real-time spatial point-cloud visualizers, and modular cockpit widgets that seamlessly scale across 4K displays and rugged field tablets.',
    impact: 'Accelerated enterprise onboarding from 6 weeks to 3 days, securing multi-year defense and industrial logistics contracts across 8 countries.',
    testimonial: {
      quote: 'Studio Forma transformed our deep tech vision into one of the most stunning, frictionless software experiences in industrial robotics history.',
      author: 'Dr. Elena Rostova',
      role: 'Co-Founder & Chief Scientist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop'
    },
    featured: true,
    accentColor: '#f35815',
    duration: '14 Weeks'
  },
  {
    id: 'lumina-brand',
    title: 'Lumina Clean Energy Identity',
    client: 'Lumina Energy Systems',
    year: '2025',
    category: 'branding',
    categoryLabel: 'Brand Identity & Strategy',
    summary: 'A radical rebrand and global digital presence for Europe’s fastest-growing fusion and grid storage provider.',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop'
    ],
    deliverables: ['Global Brand Strategy', 'Custom Variable Typography', 'Investor Portal', '3D Motion Brand Assets'],
    metrics: [
      { label: 'Inbound Inquiries', value: '+340%' },
      { label: 'Brand Recognition', value: '4.8x' },
      { label: 'Series B Oversubscribed', value: '$85M' }
    ],
    challenge: 'Lumina needed to pivot from a research-stage lab into an authoritative global enterprise brand ready for institutional energy contracts and public market scrutiny.',
    solution: 'Created an unshakeable visual language inspired by photon physics and architectural brutalism: monolithic typography, luminous monochromatic gradients, and an interactive grid simulator.',
    impact: 'Established Lumina as the definitive European standard in grid battery infrastructure within 6 months of rollout.',
    testimonial: {
      quote: 'The brand Studio Forma crafted gave our sales team instant credibility when meeting with G7 energy ministers and Tier 1 sovereign funds.',
      author: 'Marcus Lindqvist',
      role: 'CEO & Founder, Lumina Energy',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
    },
    featured: true,
    accentColor: '#38bdf8',
    duration: '10 Weeks'
  },
  {
    id: 'vanguard-audio',
    title: 'Vanguard Spatial Acoustics',
    client: 'Vanguard Audio Labs',
    year: '2024',
    category: 'product',
    categoryLabel: 'Product Design & Mobile App',
    summary: 'Audiophile-grade companion software and acoustic calibration engine for high-end planar magnetic headphones.',
    coverImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop'
    ],
    deliverables: ['iOS & Android App', 'Parametric EQ Visualizer', 'Spatial Room Tuning UI', 'Haptic Micro-interactions'],
    metrics: [
      { label: 'App Store Rating', value: '4.9 ★' },
      { label: 'Daily Active Users', value: '82%' },
      { label: 'Audio Latency', value: '1.2ms' }
    ],
    challenge: 'Traditional audio companion apps are clunky, confusing, and fail to evoke the tactile luxury of physical high-end hi-fi equipment.',
    solution: 'Designed an ultra-fluid, tactile interface featuring skeuomorphic micro-textures rendered with real-time physical feedback and parametric soundstage sliders.',
    impact: 'Vanguard sold out its initial production run of 15,000 units in under 48 hours following app launch press reviews.',
    testimonial: {
      quote: 'Their attention to sub-pixel precision and tactile feedback gave our hardware the software soul it deserved.',
      author: 'Julian Vance',
      role: 'VP of Product Experience',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
    },
    featured: true,
    accentColor: '#eab308',
    duration: '12 Weeks'
  },
  {
    id: 'kroma-digital',
    title: 'Kroma Haute Horlogerie',
    client: 'Kroma Atelier Geneva',
    year: '2024',
    category: 'motion',
    categoryLabel: 'Art Direction & 3D Motion',
    summary: 'Interactive digital boutique and horological storytelling engine for bespoke Swiss mechanical timepieces.',
    coverImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop'
    ],
    deliverables: ['Real-time 3D Customizer', 'E-Commerce Experience', 'Interactive Movement Exploded View', 'Editorial Film'],
    metrics: [
      { label: 'Average Session Time', value: '6m 42s' },
      { label: 'Conversion Rate', value: '+180%' },
      { label: 'Awwwards', value: 'Site of the Day' }
    ],
    challenge: 'Selling $60,000+ bespoke handcrafted watches digitally requires an emotional intimacy that standard Shopify-style stores simply cannot deliver.',
    solution: 'Crafted an interactive horological museum where collectors can zoom in to examine hand-beveled tourbillon gears down to 10-micron precision.',
    impact: 'Generated 140 bespoke custom timepiece commissions with an average order value of $74,000 within the first quarter.',
    featured: false,
    accentColor: '#ec4899',
    duration: '8 Weeks'
  },
  {
    id: 'prism-capital',
    title: 'Prism Venture Intelligence',
    client: 'Prism Capital Partners',
    year: '2025',
    category: 'product',
    categoryLabel: 'Product Design & Financial OS',
    summary: 'Proprietary deal-flow sourcing, portfolio health analytics, and LP portal for a $1.2B global tech fund.',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'
    ],
    deliverables: ['Portfolio Intelligence UI', 'LP Investor Reporting Suite', 'Live Valuation Models', 'Role-Based Access System'],
    metrics: [
      { label: 'Reporting Time Saved', value: '45 hrs/mo' },
      { label: 'LP Engagement', value: '98%' },
      { label: 'AUM Supported', value: '$1.2B' }
    ],
    challenge: 'Managing over 120 portfolio companies using disparate spreadsheets and antiquated legacy portals was costing investment teams hundreds of hours each quarter.',
    solution: 'Designed an elegant, keyboard-first operating system with real-time cap-table visualizers, cohort retention matrices, and instant LP report generation.',
    impact: 'Adopted by all 14 managing partners and praised by institutional LPs as the gold standard in sovereign wealth fund transparency.',
    featured: false,
    accentColor: '#10b981',
    duration: '16 Weeks'
  },
  {
    id: 'synapse-neuro',
    title: 'Synapse Neural Analytics',
    client: 'Synapse Health Labs',
    year: '2024',
    category: 'branding',
    categoryLabel: 'Brand Identity & Web Experience',
    summary: 'Visual identity and clinical trial recruitment portal for breakthrough non-invasive neurological biomarkers.',
    coverImage: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop'
    ],
    deliverables: ['Comprehensive Identity System', 'Interactive Clinical Web Experience', 'Scientific Motion Graphics', 'Patient Consent Flows'],
    metrics: [
      { label: 'Trial Recruitment', value: '3x Speed' },
      { label: 'Patient Retention', value: '96%' },
      { label: 'FDA Approval Stage', value: 'Phase III' }
    ],
    challenge: 'Communicating complex neurological brainwave diagnostics to both FDA regulators and clinical trial patients without causing anxiety or confusion.',
    solution: 'Developed an organic visual system utilizing smooth mathematical curves, soothing biocentric color palettes, and clear, human-first consent journeys.',
    impact: 'Fully recruited all 2,000 multi-center trial participants 4 months ahead of scheduled FDA milestones.',
    featured: false,
    accentColor: '#8b5cf6',
    duration: '9 Weeks'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'brand-strategy',
    title: 'Brand Strategy & Identity',
    tagline: 'Definitive visual languages built for longevity and market dominance.',
    description: 'We position brands to stand distinct in crowded markets through deep narrative architecture, bespoke typography, and coherent multi-channel design systems.',
    iconName: 'Sparkles',
    deliverables: [
      'Market Positioning & Brand Narrative',
      'Logomarks & Visual Symbolism',
      'Custom Typography & Color Systems',
      'Brand Guidelines & Asset Libraries',
      'Packaging, Environmental & Print Design'
    ],
    technologies: ['Figma', 'Illustrator', 'Glyphs', 'Cinema 4D', 'Blender'],
    timeline: '4 – 8 Weeks',
    startingRate: '$25,000'
  },
  {
    id: 'digital-product',
    title: 'Digital Product & UI/UX',
    tagline: 'Mission-critical software engineered with sub-pixel craft.',
    description: 'From zero-to-one MVP architecture to enterprise design systems, we design intuitive interfaces that empower users and convert complex workflows into effortless actions.',
    iconName: 'LayoutGrid',
    deliverables: [
      'User Research & Workflow Mapping',
      'High-Fidelity Wireframes & Prototypes',
      'Scalable Design Systems & Token Sets',
      'Micro-interactions & Motion Logic',
      'Developer Handoff & QA Auditing'
    ],
    technologies: ['Figma', 'Storybook', 'Protopie', 'Linear', 'Rive'],
    timeline: '6 – 14 Weeks',
    startingRate: '$35,000'
  },
  {
    id: 'creative-development',
    title: 'Creative Web & Engineering',
    tagline: 'High-performance web architecture blending art with computational speed.',
    description: 'We build responsive, ultra-fast websites and custom web apps with buttery 60fps animations, 3D WebGL scenes, headless CMS architectures, and airtight SEO foundations.',
    iconName: 'CodeXml',
    deliverables: [
      'Headless & Modular Web Architecture',
      'WebGL / Three.js 3D Interactive Scenes',
      'Tailwind CSS & Modern Animation Engines',
      'Full CMS Integration (Sanity / Contentful)',
      'Lighthouse 98+ Core Web Vitals Optimization'
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Three.js', 'GSAP / Motion'],
    timeline: '5 – 10 Weeks',
    startingRate: '$30,000'
  },
  {
    id: 'art-direction',
    title: 'Art Direction & 3D Motion',
    tagline: 'Cinematic visual assets that command emotional resonance.',
    description: 'We create photorealistic 3D product renders, spatial animations, brand films, and generative CGI visuals that elevate campaigns and captivate audiences.',
    iconName: 'Film',
    deliverables: [
      '3D Product Modeling & Texturing',
      'Motion Design & Showreels',
      'Key Visuals for Global Campaigns',
      'Audio & Sound Design Curation',
      'Social & Outdoor Billboard Assets'
    ],
    technologies: ['Cinema 4D', 'Octane / Redshift', 'After Effects', 'Houdini'],
    timeline: '3 – 6 Weeks',
    startingRate: '$20,000'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & Strategic Diagnosis',
    duration: 'Week 1 – 2',
    description: 'We immerse ourselves in your domain, interview stakeholders, audit competitors, and clarify core commercial objectives.',
    activities: [
      'Stakeholder immersion workshops',
      'Competitive landscape mapping',
      'Target user persona interviews',
      'Technical architecture audit'
    ],
    output: 'Strategic Brief, Project Architecture & Milestones'
  },
  {
    step: '02',
    title: 'Conceptual Direction & Creative Angles',
    duration: 'Week 3 – 4',
    description: 'We explore divergent creative paths, moodboards, and interactive prototypes to align on an unmistakable visual and product direction.',
    activities: [
      'Visual moodboards & design language exploration',
      'Rapid interactive prototype testing',
      'Typography and tonal experiments',
      'Information architecture blueprinting'
    ],
    output: '2 Creative Vectors with Interactive Proofs of Concept'
  },
  {
    step: '03',
    title: 'High-Fidelity Craft & Systematization',
    duration: 'Week 5 – 8',
    description: 'We execute every screen, state, motion curve, and asset with extreme precision, baking everything into a scalable design token library.',
    activities: [
      'Pixel-perfect interface production',
      'Motion design & micro-interaction curves',
      'Comprehensive design system & component tokens',
      'Real-device ergonomics testing'
    ],
    output: 'Complete High-Fidelity UI & Living Design System'
  },
  {
    step: '04',
    title: 'Production, Launch & Evolution',
    duration: 'Week 9 – 12',
    description: 'We build with clean, tested code or partner directly with your engineering team to ensure flawless implementation and public launch.',
    activities: [
      'Front-end engineering & WebGL integration',
      'Cross-browser & accessibility QA audits',
      'Lighthouse performance tuning',
      'Post-launch telemetry & conversion monitoring'
    ],
    output: 'Production-Ready Codebase & Launch Celebration'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'Studio Forma does not just design screens—they fundamentally elevated how the market perceives our valuation. Within 90 days of launch, our enterprise sales cycle shortened by 40%.',
    author: 'Sarah Chen-Moriarty',
    role: 'Co-Founder & CEO',
    company: 'Synapse Health Labs',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    projectType: 'Brand & Digital Experience'
  },
  {
    id: 't2',
    quote: 'In 15 years in Silicon Valley, I have rarely worked with a design team that combines extreme aesthetic taste with deep technical engineering fluency like Studio Forma.',
    author: 'David Harrison',
    role: 'General Partner',
    company: 'Prism Capital',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    projectType: 'Venture OS & LP Portal'
  },
  {
    id: 't3',
    quote: 'Their sprint discipline is unmatched. Zero bullshit, no fluff decks—just razor-sharp strategy and world-class craftsmanship delivered exactly when promised.',
    author: 'Amara Okafor',
    role: 'Head of Global Brand',
    company: 'Lumina Energy Systems',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    projectType: 'Global Rebrand & WebGL Platform'
  }
];

export const AWARDS = [
  { year: '2025', title: 'Site of the Year Nominee', organization: 'Awwwards', project: 'Aether Spatial Console' },
  { year: '2025', title: 'Best Visual Design & UI', organization: 'FWA of the Month', project: 'Lumina Energy' },
  { year: '2024', title: 'Red Dot Best of the Best', organization: 'Red Dot Design Award', project: 'Vanguard Audio App' },
  { year: '2024', title: 'Developer Award', organization: 'Awwwards', project: 'Kroma Horlogerie' },
  { year: '2024', title: 'Studio of the Year Finalist', organization: 'CSS Design Awards', project: 'Studio Forma' }
];

export const OFFICES: OfficeLocation[] = [
  {
    city: 'New York',
    country: 'United States',
    address: '424 Broadway, 5th Fl, Soho',
    timezone: 'EST (UTC-5)',
    status: 'Headquarters'
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '14 Shoreditch High St',
    timezone: 'GMT (UTC+0)',
    status: 'Design Lab'
  },
  {
    city: 'Tokyo',
    country: 'Japan',
    address: '5-7-2 Minami-Aoyama, Minato',
    timezone: 'JST (UTC+9)',
    status: 'Creative Pod'
  }
];

export const FAQS = [
  {
    question: 'How do you structure your engagements?',
    answer: 'We operate primarily through two models: fixed-scope project partnerships (typical timelines range between 6 to 14 weeks) and dedicated embedded design/dev sprints for ongoing product scaling.'
  },
  {
    question: 'What is your typical project investment range?',
    answer: 'Full-scope brand identity and digital product engagements typically start at $25,000 and scale based on project complexity, 3D/motion requirements, and delivery timeline.'
  },
  {
    question: 'Do you write production-ready code or only provide design files?',
    answer: 'We do both! We deliver complete production-ready React/TypeScript/Tailwind codebases with full animations and CMS integration, or provide meticulous design systems and handoff tokens for your in-house engineering team.'
  },
  {
    question: 'How quickly can we kick off a project?',
    answer: 'We deliberately limit our active client roster to 3-4 concurrent projects to ensure senior partner immersion. Our next available kickoff window is typically 2 to 4 weeks out.'
  }
];
