"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  slug: string
  featured: boolean
}

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("todos")

  const categories = [
    { id: "todos", label: "Todos los Artículos" },
    { id: "recetas", label: "Recetas" },
    { id: "historia", label: "Historia" },
    { id: "eventos", label: "Eventos" },
    { id: "consejos", label: "Consejos" },
  ]

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "El Arte del Mole Poblano: 24 Ingredientes, Una Tradición",
      excerpt:
        "Descubre la historia fascinante detrás de nuestro mole poblano y aprende sobre los 24 ingredientes que lo hacen único. Una receta que ha pasado de generación en generación.",
      category: "historia",
      author: "Chef María González",
      date: "15 de Noviembre, 2023",
      readTime: "8 min",
      image: "/mole-poblano-elegante-plato-gourmet-mexicano.jpg",
      slug: "arte-mole-poblano-24-ingredientes",
      featured: true,
    },
    {
      id: 2,
      title: "Cómo Preparar el Guacamole Perfecto: Secretos de la Casa",
      excerpt:
        "El guacamole es más que aguacate machacado. Te compartimos los secretos de nuestro guacamole Flor D Vainilla, incluyendo el toque especial de granada que lo hace único.",
      category: "recetas",
      author: "Chef Carlos Mendoza",
      date: "10 de Noviembre, 2023",
      readTime: "5 min",
      image: "/guacamole-gourmet-presentacion-artistica.jpg",
      slug: "guacamole-perfecto-secretos-casa",
      featured: false,
    },
    {
      id: 3,
      title: "La Historia de los Chiles en Nogada: Platillo Patriótico",
      excerpt:
        "Conoce la fascinante historia detrás de los chiles en nogada, el platillo que representa los colores de la bandera mexicana y que preparamos con orgullo en temporada.",
      category: "historia",
      author: "Chef Ana Rodríguez",
      date: "5 de Noviembre, 2023",
      readTime: "6 min",
      image: "/chiles-en-nogada-gourmet-presentacion-elegante.jpg",
      slug: "historia-chiles-nogada-platillo-patriotico",
      featured: false,
    },
    {
      id: 4,
      title: "Evento Especial: Noche de Mezcales Artesanales",
      excerpt:
        "Te invitamos a nuestra próxima cata de mezcales artesanales oaxaqueños. Una experiencia sensorial única acompañada de maridajes especialmente diseñados por nuestro chef.",
      category: "eventos",
      author: "Equipo Flor D Vainilla",
      date: "1 de Noviembre, 2023",
      readTime: "3 min",
      image: "/bar-restaurante-mexicano-mezcal-tequila-decoracion.jpg",
      slug: "evento-noche-mezcales-artesanales",
      featured: false,
    },
    {
      id: 5,
      title: "Técnicas Gourmet para Cochinita Pibil Auténtica",
      excerpt:
        "Aprende las técnicas tradicionales y los toques gourmet que aplicamos a nuestra cochinita pibil yucateca. Desde la marinada hasta la cocción en hoja de plátano.",
      category: "consejos",
      author: "Chef María González",
      date: "28 de Octubre, 2023",
      readTime: "10 min",
      image: "/cochinita-pibil-gourmet-presentacion-elegante.jpg",
      slug: "tecnicas-gourmet-cochinita-pibil-autentica",
      featured: true,
    },
    {
      id: 6,
      title: "El Secreto del Flan de Vainilla Bourbon Perfecto",
      excerpt:
        "Nuestro postre estrella tiene secretos que hoy compartimos contigo. Desde la selección de la vainilla de Madagascar hasta el punto exacto del caramelo de piloncillo.",
      category: "recetas",
      author: "Chef Carlos Mendoza",
      date: "25 de Octubre, 2023",
      readTime: "7 min",
      image: "/flan-vainilla-bourbon-postre-gourmet.jpg",
      slug: "secreto-flan-vainilla-bourbon-perfecto",
      featured: false,
    },
    {
      id: 7,
      title: "Celebrando 15 Años de Tradición Culinaria",
      excerpt:
        "Reflexionamos sobre nuestro viaje de 15 años preservando y elevando la cocina mexicana tradicional. Historias, anécdotas y agradecimientos a nuestra comunidad.",
      category: "eventos",
      author: "Familia Fundadora",
      date: "20 de Octubre, 2023",
      readTime: "12 min",
      image: "/interior-restaurante-mexicano-elegante-decoracion-.jpg",
      slug: "celebrando-15-anos-tradicion-culinaria",
      featured: false,
    },
    {
      id: 8,
      title: "Maridajes Perfectos: Vinos Mexicanos y Cocina Tradicional",
      excerpt:
        "Descubre cómo maridar vinos mexicanos con nuestros platillos tradicionales. Una guía completa para potenciar los sabores de ambos mundos gastronómicos.",
      category: "consejos",
      author: "Sommelier Patricia López",
      date: "15 de Octubre, 2023",
      readTime: "9 min",
      image: "/pescado-veracruzana-gourmet-presentacion-elegante.jpg",
      slug: "maridajes-perfectos-vinos-mexicanos-cocina",
      featured: false,
    },
  ]

  const filteredPosts =
    selectedCategory === "todos" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

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
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {selectedCategory === "todos" && featuredPost && (
          <div className="mb-16">
            <h2 className="font-playfair text-2xl font-bold text-foreground mb-8 text-center">Artículo Destacado</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-border/50">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-square overflow-hidden">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {categories.find((cat) => cat.id === featuredPost.category)?.label}
                    </Badge>
                    <Badge variant="secondary">Destacado</Badge>
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${featuredPost.slug}`} className="flex items-center">
                      Leer Artículo Completo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border/50"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {categories.find((cat) => cat.id === post.category)?.label}
                  </Badge>
                  {post.featured && <Badge variant="secondary">Destacado</Badge>}
                </div>
                <h3 className="font-playfair text-lg font-semibold text-foreground line-clamp-2">{post.title}</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    {post.author}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <Button size="sm" variant="ghost" asChild>
                    <Link href={`/blog/${post.slug}`} className="flex items-center">
                      Leer más
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Cargar Más Artículos
          </Button>
        </div>
      </div>
    </section>
  )
}
