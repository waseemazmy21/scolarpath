import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Heart, MessageCircle, Users, Smile, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function RussianPeoplePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/90 via-purple-600/80 to-blue-600/90" />
        <Image
          src="/diverse-group-of-students-laughing-together-in-rus.jpg?height=800&width=1600&query=diverse group of international and Russian students laughing together warmly"
          alt="Students together"
          fill
          className="object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">Cultural Insights</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Are Russian People Cold?</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto text-balance">
              Breaking stereotypes and discovering the warmth behind the reserve
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 mt-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Youssef Ibrahim</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>January 5, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
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
            "Are Russian people cold and unfriendly?" This question comes up constantly among students considering
            studying in Russia. The short answer? No. But understanding why this stereotype exists—and what the reality
            actually looks like—will help you navigate Russian culture with confidence and build meaningful friendships
            that last a lifetime.
          </p>
        </div>

        {/* The Myth vs Reality */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">The Myth vs. The Reality</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-gray-100 to-gray-200 border-2">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">❄️</div>
                <h3 className="text-xl font-semibold text-gray-700">The Stereotype</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Russians never smile</li>
                <li>• They're unfriendly to foreigners</li>
                <li>• Cold and distant personalities</li>
                <li>• Difficult to make friends with</li>
                <li>• Unwelcoming culture</li>
              </ul>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-pink-100 to-purple-100 border-2 border-pink-300">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">❤️</div>
                <h3 className="text-xl font-semibold text-purple-700">The Reality</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Warm and genuine when you know them</li>
                <li>• Incredibly hospitable and generous</li>
                <li>• Deep, meaningful friendships</li>
                <li>• Loyal and supportive friends for life</li>
                <li>• Rich, welcoming culture</li>
              </ul>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Understanding the Cultural Context</h2>
          </div>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            So where does this "cold Russian" stereotype come from? It's rooted in real cultural differences—but these
            differences don't mean what you might think. Let's break it down.
          </p>

          <Card className="p-8 mb-6 bg-gradient-to-br from-blue-50 to-purple-50">
            <h3 className="text-2xl font-semibold mb-4">The Public Reserve</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In public spaces, Russians tend to maintain a more reserved demeanor. You'll notice fewer smiles at
              strangers on the metro, more serious expressions in formal settings, and direct communication without
              excessive pleasantries. This isn't rudeness or coldness—it's cultural authenticity.
            </p>
            <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
              <p className="font-semibold text-blue-700 mb-2">The Cultural Key:</p>
              <p className="text-muted-foreground">
                In Russian culture, smiling without genuine reason is considered insincere. A smile is reserved for real
                moments of happiness or when greeting friends. It's a sign of authenticity, not coldness. This cultural
                norm values substance over surface-level pleasantries.
              </p>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-pink-50 to-purple-50">
            <h3 className="text-2xl font-semibold mb-4">The Private Warmth</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Here's what changes everything: once you move from acquaintance to friend, you'll discover a completely
              different side of Russian culture. The reserve drops away, revealing remarkable warmth and generosity.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Incredibly warm and generous hospitality",
                "Deep, meaningful friendships built on trust",
                "Genuine interest in your culture and background",
                "Willingness to help and support international students",
                "Loyalty that lasts through challenges",
                "Welcoming you into their homes and families",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Heart className="h-5 w-5 text-pink-500 flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">What This Means for You</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Understanding these cultural differences will help you navigate friendships more effectively and avoid
            misinterpreting Russian behavior.
          </p>

          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Direct Communication</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Russians value honesty and say what they mean without excessive politeness. This directness isn't
                rudeness—it's respect for your time and intelligence. It leads to clearer, more authentic relationships
                where you always know where you stand.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <Coffee className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Meaningful Conversations</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Russians prefer deep conversations about life, ideas, and philosophy over small talk about the weather.
                While this might feel intense at first, it leads to fascinating discussions and more genuine
                connections. Friendships develop more slowly but with greater depth.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Quality Over Quantity</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Russians typically have smaller circles of close friends, and friendship is taken very seriously. It
                takes time to be considered a true friend, but once you are, you're valued deeply. These friendships are
                built to last a lifetime, with unwavering loyalty and support.
              </p>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">How to Build Genuine Friendships</h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto leading-relaxed">
            Ready to connect? Here are practical strategies that work:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🗣️",
                title: "Learn Basic Russian",
                description:
                  "Even simple phrases show respect and open doors. Russians genuinely appreciate the effort to speak their language.",
              },
              {
                icon: "🤔",
                title: "Show Genuine Curiosity",
                description:
                  "Ask about Russian culture and traditions. Share about your own background. Find common interests and build from there.",
              },
              {
                icon: "⏰",
                title: "Be Patient and Consistent",
                description:
                  "Friendships take time to develop. Don't be discouraged by initial reserve. Sincerity and consistency matter most.",
              },
              {
                icon: "🎉",
                title: "Join Activities and Events",
                description:
                  "Participate in student clubs, university events, and cultural celebrations. Shared experiences build bonds naturally.",
              },
              {
                icon: "🤝",
                title: "Respect Cultural Norms",
                description:
                  "Understand personal space, learn basic etiquette, and adapt to direct communication styles. Cultural respect goes both ways.",
              },
              {
                icon: "🏠",
                title: "Accept Invitations",
                description:
                  "Being invited to someone's home is a significant honor in Russian culture. Accept these invitations—Russian hospitality is legendary.",
              },
            ].map((tip, index) => (
              <Card key={index} className="p-6 hover:scale-105 transition-transform">
                <div className="text-4xl mb-3">{tip.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">The Real Answer</h2>
            <div className="space-y-4 text-lg leading-relaxed text-white/90">
              <p className="text-center text-xl">
                Are Russian people cold? <strong className="text-white">Absolutely not.</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="flex items-center gap-3">
                  <Smile className="h-6 w-6 flex-shrink-0" />
                  <span>
                    <strong>Reserved</strong> in public, <strong>warm</strong> in private
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6 flex-shrink-0" />
                  <span>
                    <strong>Direct</strong> in speech, <strong>sincere</strong> in friendship
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="h-6 w-6 flex-shrink-0" />
                  <span>
                    <strong>Serious</strong> on the surface, <strong>joyful</strong> in celebration
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 flex-shrink-0" />
                  <span>
                    <strong>Cautious</strong> at first, <strong>loyal</strong> forever
                  </span>
                </div>
              </div>
              <p className="text-center">
                Cultural expressions of warmth differ around the world. What might seem cold is simply a different—and
                equally valid—way of showing respect and sincerity. Once you understand this, you'll discover a depth of
                friendship and hospitality that will enrich your life immeasurably.
              </p>
            </div>
          </Card>
        </section>

        {/* Final Message */}
        <section className="mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Don't Let Stereotypes Hold You Back</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              The stereotype of "cold Russians" is just that—a stereotype based on cultural misunderstanding. The
              reality is far richer and more rewarding. Russian culture offers a different expression of warmth, one
              that values depth, authenticity, and lasting loyalty. Understanding and appreciating these differences
              will open doors to friendships that last a lifetime.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/scholarships">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
                >
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/blog">
                <Button size="lg" variant="outline">
                  Read More Stories
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}
