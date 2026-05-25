/**
 * ProblemSolutionSection Component
 * 
 * Design Philosophy: Energía Dinámica y Moderna
 * - Contraste entre problemas (rojo) y soluciones (naranja/verde)
 * - Layout asimétrico con elementos flotantes
 * - Animaciones de entrada escalonadas
 */

import { CheckCircle2, AlertCircle, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  {
    icon: AlertCircle,
    title: "Falta de tiempo y enfoque",
    description: "Diseñar publicaciones, escribir copys persuasivos, programar posts y editar videos te consume horas valiosas que deberías usar para atender a tus clientes.",
    color: "text-[oklch(0.6_0.28_20)]",
  },
  {
    icon: AlertCircle,
    title: "Inconsistencia constante",
    description: "Publicar solo cuando te acuerdas da una imagen de negocio abandonado. Tu competencia consistente se queda con la atención y los clientes.",
    color: "text-[oklch(0.6_0.28_20)]",
  },
  {
    icon: AlertCircle,
    title: "Likes que no pagan las cuentas",
    description: "Tener seguidores o conseguir 'me gusta' de amigos es fácil, pero no se traduce en mensajes de compra, cotizaciones reales ni en ventas efectivas.",
    color: "text-[oklch(0.6_0.28_20)]",
  },
  {
    icon: AlertCircle,
    title: "La pesadilla de editar Reels/TikTok",
    description: "Sabes que el video vertical es la clave para crecer, pero no sabes qué grabar, cómo editar con subtítulos dinámicos ni qué música usar.",
    color: "text-[oklch(0.6_0.28_20)]",
  },
];

const solutions = [
  {
    icon: CheckCircle2,
    title: "Consistencia 100% manos libres",
    description: "Nosotros planificamos, diseñamos, escribimos y publicamos todo por ti de forma puntual. Tu marca se mantiene activa de manera profesional sin que muevas un dedo.",
    color: "text-[oklch(0.65_0.25_35)]",
  },
  {
    icon: Zap,
    title: "Diseño premium e identidad visual",
    description: "Olvídate de las plantillas genéricas de Canva. Diseñamos piezas personalizadas que elevan tu marca y te diferencian instantáneamente del resto del mercado.",
    color: "text-[oklch(0.65_0.25_35)]",
  },
  {
    icon: TrendingUp,
    title: "Contenido de conversión y embudos",
    description: "Estrategias de contenido orientadas a generar conversaciones: transformamos visualizaciones casuales en mensajes directos (DMs) listos para comprar.",
    color: "text-[oklch(0.65_0.25_35)]",
  },
  {
    icon: CheckCircle2,
    title: "Edición profesional de video vertical",
    description: "Te damos los guiones estructurados listos para grabar y editamos tus videos de forma dinámica (efectos, títulos dinámicos y música en tendencia) para retener la atención.",
    color: "text-[oklch(0.65_0.25_35)]",
  },
];

export default function ProblemSolutionSection() {
  const triggerCTA = () => {
    window.dispatchEvent(new CustomEvent("open-cta-modal", { detail: { planName: "Consulta Gratuita (Pain Points)" } }));
  };

  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[oklch(0.65_0.25_35)] rounded-full mix-blend-screen opacity-5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[oklch(0.55_0.25_260)] rounded-full mix-blend-screen opacity-5 blur-3xl" />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-space-grotesk font-bold text-foreground">
            Los Problemas vs. Nuestra Solución
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Te sientes identificado con alguno de estos dolores de cabeza? Esto es lo que haremos por ti.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Problems Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-space-grotesk font-bold text-[oklch(0.6_0.28_20)]">
              El Estado Actual (Pain Points)
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
              La Solución Con Nosotros
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
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-space-grotesk font-bold text-foreground mb-4">
                ✨ Lo Mejor de Todo
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                Una <span className="text-[oklch(0.65_0.25_35)] font-semibold">primera consulta 100% gratuita</span> para evaluar tu perfil de redes sociales y darte recomendaciones iniciales accionables, sin compromiso alguno.
              </p>
              <p className="text-sm text-muted-foreground">
                Descubre cómo podemos automatizar y optimizar tus redes sociales hoy. No pierdes nada con preguntar y puedes ganar un plan estratégico claro.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <Button
                size="lg"
                onClick={triggerCTA}
                className="w-full md:w-auto bg-gradient-to-r from-[oklch(0.65_0.25_35)] to-[oklch(0.6_0.28_20)] hover:shadow-lg hover:shadow-[oklch(0.65_0.25_35)]/50 text-foreground font-bold py-6 px-8 rounded-xl shadow-lg border border-[oklch(0.65_0.25_35)] animate-glow"
              >
                Agendar Mi Consulta Gratuita
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
