import Navigation from "@/components/navigation"
import EventsHero from "@/components/events-hero"
import EventPackages from "@/components/event-packages"
import ReservationForm from "@/components/reservation-form"
import EventTestimonials from "@/components/event-testimonials"

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <EventsHero />
      <EventPackages />
      <ReservationForm />
      <EventTestimonials />
    </main>
  )
}
