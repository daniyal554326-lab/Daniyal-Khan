import React from 'react';
import { STUDIO_INFO, AWARDS } from '../data/agencyData';
import { Award, Compass, HeartHandshake, Zap, Trophy, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const principles = [
    {
      icon: <Zap className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Senior Immersion Only',
      description: 'We do not pass your project to junior teams. Every sprint is led directly by founding partners and principal craftspeople.'
    },
    {
      icon: <Compass className="w-5 h-5 text-[#F5F5F4]" />,
      title: 'Sub-Pixel Precision',
      description: 'From 60fps interaction physics to bespoke optical kerning, every detail is engineered with uncompromising aesthetic rigor.'
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#A88B57]" />,
      title: 'Commercial Empathy',
      description: 'Design must drive business outcomes. We align all creative choices with CAC reduction, retention, and fundraising narratives.'
    },
    {
      icon: <Trophy className="w-5 h-5 text-[#E7D7C1]" />,
      title: 'Zero Bloat Architecture',
      description: 'We build lightweight, modern stacks that load instantaneously, score 98+ on Core Web Vitals, and scale effortlessly.'
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative border-t border-[#222222] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Split Header */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono tracking-[0.2em] text-[#D4AF37]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
              <span>STUDIO MANIFESTO</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#F5F5F4] tracking-tight leading-[1.15]">
              We believe great design is not decorative — it is a company's greatest strategic unfair advantage.
            </h2>

            <p className="text-[#A8A29E] text-sm sm:text-base leading-relaxed font-sans-modern">
              {STUDIO_INFO.mission}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-[#737373]">
              <span>EST. {STUDIO_INFO.foundedYear}</span>
              <span>•</span>
              <span>NEW YORK / LONDON / TOKYO</span>
              <span>•</span>
              <span>INDEPENDENT & FOUNDER-OWNED</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#262626] bg-[#111111] p-2 sm:p-3 shadow-2xl">
              <div className="relative h-[320px] rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                  alt="Studio Forma Design Pod"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover brightness-85 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs font-semibold text-[#F5F5F4]">
                    Studio Forma Collaborative Workshop
                  </div>
                  <div className="text-[11px] text-[#A8A29E]">
                    SoHo Studio, New York
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#111111] border border-[#222222] hover:border-[#333333] transition-all space-y-3"
            >
              <div className="p-3 rounded-xl bg-[#171717] border border-[#262626] w-fit">
                {p.icon}
              </div>
              <h3 className="font-display text-lg font-normal text-[#F5F5F4]">
                {p.title}
              </h3>
              <p className="text-xs text-[#A8A29E] leading-relaxed font-sans-modern">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Honors & Awards Shelf */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#111111] border border-[#222222]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#222222]">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37] flex items-center gap-2 mb-1.5">
                <Award className="w-4 h-4" />
                Recognition & Industry Honors
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#F5F5F4]">
                Validated by global juries and design institutions
              </h3>
            </div>
            <div className="text-xs font-mono text-[#737373]">
              2024 — 2026 AWARDS
            </div>
          </div>

          <div className="divide-y divide-[#222222]">
            {AWARDS.map((award, idx) => (
              <div
                key={idx}
                className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white/[0.02] px-2 rounded-xl transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-[#D4AF37] font-semibold">
                    {award.year}
                  </span>
                  <div>
                    <span className="text-sm font-medium text-[#F5F5F4] block sm:inline">
                      {award.title}
                    </span>
                    <span className="text-xs text-[#A8A29E] sm:ml-3 font-sans-modern">
                      for {award.project}
                    </span>
                  </div>
                </div>

                <div className="text-xs font-mono text-[#737373]">
                  {award.organization}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
