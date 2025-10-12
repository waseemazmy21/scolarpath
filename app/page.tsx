import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Calendar, MapPin, Sparkles, Star } from "lucide-react"
import { getFeaturedScholarships, getRecentBlogPosts } from "@/lib/data"
import Image from "next/image"

export default function HomePage() {
  const featuredScholarships = getFeaturedScholarships(2)
  const recentPosts = getRecentBlogPosts(3)

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 md:py-32">
        {/* Decorative floating shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-primary/15 rounded-full blur-2xl animate-float" />

        {/* Dot pattern overlay */}
        <div className="absolute inset-0 dot-pattern opacity-40" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-gradient-to-r from-secondary to-primary text-white border-0 px-4 py-2 text-base">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Your Future Starts Here
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
              Find Your Next <span className="gradient-text inline-block">Dream Scholarship</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Discover thousands of scholarship opportunities for Egyptian and Arab students. Your dream education is
              closer than you think.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link href="/scholarships">
                  <Star className="mr-2 h-5 w-5" />
                  Browse Scholarships <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-secondary/10 hover:border-secondary transition-all bg-transparent"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Scholarships */}
      <section className="py-20 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="border-primary/30 text-primary px-4 py-1">
              <Star className="w-3 h-3 mr-1 inline fill-primary" />
              Featured
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Top Scholarships</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our handpicked selection of the best scholarship opportunities available right now
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredScholarships.map((scholarship, index) => (
              <Card
                key={scholarship.id}
                className="flex flex-col card-hover border-2 hover:border-primary/30 overflow-hidden group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={scholarship.image || "/placeholder.svg"}
                    alt={scholarship.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Badge
                    className={`absolute top-4 right-4 ${
                      index % 3 === 0 ? "bg-primary" : index % 3 === 1 ? "bg-secondary" : "bg-accent"
                    } text-white border-0 shadow-lg`}
                  >
                    {scholarship.coverageType}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-medium">{scholarship.country}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {scholarship.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{scholarship.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-secondary" />
                    <span>Deadline: {new Date(scholarship.deadline).toLocaleDateString()}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 group-hover:shadow-lg transition-all"
                    asChild
                  >
                    <Link href={`/scholarships/${scholarship.id}`}>
                      View Details{" "}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-primary/5 hover:border-primary transition-all bg-transparent"
              asChild
            >
              <Link href="/scholarships">
                View All Scholarships <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 via-secondary/5 to-muted/50 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float-slow" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="border-secondary/30 text-secondary px-4 py-1">
              <BookOpen className="w-3 h-3 mr-1 inline" />
              Blog
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Latest Articles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tips, guides, and insights to help you succeed in your scholarship journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <Card
                key={post.id}
                className="flex flex-col card-hover border-2 hover:border-secondary/30 overflow-hidden group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader>
                  <Badge
                    className={`w-fit mb-2 ${
                      index % 3 === 0
                        ? "bg-primary/10 text-primary border-primary/20"
                        : index % 3 === 1
                          ? "bg-secondary/10 text-secondary border-secondary/20"
                          : "bg-accent/10 text-accent border-accent/20"
                    } border`}
                  >
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl line-clamp-2 group-hover:text-secondary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-medium">{post.author}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="w-full hover:bg-secondary/10 hover:text-secondary transition-all group/btn"
                    asChild
                  >
                    <Link href={`/blog/${post.id}`}>
                      Read More{" "}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-secondary/5 hover:border-secondary transition-all bg-transparent"
              asChild
            >
              <Link href="/blog">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse-glow" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 text-primary-foreground">
            <div className="flex justify-center gap-2 mb-4">
              <Star className="w-8 h-8 fill-white text-white animate-pulse" />
              <Star className="w-8 h-8 fill-white text-white animate-pulse" />
              <Star className="w-8 h-8 fill-white text-white animate-pulse" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Start Your Journey?</h2>
            <p className="text-lg text-primary-foreground/90 text-pretty leading-relaxed">
              Join thousands of students who have found their perfect scholarship through ScholarPath. Your future is
              waiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                asChild
              >
                <Link href="/scholarships">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Explore Scholarships <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
