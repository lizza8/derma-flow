import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ServicesGrid } from "@/components/services-grid"
import { TrustSection } from "@/components/trust-section"
import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { FloatingBookButton } from "@/components/floating-book-button"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <AboutSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingBookButton />
    </>
  )
}
