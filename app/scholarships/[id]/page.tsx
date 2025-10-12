import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle2,
  FileText,
  AlertCircle,
  Clock,
  TrendingUp,
  Building2,
} from "lucide-react"
import { getScholarshipById } from "@/lib/data"
import Image from "next/image"

export default function ScholarshipDetailPage({ params }: { params: { id: string } }) {
  const scholarship = getScholarshipById(params.id)

  if (!scholarship) {
    notFound()
  }

  return (
    <main className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/scholarships">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Scholarships
          </Link>
        </Button>

        {/* Header Image */}
        <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg mb-8">
          <Image src={scholarship.image || "/placeholder.svg"} alt={scholarship.title} fill className="object-cover" />
        </div>

        {/* Title and Meta */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-primary text-primary-foreground">{scholarship.coverageType} Scholarship</Badge>
            <Badge variant="secondary">{scholarship.level}</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">{scholarship.title}</h1>
          <div className="flex flex-wrap gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>{scholarship.country}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>Deadline: {new Date(scholarship.deadline).toLocaleDateString()}</span>
            </div>
          </div>
          <p className="text-lg text-muted-foreground">{scholarship.provider}</p>
        </div>

        {/* Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>About This Scholarship</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">{scholarship.description}</p>
          </CardContent>
        </Card>

        {scholarship.keyFacts && scholarship.keyFacts.length > 0 && (
          <Card className="mb-8 border-primary/30 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Key Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {scholarship.keyFacts.map((fact, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{fact}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Eligibility */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Eligibility Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {scholarship.eligibility.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Benefits */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Scholarship Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {scholarship.benefits.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Fields of Study */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Available Fields of Study</CardTitle>
          </CardHeader>
          <CardContent>
            {scholarship.fieldsDescription && (
              <p className="text-foreground leading-relaxed mb-4">{scholarship.fieldsDescription}</p>
            )}
            <div className="flex flex-wrap gap-2">
              {scholarship.fields.map((field, index) => (
                <Badge key={index} variant="outline">
                  {field}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {scholarship.participatingUniversities && scholarship.participatingUniversities.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-secondary" />
                Participating Universities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {scholarship.participatingUniversities.map((university, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{university}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {scholarship.documents && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Required Documents
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">Stage 1: Portfolio</h3>
                <ul className="space-y-3">
                  {scholarship.documents.stage1.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">
                  Stage 2: {scholarship.documents.stage3 ? "Subject Test" : "For Shortlisted Candidates"}
                </h3>
                <ul className="space-y-3">
                  {scholarship.documents.stage2.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {scholarship.documents.stage3 && (
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Stage 3: PhD Applicants Only</h3>
                  <ul className="space-y-3">
                    {scholarship.documents.stage3.map((item, index) => (
                      <li key={index} className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {scholarship.importantNotes && scholarship.importantNotes.length > 0 && (
          <Card className="mb-8 border-accent/30 bg-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-accent" />
                Important Notes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {scholarship.importantNotes.map((note, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{note}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {scholarship.applicationTimeline && (
          <Card className="mb-8 border-primary/30 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Application Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground font-medium">{scholarship.applicationTimeline}</p>
            </CardContent>
          </Card>
        )}

        {/* Apply Button */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90" asChild>
            <a href={scholarship.applicationUrl} target="_blank" rel="noopener noreferrer">
              Apply Now <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="flex-1 bg-transparent" asChild>
            <Link href="/contact">Get Help with Application</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
