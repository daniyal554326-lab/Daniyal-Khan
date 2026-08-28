import React, { useState } from 'react';
import { ProjectInquiry } from '../types';
import { Sparkles, Check, ArrowUpRight, Calculator, Send, CheckCircle2, Clock, Calendar } from 'lucide-react';

interface ProjectEstimatorProps {
  initialService?: string;
  onClose?: () => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({
  initialService,
  onClose,
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialService ? [initialService] : ['Digital Product & UI/UX']
  );
  const [selectedTimeline, setSelectedTimeline] = useState<string>('Standard (8-12 Weeks)');
  const [selectedBudget, setSelectedBudget] = useState<string>('$40,000 – $75,000');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableServices = [
    { title: 'Brand Strategy & Identity', baseCost: 25000, baseWeeks: 6 },
    { title: 'Digital Product & UI/UX', baseCost: 35000, baseWeeks: 8 },
    { title: 'Creative Web & Engineering', baseCost: 30000, baseWeeks: 7 },
    { title: 'Art Direction & 3D Motion', baseCost: 20000, baseWeeks: 4 },
  ];

  const timelineOptions = [
    { label: 'Express Sprint (4 – 6 Weeks)', multiplier: 1.25, note: 'High velocity priority allocation' },
    { label: 'Standard (8 – 12 Weeks)', multiplier: 1.0, note: 'Optimal phased craft and iteration' },
    { label: 'Comprehensive / Phased (14+ Weeks)', multiplier: 0.95, note: 'Enterprise multi-quarter rollout' },
  ];

  const budgetTiers = [
    '$25,000 – $40,000',
    '$40,000 – $75,000',
    '$75,000 – $150,000',
    '$150,000+ (Custom Enterprise)',
  ];

  const toggleService = (title: string) => {
    if (selectedServices.includes(title)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== title));
      }
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  // Dynamic estimate calculation
  const calculateEstimatedTotal = () => {
    let base = 0;
    let weeks = 0;
    selectedServices.forEach((sTitle) => {
      const match = availableServices.find((s) => s.title === sTitle);
      if (match) {
        base += match.baseCost;
        weeks += match.baseWeeks;
      }
    });

    const timelineMatch = timelineOptions.find((t) => t.label === selectedTimeline);
    const multiplier = timelineMatch ? timelineMatch.multiplier : 1.0;
    const adjustedTotal = Math.round(base * multiplier);
    const minRange = Math.round(adjustedTotal * 0.9);
    const maxRange = Math.round(adjustedTotal * 1.15);

    // Weeks overlap factor
    const combinedWeeks = Math.max(
      4,
      Math.round(weeks * (selectedServices.length > 1 ? 0.75 : 1))
    );

    return {
      min: minRange.toLocaleString(),
      max: maxRange.toLocaleString(),
      weeks: combinedWeeks,
    };
  };

  const estimate = calculateEstimatedTotal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div
      id="project-estimator-section"
      className="p-6 sm:p-10 rounded-2xl bg-[#111111] border border-[#262626] shadow-2xl relative overflow-hidden"
    >
      {/* Background subtle glow */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#D4AF37]/5 blur-[120px] pointer-events-none -z-10 rounded-full" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#222222] mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono tracking-[0.2em] text-[#D4AF37] mb-2">
            <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>INTERACTIVE SCOPE & BUDGET PLANNER</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#F5F5F4]">
            Plan Your Project & Estimate Investment
          </h3>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="text-xs font-mono text-[#A8A29E] hover:text-[#F5F5F4] underline cursor-pointer"
          >
            Close Planner
          </button>
        )}
      </div>

      {submitted ? (
        <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-[#141414] border border-[#262626] flex items-center justify-center mx-auto text-[#D4AF37]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="max-w-md mx-auto space-y-2">
            <h4 className="font-display text-2xl font-normal text-[#F5F5F4]">
              Project Brief Received
            </h4>
            <p className="text-sm text-[#A8A29E] leading-relaxed font-sans-modern">
              Thank you, <span className="text-[#F5F5F4] font-medium">{formData.name}</span>. Our partners will review your scope for <span className="text-[#F5F5F4] font-medium">{formData.company || 'your team'}</span> and send a structured proposal & kickoff calendar within 24 hours.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#141414] border border-[#222222] max-w-md mx-auto text-xs text-[#A8A29E] space-y-1 font-mono text-left">
            <div>• Target Scope: {selectedServices.join(', ')}</div>
            <div>• Timeline: {selectedTimeline}</div>
            <div>• Budget Range: {selectedBudget}</div>
            <div>• Estimated Kickoff: Within 2 Weeks</div>
          </div>

          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 rounded-full border border-[#262626] text-xs text-[#F5F5F4] hover:bg-[#1A1A1A] transition-colors cursor-pointer"
          >
            Submit Another Project Brief
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1: Select Services */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-[0.2em] text-[#737373] mb-3">
              1. Select Required Disciplines (Multi-select)
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {availableServices.map((service) => {
                const isSelected = selectedServices.includes(service.title);
                return (
                  <button
                    type="button"
                    key={service.title}
                    onClick={() => toggleService(service.title)}
                    className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[#171717] border-[#404040] shadow-md text-[#F5F5F4]'
                        : 'bg-[#111111] border-[#222222] text-[#A8A29E] hover:bg-[#141414]'
                    }`}
                  >
                    <div>
                      <div className="text-sm font-medium">{service.title}</div>
                      <div className="text-xs text-[#737373] mt-0.5 font-mono">
                        From ${service.baseCost.toLocaleString()} • ~{service.baseWeeks} wks
                      </div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                        isSelected
                          ? 'bg-[#F5F5F4] border-[#F5F5F4] text-[#0A0A0A]'
                          : 'border-[#333333] text-transparent'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Desired Timeline */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-[0.2em] text-[#737373] mb-3">
              2. Target Delivery Timeline
            </label>
            <div className="grid sm:grid-cols-3 gap-3">
              {timelineOptions.map((timeline) => {
                const isSelected = selectedTimeline === timeline.label;
                return (
                  <button
                    type="button"
                    key={timeline.label}
                    onClick={() => setSelectedTimeline(timeline.label)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#171717] border-[#404040] shadow-md text-[#F5F5F4]'
                        : 'bg-[#111111] border-[#222222] text-[#A8A29E] hover:bg-[#141414]'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-medium">{timeline.label}</div>
                    <div className="text-[11px] text-[#737373] mt-1 font-sans-modern">{timeline.note}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Budget Bracket */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-[0.2em] text-[#737373] mb-3">
              3. Anticipated Project Investment Bracket
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {budgetTiers.map((bracket) => {
                const isSelected = selectedBudget === bracket;
                return (
                  <button
                    type="button"
                    key={bracket}
                    onClick={() => setSelectedBudget(bracket)}
                    className={`p-3.5 rounded-xl border text-center text-xs font-medium tracking-wider uppercase transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#F5F5F4] text-[#0A0A0A] shadow-sm border-[#F5F5F4]'
                        : 'bg-[#111111] border-[#222222] text-[#A8A29E] hover:bg-[#141414]'
                    }`}
                  >
                    {bracket}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Live Estimate Preview Banner */}
          <div className="p-5 rounded-xl bg-[#141414] border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#1D1D1D] text-[#D4AF37]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#737373]">
                  ESTIMATED BENCHMARK SCOPE
                </div>
                <div className="font-display text-xl sm:text-2xl font-normal text-[#F5F5F4]">
                  ${estimate.min} – ${estimate.max} USD
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-[#A8A29E]">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                ~{estimate.weeks} Weeks Total
              </span>
              <span>•</span>
              <span className="text-[#D4AF37]">Senior Pod Dedicated</span>
            </div>
          </div>

          {/* Contact Fields */}
          <div className="space-y-4 pt-4 border-t border-[#222222]">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#737373]">
              4. Contact & Project Details
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] text-[#737373] mb-1 font-mono uppercase tracking-wider">YOUR NAME *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Elena Rostova"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-[#262626] text-[#F5F5F4] text-xs placeholder:text-[#525252] focus:outline-none focus:border-[#525252]"
                />
              </div>

              <div>
                <label className="block text-[10px] text-[#737373] mb-1 font-mono uppercase tracking-wider">WORK EMAIL *</label>
                <input
                  type="email"
                  required
                  placeholder="elena@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-[#262626] text-[#F5F5F4] text-xs placeholder:text-[#525252] focus:outline-none focus:border-[#525252]"
                />
              </div>

              <div>
                <label className="block text-[10px] text-[#737373] mb-1 font-mono uppercase tracking-wider">COMPANY / VENTURE</label>
                <input
                  type="text"
                  placeholder="e.g. Aether Labs"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-[#262626] text-[#F5F5F4] text-xs placeholder:text-[#525252] focus:outline-none focus:border-[#525252]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] text-[#737373] mb-1 font-mono uppercase tracking-wider">PROJECT BRIEF / GOALS</label>
              <textarea
                rows={3}
                placeholder="Tell us about what you are building, your primary commercial objectives, or specific design references..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-[#262626] text-[#F5F5F4] text-xs placeholder:text-[#525252] focus:outline-none focus:border-[#525252] resize-none"
              />
            </div>
          </div>

          {/* Submit Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
            <div className="text-[11px] text-[#737373] font-mono">
              🔒 Strict NDA automatically applied to all inquiries. We respond within 24 hours.
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#F5F5F4] hover:bg-[#E5E5E5] disabled:opacity-50 text-[#0A0A0A] text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              {isSubmitting ? (
                <span>Submitting Project Brief...</span>
              ) : (
                <>
                  <Send className="w-4 h-4 text-[#A88B57]" />
                  <span>Send Project Brief & Schedule Review</span>
                  <ArrowUpRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
