import { Button } from "@/components/ui/button"
import { BookOpen, Coffee, ChefHat } from "lucide-react"

export default function BlogHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">Blog Flor D Vainilla</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed mb-8">
            Descubre los secretos de la cocina mexicana gourmet, historias fascinantes de nuestros platillos
            tradicionales y consejos culinarios de nuestros chefs expertos.
          </p>
          <Button size="lg" className="text-lg px-8 py-3">
            <BookOpen className="w-5 h-5 mr-2" />
            Explorar Artículos
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChefHat className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Recetas Tradicionales</h3>
            <p className="text-muted-foreground">
              Aprende los secretos de la cocina mexicana con recetas familiares transmitidas por generaciones
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Historia Culinaria</h3>
            <p className="text-muted-foreground">
              Descubre el origen y la evolución de los platillos más emblemáticos de México
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Consejos de Chef</h3>
            <p className="text-muted-foreground">
              Tips profesionales y técnicas gourmet para elevar tus habilidades culinarias
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
