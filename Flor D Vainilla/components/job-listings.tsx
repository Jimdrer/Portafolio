import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users } from "lucide-react";

export default function JobListings() {
  const jobs = [
    {
      title: "Chef de Línea",
      department: "Cocina",
      type: "Tiempo Completo",
      salary: "$15,000 - $18,000",
      location: "Valle de Santiago, Gto. - El Potrero",
      description:
        "Buscamos chef de línea con experiencia en cocina mexicana tradicional. Responsable de preparar platillos siguiendo nuestros estándares de calidad.",
      requirements: [
        "2+ años de experiencia en cocina",
        "Conocimiento de cocina mexicana tradicional",
        "Capacidad para trabajar bajo presión",
        "Disponibilidad de horarios",
      ],
      urgent: true,
    },
    {
      title: "Mesero/a Experimentado",
      department: "Servicio",
      type: "Tiempo Completo",
      salary: "$12,000 - $15,000 + Propinas",
      location: "Valle de Santiago, Gto. - El Potrero",
      description:
        "Mesero/a con experiencia en servicio de restaurante. Debe brindar atención excepcional y conocer nuestro menú a detalle.",
      requirements: [
        "1+ año de experiencia como mesero",
        "Excelente atención al cliente",
        "Conocimiento de vinos y bebidas",
        "Presentación impecable",
      ],
      urgent: false,
    },
    {
      title: "Coordinador de Eventos",
      department: "Eventos",
      type: "Tiempo Completo",
      salary: "$18,000 - $22,000",
      location: "Valle de Santiago, Gto. - El Potrero",
      description:
        "Coordinador para planificar y ejecutar eventos especiales. Debe tener experiencia en organización de eventos y excelente comunicación.",
      requirements: [
        "Licenciatura en Turismo, Administración o afín",
        "2+ años en coordinación de eventos",
        "Excelentes habilidades de comunicación",
        "Manejo de Office y software de eventos",
      ],
      urgent: false,
    },
    {
      title: "Ayudante de Cocina",
      department: "Cocina",
      type: "Medio Tiempo",
      salary: "$8,000 - $10,000",
      location: "Valle de Santiago, Gto. - El Potrero",
      description:
        "Ayudante de cocina para apoyo en preparación de ingredientes y limpieza. Ideal para estudiantes o personas que buscan iniciar en gastronomía.",
      requirements: [
        "Sin experiencia necesaria",
        "Disponibilidad de horarios",
        "Actitud positiva y ganas de aprender",
        "Certificado de salud vigente",
      ],
      urgent: false,
    },
    {
      title: "Gerente de Turno",
      department: "Administración",
      type: "Tiempo Completo",
      salary: "$20,000 - $25,000",
      location: "Valle de Santiago, Gto. - El Potrero",
      description:
        "Gerente de turno para supervisar operaciones diarias del restaurante. Debe tener liderazgo y experiencia en administración de restaurantes.",
      requirements: [
        "Licenciatura en Administración o afín",
        "3+ años en gerencia de restaurantes",
        "Liderazgo y habilidades de gestión",
        "Conocimiento de costos y operaciones",
      ],
      urgent: true,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
            Vacantes Disponibles
          </h2>
          <p className="text-lg text-muted-foreground">
            Encuentra la posición perfecta para desarrollar tu carrera en la
            industria gastronómica
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jobs.map((job, index) => (
            <Card
              key={index}
              className=" hover:shadow-lg transition-shadow duration-300 border-border/50 py-4">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="font-playfair text-xl text-foreground">
                    {job.title}
                  </CardTitle>
                  {job.urgent && (
                    <Badge className="bg-red-500 text-white">Urgente</Badge>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {job.department}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {job.type}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.location}
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <DollarSign className="w-4 h-4 mr-1 text-primary" />
                  <span className="font-semibold text-primary">
                    {job.salary}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="h-20 text-muted-foreground leading-relaxed">
                  {job.description}
                </p>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Requisitos:
                  </h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li
                        key={reqIndex}
                        className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full flex items-end">
                  Aplicar a esta Vacante
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            ¿No encuentras la posición que buscas?
          </p>
          <Button variant="outline" size="lg">
            Enviar CV Espontáneo
          </Button>
        </div>
      </div>
    </section>
  );
}
