import { Metadata } from "next";
import {
  Building2,
  MapPin,
  Camera,
  BookOpen,
  Users,
  Shield,
  Globe,
  Lock,
  Eye,
  Share2,
  Heart,
  Calendar,
  Target,
  CheckCircle,
  Download,
  Upload,
  Clock,
  ArrowRight,
  Star,
  History,
  Castle,
  TreePine,
  Church,
  Home,
  DollarSign,
  CalendarDays,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import HeritageSlider from "@/app/features/heritage-sites/HeritageSlider";
// import Footer from "@/components/Footer";

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
      icon: <CalendarDays className="h-8 w-8" />,
      color: "from-purple-500 to-blue-500",
      href: "/features/events",
    },
    {
      id: 2,
      title: "Family Finance Management",
      description: "Track treasury, manage puja funds and donations securely",
      icon: <DollarSign className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500",
      href: "/features/finance",
    },
    {
      id: 3,
      title: "Family Tree & Connections",
      description: "Build and maintain your complete family tree with generations",
      icon: <TreePine className="h-8 w-8" />,
      color: "from-amber-500 to-orange-500",
      href: "/features/family-tree",
    },
    {
      id: 4,
      title: "Memory Vault",
      description: "Preserve photos, stories and memories in a secure digital vault",
      icon: <Camera className="h-8 w-8" />,
      color: "from-pink-500 to-rose-500",
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
      icon: "👁️",
      title: "Discover Heritage",
      description: "Explore heritage sites from families across India"
    },
    {
      icon: "❤️",
      title: "Appreciate Culture",
      description: "Like and comment on culturally significant sites"
    },
    {
      icon: "🗺️",
      title: "Heritage Map",
      description: "View heritage sites on an interactive map"
    },
    {
      icon: "📚",
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Slider Section */}
      <HeritageSlider />

      {/* Sister Pages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Explore Other Family Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sisterPages.map((page) => (
              <a
                key={page.id}
                href={page.href}
                className="group block"
              >
                <div className={`bg-gradient-to-r ${page.color} rounded-xl p-6 text-white h-full transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl`}>
                  <div className="bg-white/20 p-3 rounded-lg inline-block mb-4">
                    {page.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{page.title}</h3>
                  <p className="text-white/90 text-sm">{page.description}</p>
                  <div className="mt-4 flex items-center text-sm opacity-0 group-hover:opacity-100 transition-opacity">
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
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Introduction Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Building2 className="h-8 w-8 text-amber-600" />
                Preserving Your Family's Cultural Legacy
              </h2>
              <p className="text-gray-600 mb-4">
                Every family has a story—ancestral homes that witnessed generations, 
                temples where prayers echoed for centuries, lands that nourished families, 
                and cultural practices that defined identities. These heritage sites are 
                more than just physical locations; they are living connections to our past.
              </p>
              <p className="text-gray-600 mb-4">
                Shristi Universe's Heritage Management feature helps families document, 
                preserve, and share their cultural legacy with future generations. From 
                private ancestral properties to public cultural landmarks, our platform 
                provides the tools to keep family history alive and accessible.
              </p>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100 mt-6">
                <p className="text-gray-800 font-medium">
                  Transform memories into a permanent digital legacy that can be passed 
                  down through generations, ensuring your family's story is never forgotten.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl h-64 lg:h-80 flex items-center justify-center">
                <div className="text-center p-6">
                  <History className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium text-xl">
                    Heritage Preservation Hub
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Features */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Complete Heritage Management System
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Three powerful pillars to document, preserve, and share your family's heritage
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {heritageFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-amber-100 rounded-lg">
                      <div className="text-amber-600">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Heritage Site Addition */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Heritage Site Addition & Documentation
              </h2>
              <p className="text-gray-600 mb-4">
                Add your family's heritage sites with comprehensive details, creating 
                a rich digital record that captures both physical and cultural aspects.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {heritageTypes.map((type, index) => (
                  <div key={index} className="bg-white rounded-lg shadow p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-amber-50 rounded-lg">
                        {type.icon}
                      </div>
                      <h3 className="font-semibold text-gray-800">{type.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{type.description}</p>
                    <ul className="space-y-1">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-amber-500 mt-1" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl h-64 lg:h-80 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium text-xl">
                    Add Heritage Sites
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Public Heritage Feed */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Public Heritage Feed – Explore Cultural Diversity
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Discover and appreciate heritage sites from families across the Shristi Universe community
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {heritageFeedFeatures.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 text-center">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Heritage Management Matters
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-amber-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mb-20 text-center">
            <div className="bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl p-8 md:p-12 text-white shadow-xl">
              <h2 className="text-3xl font-bold mb-6">Start Preserving Your Family's Legacy Today</h2>
              <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
                Every family has a story worth preserving. From ancestral homes to cultural 
                traditions, your heritage is a precious gift for future generations. 
                Join thousands of families who are building their digital legacy on 
                Shristi Universe.
              </p>
              <button className="bg-white text-amber-600 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto">
                Begin Your Heritage Journey
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}