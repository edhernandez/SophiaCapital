import { Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-8 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-primary font-serif text-xl font-bold">S</span>
              </div>
              <span className="font-serif text-2xl font-bold">Sophia Capital</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Asesoría financiera profesional para empresas y personas. Claridad y control financiero para crecer.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#servicios" className="hover:text-accent transition-colors">
                  CFO Strategic
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-accent transition-colors">
                  Renta Fácil
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-accent transition-colors">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-accent transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:contacto@sophiacapital.co" className="hover:text-accent transition-colors">
                  contacto@sophiacapital.co
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href="https://wa.me/573001234567" className="hover:text-accent transition-colors">
                  +57 300 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-accent" />
                <a href="#" className="hover:text-accent transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} Sophia Capital. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
