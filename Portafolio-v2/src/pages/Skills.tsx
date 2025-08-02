import { Code, Palette, Smartphone, Eye, Bug, Database, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Desarrollo de interfaces modernas y responsivas con React, Next.js y TypeScript",
      years: "4+ años",
      color: "from-blue-500 to-cyan-500",
      projects: "8 proyectos",
      level: 95,
    },
    {
      icon: Palette,
      title: "UX/UI Design",
      description: "Diseño centrado en el usuario con metodologías ágiles y design thinking",
      years: "3+ años",
      color: "from-purple-500 to-pink-500",
      projects: "6 proyectos",
      level: 85,
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Adaptación perfecta a todos los dispositivos y pantallas",
      years: "4+ años",
      color: "from-green-500 to-emerald-500",
      projects: "12 proyectos",
      level: 90,
    },
    {
      icon: Eye,
      title: "Attention to Detail",
      description: "Precisión en cada elemento visual y funcional",
      years: "4+ años",
      color: "from-orange-500 to-red-500",
      projects: "Todos",
      level: 98,
    },
    {
      icon: Bug,
      title: "Testing & Debug",
      description: "Testing automatizado, debugging y optimización de rendimiento",
      years: "3+ años",
      color: "from-indigo-500 to-purple-500",
      projects: "10 proyectos",
      level: 88,
    },
    {
      icon: Database,
      title: "API Integration",
      description: "Integración eficiente de servicios y manejo de datos",
      years: "3+ años",
      color: "from-teal-500 to-cyan-500",
      projects: "7 proyectos",
      level: 82,
    },
  ]

  const technologies = [
    {
      name: "HTML5",
      icon: "🌐",
      level: 95,
      color: "bg-orange-100 text-orange-600 border-orange-200",
      category: "Frontend",
    },
    { name: "CSS3", icon: "🎨", level: 90, color: "bg-blue-100 text-blue-600 border-blue-200", category: "Frontend" },
    {
      name: "JavaScript",
      icon: "⚡",
      level: 95,
      color: "bg-yellow-100 text-yellow-600 border-yellow-200",
      category: "Frontend",
    },
    { name: "React", icon: "⚛️", level: 90, color: "bg-cyan-100 text-cyan-600 border-cyan-200", category: "Frontend" },
    {
      name: "Vite",
      icon: "⚡",
      level: 85,
      color: "bg-purple-100 text-purple-600 border-purple-200",
      category: "Frontend",
    },
    {
      name: "TypeScript",
      icon: "📘",
      level: 80,
      color: "bg-blue-100 text-blue-600 border-blue-200",
      category: "Frontend",
    },
    {
      name: "Node.js",
      icon: "🟢",
      level: 75,
      color: "bg-green-100 text-green-600 border-green-200",
      category: "Backend",
    },
    {
      name: "Python",
      icon: "🐍",
      level: 70,
      color: "bg-yellow-100 text-yellow-600 border-yellow-200",
      category: "Backend",
    },
    {
      name: "Figma",
      icon: "🎯",
      level: 85,
      color: "bg-purple-100 text-purple-600 border-purple-200",
      category: "Design",
    },
    { name: "Git", icon: "📝", level: 90, color: "bg-red-100 text-red-600 border-red-200", category: "Tools" },
    { name: "WordPress", icon: "📰", level: 75, color: "bg-blue-100 text-blue-600 border-blue-200", category: "CMS" },
    { name: "Photoshop", icon: "🖼️", level: 80, color: "bg-blue-100 text-blue-600 border-blue-200", category: "Design" },
  ]

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      {/* Skills Section */}
      <section className="bg-white/70 backdrop-blur-sm relative mb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2">Expertise</Badge>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Habilidades Profesionales
              <span className="block text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
                🛠️ Competencias Técnicas
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Competencias técnicas y creativas desarrolladas a través de años de experiencia práctica, formación
              continua y proyectos desafiantes en el mundo real.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/95 backdrop-blur-sm overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                    >
                      <skill.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="text-xs bg-gray-100 mb-1">
                        {skill.years}
                      </Badge>
                      <div className="text-xs text-gray-500">{skill.projects}</div>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{skill.description}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-700">Nivel de competencia</span>
                      <span className="text-xs font-bold text-gray-900">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${skill.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  ></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-pink-50/30"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">Tech Stack</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Conocimientos Técnicos
              <span className="block text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mt-2">
                🔥 Tecnologías & Herramientas
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stack tecnológico completo con niveles de competencia verificados y experiencia práctica en proyectos
              reales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 ${tech.color} bg-white/95 backdrop-blur-sm overflow-hidden relative`}
              >
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-bl-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {tech.name}
                      </h3>
                      <Badge variant="outline" className="text-xs mt-1">
                        {tech.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-600">Competencia</span>
                      <span className="text-sm font-bold text-gray-900">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-2.5 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
