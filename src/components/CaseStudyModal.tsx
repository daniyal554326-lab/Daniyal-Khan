import React, { useEffect } from 'react';
import { CaseStudy } from '../types';
import { X, ArrowUpRight, CheckCircle2, Quote, Sparkles, Clock, Calendar, Layers } from 'lucide-react';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onStartSimilarProject: (categoryLabel: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  study,
  onClose,
  onStartSimilarProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (study) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [study, onClose]);

  if (!study) return null;

  return (
    <div
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="case-study-modal-content"
        className="relative w-full max-w-4xl bg-[#111111] border border-[#262626] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
      >
        {/* Sticky Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#222222] bg-[#111111]/95 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: study.accentColor }}
            />
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#737373]">
                {study.client} • {study.year}
              </span>
              <h2 className="text-base sm:text-lg font-display font-normal text-[#F5F5F4] leading-none mt-0.5">
                {study.title}
              </h2>
            </div>
          </div>

          <button
            id="close-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full bg-[#1C1C1C] hover:bg-[#2A2A2A] text-[#A8A29E] hover:text-[#F5F5F4] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Cover Image */}
          <div className="relative rounded-xl overflow-hidden h-[260px] sm:h-[380px] border border-[#222222]">
            <img
              src={study.coverImage}
              alt={study.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 flex flex-wrap items-center justify-between gap-3">
              <span className="px-3.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#333333] text-xs font-mono text-[#F5F5F4]">
                {study.categoryLabel}
              </span>
              <div className="flex items-center gap-3 text-xs text-[#A8A29E] font-mono">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {study.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {study.year}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-[#141414] border border-[#222222]">
            {study.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="font-display text-xl sm:text-3xl font-normal text-[#F5F5F4]">
                  {m.value}
                </div>
                <div className="text-[11px] sm:text-xs text-[#737373] font-sans-modern mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Core Story: Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-[#141414] border border-[#222222] space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                The Challenge
              </h3>
              <p className="text-xs sm:text-sm text-[#A8A29E] leading-relaxed font-sans-modern">
                {study.challenge}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#141414] border border-[#222222] space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                The Strategy & Craft
              </h3>
              <p className="text-xs sm:text-sm text-[#A8A29E] leading-relaxed font-sans-modern">
                {study.solution}
              </p>
            </div>
          </div>

          {/* Impact section */}
          <div className="p-5 rounded-xl bg-[#141414] border border-[#262626]">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37] mb-2">
              Commercial & Cultural Impact
            </h3>
            <p className="text-sm text-[#F5F5F4] leading-relaxed font-sans-modern">
              {study.impact}
            </p>
          </div>

          {/* Deliverables List */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#737373] mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#D4AF37]" />
              Scope of Deliverables
            </h3>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {study.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#141414] border border-[#222222] text-xs sm:text-sm text-[#D4D4D4] font-sans-modern"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Gallery Previews */}
          {study.gallery && study.gallery.length > 1 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#737373] mb-3">
                Visual Artifacts & Interface Details
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {study.gallery.slice(1).map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl overflow-hidden border border-[#222222] h-52 group"
                  >
                    <img
                      src={imgUrl}
                      alt={`${study.title} visual detail ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Client Testimonial if available */}
          {study.testimonial && (
            <div className="p-6 rounded-xl bg-[#141414] border border-[#222222] relative overflow-hidden">
              <Quote className="w-12 h-12 text-white/[0.03] absolute right-4 top-4" />
              <p className="text-sm sm:text-base italic text-[#F5F5F4] mb-4 relative z-10 leading-relaxed font-display">
                "{study.testimonial.quote}"
              </p>
              <div className="flex items-center gap-3 relative z-10">
                {study.testimonial.avatar && (
                  <img
                    src={study.testimonial.avatar}
                    alt={study.testimonial.author}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-[#333333]"
                  />
                )}
                <div>
                  <div className="text-xs font-medium text-[#F5F5F4]">
                    {study.testimonial.author}
                  </div>
                  <div className="text-[11px] text-[#737373] font-sans-modern">
                    {study.testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Action CTA inside modal */}
          <div className="pt-4 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#A8A29E] font-sans-modern">
              Inspired by this case study? Let's discuss your timeline.
            </div>
            <button
              onClick={() => {
                onClose();
                onStartSimilarProject(study.categoryLabel);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#F5F5F4] hover:bg-[#E5E5E5] text-[#0A0A0A] text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#A88B57]" />
              <span>Commission Similar Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
