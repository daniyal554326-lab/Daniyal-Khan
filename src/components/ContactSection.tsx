import React, { useState, useEffect } from 'react';
import { STUDIO_INFO, OFFICES, FAQS } from '../data/agencyData';
import { Mail, Phone, MapPin, Copy, Check, ChevronDown, Clock, Globe } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [times, setTimes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const updateClocks = () => {
      const nyTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(new Date());

      const londonTime = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(new Date());

      const tokyoTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Tokyo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(new Date());

      setTimes({
        'New York': nyTime,
        London: londonTime,
        Tokyo: tokyoTime,
      });
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(STUDIO_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative border-t border-[#222222] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono tracking-[0.2em] text-[#D4AF37] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#F5F5F4] tracking-tight">
            Let's Shape Your Next Milestone
          </h2>
          <p className="text-[#A8A29E] text-sm sm:text-base mt-3 leading-relaxed font-sans-modern">
            Whether you are embarking on a brand overhaul, launching a new software product, or looking for a long-term design engineering partner.
          </p>
        </div>

        {/* Studio Info & Clocks */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          {/* Direct Channels */}
          <div className="lg:col-span-6 p-8 rounded-2xl bg-[#111111] border border-[#222222] space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-normal text-[#F5F5F4]">
                Direct Communications
              </h3>

              {/* Email with copy */}
              <div className="p-4 rounded-xl bg-[#141414] border border-[#262626] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#1D1D1D] text-[#D4AF37]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#737373] uppercase tracking-wider">DIRECT INQUIRIES</div>
                    <a
                      href={`mailto:${STUDIO_INFO.email}`}
                      className="text-sm sm:text-base font-medium text-[#F5F5F4] hover:text-[#D4AF37] transition-colors"
                    >
                      {STUDIO_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-lg bg-[#1A1A1A] hover:bg-[#262626] text-[#A8A29E] hover:text-[#F5F5F4] transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-[#D4AF37]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone & HQ */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#141414] border border-[#262626]">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#737373] uppercase tracking-wider mb-1">
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Studio Direct
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#F5F5F4]">
                    {STUDIO_INFO.phone}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#141414] border border-[#262626]">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#737373] uppercase tracking-wider mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    SoHo Headquarters
                  </div>
                  <div className="text-xs text-[#A8A29E] line-clamp-2 font-sans-modern">
                    {STUDIO_INFO.address}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#222222] text-xs text-[#737373] font-mono">
              ⚡ All inbound inquiries are reviewed by our senior partners within 24 business hours.
            </div>
          </div>

          {/* Global Studio Pods & Live Local Clocks */}
          <div className="lg:col-span-6 p-8 rounded-2xl bg-[#111111] border border-[#222222] space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl font-normal text-[#F5F5F4] flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#D4AF37]" />
                Global Timezones
              </h3>
              <span className="text-xs font-mono text-[#D4AF37] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                Active Synchronized Pods
              </span>
            </div>

            <div className="space-y-3">
              {OFFICES.map((office) => (
                <div
                  key={office.city}
                  className="p-4 rounded-xl bg-[#141414] border border-[#262626] flex items-center justify-between gap-4 hover:border-[#333333] transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-normal text-[#F5F5F4] font-display text-lg">
                        {office.city}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#1C1C1C] border border-[#2A2A2A] text-[#A8A29E]">
                        {office.status}
                      </span>
                    </div>
                    <div className="text-xs text-[#737373] mt-0.5 font-sans-modern">
                      {office.address}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm sm:text-base font-mono font-medium text-[#F5F5F4]">
                      {times[office.city] || '12:00:00 PM'}
                    </div>
                    <div className="text-[10px] font-mono text-[#737373]">
                      {office.timezone}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div id="faq" className="max-w-4xl mx-auto pt-8">
          <div className="text-center mb-10">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#737373] mb-2">
              CLARIFICATIONS & POLICIES
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#F5F5F4]">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-[#111111] border border-[#222222] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display text-lg font-normal text-[#F5F5F4] cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#737373] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#F5F5F4]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#A8A29E] leading-relaxed border-t border-[#222222] pt-4 font-sans-modern">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
