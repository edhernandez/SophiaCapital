import { TrendingUp, DollarSign, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Testimonials() {
  const cases = [
    {
      icon: TrendingUp,
      title: "PyME logística: +22% liquidez en 6 meses",
      description:
        "Mediante gestión financiera activa implementamos controles de flujo de caja, renegociación de deudas y optimización de cartera que incrementó la liquidez en un 22% en medio año.",
      category: "CFO Strategic",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: DollarSign,
      title: "Emprendimiento digital: Ahorro tributario del 18%",
      description:
        "Estructuración fiscal apropiada que transformó un startup en operación fiscalmente eficiente, reduciendo la carga tributaria en un 18% sin riesgos ni vacíos legales.",
      category: "Optimización Tributaria",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Shield,
      title: "Profesional independiente: cero multas y control total",
      description:
        "Acompañamiento completo en declaración de renta que eliminó el estrés fiscal, estableció control total sobre ingresos y evitó cualquier multa o requerimiento de la DIAN.",
      category: "Renta Fácil",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6 text-balance">
            Resultados reales
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Historias de éxito que demuestran el impacto de decisiones financieras inteligentes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {cases.map((caseItem, index) => {
            const Icon = caseItem.icon
            return (
              <Card key={index} className="border-2 hover:border-accent transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 rounded-lg ${caseItem.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-7 h-7 ${caseItem.color}`} />
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${caseItem.bgColor} ${caseItem.color}`}>
                      {caseItem.category}
                    </span>
                  </div>
                  <CardTitle className="font-serif text-xl text-primary">{caseItem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed text-base">{caseItem.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground italic">Pronto verás aquí historias como la tuya.</p>
        </div>
      </div>
    </section>
  )
}

