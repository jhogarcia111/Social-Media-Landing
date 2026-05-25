/**
 * Footer Component
 * 
 * Design Philosophy: Energía Dinámica y Moderna
 * - Información de contacto
 * - Enlaces rápidos
 * - Redes sociales
 */

import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.15_0.01_260)] border-t border-[oklch(0.3_0.02_260)]">
      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[oklch(0.65_0.25_35)] to-[oklch(0.6_0.28_20)] flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">M</span>
              </div>
              <span className="font-space-grotesk font-bold text-foreground">Mi Punto en el Mapa</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Agente multiplicador de ventas. Gestión integral de redes sociales y marketing digital.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="text-muted-foreground hover:text-[oklch(0.65_0.25_35)] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#solution" className="text-muted-foreground hover:text-[oklch(0.65_0.25_35)] transition-colors">
                  Solución
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-[oklch(0.65_0.25_35)] transition-colors">
                  Planes
                </a>
              </li>
              <li>
                <a href="#cta" className="text-muted-foreground hover:text-[oklch(0.65_0.25_35)] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-[oklch(0.65_0.25_35)] transition-colors">
                  Gestión de Redes
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-[oklch(0.65_0.25_35)] transition-colors">
                  Creación de Contenido
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-[oklch(0.65_0.25_35)] transition-colors">
                  Estrategia Digital
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-[oklch(0.65_0.25_35)] transition-colors">
                  Consultoría
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contacto</h3>
            <p className="text-sm text-muted-foreground">Usa el formulario de contacto o agenda directamente una consulta.</p>
            <div className="flex gap-3">
              <a href="#cta" className="text-sm text-muted-foreground hover:text-[oklch(0.65_0.25_35)] transition-colors">Formulario</a>
              <a href="#schedule" className="text-sm text-muted-foreground hover:text-[oklch(0.65_0.25_35)] transition-colors">Agendar</a>
            </div>
          </div>
        </div>

        <div className="border-t border-[oklch(0.3_0.02_260)] py-8">
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-muted-foreground hover:text-[oklch(0.65_0.25_35)] transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-[oklch(0.65_0.25_35)] transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-[oklch(0.65_0.25_35)] transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-[oklch(0.65_0.25_35)] transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>
              © {currentYear} Mi Punto en el Mapa. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
