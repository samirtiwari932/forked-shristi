"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Shield,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  History,
  Castle,
  TreePine,
  Eye,
  Heart,
  ChevronLeft,
  ChevronRight,
  Users,
  Image as ImageIcon,
  Loader2,
  Search,
  Calendar,
  Compass,
  Landmark,
  Mountain,
  Zap,
  Lock,
  Upload,
  Edit,
  Share2,
  MessageCircle,
  TrendingUp,
} from "lucide-react";

import { GoogleMapEmbed } from "@/components/Heritage/Maps";
import { usePopularHeritages } from "@/lib/hooks/usePopularHeritage";
import { HeritageResponse } from "@/types/heritage";
import Navbar from "@/components/Navbar";

import {
  HeritageSiteCarousel,
  HeritageDetailsDialog,
} from "@/components/Heritage/index";
import LoginDialog from "@/components/dialog/Login";
import Footer from "@/components/Landing/Footer";

import bouddhanath from "@/public/assets/images/bouddhanath-stupa.jpg";
import pashupatinath from "@/public/assets/images/pashupatinath-temple.jpg.png";
import swayambhunath from "@/public/assets/images/swayambhunath.jpg";

// Animation variants (same as finance page)
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

const HeritagePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const heritageSectionRef = useRef<HTMLDivElement | null>(null);

  const [selectedHeritage, setSelectedHeritage] =
    useState<HeritageResponse | null>(null);
  const [selectedHeritageForMap, setSelectedHeritageForMap] =
    useState<HeritageResponse | null>(null);
  const [isHeritageDialogOpen, setIsHeritageDialogOpen] = useState(false);

  const { heritages, loading, error } = usePopularHeritages();

  const handleHeritageClick = (heritage: HeritageResponse) => {
    setSelectedHeritage(heritage);
    setIsHeritageDialogOpen(true);
  };

  const handleViewOnMap = (heritage: HeritageResponse) => {
    setSelectedHeritageForMap(heritage);
  };

  const handleCreateHeritageClick = () => {
    // Check if user is logged in
    const isLoggedIn = false; // Replace with actual auth check

    if (!isLoggedIn) {
      setIsLoginOpen(true);
    } else {
      // Navigate to create event page or open create event modal
      console.log("Create event");
    }
  };

  const handleLogin = () => {
    window.location.href = "/login";
  };

  const handleRegister = () => {
    window.location.href = "/register";
  };

  const slides = [
    {
      id: 1,
      title: "Digitally Preserving Heritage",
      description:
        "Store, manage, and preserve family and community heritage with secure digital records",
      bgColor: "bg-[#3d4f6f]",
      icon: <Castle className="h-12 w-12 text-white" />,
      image: bouddhanath,
    },
    {
      id: 2,
      title: "Connect Past to Future",
      description:
        "Bridge generations through documented heritage sites and shared cultural stories",
      bgColor: "bg-[#2d3748]",
      icon: <History className="h-12 w-12 text-white" />,
      image: pashupatinath,
    },
    {
      id: 3,
      title: "Explore Global Heritage",
      description:
        "Discover culturally significant locations from communities worldwide",
      bgColor: "bg-[#3d4f6f]",
      icon: <Globe className="h-12 w-12 text-white" />,
      image: swayambhunath,
    },
  ];

  const heritageTypes = [
    {
      icon: <Mountain className="h-6 w-6" />,
      title: "Natural Heritage",
      description: "Document natural landmarks and environmental sites",
      color: "bg-green-500",
    },
    {
      icon: <Castle className="h-6 w-6" />,
      title: "Cultural Heritage",
      description: "Preserve temples, monuments, and cultural landmarks",
      color: "bg-blue-500",
    },
    {
      icon: <Landmark className="h-6 w-6" />,
      title: "Historical Heritage",
      description: "Archive historical buildings and significant sites",
      color: "bg-amber-500",
    },
    {
      icon: <TreePine className="h-6 w-6" />,
      title: "Mixed Heritage",
      description: "Sites with combined natural and cultural significance",
      color: "bg-purple-500",
    },
  ];

  const searchFeatures = [
    {
      icon: <Search className="h-5 w-5" />,
      title: "Advanced Search",
      description: "Find sites by name, type, user, city, or country",
    },
    {
      icon: <Compass className="h-5 w-5" />,
      title: "Discover Suggestions",
      description: "Explore heritage sites from global communities",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location-Based",
      description: "Search heritage by geographical regions",
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Latest Updates",
      description: "View newly published heritage sites",
    },
  ];

  const contributionFeatures = [
    {
      step: 1,
      title: "Add Site Details",
      description: "Enter title, description, and heritage type",
      icon: <Edit className="h-5 w-5" />,
    },
    {
      step: 2,
      title: "Set Location",
      description: "Specify country, city, and established date",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      step: 3,
      title: "Upload Media",
      description: "Add high-quality images for visual representation",
      icon: <Upload className="h-5 w-5" />,
    },
    {
      step: 4,
      title: "Publish & Share",
      description: "Make your heritage contribution visible to the community",
      icon: <Share2 className="h-5 w-5" />,
    },
  ];

  const engagementFeatures = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "View & Track",
      description: "See who published sites and track total visitors",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Like & Appreciate",
      description: "Show appreciation for documented heritage",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Comment & Discuss",
      description: "Share insights and promote cultural exchange",
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Share Stories",
      description: "Spread awareness about cultural significance",
    },
  ];

  const platformIntegrations = [
    {
      icon: <TreePine className="h-6 w-6" />,
      title: "Family Tree Connection",
      description: "Link heritage sites to ancestral roots and family history",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Event Planning",
      description: "Organize cultural visits and heritage-based ceremonies",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Network",
      description: "Connect with communities preserving similar heritage",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Archive",
      description: "Digitally preserve heritage with bank-level security",
    },
  ];

  const benefits = [
    "Preserve cultural legacy for future generations",
    "Document vanishing architectural styles and traditions",
    "Connect younger family members with their roots",
    "Build comprehensive digital heritage archives",
    "Share and celebrate cultural diversity globally",
    "Plan meaningful heritage visits and cultural events",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f6f3]">
      <Navbar />
      {/* Hero Slider Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative w-full h-125 overflow-hidden mt-8"
      >
        <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out ">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`${slide.bgColor} w-full h-full shrink-0 flex flex-col items-center justify-center text-white p-6 relative overflow-hidden`}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover opacity-30"
                priority={slide.id === 1}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60" />

              <div className="absolute top-10 left-10 w-32 h-32 bg-[#5d87ff]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#5d87ff]/10 rounded-full blur-3xl" />

              <div className="text-center max-w-4xl mx-auto relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-center mb-6"
                >
                  <div className="bg-[#5d87ff] p-5 rounded-2xl shadow-lg">
                    {slide.icon}
                  </div>
                </motion.div>
                <span className="inline-block px-4 py-1.5 bg-white/10 text-white/90 text-sm font-medium rounded-full mb-4 border border-white/20">
                  Heritage Preservation
                </span>
                <h1 className="text-5xl font-bold mb-6">{slide.title}</h1>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  {slide.description}
                </p>
                <button
                  className="bg-[#5d87ff] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#4a72e6] transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={handleLogin}
                >
                  Start Preserving Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[#5d87ff] w-8"
                  : "bg-white/40 hover:bg-white/60 w-2.5"
              }`}
            />
          ))}
        </div>
      </motion.section>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          {/* Introduction Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center gap-12 mb-24"
          >
            <motion.div variants={slideInLeft} className="lg:w-1/2">
              <motion.span
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-6"
              >
                <History className="h-4 w-4" />
                Digital Preservation
              </motion.span>

              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-bold text-[#2d3748] mb-6"
              >
                Digitally Preserving Heritage for Generations to Come
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-[#64748b] mb-4 leading-relaxed"
              >
                Shristi Universe is building the world's most trusted platform
                for digital heritage preservation, designed to bridge the past,
                present, and future for families and communities across the
                globe.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-[#64748b] mb-6 leading-relaxed"
              >
                As cultures evolve and families spread across continents,
                stories, traditions, and heritage sites are increasingly at risk
                of being forgotten. We believe heritage should not fade with
                time — it should be securely preserved, digitally documented,
                and proudly celebrated.
              </motion.p>

              <motion.div
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                className="bg-[#3d4f6f] p-6 rounded-2xl"
              >
                <p className="text-white font-medium leading-relaxed">
                  Our platform strengthens inter-generational connection,
                  fosters shared pride, and ensures that family and cultural
                  history remains accessible and meaningful.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={slideInRight} className="lg:w-1/2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#f1ede8] rounded-3xl p-8 border border-[#e2ded9]"
              >
                <h3 className="text-xl font-bold text-[#2d3748] mb-6">
                  Platform Capabilities:
                </h3>
                <div className="space-y-3">
                  {[
                    "Heritage site mapping and documentation",
                    "Secure memory archiving with encryption",
                    "Community-driven storytelling platform",
                    "Inter-generational connection tools",
                    "Cultural identity preservation",
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 bg-white rounded-xl px-4 py-3"
                    >
                      <CheckCircle className="h-5 w-5 text-[#5d87ff]" />
                      <span className="text-[#2d3748]">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <div ref={heritageSectionRef}>
            {loading ? (
              <div className="text-center py-16">
                <Loader2 className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
                <p className="text-gray-600">Loading heritage sites...</p>
              </div>
            ) : error ? (
              <div className="text-center py-16">
                <div className="bg-red-50 border border-red-200 rounded-2xl p-8 inline-block">
                  <p className="text-red-600 font-medium">{error}</p>
                </div>
              </div>
            ) : (
              <>
                <HeritageSiteCarousel
                  sites={heritages}
                  onCreateClick={handleCreateHeritageClick}
                  onSiteClick={handleHeritageClick}
                  onViewMap={handleViewOnMap}
                />
              </>
            )}
          </div>

          {/* Heritage Types Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-18 mb-24"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-4">
                <Landmark className="h-4 w-4" />
                Heritage Categories
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-4">
                Four Types of Heritage to Preserve
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                Document and categorize your heritage sites based on their
                cultural, natural, historical, or mixed significance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {heritageTypes.map((type, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  className="bg-white rounded-2xl border border-[#e2ded9] p-6 hover:border-[#5d87ff]/30 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 ${type.color} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <div className="text-white">{type.icon}</div>
                  </motion.div>
                  <h3 className="font-bold text-[#2d3748] mb-2">
                    {type.title}
                  </h3>
                  <p className="text-[#64748b] text-sm">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Explore and Discover Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-4">
                <Search className="h-4 w-4" />
                Discovery
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-4">
                Explore and Discover Heritage Sites
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                The Heritage Preservation feature allows users to easily search
                and explore heritage sites from different regions and cultures
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {searchFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl border border-[#e2ded9] p-6"
                >
                  <div className="w-12 h-12 bg-[#5d87ff]/10 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-[#5d87ff]">{feature.icon}</div>
                  </div>
                  <h3 className="font-bold text-[#2d3748] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#64748b] text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#f1ede8] rounded-3xl p-8 border border-[#e2ded9]"
            >
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">
                Search Heritage Sites By:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  "Heritage Site Name",
                  "Site Type",
                  "Publishing User",
                  "City",
                  "Country",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white rounded-xl px-4 py-3"
                  >
                    <div className="w-2 h-2 bg-[#5d87ff] rounded-full" />
                    <span className="text-[#2d3748] text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Add Heritage Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-start gap-12 mb-24"
          >
            <motion.div variants={slideInLeft} className="lg:w-1/2">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-6">
                <Upload className="h-4 w-4" />
                Contribution
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-6">
                Add and Preserve Heritage Sites from Your Location
              </h2>
              <p className="text-[#64748b] mb-6 leading-relaxed">
                Shristi Universe is a community-powered heritage platform,
                allowing users to actively contribute to preservation efforts.
                Users can add heritage sites that belong to their local area or
                cultural background.
              </p>

              <div className="space-y-4">
                {contributionFeatures.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#e2ded9]"
                  >
                    <div className="w-8 h-8 bg-[#5d87ff] rounded-lg flex items-center justify-center shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">
                        {feature.step}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#2d3748] mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-[#64748b] text-sm">
                        {feature.description}
                      </p>
                    </div>
                    <div className="text-[#5d87ff] mt-1">{feature.icon}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={slideInRight} className="lg:w-1/2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-linear-to-br from-[#5d87ff]/5 to-[#3d4f6f]/5 rounded-3xl p-8 border border-[#e2ded9]"
              >
                <h3 className="text-xl font-bold text-[#2d3748] mb-6">
                  While Adding a Heritage Site, Include:
                </h3>
                <ul className="space-y-4">
                  {[
                    { label: "Title", desc: "Name of the heritage site" },
                    {
                      label: "Description",
                      desc: "Cultural, historical, or natural significance",
                    },
                    {
                      label: "Heritage Type",
                      desc: "Natural, Cultural, Historical, or Mixed",
                    },
                    {
                      label: "Location",
                      desc: "Country and city where site is located",
                    },
                    {
                      label: "Established Date",
                      desc: "Historical date of the site",
                    },
                    {
                      label: "Images",
                      desc: "High-quality photos for visual representation",
                    },
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-[#5d87ff] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-[#2d3748]">
                          {item.label}:{" "}
                        </span>
                        <span className="text-[#64748b]">{item.desc}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 bg-[#5d87ff]/5 rounded-2xl p-5 border border-[#5d87ff]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <ImageIcon className="h-5 w-5 text-[#5d87ff]" />
                    <h4 className="font-semibold text-[#2d3748]">
                      Visual Impact
                    </h4>
                  </div>
                  <p className="text-[#64748b] text-sm">
                    Adding images not only enhances visual appeal but also
                    increases user engagement, making heritage exploration more
                    immersive and educational.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* My Heritage Management Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-4">
                <Edit className="h-4 w-4" />
                Management
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-4">
                My Heritage: Manage and Control Your Contributions
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                All heritage sites published by a user appear in the My Heritage
                section. This personalized dashboard provides full control over
                your contributions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: <Eye className="h-6 w-6" />,
                  title: "View & Monitor",
                  description:
                    "See all your published heritage sites in one place",
                  color: "bg-blue-500",
                },
                {
                  icon: <Edit className="h-6 w-6" />,
                  title: "Edit Anytime",
                  description: "Update site details and information as needed",
                  color: "bg-green-500",
                },
                {
                  icon: <TrendingUp className="h-6 w-6" />,
                  title: "Track Engagement",
                  description:
                    "Monitor views, likes, and comments on your sites",
                  color: "bg-purple-500",
                },
                {
                  icon: <Lock className="h-6 w-6" />,
                  title: "Ownership Control",
                  description:
                    "Maintain long-term responsibility for your sites",
                  color: "bg-amber-500",
                },
                {
                  icon: <Share2 className="h-6 w-6" />,
                  title: "Transfer Ownership",
                  description:
                    "Pass on heritage preservation to trusted members",
                  color: "bg-red-500",
                },
                {
                  icon: <Shield className="h-6 w-6" />,
                  title: "Full Access Rights",
                  description:
                    "Complete management capabilities for your heritage",
                  color: "bg-indigo-500",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl border border-[#e2ded9] p-6"
                >
                  <div
                    className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="font-bold text-[#2d3748] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#64748b] text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#5d87ff]/5 rounded-2xl p-6 border border-[#5d87ff]/20"
            >
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-[#5d87ff] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#2d3748] mb-2">
                    Collaborative Preservation
                  </h4>
                  <p className="text-[#64748b]">
                    For collaborative preservation, ownership transfer enables
                    heritage responsibility sharing. When ownership is
                    transferred, the new owner receives full access and
                    management rights, ensuring continuity in preservation
                    responsibilities and change.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visit & Latest Heritage Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-start gap-12 mb-24"
          >
            <motion.div variants={slideInLeft} className="lg:w-1/2">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-medium mb-6">
                <Compass className="h-4 w-4" />
                Heritage to Visit
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-6">
                Visit, Learn, and Stay Updated
              </h2>
              <p className="text-[#64748b] mb-6 leading-relaxed">
                The Heritage feature includes dedicated sub-sections to enhance
                discovery and help users plan meaningful journeys to culturally
                significant sites.
              </p>

              <div className="bg-white rounded-2xl border border-[#e2ded9] p-6 mb-6">
                <h3 className="font-bold text-[#2d3748] mb-4 flex items-center gap-2">
                  <Compass className="h-5 w-5 text-green-600" />
                  Heritage to Visit
                </h3>
                <p className="text-[#64748b] mb-4">
                  This section helps users explore heritage sites they may want
                  to visit in the future. It is particularly useful for
                  travellers, families, and cultural enthusiasts planning
                  meaningful journeys.
                </p>
                <ul className="space-y-2">
                  {[
                    "Create personalized heritage bucket lists",
                    "Plan cultural trips with family members",
                    "Discover nearby heritage sites",
                    "Save sites for future exploration",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-[#64748b]"
                    >
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={slideInRight} className="lg:w-1/2">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-600 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4" />
                Latest Updates
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-6">
                Latest Heritage
              </h2>
              <p className="text-[#64748b] mb-6 leading-relaxed">
                The Latest Heritage section displays newly published heritage
                sites, keeping the platform fresh and dynamic. This encourages
                continuous participation and ensures that newly documented sites
                gain visibility quickly.
              </p>

              <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                <h3 className="font-bold text-[#2d3748] mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                  Why Latest Heritage Matters
                </h3>
                <ul className="space-y-3">
                  {[
                    "Discover freshly documented sites",
                    "Stay updated with community contributions",
                    "Support new heritage preservation efforts",
                    "Be among the first to explore new sites",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                        <Star className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-[#2d3748] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Engagement Features Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-4">
                <Heart className="h-4 w-4" />
                Community Engagement
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-4">
                Engage with Heritage Through Interaction
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                Each heritage site includes a detailed view where users can
                interact, appreciate, and contribute to cultural exchange
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {engagementFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl border border-[#e2ded9] p-6 text-center"
                >
                  <div className="w-14 h-14 bg-[#5d87ff]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-[#5d87ff]">{feature.icon}</div>
                  </div>
                  <h3 className="font-bold text-[#2d3748] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#64748b] text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#f1ede8] rounded-3xl p-8 border border-[#e2ded9]"
            >
              <h3 className="text-xl font-bold text-[#2d3748] mb-4">
                Interactive Features Transform Heritage into Social Experience:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  "Promote discussion and cultural dialogue",
                  "Enable education through shared knowledge",
                  "Foster global cultural exchange",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#5d87ff] mt-0.5" />
                    <span className="text-[#2d3748] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Platform Integration Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-4">
                <Users className="h-4 w-4" />
                Platform Integration
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-4">
                Connecting Heritage with Family and Community Life
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                Shristi Universe goes beyond heritage documentation by
                integrating preservation with everyday digital life
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platformIntegrations.map((integration, idx) => (
                <motion.div
                  key={idx}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#3d4f6f] rounded-2xl p-6 text-center"
                >
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">{integration.icon}</div>
                  </div>
                  <h3 className="font-bold text-white mb-2">
                    {integration.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {integration.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits & CTA Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-[#f1ede8] rounded-3xl p-8 lg:p-12 border border-[#e2ded9] mb-20"
          >
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div variants={slideInLeft} className="lg:w-1/2">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-6">
                  <Star className="h-4 w-4" />
                  Why Choose Us
                </span>
                <h2 className="text-3xl font-bold text-[#2d3748] mb-6">
                  The Heritage Preservation Platform
                </h2>
                <p className="text-[#64748b] mb-8 leading-relaxed">
                  The Heritage Preservation feature is redefining how the world
                  documents and protects its cultural legacy. By empowering
                  users to explore, contribute, and engage with heritage sites,
                  the platform ensures that history is not lost but passed
                  forward.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 bg-white rounded-xl px-4 py-3"
                    >
                      <CheckCircle className="h-5 w-5 text-[#5d87ff] shrink-0" />
                      <span className="text-[#2d3748]">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={slideInRight} className="lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-3xl p-8 border border-[#e2ded9]"
                >
                  <h3 className="text-xl font-bold text-[#2d3748] mb-6">
                    Start Your Heritage Journey Today
                  </h3>
                  <p className="text-[#64748b] mb-6 leading-relaxed">
                    Whether you are preserving ancestral landmarks, discovering
                    cultural roots through a family tree, planning heritage
                    events, or connecting communities across borders, we provide
                    a future-ready solution for digital heritage preservation.
                  </p>
                  <div className="space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-[#5d87ff] text-white font-semibold py-4 px-6 rounded-xl hover:bg-[#4a6fd9] transition-colors flex items-center justify-center gap-2"
                      onClick={handleLogin}
                    >
                      Begin Preserving Heritage
                      <ArrowRight className="h-5 w-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-[#f1ede8] text-[#2d3748] font-semibold py-4 px-6 rounded-xl hover:bg-[#e2ded9] transition-colors"
                      onClick={() =>
                        heritageSectionRef.current?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        })
                      }
                    >
                      Explore Heritage Sites
                    </motion.button>
                  </div>
                  <p className="text-xs text-[#64748b] text-center mt-6">
                    Securely preserved • Digitally documented • Proudly
                    celebrated
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Conclusion Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.div
              variants={scaleIn}
              className="bg-[#3d4f6f] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-48 h-48 bg-[#5d87ff]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#5d87ff]/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-16 h-16 bg-[#5d87ff] rounded-2xl flex items-center justify-center mx-auto mb-6"
                >
                  <Globe className="h-8 w-8 text-white" />
                </motion.div>

                <h2 className="text-3xl font-bold mb-6">
                  Your Cultural Legacy Awaits
                </h2>
                <p className="text-lg mb-8 text-white/80 max-w-3xl mx-auto">
                  Shristi Universe provides a future-ready solution for digital
                  heritage preservation. From ancient temples to natural
                  landmarks, from family histories to community traditions—every
                  heritage deserves to be remembered.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    "Heritage Mapping",
                    "Memory Archiving",
                    "Community Stories",
                    "Cultural Exchange",
                  ].map((tag, idx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="px-6 py-2 bg-white/10 backdrop-blur rounded-full text-sm font-medium border border-white/20"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Heritage Details Dialog */}
      {selectedHeritage && (
        <HeritageDetailsDialog
          heritage={selectedHeritage}
          isOpen={isHeritageDialogOpen}
          onClose={() => {
            setIsHeritageDialogOpen(false);
            setSelectedHeritage(null);
          }}
        />
      )}

      {/* Map Modal */}
      {selectedHeritageForMap && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedHeritageForMap(null)}
        >
          <div
            className="w-full max-w-4xl rounded-3xl shadow-2xl bg-white overflow-hidden animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100 bg-linear-to-r from-blue-50 to-white">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedHeritageForMap.title}
                </h3>
                <p className="text-gray-600 flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4" />
                  {selectedHeritageForMap.city?.name},{" "}
                  {selectedHeritageForMap.country?.countryName}
                </p>
              </div>
              <button
                onClick={() => setSelectedHeritageForMap(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <div className="h-8 w-8 flex items-center justify-center text-gray-500 hover:text-gray-700 text-xl">
                  ✕
                </div>
              </button>
            </div>
            <div className="p-4">
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <GoogleMapEmbed
                  lat={selectedHeritageForMap.latitude ?? 0}
                  lng={selectedHeritageForMap.longitude ?? 0}
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">
                  Showing location of {selectedHeritageForMap.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <LoginDialog
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
        onRegister={handleRegister}
        message="Please login to create your heritage site."
        feature="create your heritage site"
      />
    </div>
  );
};

export default HeritagePage;
