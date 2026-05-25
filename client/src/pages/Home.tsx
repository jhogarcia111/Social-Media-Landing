/**
 * Home Page
 * 
 * Design Philosophy: Energía Dinámica y Moderna
 * - Integración de todos los componentes
 * - Flujo de usuario optimizado
 * - Animaciones y transiciones suaves
 */

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import CalendlySection from "@/components/CalendlySection";
import Footer from "@/components/Footer";
import CTAModal from "@/components/CTAModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [planName, setPlanName] = useState<string | null>(null);

  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      const customEvent = e as CustomEvent<{ planName?: string }>;
      setPlanName(customEvent.detail?.planName || null);
      setModalOpen(true);
    };

    window.addEventListener("open-cta-modal", handleOpenModal);
    return () => {
      window.removeEventListener("open-cta-modal", handleOpenModal);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-16">
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="solution">
          <ProblemSolutionSection />
        </section>
        
        <section id="pricing">
          <PricingSection />
        </section>

        <section id="faq">
          <FAQSection />
        </section>

        <section id="cta">
          <CTASection />
        </section>

        <section id="schedule">
          <CalendlySection />
        </section>
      </main>
      
      <Footer />

      <CTAModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        planName={planName}
      />
    </div>
  );
}
