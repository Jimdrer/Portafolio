import { Card, CardContent } from "@/components/ui/card"
import { Gift, GraduationCap, Clock, DollarSign, Users, Utensils } from "lucide-react"

export default function CompanyCulture() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Salario Competitivo",
      description: "Sueldos por encima del promedio del sector con bonos por desempeño",
    },
    {
      icon: Gift,
      title: "Prestaciones Superiores",
      description: "Seguro médico, vales de despensa, aguinaldo y vacaciones pagadas",
    },
    {
      icon: GraduationCap,
      title: "Capacitación Continua",
      description: "Cursos de gastronomía, servicio al cliente y desarrollo profesional",
    },
    {
      icon: Clock,
      title: "Horarios Flexibles",
      description: "Turnos adaptables y respeto por el equilibrio vida-trabajo",
    },
    {
      icon: Utensils,
      title: "Comida del Personal",
      description: "Alimentos gratuitos durante tu turno con menú del día",
    },
    {
      icon: Users,
      title: "Ambiente Familiar",
      description: "Cultura de respeto, colaboración y crecimiento mutuo",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">¿Por qué trabajar con nosotros?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ofrecemos más que un trabajo, brindamos una oportunidad de crecimiento personal y profesional en un ambiente
            donde tu talento es reconocido y valorado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/30 rounded-lg p-8">
          <div className="text-center">
            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">Nuestra Misión</h3>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              "Preservar y elevar la tradición culinaria mexicana mientras creamos un ambiente de trabajo donde cada
              persona pueda desarrollar su máximo potencial. Creemos que un equipo feliz y motivado es la clave para
              brindar experiencias excepcionales a nuestros huéspedes."
            </p>
            <div className="mt-6 flex justify-center items-center space-x-8 text-sm text-muted-foreground">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">50+</p>
                <p>Empleados Felices</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-secondary">15</p>
                <p>Años de Experiencia</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-accent">95%</p>
                <p>Retención de Personal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
