import { BackgroundGrid } from "./components/common/BackgroundGrid"
import { Footer } from "./components/layout/Footer"
import { Header } from "./components/layout/Header"
import { About } from "./components/sections/About"
import { CTA } from "./components/sections/CTA"
import { Ecosystem } from "./components/sections/Ecosystem"
import { Features } from "./components/sections/Features"
import { Hero } from "./components/sections/Hero"
import { HowItWorks } from "./components/sections/HowItWorks"
import { Security } from "./components/sections/Security"

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-text-primary-light antialiased dark:text-white">
      {/* Grid de Fundo Premium, Robusto e Suavemente Animado */}
      <BackgroundGrid />

      <Header />
      <main className="relative z-0">
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <Security />
        <Ecosystem />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
