import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      q: "¿Qué incluye exactamente el servicio mensual?",
      a: "Nos encargamos de todo de extremo a extremo: estrategia digital personalizada, diseño gráfico profesional, copy writing (redacción de textos persuasivos), edición de Reels/Videos verticales, programación de publicaciones, y moderación activa de comentarios. Realizamos una reunión mensual de estrategia para alinear objetivos."
    },
    {
      q: "¿Tienen permanencia mínima o contrato a largo plazo?",
      a: "No. Todos nuestros planes de gestión de redes sociales son mensuales. Creemos en retener a nuestros clientes mediante resultados reales y consistencia, no a través de contratos forzosos. Puedes pausar o cancelar el servicio en cualquier momento con un aviso de 10 días."
    },
    {
      q: "¿Cómo garantizan que el contenido se adaptará a la identidad de mi marca?",
      a: "Antes de publicar cualquier contenido, realizamos una sesión de Onboarding profunda para comprender tu marca, sus valores, tono de comunicación y público objetivo. Además, creamos un calendario mensual de contenidos que requiere tu aprobación previa; nada se publica sin tu visto bueno."
    },
    {
      q: "¿Qué pasa si no tengo fotos o videos propios de mi negocio?",
      a: "No te preocupes. Si tienes material propio, lo optimizamos y profesionalizamos. Si no tienes, diseñamos gráficos de alto impacto y utilizamos recursos visuales premium seleccionados detalladamente para que representen fielmente el valor de tu negocio."
    },
    {
      q: "¿Los planes incluyen el presupuesto para anuncios pagados?",
      a: "Nuestros planes cubren la estrategia, diseño gráfico, copy y gestión de la campaña. En el Plan Autoridad administramos tus anuncios pagados, pero el presupuesto de pauta (lo que le pagas a Facebook/Google por anunciarte) lo decides tú y se cobra por separado directamente a tu tarjeta de crédito."
    },
    {
      q: "¿Cuándo empezaré a ver resultados en mis ventas?",
      a: "Las redes sociales son un canal de confianza. El aumento en alcance e interacciones se ve desde el primer mes. En promedio, marcas consistentes con contenido orgánico combinado con pauta digital observan un retorno de inversión claro (leads cualificados y clientes nuevos) entre el segundo y tercer mes."
    },
    {
      q: "¿Quién responde los comentarios y mensajes directos (DMs)?",
      a: "Nuestro equipo realiza la moderación diaria y responde comentarios y consultas iniciales para mantener tus canales activos y con excelente atención al cliente. Si llega un lead de venta calificado o con una pregunta de negocio específica, te lo enviamos directamente de inmediato para que cierres la venta."
    },
    {
      q: "¿Cuál es el proceso inicial para comenzar a trabajar?",
      a: "El proceso es simple: 1. Agendas una consulta gratuita de 30 minutos. 2. Evaluamos tu negocio y te recomendamos el plan ideal. 3. Realizamos el onboarding y definimos el tono de marca. 4. En 7 día hábiles te presentamos el primer calendario de contenidos del mes para tu revisión."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-background to-[oklch(0.18_0.015_260)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[oklch(0.65_0.25_35)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-bold text-[oklch(0.65_0.25_35)] uppercase tracking-wider block">
            Respuestas a tus dudas
          </span>
          <h2 className="text-4xl lg:text-5xl font-space-grotesk font-bold text-foreground">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resolvemos tus objeciones para que tomes la mejor decisión para tu negocio.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className={`rounded-xl border transition-all duration-300 ${
                activeIndex === idx 
                  ? "border-[oklch(0.65_0.25_35)] bg-[oklch(0.2_0.015_260)] shadow-lg shadow-[oklch(0.65_0.25_35)]/5" 
                  : "border-[oklch(0.3_0.02_260)] bg-[oklch(0.18_0.015_260)]/60 hover:border-[oklch(0.65_0.25_35)]/40 hover:bg-[oklch(0.2_0.015_260)]/40"
              }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-space-grotesk font-bold text-foreground pr-4">
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`h-5 w-5 text-[oklch(0.65_0.25_35)] flex-shrink-0 transition-transform duration-300 ${
                    activeIndex === idx ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-350 ease-in-out ${
                  activeIndex === idx ? "max-h-[300px] opacity-100 border-t border-[oklch(0.3_0.02_260)]/50" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 text-sm text-muted-foreground font-poppins leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
