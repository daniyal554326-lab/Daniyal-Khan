import React, { useState, useEffect } from 'react';
import { STUDIO_INFO } from '../data/agencyData';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#262626] py-3.5 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          id="nav-logo"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-sm bg-[#F5F5F4] flex items-center justify-center text-[#0A0A0A] font-serif font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
            <span>F</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-medium text-lg tracking-wider text-[#F5F5F4] group-hover:text-white transition-colors">
              {STUDIO_INFO.name}
            </span>
            <span className="text-[9px] text-[#A8A29E] tracking-[0.25em] uppercase font-mono">
              Design & Architecture
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#141414]/80 border border-[#262626] px-4 py-1.5 rounded-full backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-[#A8A29E] hover:text-[#F5F5F4] hover:bg-white/[0.04] rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA & Availability Pill */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-[#2E2E2E] text-[11px] font-mono text-[#D4AF37]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span>{STUDIO_INFO.availability}</span>
          </div>

          <button
            id="nav-start-project-btn"
            onClick={onOpenEstimator}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F5F4] text-[#0A0A0A] hover:bg-[#E5E5E5] text-xs font-medium tracking-wide transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#A88B57]" />
            <span>Initiate Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#171717] border border-[#262626] text-[#F5F5F4] hover:bg-[#262626] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#111111] border-b border-[#262626] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#171717] border border-[#2E2E2E] text-xs font-mono text-[#D4AF37] w-fit mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span>{STUDIO_INFO.availability}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#A8A29E] hover:text-[#F5F5F4] hover:bg-[#1C1C1C] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#262626] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full py-3 rounded-xl bg-[#F5F5F4] hover:bg-[#E5E5E5] text-[#0A0A0A] text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#A88B57]" />
              <span>Initiate Project with Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl border border-[#262626] text-center text-xs font-medium text-[#A8A29E] hover:bg-[#1A1A1A]"
            >
              Direct Consultation & Info
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
