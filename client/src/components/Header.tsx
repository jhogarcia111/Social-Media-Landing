/**
 * Header Component
 * 
 * Design Philosophy: Energía Dinámica y Moderna
 * - Navegación limpia y moderna
 * - Logo de la marca
 * - Botón CTA destacado
 */

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Solución", href: "#solution" },
    { label: "Planes", href: "#pricing" },
    { label: "Contacto", href: "#cta" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-[oklch(0.3_0.02_260)]">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="Mi Punto en el Mapa Logo" 
            className="w-10 h-10 object-contain rounded-full border border-[oklch(0.65_0.25_35)]/20 shadow-md"
          />
          <span className="font-space-grotesk font-bold text-foreground hidden sm:inline">
            Mi Punto en el Mapa
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-poppins"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button 
            className="bg-gradient-to-r from-[oklch(0.65_0.25_35)] to-[oklch(0.6_0.28_20)] hover:shadow-lg hover:shadow-[oklch(0.65_0.25_35)]/50 text-foreground font-semibold"
            onClick={() => window.dispatchEvent(new CustomEvent("open-cta-modal", { detail: { planName: "Consulta Inicial" } }))}
          >
            Agendar Consulta
          </Button>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-[oklch(0.2_0.015_260)] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[oklch(0.2_0.015_260)] border-t border-[oklch(0.3_0.02_260)]">
          <nav className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-poppins py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button 
              className="w-full bg-gradient-to-r from-[oklch(0.65_0.25_35)] to-[oklch(0.6_0.28_20)] hover:shadow-lg hover:shadow-[oklch(0.65_0.25_35)]/50 text-foreground font-semibold mt-4"
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent("open-cta-modal", { detail: { planName: "Consulta Inicial" } }));
              }}
            >
              Agendar Consulta
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
