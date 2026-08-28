import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/agencyData';
import { CaseStudy, ProjectCategory } from '../types';
import { ArrowUpRight, Filter, Sparkles } from 'lucide-react';

interface WorksSectionProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const WorksSection: React.FC<WorksSectionProps> = ({ onSelectCaseStudy }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'digital', label: 'Digital Web & 3D' },
    { key: 'branding', label: 'Brand Identity' },
    { key: 'product', label: 'Product & Apps' },
    { key: 'motion', label: '3D & Motion' },
  ];

  const filteredProjects = CASE_STUDIES.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="work" className="py-24 sm:py-32 relative border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono tracking-[0.2em] text-[#D4AF37] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
              <span>PORTFOLIO ARCHIVE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#F5F5F4] tracking-tight">
              Selected Works & Proof
            </h2>
            <p className="text-[#A8A29E] text-sm sm:text-base mt-2 max-w-xl font-sans-modern">
              Deep-dive case studies spanning identity systems, complex SaaS operating systems, and boundary-pushing web experiences.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center flex-wrap gap-2 bg-[#121212] p-1.5 rounded-full border border-[#262626]">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-[#F5F5F4] text-[#0A0A0A] shadow-sm'
                    : 'text-[#A8A29E] hover:text-[#F5F5F4] hover:bg-white/[0.04]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectCaseStudy(project)}
              className="group cursor-pointer rounded-2xl bg-[#111111] border border-[#222222] hover:border-[#3a3a3a] overflow-hidden transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70"
            >
              {/* Card Image Cover */}
              <div className="relative h-[280px] sm:h-[360px] overflow-hidden bg-black/50">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                />

                {/* Gradient tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-90" />

                {/* Top badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-[#0A0A0A]/80 backdrop-blur-md border border-[#333333] text-[11px] font-mono text-[#D4AF37]">
                    {project.categoryLabel}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#0A0A0A]/80 backdrop-blur-md border border-[#333333] text-[11px] font-mono text-[#A8A29E]">
                    {project.year}
                  </span>
                </div>

                {/* Hover CTA Indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="px-4 py-2 rounded-full bg-[#F5F5F4] text-[#0A0A0A] text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 shadow-lg">
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#A88B57]" />
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37] mb-1.5">
                    {project.client}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#F5F5F4] group-hover:text-white transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[#A8A29E] text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed font-sans-modern">
                    {project.summary}
                  </p>
                </div>

                {/* Metrics Highlight & Deliverables */}
                <div className="pt-4 border-t border-[#222222] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-display font-normal text-[#F5F5F4]">
                      {project.metrics[0]?.value}
                    </span>
                    <span className="text-[11px] text-[#A8A29E] font-sans-modern leading-tight">
                      {project.metrics[0]?.label}
                    </span>
                  </div>

                  <div className="text-xs text-[#737373] font-mono hidden sm:block">
                    {project.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Portfolio Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#111111] border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center sm:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#F5F5F4] mb-2">
              Have an upcoming product launch or rebrand?
            </h3>
            <p className="text-[#A8A29E] text-xs sm:text-sm font-sans-modern">
              We provide tailored sprint structures and end-to-end design engineering partnerships.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-full bg-[#F5F5F4] hover:bg-[#E5E5E5] text-[#0A0A0A] text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center gap-2 shrink-0 transition-all active:scale-95 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-[#A88B57]" />
            <span>Request Private NDA Portfolio</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
