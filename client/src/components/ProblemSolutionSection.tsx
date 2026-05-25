/**
 * ProblemSolutionSection Component
 * 
 * Design Philosophy: Energía Dinámica y Moderna
 * - Contraste entre problemas (rojo) y soluciones (naranja/verde)
 * - Layout asimétrico con elementos flotantes
 * - Animaciones de entrada escalonadas
 */

import { CheckCircle2, AlertCircle, TrendingUp, Zap } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "¿Cansado de intentar?",
    description: "Manejar redes sociales sin ver resultados es frustrante y consume tiempo valioso.",
    color: "text-[oklch(0.6_0.28_20)]",
  },
  {
    icon: AlertCircle,
    title: "Costo y tiempo",
    description: "Piensas que es muy caro o que no tienes tiempo para hacerlo bien.",
    color: "text-[oklch(0.6_0.28_20)]",
  },
];

const solutions = [
  {
    icon: CheckCircle2,
    title: "Acompañamiento adecuado",
    description: "Solo necesitas el apoyo correcto. Nosotros nos encargamos de todo.",
    color: "text-[oklch(0.65_0.25_35)]",
  },
  {
    icon: Zap,
    title: "Contenido + Estrategia",
    description: "Publicaciones consistentes, gestión de comunidad y estrategia de crecimiento.",
    color: "text-[oklch(0.65_0.25_35)]",
  },
  {
    icon: TrendingUp,
    title: "Resultados reales",
    description: "Crecimiento medible, engagement auténtico y conversiones que importan.",
    color: "text-[oklch(0.65_0.25_35)]",
  },
];

export default function ProblemSolutionSection() {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[oklch(0.65_0.25_35)] rounded-full mix-blend-screen opacity-5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[oklch(0.55_0.25_260)] rounded-full mix-blend-screen opacity-5 blur-3xl" />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-space-grotesk font-bold text-foreground">
            El Problema y la Solución
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entendemos tus desafíos. Por eso creamos una solución integral que funciona.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Problems Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-space-grotesk font-bold text-[oklch(0.6_0.28_20)]">
              Los Problemas
            </h3>
            <div className="space-y-4">
              {problems.map((problem, idx) => {
                const Icon = problem.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-[oklch(0.2_0.015_260)] border border-[oklch(0.3_0.02_260)] hover:border-[oklch(0.6_0.28_20)]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[oklch(0.6_0.28_20)]/10"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex gap-4">
                      <Icon className={`h-6 w-6 flex-shrink-0 ${problem.color} mt-1`} />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{problem.title}</h4>
                        <p className="text-sm text-muted-foreground">{problem.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-space-grotesk font-bold text-[oklch(0.65_0.25_35)]">
              Nuestra Solución
            </h3>
            <div className="space-y-4">
              {solutions.map((solution, idx) => {
                const Icon = solution.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-gradient-to-br from-[oklch(0.65_0.25_35)]/10 to-[oklch(0.6_0.28_20)]/10 border border-[oklch(0.65_0.25_35)]/30 hover:border-[oklch(0.65_0.25_35)]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[oklch(0.65_0.25_35)]/20"
                    style={{ animationDelay: `${(idx + 2) * 100}ms` }}
                  >
                    <div className="flex gap-4">
                      <Icon className={`h-6 w-6 flex-shrink-0 ${solution.color} mt-1`} />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{solution.title}</h4>
                        <p className="text-sm text-muted-foreground">{solution.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Key Benefit */}
        <div className="relative p-8 rounded-2xl bg-gradient-to-r from-[oklch(0.65_0.25_35)]/15 to-[oklch(0.55_0.25_260)]/15 border border-[oklch(0.65_0.25_35)]/30 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[oklch(0.65_0.25_35)] rounded-full opacity-10 blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-2xl font-space-grotesk font-bold text-foreground mb-4">
              ✨ Lo Mejor de Todo
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Una <span className="text-[oklch(0.65_0.25_35)] font-semibold">primera consulta gratuita</span> para que veas exactamente cómo trabajamos, sin compromiso alguno.
            </p>
            <p className="text-base text-muted-foreground">
              Agenda hoy mismo tu cita y descubre lo que podemos hacer por tu negocio. Haz clic en el enlace abajo y comienza tu transformación digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
