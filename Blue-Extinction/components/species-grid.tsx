import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Leaf, Waves } from "lucide-react"

const species = [
  {
    name: "Tortuga Marina Verde",
    scientificName: "Chelonia mydas",
    habitat: "Aguas tropicales y subtropicales",
    status: "En Peligro",
    importance: "Mantiene la salud de los pastos marinos",
    threats: ["Contaminación por plásticos", "Pérdida de hábitat"],
    image: "/t-verde.jpg",
  },
  {
    name: "Coral Cuerno de Alce",
    scientificName: "Acropora cervicornis",
    habitat: "Arrecifes de coral del Caribe",
    status: "Críticamente Amenazado",
    importance: "Forma la estructura base de los arrecifes",
    threats: ["Blanqueamiento por calentamiento", "Contaminación química"],
    image: "coral.jpg",
  },
  {
    name: "Ballena Azul",
    scientificName: "Balaenoptera musculus",
    habitat: "Océanos de todo el mundo",
    status: "En Peligro",
    importance: "Regula las poblaciones de krill y cicla nutrientes",
    threats: ["Colisiones con barcos", "Contaminación acústica"],
    image: "ballena.jpg",
  },
  {
    name: "Tiburón Blanco",
    scientificName: "Carcharodon carcharias",
    habitat: "Aguas costeras templadas",
    status: "Vulnerable",
    importance: "Depredador apex que mantiene el equilibrio marino",
    threats: ["Sobrepesca", "Contaminación por metales pesados"],
    image: "tiburon.jpg",
  },
  {
    name: "Pulpo Gigante del Pacífico",
    scientificName: "Enteroctopus dofleini",
    habitat: "Aguas frías del Pacífico Norte",
    status: "Preocupación Menor",
    importance: "Controla poblaciones de crustáceos y peces",
    threats: ["Acidificación oceánica", "Contaminación química"],
    image: "pulpo.jpg",
  },
  {
    name: "Delfín Nariz de Botella",
    scientificName: "Tursiops truncatus",
    habitat: "Aguas tropicales y templadas",
    status: "Preocupación Menor",
    importance: "Indicador de la salud del ecosistema marino",
    threats: ["Contaminación por plásticos", "Perturbación humana"],
    image: "delfin.jpg",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Críticamente Amenazado":
      return "destructive"
    case "En Peligro":
      return "destructive"
    case "Vulnerable":
      return "secondary"
    default:
      return "default"
  }
}

export function SpeciesGrid() {
  return (
    <section id="especies" className="py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Especies Marinas Destacadas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conoce algunas de las especies más importantes de nuestros océanos y su papel crucial en el equilibrio
            ecológico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {species.map((animal, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-100 h-60 object-cover"
                />
                <Badge variant={getStatusColor(animal.status)} className="absolute top-2 right-2">
                  {animal.status}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-lg">{animal.name}</CardTitle>
                <CardDescription className="italic">{animal.scientificName}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Waves className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{animal.habitat}</span>
                </div>

                <div className="flex items-start gap-2">
                  <Leaf className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{animal.importance}</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    <span className="text-sm font-medium">Amenazas:</span>
                  </div>
                  <ul className="text-sm text-muted-foreground ml-6 space-y-1">
                    {animal.threats.map((threat, i) => (
                      <li key={i} className="list-disc">
                        {threat}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
