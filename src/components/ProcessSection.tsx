import React from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { Check, Clock, FileCheck } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 sm:py-32 relative border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono tracking-[0.2em] text-[#D4AF37] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            <span>METHODOLOGY & EXECUTION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#F5F5F4] tracking-tight">
            How We Collaborate & Deliver
          </h2>
          <p className="text-[#A8A29E] text-sm sm:text-base mt-3 leading-relaxed font-sans-modern">
            Our agile sprint framework replaces endless committee meetings with rapid prototype testing, senior design immersion, and transparent milestones.
          </p>
        </div>

        {/* Process Steps Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#111111] border border-[#222222] hover:border-[#333333] transition-all flex flex-col justify-between space-y-6 group"
            >
              <div>
                {/* Step number & duration */}
                <div className="flex items-center justify-between pb-4 border-b border-[#222222] mb-4">
                  <span className="font-serif text-2xl font-light text-[#737373] group-hover:text-[#D4AF37] transition-colors">
                    {step.step}
                  </span>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171717] border border-[#262626] text-[11px] font-mono text-[#A8A29E]">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    <span>{step.duration}</span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-normal text-[#F5F5F4] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-[#A8A29E] leading-relaxed mb-4 font-sans-modern">
                  {step.description}
                </p>

                {/* Key activities */}
                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#737373]">
                    Activities:
                  </div>
                  {step.activities.map((act, aIdx) => (
                    <div
                      key={aIdx}
                      className="flex items-start gap-2 text-xs text-[#D4D4D4] font-sans-modern"
                    >
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tangible Output Badge */}
              <div className="pt-4 border-t border-[#222222]">
                <div className="flex items-start gap-2 p-2.5 rounded-xl bg-[#141414] border border-[#262626] text-[11px] text-[#A8A29E] font-sans-modern">
                  <FileCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#737373] block font-mono text-[9px] uppercase tracking-wider">OUTPUT:</span>
                    <span className="font-medium text-[#F5F5F4]">{step.output}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
