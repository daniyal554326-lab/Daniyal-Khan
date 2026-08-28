import React, { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorksSection } from './components/WorksSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CaseStudy } from './types';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [estimatorInitialService, setEstimatorInitialService] = useState<string | undefined>(undefined);
  const estimatorRef = useRef<HTMLDivElement>(null);

  const handleOpenEstimator = (initialService?: string) => {
    if (initialService) {
      setEstimatorInitialService(initialService);
    }
    if (estimatorRef.current) {
      estimatorRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = () => {
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartSimilarProject = (categoryLabel: string) => {
    handleOpenEstimator(categoryLabel);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F4] relative selection:bg-[#C5A880] selection:text-[#0A0A0A]">
      {/* Top Fixed Header */}
      <Navbar onOpenEstimator={() => handleOpenEstimator()} />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenEstimator={() => handleOpenEstimator()}
          onExploreWork={handleExploreWork}
        />

        <WorksSection
          onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
        />

        <ServicesSection
          onSelectServiceForEstimator={(serviceTitle) => handleOpenEstimator(serviceTitle)}
        />

        <ProcessSection />

        <AboutSection />

        <TestimonialsSection />

        {/* Dedicated Interactive Project Estimator & Scope Calculator */}
        <section id="planner" ref={estimatorRef} className="py-20 sm:py-28 relative border-t border-[#262626] bg-[#0E0E0E]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectEstimator
              key={estimatorInitialService || 'default'}
              initialService={estimatorInitialService}
            />
          </div>
        </section>

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onStartSimilarProject={handleStartSimilarProject}
      />
    </div>
  );
}
