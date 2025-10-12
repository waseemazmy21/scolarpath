import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  GraduationCap,
  DollarSign,
  Award,
  Globe,
  Lightbulb,
  Users,
  Building,
  Briefcase,
  Shield,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TenReasonsPage() {
  const reasons = [
    {
      icon: GraduationCap,
      title: "World-Class Education",
      description:
        "Russian universities have a 300-year tradition of academic excellence. Home to Nobel Prize winners and renowned scientists, these institutions offer globally recognized degrees in STEM, medicine, engineering, and more.",
      color: "from-blue-500 to-blue-600",
      stats: "Top 100 universities worldwide",
    },
    {
      icon: DollarSign,
      title: "Affordable Tuition and Living",
      description:
        "Study for a fraction of the cost compared to Western countries. Tuition ranges from $2,000-$8,000 per year, and you can live comfortably on $300-$500 per month including accommodation, food, and entertainment.",
      color: "from-green-500 to-green-600",
      stats: "Save up to 70% compared to US/UK",
    },
    {
      icon: Award,
      title: "Generous Scholarships",
      description:
        "Over 15,000 government scholarships awarded annually, covering tuition, accommodation, and providing monthly stipends. No application fees, and many universities offer additional scholarships.",
      color: "from-yellow-500 to-orange-600",
      stats: "15,000+ scholarships yearly",
    },
    {
      icon: Globe,
      title: "No Language Barrier",
      description:
        "Many programs offered entirely in English, plus a free one-year Russian language course. Become bilingual and add a valuable skill to your resume that's highly sought after in the international job market.",
      color: "from-purple-500 to-purple-600",
      stats: "1000+ English-taught programs",
    },
    {
      icon: Users,
      title: "Diverse International Community",
      description:
        "Join 300,000+ international students from 170+ countries. Experience a truly multicultural environment, build a global network, and make friends from every corner of the world.",
      color: "from-pink-500 to-pink-600",
      stats: "170+ nationalities on campus",
    },
    {
      icon: Building,
      title: "Modern Facilities",
      description:
        "State-of-the-art laboratories, modern libraries with digital resources, high-speed internet, comfortable dormitories, sports complexes, and recreational facilities. Russian universities invest heavily in infrastructure.",
      color: "from-indigo-500 to-indigo-600",
      stats: "Billions invested in infrastructure",
    },
    {
      icon: Lightbulb,
      title: "Research Opportunities",
      description:
        "Access cutting-edge research projects, collaborate with leading scientists, participate in well-funded programs, publish in international journals, and attend global conferences.",
      color: "from-cyan-500 to-cyan-600",
      stats: "Top research institutions",
    },
    {
      icon: Briefcase,
      title: "Career Prospects",
      description:
        "Internship opportunities with Russian and international companies, growing demand for Russian-speaking professionals, strong alumni networks, and post-study work opportunities.",
      color: "from-red-500 to-red-600",
      stats: "95% employment rate",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description:
        "Russia is safe for international students with 24/7 university security, dedicated support services, active student communities, emergency support, and available halal food and prayer facilities.",
      color: "from-emerald-500 to-emerald-600",
      stats: "24/7 security and support",
    },
    {
      icon: MapPin,
      title: "Strategic Location",
      description:
        "Gateway between Europe and Asia, easy travel to European countries, explore diverse regions within Russia, experience both European and Asian cultures, with affordable domestic and international travel.",
      color: "from-violet-500 to-violet-600",
      stats: "Bridge between continents",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 via-blue-600/80 to-green-600/90" />
        <Image
          src="/beautiful-russian-university-building-with-student.jpg?height=800&width=1600&query=stunning Russian university building with happy international students"
          alt="Russian university"
          fill
          className="object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">Study Guides</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              10 Compelling Reasons to Study in Russia
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto text-balance">
              Discover why Russia is becoming the top choice for international students from the Middle East and beyond
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 mt-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Fatima Al-Sayed</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>January 10, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>10 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/blog">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 pb-12 max-w-4xl">
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Choosing where to pursue your higher education is one of the most important decisions you'll make. Russia is
            emerging as a top destination for international students, especially from the Middle East and North Africa.
            Here are 10 compelling reasons why Russia should be at the top of your list.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="space-y-12 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-300"
              >
                <div className="grid md:grid-cols-[auto_1fr] gap-0">
                  {/* Number and Icon */}
                  <div
                    className={`bg-gradient-to-br ${reason.color} p-8 flex flex-col items-center justify-center text-white min-w-[140px]`}
                  >
                    <div className="text-5xl font-bold mb-4">{String(index + 1).padStart(2, "0")}</div>
                    <Icon className="h-12 w-12" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{reason.description}</p>
                    <Badge variant="secondary" className="text-sm">
                      {reason.stats}
                    </Badge>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Bonus Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 rounded-2xl p-8 md:p-12 border-2 border-yellow-200">
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-lg px-4 py-2">
                BONUS
              </Badge>
              <h2 className="text-3xl font-bold">Rich Cultural Experience</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">World-Renowned Culture</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Immerse yourself in the culture that gave the world Tolstoy, Dostoevsky, Tchaikovsky, and the Bolshoi
                  Ballet. Visit world-class museums, attend opera and ballet performances, and explore historic cities
                  with stunning architecture.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Travel Opportunities</h4>
                <p className="text-muted-foreground leading-relaxed">
                  From the palaces of St. Petersburg to the beaches of Sochi, from the mountains of the Caucasus to the
                  vastness of Siberia - Russia offers incredible diversity. Plus, it's a gateway to explore both Europe
                  and Asia affordably.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How Russia Compares</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-2">🇷🇺</div>
              <h3 className="font-semibold mb-2">Russia</h3>
              <div className="text-2xl font-bold text-green-600 mb-2">$2-8K</div>
              <p className="text-sm text-muted-foreground">Annual tuition + scholarships</p>
            </Card>
            <Card className="p-6 text-center opacity-60">
              <div className="text-4xl mb-2">🇺🇸</div>
              <h3 className="font-semibold mb-2">USA</h3>
              <div className="text-2xl font-bold text-red-600 mb-2">$30-60K</div>
              <p className="text-sm text-muted-foreground">Annual tuition</p>
            </Card>
            <Card className="p-6 text-center opacity-60">
              <div className="text-4xl mb-2">🇬🇧</div>
              <h3 className="font-semibold mb-2">UK</h3>
              <div className="text-2xl font-bold text-red-600 mb-2">$25-50K</div>
              <p className="text-sm text-muted-foreground">Annual tuition</p>
            </Card>
          </div>
        </section>

        {/* Student Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What Students Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
              <p className="text-muted-foreground italic mb-4">
                "I chose Russia for my engineering degree, and it was the best decision. The education quality is
                excellent, the scholarship covered everything, and I made friends from all over the world. Now I'm
                working for an international company!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <div className="font-semibold">Mohammed Al-Rashid</div>
                  <div className="text-sm text-muted-foreground">Engineering Graduate, Saudi Arabia</div>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50">
              <p className="text-muted-foreground italic mb-4">
                "As a medical student in Russia, I'm getting hands-on experience in modern hospitals, learning from
                experienced professors, and paying a fraction of what I would elsewhere. Plus, I'm now fluent in
                Russian!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white font-bold">
                  L
                </div>
                <div>
                  <div className="font-semibold">Layla Hassan</div>
                  <div className="text-sm text-muted-foreground">Medical Student, Egypt</div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-lg leading-relaxed mb-4 text-white/90">
              Russia offers a unique combination of quality education, affordability, cultural richness, and career
              opportunities. With generous scholarships, modern facilities, and a welcoming international community,
              it's an excellent choice for students seeking a transformative educational experience.
            </p>
            <p className="text-lg leading-relaxed text-white/90 mb-6">
              Whether you're interested in engineering, medicine, business, or humanities, Russian universities provide
              world-class programs that can launch your global career. The experience of studying in Russia will not
              only give you a quality degree but also broaden your perspectives and create lifelong memories.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/scholarships">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90">
                  Explore Scholarships
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
