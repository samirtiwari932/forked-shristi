"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar, Users, Lock, Globe, CheckCircle, Eye, Clock, Shield, Star, ArrowRight, Target, Zap, TrendingUp, MapPin
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { usePopularEvents } from "@/lib/hooks/usePopularEvents";
import { EventResponse } from "@/types/event";
import {
  EventSiteCarousel,
  EventDetailsDialog,
} from "@/components/Event/index";
import { Loader2 } from "lucide-react";
import { GoogleMapEmbed } from "@/components/Heritage/Maps";
import LoginDialog from "@/components/dialog/Login";
import Link from "next/link";
import Footer from "@/components/Landing/Footer";

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

const EventsComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<EventResponse | null>(
    null,
  );
  const [selectedEventForMap, setSelectedEventForMap] =
    useState<EventResponse | null>(null);
  const [isEventDialogOpen, setIsEventDialogOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const { events, loading, error } = usePopularEvents();

  const handleEventClick = (event: EventResponse) => {
    setSelectedEvent(event);
    setIsEventDialogOpen(true);
  };

  const handleViewOnMap = (event: EventResponse) => {
    setSelectedEventForMap(event);
  };

  const handleLogin = () => {
    window.location.href = "/login";
  };

  const handleRegister = () => {
    window.location.href = "/register";
  };

  const handleJoinClick = (event: EventResponse) => {
    // Check if user is logged in (you'll need to implement this check based on your auth)
    const isLoggedIn = false; // Replace with actual auth check

    if (!isLoggedIn) {
      setIsLoginOpen(true);
    } else {
      // Handle join event logic here
      console.log("Joining event:", event.id);
      // Make API call to join event
    }
  };

  const handleCreateEventClick = () => {
    // Check if user is logged in
    const isLoggedIn = false; // Replace with actual auth check

    if (!isLoggedIn) {
      setIsLoginOpen(true);
    } else {
      // Navigate to create event page or open create event modal
      console.log("Create event");
    }
  };

  const slides = [
    {
      id: 1,
      title: "Bring Families Together",
      description:
        "Organize birthdays, anniversaries, and community events with seamless planning",
      bgColor: "bg-[#3d4f6f]",
      icon: <Calendar className="h-12 w-12 text-white" />,
    },
    {
      id: 2,
      title: "Community Gatherings Made Easy",
      description:
        "From Kul Puja to festivals, manage all your community events in one place",
      bgColor: "bg-[#2d3748]",
      icon: <Users className="h-12 w-12 text-white" />,
    },
    {
      id: 3,
      title: "Privacy You Control",
      description:
        "Choose between public and private events with full control over visibility",
      bgColor: "bg-[#3d4f6f]",
      icon: <Shield className="h-12 w-12 text-white" />,
    },
  ];

  const eventCategories = [
    {
      icon: <Eye className="h-5 w-5" />,
      title: "Suggested Events",
      description:
        "Discover events happening around you within families, communities, or groups.",
      features: [
        "Displays upcoming public events",
        "Shows who is organizing the event",
        "Provides essential details such as event description, host name, and number of participants",
        "Allows users to view event details before deciding to participate",
      ],
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Going (Upcoming Events)",
      description:
        "Your personal event calendar for all events you plan to attend.",
      features: [
        "Displays all events you plan to attend in the future",
        "Helps you stay organized and avoid missing important gatherings",
        "Works as a reminder hub for family, community, and group events",
      ],
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "My Events (Events You Organize)",
      description: "Complete control center for event organizers.",
      features: [
        "View all events they have created",
        "Organize events for families, communities, or groups",
        "Choose private or public visibility based on requirements",
        "Edit event information such as date, time, location, and description",
        "Manage participants efficiently",
        "Transfer event ownership to another trusted member",
      ],
    },
  ];

  const privacyTypes = [
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Private Events",
      description:
        "Ideal for birthdays, anniversaries, family meetings, or internal group discussions.",
      features: [
        "Only invited members can view and attend",
        "Complete privacy for personal gatherings",
        "Perfect for intimate family moments",
      ],
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Public Events",
      description:
        "Suitable for community programs, cultural events, Kul Puja, or open group meetings.",
      features: [
        "Visible in Suggested Events section",
        "Encourages wider participation",
        "Great for community engagement",
      ],
    },
  ];

  const eventTypes = [
    "Family birthdays and anniversaries",
    "Religious and cultural ceremonies",
    "Community gatherings and festivals",
    "Organizational or group meetings",
    "Social and networking events",
  ];

  const featuresList = [
    "Create events in minutes",
    "Choose between public or private events",
    "Manage participants effortlessly",
    "Track attendance in real time",
    "Edit event details anytime",
    "Transfer event ownership when required",
  ];

  const standoutFeatures = [
    {
      title: "Built for Families",
      description:
        "Specifically designed for families, communities, and groups",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Simple Interface",
      description: "Intuitive user interface that anyone can use",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      title: "Centralized Management",
      description: "All your events in one organized system",
      icon: <Target className="h-5 w-5" />,
    },
    {
      title: "Privacy Controls",
      description: "Strong privacy settings for your events",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "Real-time Tracking",
      description: "Track participants as they join",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      title: "No External Tools",
      description: "Seamless coordination without complexity",
      icon: <CheckCircle className="h-5 w-5" />,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f6f3] overflow-x-hidden touch-pan-y">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - Static with Animation */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative w-full bg-[#f1ede8] py-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideInLeft}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              >
                <Calendar className="h-4 w-4 text-[#5d87ff]" />
                <span className="text-sm text-[#64748b]">
                  Family Groups & Events
                </span>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-[#2d3748] mb-6 leading-tight"
              >
                Bring Families, Communities, and Groups Together
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-[#64748b] mb-8 leading-relaxed max-w-xl"
              >
                Organize birthdays, anniversaries, community events, and more
                with seamless planning and real-time coordination.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-3 mb-8"
              >
                {["Birthdays", "Anniversaries", "Community", "Gatherings"].map(
                  (tag, idx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="bg-white/70 backdrop-blur-sm text-[#2d3748] px-4 py-2 rounded-full text-sm border border-[#e2ded9]"
                    >
                      {tag}
                    </motion.span>
                  ),
                )}
              </motion.div>
              <motion.a
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#5d87ff] text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-[#4a6fe0] transition-all duration-300 shadow-lg shadow-[#5d87ff]/20 flex items-center gap-2"
                href="https://shristiuniverse.com/login"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </motion.a>
            </motion.div>
            <motion.div variants={slideInRight} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-3xl p-8 shadow-xl shadow-black/5"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-[#5d87ff]/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-[#5d87ff]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2d3748]">
                      Family Reunion
                    </h3>
                    <p className="text-sm text-[#64748b]">
                      25 participants joined
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {["Date & Time Set", "Venue Confirmed", "Invites Sent"].map(
                    (item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="flex items-center gap-3 bg-[#f8f6f3] rounded-xl px-4 py-3"
                      >
                        <CheckCircle className="h-5 w-5 text-[#5d87ff]" />
                        <span className="text-[#2d3748]">{item}</span>
                      </motion.div>
                    ),
                  )}
                </div>
              </motion.div>
              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -right-4 h-24 w-24 bg-[#5d87ff]/10 rounded-full blur-2xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 -left-4 h-32 w-32 bg-[#5d87ff]/5 rounded-full blur-3xl"
              />
            </motion.div>
          </div>
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
                <Calendar className="h-4 w-4" />
                Event Management
              </motion.span>

              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-bold text-[#2d3748] mb-6"
              >
                Bring Families, Communities, and Groups Together Effortlessly
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-[#64748b] mb-4 leading-relaxed"
              >
                In today's fast-moving digital world, families and communities
                are more connected than ever, yet organizing meaningful
                gatherings still remains a challenge. Phone calls, scattered
                messages, and multiple social platforms often create confusion
                instead of clarity.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-[#64748b] mb-6 leading-relaxed"
              >
                Srishti Universe solves this problem by offering a powerful yet
                simple Family Groups & Events feature designed to help families,
                communities, and organizations plan, manage, and participate in
                events with ease and joy.
              </motion.p>

              <motion.div
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                className="bg-[#3d4f6f] p-6 rounded-2xl"
              >
                <p className="text-white font-medium leading-relaxed">
                  Whether it's a private family birthday, an anniversary
                  celebration, a community Kul Puja, or a group meeting, Srishti
                  Universe provides a centralized and reliable event management
                  experience that keeps everyone informed and involved.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={slideInRight} className="lg:w-1/2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#f1ede8] rounded-3xl p-8 border border-[#e2ded9]"
              >
                <h3 className="text-xl font-bold text-[#2d3748] mb-6">
                  Event Management Features:
                </h3>
                <div className="space-y-3">
                  {featuresList.map((item, idx) => (
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

          {/* Smarter Way Section */}
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
                <Target className="h-4 w-4" />
                Smart Management
              </motion.span>

              <motion.h2
                variants={fadeInUp}
                className="text-4xl font-bold text-[#2d3748] mb-6"
              >
                A Smarter Way to Create and Manage Events
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-[#64748b] mb-6 leading-relaxed"
              >
                The Events feature in Srishti Universe is built to serve diverse
                needs from intimate family occasions to large public community
                gatherings. Events are not limited to family activities alone;
                users can organize events for families, communities, and groups,
                making it a versatile solution for real-life connections.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-[#64748b] mb-6 leading-relaxed"
              >
                This flexibility makes Srishti Universe more than just an event
                tool it becomes a complete family and community event management
                platform.
              </motion.p>
            </motion.div>

            <motion.div variants={slideInRight} className="lg:w-1/2">
              <div className="bg-[#3d4f6f] rounded-3xl p-8 text-white">
                {/* <div className="flex items-center justify-between mb-8">
                  <span className="text-white/60 text-sm">Event Platform</span>
                </div> */}
                <h3 className="text-3xl font-bold mb-2">Events</h3>
                <p className="text-white/60 mb-8">
                  Complete Management Platform
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/80">Active Events</span>
                    <span className="text-2xl font-bold">24</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/80">Participants</span>
                    <span className="text-2xl font-bold">156</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Communities</span>
                    <span className="text-2xl font-bold">8</span>
                  </div>
                </div>
                <Link href="/features">
                  <button className="mt-6 bg-[#5d87ff] text-white px-6 py-3 rounded-full text-sm font-medium w-full hover:bg-[#4a6fe0] transition-colors flex items-center justify-center gap-2">
                    Explore Features
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {loading ? (
            <div className="text-center py-16">
              <Loader2 className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Loading events...</p>
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8 inline-block">
                <p className="text-red-600 font-medium">{error}</p>
              </div>
            </div>
          ) : (
            <>
              <EventSiteCarousel
                events={events}
                onCreateClick={handleCreateEventClick}
                onEventClick={handleEventClick}
                onViewMap={handleViewOnMap}
                onJoinClick={handleJoinClick}
              />
            </>
          )}

          {/* Event Categories Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-18 mb-24"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-4">
                <Target className="h-4 w-4" />
                Categories
              </span>
              <h2 className="text-4xl font-bold text-[#2d3748] mb-4">
                Event Categories Designed for Simplicity
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                To ensure a smooth and user-friendly experience, events in
                Srishti Universe are divided into three clear sections
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {eventCategories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl p-6 border border-[#e2ded9] hover:shadow-lg hover:shadow-black/5 transition-all duration-300 group"
                >
                  <div className="h-12 w-12 rounded-2xl bg-[#5d87ff]/10 flex items-center justify-center mb-5 group-hover:bg-[#5d87ff] transition-colors">
                    <div className="text-[#5d87ff] group-hover:text-white transition-colors">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#2d3748] mb-3">
                    {category.title}
                  </h3>
                  <p className="text-[#64748b] mb-5 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.features.slice(0, 3).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-[#64748b]"
                      >
                        <div className="h-1.5 w-1.5 bg-[#5d87ff] rounded-full mt-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#f1ede8] rounded-2xl p-6 border border-[#e2ded9]"
            >
              <p className="text-[#64748b] text-sm">
                <strong className="text-[#2d3748]">Note:</strong> Only public
                events appear in suggestions. This ensures privacy while
                encouraging community engagement. With a single click, users can
                explore events and choose to join those that interest them.
              </p>
            </motion.div>
          </motion.div>

          {/* Privacy Control Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-4">
                <Shield className="h-4 w-4" />
                Privacy Control
              </span>
              <h2 className="text-4xl font-bold text-[#2d3748] mb-4">
                Public vs Private Events: Full Control Over Privacy
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                Srishti Universe understands that not all events are meant for
                everyone. That's why users can decide the visibility of each
                event.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {privacyTypes.map((type, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-3xl p-8 border border-[#e2ded9] hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-xl bg-[#5d87ff]/10 flex items-center justify-center">
                      <div className="text-[#5d87ff]">{type.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#2d3748]">
                      {type.title}
                    </h3>
                  </div>
                  <p className="text-[#64748b] mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 bg-[#f8f6f3] rounded-xl px-4 py-3"
                      >
                        <CheckCircle className="h-5 w-5 text-[#5d87ff]" />
                        <span className="text-[#2d3748]">{feature}</span>
                      </div>
                    ))}
                  </div>
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
                    Flexible Privacy Settings
                  </h4>
                  <p className="text-[#64748b]">
                    This flexibility empowers users to organize events
                    confidently without compromising privacy. If an event is set
                    to private, only invited members can attend. If marked
                    public, it becomes visible in the Suggested Events section,
                    allowing other users to discover and join.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Meaningful Life Events Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={slideInLeft}
                className="bg-[#3d4f6f] rounded-3xl p-8 text-white"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Star className="h-6 w-6 text-[#fbbf24]" />
                  <span className="text-white/80">More Than Meetings</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">
                  Meaningful Life Events
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  The Events feature is not limited to formal meetings or
                  organizational use. It is equally powerful for personal and
                  cultural moments.
                </p>
                <div className="space-y-4">
                  {eventTypes.map((type, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3"
                    >
                      <div className="h-2 w-2 bg-[#5d87ff] rounded-full" />
                      <span className="text-white/90">{type}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={slideInRight}>
                <div className="inline-flex items-center gap-2 bg-[#fbbf24]/10 px-4 py-2 rounded-full mb-6">
                  <Star className="h-4 w-4 text-[#fbbf24]" />
                  <span className="text-sm font-medium text-[#d97706]">
                    Life Events
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-[#2d3748] mb-6">
                  Track and Celebrate Every Moment
                </h2>
                <p className="text-[#64748b] mb-6 leading-relaxed">
                  By tracking participant counts, hosts can plan better and
                  ensure smoother execution, also by managing the financial
                  standard. This makes Srishti Universe useful not just for
                  organizations but for everyday family and community life.
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#f1ede8] rounded-2xl p-6 border border-[#e2ded9]"
                >
                  <h4 className="font-semibold text-[#2d3748] mb-3">
                    Enhanced Event Planning:
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Real-time participant tracking",
                      "Better resource allocation",
                      "Improved financial planning",
                      "Seamless coordination",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-[#64748b]"
                      >
                        <CheckCircle className="h-4 w-4 text-[#5d87ff]" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Why Stand Out Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-4">
                <Target className="h-4 w-4" />
                Why Choose Us
              </span>
              <h2 className="text-4xl font-bold text-[#2d3748] mb-4">
                Why Srishti Universe Events Stand Out
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                Compared to generic event tools and social media platforms,
                Srishti Universe focuses on relationship-driven event management
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standoutFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-6 border border-[#e2ded9] hover:border-[#5d87ff]/30 hover:shadow-lg hover:shadow-[#5d87ff]/5 transition-all duration-300"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#5d87ff]/10 flex items-center justify-center mb-4">
                    <div className="text-[#5d87ff]">{feature.icon}</div>
                  </div>
                  <h3 className="font-bold text-[#2d3748] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#64748b]">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-8 bg-[#f1ede8] rounded-2xl p-6 border border-[#e2ded9]"
            >
              <h4 className="font-semibold text-[#2d3748] mb-3">
                Key Advantages:
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Built specifically for families, communities, and groups",
                  "Simple and intuitive user interface",
                  "Centralized event management system",
                  "Strong privacy controls",
                  "Real-time participant tracking",
                  "Seamless coordination without external tools",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#5d87ff]" />
                    <span className="text-[#2d3748] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Final CTA Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20"
          >
            <motion.div
              variants={scaleIn}
              className="bg-[#3d4f6f] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-48 h-48 bg-[#5d87ff]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#5d87ff]/20 rounded-full blur-3xl" />

              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-16 h-16 bg-[#5d87ff] rounded-2xl flex items-center justify-center mx-auto mb-6"
                >
                  <Calendar className="h-8 w-8 text-white" />
                </motion.div>

                <h2 className="text-4xl font-bold mb-6">
                  Transform the Way You Connect
                </h2>
                <p className="text-lg mb-8 text-white/80 max-w-3xl mx-auto leading-relaxed">
                  The Family Groups & Events feature in Srishti Universe
                  transforms the way people connect, plan, and celebrate
                  together. From private family occasions to large public
                  community events, the platform offers a secure, organized, and
                  joyful experience for everyone involved.
                </p>

                <p className="text-lg mb-8 text-white/80 max-w-3xl mx-auto leading-relaxed">
                  If you are looking for a reliable way to manage family events,
                  community programs, or group activities without complexity,
                  Srishti Universe provides the perfect digital space to bring
                  people together effortlessly.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {[
                    "Family Events",
                    "Community Programs",
                    "Cultural Ceremonies",
                    "Group Meetings",
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

                <a
                  className="bg-[#5d87ff] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#4a6fe0] transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                  href="https://shristiuniverse.com/login"
                >
                  Start Planning Your First Event
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Event Details Dialog */}
      {selectedEvent && (
        <EventDetailsDialog
          event={selectedEvent}
          isOpen={isEventDialogOpen}
          onClose={() => {
            setIsEventDialogOpen(false);
            setSelectedEvent(null);
          }}
        />
      )}

      {/* Map Modal */}
      {selectedEventForMap && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedEventForMap(null)}
        >
          <div
            className="w-full max-w-4xl rounded-3xl shadow-2xl bg-white overflow-hidden animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100 bg-linear-to-r from-blue-50 to-white">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedEventForMap.name}
                </h3>
                <p className="text-gray-600 flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4" />
                  {selectedEventForMap.city?.name}
                </p>
              </div>
              <button
                onClick={() => setSelectedEventForMap(null)}
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
                  lat={selectedEventForMap.latitude ?? 0}
                  lng={selectedEventForMap.longitude ?? 0}
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">
                  Showing location of {selectedEventForMap.name}
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
        message="Please login to join events or create your own events"
        feature="join or create events"
      />
    </div>
  );
};

export default EventsComponent;
