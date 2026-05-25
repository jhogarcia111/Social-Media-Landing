export default function CalendlySection() {
  return (
    <section id="schedule" className="py-16 bg-transparent animate-fade-up">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Agenda una consulta</h2>
        <div className="aspect-[16/9] rounded-xl overflow-hidden border border-[oklch(0.3_0.02_260)]">
          <iframe
            src="https://calendly.com/mipuntoenelmapa/30min?embed_domain=yourdomain.com&embed_type=Inline"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Calendly scheduling"
            className="w-full h-full"
          />
        </div>
        <p className="text-sm text-muted-foreground mt-3">Si el embed no carga, <a href="https://calendly.com/mipuntoenelmapa/30min" target="_blank" rel="noreferrer" className="underline">abre Calendly en una nueva pestaña</a>.</p>
      </div>
    </section>
  );
}
