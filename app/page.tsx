import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Benefits } from "@/components/benefits"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { About } from "@/components/about"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <Testimonials />
      <Process />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
