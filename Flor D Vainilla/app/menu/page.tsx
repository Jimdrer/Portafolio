import Navigation from "@/components/navigation"
import MenuHero from "@/components/menu-hero"
import MenuCategories from "@/components/menu-categories"
import MenuFooter from "@/components/menu-footer"

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <MenuHero />
      <MenuCategories />
      <MenuFooter />
    </main>
  )
}
