export default function CalendlySection() {
  return (
    <section id="schedule" className="py-16 bg-transparent animate-fade-up">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-8 space-y-2">
          <h2 className="text-3xl font-space-grotesk font-bold text-foreground">Agenda Tu Consulta</h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Selecciona el día y la hora que mejor te queden para conversar por Zoom.
          </p>
        </div>
        <div className="h-[650px] sm:h-[750px] rounded-xl overflow-hidden border border-[oklch(0.3_0.02_260)] bg-[oklch(0.18_0.015_260)]/60 shadow-2xl">
          <iframe
            src="https://calendly.com/mipuntoenelmapa/30min?hide_landing_page_details=1&hide_gdpr_banner=1"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Calendly scheduling"
            className="w-full h-full"
          />
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4">
          ¿Problemas para visualizar el calendario?{" "}
          <a
            href="https://calendly.com/mipuntoenelmapa/30min"
            target="_blank"
            rel="noreferrer"
            className="text-[oklch(0.65_0.25_35)] underline font-medium hover:text-[oklch(0.65_0.25_35)]/80 transition-colors"
          >
            Abre Calendly en una pestaña nueva
          </a>.
        </p>
      </div>
    </section>
  );
}
