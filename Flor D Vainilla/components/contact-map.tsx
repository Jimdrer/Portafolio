import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Car, Train } from "lucide-react"

export default function ContactMap() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">Cómo Llegar</h2>
          <p className="text-lg text-muted-foreground">
            Estamos ubicados en el corazón de la Ciudad de México, fácilmente accesible por diversos medios de
            transporte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="font-playfair text-xl text-foreground flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Ubicación en el Mapa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Mapa Interactivo</p>
                  <p className="text-sm text-muted-foreground">Av. Revolución 1234, Centro, CDMX</p>
                </div>
              </div>
              <Button className="w-full bg-transparent" variant="outline">
                <Navigation className="w-4 h-4 mr-2" />
                Abrir en Google Maps
              </Button>
            </CardContent>
          </Card>

          {/* Transportation Options */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-foreground flex items-center">
                  <Train className="w-5 h-5 mr-2" />
                  Transporte Público
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Metro</h4>
                  <p className="text-sm text-muted-foreground">
                    Estación Revolución (Línea 2) - 3 minutos caminando
                    <br />
                    Estación Hidalgo (Líneas 2 y 3) - 8 minutos caminando
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Metrobús</h4>
                  <p className="text-sm text-muted-foreground">
                    Estación Centro Histórico - 5 minutos caminando
                    <br />
                    Línea 4 dirección Buenavista
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Autobús</h4>
                  <p className="text-sm text-muted-foreground">
                    Múltiples rutas pasan por Av. Revolución
                    <br />
                    Paradas cercanas cada 2 cuadras
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-foreground flex items-center">
                  <Car className="w-5 h-5 mr-2" />
                  En Automóvil
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Estacionamiento</h4>
                  <p className="text-sm text-muted-foreground">
                    Servicio de valet parking disponible
                    <br />
                    Costo: $50 pesos por evento
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Estacionamientos Públicos</h4>
                  <p className="text-sm text-muted-foreground">
                    Plaza de la República - 2 cuadras
                    <br />
                    Estacionamiento Revolución - 1 cuadra
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Aplicaciones de Transporte</h4>
                  <p className="text-sm text-muted-foreground">
                    Uber, Didi y taxis disponibles 24/7
                    <br />
                    Zona de descenso frente al restaurante
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Media and Additional Contact */}
        <div className="mt-16 bg-primary/5 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">Síguenos en Redes Sociales</h3>
            <p className="text-muted-foreground">
              Mantente al día con nuestras últimas creaciones culinarias, eventos especiales y promociones exclusivas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Button variant="outline" className="h-12 bg-transparent">
              Facebook
            </Button>
            <Button variant="outline" className="h-12 bg-transparent">
              Instagram
            </Button>
            <Button variant="outline" className="h-12 bg-transparent">
              Twitter
            </Button>
            <Button variant="outline" className="h-12 bg-transparent">
              TikTok
            </Button>
          </div>

          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-4">Atención de Emergencia</h4>
            <p className="text-sm text-muted-foreground mb-2">Para consultas urgentes fuera del horario de atención:</p>
            <p className="text-foreground font-medium">WhatsApp: (55) 9876-5432</p>
            <p className="text-xs text-muted-foreground mt-2">
              Solo para emergencias relacionadas con eventos confirmados
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
