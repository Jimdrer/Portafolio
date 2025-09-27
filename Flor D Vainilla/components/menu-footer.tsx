import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Clock, MapPin } from "lucide-react"
import Link from "next/link"

export default function MenuFooter() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">¿Listo para una experiencia única?</h2>
          <p className="text-lg text-muted-foreground mb-8">Reserva tu mesa o consulta sobre eventos especiales</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/eventos">
                <Phone className="w-5 h-5 mr-2" />
                Hacer Reservación
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contacto">Contactar</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="text-center border-border/50">
            <CardContent className="p-6">
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Horarios</h3>
              <p className="text-sm text-muted-foreground">
                Lun - Dom: 12:00 PM - 10:00 PM
                <br />
                Cocina cierra: 9:30 PM
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50">
            <CardContent className="p-6">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Ubicación</h3>
              <p className="text-sm text-muted-foreground">
                Salón de Fiestas El potrero, Prolongación Matamoros Sur 48 antes 105.
                <br />
                Col. El Potrero, Valle de Santiago, Gto.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50">
            <CardContent className="p-6">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Reservaciones</h3>
              <p className="text-sm text-muted-foreground">
                (55) 1234-5678
                <br />
                reservas@flordvainilla.mx
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 p-6 bg-card rounded-lg border border-border/50">
          <h3 className="font-playfair text-xl font-semibold text-foreground mb-3 text-center">Nota Importante</h3>
          <p className="text-sm text-muted-foreground text-center leading-relaxed">
            Los precios pueden variar según la temporada y disponibilidad de ingredientes. Algunos platillos requieren
            previa reservación. Consulta con nuestro personal sobre alergias alimentarias.
          </p>
        </div>
      </div>
    </section>
  )
}
