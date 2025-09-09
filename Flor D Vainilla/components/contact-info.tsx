import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Phone, Mail, MapPin, Calendar, Briefcase, Camera, MessageSquare } from "lucide-react"

export default function ContactInfo() {
  const contactTypes = [
    {
      icon: Calendar,
      title: "Reservaciones",
      description: "Para reservar tu mesa o consultar disponibilidad",
      contact: "reservas@flordvainilla.mx",
      phone: "(55) 1234-5678 Ext. 1",
      hours: "Lun - Dom: 10:00 AM - 9:00 PM",
    },
    {
      icon: Briefcase,
      title: "Eventos Especiales",
      description: "Organización de bodas, cumpleaños y eventos corporativos",
      contact: "eventos@flordvainilla.mx",
      phone: "(55) 1234-5678 Ext. 2",
      hours: "Lun - Vie: 9:00 AM - 6:00 PM",
    },
    {
      icon: MessageSquare,
      title: "Recursos Humanos",
      description: "Oportunidades laborales y consultas de empleo",
      contact: "rh@flordvainilla.mx",
      phone: "(55) 1234-5678 Ext. 3",
      hours: "Lun - Vie: 9:00 AM - 5:00 PM",
    },
    {
      icon: Camera,
      title: "Prensa y Medios",
      description: "Consultas de prensa, colaboraciones y medios",
      contact: "prensa@flordvainilla.mx",
      phone: "(55) 1234-5678 Ext. 4",
      hours: "Lun - Vie: 10:00 AM - 4:00 PM",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">Información de Contacto</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Tenemos diferentes canales de comunicación para atenderte de la mejor manera según tu consulta
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {contactTypes.map((type, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <type.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-playfair text-xl text-foreground">{type.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">{type.contact}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">{type.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{type.hours}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* General Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="font-playfair text-xl text-foreground flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Horarios de Atención
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Lunes - Jueves</span>
                <span className="text-foreground">12:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Viernes - Sábado</span>
                <span className="text-foreground">12:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Domingo</span>
                <span className="text-foreground">12:00 PM - 9:00 PM</span>
              </div>
              <div className="border-t border-border pt-3 mt-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Nota:</strong> La cocina cierra 30 minutos antes del horario de cierre del restaurante.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="font-playfair text-xl text-foreground flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Ubicación y Transporte
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-foreground font-medium">Dirección Completa:</p>
                <p className="text-muted-foreground">
                  Av. Revolución 1234, Col. Centro
                  <br />
                  Ciudad de México, CDMX 06000
                </p>
              </div>
              <div>
                <p className="text-foreground font-medium">Transporte Público:</p>
                <p className="text-sm text-muted-foreground">
                  Metro: Estación Revolución (Línea 2)
                  <br />
                  Metrobús: Estación Centro Histórico
                </p>
              </div>
              <div>
                <p className="text-foreground font-medium">Estacionamiento:</p>
                <p className="text-sm text-muted-foreground">Valet parking disponible</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
