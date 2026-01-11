import { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Link from "next/link"
import {
  ArrowLeft,
  Users,
  Calendar,
  DollarSign,
  Landmark,
  ChevronRight,
} from "lucide-react"

export const metadata: Metadata = {
  title:
    "Features | Digital Family Tree, Events & Heritage Tools - Shristi Universe",
  description:
    "Explore Shristi Universe features including digital family tree builder, family event management, shared finance tracking, and heritage preservation tools.",
  openGraph: {
    title: "Features - Shristi Universe",
    description:
      "Discover powerful tools to build family trees, organize events, manage shared finances, and preserve cultural heritage digitally.",
    url: "https://shristiuniverse.com/features",
    siteName: "Shristi Universe",
    type: "website",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Shristi Universe",
      applicationCategory: "FamilyApplication",
      operatingSystem: "Web",
      description:
        "A digital family heritage platform for family trees, events, shared finances, and cultural heritage preservation.",
    }),
  },
}

/* =========================
   FEATURES DATA
========================= */
const features = [
  {
    id: "family-tree",
    title: "Digital Family Tree Builder",
    description:
      "Visually build your multi-generation family tree and preserve relationships across generations.",
    longDescription:
      "Create detailed digital family trees with photos, biographies, and relationships to preserve your family legacy forever.",
    icon: Users,
    color: "from-blue-50 to-indigo-50",
  },
  {
    id: "event",
    title: "Family Groups & Event Management",
    description:
      "Create private family groups and organize events like reunions, birthdays, and ceremonies.",
    longDescription:
      "Plan, manage, and share family events securely with private groups, updates, photos, and schedules.",
    icon: Calendar,
    color: "from-green-50 to-emerald-50",
  },
  {
    id: "finance",
    title: "Shared Family Finance Management",
    description:
      "Track shared budgets, event expenses, and collective family savings transparently.",
    longDescription:
      "Manage shared finances, contributions, and goals in a secure and transparent digital environment.",
    icon: DollarSign,
    color: "from-yellow-50 to-amber-50",
  },
  {
    id: "heritage-sites",
    title: "Heritage Site Preservation",
    description:
      "Document ancestral homes, cultural landmarks, and important family locations.",
    longDescription:
      "Preserve heritage sites with historical context, stories, and media for future generations.",
    icon: Landmark,
    color: "from-purple-50 to-pink-50",
  },
]

/* =========================
   PAGE COMPONENT
========================= */
export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Back Link */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Link
          href="/about"
          className="flex items-center gap-2 text-gray-600 hover:text-[#5d87ff]"
        >
          <ArrowLeft className="w-5 h-5" aria-hidden />
          <span className="font-medium">Back to About</span>
        </Link>
      </div>

      <main className="flex-1">
        {/* PAGE HEADER */}
        <section className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Powerful Features for Preserving Family Legacy
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Shristi Universe is a <strong>digital family heritage platform</strong>{" "}
            offering tools to build family trees, organize events, manage shared
            finances, and preserve cultural heritage across generations.
          </p>
        </section>

        {/* FEATURES GRID */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Link
                  key={feature.id}
                  href={`/features/${feature.id}`}
                  aria-label={`Learn more about ${feature.title}`}
                  className="group block"
                >
                  <article
                    className={`bg-linear-to-br ${feature.color} rounded-2xl p-8 h-full border border-gray-200 hover:border-[#5d87ff] transition-all hover:shadow-xl`}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="bg-white p-4 rounded-xl shadow-sm">
                        <Icon
                          className="w-12 h-12 text-[#5d87ff]"
                          aria-hidden
                        />
                      </div>
                      <ChevronRight
                        className="w-6 h-6 text-gray-400 group-hover:text-[#5d87ff] group-hover:translate-x-2 transition-all"
                        aria-hidden
                      />
                    </div>

                    {/* H2 for SEO */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                      {feature.title}
                    </h2>

                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>

                    <p className="text-gray-500 text-sm mb-6">
                      {feature.longDescription}
                    </p>

                    <span className="inline-flex items-center gap-2 text-[#5d87ff] font-medium">
                      Learn more
                      <ChevronRight className="w-4 h-4" aria-hidden />
                    </span>
                  </article>
                </Link>
              )
            })}
          </div>
        </section>

        {/* SEO CONTENT BLOCK */}
        <section className="max-w-4xl mx-auto px-6 pb-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Built for Families, Communities & Future Generations
          </h2>
          <p className="text-gray-600 text-lg">
            Shristi Universe helps families preserve stories, heritage,
            relationships, and memories in a secure digital environment —
            strengthening connections across generations.
          </p>
        </section>
      </main>
    </div>
  )
}
