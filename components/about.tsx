import { Award, Briefcase, Scale, Users } from "lucide-react"

export function About() {
  const expertise = [
    { icon: Briefcase, text: "Finanzas corporativas" },
    { icon: Award, text: "Contabilidad y auditoría" },
    { icon: Scale, text: "Derecho tributario y empresarial" },
  ]

  return (
    <section id="nosotros" className="py-12 lg:py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-balance">Sophia Capital</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          </div>

          <div className="space-y-6 mb-8">
            <p className="text-xl md:text-2xl font-serif text-center leading-relaxed">
              Nace con una misión: Que tanto empresas como personas tomen decisiones financieras con seguridad, sin
              estrés y con una estrategia clara.
            </p>

            <p className="text-lg text-primary-foreground/90 text-center leading-relaxed max-w-3xl mx-auto">
              Somos un equipo multidisciplinario de profesionales comprometidos con tu éxito financiero.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {expertise.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <p className="font-medium">{item.text}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
              <Users className="w-6 h-6 text-accent" />
              <p className="text-lg font-medium">
                En nosotros encuentras:{" "}
                <span className="text-accent">experiencia, criterio y una atención cercana</span> sin perder el nivel
                ejecutivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
