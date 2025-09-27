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
import { User, Mail, Phone, FileText, Briefcase } from "lucide-react"

export default function JobApplication() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    availability: "",
    salary: "",
    message: "",
    hasCV: false,
    acceptsTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Aplicación enviada:", formData)
    alert("¡Gracias por tu interés! Revisaremos tu aplicación y nos pondremos en contacto contigo pronto.")
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">Aplicar a una Vacante</h2>
          <p className="text-lg text-muted-foreground">
            Completa el formulario y adjunta tu CV. Nos pondremos en contacto contigo para el siguiente paso.
          </p>
        </div>

        <Card className="border-border/50 shadow-lg py-4">
          <CardHeader>
            <CardTitle className="font-playfair text-2xl text-center text-foreground4">
              Formulario de Aplicación
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Información Personal */}
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

              {/* Información Laboral */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="position" className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Posición de Interés *
                  </Label>
                  <Select value={formData.position} onValueChange={(value) => handleChange("position", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una posición" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chef-linea">Chef de Línea</SelectItem>
                      <SelectItem value="mesero">Mesero/a Experimentado</SelectItem>
                      <SelectItem value="coordinador">Coordinador de Eventos</SelectItem>
                      <SelectItem value="ayudante">Ayudante de Cocina</SelectItem>
                      <SelectItem value="gerente">Gerente de Turno</SelectItem>
                      <SelectItem value="otro">Otra posición</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Años de Experiencia</Label>
                  <Select value={formData.experience} onValueChange={(value) => handleChange("experience", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu experiencia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sin-experiencia">Sin experiencia</SelectItem>
                      <SelectItem value="menos-1">Menos de 1 año</SelectItem>
                      <SelectItem value="1-2">1-2 años</SelectItem>
                      <SelectItem value="3-5">3-5 años</SelectItem>
                      <SelectItem value="mas-5">Más de 5 años</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="availability">Disponibilidad de Horario</Label>
                  <Select value={formData.availability} onValueChange={(value) => handleChange("availability", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu disponibilidad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tiempo-completo">Tiempo Completo</SelectItem>
                      <SelectItem value="medio-tiempo">Medio Tiempo</SelectItem>
                      <SelectItem value="fines-semana">Solo Fines de Semana</SelectItem>
                      <SelectItem value="noches">Solo Noches</SelectItem>
                      <SelectItem value="flexible">Horario Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary">Expectativa Salarial</Label>
                  <Input
                    id="salary"
                    value={formData.salary}
                    onChange={(e) => handleChange("salary", e.target.value)}
                    placeholder="Ej: $15,000 - $18,000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Cuéntanos sobre ti
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Describe tu experiencia, habilidades y por qué te interesa trabajar en Flor D Vainilla..."
                  rows={4}
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasCV"
                    checked={formData.hasCV}
                    onCheckedChange={(checked) => handleChange("hasCV", checked as boolean)}
                  />
                  <Label htmlFor="hasCV" className="text-sm">
                    Tengo mi CV actualizado y lo enviaré por correo electrónico
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="acceptsTerms"
                    checked={formData.acceptsTerms}
                    onCheckedChange={(checked) => handleChange("acceptsTerms", checked as boolean)}
                  />
                  <Label htmlFor="acceptsTerms" className="text-sm">
                    Acepto los términos y condiciones y el tratamiento de mis datos personales *
                  </Label>
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Nota:</strong> Después de enviar este formulario, por favor envía tu CV actualizado a{" "}
                  <span className="text-primary">rh@flordvainilla.mx</span> mencionando la posición de tu interés. Nos
                  pondremos en contacto contigo dentro de los próximos 5 días hábiles.
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full text-lg py-3" disabled={!formData.acceptsTerms}>
                Enviar Aplicación
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
