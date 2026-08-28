export type ProjectCategory = 'all' | 'branding' | 'digital' | 'product' | 'motion';

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  year: string;
  category: ProjectCategory;
  categoryLabel: string;
  summary: string;
  coverImage: string;
  gallery: string[];
  deliverables: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  impact: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
  };
  featured: boolean;
  accentColor: string;
  duration: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  deliverables: string[];
  technologies: string[];
  timeline: string;
  startingRate: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  activities: string[];
  output: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  projectType: string;
}

export interface StudioStat {
  label: string;
  value: string;
  description: string;
}

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  timezone: string;
  status: string;
}

export interface ProjectInquiry {
  services: string[];
  budget: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
  details: string;
}
