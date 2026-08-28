import React from 'react';
import { STUDIO_INFO, STUDIO_STATS, CLIENT_LOGOS } from '../data/agencyData';
import { ArrowDown, ArrowUpRight, Play, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenEstimator: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator, onExploreWork }) => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden"
    >
      {/* Background subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[350px] md:h-[450px] bg-gradient-to-tr from-[#D4AF37]/10 via-[#F5F5F4]/5 to-transparent blur-[140px] pointer-events-none -z-10 rounded-full" />
      
      {/* Subtle architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Tag */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#262626] backdrop-blur-sm text-xs font-mono tracking-[0.2em] text-[#D4AF37]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            <span>STRATEGY • ARCHITECTURE • DIGITAL PRODUCTS</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#A8A29E] font-mono tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>AWWWARDS STUDIO NOMINEE</span>
          </div>
        </div>

        {/* Main Editorial Headline */}
        <div className="max-w-5xl">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#F5F5F4] leading-[1.08] mb-8">
            Shaping visionary brands & bespoke software that{' '}
            <span className="italic font-serif font-light text-[#E7D7C1] underline decoration-[#A88B57]/50 decoration-1 underline-offset-8">
              lead industries.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#A8A29E] max-w-3xl font-normal leading-relaxed mb-12 font-sans-modern">
            {STUDIO_INFO.tagline} We pair obsessive visual craft with robust software engineering to build category-defining companies.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-20">
            <button
              id="hero-estimator-cta"
              onClick={onOpenEstimator}
              className="px-8 py-4 rounded-full bg-[#F5F5F4] hover:bg-[#E5E5E5] text-[#0A0A0A] text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center gap-2.5 shadow-lg transition-all hover:scale-[1.02] active:scale-95 group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#A88B57] group-hover:rotate-12 transition-transform" />
              <span>Plan Project & Estimate Cost</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              id="hero-explore-work-btn"
              onClick={onExploreWork}
              className="px-8 py-4 rounded-full bg-[#141414] hover:bg-[#1C1C1C] border border-[#262626] hover:border-[#404040] text-[#F5F5F4] text-xs sm:text-sm font-medium tracking-wider uppercase flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4 text-[#A8A29E]" />
            </button>
          </div>
        </div>

        {/* Featured Showcase Interactive Hero Banner */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-[#262626] bg-[#111111] p-2 md:p-3 shadow-2xl mb-20 group">
          <div className="relative h-[280px] sm:h-[420px] md:h-[520px] rounded-xl md:rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop"
              alt="Studio Forma Featured Work Showcase"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 contrast-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />

            {/* Content overlay on banner */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0A]/80 backdrop-blur-md border border-[#333333] text-xs font-mono text-[#D4AF37] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping"></span>
                  <span>LATEST SHOWCASE • AETHER SPATIAL ROBOTICS</span>
                </div>
                <h3 className="font-display text-xl sm:text-3xl font-normal text-[#F5F5F4] tracking-tight">
                  Autonomous spatial computing dashboard & real-time telemetry console
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#work"
                  className="px-5 py-3 rounded-full bg-[#1A1A1A]/80 hover:bg-[#262626] backdrop-blur-md border border-[#333333] text-[#F5F5F4] text-xs font-medium tracking-wider uppercase flex items-center gap-2 transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Numbers / Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {STUDIO_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#111111] border border-[#222222] hover:border-[#333333] transition-all hover:bg-[#141414]"
            >
              <div className="font-display text-3xl sm:text-4xl font-normal text-[#F5F5F4] mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-mono tracking-wider uppercase text-[#D4AF37] mb-1.5">
                {stat.label}
              </div>
              <p className="text-xs text-[#A8A29E] leading-relaxed font-sans-modern">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Client Logos / Partner Marquee */}
        <div className="pt-8 border-t border-[#222222]">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#737373] text-center mb-8">
            TRUSTED BY FOUNDERS & DESIGN LEADERS AT CATEGORY LEADERS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-20 opacity-60 hover:opacity-100 transition-opacity">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="text-xs sm:text-sm font-serif tracking-[0.2em] uppercase text-[#A8A29E] hover:text-[#F5F5F4] transition-colors cursor-default"
              >
                {client.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
