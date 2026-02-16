import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import Testimonials from "./pages/Testimonials"
import Contact from "./pages/Contact"
import "./App.css"
;("use client")

import { useState, useEffect } from "react"
import { Code, Calendar, Palette, Smartphone, Eye, Bug, Database, Heart, Rocket } from "lucide-react"
import "./App.css"

function App() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    satisfaction: 0,
    technologies: 0,
  })

  useEffect(() => {
    setIsVisible(true)
    // Animate counters
    const timer = setTimeout(() => {
      setCounters({
        projects: 15,
        experience: 4,
        satisfaction: 100,
        technologies: 12,
      })
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Desarrollo de interfaces modernas y responsivas con React, Next.js y TypeScript",
      years: "4+ años",
      color: "from-blue-500 to-cyan-500",
      projects: "8 proyectos",
      level: 95,
    },
    {
      icon: Palette,
      title: "UX/UI Design",
      description: "Diseño centrado en el usuario con metodologías ágiles y design thinking",
      years: "3+ años",
      color: "from-purple-500 to-pink-500",
      projects: "6 proyectos",
      level: 85,
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Adaptación perfecta a todos los dispositivos y pantallas",
      years: "4+ años",
      color: "from-green-500 to-emerald-500",
      projects: "12 proyectos",
      level: 90,
    },
    {
      icon: Eye,
      title: "Attention to Detail",
      description: "Precisión en cada elemento visual y funcional",
      years: "4+ años",
      color: "from-orange-500 to-red-500",
      projects: "Todos",
      level: 98,
    },
    {
      icon: Bug,
      title: "Testing & Debug",
      description: "Testing automatizado, debugging y optimización de rendimiento",
      years: "3+ años",
      color: "from-indigo-500 to-purple-500",
      projects: "10 proyectos",
      level: 88,
    },
    {
      icon: Database,
      title: "API Integration",
      description: "Integración eficiente de servicios y manejo de datos",
      years: "3+ años",
      color: "from-teal-500 to-cyan-500",
      projects: "7 proyectos",
      level: 82,
    },
  ]

  const technologies = [
    {
      name: "HTML5",
      icon: "🌐",
      level: 95,
      color: "bg-orange-100 text-orange-600 border-orange-200",
      category: "Frontend",
    },
    { name: "CSS3", icon: "🎨", level: 90, color: "bg-blue-100 text-blue-600 border-blue-200", category: "Frontend" },
    {
      name: "JavaScript",
      icon: "⚡",
      level: 95,
      color: "bg-yellow-100 text-yellow-600 border-yellow-200",
      category: "Frontend",
    },
    { name: "React", icon: "⚛️", level: 90, color: "bg-cyan-100 text-cyan-600 border-cyan-200", category: "Frontend" },
    {
      name: "Vite",
      icon: "⚡",
      level: 85,
      color: "bg-purple-100 text-purple-600 border-purple-200",
      category: "Frontend",
    },
    {
      name: "TypeScript",
      icon: "📘",
      level: 80,
      color: "bg-blue-100 text-blue-600 border-blue-200",
      category: "Frontend",
    },
    {
      name: "Node.js",
      icon: "🟢",
      level: 75,
      color: "bg-green-100 text-green-600 border-green-200",
      category: "Backend",
    },
    {
      name: "Python",
      icon: "🐍",
      level: 70,
      color: "bg-yellow-100 text-yellow-600 border-yellow-200",
      category: "Backend",
    },
    {
      name: "Figma",
      icon: "🎯",
      level: 85,
      color: "bg-purple-100 text-purple-600 border-purple-200",
      category: "Design",
    },
    { name: "Git", icon: "📝", level: 90, color: "bg-red-100 text-red-600 border-red-200", category: "Tools" },
    { name: "WordPress", icon: "📰", level: 75, color: "bg-blue-100 text-blue-600 border-blue-200", category: "CMS" },
    { name: "Photoshop", icon: "🖼️", level: 80, color: "bg-blue-100 text-blue-600 border-blue-200", category: "Design" },
  ]

  const projects = [
    {
      title: "Sweet Cupcake E-Commerce",
      category: "Full-Stack Development",
      description:
        "Plataforma de comercio electrónico completa con sistema de pagos, gestión de inventario y panel administrativo. Diseño atractivo y experiencia de usuario optimizada para maximizar conversiones.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
      metrics: ["40% ↗ conversiones", "500+ usuarios activos", "99.9% uptime", "4.8★ rating"],
      status: "En producción",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center",
      color: "bg-gradient-to-br from-pink-100 to-rose-100",
      link: "#",
      featured: true,
      timeline: "3 meses",
      client: "Panadería Local",
    },
    {
      title: "Blue Extinction Conservation",
      category: "Mobile & Web Application",
      description:
        "Aplicación educativa sobre conservación marina con realidad aumentada, gamificación y contenido interactivo para concienciar sobre la vida marina y el cambio climático.",
      technologies: ["React Native", "Three.js", "Firebase", "AR.js", "WebGL"],
      metrics: ["10K+ descargas", "4.8★ rating", "Featured en App Store", "85% retention"],
      status: "Publicado",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center",
      color: "bg-gradient-to-br from-blue-100 to-cyan-100",
      link: "#",
      featured: true,
      timeline: "6 meses",
      client: "ONG Ambiental",
    },
    {
      title: "Interactive Pokédex",
      category: "Frontend Development",
      description:
        "Aplicación web interactiva con API REST, búsqueda avanzada, favoritos persistentes y animaciones fluidas inspiradas en el universo Pokémon. Incluye modo batalla simulado.",
      technologies: ["Vue.js", "REST API", "LocalStorage", "CSS Animations", "PWA"],
      metrics: ["2K+ usuarios únicos", "95% satisfacción", "Open source", "50+ contributors"],
      status: "Completado",
      image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=300&fit=crop&crop=center",
      color: "bg-gradient-to-br from-red-100 to-yellow-100",
      link: "#",
      featured: false,
      timeline: "2 meses",
      client: "Proyecto Personal",
    },
    {
      title: "MTB Adventure Store",
      category: "E-Commerce Development",
      description:
        "Tienda online especializada en mountain biking con catálogo interactivo, comparador de productos, sistema de reseñas y configurador 3D de bicicletas.",
      technologies: ["React", "CSS3", "Stripe", "Node.js", "Three.js"],
      metrics: ["300+ productos", "85% conversión", "Mobile-first", "2.5s load time"],
      status: "Completado",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=center",
      color: "bg-gradient-to-br from-green-100 to-emerald-100",
      link: "#",
      featured: false,
      timeline: "4 meses",
      client: "Tienda Deportiva",
    },
    {
      title: "Merkadito Local Marketplace",
      category: "Marketplace Platform",
      description:
        "Plataforma de marketplace local que conecta pequeños comerciantes con la comunidad, promoviendo el comercio local con sistema de geolocalización y pagos seguros.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      metrics: ["50+ comerciantes", "Local impact", "Community driven", "200+ productos"],
      status: "Completado",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      color: "bg-gradient-to-br from-yellow-100 to-orange-100",
      link: "#",
      featured: false,
      timeline: "3 meses",
      client: "Comunidad Local",
    },
    {
      title: "Flor D Vainilla Bakery",
      category: "WordPress Development",
      description:
        "Sitio web corporativo para panadería artesanal con galería de productos, sistema de pedidos online, blog de recetas y integración con redes sociales.",
      technologies: ["WordPress", "PHP", "MySQL", "Custom Theme", "WooCommerce"],
      metrics: ["200% ↗ pedidos online", "SEO optimized", "Mobile responsive", "3.2s load time"],
      status: "Completado",
      image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=400&h=300&fit=crop&crop=center",
      color: "bg-gradient-to-br from-purple-100 to-pink-100",
      link: "#",
      featured: false,
      timeline: "2 meses",
      client: "Panadería Artesanal",
    },
  ]

  const testimonials = [
    {
      name: "María González",
      position: "CEO, Sweet Cupcake",
      content:
        "Jose transformó completamente nuestro negocio online. Las ventas aumentaron un 40% en los primeros 3 meses. Su atención al detalle y profesionalismo son excepcionales.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
    },
    {
      name: "Carlos Mendoza",
      position: "Director, ONG Blue Ocean",
      content:
        "La aplicación que desarrolló Jose ha sido fundamental para nuestra misión de conservación. Su creatividad y habilidades técnicas superaron nuestras expectativas.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    },
    {
      name: "Ana Rodríguez",
      position: "Gerente, MTB Adventure",
      content:
        "Profesional, creativo y siempre dispuesto a ir más allá. Jose entregó un proyecto que no solo cumplió, sino que superó todos nuestros requisitos.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    },
  ]

  const experience = [
    {
      company: "Freelance Developer",
      position: "Senior Full-Stack Developer & UX/UI Designer",
      period: "2022 - Presente",
      description:
        "Desarrollo de soluciones web personalizadas para pequeñas y medianas empresas, desde la conceptualización hasta el deployment y mantenimiento.",
      achievements: [
        "15+ proyectos completados exitosamente",
        "100% satisfacción del cliente verificada",
        "Reducción promedio del 30% en tiempo de carga",
        "Aumento promedio del 40% en conversiones",
        "Implementación de metodologías ágiles",
        "Mentoría a 5+ desarrolladores junior",
      ],
      color: "from-blue-500 to-purple-500",
      technologies: ["React", "Vite", "Node.js", "TypeScript", "Figma"],
    },
    {
      company: "Continuous Learning & Development",
      position: "Self-Taught Developer & Community Contributor",
      period: "2021 - Presente",
      description:
        "Formación continua a través de plataformas reconocidas, participación activa en la comunidad de desarrollo y contribuciones open source.",
      achievements: [
        "6+ certificaciones profesionales obtenidas",
        "Participación en 10+ hackathons y eventos tech",
        "20+ contribuciones a proyectos open source",
        "Mentoría a desarrolladores junior en comunidades",
        "Speaker en 3 eventos locales de tecnología",
        "Mantenimiento de blog técnico con 50+ artículos",
      ],
      color: "from-green-500 to-teal-500",
      technologies: ["Python", "Vue.js", "WordPress", "Git", "Docker"],
    },
  ]

  const certifications = [
    { name: "Microsoft Azure Fundamentals", icon: "☁️", year: "2024", issuer: "Microsoft", verified: true },
    { name: "FreeCodeCamp - Responsive Web Design", icon: "📱", year: "2023", issuer: "FreeCodeCamp", verified: true },
    { name: "Cisco - JavaScript Essentials", icon: "🔧", year: "2023", issuer: "Cisco", verified: true },
    { name: "Udemy - Advanced React Development", icon: "⚛️", year: "2024", issuer: "Udemy", verified: true },
    { name: "Google UX Design Certificate", icon: "🎨", year: "2023", issuer: "Google", verified: true },
    { name: "Meta Frontend Developer", icon: "💻", year: "2024", issuer: "Meta", verified: true },
  ]

  const stats = [
    { label: "Proyectos Completados", value: counters.projects, suffix: "+", icon: Rocket, color: "text-blue-600" },
    { label: "Años de Experiencia", value: counters.experience, suffix: "+", icon: Calendar, color: "text-purple-600" },
    {
      label: "Satisfacción del Cliente",
      value: counters.satisfaction,
      suffix: "%",
      icon: Heart,
      color: "text-green-600",
    },
    { label: "Tecnologías Dominadas", value: counters.technologies, suffix: "+", icon: Code, color: "text-orange-600" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habilidades" element={<Skills />} />
        <Route path="/experiencia" element={<Experience />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App
