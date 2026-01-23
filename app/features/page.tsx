import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Users,
  Calendar,
  DollarSign,
  Landmark,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Footer from "@/components/Landing/Footer";
import royalFamilyTree from "@/public/assets/images/RoyalFamilyTree.jpg";
import bouddhanathStupa from "@/public/assets/images/bouddhanath-stupa.jpg";

export const metadata: Metadata = {
  title:
    "Features | Digital Family Tree, Events & Heritage Tools - Shristi Universe",
  description:
    "Explore Shristi Universe features including digital family tree builder, family event management, shared finance tracking, and heritage preservation tools.",
  openGraph: {
    title: "Features - Shristi Universe",
    description:
      "Discover powerful tools to build family trees, organize events, manage shared finances, and preserve cultural heritage digitally.",
    url: "/features",
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
};

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
    tag: "Core Feature",
    image: royalFamilyTree,
    imageType: "local" as const,
  },
  {
    id: "event",
    title: "Family Groups & Event Management",
    description:
      "Create private family groups and organize events like reunions, birthdays, and ceremonies.",
    longDescription:
      "Plan, manage, and share family events securely with private groups, updates, photos, and schedules.",
    icon: Calendar,
    tag: "Organize",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=600&fit=crop&auto=format&q=80",
    imageType: "url" as const,
  },
  {
    id: "finance",
    title: "Shared Family Finance Management",
    description:
      "Track shared budgets, event expenses, and collective family savings transparently.",
    longDescription:
      "Manage shared finances, contributions, and goals in a secure and transparent digital environment.",
    icon: DollarSign,
    tag: "Finance",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop&auto=format&q=80",
    imageType: "url" as const,
  },
  {
    id: "heritage-sites",
    title: "Heritage Site Preservation",
    description:
      "Document ancestral homes, cultural landmarks, and important family locations.",
    longDescription:
      "Preserve heritage sites with historical context, stories, and media for future generations.",
    icon: Landmark,
    tag: "Heritage",
    image: bouddhanathStupa,
    imageType: "local" as const,
  },
];

/* =========================
   PAGE COMPONENT
========================= */
export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f6f3]">
      <Navbar />

      {/* Back Link */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-[#64748b] hover:text-[#5d87ff] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" aria-hidden />
          <span className="font-medium">Back to About</span>
        </Link>
      </div>

      <main className="flex-1">
        {/* PAGE HEADER */}
        <section className="relative max-w-6xl mx-auto px-6 py-16 text-center overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#5d87ff]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#5d87ff]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5d87ff]/10 text-[#5d87ff] text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Explore Our Platform
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-[#2d3748] mb-6 text-balance">
              Powerful Features for Preserving Family Legacy
            </h1>

            <p className="text-[#64748b] text-lg max-w-3xl mx-auto leading-relaxed">
              Shristi Universe is a{" "}
              <strong className="text-[#2d3748]">
                digital family heritage platform
              </strong>{" "}
              offering tools to build family trees, organize events, manage
              shared finances, and preserve cultural heritage across
              generations.
            </p>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.id}
                  href={`/features/${feature.id}`}
                  aria-label={`Learn more about ${feature.title}`}
                  className="group block"
                >
                  <article className="relative bg-white rounded-3xl p-8 h-full border border-[#e2ded9] hover:border-[#5d87ff]/40 transition-all hover:shadow-xl hover:shadow-[#5d87ff]/5 overflow-hidden">
                    {/* Background Image on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                      {feature.imageType === "local" ? (
                        <Image
                          src={feature.image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : (
                        <img
                          src={feature.image as string}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      )}
                      {/* Gradient overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/70" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="bg-[#f1ede8] p-4 rounded-2xl group-hover:bg-white/95 transition-colors group-hover:shadow-lg">
                          <Icon
                            className="w-10 h-10 text-[#5d87ff]"
                            aria-hidden
                          />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-[#f1ede8] group-hover:bg-white/95 text-[#64748b] group-hover:text-[#2d3748] text-xs font-semibold transition-colors group-hover:shadow-md">
                          {feature.tag}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold text-[#2d3748] mb-3 transition-colors">
                        {feature.title}
                      </h2>

                      <p className="text-[#2d3748] mb-4 leading-relaxed transition-colors font-medium">
                        {feature.description}
                      </p>

                      <p className="text-[#64748b] group-hover:text-[#2d3748] text-sm mb-6 leading-relaxed transition-colors font-medium">
                        {feature.longDescription}
                      </p>

                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5d87ff] text-white font-semibold group-hover:gap-3 group-hover:bg-[#4a6fcc] group-hover:shadow-lg transition-all">
                        Learn more
                        <ChevronRight className="w-4 h-4" aria-hidden />
                      </span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </section>

        {/* SEO CONTENT BLOCK */}
        <section className="relative bg-[#3d4f6f] overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#5d87ff]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2d3748]/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
              Our Mission
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
              Built for Families, Communities & Future Generations
            </h2>

            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Shristi Universe helps families preserve stories, heritage,
              relationships, and memories in a secure digital environment —
              strengthening connections across generations.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#5d87ff] text-white font-medium rounded-full hover:bg-[#4a6fcc] transition-colors"
            >
              Learn About Us
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
