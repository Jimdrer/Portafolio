import Navigation from "@/components/navigation"
import BlogPost from "@/components/blog-post"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BlogPost slug={params.slug} />
    </main>
  )
}
