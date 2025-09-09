import Navigation from "@/components/navigation"
import JobsHero from "@/components/jobs-hero"
import CompanyCulture from "@/components/company-culture"
import JobListings from "@/components/job-listings"
import JobApplication from "@/components/job-application"

export default function JobsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <JobsHero />
      <CompanyCulture />
      <JobListings />
      <JobApplication />
    </main>
  )
}
