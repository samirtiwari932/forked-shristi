"use client";

import { useState, useEffect } from "react";
import {
  Users,
  GitBranch,
  Search,
  Share2,
  Shield,
  Heart,
  BookOpen,
  Calendar,
  Wallet,
  Globe,
  Camera,
  Layers,
  CheckCircle,
  Menu,
  X,
  History,
  Info,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import familyTreeImg from "@/public/assets/images/Familytree.jpg";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FamilyTreeContent() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "why-matters", "features", "integration"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f6f3] overflow-x-hidden touch-pan-y">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        id="hero"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative w-full bg-[#f1ede8] py-20 overflow-hidden"
      >
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-10 right-10 w-96 h-96 bg-[#5d87ff]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-20 w-64 h-64 bg-[#5d87ff]/5 rounded-full blur-2xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={slideInLeft} className="lg:w-1/2">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-6"
              >
                <GitBranch className="h-4 w-4" />
                Family Tree Builder
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl lg:text-6xl font-bold text-[#2d3748] mb-6 leading-tight"
              >
                Your Legacy Starts Here
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-lg text-[#64748b] leading-relaxed mb-8"
              >
                Create your family and community trees with Srishti Universe.
                Preserve family history, document genealogy, connect
                generations, and protect your legacy online.
              </motion.p>

              <motion.div
                variants={staggerContainer}
                className="flex flex-wrap gap-3"
              >
                {[
                  "Genealogy",
                  "Heritage Preservation",
                  "Community Trees",
                  "Social Connection",
                ].map((tag, index) => (
                  <motion.span
                    key={tag}
                    variants={scaleIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white border border-[#e2ded9] text-[#2d3748] rounded-full text-sm hover:border-[#5d87ff] transition-colors cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={slideInRight} className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                <Image
                  src={familyTreeImg}
                  alt="Family Tree Visualization"
                  className="w-full h-auto object-cover"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-[#e2ded9] max-w-xs hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#5d87ff]/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#5d87ff]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#2d3748]">
                      Generations Connected
                    </p>
                    <p className="text-xs text-[#64748b]">
                      Preserve history for the future
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 space-y-32">
          {/* Why It Matters */}
          <motion.section
            id="why-matters"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="flex flex-col lg:flex-row items-start gap-16">
              <motion.div
                variants={slideInLeft}
                className="lg:w-1/2 sticky top-24"
              >
                <motion.span
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-6"
                >
                  <History className="h-4 w-4" />
                  Preserve Your Story
                </motion.span>
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl lg:text-4xl font-bold text-[#2d3748] mb-6 leading-tight"
                >
                  Why Srishti Universe’s Tree Builder Matters
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="text-[#64748b] text-lg leading-relaxed mb-8"
                >
                  Your family’s story deserves more than a static chart — it
                  deserves to be experienced. We provide a complete social
                  ecosystem to discover roots, grow lineage, and share
                  experiences.
                </motion.p>

                <div className="space-y-4">
                  {[
                    "Build a tree from scratch or grow an existing lineage",
                    "Connect relatives across branches with photos & timelines",
                    "Invite members to collaborate and enrich shared history",
                    "Preserve connections for future generations digitally",
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-6 w-6 text-[#5d87ff] shrink-0" />
                      <span className="text-[#2d3748] font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={slideInRight}
                className="lg:w-1/2 space-y-6"
              >
                <div className="bg-white p-8 rounded-3xl border border-[#e2ded9] shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#5d87ff]/10 rounded-xl flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-[#5d87ff]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2d3748] mb-3">
                    Community & Group Trees
                  </h3>
                  <p className="text-[#64748b] leading-relaxed mb-4">
                    Go beyond biological families. Create trees for community
                    organizations, local clubs, school alumni networks, or
                    cultural heritage groups.
                  </p>
                  <ul className="space-y-2 text-sm text-[#64748b]">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#5d87ff] rounded-full" />{" "}
                      Community organizations
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#5d87ff] rounded-full" />{" "}
                      School alumni networks
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#5d87ff] rounded-full" />{" "}
                      Cultural heritage projects
                    </li>
                  </ul>
                </div>

                <div className="bg-[#3d4f6f] p-8 rounded-3xl border border-[#3d4f6f] text-white shadow-lg">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-[#5d87ff]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Preserving Legacy with Purpose
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    A digital archive of memories. Ensure your legacy is
                    preserved with context and depth.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-3 rounded-lg backdrop-blur-sm">
                      <Camera className="h-5 w-5 mb-2 text-[#5d87ff]" />
                      <span className="text-sm font-medium">
                        Photos & Videos
                      </span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg backdrop-blur-sm">
                      <Info className="h-5 w-5 mb-2 text-[#5d87ff]" />
                      <span className="text-sm font-medium">
                        Stories & Docs
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Features Grid */}
          <motion.section
            id="features"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.span
                variants={fadeInUp}
                className="text-[#5d87ff] font-semibold tracking-wide uppercase text-sm mb-2 block"
              >
                Powerful Features
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl lg:text-5xl font-bold text-[#2d3748] mb-6"
              >
                Built for Connection
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-[#64748b] text-lg">
                Tools designed to make building your ancestry easy, intuitive,
                and collaborative.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Search className="h-6 w-6" />,
                  title: "Smart Discovery",
                  desc: "Search existing trees, check for matches, and request to join family trees to connect with distant relatives.",
                },
                {
                  icon: <Share2 className="h-6 w-6" />,
                  title: "Collaborative & Social",
                  desc: "Invite members to contribute photos, edit privileges, and interact through built-in social tools.",
                },
                {
                  icon: <Globe className="h-6 w-6" />,
                  title: "Intuitive Interface",
                  desc: "Get started in minutes. Enter known ancestors and watch your tree expand organically.",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-3xl border border-[#e2ded9] shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#5d87ff]/10 rounded-2xl flex items-center justify-center mb-6 text-[#5d87ff]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2d3748] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#64748b] leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Integration Section */}
          <motion.section
            id="integration"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-[#2d3748] rounded-[3rem] p-10 lg:p-20 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-125 h-125 bg-[#5d87ff]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
                >
                  <Layers className="h-4 w-4" />
                  Unified Ecosystem
                </motion.div>
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl lg:text-5xl font-bold mb-6"
                >
                  Integrating Events & Finance
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="text-gray-300 text-lg leading-relaxed mb-8"
                >
                  Srishti Universe’s Family Tree Builder doesn’t exist in
                  isolation. It’s deeply integrated with Event Planning and
                  Finance Management to create a holistic platform for family
                  life.
                </motion.p>
                <motion.button
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#5d87ff] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-[#5d87ff]/30 hover:bg-[#4a73e6] transition-colors"
                >
                  <a href="/login">Start Building Your Tree</a>
                </motion.button>
              </div>

              <div className="lg:w-1/2 grid gap-6">
                <motion.div
                  variants={slideInRight}
                  className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">
                      <a href="/features/event">Event Planning</a>
                    </h3>
                  </div>
                  <p className="text-gray-400">
                    Plan reunions and milestones directly from your tree. Link
                    events to specific branches.
                  </p>
                </motion.div>

                <motion.div
                  variants={slideInRight}
                  transition={{ delay: 0.1 }}
                  className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-yellow-500/20 rounded-lg text-yellow-400">
                      <Wallet className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">
                      <a href="/features/finance">Finance Management</a>
                    </h3>
                  </div>
                  <p className="text-gray-400">
                    Track budgets, contributions, and expenses for shared family
                    or community activities.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>
        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#2d3748] py-12"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-white font-bold mb-4">Srishti Universe</h4>
                <p className="text-white/70 text-sm">
                  Empowering families and communities with transparent financial
                  management.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Product</h4>
                <ul className="space-y-2">
                  {["Features", "Pricing", "Security"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white/70 hover:text-white text-sm transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  {["About", "Contact", "Blog"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white/70 hover:text-white text-sm transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  {["Privacy", "Terms"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white/70 hover:text-white text-sm transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 text-center">
              <p className="text-white/70 text-sm">
                &copy; 2026 Srishti Universe. All rights reserved.
              </p>
            </div>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}
