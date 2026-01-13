import { Metadata } from "next"
import Navbar from "@/components/Navbar"
import Link from "next/link"
import {
  ArrowLeft,
  Users,
  Share2,
  Download,
  Plus,
  Search,
} from "lucide-react"

export const metadata: Metadata = {
  title:
    "Family Tree Builder — Preserve Your Legacy | Shristi Universe",
  description:
    "Create your family and community trees with Shristi Universe. Preserve family history, document genealogy, connect generations, and protect your legacy online.",
  openGraph: {
    title: "Family Tree Builder — Shristi Universe",
    description:
      "Build interactive family and community trees with photos, stories, timelines, and collaboration tools.",
    url: "/features/family-tree",
    siteName: "Shristi Universe",
    type: "website",
  },
}

const treeFeatures = [
  {
    icon: Plus,
    title: "Add Family Members",
    description:
      "Build a tree from scratch or expand an existing lineage with detailed profiles and life events.",
  },
  {
    icon: Share2,
    title: "Collaborate Securely",
    description:
      "Invite relatives and community members to enrich shared family history together.",
  },
  {
    icon: Download,
    title: "Export & Preserve",
    description:
      "Download, print, or archive your family tree for long-term preservation.",
  },
  {
    icon: Search,
    title: "Discover Connections",
    description:
      "Search existing trees and connect with relatives you may have never met.",
  },
]

export default function FamilyTreePage() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-blue-50 to-white">
      <Navbar />

      {/* Back */}
      <div className="max-w-6xl mx-auto px-6 pt-8 w-full">
        <Link
          href="/features"
          className="flex items-center gap-2 text-gray-600 hover:text-[#5d87ff]"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Features</span>
        </Link>
      </div>

      <main className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-6 space-y-20">

          {/* ================= HERO ================= */}
          <header className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <Users className="w-16 h-16 text-[#5d87ff]" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Family Tree Builder — Your Legacy Starts Here
              </h1>
              <p className="text-gray-600 text-lg max-w-3xl">
                Building and expanding your family tree has never been more meaningful.
                Shristi Universe helps you connect generations, document genealogy,
                and preserve family history as living stories — not just names on a chart.
              </p>
            </div>
          </header>

          {/* ================= WHY IT MATTERS ================= */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Why Shristi Universe’s Tree Builder Matters
            </h2>
            <p className="text-gray-600 mb-6 max-w-4xl">
              Your family’s story deserves more than a static genealogy chart.
              With our Family Tree Builder, you create an interactive digital legacy
              designed to grow, connect, and endure.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Build a tree from scratch or expand an existing lineage</li>
              <li>Add photos, timelines, and detailed member profiles</li>
              <li>Invite relatives to collaborate and enrich shared history</li>
              <li>Preserve family and community connections for future generations</li>
            </ul>

            <p className="text-gray-600 mt-6 max-w-4xl">
              Unlike traditional genealogy tools, Shristi Universe supports both
              family and community trees — enabling broader legacy preservation.
            </p>
          </section>

          {/* ================= FEATURES GRID ================= */}
          <section className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Core Family Tree Features
              </h2>

              <div className="space-y-6">
                {treeFeatures.map((feature, i) => {
                  const Icon = feature.icon
                  return (
                    <article
                      key={i}
                      className="bg-white p-6 rounded-xl shadow-sm border"
                    >
                      <div className="flex gap-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>

            {/* Visual */}
            <aside className="bg-white rounded-2xl shadow-xl p-8 border">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Interactive Family Tree Experience
              </h2>

              <div className="bg-linear-to-br from-blue-100 to-indigo-100 rounded-xl p-8 h-64 flex items-center justify-center mb-6">
                <span className="text-5xl">🌳</span>
              </div>

              <p className="text-gray-600">
                Easily build complex relationships using a drag-and-drop interface.
                Enrich every branch with stories, photos, and important milestones.
              </p>
            </aside>
          </section>

          {/* ================= COMMUNITY TREES ================= */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Go Beyond Family: Community & Group Trees
            </h2>

            <p className="text-gray-600 max-w-4xl mb-6">
              Shristi Universe allows you to create trees for communities, schools,
              heritage groups, and organizations — not just biological families.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Community organizations</li>
              <li>School alumni networks</li>
              <li>Cultural and heritage groups</li>
              <li>Local clubs and associations</li>
            </ul>

            <p className="text-gray-600 mt-6">
              This capability connects directly with our{" "}
              <Link href="/features/heritage-preservation" className="text-[#5d87ff] font-medium">
                preserving family history
              </Link>{" "}
              tools — ensuring memories and records are protected long-term.
            </p>
          </section>

          {/* ================= INTEGRATIONS ================= */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              A Unified Family & Community Ecosystem
            </h2>

            <p className="text-gray-600 max-w-4xl mb-4">
              Your family tree integrates seamlessly with other Shristi Universe features:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                <Link href="/features/event-planning" className="text-[#5d87ff]">
                  Modern social experience
                </Link>{" "}
                through shared events and reunions
              </li>
              <li>
                <Link href="/features/finance-management" className="text-[#5d87ff]">
                  Finance Management features
                </Link>{" "}
                for shared budgets and records
              </li>
            </ul>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Ready to Preserve Your Family Legacy?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join families and communities worldwide who are preserving their
              history, culture, and identity with Shristi Universe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#5d87ff] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#4a7cff]">
                Get Started Free
              </button>
              <button className="border-2 border-[#5d87ff] text-[#5d87ff] px-8 py-3 rounded-xl hover:bg-blue-50">
                View Tutorial
              </button>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}
