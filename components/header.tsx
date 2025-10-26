"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-xl font-bold">S</span>
            </div>
            <span className="font-serif text-2xl font-bold text-primary">Sophia Capital</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-accent transition-colors"
            >
              FAQ
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Contacto
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-left py-2 text-foreground hover:text-accent transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("beneficios")}
                className="text-left py-2 text-foreground hover:text-accent transition-colors"
              >
                Beneficios
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="text-left py-2 text-foreground hover:text-accent transition-colors"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left py-2 text-foreground hover:text-accent transition-colors"
              >
                FAQ
              </button>
              <Button
                onClick={() => scrollToSection("contacto")}
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full"
              >
                Contacto
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
