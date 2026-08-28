import React, { useState } from 'react';
import { SERVICES } from '../data/agencyData';
import { ServiceItem } from '../types';
import {
  Sparkles,
  LayoutGrid,
  CodeXml,
  Film,
  CheckCircle2,
  ArrowUpRight,
  Clock,
  Coins,
  ChevronDown
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForEstimator: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForEstimator,
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5 text-[#F5F5F4]" />;
      case 'CodeXml':
        return <CodeXml className="w-5 h-5 text-[#A88B57]" />;
      case 'Film':
        return <Film className="w-5 h-5 text-[#E7D7C1]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 relative border-t border-[#222222] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono tracking-[0.2em] text-[#D4AF37] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#F5F5F4] tracking-tight">
            Integrated Design & Technology Practices
          </h2>
          <p className="text-[#A8A29E] text-sm sm:text-base mt-3 leading-relaxed font-sans-modern">
            We operate at the convergence of strategic narrative, world-class interface ergonomics, and rapid, high-performance web engineering.
          </p>
        </div>

        {/* Services Interactive Accordion / Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Service Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            {SERVICES.map((service) => {
              const isActive = activeServiceId === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full text-left p-5 sm:p-6 rounded-2xl border transition-all duration-200 flex items-start justify-between gap-4 cursor-pointer ${
                    isActive
                      ? 'bg-[#141414] border-[#404040] shadow-xl'
                      : 'bg-[#111111] border-[#222222] hover:bg-[#141414] hover:border-[#333333]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-[#1A1A1A] border border-[#2B2B2B] shrink-0 mt-0.5">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-normal text-[#F5F5F4] mb-1">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#A8A29E] line-clamp-1 font-sans-modern">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 pt-1">
                    <ChevronDown
                      className={`w-4 h-4 text-[#737373] transition-transform duration-300 ${
                        isActive ? '-rotate-90 text-[#F5F5F4]' : ''
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Service Deep Dive Details */}
          {(() => {
            const currentService =
              SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];
            return (
              <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#111111] border border-[#262626] shadow-2xl relative overflow-hidden space-y-6">
                {/* Subtle ambient glow accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 blur-[100px] pointer-events-none -z-10 rounded-full" />

                {/* Service Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#222222]">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 rounded-lg bg-[#1A1A1A] border border-[#2B2B2B]">
                        {getServiceIcon(currentService.iconName)}
                      </div>
                      <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#D4AF37]">
                        Full-Lifecycle Discipline
                      </span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#F5F5F4]">
                      {currentService.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="px-3.5 py-1.5 rounded-full bg-[#171717] border border-[#2B2B2B] text-xs text-[#A8A29E]">
                      <span className="text-[#737373] mr-1.5 font-mono">TIMELINE:</span>
                      <span className="font-medium text-[#F5F5F4]">{currentService.timeline}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#A8A29E] leading-relaxed font-sans-modern">
                  {currentService.description}
                </p>

                {/* Scope & Deliverables */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#737373] mb-3">
                    Typical Engaged Deliverables
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {currentService.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#141414] border border-[#222222] text-xs sm:text-sm text-[#E5E5E5] font-sans-modern"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tooling & Technologies Stack */}
                <div className="pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#737373] mb-2.5">
                    Tooling, Frameworks & Standards
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentService.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-[#161616] border border-[#262626] text-xs font-mono text-[#A8A29E]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Row */}
                <div className="pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#A8A29E] font-sans-modern">
                    Starting engagement investment from{' '}
                    <span className="text-[#F5F5F4] font-medium font-mono">{currentService.startingRate}</span>
                  </div>

                  <button
                    onClick={() => onSelectServiceForEstimator(currentService.title)}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#F5F5F4] text-[#0A0A0A] hover:bg-[#E5E5E5] text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
                  >
                    <span>Configure in Project Estimator</span>
                    <ArrowUpRight className="w-4 h-4 text-[#A88B57]" />
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};
