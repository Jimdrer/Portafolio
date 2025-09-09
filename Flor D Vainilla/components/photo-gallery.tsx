"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, ZoomIn } from "lucide-react"

interface Photo {
  id: number
  src: string
  alt: string
  category: string
  title: string
  description: string
}

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("todos")
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  const categories = [
    { id: "todos", label: "Todas las Fotos", count: 24 },
    { id: "platillos", label: "Platillos", count: 8 },
    { id: "ambiente", label: "Ambiente", count: 6 },
    { id: "eventos", label: "Eventos", count: 6 },
    { id: "equipo", label: "Nuestro Equipo", count: 4 },
  ]

  const photos: Photo[] = [
    // Platillos
    {
      id: 1,
      src: "/mole-poblano-elegante-plato-gourmet-mexicano.jpg",
      alt: "Mole Poblano de la Casa",
      category: "platillos",
      title: "Mole Poblano de la Casa",
      description: "Nuestro platillo estrella con 24 ingredientes tradicionales",
    },
    {
      id: 2,
      src: "/cochinita-pibil-gourmet-presentacion-elegante.jpg",
      alt: "Cochinita Pibil Yucateca",
      category: "platillos",
      title: "Cochinita Pibil Yucateca",
      description: "Cerdo marinado en achiote, cocido en hoja de plátano",
    },
    {
      id: 3,
      src: "/chiles-en-nogada-gourmet-presentacion-elegante.jpg",
      alt: "Chiles en Nogada",
      category: "platillos",
      title: "Chiles en Nogada",
      description: "Platillo tradicional con los colores de la bandera mexicana",
    },
    {
      id: 4,
      src: "/guacamole-gourmet-presentacion-artistica.jpg",
      alt: "Guacamole Flor D Vainilla",
      category: "platillos",
      title: "Guacamole Flor D Vainilla",
      description: "Aguacate hass con nuestro toque especial de granada",
    },
    {
      id: 5,
      src: "/pescado-veracruzana-gourmet-presentacion-elegante.jpg",
      alt: "Pescado a la Veracruzana",
      category: "platillos",
      title: "Pescado a la Veracruzana",
      description: "Huachinango fresco en salsa tradicional veracruzana",
    },
    {
      id: 6,
      src: "/flan-vainilla-bourbon-postre-gourmet.jpg",
      alt: "Flan de Vainilla Bourbon",
      category: "platillos",
      title: "Flan de Vainilla Bourbon",
      description: "Postre tradicional con vainilla de Madagascar",
    },
    {
      id: 7,
      src: "/tres-leches-coco-postre-mexicano-gourmet.jpg",
      alt: "Tres Leches de Coco",
      category: "platillos",
      title: "Tres Leches de Coco",
      description: "Bizcocho empapado con coco rallado y canela",
    },
    {
      id: 8,
      src: "/enchiladas-suizas-verdes-presentacion-gourmet.jpg",
      alt: "Enchiladas Suizas Verdes",
      category: "platillos",
      title: "Enchiladas Suizas Verdes",
      description: "Tortillas rellenas gratinadas con queso manchego",
    },

    // Ambiente
    {
      id: 9,
      src: "/interior-restaurante-mexicano-elegante-decoracion-.jpg",
      alt: "Salón Principal",
      category: "ambiente",
      title: "Salón Principal",
      description: "Ambiente cálido y acogedor con decoración tradicional",
    },
    {
      id: 10,
      src: "/terraza-restaurante-mexicano-plantas-decoracion.jpg",
      alt: "Terraza Jardín",
      category: "ambiente",
      title: "Terraza Jardín",
      description: "Espacio al aire libre rodeado de plantas mexicanas",
    },
    {
      id: 11,
      src: "/cocina-abierta-restaurante-gourmet-chefs-trabajand.jpg",
      alt: "Cocina Abierta",
      category: "ambiente",
      title: "Cocina Abierta",
      description: "Observa a nuestros chefs crear obras maestras culinarias",
    },
    {
      id: 12,
      src: "/bar-restaurante-mexicano-mezcal-tequila-decoracion.jpg",
      alt: "Barra de Mezcales",
      category: "ambiente",
      title: "Barra de Mezcales",
      description: "Selección premium de mezcales y tequilas artesanales",
    },
    {
      id: 13,
      src: "/salon-privado-eventos-restaurante-elegante.jpg",
      alt: "Salón Privado",
      category: "ambiente",
      title: "Salón Privado",
      description: "Espacio íntimo para eventos especiales",
    },
    {
      id: 14,
      src: "/entrada-restaurante-mexicano-fachada-elegante.jpg",
      alt: "Entrada Principal",
      category: "ambiente",
      title: "Entrada Principal",
      description: "Fachada que combina tradición y elegancia moderna",
    },

    // Eventos
    {
      id: 15,
      src: "/boda-mexicana-restaurante-decoracion-flores.jpg",
      alt: "Boda Tradicional",
      category: "eventos",
      title: "Boda Tradicional",
      description: "Celebración de boda con decoración mexicana auténtica",
    },
    {
      id: 16,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Celebración de Cumpleaños",
      category: "eventos",
      title: "Celebración de Cumpleaños",
      description: "Fiesta familiar con mariachi y ambiente festivo",
    },
    {
      id: 17,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Evento Corporativo",
      category: "eventos",
      title: "Evento Corporativo",
      description: "Reunión empresarial en ambiente profesional y cálido",
    },
    {
      id: 18,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Celebración de XV Años",
      category: "eventos",
      title: "Celebración de XV Años",
      description: "Quinceañera tradicional con todos los detalles especiales",
    },
    {
      id: 19,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Aniversario Romántico",
      category: "eventos",
      title: "Aniversario Romántico",
      description: "Cena íntima para celebrar momentos especiales",
    },
    {
      id: 20,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Graduación Familiar",
      category: "eventos",
      title: "Graduación Familiar",
      description: "Celebración de logros académicos en familia",
    },

    // Equipo
    {
      id: 21,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Chef Ejecutivo",
      category: "equipo",
      title: "Chef Ejecutivo",
      description: "Nuestro chef principal creando experiencias culinarias",
    },
    {
      id: 22,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Equipo de Cocina",
      category: "equipo",
      title: "Equipo de Cocina",
      description: "Nuestro talentoso equipo culinario en acción",
    },
    {
      id: 23,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Equipo de Servicio",
      category: "equipo",
      title: "Equipo de Servicio",
      description: "Personal dedicado a brindar la mejor experiencia",
    },
    {
      id: 24,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Familia Fundadora",
      category: "equipo",
      title: "Familia Fundadora",
      description: "Los fundadores que iniciaron esta tradición culinaria",
    },
  ]

  const filteredPhotos =
    selectedCategory === "todos" ? photos : photos.filter((photo) => photo.category === selectedCategory)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center gap-2"
            >
              {category.label}
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <Card
              key={photo.id}
              className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-sm">{photo.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={() => setSelectedPhoto(null)}
              >
                <X className="w-6 h-6" />
              </Button>
              <img
                src={selectedPhoto.src || "/placeholder.svg"}
                alt={selectedPhoto.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white font-playfair text-xl font-semibold mb-2">{selectedPhoto.title}</h3>
                <p className="text-white/80 text-sm">{selectedPhoto.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-muted/30 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">¿Te gustó lo que viste?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Ven a vivir la experiencia Flor D Vainilla en persona. Reserva tu mesa y descubre por qué somos el destino
              favorito para los amantes de la auténtica cocina mexicana gourmet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Hacer Reservación</Button>
              <Button size="lg" variant="outline">
                Ver Nuestro Menú
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
