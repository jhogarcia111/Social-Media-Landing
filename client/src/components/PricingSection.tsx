/**
 * PricingSection Component
 * 
 * Design Philosophy: Energía Dinámica y Moderna
 * - Tres planes con diferenciación clara
 * - Plan intermedio destacado (Plan Crecimiento)
 * - Animaciones de entrada escalonadas
 * - Colores vibrantes para cada plan
 */

import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { useState } from "react";

interface PricingPlan {
  name: string;
  subtitle: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  color: string;
  accentColor: string;
}

const plans: PricingPlan[] = [
  {
    name: "Plan Emprendedor",
    subtitle: "Presencia Básica",
    price: "$525.000",
    description: "Ideal para emprendedores que inician en redes sociales",
    features: [
      "8 publicaciones al mes (2 por semana)",
      "Gráficos estáticos personalizados",
      "Moderación de comentarios",
      "Reporte mensual",
      "Soporte por email",
      "1 red social incluida",
    ],
    cta: "Comenzar",
    highlighted: false,
    color: "from-[oklch(0.55_0.25_260)]/20 to-[oklch(0.55_0.25_260)]/5",
    accentColor: "border-[oklch(0.55_0.25_260)]/50",
  },
  {
    name: "Plan Crecimiento",
    subtitle: "Consistencia y Alcance",
    price: "$1.050.000",
    description: "Para negocios que buscan crecimiento acelerado",
    features: [
      "16 publicaciones al mes (4 por semana)",
      "Reels y videos editados",
      "Moderación + Engagement activo",
      "Reporte quincenal",
      "Soporte prioritario",
      "Hasta 3 redes sociales",
      "Análisis de competencia",
      "Estrategia de contenido mensual",
    ],
    cta: "Elegir Plan",
    highlighted: true,
    color: "from-[oklch(0.65_0.25_35)]/25 to-[oklch(0.6_0.28_20)]/15",
    accentColor: "border-[oklch(0.65_0.25_35)]",
  },
  {
    name: "Plan Autoridad",
    subtitle: "Estrategia y Ventas",
    price: "$1.890.000+",
    description: "Para empresas que quieren dominar su mercado",
    features: [
      "24 publicaciones al mes (6 por semana)",
      "Reels + Contenido creativo premium",
      "Atención proactiva + Venta",
      "Reporte semanal + Consultoría",
      "Soporte 24/7 dedicado",
      "Todas las redes sociales",
      "Estrategia de influencers",
      "Campañas pagadas gestionadas",
      "Capacitación de equipo",
    ],
    cta: "Contactar",
    highlighted: false,
    color: "from-[oklch(0.5_0.22_280)]/20 to-[oklch(0.5_0.22_280)]/5",
    accentColor: "border-[oklch(0.5_0.22_280)]/50",
  },
];

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openPlanModal = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    try { localStorage.setItem('inquiryPlan', plan.name); } catch {}
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[oklch(0.55_0.25_260)] rounded-full mix-blend-screen opacity-5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[oklch(0.65_0.25_35)] rounded-full mix-blend-screen opacity-5 blur-3xl" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-space-grotesk font-bold text-foreground">
            Planes que se Adaptan a Ti
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elige el plan perfecto para tu negocio. Todos incluyen consulta inicial gratuita.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl transition-all duration-300 hover:shadow-2xl ${{
                true: "",
              }[""]} ${
                plan.highlighted
                  ? "md:scale-105 md:shadow-2xl shadow-xl overflow-visible"
                  : "hover:shadow-lg overflow-hidden"
              }`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color}`} />

              {/* Border */}
              <div className={`absolute inset-0 border-2 ${plan.accentColor} rounded-2xl`} />

              {/* Highlight badge */}
                {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                  <div className="bg-gradient-to-r from-[oklch(0.65_0.25_35)] to-[oklch(0.6_0.28_20)] px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Zap className="h-4 w-4 text-foreground" />
                    <span className="text-sm font-bold text-foreground">MÁS POPULAR</span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col h-full">
                {/* Plan info */}
                <div className="mb-8">
                  <h3 className="text-2xl font-space-grotesk font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/mes</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full mb-8 font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-[oklch(0.65_0.25_35)] to-[oklch(0.6_0.28_20)] hover:shadow-lg hover:shadow-[oklch(0.65_0.25_35)]/50 text-foreground"
                      : "bg-[oklch(0.3_0.02_260)] hover:bg-[oklch(0.35_0.025_260)] text-foreground border border-[oklch(0.65_0.25_35)]/30"
                  }`}
                  onClick={() => {
                    if (plan.cta.toLowerCase().includes('elegir')) {
                      openPlanModal(plan);
                    } else if (plan.cta.toLowerCase().includes('contact')) {
                      const el = document.getElementById('cta');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {plan.cta}
                </Button>

                {/* Features list */}
                <div className="space-y-3 flex-1">
                  {plan.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[oklch(0.65_0.25_35)] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative corner element */}
              {plan.highlighted && (
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[oklch(0.65_0.25_35)] rounded-full opacity-10 blur-2xl" />
              )}
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center space-y-4 p-8 rounded-xl bg-[oklch(0.2_0.015_260)] border border-[oklch(0.3_0.02_260)]">
          <h3 className="text-lg font-semibold text-foreground">¿Necesitas algo personalizado?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Todos nuestros planes pueden adaptarse a tus necesidades específicas. Contáctanos para una propuesta personalizada.
          </p>
          <Button
            variant="outline"
            className="mt-4 border-[oklch(0.65_0.25_35)] text-[oklch(0.65_0.25_35)] hover:bg-[oklch(0.65_0.25_35)]/10"
          >
            Solicitar Propuesta Personalizada
          </Button>
        </div>
      </div>
      {/* Plan chooser modal */}
      {modalOpen && selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={closeModal} />
          <div className="relative bg-background p-6 rounded-xl w-full max-w-md border border-[oklch(0.3_0.02_260)]">
            <h3 className="text-xl font-bold mb-4">¿Qué quieres hacer con {selectedPlan.name}?</h3>
            <div className="space-y-3">
              <button className="w-full py-3 bg-gradient-to-r from-[oklch(0.65_0.25_35)] to-[oklch(0.6_0.28_20)] rounded-lg text-foreground font-semibold" onClick={() => window.open('https://calendly.com/mipuntoenelmapa/30min', '_blank')}>Comenzar ahora (agendar)</button>
              <button className="w-full py-3 border rounded-lg text-foreground" onClick={() => { const el = document.getElementById('cta'); if (el) el.scrollIntoView({ behavior: 'smooth' }); closeModal(); }}>Quiero saber más (contactarme)</button>
              <button className="w-full py-2 text-sm text-muted-foreground" onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
