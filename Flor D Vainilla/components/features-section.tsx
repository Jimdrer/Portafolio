import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Calendar, Users, Award } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: ChefHat,
      title: "Cocina Gourmet",
      description:
        "Platillos tradicionales mexicanos elevados con técnicas culinarias modernas y ingredientes de la más alta calidad.",
    },
    {
      icon: Calendar,
      title: "Eventos Especiales",
      description:
        "Organizamos eventos únicos y memorables. Desde celebraciones íntimas hasta grandes festividades.",
    },
    {
      icon: Users,
      title: "Experiencia Familiar",
      description:
        "Un ambiente cálido y acogedor donde cada visita se convierte en un momento especial para compartir.",
    },
    {
      icon: Award,
      title: "Calidad Reconocida",
      description:
        "Premiados por nuestra excelencia culinaria y compromiso con la autenticidad de los sabores mexicanos.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            ¿Por qué elegir Flor D Vainilla?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Más que una fondita, somos guardianes de la tradición culinaria
            mexicana, comprometidos con ofrecer una experiencia gastronómica
            excepcional.
          </p>
        </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="space-y-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-border/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ChefHat className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                  {features[0].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {features[0].description}
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-border/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                  {features[2].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {features[2].description}
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex items-center justify-center my-8 lg:my-0">
            <div className="relative w-full h-full max-w-md flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-700 rounded-2xl transform rotate-3"></div>
              <img 
                src="/flordevainillafonda_gourmet-20250222-0001.jpg" 
                alt="Cocina mexicana tradicional" 
                className="relative z-10 rounded-2xl shadow-xl w-full h-125 object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-border/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                  {features[1].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {features[1].description}
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-border/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                  {features[3].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {features[3].description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}