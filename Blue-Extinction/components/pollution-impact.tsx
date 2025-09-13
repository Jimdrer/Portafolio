import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Trash2, Droplets, Thermometer, Factory, ExternalLink, AlertTriangle } from "lucide-react"

const pollutionTypes = [
  {
    type: "Contaminación por Plásticos",
    icon: Trash2,
    impact: "8 millones de toneladas de plástico llegan al océano anualmente",
    effects: ["Ingestión por animales marinos", "Enredamiento de especies", "Microplásticos en la cadena alimentaria"],
    image: "c-marina.jpg",
  },
  {
    type: "Contaminación Química",
    icon: Factory,
    impact: "Productos químicos tóxicos alteran los ecosistemas marinos",
    effects: ["Bioacumulación en depredadores", "Alteración hormonal en peces", "Muerte masiva de organismos"],
    image: "/tortuga.jpg?heigh=313&width=313",
  },
  {
    type: "Acidificación Oceánica",
    icon: Droplets,
    impact: "pH oceánico ha disminuido 0.1 unidades desde 1750",
    effects: [
      "Disolución de conchas y esqueletos",
      "Pérdida de arrecifes de coral",
      "Alteración de la cadena alimentaria",
    ],
    image: "tubo.jpg",
  },
  {
    type: "Calentamiento Global",
    icon: Thermometer,
    impact: "Temperatura oceánica aumentó 0.6°C en el último siglo",
    effects: ["Blanqueamiento de corales", "Migración de especies", "Aumento del nivel del mar"],
    image: "c-global.jpg",
  },
]

export function PollutionImpact() {
  return (
    <section id="contaminacion" className="py-16 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Impacto de la Contaminación Marina</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprende cómo las actividades humanas están afectando gravemente los ecosistemas marinos y qué podemos
            hacer para revertir el daño.
          </p>
        </div>

        <Alert className="mb-8 border-destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Situación Crítica</AlertTitle>
          <AlertDescription>
            Los océanos están experimentando cambios sin precedentes debido a la actividad humana. La acción inmediata
            es esencial para preservar la vida marina para las futuras generaciones.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {pollutionTypes.map((pollution, index) => {
            const Icon = pollution.icon
            return (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={pollution.image}
                    alt={pollution.type}
                    className="w-full h-80 object-cover"

                  />
                </div>

                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-destructive" />
                    {pollution.type}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm font-medium text-destructive">{pollution.impact}</p>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Efectos principales:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {pollution.effects.map((effect, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                          {effect}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="bg-card rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">¿Cómo Puedes Ayudar?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Cada acción cuenta en la protección de nuestros océanos. Desde cambios en el estilo de vida hasta apoyo a
            organizaciones de conservación, todos podemos contribuir.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Trash2 className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium mb-1">Reduce el Plástico</h4>
              <p className="text-sm text-muted-foreground">Usa alternativas reutilizables</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Droplets className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium mb-1">Conserva el Agua</h4>
              <p className="text-sm text-muted-foreground">Reduce el consumo doméstico</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <ExternalLink className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium mb-1">Apoya la Conservación</h4>
              <p className="text-sm text-muted-foreground">Dona a organizaciones marinas</p>
            </div>
          </div>

          <Button size="lg" className="gap-2">
            <ExternalLink className="h-5 w-5" />
            Conoce Más Acciones
          </Button>
        </div>
      </div>
    </section>
  )
}
