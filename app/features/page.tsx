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
import EventPlanning from "@/public/assets/images/EventPlanning.png";
import Finance from "@/public/assets/images/Finance.png";

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
    title: "Family Tree Builder", // Changed from "Digital Family Tree Builder"
    description:
      "Visually build your multi-generation family tree and preserve relationships across generations.",
    longDescription:
      "Create detailed digital family trees with photos, biographies, and relationships to preserve your family legacy forever.",
    icon: Users,
    tag: "Core Feature",
    image: royalFamilyTree.src,
    imageType: "local" as const,
  },
  {
    id: "event",
    title: "Event Planning", // Changed from "Family Groups & Event Management"
    description:
      "Create private family groups and organize events like reunions, birthdays, and ceremonies.",
    longDescription:
      "Plan, manage, and share family events securely with private groups, updates, photos, and schedules.",
    icon: Calendar,
    tag: "Organize",
    image: EventPlanning.src,
    imageType: "url" as const,
  },
  {
    id: "finance",
    title: "Finance Management", // Changed from "Shared Family Finance Management"
    description:
      "Track shared budgets, event expenses, and collective family savings transparently.",
    longDescription:
      "Manage shared finances, contributions, and goals in a secure and transparent digital environment.",
    icon: DollarSign,
    tag: "Finance",
    image: Finance.src,
    imageType: "url" as const,
  },
  {
    id: "heritage-sites",
    title: "Heritage Preservation", // Changed from "Heritage Site Preservation"
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
      <div className="max-w-7xl mx-auto px-6 pt-8">
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
        <section className="relative max-w-7xl mx-auto px-6 py-16 text-center overflow-hidden">
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

        {/* FEATURES GRID - Horizontal Layout with Enhanced Hover Images */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.id}
                  href={`/features/${feature.id}`}
                  aria-label={`Learn more about ${feature.title}`}
                  className="group block"
                >
                  <article className="relative bg-white rounded-2xl p-6 h-full border border-[#e2ded9] hover:border-[#5d87ff]/40 transition-all hover:shadow-2xl hover:shadow-[#5d87ff]/10 hover:-translate-y-2 duration-500 overflow-hidden">
                    {/* Background Image on Hover - IMPROVED */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0">
                      {feature.imageType === "local" ? (
                        <Image
                          src={feature.image}
                          alt=""
                          fill
                          className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      ) : (
                        <img
                          src={feature.image}
                          alt=""
                          className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                        />
                      )}
                      {/* Stronger linear overlay for better text readability */}
                      <div className="absolute inset-0 bg-linear-to-b from-white/85 via-white/75 to-white/85 backdrop-blur-[2px]" />
                    </div>

                    {/* Content - Now with better contrast on hover */}
                    <div className="relative z-10">
                      {/* Icon & Tag */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="bg-[#5d87ff]/10 p-3 rounded-xl group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                          <Icon
                            className="w-7 h-7 text-[#5d87ff] transition-colors"
                            aria-hidden
                          />
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-[#f1ede8] group-hover:bg-white group-hover:shadow-md text-[#64748b] group-hover:text-[#2d3748] text-xs font-semibold transition-all duration-300">
                          {feature.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-[#2d3748] mb-3 group-hover:text-[#5d87ff] transition-colors duration-300">
                        {feature.title}
                      </h2>

                      {/* Description */}
                      <p className="text-[#64748b] group-hover:text-[#2d3748] text-sm mb-4 leading-relaxed transition-colors duration-300 font-medium">
                        {feature.description}
                      </p>

                      {/* CTA */}
                      <span className="inline-flex items-center gap-1.5 text-[#5d87ff] font-semibold text-sm group-hover:gap-2.5 transition-all duration-300">
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

        {/* MISSION SECTION WITH BACKGROUND IMAGE */}
        <section className="relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={bouddhanathStupa}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              quality={90}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-linear-to-br from-[#3d4f6f]/95 via-[#2d3748]/90 to-[#3d4f6f]/95" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#5d87ff]/20 rounded-full blur-3xl pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none z-10" />

          {/* Content */}
          <div className="relative z-20 max-w-4xl mx-auto px-6 py-24 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
              Our Mission
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
              Built for Families, Communities & Future Generations
            </h2>

            <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Shristi Universe helps families preserve stories, heritage,
              relationships, and memories in a secure digital environment
              strengthening connections across generations.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#3d4f6f] font-semibold rounded-full hover:bg-white/90 transition-all hover:shadow-lg hover:shadow-white/20"
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
