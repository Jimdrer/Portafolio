import { Card, CardContent } from "@/components/ui/card"
import { ChefHat, Calendar, Users, Award } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: ChefHat,
      title: "Cocina Gourmet",
      description:
        "Platillos tradicionales mexicanos elevados con técnicas culinarias modernas y ingredientes de la más alta calidad.",
    },
    {
      icon: Calendar,
      title: "Eventos Especiales",
      description: "Organizamos eventos únicos y memorables. Desde celebraciones íntimas hasta grandes festividades.",
    },
    {
      icon: Users,
      title: "Experiencia Familiar",
      description:
        "Un ambiente cálido y acogedor donde cada visita se convierte en un momento especial para compartir.",
    },
    {
      icon: Award,
      title: "Calidad Reconocida",
      description:
        "Premiados por nuestra excelencia culinaria y compromiso con la autenticidad de los sabores mexicanos.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            ¿Por qué elegir Flor D Vainilla?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Más que una fondita, somos guardianes de la tradición culinaria mexicana, comprometidos con ofrecer una
            experiencia gastronómica excepcional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-border/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
