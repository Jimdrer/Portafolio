export default function MenuHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-muted/50 to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">Nuestro Menú Gourmet</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
          Descubre una selección cuidadosamente curada de platillos tradicionales mexicanos elevados con técnicas
          gourmet y ingredientes de la más alta calidad.
        </p>
        <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-muted-foreground">
          <span className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            Ingredientes Orgánicos
          </span>
          <span className="flex items-center">
            <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
            Recetas Tradicionales
          </span>
          <span className="flex items-center">
            <div className="w-3 h-3 bg-secondary rounded-full mr-2"></div>
            Técnicas Gourmet
          </span>
        </div>
      </div>
    </section>
  )
}
