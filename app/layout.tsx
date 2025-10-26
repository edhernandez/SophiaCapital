import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sophia Capital | Asesoría Financiera Profesional en Colombia",
  description:
    "Asesoría financiera profesional para empresas y personas en Colombia. CFO Strategic para empresas y Renta Fácil para personas. Resultados reales, sin complicaciones.",
  keywords: "asesoría financiera, CFO, declaración de renta, Colombia, finanzas empresariales, planeación financiera",
  authors: [{ name: "Sophia Capital" }],
  openGraph: {
    title: "Sophia Capital | Asesoría Financiera Profesional",
    description: "Claridad y control financiero para crecer. Asesoría financiera profesional para empresas y personas.",
    type: "website",
    locale: "es_CO",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
