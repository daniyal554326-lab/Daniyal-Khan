import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/agencyData';
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="reviews" className="py-24 sm:py-32 relative border-t border-[#222222] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono tracking-[0.2em] text-[#D4AF37] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
              <span>CLIENT ENDORSEMENTS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#F5F5F4] tracking-tight">
              What Founders & Leaders Say
            </h2>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-[#141414] hover:bg-[#1C1C1C] border border-[#262626] text-[#F5F5F4] transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-[#141414] hover:bg-[#1C1C1C] border border-[#262626] text-[#F5F5F4] transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="p-8 sm:p-12 md:p-14 rounded-2xl bg-[#111111] border border-[#262626] shadow-2xl relative overflow-hidden">
          {/* Subtle quote background icon */}
          <Quote className="w-28 h-28 text-white/[0.02] absolute right-8 top-8 pointer-events-none" />

          {/* Star rating and project tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-1">
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
              <span className="ml-2 text-xs font-mono text-[#D4AF37]">5.0 RATED</span>
            </div>

            <div className="px-3.5 py-1 rounded-full bg-[#171717] border border-[#262626] text-xs font-mono text-[#A8A29E]">
              {activeTestimonial.projectType}
            </div>
          </div>

          {/* Quote */}
          <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl font-normal text-[#F5F5F4] leading-relaxed mb-10 max-w-4xl italic">
            "{activeTestimonial.quote}"
          </blockquote>

          {/* Author Details */}
          <div className="flex items-center gap-4 pt-6 border-t border-[#222222]">
            <img
              src={activeTestimonial.avatar}
              alt={activeTestimonial.author}
              referrerPolicy="no-referrer"
              className="w-14 h-14 rounded-full object-cover border border-[#333333] shadow-md"
            />
            <div>
              <div className="font-display font-normal text-lg text-[#F5F5F4]">
                {activeTestimonial.author}
              </div>
              <div className="text-xs sm:text-sm text-[#A8A29E] font-sans-modern">
                {activeTestimonial.role}, <span className="text-[#F5F5F4] font-medium">{activeTestimonial.company}</span>
              </div>
            </div>
          </div>

          {/* Carousel dots */}
          <div className="flex items-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
