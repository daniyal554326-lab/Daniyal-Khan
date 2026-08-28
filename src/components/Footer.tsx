import React, { useState } from 'react';
import { STUDIO_INFO } from '../data/agencyData';
import { ArrowUp, ArrowUpRight, Check, Send, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { label: 'X / Twitter', href: 'https://twitter.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Awwwards', href: 'https://awwwards.com' },
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'Dribbble', href: 'https://dribbble.com' },
    { label: 'Read.cv', href: 'https://read.cv' },
  ];

  return (
    <footer className="border-t border-[#222222] bg-[#0A0A0A] pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big Studio Manifesto statement in footer */}
        <div className="pb-16 border-b border-[#222222] flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="font-display text-2xl sm:text-4xl font-normal text-[#F5F5F4] tracking-tight leading-snug">
              Creating distinctive digital artifacts for the companies defining tomorrow.
            </div>
            <p className="text-xs sm:text-sm text-[#737373] mt-3 font-sans-modern">
              Based in New York, collaborating across London, Zurich, San Francisco, and Tokyo.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3.5 rounded-full bg-[#141414] hover:bg-[#1F1F1F] border border-[#262626] text-[#F5F5F4] flex items-center gap-2 text-xs font-mono transition-colors self-start md:self-auto cursor-pointer"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 text-[#D4AF37]" />
          </button>
        </div>

        {/* 4-column Links & Newsletter */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 py-14 border-b border-[#222222]">
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-md bg-[#D4AF37] flex items-center justify-center text-[#0A0A0A] font-bold font-serif text-sm">
                F
              </div>
              <span className="font-display font-normal tracking-wide text-xl text-[#F5F5F4]">
                {STUDIO_INFO.name}
              </span>
            </div>
            <p className="text-xs text-[#A8A29E] leading-relaxed max-w-sm font-sans-modern">
              Independent digital product & brand strategy practice. Specialized in zero-to-one startups and enterprise category leaders.
            </p>
            <div className="text-[11px] font-mono text-[#D4AF37] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              <span>Available for select Q3/Q4 partnerships</span>
            </div>
          </div>

          {/* Navigation links */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#737373]">
              EXPLORE
            </div>
            <ul className="space-y-2 text-xs text-[#A8A29E] font-sans-modern">
              <li>
                <a href="#work" className="hover:text-[#F5F5F4] transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F5F5F4] transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#F5F5F4] transition-colors">
                  Process & Sprints
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F5F5F4] transition-colors">
                  Manifesto & Team
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#F5F5F4] transition-colors">
                  Client Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="col-span-1 md:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#737373]">
              CONNECT
            </div>
            <ul className="space-y-2 text-xs text-[#A8A29E] font-sans-modern">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#F5F5F4] flex items-center gap-1 transition-colors"
                  >
                    <span>{s.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#737373]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-span-2 md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#737373]">
              STUDIO JOURNAL & DISPATCHES
            </div>
            <p className="text-xs text-[#A8A29E] font-sans-modern">
              Curated essays on digital typography, interface ergonomics, and computational design.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#141414] border border-[#262626] text-xs text-[#D4AF37] flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Subscribed to Studio Forma Journal.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-3.5 py-2 rounded-xl bg-[#141414] border border-[#262626] text-[#F5F5F4] text-xs placeholder:text-[#525252] focus:outline-none focus:border-[#525252]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#F5F5F4] text-[#0A0A0A] hover:bg-[#E5E5E5] text-xs font-semibold uppercase tracking-wider shrink-0 transition-colors cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#737373]">
          <div>
            © {new Date().getFullYear()} Studio Forma Design LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#F5F5F4] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#F5F5F4] cursor-pointer">Terms of Engagement</span>
            <span className="hover:text-[#F5F5F4] cursor-pointer">Security & NDA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
