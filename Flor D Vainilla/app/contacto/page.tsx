import Navigation from "@/components/navigation"
import ContactHero from "@/components/contact-hero"
import ContactInfo from "@/components/contact-info"
import ContactForm from "@/components/contact-form"
import ContactMap from "@/components/contact-map"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </main>
  )
}
