import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Flame, Star } from "lucide-react"

interface MenuItem {
  name: string
  description: string
  price: string
  isVegetarian?: boolean
  isSpicy?: boolean
  isSignature?: boolean
}

interface MenuCategory {
  title: string
  description: string
  items: MenuItem[]
}

export default function MenuCategories() {
  const menuData: MenuCategory[] = [
    {
      title: "Entradas y Antojitos",
      description: "Pequeños placeres que despiertan el apetito",
      items: [
        {
          name: "Guacamole Flor D Vainilla",
          description: "Aguacate hass, chile serrano, cebolla morada, cilantro fresco y un toque de granada",
          price: "$180",
          isVegetarian: true,
          isSignature: true,
        },
        {
          name: "Esquites Gourmet",
          description: "Elote tierno con mayonesa de chipotle, queso cotija añejado y chile piquín",
          price: "$120",
          isVegetarian: true,
        },
        {
          name: "Tostadas de Tinga de Pollo",
          description: "Pollo deshebrado en salsa de tomate y chipotle sobre tostada artesanal",
          price: "$160",
          isSpicy: true,
        },
        {
          name: "Quesadillas de Flor de Calabaza",
          description: "Tortilla de maíz azul, flor de calabaza, epazote y queso oaxaca derretido",
          price: "$140",
          isVegetarian: true,
        },
      ],
    },
    {
      title: "Platos Fuertes",
      description: "El corazón de nuestra cocina tradicional",
      items: [
        {
          name: "Mole Poblano de la Casa",
          description: "Pollo de rancho bañado en nuestro mole de 24 ingredientes, acompañado de arroz rojo",
          price: "$320",
          isSignature: true,
          isSpicy: true,
        },
        {
          name: "Cochinita Pibil Yucateca",
          description: "Cerdo marinado en achiote, cocido en hoja de plátano, con cebolla morada encurtida",
          price: "$280",
          isSpicy: true,
        },
        {
          name: "Chiles en Nogada",
          description: "Chile poblano relleno de picadillo dulce, bañado en nogada y granada (temporada)",
          price: "$350",
          isSignature: true,
        },
        {
          name: "Pescado a la Veracruzana",
          description: "Huachinango fresco en salsa de tomate, aceitunas, alcaparras y chiles güeros",
          price: "$380",
        },
        {
          name: "Enchiladas Suizas Verdes",
          description: "Tortillas rellenas de pollo, bañadas en salsa verde y gratinadas con queso manchego",
          price: "$240",
        },
      ],
    },
    {
      title: "Postres Tradicionales",
      description: "Dulces finales que abrazan el alma",
      items: [
        {
          name: "Flan de Vainilla Bourbon",
          description: "Flan tradicional con vainilla bourbon de Madagascar y caramelo de piloncillo",
          price: "$120",
          isSignature: true,
        },
        {
          name: "Tres Leches de Coco",
          description: "Bizcocho empapado en tres leches con coco rallado y canela de Ceylon",
          price: "$110",
        },
        {
          name: "Churros con Cajeta",
          description: "Churros recién hechos espolvoreados con canela y acompañados de cajeta artesanal",
          price: "$100",
        },
        {
          name: "Helado de Mamey",
          description: "Helado artesanal de mamey con galleta de amaranto y miel de agave",
          price: "$90",
          isVegetarian: true,
        },
      ],
    },
    {
      title: "Bebidas Especiales",
      description: "Refrescantes compañeros de cada comida",
      items: [
        {
          name: "Agua Fresca del Día",
          description: "Horchata, jamaica, tamarindo o fruta de temporada",
          price: "$60",
          isVegetarian: true,
        },
        {
          name: "Mezcal Artesanal",
          description: "Selección de mezcales oaxaqueños con sal de gusano y naranja",
          price: "$180",
        },
        {
          name: "Café de Olla",
          description: "Café de Chiapas preparado en olla de barro con canela y piloncillo",
          price: "$70",
          isVegetarian: true,
        },
        {
          name: "Chocolate Abuelita Gourmet",
          description: "Chocolate caliente preparado con leche entera, canela y chile ancho",
          price: "$80",
          isVegetarian: true,
          isSpicy: true,
        },
      ],
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {menuData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">{category.title}</h2>
              <p className="text-lg text-muted-foreground">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {category.items.map((item, itemIndex) => (
                <Card key={itemIndex} className="hover:shadow-md transition-shadow duration-300 border-border/50">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="font-playfair text-xl text-foreground flex-1 pr-4">{item.name}</CardTitle>
                      <span className="font-bold text-lg text-primary whitespace-nowrap">{item.price}</span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      {item.isSignature && (
                        <Badge variant="secondary" className="text-xs">
                          <Star className="w-3 h-3 mr-1" />
                          Especialidad
                        </Badge>
                      )}
                      {item.isVegetarian && (
                        <Badge variant="outline" className="text-xs text-green-600 border-green-600">
                          <Leaf className="w-3 h-3 mr-1" />
                          Vegetariano
                        </Badge>
                      )}
                      {item.isSpicy && (
                        <Badge variant="outline" className="text-xs text-red-600 border-red-600">
                          <Flame className="w-3 h-3 mr-1" />
                          Picante
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
