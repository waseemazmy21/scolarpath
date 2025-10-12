import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">About ScholarPath</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering Egyptian and Arab students to achieve their educational dreams
          </p>
        </div>

        {/* Mission */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground leading-relaxed">
            <p>
              ScholarPath was founded with a simple yet powerful mission: to make quality education accessible to every
              talented student, regardless of their financial background. We believe that education is the key to
              unlocking human potential and creating positive change in the world.
            </p>
            <p>
              We specialize in connecting Egyptian and Arab students with scholarship opportunities worldwide, with a
              particular focus on programs in Russia, Europe, and beyond. Our platform simplifies the scholarship search
              process, providing comprehensive information and guidance every step of the way.
            </p>
          </CardContent>
        </Card>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            {
              icon: Target,
              title: "Excellence",
              description: "We curate only the best scholarship opportunities from reputable institutions worldwide.",
            },
            {
              icon: Heart,
              title: "Support",
              description: "We provide comprehensive guidance and support throughout your scholarship journey.",
            },
            {
              icon: Users,
              title: "Community",
              description: "We build a supportive community of students helping each other succeed.",
            },
            {
              icon: Award,
              title: "Success",
              description: "We celebrate every student who achieves their dream of studying abroad.",
            },
          ].map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <value.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Our Story</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground leading-relaxed">
            <p>
              ScholarPath was born from personal experience. Our founders, themselves scholarship recipients, understood
              the challenges of finding and applying for scholarships. The process was often overwhelming, with
              information scattered across countless websites and limited guidance available.
            </p>
            <p>
              We created ScholarPath to be the platform we wished we had - a centralized hub where students can find
              reliable scholarship information, read real experiences from fellow students, and get the support they
              need to succeed.
            </p>
            <p>
              Today, we're proud to have helped thousands of students find and secure scholarships to pursue their
              dreams. Every success story motivates us to continue improving our platform and expanding our reach to
              help even more students.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
