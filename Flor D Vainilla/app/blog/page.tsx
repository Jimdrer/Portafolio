import Navigation from "@/components/navigation"
import BlogHero from "@/components/blog-hero"
import BlogGrid from "@/components/blog-grid"
import BlogNewsletter from "@/components/blog-newsletter"

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BlogHero />
      <BlogGrid />
      <BlogNewsletter />
    </main>
  )
}
