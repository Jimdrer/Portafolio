import { Button } from "@/components/ui/button"
import { ArrowDown, Heart, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 text-center bg-gradient-to-b from-card to-background">
      <div className="container max-w-4xl mx-auto">
        <div className="mb-8">
          <img
            src="/underwater-ocean-scene-with-diverse-marine-life--c.jpg"
            alt="Ecosistema marino diverso"
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
          Descubre la Vida Marina
          <span className="text-primary block">y Su Importancia</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
          Explora la increíble diversidad de especies marinas, comprende su papel vital en nuestro planeta y conoce cómo
          la contaminación amenaza estos ecosistemas únicos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="gap-2">
            <Heart className="h-5 w-5" />
            Explorar Especies
          </Button>
          <Button variant="outline" size="lg" className="gap-2 bg-transparent">
            <Shield className="h-5 w-5" />
            Acciones de Conservación
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
