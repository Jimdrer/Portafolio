import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-secondary/10 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            Contáctanos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed mb-8">
            Estamos aquí para ayudarte. Ya sea para hacer una reservación,
            organizar un evento especial o simplemente para conocer más sobre
            nuestra propuesta culinaria, nos encantaría escucharte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
              Llámanos
            </h3>
            <p className="text-muted-foreground mb-2">(55) 1234-5678</p>
            <p className="text-sm text-muted-foreground">
              Lun - Dom: 12:00 PM - 10:00 PM
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
              Escríbenos
            </h3>
            <p className="text-muted-foreground mb-2">info@flordvainilla.mx</p>
            <p className="text-sm text-muted-foreground">
              Respuesta en 24 horas
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
              Visítanos
            </h3>
            <p className="text-muted-foreground mb-2">
              Salón de Fiestas El potrero, Prolongación Matamoros Sur 48 antes
              105.
            </p>
            <p className="text-sm text-muted-foreground">
              Col. El Potrero, Valle de Santiago, Gto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
