"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, Download } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-blue-500/5 to-purple-500/5"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2">Let's Connect</Badge>
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para trabajar juntos?
            <span className="block text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mt-2">
              🤝 Hagamos algo increíble
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
            Estoy disponible para nuevos proyectos, oportunidades laborales y colaboraciones emocionantes.
            <br />
            <span className="text-yellow-300">¡Transformemos tus ideas en realidad digital!</span>
          </p>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white mb-8">Información de Contacto</h2>

              <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-lg">Email Profesional</h3>
                  <p className="text-gray-300 mb-4">Respuesta garantizada en 24h</p>
                  <a
                    href="mailto:jose.espinosa@email.com"
                    className="text-blue-300 font-medium hover:text-blue-200 transition-colors"
                  >
                    jose.espinosa@email.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-lg">WhatsApp</h3>
                  <p className="text-gray-300 mb-4">Disponible de 9:00 - 18:00</p>
                  <a
                    href="https://wa.me/5255123456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-300 font-medium hover:text-green-200 transition-colors"
                  >
                    +52 (555) 123-4567
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-lg">Ubicación</h3>
                  <p className="text-gray-300 mb-4">Trabajo remoto disponible</p>
                  <p className="text-purple-300 font-medium">México, Remote Worldwide</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Envíame un Mensaje</h2>

              <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-md">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                      <p className="text-gray-300">Te responderé en las próximas 24 horas.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                            Nombre Completo
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="Tu nombre"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="tu@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
                          Asunto
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="¿En qué puedo ayudarte?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                          Mensaje
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                          placeholder="Cuéntame sobre tu proyecto..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-lg font-medium transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Enviando...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <Send className="mr-2 h-5 w-5" />
                            Enviar Mensaje
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all hover:scale-105 group text-lg px-8 py-4"
              onClick={() => window.open("mailto:jose.espinosa@email.com", "_blank")}
            >
              <Mail className="mr-3 h-6 w-6 group-hover:animate-bounce" />
              Enviar Email
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 bg-transparent hover:scale-105 transition-all shadow-xl text-lg px-8 py-4"
              onClick={() => window.open("https://wa.me/5255123456", "_blank")}
            >
              <Phone className="mr-3 h-6 w-6" />
              WhatsApp
            </Button>
          </div>

          <div className="text-center">
            <p className="text-gray-300 mb-4">¿Prefieres descargar mi CV?</p>
            <Button
              variant="outline"
              className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 bg-transparent hover:scale-105 transition-all shadow-xl"
              onClick={() => window.open("/cv-jose-espinosa.pdf", "_blank")}
            >
              <Download className="mr-2 h-5 w-5" />
              Descargar Curriculum
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
