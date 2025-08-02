"use client"

import { Star, ExternalLink, Github, Code, TrendingUp, Clock, Users, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "Sweet Cupcake E-Commerce",
      category: "Full-Stack Development",
      description:
        "Plataforma de comercio electrónico completa con sistema de pagos, gestión de inventario y panel administrativo. Diseño atractivo y experiencia de usuario optimizada para maximizar conversiones.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
      metrics: ["40% ↗ conversiones", "500+ usuarios activos", "99.9% uptime", "4.8★ rating"],
      status: "En producción",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center",
      color: "bg-gradient-to-br from-pink-100 to-rose-100",
      link: "#",
      featured: true,
      timeline: "3 meses",
      client: "Panadería Local",
    },
    {
      title: "Blue Extinction Conservation",
      category: "Mobile & Web Application",
      description:
        "Aplicación educativa sobre conservación marina con realidad aumentada, gamificación y contenido interactivo para concienciar sobre la vida marina y el cambio climático.",
      technologies: ["React Native", "Three.js", "Firebase", "AR.js", "WebGL"],
      metrics: ["10K+ descargas", "4.8★ rating", "Featured en App Store", "85% retention"],
      status: "Publicado",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center",
      color: "bg-gradient-to-br from-blue-100 to-cyan-100",
      link: "#",
      featured: true,
      timeline: "6 meses",
      client: "ONG Ambiental",
    },
    {
      title: "Interactive Pokédex",
      category: "Frontend Development",
      description:
        "Aplicación web interactiva con API REST, búsqueda avanzada, favoritos persistentes y animaciones fluidas inspiradas en el universo Pokémon. Incluye modo batalla simulado.",
      technologies: ["Vue.js", "REST API", "LocalStorage", "CSS Animations", "PWA"],
      metrics: ["2K+ usuarios únicos", "95% satisfacción", "Open source", "50+ contributors"],
      status: "Completado",
      image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=300&fit=crop&crop=center",
      color: "bg-gradient-to-br from-red-100 to-yellow-100",
      link: "#",
      featured: false,
      timeline: "2 meses",
      client: "Proyecto Personal",
    },
    {
      title: "MTB Adventure Store",
      category: "E-Commerce Development",
      description:
        "Tienda online especializada en mountain biking con catálogo interactivo, comparador de productos, sistema de reseñas y configurador 3D de bicicletas.",
      technologies: ["React", "CSS3", "Stripe", "Node.js", "Three.js"],
      metrics: ["300+ productos", "85% conversión", "Mobile-first", "2.5s load time"],
      status: "Completado",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=center",
      color: "bg-gradient-to-br from-green-100 to-emerald-100",
      link: "#",
      featured: false,
      timeline: "4 meses",
      client: "Tienda Deportiva",
    },
    {
      title: "Merkadito Local Marketplace",
      category: "Marketplace Platform",
      description:
        "Plataforma de marketplace local que conecta pequeños comerciantes con la comunidad, promoviendo el comercio local con sistema de geolocalización y pagos seguros.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      metrics: ["50+ comerciantes", "Local impact", "Community driven", "200+ productos"],
      status: "Completado",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      color: "bg-gradient-to-br from-yellow-100 to-orange-100",
      link: "#",
      featured: false,
      timeline: "3 meses",
      client: "Comunidad Local",
    },
    {
      title: "Flor D Vainilla Bakery",
      category: "WordPress Development",
      description:
        "Sitio web corporativo para panadería artesanal con galería de productos, sistema de pedidos online, blog de recetas y integración con redes sociales.",
      technologies: ["WordPress", "PHP", "MySQL", "Custom Theme", "WooCommerce"],
      metrics: ["200% ↗ pedidos online", "SEO optimized", "Mobile responsive", "3.2s load time"],
      status: "Completado",
      image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=400&h=300&fit=crop&crop=center",
      color: "bg-gradient-to-br from-purple-100 to-pink-100",
      link: "#",
      featured: false,
      timeline: "2 meses",
      client: "Panadería Artesanal",
    },
  ]

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2">Portfolio</Badge>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Proyectos Destacados
              <span className="block text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mt-2">
                🚀💡 Casos de Éxito
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Selección de trabajos que demuestran mis capacidades técnicas, creatividad y enfoque en resultados
              medibles
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              Proyectos Destacados
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {projects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <Card
                    key={index}
                    className={`group hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-0 ${project.color} overflow-hidden relative`}
                  >
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-yellow-500 text-white shadow-lg">
                        <Star className="w-3 h-3 mr-1" />
                        Destacado
                      </Badge>
                    </div>

                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <Badge variant="outline" className="bg-white/90 text-gray-700 border-white/50">
                          {project.category}
                        </Badge>
                        <Badge
                          className={
                            project.status === "En producción"
                              ? "bg-green-500 text-white shadow-lg"
                              : "bg-blue-500 text-white shadow-lg"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <div className="text-right text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {project.timeline}
                          </div>
                          <div className="flex items-center mt-1">
                            <Users className="w-4 h-4 mr-1" />
                            {project.client}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Code className="w-4 h-4 mr-2" />
                          Stack Tecnológico:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="bg-white/80 hover:bg-white transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                          Resultados Clave:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.metrics.map((metric, metricIndex) => (
                            <div
                              key={metricIndex}
                              className="flex items-center text-sm text-gray-700 bg-white/60 rounded-lg p-2"
                            >
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              {metric}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 group-hover:bg-white/90 group-hover:scale-105 transition-all bg-transparent"
                          onClick={() => window.open(project.link, "_blank")}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Ver Proyecto
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group-hover:bg-white/90 group-hover:scale-105 transition-all bg-transparent"
                          onClick={() => window.open("#", "_blank")}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Rocket className="w-6 h-6 text-blue-500 mr-2" />
              Otros Proyectos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <Card
                    key={index}
                    className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border-0 ${project.color} overflow-hidden`}
                  >
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Badge
                          className={
                            project.status === "Completado"
                              ? "bg-green-500 text-white shadow-lg"
                              : "bg-blue-500 text-white shadow-lg"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {project.timeline}
                        </Badge>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="text-xs bg-white/80">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="secondary" className="text-xs bg-white/80">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        {project.metrics.slice(0, 2).map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-xs text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            {metric}
                          </div>
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full group-hover:bg-white/90 group-hover:scale-105 transition-all bg-transparent"
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver Detalles
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
