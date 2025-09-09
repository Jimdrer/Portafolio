import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function EventTestimonials() {
  const testimonials = [
    {
      name: "María González",
      event: "Boda - 120 invitados",
      rating: 5,
      comment:
        "Flor D Vainilla hizo de nuestra boda un sueño hecho realidad. La comida estuvo espectacular y el servicio fue impecable. Todos nuestros invitados siguen hablando de lo delicioso que estuvo todo.",
      date: "Octubre 2023",
    },
    {
      name: "Carlos Mendoza",
      event: "Evento Corporativo - 80 personas",
      rating: 5,
      comment:
        "Organizamos nuestro evento anual de empresa aquí y superó todas nuestras expectativas. La atención al detalle y la calidad de los alimentos fueron excepcionales. Definitivamente regresaremos.",
      date: "Septiembre 2023",
    },
    {
      name: "Ana Rodríguez",
      event: "XV Años - 150 invitados",
      rating: 5,
      comment:
        "Los XV años de mi hija fueron perfectos gracias al equipo de Flor D Vainilla. Desde la planificación hasta la ejecución, todo fue maravilloso. El mariachi y la comida crearon una atmósfera mágica.",
      date: "Agosto 2023",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">Lo que Dicen Nuestros Clientes</h2>
          <p className="text-lg text-muted-foreground">
            Testimonios reales de familias que confiaron en nosotros para sus momentos más especiales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary/30 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.comment}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
              ¿Listo para crear recuerdos inolvidables?
            </h3>
            <p className="text-muted-foreground mb-6">
              Únete a las más de 500 familias que han celebrado sus momentos especiales con nosotros
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Eventos Realizados</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-secondary">98%</p>
                <p className="text-sm text-muted-foreground">Satisfacción del Cliente</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">15</p>
                <p className="text-sm text-muted-foreground">Años de Experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
