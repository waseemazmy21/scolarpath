import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  GraduationCap,
  Globe,
  BookOpen,
  Briefcase,
  ExternalLink,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LifeInRussiaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/80 to-green-600/90" />
        <Image
          src="/international-students-in-russia-campus.jpg?height=800&width=1600&query=diverse international students walking on beautiful Russian university campus in autumn"
          alt="International students in Russia"
          fill
          className="object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">🇷🇺 Student Guide</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Life as an International Student in Russia: What You Should Know
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Study in Russia Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>January 20, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>7 min read</span>
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

      {/* Content */}
      <article className="container mx-auto px-4 pb-20 max-w-4xl">
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Imagine landing in Moscow or St. Petersburg — excited, nervous, curious. If you're considering studying in
            Russia, here's what the journey looks like for thousands of international students.
          </p>
        </div>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold">✈️ Arrival: A New Beginning</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="p-8 text-center hover:scale-105 transition-transform border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">355,000+</div>
              <div className="text-sm text-muted-foreground">International Students</div>
            </Card>
            <Card className="p-8 text-center hover:scale-105 transition-transform border-2 border-green-200 bg-gradient-to-br from-green-50 to-green-100">
              <div className="text-4xl font-bold text-green-600 mb-2">170+</div>
              <div className="text-sm text-muted-foreground">Countries Represented</div>
            </Card>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            When you arrive, you'll notice the grand architecture, efficient metro systems, and sprawling campuses. Most
            universities have International Student Offices ready to help with registration, housing, and those first
            overwhelming weeks. You're not alone in this journey.
          </p>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold">🏫 Campus Life</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="p-6 border-2 hover:border-purple-500 transition-all">
              <h3 className="text-xl font-semibold mb-2 text-purple-600">Strong Support</h3>
              <p className="text-muted-foreground">
                International offices assist with visas, housing, and orientation. Language help and peer support ease
                your transition.
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-green-500 transition-all">
              <h3 className="text-xl font-semibold mb-2 text-green-600">Modern Facilities</h3>
              <p className="text-muted-foreground">
                Universities feature modern labs, libraries, sports centers, and comfortable student spaces with
                improving infrastructure.
              </p>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold">🎓 Top Universities for International Students</h2>
          </div>

          <div className="space-y-6">
            {/* 1. MSU */}
            <Card className="p-6 hover:shadow-xl transition-all border-l-4 border-l-yellow-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-yellow-600">1.</span>
                <div>
                  <h3 className="text-xl font-bold">Lomonosov Moscow State University (MSU)</h3>
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 text-xs">
                    QS #105 (2025)
                  </Badge>
                </div>
              </div>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  <strong className="text-foreground">Russia's #1 University:</strong> Founded in 1755, MSU is the
                  country's oldest and most prestigious institution, excelling in all disciplines from sciences to
                  humanities.
                </p>
                <p>
                  <strong className="text-foreground">Scholarships:</strong> Offers Russian Government Scholarships
                  covering full tuition, accommodation, and stipends. Also participates in Open Doors Olympiad.
                </p>
                <p>
                  <strong className="text-foreground">What Makes It Unique:</strong> The iconic main building houses an
                  entire academic city. Alumni include Nobel laureates and world leaders.
                </p>
              </div>
            </Card>

            {/* 2. RUDN */}
            <Card className="p-6 hover:shadow-xl transition-all border-l-4 border-l-green-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-green-600">2.</span>
                <div>
                  <h3 className="text-xl font-bold">RUDN University</h3>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-xs">
                    QS #367 (2025)
                  </Badge>
                </div>
              </div>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  <strong className="text-foreground">Most International:</strong> Students from 150+ countries make
                  RUDN one of the world's most diverse universities. Renowned for medicine, international relations, and
                  linguistics.
                </p>
                <p>
                  <strong className="text-foreground">Scholarships:</strong> RUDN Olympiad offers full/partial tuition
                  waivers for high performers. Many government scholarship spots available.
                </p>
                <p>
                  <strong className="text-foreground">What Makes It Unique:</strong> Founded specifically for
                  international students with decades of experience. Campus feels like a mini United Nations.
                </p>
              </div>
            </Card>

            {/* 3. HSE */}
            <Card className="p-6 hover:shadow-xl transition-all border-l-4 border-l-red-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-red-600">3.</span>
                <div>
                  <h3 className="text-xl font-bold">Higher School of Economics (HSE)</h3>
                  <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 text-xs">
                    QS #440 (2025)
                  </Badge>
                </div>
              </div>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  <strong className="text-foreground">Modern & International:</strong> Founded in 1992, HSE has rapidly
                  become one of Russia's top universities. Many programs taught entirely in English. Top-ranked for
                  economics, political science, and data science.
                </p>
                <p>
                  <strong className="text-foreground">Scholarships:</strong> Participates in Open Doors Olympiad with
                  full tuition coverage. Offers merit-based scholarships for high-achieving applicants.
                </p>
                <p>
                  <strong className="text-foreground">What Makes It Unique:</strong> Western academic culture with
                  emphasis on research and innovation. Attracts ambitious, globally-oriented students.
                </p>
              </div>
            </Card>

            {/* 4. MEPhI */}
            <Card className="p-6 hover:shadow-xl transition-all border-l-4 border-l-purple-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-purple-600">4.</span>
                <div>
                  <h3 className="text-xl font-bold">National Research Nuclear University (MEPhI)</h3>
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 text-xs">
                    QS #591 (2025)
                  </Badge>
                </div>
              </div>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  <strong className="text-foreground">Nuclear & Quantum Leader:</strong> Russia's premier institution
                  for nuclear physics, quantum technologies, and advanced engineering. Access to world-class labs and
                  particle accelerators.
                </p>
                <p>
                  <strong className="text-foreground">Scholarships:</strong> Generous scholarships for STEM students.
                  Many receive full government funding plus research stipends.
                </p>
                <p>
                  <strong className="text-foreground">What Makes It Unique:</strong> Unparalleled education in physics,
                  engineering, and cybersecurity. Strong global reputation and excellent career prospects.
                </p>
              </div>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold">💰 Scholarships: Your Path to Affordable Education</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Russia offers accessible scholarships with simple requirements and no strict age limits. Most can be applied
            for online through studyinrussia.ru or university portals.
          </p>

          <div className="space-y-4">
            {/* Russian Government Scholarship */}
            <Card className="p-6 border-l-4 border-l-blue-500">
              <h4 className="text-lg font-bold mb-2">1. Russian Government Scholarship (State Quota)</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The most comprehensive program for all academic levels — undergraduate, master's, and PhD.{" "}
                <strong className="text-blue-600">Deadline: January 15, 2025 (Applications currently open!)</strong>
              </p>
              <div className="bg-blue-50 p-3 rounded-lg text-sm">
                <p className="font-semibold text-foreground mb-1">Covers:</p>
                <ul className="space-y-1 text-muted-foreground text-xs">
                  <li>✓ Full tuition + monthly stipend + low-cost accommodation</li>
                  <li>✓ Free one-year Russian language course + medical insurance</li>
                  <li>✓ No GPA requirement, no IELTS/TOEFL needed, no age limit</li>
                  <li>✓ Final-year students can apply</li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Apply at <strong>education-in-russia.com</strong> — Over 15,000 students selected annually!
              </p>
            </Card>

            {/* Open Doors Olympiad */}
            <Card className="p-6 border-l-4 border-l-purple-500">
              <h4 className="text-lg font-bold mb-2">2. Open Doors Olympiad</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Global academic competition for master's and PhD students. Winners receive full tuition scholarships at
                top universities like MSU, HSE, and MEPhI.
              </p>
              <p className="text-xs text-muted-foreground">
                Visit <strong>od.globaluni.ru/en/</strong> to compete in your field.
              </p>
            </Card>

            {/* University Scholarships */}
            <Card className="p-6 border-l-4 border-l-green-500">
              <h4 className="text-lg font-bold mb-2">3. University Scholarships</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Many universities offer their own merit-based programs:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">RUDN Olympiad:</strong> Win full/partial tuition at
                  olymp.rudn.ru/en/
                </li>
                <li>
                  <strong className="text-foreground">HSE Merit Awards:</strong> For strong academic records in
                  economics and data science
                </li>
                <li>
                  <strong className="text-foreground">MEPhI STEM Funding:</strong> Generous support for physics and
                  engineering students
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-6 mt-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <p className="text-sm leading-relaxed text-white/90">
              <strong>💡 Pro Tip:</strong> Apply to multiple scholarships simultaneously to maximize your chances. Start
              early and prepare documents carefully.
            </p>
          </Card>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold">📚 Most Popular Fields of Study</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { field: "Medicine", color: "from-red-500 to-pink-600" },
              { field: "Engineering / IT / Technology", color: "from-blue-500 to-cyan-600" },
              { field: "Economics & Management", color: "from-green-500 to-emerald-600" },
              { field: "Law and Social Sciences", color: "from-purple-500 to-violet-600" },
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center hover:scale-105 transition-transform">
                <div
                  className={`h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-2xl font-bold`}
                >
                  {index + 1}
                </div>
                <h3 className="font-semibold text-sm">{item.field}</h3>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Card className="p-8 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white">
            <h2 className="text-2xl font-bold mb-4">🧠 Final Thoughts</h2>
            <p className="leading-relaxed text-white/90">
              Studying in Russia offers exceptional educational value, rich cultural experiences, and accessible
              scholarships at world-class universities. Yes, there will be adjustments — learning some Russian, adapting
              to the climate, navigating a different academic culture. But if you embrace these differences, you'll gain
              invaluable skills, unforgettable stories, and a global network that will serve you throughout your career.
            </p>
          </Card>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center">
              <ExternalLink className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold">📚 Resources & References</h2>
          </div>

          <Card className="p-6 bg-gray-50">
            <ul className="space-y-3">
              <li>
                <a
                  href="https://tass.com/society/1750613"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  TASS — International Students in Russia (2023-24 Data)
                </a>
              </li>
              <li>
                <a
                  href="https://erudera.com/news/putin-wants-to-have-half-a-million-intl-students-in-russian-universities-by-2030/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Erudera — Russia's International Education Goals
                </a>
              </li>
              <li>
                <a
                  href="https://studyinrussia.ru/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Study in Russia — Official Portal
                </a>
              </li>
              <li>
                <a
                  href="https://od.globaluni.ru/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open Doors Olympiad — Official Website
                </a>
              </li>
              <li>
                <a
                  href="https://olymp.rudn.ru/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  RUDN Olympiad — Official Website
                </a>
              </li>
              <li>
                <a
                  href="https://www.topuniversities.com/university-rankings/world-university-rankings/2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  QS World University Rankings 2025
                </a>
              </li>
            </ul>
          </Card>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-muted-foreground mb-6">
            Explore scholarships and begin your application to study in Russia
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/scholarships">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Browse Scholarships
              </Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline">
                Read More Stories
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
