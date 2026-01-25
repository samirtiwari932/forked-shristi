"use client";

import { useState, useEffect } from "react";
import {
  Users,
  Calendar,
  DollarSign,
  Landmark,
  Target,
  Eye,
  Heart,
  Flag,
  CheckCircle,
  Star,
  Shield,
  Sparkles,
  Globe,
  Award,
  TrendingUp,
  Zap,
  ArrowRight,
  Quote,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

// Animation variants matching your Finance page
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

const features = [
  {
    icon: Users,
    href: "/features/family-tree",
    title: "Family Tree",
    description:
      "Visually build family trees to preserve relationships & legacy.",
    color: "#5d87ff",
  },
  {
    icon: Calendar,
    href: "/features/event",
    title: "Family Groups & Events",
    description:
      "Create family groups, share updates, and organize meaningful events.",
    color: "#22c55e",
  },
  {
    icon: DollarSign,
    href: "/features/finance",
    title: "Manage Finances",
    description:
      "Track shared family budgets and event expenses with transparency.",
    color: "#f59e0b",
  },
  {
    icon: Landmark,
    href: "/features/heritage",
    title: "Heritage Sites",
    description:
      "Preserve cultural landmarks and family heritage for future generations.",
    color: "#8b5cf6",
  },
];

const stats = [
  { number: "10K+", label: "Active Families", icon: Users },
  { number: "50K+", label: "Family Trees Created", icon: TrendingUp },
  { number: "100K+", label: "Memories Preserved", icon: Heart },
  { number: "99.9%", label: "Satisfaction Rate", icon: Star },
];

const values = [
  {
    icon: Users,
    title: "Family First",
    description:
      "Everything we build prioritizes family connections and wellbeing.",
  },
  {
    icon: Shield,
    title: "Privacy",
    description:
      "Your family data is secure and only accessible to those you choose.",
  },
  {
    icon: Sparkles,
    title: "Inclusivity",
    description: "We celebrate all family structures and traditions.",
  },
  {
    icon: Award,
    title: "Legacy",
    description: "Helping you create lasting memories for generations to come.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f6f3]">
      <Navbar />
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative w-full bg-linear-to-br from-[#5d87ff] via-[#4a7cff] to-[#3d6fe6] py-24 overflow-hidden"
      >
        {/* Animated background elements */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
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
          className="absolute bottom-0 left-20 w-72 h-72 bg-white/5 rounded-full blur-2xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div variants={fadeInUp} className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="h-4 w-4" />
              Preserving Legacies Since 2020
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              About <span className="text-white/90">Shristi Universe</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              Empowering families to preserve their legacy, celebrate their
              heritage, and build lasting connections across generations.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          {/* Stats Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 mb-24 relative z-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl border border-[#e2ded9] p-6 text-center shadow-lg"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-[#5d87ff]/10 rounded-xl flex items-center justify-center mx-auto mb-4"
                >
                  <stat.icon className="h-6 w-6 text-[#5d87ff]" />
                </motion.div>
                <h3 className="text-3xl font-bold text-[#2d3748] mb-2">
                  {stat.number}
                </h3>
                <p className="text-[#64748b] text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center gap-12 mb-24"
          >
            <motion.div variants={slideInLeft} className="lg:w-1/2">

              <motion.h2
                variants={fadeInUp}
                className="text-3xl lg:text-4xl font-bold text-[#2d3748] mb-6"
              >
                Our Mission- Protecting Family Legacy and Heritage
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-[#64748b] mb-6 leading-relaxed text-lg"
              >
                Our mission at Shristi Universe is to help families preserve
                their legacy and heritage in today's modern era using digital
                technology. We provide a comprehensive platform where users can
                create trees, store precious memories, and safeguard historical
                heritage sites for generations to come.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="bg-[#f1ede8] rounded-2xl p-6 border border-[#e2ded9] mb-6"
              >
                <h3 className="text-lg font-bold text-[#2d3748] mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-[#5d87ff]" />
                  Key Features:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Create detailed family trees effortlessly.",
                    "Preserve and protect heritage sites linked to your family.",
                    "Organize events and celebrations.",
                    "Store and share photographs, documents, and memories securely.",
                    "Celebrate and pass down your family, community and group legacy to future generations.",
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-[#5d87ff] shrink-0 mt-0.5" />
                      <span className="text-[#2d3748]">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            <motion.div variants={slideInRight} className="lg:w-1/2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-linear-to-br from-[#5d87ff]/10 to-[#3d6fe6]/10 rounded-3xl h-96 lg:h-125 overflow-hidden border border-[#e2ded9] shadow-xl relative"
              >
                <img
                  src="/assets/images/FamilyConnection.png"
                  alt="Family Connection"
                  className="w-full h-full object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#2d3748]/20 to-transparent" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Why Choose Us Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-24"
          >
            <motion.div variants={slideInRight} className="lg:w-1/2">

              <motion.h2
                variants={fadeInUp}
                className="text-3xl lg:text-4xl font-bold text-[#2d3748] mb-6"
              >
                Why Choose Us
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-[#64748b] mb-6 leading-relaxed text-lg"
              >
                Shristi Universe is a unique digital family platform focused on
                preserving family history, promoting cultural heritage
                preservation, and fostering family unity. Unlike standard social
                platforms or genealogy apps, our platform offers a secure and
                meaningful way to practice digital memory preservation.
              </motion.p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#5d87ff] rounded-2xl p-6 mb-6"
              >
                <Quote className="h-8 w-8 text-white/50 mb-3" />
                <p className="text-white font-medium leading-relaxed text-lg">
                  "As a complete family genealogy platform, Shristi Universe
                  allows families, communities, and groups to build and
                  visualize detailed family trees, making it one of the best
                  platforms to preserve heritage and family memories online."
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Secure & private family spaces",
                  "Easy-to-use interface for all ages",
                  "Comprehensive legacy tools",
                  "Cross-platform accessibility",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-[#e2ded9]"
                  >
                    <div className="w-2 h-2 bg-[#5d87ff] rounded-full" />
                    <span className="text-[#2d3748] font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={slideInLeft} className="lg:w-1/2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-linear-to-br from-[#22c55e]/10 to-[#16a34a]/10 rounded-3xl h-96 lg:h-125 overflow-hidden border border-[#e2ded9] shadow-xl relative"
              >
                <img
                  src="/assets/images/Trusted.png"
                  alt="Trusted Platform"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#2d3748]/20 to-transparent" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* What We Stand For */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-4">
                <Flag className="h-4 w-4" />
                Our Values
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2d3748] mb-4">
                What We Stand For
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto text-lg">
                Our core values guide everything we do at Shristi Universe
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className="bg-[#3d4f6f] rounded-2xl p-6 text-center hover:bg-[#3d4f6f]/90 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  >
                    <value.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-4">
                <Star className="h-4 w-4" />
                Platform Features
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2d3748] mb-4">
                Our Core Features
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto text-lg">
                Everything you need to preserve and celebrate your family legacy
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <a key={index} href={feature.href}>
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      y: -10,
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    className="bg-white rounded-2xl border border-[#e2ded9] p-6 text-center hover:border-[#5d87ff]/30 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-[#5d87ff]/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    >
                      <feature.icon className="h-8 w-8 text-[#5d87ff]" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-[#2d3748] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Join CTA Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-linear-to-br from-[#5d87ff]/5 to-[#3d6fe6]/5 rounded-3xl p-8 lg:p-12 border border-[#e2ded9]"
          >
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div variants={slideInLeft} className="lg:w-1/2">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-6">
                  <Eye className="h-4 w-4" />
                  Get Started
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#2d3748] mb-6">
                  Join Shristi Universe Today
                </h2>
                <p className="text-[#64748b] mb-8 leading-relaxed text-lg">
                  Start your journey in preserving your family legacy with
                  Shristi Universe. Build your family tree, store precious
                  memories, and protect important documents — all in one secure
                  digital platform.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Create your family tree in minutes",
                    "Invite family members to collaborate",
                    "Secure cloud storage for memories",
                    "Access from any device, anywhere",
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-[#5d87ff]" />
                      <span className="text-[#2d3748] font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#5d87ff] text-white font-semibold py-4 px-8 rounded-xl hover:bg-[#4a7cff] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <a href="/login">

                      Start Your Family Tree Today
                    </a>
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>

                </div>
              </motion.div>

              <motion.div variants={slideInRight} className="lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-linear-to-br from-[#f59e0b]/10 to-[#d97706]/10 rounded-3xl h-96 overflow-hidden border border-[#e2ded9] shadow-xl relative"
                >
                  <img
                    src="/assets/images/JoinFt.png"
                    alt="Join Family Tree"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#2d3748]/20 to-transparent" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

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
              <h4 className="text-white font-bold mb-4">Shristi Universe</h4>
              <p className="text-white/70 text-sm">
                Preserving family legacies and heritage for generations to come.
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
              &copy; 2026 Shristi Universe. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}