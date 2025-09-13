import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingDown, TrendingUp, AlertCircle, Shield } from "lucide-react"

const stats = [
  {
    title: "Especies Marinas Amenazadas",
    value: "37%",
    description: "de las especies marinas evaluadas están en riesgo",
    trend: "up",
    icon: AlertCircle,
    color: "text-destructive",
  },
  {
    title: "Áreas Marinas Protegidas",
    value: "8.2%",
    description: "de los océanos están bajo protección",
    trend: "up",
    icon: Shield,
    color: "text-primary",
  },
  {
    title: "Pérdida de Coral",
    value: "50%",
    description: "de los arrecifes han desaparecido en 30 años",
    trend: "down",
    icon: TrendingDown,
    color: "text-destructive",
  },
  {
    title: "Recuperación de Ballenas",
    value: "15%",
    description: "aumento en poblaciones protegidas",
    trend: "up",
    icon: TrendingUp,
    color: "text-green-600",
  },
]

export function ConservationStats() {
  return (
    <section id="conservacion" className="py-16 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Estado de Conservación Marina</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Datos actuales sobre el estado de nuestros océanos y los esfuerzos de conservación en curso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Progreso de Conservación por Región</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Pacífico Norte</span>
                  <span>78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Atlántico Norte</span>
                  <span>65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Mediterráneo</span>
                  <span>42%</span>
                </div>
                <Progress value={42} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Océano Índico</span>
                  <span>38%</span>
                </div>
                <Progress value={38} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Importancia Ecológica de los Océanos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Producen 70% del oxígeno mundial</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm">Absorben 30% del CO₂ atmosférico</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Regulan el clima global</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-chart-4 rounded-full"></div>
                <span className="text-sm">Sustentan 3 mil millones de personas</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
