import { Metadata } from "next";
import {
  Building2,
  MapPin,
  Camera,
  BookOpen,
  Shield,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  History,
  Castle,
  TreePine,
  Church,
  DollarSign,
  CalendarDays,
  Eye,
  Heart,
  Map,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import HeritageSlider from "@/app/features/heritage-sites/HeritageSlider";

export const metadata: Metadata = {
  title:
    "Heritage Management - Preserve Family History & Cultural Sites | Shristi Universe",
  description:
    "Document, preserve, and share family heritage sites, ancestral homes, and cultural landmarks with future generations using Shristi Universe's Heritage Management feature.",
  keywords: [
    "family heritage",
    "cultural preservation",
    "ancestral homes",
    "heritage sites",
    "family history",
    "cultural legacy",
    "heritage documentation",
  ],
  authors: [{ name: "Shristi Universe" }],
  creator: "Shristi Universe",
  publisher: "Shristi Universe",
  openGraph: {
    title:
      "Heritage Management - Preserve Family History & Cultural Sites | Shristi Universe",
    description:
      "Document family heritage sites, ancestral properties, and cultural landmarks with photos, stories, and historical records.",
    url: "/features/heritage",
    siteName: "Shristi Universe",
    type: "website",
  },
};

export default function HeritagePage() {
  const sisterPages = [
    {
      id: 1,
      title: "Family Groups & Events",
      description: "Plan, manage and celebrate family and community events with ease",
      icon: <CalendarDays className="h-6 w-6" />,
      href: "/features/events",
    },
    {
      id: 2,
      title: "Family Finance Management",
      description: "Track treasury, manage puja funds and donations securely",
      icon: <DollarSign className="h-6 w-6" />,
      href: "/features/finance",
    },
    {
      id: 3,
      title: "Family Tree & Connections",
      description: "Build and maintain your complete family tree with generations",
      icon: <TreePine className="h-6 w-6" />,
      href: "/features/family-tree",
    },
    {
      id: 4,
      title: "Memory Vault",
      description: "Preserve photos, stories and memories in a secure digital vault",
      icon: <Camera className="h-6 w-6" />,
      href: "/features/memory-vault",
    },
  ];

  const heritageTypes = [
    {
      icon: <Castle className="h-6 w-6" />,
      title: "Ancestral Homes",
      description: "Document family homes and ancestral properties",
      features: [
        "Add photos and historical records",
        "Record architectural details",
        "Map family ownership history",
        "Document renovation stories"
      ]
    },
    {
      icon: <Church className="h-6 w-6" />,
      title: "Religious Sites",
      description: "Preserve family temples, churches, and religious landmarks",
      features: [
        "Record religious ceremonies",
        "Document spiritual significance",
        "Track maintenance history",
        "Share pilgrimage stories"
      ]
    },
    {
      icon: <TreePine className="h-6 w-6" />,
      title: "Cultural Landmarks",
      description: "Document culturally significant family locations",
      features: [
        "Record festivals and celebrations",
        "Document traditional practices",
        "Map cultural geography",
        "Preserve oral histories"
      ]
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Historical Records",
      description: "Digitize and preserve family documents and artifacts",
      features: [
        "Scan old photographs",
        "Digitize handwritten records",
        "Record family tree connections",
        "Archive important documents"
      ]
    }
  ];

  const heritageFeatures = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Heritage Site Addition",
      description: "Add and document your family's heritage sites with rich details"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Preservation Tools",
      description: "Tools to preserve heritage for future generations"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Public Heritage Feed",
      description: "Explore heritage sites from families across the app"
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Media Gallery",
      description: "Upload photos, videos, and documents for each site"
    }
  ];

  const heritageFeedFeatures = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Discover Heritage",
      description: "Explore heritage sites from families across India"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Appreciate Culture",
      description: "Like and comment on culturally significant sites"
    },
    {
      icon: <Map className="h-6 w-6" />,
      title: "Heritage Map",
      description: "View heritage sites on an interactive map"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Learn History",
      description: "Read stories and historical context of each site"
    }
  ];

  const benefits = [
    "Preserve family history for future generations",
    "Connect younger family members with roots",
    "Create a digital archive of cultural heritage",
    "Share and celebrate cultural diversity",
    "Document vanishing architectural styles",
    "Build a comprehensive family legacy"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f6f3]">
      <Navbar />

      {/* Hero Slider Section */}
      <HeritageSlider />

      {/* Sister Pages Section */}
      <section className="py-20 bg-[#f1ede8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#5d87ff]/10 text-[#5d87ff] text-sm font-medium rounded-full mb-4">
              Explore Features
            </span>
            <h2 className="text-3xl font-bold text-[#2d3748] text-balance">
              Explore Other Family Features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sisterPages.map((page) => (
              <a
                key={page.id}
                href={page.href}
                className="group block"
              >
                <div className="bg-white rounded-2xl p-6 h-full border border-[#e2ded9] hover:border-[#5d87ff]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="bg-[#5d87ff]/10 text-[#5d87ff] p-3 rounded-xl inline-block mb-4 group-hover:bg-[#5d87ff] group-hover:text-white transition-colors duration-300">
                    {page.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#2d3748] mb-2">{page.title}</h3>
                  <p className="text-[#64748b] text-sm mb-4">{page.description}</p>
                  <div className="flex items-center text-sm text-[#5d87ff] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Introduction Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-1.5 bg-[#5d87ff]/10 text-[#5d87ff] text-sm font-medium rounded-full mb-4">
                Cultural Legacy
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-6 flex items-center gap-3 text-balance">
                <div className="p-2 bg-[#5d87ff]/10 rounded-xl">
                  <Building2 className="h-7 w-7 text-[#5d87ff]" />
                </div>
                Preserving Your Family&apos;s Cultural Legacy
              </h2>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Every family has a story—ancestral homes that witnessed generations, 
                temples where prayers echoed for centuries, lands that nourished families, 
                and cultural practices that defined identities. These heritage sites are 
                more than just physical locations; they are living connections to our past.
              </p>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Shristi Universe&apos;s Heritage Management feature helps families document, 
                preserve, and share their cultural legacy with future generations. From 
                private ancestral properties to public cultural landmarks, our platform 
                provides the tools to keep family history alive and accessible.
              </p>
              <div className="bg-[#3d4f6f] p-6 rounded-2xl mt-6">
                <p className="text-white font-medium leading-relaxed">
                  Transform memories into a permanent digital legacy that can be passed 
                  down through generations, ensuring your family&apos;s story is never forgotten.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-[#f1ede8] rounded-3xl h-64 lg:h-80 flex items-center justify-center border border-[#e2ded9] relative overflow-hidden">
                <div className="absolute top-6 right-6 w-24 h-24 bg-[#5d87ff]/10 rounded-full blur-2xl" />
                <div className="absolute bottom-6 left-6 w-32 h-32 bg-[#5d87ff]/10 rounded-full blur-2xl" />
                <div className="text-center p-6 relative z-10">
                  <div className="bg-[#5d87ff] p-5 rounded-2xl inline-block mb-4 shadow-lg">
                    <History className="h-12 w-12 text-white" />
                  </div>
                  <p className="text-[#2d3748] font-semibold text-xl">
                    Heritage Preservation Hub
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Features */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-[#5d87ff]/10 text-[#5d87ff] text-sm font-medium rounded-full mb-4">
                Core Features
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-4 text-balance">
                Complete Heritage Management System
              </h2>
              <p className="text-[#64748b] max-w-3xl mx-auto">
                Three powerful pillars to document, preserve, and share your family&apos;s heritage
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {heritageFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border border-[#e2ded9] hover:border-[#5d87ff]/30 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#5d87ff]/10 rounded-xl group-hover:bg-[#5d87ff] transition-colors duration-300">
                      <div className="text-[#5d87ff] group-hover:text-white transition-colors duration-300">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#2d3748] mb-2">{feature.title}</h3>
                  <p className="text-[#64748b] text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Heritage Site Addition */}
          <div className="flex flex-col lg:flex-row items-start gap-12 mb-24">
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-1.5 bg-[#5d87ff]/10 text-[#5d87ff] text-sm font-medium rounded-full mb-4">
                Documentation
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-6 text-balance">
                Heritage Site Addition & Documentation
              </h2>
              <p className="text-[#64748b] mb-8 leading-relaxed">
                Add your family&apos;s heritage sites with comprehensive details, creating 
                a rich digital record that captures both physical and cultural aspects.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {heritageTypes.map((type, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-[#e2ded9] p-5 hover:border-[#5d87ff]/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 bg-[#5d87ff]/10 rounded-xl">
                        <div className="text-[#5d87ff]">{type.icon}</div>
                      </div>
                      <h3 className="font-semibold text-[#2d3748]">{type.title}</h3>
                    </div>
                    <p className="text-[#64748b] text-sm mb-3">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-[#5d87ff] flex-shrink-0 mt-0.5" />
                          <span className="text-[#64748b] text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-[#3d4f6f] rounded-3xl h-[500px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-10 left-10 w-32 h-32 bg-[#5d87ff]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#5d87ff]/20 rounded-full blur-3xl" />
                <div className="text-center p-6 relative z-10">
                  <div className="bg-[#5d87ff] p-5 rounded-2xl inline-block mb-4 shadow-lg">
                    <MapPin className="h-12 w-12 text-white" />
                  </div>
                  <p className="text-white font-semibold text-xl mb-2">
                    Add Heritage Sites
                  </p>
                  <p className="text-white/70 text-sm max-w-xs">
                    Document and preserve your family&apos;s cultural landmarks
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Public Heritage Feed */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-[#5d87ff]/10 text-[#5d87ff] text-sm font-medium rounded-full mb-4">
                Heritage Feed
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-4 text-balance">
                Public Heritage Feed – Explore Cultural Diversity
              </h2>
              <p className="text-[#64748b] max-w-3xl mx-auto">
                Discover and appreciate heritage sites from families across the Shristi Universe community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {heritageFeedFeatures.map((feature, index) => (
                <div key={index} className="bg-[#f1ede8] rounded-2xl p-6 text-center border border-[#e2ded9] hover:border-[#5d87ff]/30 hover:shadow-lg transition-all duration-300 group">
                  <div className="bg-[#5d87ff]/10 p-4 rounded-xl inline-block mb-4 group-hover:bg-[#5d87ff] transition-colors duration-300">
                    <div className="text-[#5d87ff] group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-[#2d3748] mb-2">{feature.title}</h3>
                  <p className="text-[#64748b] text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-[#5d87ff]/10 text-[#5d87ff] text-sm font-medium rounded-full mb-4">
                Benefits
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] text-balance">
                Why Heritage Management Matters
              </h2>
            </div>
            
            <div className="bg-white rounded-3xl border border-[#e2ded9] p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl hover:bg-[#f1ede8] transition-colors">
                    <div className="p-1.5 bg-[#5d87ff]/10 rounded-lg">
                      <Star className="h-4 w-4 text-[#5d87ff]" />
                    </div>
                    <span className="text-[#2d3748] font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mb-20 text-center">
            <div className="bg-[#3d4f6f] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-48 h-48 bg-[#5d87ff]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#5d87ff]/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full mb-6 border border-white/20">
                  Get Started
                </span>
                <h2 className="text-3xl font-bold mb-6 text-balance">Start Preserving Your Family&apos;s Legacy Today</h2>
                <p className="text-lg mb-8 text-white/80 max-w-3xl mx-auto">
                  Every family has a story worth preserving. From ancestral homes to cultural 
                  traditions, your heritage is a precious gift for future generations. 
                  Join thousands of families who are building their digital legacy on 
                  Shristi Universe.
                </p>
                <button className="bg-[#5d87ff] text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-[#4a72e6] transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                  Begin Your Heritage Journey
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
