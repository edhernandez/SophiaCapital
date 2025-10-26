"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, User, TrendingUp, Shield, FileText, BarChart3 } from "lucide-react"

export function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="servicios" className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Empresas Section */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6 text-balance">
              Soluciones para empresas que buscan crecer
            </h2>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {/* CFO Strategic */}
          <Card className="border-2 hover:border-accent transition-colors">
            <CardHeader>
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="font-serif text-2xl text-primary">Dirección financiera como servicio (CFO-as-a-Service)</CardTitle>
              <CardDescription className="text-base">
                Decisiones inteligentes sin aumentar tu nómina.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Contabilidad estratégica y cumplimiento</span>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Tu información deja de ser histórica para volverse accionable</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Optimización tributaria permanente</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Paga lo justo siempre</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Gestión de crédito, cartera y riesgo financiero</span>
                </li>
              </ul>
              <Button
                onClick={scrollToContact}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-6"
              >
                Habla con un asesor
              </Button>
            </CardContent>
          </Card>
          </div>
        </div>

        {/* Personas Section */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-6 text-balance">
              Finanzas personales sin complicaciones
            </h2>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {/* Renta Fácil */}
          <Card className="border-2 hover:border-accent transition-colors">
            <CardHeader>
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <User className="w-7 h-7 text-accent" />
              </div>
              <CardTitle className="font-serif text-2xl text-primary">Finanzas personales sin complicaciones</CardTitle>
              <CardDescription className="text-base">
                Paga lo justo. A tiempo. Sin estrés.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Declaración de renta guiada y digital</span>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Planeación fiscal para que tu dinero rinda más</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Asesoría patrimonial y protección de activos</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Orientación legal y contractual</span>
                </li>
              </ul>
              <Button
                onClick={scrollToContact}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 mt-6"
              >
                Cotiza tu declaración
              </Button>
            </CardContent>
          </Card>
          </div>
        </div>

        {/* Otros Servicios Empresariales Section */}
        <div className="mt-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl md:text-4xl font-bold text-primary mb-4">
                Otros Servicios Empresariales
              </h3>
              <p className="text-lg text-muted-foreground">Soluciones integrales para el crecimiento de tu empresa</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Consultoría Administrativa */}
              <Card className="border hover:border-accent transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl text-primary">Consultoría Administrativa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Optimización de procesos y gestión empresarial para mejorar la eficiencia operativa.
                  </p>
                </CardContent>
              </Card>

              {/* Auditoría y Revisoría Fiscal */}
              <Card className="border hover:border-accent transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl text-primary">Auditoría y Revisoría Fiscal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Servicios de auditoría y revisoría fiscal para garantizar el cumplimiento normativo.
                  </p>
                </CardContent>
              </Card>

              {/* Capacitación Empresarial */}
              <Card className="border hover:border-accent transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl text-primary">Capacitación Empresarial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Formación especializada para equipos en gestión financiera y administrativa.
                  </p>
                </CardContent>
              </Card>

              {/* Desarrollo de Software */}
              <Card className="border hover:border-accent transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl text-primary">Desarrollo de Software</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Plataformas de gestión financiera personalizadas para tu empresa.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-10">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Consulta por estos servicios
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
