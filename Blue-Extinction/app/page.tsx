import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SpeciesGrid } from "@/components/species-grid"
import { ConservationStats } from "@/components/conservation-stats"
import { PollutionImpact } from "@/components/pollution-impact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SpeciesGrid />
        <ConservationStats />
        <PollutionImpact />
      </main>
      <Footer />
    </div>
  )
}
