// Scholarship data structure and static data
export interface Scholarship {
  id: string
  title: string
  provider: string
  country: string
  description: string
  eligibility: string[]
  benefits: string[]
  deadline: string
  applicationUrl: string
  coverageType: "Full" | "Partial"
  level: "Undergraduate" | "Graduate" | "PhD" | "All"
  fields: string[]
  image: string
  fieldsDescription?: string
  documents?: {
    stage1: string[]
    stage2: string[]
    stage3?: string[] // Added optional stage 3 for PhD programs
  }
  importantNotes?: string[]
  applicationTimeline?: string
  participatingUniversities?: string[] // Added for Open Doors
  keyFacts?: string[] // Added for Open Doors statistics
}

export const scholarships: Scholarship[] = [
  {
    id: "russian-govt",
    title: "Russian Government Scholarship",
    provider: "Ministry of Science and Higher Education of the Russian Federation",
    country: "Russia",
    description:
      "The Russian Government Scholarship is one of the largest fully funded programs in the world. Each year, more than 15,000 international students — including many from Arab countries — are selected to study at top public universities across Russia. It covers tuition costs and offers an affordable path to higher education with simple entry requirements and no age limits.",
    eligibility: [
      "High school diploma (for bachelor's programs)",
      "Bachelor's degree (for master's programs)",
      "Master's degree (for PhD programs)",
      "Final-year students can apply",
      "No GPA requirement",
      "No English or Russian certificates (IELTS/TOEFL not required)",
      "No age limit",
    ],
    benefits: [
      "Full tuition coverage",
      "Monthly stipend for living expenses",
      "1-year preparatory Russian language course",
      "Low-cost student accommodation",
      "Access to student discounts and university facilities",
    ],
    deadline: "2026-01-15",
    applicationUrl: "https://education-in-russia.com",
    coverageType: "Full",
    level: "All",
    fields: [
      "Medicine",
      "Engineering",
      "Computer Science",
      "Business",
      "Economics",
      "Social Sciences",
      "Arts",
      "Humanities",
    ],
    image: "/russian-university-campus-with-students.jpg",
    fieldsDescription:
      "Available in all academic disciplines, including but not limited to: medicine, engineering, computer science, business, economics, social sciences, arts, and humanities.",
    documents: {
      stage1: ["Passport (valid for at least 18 months)", "Graduation certificate or latest transcript"],
      stage2: [
        "Medical certificate proving absence of infectious diseases",
        "HIV test report",
        "Notarized Russian translation of educational documents (graduation certificate and transcript)",
        "Translated versions of all other required documents",
      ],
    },
    importantNotes: [
      "Final-year students can apply using proof of enrollment",
      "You can select up to six universities in your application",
      "The program admits around 15,000 students annually from across the world",
    ],
    applicationTimeline: "Expected Start: October 2025 | Deadline: 15 January 2026",
  },
  {
    id: "open-doors",
    title: "Open Doors: Russian Scholarship Project",
    provider: "Association of Global Universities",
    country: "Russia",
    description:
      "The Open Doors: Russian Scholarship Project is an international competition that gives talented students worldwide the opportunity to pursue Master's or Doctoral degrees in Russia with full tuition coverage. The entire process is online, and winners are admitted without entrance exams to one of 24 leading Russian universities. The project covers a wide range of disciplines — from artificial intelligence, engineering, and biotechnology to economics, linguistics, and medicine.",
    eligibility: [
      "International students from any country (185+ countries participate)",
      "Bachelor's degree for Master's programs",
      "Master's degree for PhD programs",
      "No entrance exams or application fees",
      "No age limit or language certificate required",
      "Programs offered in English or Russian",
    ],
    benefits: [
      "Full tuition-free education at your chosen university",
      "Monthly stipend (amount varies by university)",
      "Recognized Russian degrees worldwide (especially in Asia, Africa, and BRICS countries)",
      "Note: Travel, food, accommodation, communication, and medical insurance are not covered",
      "Student dormitories available at affordable rates with university housing support",
    ],
    deadline: "2025-12-10",
    applicationUrl: "https://od.globaluni.ru",
    coverageType: "Full",
    level: "Graduate",
    fields: [
      "Applied Mathematics & Artificial Intelligence",
      "Biology & Biotechnology",
      "Business & Management",
      "Chemistry & Materials Science",
      "Clinical Medicine & Public Health",
      "Computer & Data Science",
      "Earth & Environmental Sciences for Sustainability",
      "Economics & Econometrics",
      "Education & Psychology",
      "Engineering & Technology",
      "Physical Sciences & Technology",
      "Politics & International Studies",
      "Russian Language & Culture",
      "Urbanism & Civil Engineering",
    ],
    image: "/modern-russian-university-building.jpg",
    fieldsDescription:
      "You can apply for one or more of the 14 available fields of study, covering a wide range of disciplines from STEM to humanities and social sciences.",
    documents: {
      stage1: [
        "Passport",
        "Graduation certificate or transcript",
        "Motivation letter",
        "CV (Resume)",
        "Recommendation letters (optional)",
        "Certificates of achievements (optional)",
      ],
      stage2: ["Online subject test (required for all applicants)"],
      stage3: ["Interview with potential supervisor (PhD applicants only)"],
    },
    importantNotes: [
      "All documents must be in English or Russian",
      "Translations must be notarized if originals are in another language",
      "Applications are free and take only a few steps",
      "For Master's: Portfolio (Stage 1) + Online subject test (Stage 2)",
      "For PhD: Portfolio (Stage 1) + Subject test (Stage 2) + Interview (Stage 3)",
    ],
    applicationTimeline: "Applications Open: 1 September 2025 | Deadline: 10 December 2025 | Results: 27 February 2026",
    keyFacts: [
      "185+ countries participate",
      "146,000 participants worldwide",
      "6,300+ winners since the project began",
      "24 top Russian universities accept winners",
      "Russia ranks 6th globally in international student population",
    ],
    participatingUniversities: [
      "Lomonosov Moscow State University (MSU)",
      "Higher School of Economics (HSE University)",
      "ITMO University",
      "MEPhI (Moscow Engineering Physics Institute)",
      "RUDN University",
      "Tomsk State University",
      "Ural Federal University",
      "Kazan Federal University",
      "Peter the Great St. Petersburg Polytechnic University",
      "Sechenov First Moscow State Medical University",
      "...and 14 more leading universities",
    ],
  },
]

// Blog post data structure and static data
export interface BlogPost {
  id: string
  slug: string // Added slug for routing
  title: string
  excerpt: string
  author: string
  publishedDate: string
  readTime: string
  category: string
  image: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "life-in-russia",
    slug: "life-in-russia", // Added slug
    title: "International Students Life in Russia",
    excerpt:
      "Discover what it's really like to study and live in Russia as an international student. From campus life to cultural experiences, we cover everything you need to know.",
    author: "Waseem Labib",
    publishedDate: "2025-01-15",
    readTime: "8 min read",
    category: "Student Life",
    image: "/international-students-in-russia-campus.jpg",
    tags: ["Russia", "Student Life", "International Students", "Study Abroad"],
  },
  {
    id: "10-reasons-russia",
    slug: "10-reasons-russia", // Added slug
    title: "10 Reasons to Study in Russia",
    excerpt:
      "Thinking about studying in Russia? Here are 10 compelling reasons why Russia should be at the top of your list for international education.",
    author: "Waseem Labib",
    publishedDate: "2025-01-10",
    readTime: "10 min read",
    category: "Study Guides",
    image: "/beautiful-russian-university-building-with-student.jpg",
    tags: ["Russia", "Study Abroad", "Education", "Scholarships"],
  },
  {
    id: "russian-people-cold",
    slug: "russian-people-cold", // Added slug
    title: "Are Russian People Cold? Breaking Stereotypes",
    excerpt:
      'One of the most common questions from prospective students: "Are Russian people cold and unfriendly?" Let\'s debunk this myth and discover the reality of Russian hospitality.',
    author: "Waseem Labib",
    publishedDate: "2025-01-05",
    readTime: "12 min read",
    category: "Cultural Insights",
    image: "/diverse-group-of-students-laughing-together-in-rus.jpg",
    tags: ["Russia", "Culture", "Student Life", "Stereotypes"],
  },
]

// Helper functions
export function getFeaturedScholarships(count = 6): Scholarship[] {
  return scholarships.slice(0, count)
}

export function getScholarshipById(id: string): Scholarship | undefined {
  return scholarships.find((s) => s.id === id)
}

export function getRecentBlogPosts(count = 3): BlogPost[] {
  return blogPosts
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, count)
}

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find((p) => p.id === id)
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
