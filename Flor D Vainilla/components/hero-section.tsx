import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/flordevainillafonda_gourmet-20250222-0004.jpg"
          alt="Interior elegante de Flor D Vainilla"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
            ))}
          </div>
          <span className="ml-3 text-lg font-medium">Experiencia Gourmet Auténtica</span>
        </div>

        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-balance">
          Bienvenidos a <span style={{fontFamily: 'Epunda Slab'}} className="text-tertiary text-shadow-lg/40">Flor D Vainilla</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-pretty leading-relaxed max-w-3xl mx-auto">
          Donde la tradición culinaria mexicana se encuentra con la elegancia gourmet. Cada platillo es una obra de arte
          que despierta los sentidos y celebra nuestras raíces.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-3">
            <Link href="/menu" className="flex items-center">
              Explorar Menú
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            <Link href="/eventos">Reservar Evento</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
