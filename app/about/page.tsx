import { Metadata } from "next";
import {
  Users,
  Calendar,
  DollarSign,
  Landmark,
  Target,
  Eye,
  Heart,
  Flag,
} from "lucide-react";
import Navbar from "@/components/Navbar";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shristi Universe - Preserve Your Family Legacy & Heritage Digitally",
  description:
    "Discover Shristi Universe - the ultimate digital platform to preserve family history, safeguard heritage, and share memories securely. Build family trees, document traditions, manage events, and store important records online, keeping your family legacy alive for generations.",

  keywords: [
    "family tree builder",
    "heritage preservation",
    "event management",
    "finance tracker",
    "family connection platform",
    "cultural heritage preservation",
    "multi-generation family tree",
    "family group management",
  ],
  authors: [{ name: "Shristi Universe" }],
  creator: "Shristi Universe",
  publisher: "Shristi Universe",

  openGraph: {
    title:
      "About Us - Family Connection,Heritage Preservation & Event plan Platform | Shristi Universe",
    description:
      "Helping families connect, preserve heritage, and manage shared memories — all in one place.Build family trees, organize events, and create lasting legacies.",
    url: "/about",
    siteName: "Shristi Universe",
    type: "website",
  },
};

const features = [
  {
    icon: Users,
    title: "Family Tree",
    description:
      "Visually build multi-generation family trees to preserve relationships and legacy.",
  },
  {
    icon: Calendar,
    title: "Family Groups & Events",
    description:
      "Create family groups, share updates, and organize meaningful events.",
  },
  {
    icon: DollarSign,
    title: "Manage Finances",
    description:
      "Track shared family budgets and event expenses with transparency.",
  },
  {
    icon: Landmark,
    title: "Heritage Sites",
    description:
      "Preserve cultural landmarks and family heritage for future generations.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1">
        {/* Page Header - Full width */}
        <div className="w-full bg-linear-to-r from-[#5d87ff] to-[#4a7cff] py-16 text-center text-white">
          <h1 className="text-5xl font-bold mb-2">
            About <span className="text-white">Shristi Universe</span>
          </h1>
        </div>

        {/* Alternating Layout Sections */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Section 1: Our Mission with image on right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-[#5d87ff]" />
                <h2 className="text-3xl font-bold text-gray-800">
                  Our Mission – Protecting Family Legacy and Heritage
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our mission at Shristi Universe is to help families preserve
                their legacy and heritage in today's modern era using digital
                technology. We provide a comprehensive platform where users can
                create family trees, store precious memories, organize events,
                and safeguard historical heritage sites for generations to come.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-linear-to-br from-blue-100 to-indigo-100 rounded-2xl h-64 lg:h-80 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
                  <p className="text-gray-700 font-medium">
                    Family Connections
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Why Choose Us with image on left */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-[#5d87ff]" />
                <h2 className="text-3xl font-bold text-gray-800">
                  Why Choose Us
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Shristi Universe is a unique digital family platform focused on
                preserving family history, promoting cultural heritage
                preservation, and fostering family unity. Unlike standard social
                platforms or genealogy apps, our platform offers a secure and
                meaningful way to practice digital memory preservation.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                As a complete family genealogy platform, Shristi Universe allows
                families, communities, and groups to build and visualize
                detailed family trees, making it one of the best platforms to
                preserve heritage and family memories online.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#5d87ff] rounded-full"></div>
                  <span className="text-gray-700">
                    Secure & private family spaces
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#5d87ff] rounded-full"></div>
                  <span className="text-gray-700">
                    Easy-to-use interface for all ages
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#5d87ff] rounded-full"></div>
                  <span className="text-gray-700">
                    Comprehensive legacy tools
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#5d87ff] rounded-full"></div>
                  <span className="text-gray-700">
                    Cross-platform accessibility
                  </span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-linear-to-br from-green-100 to-emerald-100 rounded-2xl h-64 lg:h-80 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">🏆</div>
                  <p className="text-gray-700 font-medium">Trusted Choice</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Our Vision with image on right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8 text-[#5d87ff]" />
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                We envision a world where every family's heritage is preserved,
                connections are strengthened across generations, and shared
                memories become timeless treasures.
              </p>
              <div className="bg-blue-50 p-5 rounded-xl border-l-4 border-[#5d87ff]">
                <h3 className="font-bold text-gray-800 mb-2">For Heritage</h3>
                <p className="text-gray-600">
                  Preserving cultural traditions, family stories, and ancestral
                  knowledge for future generations to cherish and learn from.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-linear-to-br from-purple-100 to-pink-100 rounded-2xl h-64 lg:h-80 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">🔭</div>
                  <p className="text-gray-700 font-medium">Future Vision</p>
                </div>
              </div>
            </div>
          </div>

          {/* What We Stand For Section */}
          <div className="bg-linear-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Flag className="w-8 h-8 text-white" />
              <h2 className="text-3xl font-bold">What We Stand For</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">Family First</h3>
                <p className="text-gray-300">
                  Everything we build prioritizes family connections and
                  wellbeing.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">Privacy</h3>
                <p className="text-gray-300">
                  Your family data is secure and only accessible to those you
                  choose.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
                <p className="text-gray-300">
                  We celebrate all family structures and traditions.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">Legacy</h3>
                <p className="text-gray-300">
                  Helping you create lasting memories for generations to come.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Grid - Original but styled differently */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">
              Our Core Features
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <f.icon className="w-8 h-8 text-[#5d87ff]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
