import { Calendar, MessageSquare, X } from "lucide-react";

interface CTAModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName?: string | null;
}

export default function CTAModal({ isOpen, onClose, planName }: CTAModalProps) {
  if (!isOpen) return null;

  const handleAction1 = () => {
    // Path 1: Schedule now (Calendly)
    window.open("https://calendly.com/mipuntoenelmapa/30min", "_blank");
    onClose();
  };

  const handleAction2 = () => {
    // Path 2: More information (Contact Form)
    const el = document.getElementById("cta");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300" 
        onClick={onClose} 
      />
      
      {/* Modal Content */}
      <div className="relative bg-[oklch(0.2_0.015_260)] border border-[oklch(0.3_0.02_260)] rounded-2xl w-full max-w-md p-8 shadow-2xl z-10 animate-fade-up">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors p-1 rounded-lg hover:bg-[oklch(0.25_0.015_260)]"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-xs font-bold text-[oklch(0.65_0.25_35)] uppercase tracking-wider block mb-2">
            Paso Siguiente
          </span>
          <h3 className="text-2xl font-space-grotesk font-bold text-foreground">
            {planName ? `¿Cómo deseas proceder con el ${planName}?` : "¿Cuál es tu situación actual?"}
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            Elige la opción que mejor se adapte a lo que necesitas hoy.
          </p>
        </div>

        {/* Paths Options */}
        <div className="space-y-4">
          {/* Path 1: Ready to start */}
          <button
            onClick={handleAction1}
            className="w-full text-left p-4 rounded-xl border border-[oklch(0.65_0.25_35)] bg-gradient-to-br from-[oklch(0.65_0.25_35)]/15 to-transparent hover:from-[oklch(0.65_0.25_35)]/25 transition-all duration-300 flex items-start gap-4 group hover:shadow-lg hover:shadow-[oklch(0.65_0.25_35)]/10"
          >
            <div className="w-10 h-10 rounded-lg bg-[oklch(0.65_0.25_35)] flex items-center justify-center text-foreground flex-shrink-0 group-hover:scale-110 transition-transform">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-foreground group-hover:text-[oklch(0.65_0.25_35)] transition-colors">
                ¡Estoy listo para comenzar!
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                Quiero agendar mi sesión estratégica de 30 min gratis para arrancar de una vez.
              </p>
            </div>
          </button>

          {/* Path 2: Need more info */}
          <button
            onClick={handleAction2}
            className="w-full text-left p-4 rounded-xl border border-[oklch(0.3_0.02_260)] bg-[oklch(0.18_0.015_260)] hover:bg-[oklch(0.23_0.02_260)] hover:border-[oklch(0.65_0.25_35)]/30 transition-all duration-300 flex items-start gap-4 group"
          >
            <div className="w-10 h-10 rounded-lg bg-[oklch(0.3_0.02_260)] flex items-center justify-center text-muted-foreground flex-shrink-0 group-hover:bg-[oklch(0.65_0.25_35)]/20 group-hover:text-[oklch(0.65_0.25_35)] transition-all">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-foreground">
                Tengo dudas o requiero información
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                Prefiero dejar mis datos para que un consultor me contacte directamente.
              </p>
            </div>
          </button>
        </div>

        {/* Footer info */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          Ambas opciones son completamente libres de compromiso.
        </p>
      </div>
    </div>
  );
}
