"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Bell, Gift } from "lucide-react"

export default function BlogNewsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter subscription:", email)
    alert("¡Gracias por suscribirte! Recibirás nuestras últimas recetas y noticias.")
    setEmail("")
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-border/50 shadow-lg">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="font-playfair text-3xl text-foreground">Suscríbete a Nuestro Newsletter</CardTitle>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Recibe las últimas recetas, consejos culinarios y noticias exclusivas de Flor D Vainilla directamente en
              tu correo electrónico.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Bell className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Recetas Exclusivas</h3>
                <p className="text-sm text-muted-foreground">
                  Acceso a recetas secretas de nuestros chefs que no encontrarás en ningún otro lugar
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Gift className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Ofertas Especiales</h3>
                <p className="text-sm text-muted-foreground">
                  Descuentos exclusivos para suscriptores y acceso prioritario a eventos especiales
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Contenido Semanal</h3>
                <p className="text-sm text-muted-foreground">
                  Artículos nuevos, tips de cocina y historias fascinantes cada semana en tu bandeja de entrada
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Label htmlFor="newsletter-email" className="sr-only">
                    Correo electrónico
                  </Label>
                  <Input
                    id="newsletter-email"
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
                <Button type="submit" size="lg" className="h-12 px-8">
                  Suscribirse
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Al suscribirte, aceptas recibir correos electrónicos de Flor D Vainilla. Puedes cancelar tu suscripción
                en cualquier momento. Respetamos tu privacidad.
              </p>
            </form>

            <div className="bg-primary/5 rounded-lg p-6 mt-8">
              <div className="text-center">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                  ¡Únete a Nuestra Comunidad!
                </h3>
                <p className="text-muted-foreground mb-4">
                  Más de 5,000 amantes de la cocina mexicana ya reciben nuestro newsletter
                </p>
                <div className="flex justify-center items-center space-x-8 text-sm">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">5,000+</p>
                    <p className="text-muted-foreground">Suscriptores</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-secondary">50+</p>
                    <p className="text-muted-foreground">Recetas Compartidas</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-accent">98%</p>
                    <p className="text-muted-foreground">Satisfacción</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
