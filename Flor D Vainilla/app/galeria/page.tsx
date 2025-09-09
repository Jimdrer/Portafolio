import Navigation from "@/components/navigation"
import GalleryHero from "@/components/gallery-hero"
import PhotoGallery from "@/components/photo-gallery"

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <GalleryHero />
      <PhotoGallery />
    </main>
  )
}
