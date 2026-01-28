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
  Eye,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Footer from "@/components/Landing/Footer";

import royalFamilyTree from "@/public/assets/images/RoyalFamilyTree.jpg";
import bouddhanathStupa from "@/public/assets/images/bouddhanath-stupa.jpg";
import EventPlanning from "@/public/assets/images/event.png";
import Finance from "@/public/assets/images/finance.png";

/* =========================
   METADATA
========================= */

export const metadata: Metadata = {
  title:
    "Features | Digital Family Tree, Events & Heritage Tools - Srishti Universe",
  description:
    "Explore Shristi Universe features including digital family tree builder, family event management, shared finance tracking, and heritage preservation tools.",
};

/* =========================
   FEATURES DATA
========================= */

const features = [
  {
    id: "family-tree",
    title: "Family Tree Builder",
    description:
      "Visually build your multi-generation family tree and preserve relationships across generations.",
    icon: Users,
    tag: "Core Feature",
    image: royalFamilyTree.src,
    imageType: "local" as const,
  },
  {
    id: "event",
    title: "Event Planning",
    description:
      "Create private family groups and organize events like reunions, birthdays, and ceremonies.",
    icon: Calendar,
    tag: "Organize",
    image: EventPlanning.src,
    imageType: "url" as const,
  },
  {
    id: "finance",
    title: "Finance Management",
    description:
      "Track shared budgets, event expenses, and collective family savings transparently.",
    icon: DollarSign,
    tag: "Finance",
    image: Finance.src,
    imageType: "url" as const,
  },
  {
    id: "heritage-sites",
    title: "Heritage Preservation",
    description:
      "Document ancestral homes, cultural landmarks, and important family locations.",
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
          className="inline-flex items-center gap-2 text-[#64748b] hover:text-[#5d87ff]"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to About
        </Link>
      </div>

      <main className="flex-1">
        {/* HEADER */}
        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5d87ff]/10 text-[#5d87ff] text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Explore Our Platform
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-[#2d3748] mb-6">
            Powerful Features for Preserving Family Legacy
          </h1>

          <p className="text-[#64748b] text-lg max-w-3xl mx-auto">
            A digital family heritage platform to build family trees, manage
            events, track finances, and preserve cultural heritage.
          </p>
        </section>

        {/* FEATURES GRID */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Link
                  key={feature.id}
                  href={`/features/${feature.id}`}
                  className="group block"
                >
                  <article className="relative bg-white rounded-2xl p-6 h-full border border-[#e2ded9] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                    {/* Hover Image */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {feature.imageType === "local" ? (
                        <Image
                          src={feature.image}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <img
                          src={feature.image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-white/85" />
                    </div>

                    <div className="relative z-10">
                      <div className="flex justify-between mb-4">
                        <div className="p-3 bg-[#5d87ff]/10 rounded-xl">
                          <Icon className="w-6 h-6 text-[#5d87ff]" />
                        </div>
                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[#f1ede8]">
                          {feature.tag}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold mb-3 group-hover:text-[#5d87ff]">
                        {feature.title}
                      </h2>

                      <p className="text-sm text-[#64748b] mb-4">
                        {feature.description}
                      </p>

                      <span className="inline-flex items-center gap-1 text-[#5d87ff] font-semibold text-sm">
                        Learn more <ChevronRight className="w-4 h-4" />
                      </span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </section>

        {/* MISSION */}
        <section className="relative">
          <Image src={bouddhanathStupa} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#2d3748]/90" />

          <div className="relative max-w-4xl mx-auto px-6 py-24 text-center text-white">
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 mb-6">
              Our Mission
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built for Families & Future Generations
            </h2>

            <p className="text-white/90 mb-8">
              Preserve stories, heritage, and relationships in a secure digital
              environment.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2d3748] font-semibold rounded-full"
            >
              Learn About Us <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      {/* JOIN CTA */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-[#5d87ff]/5 rounded-3xl p-8 lg:p-12 border border-[#e2ded9]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full mb-6">
                <Eye className="h-4 w-4" />
                Get Started
              </span>

              <h2 className="text-3xl font-bold mb-6">
                Join Shristi Universe Today
              </h2>

              <p className="text-[#64748b] mb-8">
                Build your family tree and preserve your legacy securely.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Create your family tree in minutes",
                  "Invite family members",
                  "Secure cloud storage",
                  "Access anywhere",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 hover:translate-x-1 transition-transform"
                  >
                    <CheckCircle className="h-5 w-5 text-[#5d87ff]" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/login"
                className="inline-flex items-center gap-2 bg-[#5d87ff] text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform"
              >
                Start Your Family Tree <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="rounded-3xl overflow-hidden border">
              <img
                src="/assets/images/JoinFT.png"
                alt="Join Family Tree"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
