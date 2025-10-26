import { Smartphone, Target, AlertCircle, Eye, MapPin, CheckCircle2 } from "lucide-react"

export function Benefits() {
  const benefits = [
    {
      icon: Smartphone,
      title: "Tecnología que simplifica",
      description: "Panel financiero con alertas y reportes claros para decidir sin incertidumbre.",
    },
    {
      icon: Target,
      title: "Estrategia primero, trámites después",
      description: "Tu crecimiento y optimización fiscal son nuestra prioridad.",
    },
    {
      icon: AlertCircle,
      title: "Acompañamiento proactivo",
      description: "No esperamos a que tengas un problema. Te avisamos a tiempo.",
    },
    {
      icon: Eye,
      title: "Transparencia total",
      description: "Visibilidad de procesos, tiempos y resultados en nuestro portal.",
    },
    {
      icon: MapPin,
      title: "Soluciones para cada etapa",
      description: "Desde declaración de renta personal hasta expansión empresarial.",
    },
  ]

  return (
    <section id="beneficios" className="py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6 text-balance">
            ¿Por qué Sophia Capital?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="flex flex-col items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-accent transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-2 flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
