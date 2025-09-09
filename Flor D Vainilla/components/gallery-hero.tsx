export default function GalleryHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-accent/10 to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">Galería Visual</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
          Descubre la belleza de nuestra cocina gourmet, el ambiente acogedor de nuestro restaurante y los momentos
          especiales que hemos compartido con nuestros huéspedes a lo largo de los años.
        </p>
        <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
          <span className="flex items-center">
            <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
            Platillos Gourmet
          </span>
          <span className="flex items-center">
            <div className="w-3 h-3 bg-secondary rounded-full mr-2"></div>
            Ambiente Único
          </span>
          <span className="flex items-center">
            <div className="w-3 h-3 bg-accent rounded-full mr-2"></div>
            Eventos Memorables
          </span>
        </div>
      </div>
    </section>
  )
}
