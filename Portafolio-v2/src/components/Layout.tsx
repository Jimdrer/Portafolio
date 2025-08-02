"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [activeSection, setActiveSection] = useState("/")
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setActiveSection(location.pathname)
  }, [location.pathname])

  const navigationItems = [
    { path: "/", label: "INICIO" },
    { path: "/habilidades", label: "HABILIDADES" },
    { path: "/experiencia", label: "EXPERIENCIA" },
    { path: "/proyectos", label: "PROYECTOS" },
    { path: "/testimonios", label: "TESTIMONIOS" },
    { path: "/contacto", label: "CONTACTO" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <div className="font-bold text-gray-900">PORTAFOLIO</div>
                <div className="text-xs text-gray-500 flex items-center">
                  <div className="w-1 h-1 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                  Online
                </div>
              </div>
            </Link>

            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === item.path
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-green-600 hover:bg-green-50 hover:scale-110 transition-all duration-300 relative group"
                onClick={() => window.open("https://wa.me/5255123456", "_blank")}
              >
                <Phone className="h-4 w-4" />
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  WhatsApp
                </div>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-blue-600 hover:bg-blue-50 hover:scale-110 transition-all duration-300 relative group"
                onClick={() => window.open("https://linkedin.com/in/jose-espinosa", "_blank")}
              >
                <Linkedin className="h-4 w-4" />
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  LinkedIn
                </div>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-yellow-600 hover:bg-yellow-50 hover:scale-110 transition-all duration-300 relative group"
                onClick={() => navigate("/contacto")}
              >
                <Mail className="h-4 w-4" />
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Email
                </div>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-800 hover:bg-gray-50 hover:scale-110 transition-all duration-300 relative group"
                onClick={() => window.open("https://github.com/jose-espinosa", "_blank")}
              >
                <Github className="h-4 w-4" />
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  GitHub
                </div>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 z-50">
        <div className="flex justify-around py-2">
          {navigationItems.slice(0, 5).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-300 ${
                activeSection === item.path
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              <span className="text-xs font-medium">{item.label.split(" ")[0]}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-20 pb-20 md:pb-0">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">JD</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Jose Dimas Espinosa</h3>
                  <p className="text-gray-400">Frontend Developer & UX/UI Designer</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Transformando ideas en experiencias digitales excepcionales. Siempre buscando la perfección en cada
                línea de código.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg text-white">Enlaces Rápidos</h4>
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg text-white">Conecta Conmigo</h4>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all"
                  onClick={() => window.open("https://linkedin.com/in/jose-espinosa", "_blank")}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all"
                  onClick={() => window.open("https://github.com/jose-espinosa", "_blank")}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all"
                  onClick={() => navigate("/contacto")}
                >
                  <Mail className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all"
                  onClick={() => window.open("https://wa.me/5255123456", "_blank")}
                >
                  <Phone className="h-5 w-5" />
                </Button>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">jose.espinosa@email.com</p>
                <p className="text-gray-300">+52 (555) 123-4567</p>
                <p className="text-gray-300">México, Remote</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400">© 2024 Jose Dimas Alejandro Espinosa Razo</p>
                <p className="text-gray-500 text-sm">
                  Desarrollado con ❤️ usando React, Vite, Tailwind CSS y mucho café ☕
                </p>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>Hecho en México 🇲🇽</span>
                <span>•</span>
                <span>Con amor por el código 💻</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
