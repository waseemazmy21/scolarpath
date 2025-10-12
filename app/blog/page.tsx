import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Star } from "lucide-react"
import { blogPosts } from "@/lib/data"
import Image from "next/image"

export default function BlogPage() {
  return (
    <main className="py-12">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge className="bg-gradient-to-r from-secondary to-accent text-white border-0 px-4 py-2">
            <BookOpen className="w-4 h-4 mr-2 inline" />
            Student Resources
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Our Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Expert advice, student stories, and helpful guides for your scholarship journey
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="h-full flex flex-col card-hover border-2 hover:border-secondary/30 cursor-pointer overflow-hidden group">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {index === 0 && (
                    <Badge className="absolute top-4 left-4 bg-accent text-white border-0 shadow-lg">
                      <Star className="w-3 h-3 mr-1 inline fill-white" />
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <Badge
                    className={`w-fit mb-2 border ${
                      index % 3 === 0
                        ? "bg-primary/10 text-primary border-primary/20"
                        : index % 3 === 1
                          ? "bg-secondary/10 text-secondary border-secondary/20"
                          : "bg-accent/10 text-accent border-accent/20"
                    }`}
                  >
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl line-clamp-2 group-hover:text-secondary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="font-medium">{post.author}</span>
                    <span className="text-xs bg-muted px-2 py-1 rounded">{post.readTime}</span>
                  </div>
                  <div className="flex items-center text-secondary font-semibold group-hover:gap-3 gap-2 transition-all">
                    Read More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
