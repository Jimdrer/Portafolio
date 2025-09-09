import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"

interface BlogPostProps {
  slug: string
}

export default function BlogPost({ slug }: BlogPostProps) {
  // En una aplicación real, esto vendría de una base de datos o CMS
  const post = {
    title: "El Arte del Mole Poblano: 24 Ingredientes, Una Tradición",
    content: `
      <p>El mole poblano es sin duda uno de los platillos más emblemáticos de la cocina mexicana, y en Flor D Vainilla lo preparamos siguiendo una receta que ha pasado de generación en generación por más de 200 años.</p>
      
      <h2>La Historia Detrás del Mole</h2>
      <p>La leyenda cuenta que el mole poblano fue creado en el Convento de Santa Rosa en Puebla por Sor Andrea de la Asunción en el siglo XVII. Sin embargo, la realidad es que este platillo es el resultado de una fusión culinaria que combina ingredientes prehispánicos con especias traídas por los españoles.</p>
      
      <h2>Los 24 Ingredientes Sagrados</h2>
      <p>Nuestro mole poblano contiene exactamente 24 ingredientes, cada uno con un propósito específico:</p>
      
      <h3>Chiles (La Base del Sabor)</h3>
      <ul>
        <li>Chile ancho - Aporta dulzor y color</li>
        <li>Chile mulato - Añade profundidad</li>
        <li>Chile pasilla - Contribuye con un sabor ahumado</li>
        <li>Chile chipotle - Da el toque picante</li>
      </ul>
      
      <h3>Especias y Aromáticos</h3>
      <ul>
        <li>Canela de Ceylon</li>
        <li>Clavo de olor</li>
        <li>Pimienta negra</li>
        <li>Anís estrella</li>
        <li>Comino</li>
      </ul>
      
      <h2>El Proceso de Preparación</h2>
      <p>La preparación de nuestro mole es un ritual que toma más de 6 horas. Cada ingrediente se tuesta por separado para desarrollar sus sabores únicos antes de ser molido en metate de piedra volcánica.</p>
      
      <p>El secreto está en el balance perfecto entre lo dulce del chocolate y el piloncillo, lo picante de los chiles, y lo aromático de las especias. Es un equilibrio que solo se logra con años de experiencia y mucho amor por la tradición.</p>
      
      <h2>Nuestro Toque Especial</h2>
      <p>En Flor D Vainilla, añadimos un toque especial a nuestra receta tradicional: utilizamos chocolate orgánico de Tabasco y almendras de Marcona españolas, elevando este platillo ancestral a una experiencia gourmet sin perder su esencia tradicional.</p>
      
      <p>Te invitamos a probar nuestro mole poblano y experimentar por ti mismo por qué este platillo ha conquistado paladares durante siglos. Cada bocado es un viaje a través de la historia culinaria de México.</p>
    `,
    category: "historia",
    author: "Chef María González",
    date: "15 de Noviembre, 2023",
    readTime: "8 min",
    image: "/mole-poblano-elegante-plato-gourmet-mexicano.jpg",
  }

  return (
    <article className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <div className="mb-12">
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="flex items-center gap-4 mb-6">
            <Badge variant="outline">{post.category}</Badge>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </span>
            </div>
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            {post.title}
          </h1>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{post.author}</p>
                <p className="text-sm text-muted-foreground">Chef Ejecutivo</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Compartir
            </Button>
          </div>
        </div>

        {/* Article Content */}
        <Card className="border-border/50">
          <CardContent className="p-8">
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-playfair prose-headings:text-foreground
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-ul:text-muted-foreground prose-li:text-muted-foreground
                prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-12 bg-muted/30 rounded-lg p-8 text-center">
          <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">¿Te gustó este artículo?</h3>
          <p className="text-muted-foreground mb-6">
            Ven a probar nuestro auténtico mole poblano en Flor D Vainilla y vive esta experiencia culinaria única.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/eventos">Hacer Reservación</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/menu">Ver Nuestro Menú</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
