import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Calendar, MapPin, Search, Star } from "lucide-react"
import { scholarships } from "@/lib/data"
import Image from "next/image"

export default function ScholarshipsPage() {
  return (
    <main className="py-12">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 px-4 py-2">
            <Star className="w-4 h-4 mr-2 inline fill-white" />
            500+ Opportunities
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Scholarship Database</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Browse our comprehensive database of scholarships for Egyptian and Arab students
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input
              placeholder="Search scholarships by country, field, or keyword..."
              className="pl-12 h-14 text-base border-2 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        {/* Scholarships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scholarships.map((scholarship, index) => (
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
                  className={`absolute top-4 right-4 shadow-lg border-0 ${
                    index % 3 === 0 ? "bg-primary" : index % 3 === 1 ? "bg-secondary" : "bg-accent"
                  } text-white`}
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
              <CardContent className="flex-1 space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 text-secondary" />
                  <span>Deadline: {new Date(scholarship.deadline).toLocaleDateString()}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/10 text-primary border-primary/20 border">{scholarship.level}</Badge>
                  <Badge className="bg-secondary/10 text-secondary border-secondary/20 border">
                    {scholarship.provider}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 group-hover:shadow-lg transition-all"
                  asChild
                >
                  <Link href={`/scholarships/${scholarship.id}`}>
                    View Details <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
