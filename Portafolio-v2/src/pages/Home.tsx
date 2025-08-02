"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  Download,
  Play,
  ArrowRight,
  MapPin,
  Lightbulb,
  Zap,
  Coffee,
  Code,
  ChevronDown,
  Rocket,
  Calendar,
  Heart,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    satisfaction: 0,
    technologies: 0,
  })
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)
    // Animate counters
    const timer = setTimeout(() => {
      setCounters({
        projects: 15,
        experience: 4,
        satisfaction: 100,
        technologies: 12,
      })
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleViewProjects = () =>{
    router.push("/proyectos");
  };

  const stats = [
    { label: "Proyectos Completados", value: counters.projects, suffix: "+", icon: Rocket, color: "text-blue-600" },
    { label: "Años de Experiencia", value: counters.experience, suffix: "+", icon: Calendar, color: "text-purple-600" },
    {
      label: "Satisfacción del Cliente",
      value: counters.satisfaction,
      suffix: "%",
      icon: Heart,
      color: "text-green-600",
    },
    { label: "Tecnologías Dominadas", value: counters.technologies, suffix: "+", icon: Code, color: "text-orange-600" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-purple-50/20 to-pink-50/20"></div>

      <div className="max-w-7xl mx-auto relative w-full">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2 space-y-8">
            <div
              className={`space-y-6 transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full shadow-sm border border-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="font-medium">Disponible para trabajar</span>
                </div>
                <div className="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  <MapPin className="w-4 h-4 mr-1" />
                  Remote / México
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium">🇪🇸 Español</span>
                  </div>
                  <div className="flex items-center bg-red-100 text-red-700 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium">🇺🇸 English</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Jose Dimas Alejandro
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                    Espinosa Razo
                  </span>
                </h1>

                <div className="flex items-center space-x-2 text-lg">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1">
                    Senior Frontend Developer
                  </Badge>
                  <Badge variant="outline" className="border-purple-300 text-purple-700">
                    UX/UI Designer
                  </Badge>
                </div>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed">
                Especializado en crear <span className="font-semibold text-blue-600">aplicaciones web escalables</span>,
                centradas en el usuario y con un enfoque en{" "}
                <span className="font-semibold text-purple-600">rendimiento y accesibilidad</span>. Transformo ideas en
                experiencias digitales excepcionales.
              </p>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div
                        className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <stat.icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                      <div className={`text-2xl font-bold ${stat.color} transition-all duration-1000`}>
                        {stat.value}
                        {stat.suffix}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="prose prose-gray max-w-none text-gray-600">
                <p className="flex items-start space-x-2">
                  <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Con más de <strong className="text-gray-800">4 años de experiencia</strong> y{" "}
                    <strong className="text-gray-800">15+ proyectos completados</strong>, he trabajado con tecnologías
                    como JavaScript, React, Vite, Node.js, Vue.js, Python, Figma y Photoshop. Me mantengo actualizado
                    constantemente con las últimas tendencias y mejores prácticas.
                  </span>
                </p>
              </div>
            </div>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
                onClick={() => window.open("/cv-jose-espinosa.pdf", "_blank")}
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Descargar CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent hover:scale-105 transition-all group"
                onClick={() => window.open("https://demo-reel.com", "_blank")}
              >
                <Play className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Ver Demo Reel
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent hover:scale-105 transition-all group"
                onClick={handleViewProjects}
              >
                <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Ver Proyectos
              </Button>
            </div>
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="relative flex justify-center">
              <div className="relative group">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                  <div className="w-full h-full rounded-full bg-white p-2">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                      alt="Jose Dimas Alejandro Espinosa Razo"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                  <span className="text-2xl">👋</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div className="absolute top-1/2 -left-8 w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1000">
                  <Coffee className="h-5 w-5 text-white" />
                </div>
                <div className="absolute top-1/4 -right-8 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg animate-pulse delay-500">
                  <Code className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                  Impacto Profesional
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Proyectos Entregados</span>
                    <span className="font-bold text-blue-600 text-lg">15+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Satisfacción Cliente</span>
                    <span className="font-bold text-purple-600 text-lg">100%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Tiempo Promedio</span>
                    <span className="font-bold text-green-600 text-lg">-30%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                    <span className="text-gray-700 font-medium">Conversiones</span>
                    <span className="font-bold text-orange-600 text-lg">+40%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
