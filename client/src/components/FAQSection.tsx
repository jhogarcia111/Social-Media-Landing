export default function FAQSection() {
  const faqs = [
    { q: '¿Qué incluye la consulta gratuita?', a: 'Una revisión rápida de tu perfil y recomendaciones iniciales de contenido y enfoque.' },
    { q: '¿Puedo cambiar de plan luego?', a: 'Sí, puedes escalar o ajustar el plan en cualquier momento según tus resultados.' },
    { q: '¿Cómo será la comunicación?', a: 'Reportes quincenales o semanales según el plan, más un canal directo para soporte.' },
    { q: '¿Puedo contratar solo contenido?', a: 'Sí, ofrecemos paquetes personalizables según tus necesidades.' },
  ];

  return (
    <section id="faq" className="py-20 bg-transparent animate-fade-up">
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="bg-[oklch(0.12_0.01_260)] p-4 rounded-lg border border-[oklch(0.3_0.02_260)]">
              <summary className="font-semibold cursor-pointer">{f.q}</summary>
              <div className="mt-2 text-sm text-muted-foreground">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
