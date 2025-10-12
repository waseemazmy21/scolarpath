import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { getBlogPostById } from "@/lib/data"
import Image from "next/image"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPostById(params.id)

  if (!post) {
    notFound()
  }

  return (
    <main className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>

        {/* Header Image */}
        <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg mb-8">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>

        {/* Meta */}
        <div className="space-y-4 mb-8">
          <Badge variant="secondary">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-balance">{post.title}</h1>
          <div className="flex flex-wrap gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <div className="whitespace-pre-wrap leading-relaxed text-foreground">{post.content}</div>
        </article>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
              WL
            </div>
            <div>
              <h4 className="font-semibold text-lg">Waseem Labib</h4>
              <p className="text-muted-foreground">From Egypt</p>
              <p className="text-sm text-muted-foreground mt-2">
                Passionate about helping students find scholarship opportunities and navigate their study abroad
                journey.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-lg text-center space-y-4">
          <h3 className="text-2xl font-bold">Ready to Apply for Scholarships?</h3>
          <p className="text-muted-foreground">
            Browse our comprehensive scholarship database and find the perfect opportunity for you
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link href="/scholarships">Explore Scholarships</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
