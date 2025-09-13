"use client";

import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Download,
  Code,
  Award,
  Calendar,
  MapPin,
  Star,
  ArrowRight,
  CheckCircle,
  Palette,
  Smartphone,
  Eye,
  Bug,
  Database,
  Zap,
  Users,
  TrendingUp,
  Clock,
  Heart,
  Coffee,
  Lightbulb,
  Rocket,
  ChevronDown,
  Play,
  Quote,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function EnhancedPortfolio() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    satisfaction: 0,
    technologies: 0,
  });

  useEffect(() => {
    setIsVisible(true);
    // Animate counters
    const timer = setTimeout(() => {
      setCounters({
        projects: 15,
        experience: 4,
        satisfaction: 100,
        technologies: 12,
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const contact = {
    email: "mailto:dim_er89@outlook.com",
    whatsapp: "https://wa.me/5214561079874",
    linkedin: "https://www.linkedin.com/in/jimdrer/",
    github: "https://github.com/Jimdrer/Portafolio",
    cv: "https://drive.proton.me/urls/H4QBBPVQ70#ZcuFEGiMiMv9",
  };
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Desarrollo de interfaces modernas y responsivas con React, Next.js y TypeScript",
      years: "4+ años",
      color: "from-blue-500 to-cyan-500",
      projects: "8 proyectos",
      level: 95,
    },
    {
      icon: Palette,
      title: "UX/UI Design",
      description:
        "Diseño centrado en el usuario con metodologías ágiles y design thinking",
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
      description:
        "Testing automatizado, debugging y optimización de rendimiento",
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
  ];

  const technologies = [
    {
      name: "HTML5",
      icon: "🌐",
      level: 95,
      color: "bg-orange-100 text-orange-600 border-orange-200",
      category: "Frontend",
    },
    {
      name: "CSS3",
      icon: "🎨",
      level: 90,
      color: "bg-blue-100 text-blue-600 border-blue-200",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      icon: "⚡",
      level: 95,
      color: "bg-yellow-100 text-yellow-600 border-yellow-200",
      category: "Frontend",
    },
    {
      name: "React",
      icon: "⚛️",
      level: 90,
      color: "bg-cyan-100 text-cyan-600 border-cyan-200",
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: "▲",
      level: 85,
      color: "bg-gray-100 text-gray-600 border-gray-200",
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
    {
      name: "Git",
      icon: "📝",
      level: 90,
      color: "bg-red-100 text-red-600 border-red-200",
      category: "Tools",
    },
    {
      name: "WordPress",
      icon: "📰",
      level: 75,
      color: "bg-blue-100 text-blue-600 border-blue-200",
      category: "CMS",
    },
    {
      name: "Photoshop",
      icon: "🖼️",
      level: 80,
      color: "bg-blue-100 text-blue-600 border-blue-200",
      category: "Design",
    },
  ];

  const projects = [
    {
      title: "Sweet Cupcake E-Commerce",
      category: "Full-Stack Development",
      description:
        "Sitio web corporativo para panadería artesanal con galería de productos, sistema de pedidos online, blog de recetas e integración con redes sociales.",
      technologies: ["React", "Node.js", "Scss"],
      metrics: [
        "40% ↗ conversiones",
        "500+ usuarios activos",
        "99.9% uptime",
        "4.8★ rating",
      ],
      status: "En producción",
      image: "/pasteleria.png?height=300&width=400&text=Sweet+Cupcake+Platform",
      color: "bg-gradient-to-br from-pink-100 to-rose-100",
      links: {
        demo: "https://sweet-cupcake.vercel.app/",
        code: "https://github.com/Jimdrer/Portafolio/tree/master/Sweet%20Cupcake",
      },
      featured: true,
      timeline: "3 meses",
      client: "Panadería Local",
    },
    {
      title: "Blue Extinction Conservation",
      category: "Mobile & Web Application",
      description:
        "Aplicación educativa sobre conservación marina con realidad aumentada, gamificación y contenido interactivo para concienciar sobre la vida marina y el cambio climático.",
      technologies: ["React", "Next", "Tailwind CSS" , "Por integrar Three.js"],
      metrics: [
        "10K+ descargas",
        "4.8★ rating",
        "Featured en App Store",
        "85% retention",
      ],
      status: "Publicado",
      image:
        "/mundo.svg?height=300&width=500&text=Blue+Extinction+Conservation",
      color: "bg-gradient-to-br from-blue-100 to-cyan-100",
      links:{
        demo: "https://blue-extinction.vercel.app/",
        code:""
        
      } 
      featured: true,
      timeline: "6 meses",
      client: "ONG Ambiental",
    },
    {
      title: "Interactive Pokédex",
      category: "Frontend Development",
      description:
        "Aplicación web interactiva con API REST, búsqueda avanzada, favoritos persistentes y animaciones fluidas inspiradas en el universo Pokémon.",
      technologies: [
        "Vue.js",
        "REST API",
        "LocalStorage",
        "CSS Animations",
        "PWA",
      ],
      metrics: [
        "2K+ usuarios únicos",
        "95% satisfacción",
        "Open source",
        "50+ contributors",
      ],
      status: "Completado",
      image: "/pokeico.png?height=300&width=400&text=Interactive+Pokedex",
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
      metrics: [
        "300+ productos",
        "85% conversión",
        "Mobile-first",
        "2.5s load time",
      ],
      status: "Completado",
      image: "/mtblogo.png?height=300&width=400&text=MTB+Store",
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
      metrics: [
        "50+ comerciantes",
        "Local impact",
        "Community driven",
        "200+ productos",
      ],
      status: "Completado",
      image: "/shop.png?height=300&width=400&text=Merkadito+Marketplace",
      color: "bg-gradient-to-br from-yellow-100 to-orange-100",
      link: "#",
      featured: false,
      timeline: "3 meses",
      client: "Comunidad Local",
    },
    {
      title: "Flor D Vainilla",
      category: "WordPress Development",
      description:
        "Sitio web Gourmet 100% mexicano con galería de platillos, agenda de reservaciones online, blog con recetas e historia, integración con redes sociales y servicio de eventos.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind Css"],
      metrics: [
        "200% ↗ pedidos online",
        "SEO optimized",
        "Mobile responsive",
        "3.2s load time",
      ],
      status: "Completado",
      image: "/flor.png?height=300&width=400&text=Flor+D+Vainilla",
      color: "bg-gradient-to-br from-purple-100 to-pink-100",
      link: "https://flor-d-vainilla.vercel.app/",
      featured: false,
      timeline: "2 meses",
      client: "Panadería Artesanal",
    },
  ];

  const testimonials = [
    {
      name: "María González",
      position: "CEO, Sweet Cupcake",
      content:
        "Jose transformó completamente nuestro negocio online. Las ventas aumentaron un 40% en los primeros 3 meses. Su atención al detalle y profesionalismo son excepcionales.",
      rating: 5,
      image: "/MG.jpg?height=60&width=60&text=MG",
    },
    {
      name: "Carlos Mendoza",
      position: "Director, ONG Blue Ocean",
      content:
        "La aplicación que desarrolló Jose ha sido fundamental para nuestra misión de conservación. Su creatividad y habilidades técnicas superaron nuestras expectativas.",
      rating: 5,
      image: "/CM.jpg?height=60&width=60&text=CM",
    },
    {
      name: "Ana Rodríguez",
      position: "Gerente, MTB Adventure",
      content:
        "Profesional, creativo y siempre dispuesto a ir más allá. Jose entregó un proyecto que no solo cumplió, sino que superó todos nuestros requisitos.",
      rating: 5,
      image: "/AR.jpg?height=60&width=60&text=AR",
    },
  ];

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
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "Figma"],
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
  ];

  const certifications = [
    {
      name: "Microsoft Azure Fundamentals",
      icon: "☁️",
      year: "2024",
      issuer: "Microsoft",
      verified: true,
    },
    {
      name: "FreeCodeCamp - Responsive Web Design",
      icon: "📱",
      year: "2023",
      issuer: "FreeCodeCamp",
      verified: true,
    },
    {
      name: "Cisco - JavaScript Essentials",
      icon: "🔧",
      year: "2023",
      issuer: "Cisco",
      verified: true,
    },
    {
      name: "Udemy - Advanced React Development",
      icon: "⚛️",
      year: "2024",
      issuer: "Udemy",
      verified: true,
    },
    {
      name: "Google UX Design Certificate",
      icon: "🎨",
      year: "2023",
      issuer: "Google",
      verified: true,
    },
    {
      name: "Meta Frontend Developer",
      icon: "💻",
      year: "2024",
      issuer: "Meta",
      verified: true,
    },
  ];

  const stats = [
    {
      label: "Proyectos Completados",
      value: counters.projects,
      suffix: "+",
      icon: Rocket,
      color: "text-blue-600",
    },
    {
      label: "Años de Experiencia",
      value: counters.experience,
      suffix: "+",
      icon: Calendar,
      color: "text-purple-600",
    },
    {
      label: "Satisfacción del Cliente",
      value: counters.satisfaction,
      suffix: "%",
      icon: Heart,
      color: "text-green-600",
    },
    {
      label: "Tecnologías Dominadas",
      value: counters.technologies,
      suffix: "+",
      icon: Code,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <div className="font-bold text-gray-900">PORTAFOLIO</div>
                <div className="text-xs text-gray-500 flex items-center">
                  <div className="w-1 h-1 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                  Online
                </div>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                "inicio",
                "habilidades",
                "experiencia",
                "proyectos",
                "testimonios",
                "contacto",
              ].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === section
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                  onClick={() => setActiveSection(section)}>
                  {section.toUpperCase()}
                </a>
              ))}
            </div>

            <div className="flex space-x-2">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-green-600 hover:bg-green-50 hover:scale-110 transition-all duration-300 relative group">
                  <Phone className="h-4 w-4" />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    WhatsApp
                  </div>
                </Button>
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-blue-600 hover:bg-blue-50 hover:scale-110 transition-all duration-300 relative group">
                  <Linkedin className="h-4 w-4" />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    LinkedIn
                  </div>
                </Button>
              </a>
              <a href={contact.email} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-yellow-600 hover:bg-yellow-50 hover:scale-110 transition-all duration-300 relative group">
                  <Mail className="h-4 w-4" />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Email
                  </div>
                </Button>
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-800 hover:bg-gray-50 hover:scale-110 transition-all duration-300 relative group">
                  <Github className="h-4 w-4" />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    GitHub
                  </div>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-purple-50/20 to-pink-50/20"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2 space-y-8">
              <div
                className={`space-y-6 transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full shadow-sm border border-green-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="font-medium">
                      Disponible para trabajar
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <MapPin className="w-4 h-4 mr-1" />
                    Remote / México
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      <span className="text-sm font-medium">🇪🇸 Español</span>
                    </div>
                    <div className="flex items-center bg-red-100 text-red-700 px-3 py-1 rounded-full">
                      <span className="text-sm font-medium">🇺🇸 English</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Jose Dimas Alejandro
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">
                      Espinosa Razo
                    </span>
                  </h1>

                  <div className="flex items-center space-x-2 text-lg">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1">
                      Senior Frontend Developer
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-purple-300 text-purple-700">
                      UX/UI Designer
                    </Badge>
                  </div>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Especializado en crear{" "}
                  <span className="font-semibold text-blue-600">
                    aplicaciones web escalables
                  </span>
                  , centradas en el usuario y con un enfoque en{" "}
                  <span className="font-semibold text-purple-600">
                    rendimiento y accesibilidad
                  </span>
                  . Transformo ideas en experiencias digitales excepcionales.
                </p>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center group">
                        <div
                          className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <stat.icon className={`h-6 w-6 ${stat.color}`} />
                        </div>
                        <div
                          className={`text-2xl font-bold ${stat.color} transition-all duration-1000`}>
                          {stat.value}
                          {stat.suffix}
                        </div>
                        <div className="text-xs text-gray-600 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="prose prose-gray max-w-none text-gray-600">
                  <p className="flex items-start space-x-2">
                    <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>
                      Con más de{" "}
                      <strong className="text-gray-800">
                        4 años de experiencia
                      </strong>{" "}
                      y{" "}
                      <strong className="text-gray-800">
                        15+ proyectos completados
                      </strong>
                      , he trabajado con tecnologías como JavaScript, React,
                      Node.js, Angular, Vue.js, Python, Figma y Photoshop. Me
                      mantengo actualizado constantemente con las últimas
                      tendencias y mejores prácticas.
                    </span>
                  </p>
                </div>
              </div>

              <div
                className={`flex flex-wrap gap-4 transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}>
                <a href={contact.cv} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all hover:scale-105 group">
                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Descargar CV
                  </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent hover:scale-105 transition-all group">
                  <Play className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Ver Demo Reel
                </Button>
                <Link href="#proyectos" scroll={true}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent hover:scale-105 transition-all group">
                    <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Ver Proyectos
                  </Button>
                </Link>
              </div>
            </div>

            <div
              className={`space-y-6 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}>
              <div className="relative flex justify-center">
                <div className="relative group">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-1 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                    <div className="w-full h-full rounded-full bg-white p-2">
                      <Image
                        src="/me.jpeg?height=300&width=300&text=Professional+Photo"
                        alt="Jose Dimas Alejandro Espinosa Razo"
                        width={300}
                        height={300}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                    <span className="text-2xl">👋</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute top-1/2 -left-8 w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1000">
                    <Coffee className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute top-1/4 -right-8 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg animate-pulse delay-500">
                    <Code className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>

              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                    Impacto Profesional
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        Proyectos Entregados
                      </span>
                      <span className="font-bold text-blue-600 text-lg">
                        15+
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        Satisfacción Cliente
                      </span>
                      <span className="font-bold text-purple-600 text-lg">
                        100%
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        Tiempo Promedio
                      </span>
                      <span className="font-bold text-green-600 text-lg">
                        -30%
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                      <span className="text-gray-700 font-medium">
                        Conversiones
                      </span>
                      <span className="font-bold text-orange-600 text-lg">
                        +40%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="habilidades"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2">
              Expertise
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Habilidades Profesionales
              <span className="block text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2">
                🛠️ Competencias Técnicas
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Competencias técnicas y creativas desarrolladas a través de años
              de experiencia práctica, formación continua y proyectos
              desafiantes en el mundo real.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white/95 backdrop-blur-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                      <skill.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-gray-100 mb-1">
                        {skill.years}
                      </Badge>
                      <div className="text-xs text-gray-500">
                        {skill.projects}
                      </div>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {skill.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-700">
                        Nivel de competencia
                      </span>
                      <span className="text-xs font-bold text-gray-900">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                        style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${skill.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-pink-50/30"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
              Tech Stack
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Conocimientos Técnicos
              <span className="block text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mt-2">
                🔥 Tecnologías & Herramientas
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stack tecnológico completo con niveles de competencia verificados
              y experiencia práctica en proyectos reales
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 ${tech.color} bg-white/95 backdrop-blur-sm overflow-hidden relative`}>
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-bl-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {tech.name}
                      </h3>
                      <Badge variant="outline" className="text-xs mt-1">
                        {tech.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-600">
                        Competencia
                      </span>
                      <span className="text-sm font-bold text-gray-900">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-2.5 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                        style={{ width: `${tech.level}%` }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experiencia"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2">
              Career
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Experiencia Profesional
              <span className="block text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 mt-2">
                💼 Trayectoria & Logros
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trayectoria profesional marcada por el crecimiento continuo, la
              innovación y el impacto positivo en cada proyecto
            </p>
          </div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl overflow-hidden bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3 gap-0">
                    <div
                      className={`lg:col-span-1 p-8 bg-gradient-to-br ${exp.color} text-white relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="relative z-10">
                        <div className="flex items-center mb-4">
                          <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
                          <Badge className="bg-white/20 text-white border-white/30">
                            {exp.period}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {exp.position}
                        </h3>
                        <p className="text-lg font-medium opacity-90 mb-4">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              className="bg-white/20 text-white text-xs border-white/30">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-2 p-8">
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                        {exp.description}
                      </p>
                      <div className="space-y-4">
                        <h4 className="font-bold text-gray-900 flex items-center text-lg">
                          <Award className="w-6 h-6 text-yellow-500 mr-3" />
                          Logros Destacados
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              className="flex items-start group">
                              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                              <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2">
              Portfolio
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Proyectos Destacados
              <span className="block text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mt-2">
                🚀💡 Casos de Éxito
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Selección de trabajos que demuestran mis capacidades técnicas,
              creatividad y enfoque en resultados medibles
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              Proyectos Destacados
            </h3>
            <div className="grid lg:grid-cols-2 gap-12">
              {projects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <Card
                    key={index}
                    className={`group hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-0 ${project.color} overflow-hidden relative`}>
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-yellow-500 text-white shadow-lg">
                        <Star className="w-3 h-3 mr-1" />
                        Destacado
                      </Badge>
                    </div>

                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || ""}
                        alt={project.title}
                        width={255}
                        height={300}
                        className="mx-auto h-64 group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <Badge
                          variant="outline"
                          className="bg-white/90 text-gray-700 border-white/50">
                          {project.category}
                        </Badge>
                        <Badge
                          className={
                            project.status === "En producción"
                              ? "bg-green-500 text-white shadow-lg"
                              : "bg-blue-500 text-white shadow-lg"
                          }>
                          {project.status}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <div className="text-right text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {project.timeline}
                          </div>
                          <div className="flex items-center mt-1">
                            <Users className="w-4 h-4 mr-1" />
                            {project.client}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Code className="w-4 h-4 mr-2" />
                          Stack Tecnológico:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="bg-white/80 hover:bg-white transition-colors">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                          Resultados Clave:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.metrics.map((metric, metricIndex) => (
                            <div
                              key={metricIndex}
                              className="flex items-center text-sm text-gray-700 bg-white/60 rounded-lg p-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              {metric}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={project.links?.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-block">
                          <Button
                            size="sm"
                            className="w-full flex items-center gap-2 bg-gradient-to-r from-pink-400 to-rose-400 text-white border-0 hover:from-pink-500 hover:to-rose-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group rounded-full px-6">
                            <ExternalLink className="h-4 w-4 group-hover:rotate-45 transition-transform" />
                            <span className="font-semibold">Ver Proyecto</span>
                          </Button>
                        </a>
                        <a
                          href={project.links?.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block">
                          <Button
                            variant="outline"
                            size="sm"
                            className="group-hover:bg-white/90 group-hover:scale-105 transition-all bg-transparent">
                            <Github className="h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Rocket className="w-6 h-6 text-blue-500 mr-2" />
              Otros Proyectos
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <Card
                    key={index}
                    className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border-0 ${project.color} overflow-hidden`}>
                    <div className="relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={220}
                        height={200}
                        className="mx-auto h-48 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Badge
                          className={
                            project.status === "Completado"
                              ? "bg-green-500 text-white shadow-lg"
                              : "bg-blue-500 text-white shadow-lg"
                          }>
                          {project.status}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {project.timeline}
                        </Badge>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.technologies
                            .slice(0, 3)
                            .map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="secondary"
                                className="text-xs bg-white/80">
                                {tech}
                              </Badge>
                            ))}
                          {project.technologies.length > 3 && (
                            <Badge
                              variant="secondary"
                              className="text-xs bg-white/80">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        {project.metrics
                          .slice(0, 2)
                          .map((metric, metricIndex) => (
                            <div
                              key={metricIndex}
                              className="text-xs text-gray-600 flex items-center">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                              {metric}
                            </div>
                          ))}
                      </div>
                      <div className="flex gap-3">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full group-hover:bg-white/90 group-hover:scale-105 transition-all bg-transparent">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Ver Detalles
                          </Button>
                        </a>
                        <a
                          href={project.links?.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block">
                          <Button
                            variant="outline"
                            size="sm"
                            className="group-hover:bg-white/90 group-hover:scale-105 transition-all bg-transparent">
                            <Github className="h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonios"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2">
              Testimonials
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Lo que dicen mis clientes
              <span className="block text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mt-2">
                💬 Testimonios Reales
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              La satisfacción de mis clientes es mi mayor logro. Aquí algunas
              experiencias de trabajo conjunto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4 border-2 border-gray-200"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}
                      </p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-500 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <Quote className="w-8 h-8 text-gray-300 absolute -top-2 -left-2" />
                    <p className="text-gray-700 leading-relaxed italic pl-6">
                      "{testimonial.content}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-2">
              Education
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Certificaciones & Formación
              <span className="block text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 mt-2">
                🎓 Aprendizaje Continuo
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Compromiso constante con el aprendizaje y la actualización
              profesional a través de certificaciones verificadas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/95 backdrop-blur-sm group overflow-hidden">
                <CardContent className="p-6 relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                      {cert.icon}
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="text-xs mb-1">
                        {cert.year}
                      </Badge>
                      {cert.verified && (
                        <div className="flex items-center text-green-600">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          <span className="text-xs">Verificado</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
                  <p className="text-xs text-gray-500">
                    Certificación Profesional
                  </p>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contacto"
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-blue-500/5 to-purple-500/5"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2">
            Let's Connect
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para trabajar juntos?
            <span className="block text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mt-2">
              🤝 Hagamos algo increíble
            </span>
          </h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Estoy disponible para nuevos proyectos, oportunidades laborales y
            colaboraciones emocionantes.
            <br />
            <span className="text-yellow-300">
              ¡Transformemos tus ideas en realidad digital!
            </span>
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">
                  Email Profesional
                </h3>
                <p className="text-gray-300 mb-4">
                  Respuesta garantizada en 24h
                </p>
                <p className="text-blue-300 font-medium">
                  dim_er89@outlook.com
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-md hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">WhatsApp</h3>
                <p className="text-gray-300 mb-4">Disponible de 9:00 - 18:00</p>
                <p className="text-green-300 font-medium">+52 (456) 126-7556</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href={contact.email} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all hover:scale-105 group text-lg px-8 py-4">
                <Mail className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                Enviar Mensaje
              </Button>
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 bg-transparent hover:scale-105 transition-all shadow-xl text-lg px-8 py-4">
                <Phone className="mr-3 h-6 w-6" />
                WhatsApp
              </Button>
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 bg-transparent hover:scale-105 transition-all shadow-xl text-lg px-8 py-4">
                <Linkedin className="mr-3 h-6 w-6" />
                LinkedIn
              </Button>
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900 bg-transparent hover:scale-105 transition-all shadow-xl text-lg px-8 py-4">
                <Github className="mr-3 h-6 w-6" />
                GitHub
              </Button>
            </a>
          </div>

          <div className="text-center">
            <p className="text-gray-300 mb-2">¿Prefieres descargar mi CV?</p>
            <a href={contact.cv} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 bg-transparent hover:scale-105 transition-all shadow-xl">
                <Download className="mr-2 h-5 w-5" />
                Descargar Curriculum
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">JD</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl">
                    Jose Dimas Alejandro <br />
                    Espinosa Razo
                  </h3>
                  <p className="text-gray-400">
                    Frontend Developer & UX/UI Designer
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Transformando ideas en experiencias digitales excepcionales.
                Siempre buscando la perfección en cada línea de código.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg text-white">Enlaces Rápidos</h4>
              <div className="space-y-2">
                <a
                  href="#inicio"
                  className="block text-gray-300 hover:text-white transition-colors">
                  Inicio
                </a>
                <a
                  href="#habilidades"
                  className="block text-gray-300 hover:text-white transition-colors">
                  Habilidades
                </a>
                <a
                  href="#experiencia"
                  className="block text-gray-300 hover:text-white transition-colors">
                  Experiencia
                </a>
                <a
                  href="#proyectos"
                  className="block text-gray-300 hover:text-white transition-colors">
                  Proyectos
                </a>
                <a
                  href="#contacto"
                  className="block text-gray-300 hover:text-white transition-colors">
                  Contacto
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg text-white">Conecta Conmigo</h4>
              <div className="flex space-x-4">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href={contact.email}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all">
                    <Phone className="h-5 w-5" />
                  </Button>
                </a>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">dim_er89@outlook.com</p>
                <p className="text-gray-300">+52 (456) 126-7556</p>
                <p className="text-gray-300">México, Remote</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400">
                  © 2024 Jose Dimas Alejandro Espinosa Razo
                </p>
                <p className="text-gray-500 text-sm">
                  Desarrollado con ❤️ usando Next.js, Tailwind CSS y mucho café
                  ☕
                </p>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>Hecho en México 🇲🇽</span>
                <span>•</span>
                <span>Con amor por el código 💻</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
