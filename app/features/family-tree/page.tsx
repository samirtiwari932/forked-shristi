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
  Heart,
  GitBranch,
  BookOpen,
  Camera,
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

const communityTypes = [
  { icon: Users, label: "Community organizations" },
  { icon: BookOpen, label: "School alumni networks" },
  { icon: Heart, label: "Cultural and heritage groups" },
  { icon: GitBranch, label: "Local clubs and associations" },
]

export default function FamilyTreePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f6f3]">
      <Navbar />

      {/* Back */}
      <div className="max-w-6xl mx-auto px-6 pt-8 w-full">
        <Link
          href="/features"
          className="inline-flex items-center gap-2 text-[#64748b] hover:text-[#5d87ff] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Features</span>
        </Link>
      </div>

      <main className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-6 space-y-20">

          {/* ================= HERO ================= */}
          <header className="relative">
            <div className="absolute -top-10 -left-20 w-72 h-72 bg-[#5d87ff]/10 rounded-full blur-3xl" />
            <div className="absolute top-20 -right-10 w-56 h-56 bg-[#5d87ff]/5 rounded-full blur-2xl" />
            
            <div className="relative flex flex-col lg:flex-row gap-8 items-start">
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#e2ded9]">
                <div className="w-16 h-16 bg-[#5d87ff]/10 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#5d87ff]" />
                </div>
              </div>
              <div>
                <span className="inline-block px-4 py-1.5 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-4">
                  Genealogy & Legacy
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#2d3748] mb-4 text-balance">
                  Family Tree Builder — Your Legacy Starts Here
                </h1>
                <p className="text-[#64748b] text-lg max-w-3xl leading-relaxed">
                  Building and expanding your family tree has never been more meaningful.
                  Shristi Universe helps you connect generations, document genealogy,
                  and preserve family history as living stories — not just names on a chart.
                </p>
              </div>
            </div>
          </header>

          {/* ================= VISUAL TREE DIAGRAM ================= */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-[#2d3748] mb-3">Explore Your Family Tree</h2>
            <p className="text-[#64748b] mb-8 max-w-2xl mx-auto">Visualize generations and connections in an intuitive, interactive format</p>
            
            <div className="relative bg-white rounded-3xl shadow-sm p-8 lg:p-12 border border-[#e2ded9]">
              {/* Tree Structure */}
              <div className="flex flex-col items-center">
                {/* Root/Grandparents Level */}
                <div className="flex justify-center gap-6 lg:gap-12 mb-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-[#f1ede8] p-4 lg:p-5 rounded-2xl shadow-sm border border-[#e2ded9] hover:shadow-md hover:border-[#5d87ff]/30 transition-all cursor-pointer">
                      <Users className="w-6 h-6 lg:w-8 lg:h-8 text-[#5d87ff]" />
                    </div>
                    <span className="text-sm font-medium text-[#2d3748] mt-2">Grandparents</span>
                  </div>
                </div>

                {/* Connector Lines */}
                <div className="w-px h-8 bg-[#5d87ff]/30" />
                <div className="w-48 lg:w-64 h-px bg-[#5d87ff]/30" />
                
                {/* Parents Level */}
                <div className="flex justify-center gap-16 lg:gap-32 mb-4">
                  <div className="flex flex-col items-center">
                    <div className="w-px h-8 bg-[#5d87ff]/30 mb-2" />
                    <div className="bg-[#5d87ff]/10 p-4 lg:p-5 rounded-2xl shadow-sm border border-[#5d87ff]/20 hover:shadow-md hover:border-[#5d87ff]/40 transition-all cursor-pointer">
                      <Users className="w-6 h-6 lg:w-8 lg:h-8 text-[#5d87ff]" />
                    </div>
                    <span className="text-sm font-medium text-[#2d3748] mt-2">Father</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-px h-8 bg-[#5d87ff]/30 mb-2" />
                    <div className="bg-[#5d87ff]/10 p-4 lg:p-5 rounded-2xl shadow-sm border border-[#5d87ff]/20 hover:shadow-md hover:border-[#5d87ff]/40 transition-all cursor-pointer">
                      <Users className="w-6 h-6 lg:w-8 lg:h-8 text-[#5d87ff]" />
                    </div>
                    <span className="text-sm font-medium text-[#2d3748] mt-2">Mother</span>
                  </div>
                </div>

                {/* Connector to You */}
                <div className="w-px h-8 bg-[#5d87ff]/30" />
                
                {/* You Level */}
                <div className="flex flex-col items-center mb-4">
                  <div className="bg-[#5d87ff] p-5 lg:p-6 rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer">
                    <Users className="w-7 h-7 lg:w-9 lg:h-9 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-[#5d87ff] mt-2">You</span>
                </div>

                {/* Connector to Children */}
                <div className="w-px h-8 bg-[#5d87ff]/30" />
                <div className="w-32 lg:w-48 h-px bg-[#5d87ff]/30" />

                {/* Children Level */}
                <div className="flex justify-center gap-8 lg:gap-16">
                  <div className="flex flex-col items-center">
                    <div className="w-px h-6 bg-[#5d87ff]/30 mb-2" />
                    <div className="bg-[#f1ede8] p-3 lg:p-4 rounded-xl shadow-sm border border-[#e2ded9] hover:shadow-md hover:border-[#5d87ff]/30 transition-all cursor-pointer">
                      <Plus className="w-5 h-5 lg:w-6 lg:h-6 text-[#5d87ff]" />
                    </div>
                    <span className="text-xs font-medium text-[#64748b] mt-2">Add Child</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-px h-6 bg-[#5d87ff]/30 mb-2" />
                    <div className="bg-[#f1ede8] p-3 lg:p-4 rounded-xl shadow-sm border border-[#e2ded9] hover:shadow-md hover:border-[#5d87ff]/30 transition-all cursor-pointer">
                      <Share2 className="w-5 h-5 lg:w-6 lg:h-6 text-[#5d87ff]" />
                    </div>
                    <span className="text-xs font-medium text-[#64748b] mt-2">Add Relative</span>
                  </div>
                </div>
              </div>

              <p className="text-[#64748b] mt-10 max-w-2xl mx-auto">
                This interactive tree grows with your family. Add members, photos, and stories to each branch, creating a living legacy.
              </p>
            </div>
          </section>

          {/* ================= WHY IT MATTERS ================= */}
          <section className="bg-[#3d4f6f] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#5d87ff]/20 rounded-full blur-3xl" />
            
            <div className="relative">
              <span className="inline-block px-4 py-1.5 bg-white/10 text-white/90 rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Why Shristi Universe's Tree Builder Matters
              </h2>
              <p className="text-white/80 mb-8 max-w-4xl leading-relaxed">
                Your family's story deserves more than a static genealogy chart.
                With our Family Tree Builder, you create an interactive digital legacy
                designed to grow, connect, and endure.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Build a tree from scratch or expand an existing lineage",
                  "Add photos, timelines, and detailed member profiles",
                  "Invite relatives to collaborate and enrich shared history",
                  "Preserve family and community connections for future generations",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                    <div className="w-6 h-6 bg-[#5d87ff] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/90">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-white/80 max-w-4xl">
                Unlike traditional genealogy tools, Shristi Universe supports both
                family and community trees — enabling broader legacy preservation.
              </p>
            </div>
          </section>

          {/* ================= FEATURES GRID ================= */}
          <section className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-4">
                Core Features
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#2d3748] mb-6">
                Core Family Tree Features
              </h2>

              <div className="space-y-4">
                {treeFeatures.map((feature, i) => {
                  const Icon = feature.icon
                  return (
                    <article
                      key={i}
                      className="bg-white p-5 rounded-2xl shadow-sm border border-[#e2ded9] hover:shadow-md hover:border-[#5d87ff]/30 transition-all"
                    >
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-[#5d87ff]/10 rounded-xl flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-[#5d87ff]" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#2d3748] mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-[#64748b] leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>

            {/* Visual - Enhanced Tree-like */}
            <aside className="bg-white rounded-3xl shadow-sm p-8 border border-[#e2ded9]">
              <h2 className="text-xl lg:text-2xl font-bold text-[#2d3748] mb-6">
                Interactive Family Tree Experience
              </h2>

              <div className="bg-gradient-to-br from-[#f1ede8] to-[#e8e4df] rounded-2xl p-8 h-64 flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border-2 border-[#5d87ff]/20 rounded-full" />
                  <div className="absolute w-48 h-48 border border-[#5d87ff]/10 rounded-full" />
                  <div className="absolute w-64 h-64 border border-[#5d87ff]/5 rounded-full" />
                </div>
                <div className="relative bg-white p-4 rounded-2xl shadow-lg">
                  <GitBranch className="w-12 h-12 text-[#5d87ff]" />
                </div>
              </div>

              <p className="text-[#64748b] leading-relaxed">
                Easily build complex relationships using a drag-and-drop interface.
                Enrich every branch with stories, photos, and important milestones.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {["Drag & Drop", "Photo Albums", "Milestones", "Stories"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-[#f1ede8] text-[#2d3748] rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </aside>
          </section>

          {/* ================= COMMUNITY TREES ================= */}
          <section className="bg-[#f1ede8] rounded-3xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-1/2">
                <span className="inline-block px-4 py-1.5 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-4">
                  Beyond Family
                </span>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#2d3748] mb-4">
                  Community & Group Trees
                </h2>

                <p className="text-[#64748b] mb-6 leading-relaxed">
                  Shristi Universe allows you to create trees for communities, schools,
                  heritage groups, and organizations — not just biological families.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {communityTypes.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-[#e2ded9]">
                        <div className="w-10 h-10 bg-[#5d87ff]/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#5d87ff]" />
                        </div>
                        <span className="text-[#2d3748] font-medium text-sm">{item.label}</span>
                      </div>
                    )
                  })}
                </div>

                <p className="text-[#64748b] mt-6">
                  This capability connects directly with our{" "}
                  <Link href="/features/heritage-preservation" className="text-[#5d87ff] font-medium hover:underline">
                    preserving family history
                  </Link>{" "}
                  tools — ensuring memories and records are protected long-term.
                </p>
              </div>

              <div className="lg:w-1/2 bg-white rounded-2xl p-6 border border-[#e2ded9]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#5d87ff] rounded-xl flex items-center justify-center">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#2d3748]">Memory Album</h3>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="aspect-square bg-[#f1ede8] rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#5d87ff]/40" />
                    </div>
                  ))}
                </div>
                <p className="text-[#64748b] text-sm mt-4">
                  Attach photos and memories to each family member
                </p>
              </div>
            </div>
          </section>

          {/* ================= INTEGRATIONS ================= */}
          <section>
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-4">
                Ecosystem
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#2d3748] mb-4">
                A Unified Family & Community Ecosystem
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                Your family tree integrates seamlessly with other Shristi Universe features
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Link 
                href="/features/event-planning" 
                className="group bg-white p-6 rounded-2xl border border-[#e2ded9] hover:shadow-md hover:border-[#5d87ff]/30 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#5d87ff]/10 rounded-xl flex items-center justify-center group-hover:bg-[#5d87ff]/20 transition-colors">
                    <Share2 className="w-6 h-6 text-[#5d87ff]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2d3748] group-hover:text-[#5d87ff] transition-colors">
                      Event Planning
                    </h3>
                    <p className="text-[#64748b] text-sm">Shared events and reunions</p>
                  </div>
                </div>
              </Link>

              <Link 
                href="/features/finance-management" 
                className="group bg-white p-6 rounded-2xl border border-[#e2ded9] hover:shadow-md hover:border-[#5d87ff]/30 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#5d87ff]/10 rounded-xl flex items-center justify-center group-hover:bg-[#5d87ff]/20 transition-colors">
                    <Download className="w-6 h-6 text-[#5d87ff]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2d3748] group-hover:text-[#5d87ff] transition-colors">
                      Finance Management
                    </h3>
                    <p className="text-[#64748b] text-sm">Shared budgets and records</p>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* ================= CTA ================= */}
          <section className="bg-[#2d3748] rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#5d87ff]/20 rounded-full blur-3xl" />
            
            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Preserve Your Family Legacy?
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
                Join families and communities worldwide who are preserving their
                history, culture, and identity with Shristi Universe.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#5d87ff] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#4a7cff] transition-colors shadow-lg shadow-[#5d87ff]/25">
                  Get Started Free
                </button>
                <button className="bg-white/10 text-white px-8 py-3.5 rounded-full font-medium hover:bg-white/20 transition-colors border border-white/20">
                  View Tutorial
                </button>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}
