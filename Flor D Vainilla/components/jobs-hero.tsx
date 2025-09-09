import { Button } from "@/components/ui/button"
import { Users, Heart, Award } from "lucide-react"

export default function JobsHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">Únete a Nuestra Familia</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed mb-8">
            En Flor D Vainilla no solo servimos comida excepcional, creamos experiencias memorables. Buscamos personas
            apasionadas que compartan nuestra visión de la excelencia culinaria y el servicio de calidad.
          </p>
          <Button size="lg" className="text-lg px-8 py-3">
            Ver Vacantes Disponibles
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Equipo Unido</h3>
            <p className="text-muted-foreground">
              Trabajamos como una familia donde cada miembro es valorado y respetado
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Pasión por la Cocina</h3>
            <p className="text-muted-foreground">Compartimos el amor por la gastronomía mexicana y la excelencia</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Crecimiento Profesional</h3>
            <p className="text-muted-foreground">Ofrecemos oportunidades de desarrollo y capacitación constante</p>
          </div>
        </div>
      </div>
    </section>
  )
}
