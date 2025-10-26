import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "¿Atienden personas y empresas?",
      answer:
        "Sí, con experiencias diferenciadas para cada necesidad. Ofrecemos dirección financiera para empresas (CFO-as-a-Service) y asesoría personalizada para personas en declaración de renta y finanzas personales.",
    },
    {
      question: "¿Administran mi dinero?",
      answer:
        "No. Gestionamos, asesoramos y reportamos, pero tu dinero siempre está bajo tu control. Asesoramos, analizamos y acompañamos la ejecución, pero los recursos siempre permanecen bajo control del cliente.",
    },
    {
      question: "¿Qué tipo de empresas pueden contratar CFO Strategic?",
      answer:
        "Pequeñas y medianas empresas que necesitan dirección financiera profesional para crecer sin asumir el costo de un CFO interno.",
    },
    {
      question: "¿Cuánto cuesta el servicio para empresas?",
      answer:
        "Depende del tamaño y complejidad del negocio. Los planes inician desde $1.5M COP mensuales y se ajustan a las necesidades de la empresa tras un diagnóstico inicial.",
    },
    {
      question: "¿Qué incluye la asesoría de renta para personas?",
      answer:
        "Declaración de renta optimizada, revisión fiscal personalizada y acompañamiento ante la DIAN en caso de requerimientos. Nuestro objetivo es que pagues lo justo y sin estrés.",
    },
    {
      question: "¿Puedo contratar solo una parte del servicio?",
      answer:
        "Sí. Tanto en empresas como personas adaptamos el acompañamiento de acuerdo a tu situación y presupuesto.",
    },
    {
      question: "¿Cómo se realiza la atención?",
      answer:
        "Puedes elegir atención remota o presencial cuando aplique. Utilizamos herramientas digitales seguras para revisar documentos y hacer reuniones de seguimiento.",
    },
    {
      question: "¿Desde qué ciudades prestan servicios?",
      answer:
        "Atendemos clientes en toda Colombia y también colombianos en el exterior que deben presentar obligaciones fiscales locales.",
    },
    {
      question: "¿Quién presta los servicios?",
      answer:
        "Profesionales certificados: contadores, abogados y expertos financieros con años de experiencia en el mercado colombiano.",
    },
    {
      question: "¿Puedo ver el avance de mis trámites?",
      answer:
        "Sí, desde nuestro portal con indicadores y notificaciones. Tienes visibilidad completa de procesos, tiempos y resultados.",
    },
    {
      question: "¿Pueden reemplazar a mi contador actual?",
      answer:
        "Sí. O podemos complementar su trabajo con nuestro análisis y tecnología para una gestión financiera más estratégica.",
    },
    {
      question: "¿Qué documentación necesito para mi declaración de renta?",
      answer:
        "Te entregamos una lista personalizada, pero normalmente incluye certificados bancarios, laborales, extractos y soportes de compras o inversiones.",
    },
    {
      question: "¿Pueden representar a mi empresa frente a entidades como la DIAN?",
      answer:
        "Sí. Contamos con profesionales habilitados para representación en trámites administrativos y tributarios.",
    },
    {
      question: "¿Tienen confidencialidad sobre la información entregada?",
      answer: "Total. Manejamos acuerdos de confidencialidad y protocolos estrictos de protección de datos.",
    },
  ]

  return (
    <section id="faq" className="py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6 text-balance">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">Resolvemos tus dudas sobre nuestros servicios</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-accent"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
