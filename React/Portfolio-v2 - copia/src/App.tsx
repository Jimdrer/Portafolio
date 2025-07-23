import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import ParallaxContainer from './components/parallax/ParallaxContainer'
import { Code, Zap, Coffee, Rocket, Star, Heart, CheckCircle } from 'lucide-react'

function App() {
  const [isReady, setIsReady] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header con parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Elementos de fondo con parallax */}
        <ParallaxContainer
          speed={0.3}
          direction="up"
          rotate
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full" children={undefined}        />
        <ParallaxContainer
          speed={0.6}
          direction="down"
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-lg transform rotate-45" children={undefined}        />
        <ParallaxContainer
          speed={0.4}
          direction="left"
          scale
          className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full" children={undefined}        />

        {/* Iconos flotantes con parallax */}
        <ParallaxContainer
          speed={0.2}
          direction="up"
          rotate
          className="absolute top-32 right-40 w-12 h-12 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full flex items-center justify-center"
        >
          <Zap className="w-6 h-6 text-white" />
        </ParallaxContainer>

        <ParallaxContainer
          speed={0.5}
          direction="down"
          className="absolute bottom-60 left-40 w-10 h-10 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full flex items-center justify-center"
        >
          <Coffee className="w-5 h-5 text-white" />
        </ParallaxContainer>

        <ParallaxContainer
          speed={0.8}
          direction="right"
          className="absolute top-1/2 right-10 w-8 h-8 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full flex items-center justify-center"
        >
          <Code className="w-4 h-4 text-white" />
        </ParallaxContainer>

        <ParallaxContainer
          speed={0.3}
          direction="left"
          opacity
          className="absolute bottom-32 right-32 w-14 h-14 bg-gradient-to-r from-red-400/30 to-pink-400/30 rounded-full flex items-center justify-center"
        >
          <Heart className="w-7 h-7 text-white" />
        </ParallaxContainer>

        <ParallaxContainer
          speed={0.7}
          direction="up"
          scale
          className="absolute top-20 left-1/2 w-10 h-10 bg-gradient-to-r from-green-400/30 to-teal-400/30 rounded-full flex items-center justify-center"
        >
          <Star className="w-5 h-5 text-white" />
        </ParallaxContainer>

        {/* Contenido principal */}
        <div className="text-center z-10 max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2">
              ✨ Portfolio Base Configurado
            </Badge>
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Framer Motion v6
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                + Parallax Effects
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Base del proyecto configurada correctamente. ¡Listo para agregar el portafolio completo!
            </motion.p>
            
            <motion.div 
              className="flex gap-4 justify-center flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={() => setIsReady(!isReady)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Rocket className="w-4 h-4 mr-2" />
                  {isReady ? '¡Listo!' : 'Probar Animación'}
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="bg-white/80 backdrop-blur-sm">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  v6 Funcionando ✅
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sección de verificación */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ✅ Verificación de Componentes
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "React + TypeScript", desc: "Configuración moderna", color: "from-blue-500 to-cyan-500", speed: 0.2 },
              { icon: Zap, title: "Framer Motion v6", desc: "Animaciones estables", color: "from-purple-500 to-pink-500", speed: 0.3 },
              { icon: Coffee, title: "Tailwind CSS", desc: "Estilos optimizados", color: "from-green-500 to-emerald-500", speed: 0.4 }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm overflow-hidden relative group">
                  <CardContent className="p-6 text-center">
                    <ParallaxContainer speed={item.speed} direction="up" rotate>
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </ParallaxContainer>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <ParallaxContainer speed={0.2} direction="up">
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    🎉 ¡Base Lista!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Todos los componentes base están funcionando correctamente. 
                    Ahora podemos agregar el portafolio completo con efectos parallax avanzados.
                  </p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <Badge className="bg-green-500 text-white">✅ Parallax</Badge>
                    <Badge className="bg-blue-500 text-white">✅ Animaciones</Badge>
                    <Badge className="bg-purple-500 text-white">✅ UI Components</Badge>
                    <Badge className="bg-orange-500 text-white">✅ TypeScript</Badge>
                  </div>
                </CardContent>
              </Card>
            </ParallaxContainer>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default App