"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      position: "CEO, Sweet Cupcake",
      content:
        "Jose transformó completamente nuestro negocio online. Las ventas aumentaron un 40% en los primeros 3 meses. Su atención al detalle y profesionalismo son excepcionales.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
    },
    {
      name: "Carlos Mendoza",
      position: "Director, ONG Blue Ocean",
      content:
        "La aplicación que desarrolló Jose ha sido fundamental para nuestra misión de conservación. Su creatividad y habilidades técnicas superaron nuestras expectativas.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    },
    {
      name: "Ana Rodríguez",
      position: "Gerente, MTB Adventure",
      content:
        "Profesional, creativo y siempre dispuesto a ir más allá. Jose entregó un proyecto que no solo cumplió, sino que superó todos nuestros requisitos.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    },
    {
      name: "Roberto Silva",
      position: "Fundador, Tech Startup",
      content:
        "Trabajar con Jose fue una experiencia increíble. Su capacidad para entender nuestras necesidades y traducirlas en código funcional es impresionante.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    },
    {
      name: "Laura Martínez",
      position: "Marketing Manager, E-commerce",
      content:
        "La plataforma que desarrolló Jose aumentó nuestras conversiones significativamente. Su enfoque en UX/UI realmente marca la diferencia.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face",
    },
    {
      name: "Diego Hernández",
      position: "CTO, Fintech Company",
      content:
        "Jose demostró un dominio técnico excepcional y una capacidad única para resolver problemas complejos. Definitivamente lo recomendaría.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
    },
  ]

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2">
              Testimonials
            </Badge>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Lo que dicen mis clientes
              <span className="block text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mt-2">
                💬 Testimonios Reales
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              La satisfacción de mis clientes es mi mayor logro. Aquí algunas experiencias de trabajo conjunto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-15 h-15 rounded-full mr-4 border-2 border-gray-200"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <Quote className="w-8 h-8 text-gray-300 absolute -top-2 -left-2" />
                    <p className="text-gray-700 leading-relaxed italic pl-6">"{testimonial.content}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Quieres ser el próximo testimonio?</h3>
              <p className="text-gray-600 mb-6">
                Trabajemos juntos para crear algo increíble que supere tus expectativas.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => (window.location.href = "/contacto")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
                >
                  Iniciar Proyecto
                </button>
                <button
                  onClick={() => window.open("https://wa.me/5255123456", "_blank")}
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                >
                  Consulta Gratuita
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
