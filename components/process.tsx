"use client"

import { Search, ClipboardCheck, FileText, Target } from "lucide-react"

export function Process() {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Te conocemos",
      description: "Entendemos tu situación y metas",
    },
    {
      icon: ClipboardCheck,
      number: "02",
      title: "Hacemos un diagnóstico experto",
      description: "Análisis profundo de tu situación financiera",
    },
    {
      icon: FileText,
      number: "03",
      title: "Diseñamos un plan claro y accionable",
      description: "Estrategia personalizada para tus objetivos",
    },
    {
      icon: Target,
      number: "04",
      title: "Te acompañamos hasta lograr los resultados",
      description: "Seguimiento continuo hasta alcanzar tus metas",
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6 text-balance">Cómo funciona</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un proceso simple y efectivo para transformar tus finanzas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 relative">
                    <Icon className="w-8 h-8 text-accent" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-primary mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
                )}
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
          >
            Hablemos hoy
          </button>
        </div>
      </div>
    </section>
  )
}
