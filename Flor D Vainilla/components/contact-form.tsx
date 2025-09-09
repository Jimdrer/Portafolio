"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Mail, Phone, MessageSquare, Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Mensaje enviado:", formData)
    alert("¡Gracias por contactarnos! Te responderemos dentro de las próximas 24 horas.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      newsletter: false,
    })
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">Envíanos un Mensaje</h2>
          <p className="text-lg text-muted-foreground">
            ¿Tienes alguna pregunta o comentario? Nos encantaría escucharte y ayudarte en lo que necesites.
          </p>
        </div>

        <Card className="border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="font-playfair text-2xl text-center text-foreground">Formulario de Contacto</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Nombre Completo *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Teléfono
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="(55) 1234-5678"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Correo Electrónico *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Asunto *</Label>
                <Select value={formData.subject} onValueChange={(value) => handleChange("subject", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el motivo de tu consulta" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="reservacion">Reservación de Mesa</SelectItem>
                    <SelectItem value="evento">Organización de Evento</SelectItem>
                    <SelectItem value="trabajo">Oportunidad Laboral</SelectItem>
                    <SelectItem value="catering">Servicio de Catering</SelectItem>
                    <SelectItem value="prensa">Consulta de Prensa</SelectItem>
                    <SelectItem value="sugerencia">Sugerencia o Comentario</SelectItem>
                    <SelectItem value="queja">Queja o Reclamo</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Mensaje *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Escribe tu mensaje aquí. Incluye todos los detalles que consideres importantes para que podamos ayudarte de la mejor manera..."
                  rows={6}
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => handleChange("newsletter", checked as boolean)}
                />
                <Label htmlFor="newsletter" className="text-sm">
                  Quiero recibir el newsletter con recetas exclusivas y ofertas especiales
                </Label>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  * Campos obligatorios. Nos comprometemos a responder tu mensaje dentro de las próximas 24 horas. Tu
                  información personal será tratada con total confidencialidad.
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full text-lg py-3">
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
