"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Users, Phone, Mail, MessageSquare } from "lucide-react"

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventTime: "",
    guests: "",
    eventType: "",
    package: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    alert("¡Gracias por tu solicitud! Te contactaremos pronto para confirmar los detalles.")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">Reserva tu Evento</h2>
          <p className="text-lg text-muted-foreground">
            Completa el formulario y nos pondremos en contacto contigo para planificar tu evento perfecto
          </p>
        </div>

        <Card className="border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="font-playfair text-2xl text-center text-foreground">
              Solicitud de Reservación
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Información Personal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
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
                    Teléfono *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="(55) 1234-5678"
                    required
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

              {/* Detalles del Evento */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="eventDate" className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Fecha del Evento *
                  </Label>
                  <Input
                    id="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => handleChange("eventDate", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="eventTime" className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Hora del Evento *
                  </Label>
                  <Input
                    id="eventTime"
                    type="time"
                    value={formData.eventTime}
                    onChange={(e) => handleChange("eventTime", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests" className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Número de Invitados *
                  </Label>
                  <Input
                    id="guests"
                    type="number"
                    value={formData.guests}
                    onChange={(e) => handleChange("guests", e.target.value)}
                    placeholder="50"
                    min="10"
                    max="150"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="eventType">Tipo de Evento *</Label>
                  <Select value={formData.eventType} onValueChange={(value) => handleChange("eventType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona el tipo de evento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cumpleanos">Cumpleaños</SelectItem>
                      <SelectItem value="aniversario">Aniversario</SelectItem>
                      <SelectItem value="boda">Boda</SelectItem>
                      <SelectItem value="graduacion">Graduación</SelectItem>
                      <SelectItem value="corporativo">Evento Corporativo</SelectItem>
                      <SelectItem value="quinceanos">XV Años</SelectItem>
                      <SelectItem value="bautizo">Bautizo</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="package">Paquete de Interés</Label>
                  <Select value={formData.package} onValueChange={(value) => handleChange("package", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un paquete" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="intima">Celebración Íntima</SelectItem>
                      <SelectItem value="tradicional">Fiesta Tradicional</SelectItem>
                      <SelectItem value="premium">Evento Premium</SelectItem>
                      <SelectItem value="personalizado">Paquete Personalizado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Detalles Adicionales
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Cuéntanos más sobre tu evento: preferencias de menú, decoración, música, alergias alimentarias, etc."
                  rows={4}
                />
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  * Campos obligatorios. Nos pondremos en contacto contigo dentro de las próximas 24 horas para
                  confirmar disponibilidad y detalles del evento.
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full text-lg py-3">
                Enviar Solicitud de Reservación
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
