import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Heart, Crown, Sparkles } from "lucide-react"

export default function EventPackages() {
  const packages = [
    {
      name: "Celebración Íntima",
      icon: Heart,
      description: "Perfecto para reuniones familiares y cenas especiales",
      capacity: "10-30 personas",
      price: "Desde $450 por persona",
      features: [
        "Menú de 3 tiempos personalizado",
        "Decoración básica incluida",
        "Servicio de meseros dedicados",
        "Música ambiental",
        "2 horas de evento",
      ],
      popular: false,
    },
    {
      name: "Fiesta Tradicional",
      icon: Sparkles,
      description: "Ideal para cumpleaños, aniversarios y celebraciones familiares",
      capacity: "30-80 personas",
      price: "Desde $380 por persona",
      features: [
        "Menú buffet gourmet completo",
        "Decoración temática mexicana",
        "Mariachi por 1 hora",
        "Barra libre de aguas frescas",
        "4 horas de evento",
        "Coordinador de eventos",
      ],
      popular: true,
    },
    {
      name: "Evento Premium",
      icon: Crown,
      description: "La experiencia más exclusiva para ocasiones especiales",
      capacity: "50-150 personas",
      price: "Desde $650 por persona",
      features: [
        "Menú degustación de 5 tiempos",
        "Decoración personalizada completa",
        "Servicio de sommelier",
        "Entretenimiento en vivo",
        "Barra libre premium",
        "6 horas de evento",
        "Coordinador y chef ejecutivo",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">Paquetes de Eventos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Elige el paquete que mejor se adapte a tu celebración. Todos nuestros eventos incluyen la calidad gourmet
            que nos caracteriza.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-xl transition-all duration-300 ${
                pkg.popular ? "border-primary shadow-lg scale-105" : "border-border/50"
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Más Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <pkg.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-2xl text-foreground">{pkg.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{pkg.description}</p>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">{pkg.capacity}</p>
                  <p className="text-2xl font-bold text-primary mt-2">{pkg.price}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6" variant={pkg.popular ? "default" : "outline"}>
                  Solicitar Cotización
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
