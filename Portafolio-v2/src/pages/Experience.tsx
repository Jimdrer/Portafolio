import { Award, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experience = [
    {
      company: "Freelance Developer",
      position: "Senior Full-Stack Developer & UX/UI Designer",
      period: "2022 - Presente",
      description:
        "Desarrollo de soluciones web personalizadas para pequeñas y medianas empresas, desde la conceptualización hasta el deployment y mantenimiento.",
      achievements: [
        "15+ proyectos completados exitosamente",
        "100% satisfacción del cliente verificada",
        "Reducción promedio del 30% en tiempo de carga",
        "Aumento promedio del 40% en conversiones",
        "Implementación de metodologías ágiles",
        "Mentoría a 5+ desarrolladores junior",
      ],
      color: "from-blue-500 to-purple-500",
      technologies: ["React", "Vite", "Node.js", "TypeScript", "Figma"],
    },
    {
      company: "Continuous Learning & Development",
      position: "Self-Taught Developer & Community Contributor",
      period: "2021 - Presente",
      description:
        "Formación continua a través de plataformas reconocidas, participación activa en la comunidad de desarrollo y contribuciones open source.",
      achievements: [
        "6+ certificaciones profesionales obtenidas",
        "Participación en 10+ hackathons y eventos tech",
        "20+ contribuciones a proyectos open source",
        "Mentoría a desarrolladores junior en comunidades",
        "Speaker en 3 eventos locales de tecnología",
        "Mantenimiento de blog técnico con 50+ artículos",
      ],
      color: "from-green-500 to-teal-500",
      technologies: ["Python", "Vue.js", "WordPress", "Git", "Docker"],
    },
  ]

  const certifications = [
    { name: "Microsoft Azure Fundamentals", icon: "☁️", year: "2024", issuer: "Microsoft", verified: true },
    { name: "FreeCodeCamp - Responsive Web Design", icon: "📱", year: "2023", issuer: "FreeCodeCamp", verified: true },
    { name: "Cisco - JavaScript Essentials", icon: "🔧", year: "2023", issuer: "Cisco", verified: true },
    { name: "Udemy - Advanced React Development", icon: "⚛️", year: "2024", issuer: "Udemy", verified: true },
    { name: "Google UX Design Certificate", icon: "🎨", year: "2023", issuer: "Google", verified: true },
    { name: "Meta Frontend Developer", icon: "💻", year: "2024", issuer: "Meta", verified: true },
  ]

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      {/* Experience Section */}
      <section className="bg-white/70 backdrop-blur-sm mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2">Career</Badge>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Experiencia Profesional
              <span className="block text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 mt-2">
                💼 Trayectoria & Logros
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trayectoria profesional marcada por el crecimiento continuo, la innovación y el impacto positivo en cada
              proyecto
            </p>
          </div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl overflow-hidden bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3 gap-0">
                    <div
                      className={`lg:col-span-1 p-8 bg-gradient-to-br ${exp.color} text-white relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="relative z-10">
                        <div className="flex items-center mb-4">
                          <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
                          <Badge className="bg-white/20 text-white border-white/30">{exp.period}</Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{exp.position}</h3>
                        <p className="text-lg font-medium opacity-90 mb-4">{exp.company}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} className="bg-white/20 text-white text-xs border-white/30">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-2 p-8">
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">{exp.description}</p>
                      <div className="space-y-4">
                        <h4 className="font-bold text-gray-900 flex items-center text-lg">
                          <Award className="w-6 h-6 text-yellow-500 mr-3" />
                          Logros Destacados
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start group">
                              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                              <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-2">Education</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Certificaciones & Formación
              <span className="block text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 mt-2">
                🎓 Aprendizaje Continuo
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Compromiso constante con el aprendizaje y la actualización profesional a través de certificaciones
              verificadas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/95 backdrop-blur-sm group overflow-hidden"
              >
                <CardContent className="p-6 relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                      {cert.icon}
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="text-xs mb-1">
                        {cert.year}
                      </Badge>
                      {cert.verified && (
                        <div className="flex items-center text-green-600">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          <span className="text-xs">Verificado</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
                  <p className="text-xs text-gray-500">Certificación Profesional</p>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
