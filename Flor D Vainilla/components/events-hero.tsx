import { Button } from "@/components/ui/button"
import { Calendar, Users, Star } from "lucide-react"

export default function EventsHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">Eventos Memorables</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed mb-8">
            Celebra los momentos más importantes de tu vida en Flor D Vainilla. Creamos experiencias gastronómicas
            únicas que harán de tu evento algo inolvidable.
          </p>
          <Button size="lg" className="text-lg px-8 py-3">
            <Calendar className="w-5 h-5 mr-2" />
            Reservar Ahora
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Hasta 150 Personas</h3>
            <p className="text-muted-foreground">Espacios flexibles para eventos íntimos o grandes celebraciones</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Servicio Premium</h3>
            <p className="text-muted-foreground">Atención personalizada y menús diseñados especialmente para ti</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Planificación Completa</h3>
            <p className="text-muted-foreground">
              Te acompañamos en cada detalle desde la planificación hasta la ejecución
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
