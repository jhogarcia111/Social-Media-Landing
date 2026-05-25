/**
 * HeroSection Component
 * 
 * Design Philosophy: Energía Dinámica y Moderna
 * - Fondo oscuro con gradiente azul
 * - Video de YouTube como elemento central
 * - Tipografía bold con Space Grotesk
 * - Animaciones sutiles en elementos
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-[oklch(0.2_0.02_280)] overflow-hidden pt-20 pb-16">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[oklch(0.55_0.25_260)] rounded-full mix-blend-screen opacity-10 blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[oklch(0.65_0.25_35)] rounded-full mix-blend-screen opacity-10 blur-3xl" style={{ animation: "float 4s ease-in-out infinite" }} />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-space-grotesk font-bold text-foreground leading-tight">
                Multiplica tus{" "}
                <span className="bg-gradient-to-r from-[oklch(0.65_0.25_35)] to-[oklch(0.6_0.28_20)] bg-clip-text text-transparent">
                  Ventas en Redes
                </span>
              </h1>
              <p className="text-xl text-muted-foreground font-poppins leading-relaxed">
                Gestión completa de redes sociales, contenido estratégico y resultados reales. Nosotros nos encargamos de todo mientras tú te concentras en tu negocio.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[oklch(0.65_0.25_35)] to-[oklch(0.6_0.28_20)] hover:shadow-lg hover:shadow-[oklch(0.65_0.25_35)]/50 text-foreground font-semibold animate-glow"
              >
                Agendar Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-[oklch(0.65_0.25_35)] text-[oklch(0.65_0.25_35)] hover:bg-[oklch(0.65_0.25_35)]/10"
              >
                Ver Planes
              </Button>
            </div>

            {/* Beneficios rápidos */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[oklch(0.65_0.25_35)]" />
                <span className="text-sm font-poppins text-muted-foreground">Consulta sin compromiso</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[oklch(0.65_0.25_35)]" />
                <span className="text-sm font-poppins text-muted-foreground">Resultados en 1 semana</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[oklch(0.65_0.25_35)]" />
                <span className="text-sm font-poppins text-muted-foreground">Estrategia personalizada</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[oklch(0.65_0.25_35)]" />
                <span className="text-sm font-poppins text-muted-foreground">Soporte dedicado</span>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative animate-slide-in-up">
            {/* Video Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[oklch(0.3_0.02_260)]">
              {videoOpen ? (
                <iframe
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/JDeZj0OlmQA?autoplay=1"
                  title="Mi Punto en el Mapa - Gestión de Redes Sociales"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video"
                />
              ) : (
                <div
                  className="relative w-full aspect-video bg-gradient-to-br from-[oklch(0.2_0.015_260)] to-[oklch(0.15_0.01_260)] flex items-center justify-center cursor-pointer group"
                  onClick={() => setVideoOpen(true)}
                >
                  {/* Thumbnail placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.55_0.25_260)]/20 to-[oklch(0.65_0.25_35)]/20" />
                  
                  {/* Play button */}
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[oklch(0.65_0.25_35)] to-[oklch(0.6_0.28_20)] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <Play className="h-8 w-8 text-foreground fill-foreground ml-1" />
                    </div>
                    <span className="text-foreground font-semibold text-lg">Ver Video</span>
                  </div>
                </div>
              )}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-[oklch(0.65_0.25_35)] rounded-full opacity-20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[oklch(0.55_0.25_260)] rounded-full opacity-20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
