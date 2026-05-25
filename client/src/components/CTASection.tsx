/**
 * CTASection Component
 * 
 * Design Philosophy: Energía Dinámica y Moderna
 * - Sección de llamado a la acción prominente
 * - Colores vibrantes y animaciones
 * - Formulario simple para agendamiento
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Mail, Phone, User } from "lucide-react";
import { useState, useEffect } from "react";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [planPrefill, setPlanPrefill] = useState<string | null>(null);

  useEffect(() => {
    try {
      const pre = localStorage.getItem('inquiryPlan');
      if (pre) setPlanPrefill(pre);
    } catch {}
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send lead to server-side endpoint - keeps email/phone private
    fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, plan: planPrefill }),
    }).catch(() => {
      // ignore errors for now
    });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-[oklch(0.2_0.02_280)] overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[oklch(0.65_0.25_35)] rounded-full mix-blend-screen opacity-10 blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[oklch(0.55_0.25_260)] rounded-full mix-blend-screen opacity-10 blur-3xl" />

      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-space-grotesk font-bold text-foreground">
            Comienza Tu Transformación Hoy
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agenda tu consulta gratuita de 30 minutos. Sin compromiso, sin costo, solo resultados.
          </p>
        </div>

        <div className="relative p-6 sm:p-12 rounded-2xl bg-gradient-to-br from-[oklch(0.2_0.015_260)] to-[oklch(0.15_0.01_260)] border-2 border-[oklch(0.65_0.25_35)]/30 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[oklch(0.65_0.25_35)] rounded-full opacity-5 blur-3xl" />

          {submitted ? (
            <div className="relative z-10 text-center py-8 space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[oklch(0.65_0.25_35)]/20 border-2 border-[oklch(0.65_0.25_35)]">
                <Calendar className="h-8 w-8 text-[oklch(0.65_0.25_35)]" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">¡Gracias por tu interés!</h3>
              <p className="text-muted-foreground">
                Pronto nos pondremos en contacto para confirmar tu consulta gratuita.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Nombre completo
                </label>
                <Input
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-[oklch(0.25_0.015_260)] border-[oklch(0.3_0.02_260)] text-foreground placeholder:text-muted-foreground focus:border-[oklch(0.65_0.25_35)] focus:ring-[oklch(0.65_0.25_35)]/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Correo electrónico
                </label>
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-[oklch(0.25_0.015_260)] border-[oklch(0.3_0.02_260)] text-foreground placeholder:text-muted-foreground focus:border-[oklch(0.65_0.25_35)] focus:ring-[oklch(0.65_0.25_35)]/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Teléfono (WhatsApp)
                </label>
                <Input
                  type="tel"
                  placeholder="+57 XXX XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-[oklch(0.25_0.015_260)] border-[oklch(0.3_0.02_260)] text-foreground placeholder:text-muted-foreground focus:border-[oklch(0.65_0.25_35)] focus:ring-[oklch(0.65_0.25_35)]/20"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-[oklch(0.65_0.25_35)] to-[oklch(0.6_0.28_20)] hover:shadow-lg hover:shadow-[oklch(0.65_0.25_35)]/50 text-foreground font-bold text-lg animate-glow"
              >
                Agendar Mi Consulta Gratuita
              </Button>

              {/* hidden plan indicator */}
              <input type="hidden" name="plan" value={planPrefill ?? ''} />

              <div className="flex flex-wrap justify-center gap-4 pt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">✓ Sin compromiso</span>
                <span className="flex items-center gap-1">✓ 30 minutos</span>
                <span className="flex items-center gap-1">✓ Asesor experto</span>
              </div>
            </form>
          )}
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-muted-foreground">
            ¿Prefieres contactarnos directamente?
          </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="outline"
              className="border-[oklch(0.65_0.25_35)] text-[oklch(0.65_0.25_35)] hover:bg-[oklch(0.65_0.25_35)]/10"
              onClick={() => {
                // Scroll to scheduling/Calendly section
                const el = document.getElementById('schedule');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              WhatsApp
            </Button>
            <Button
              variant="outline"
              className="border-[oklch(0.55_0.25_260)] text-[oklch(0.55_0.25_260)] hover:bg-[oklch(0.55_0.25_260)]/10"
              onClick={() => {
                // Scroll to contact form
                const el = document.getElementById('cta');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// populate planPrefill from localStorage if present
// (runs in browser)
if (typeof window !== 'undefined') {
  const pre = localStorage.getItem('inquiryPlan');
  // set via DOM - the component will read on mount
}
