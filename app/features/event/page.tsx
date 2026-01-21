import { Metadata } from "next";
import {
  Calendar,
  Users,
  Lock,
  Globe,
  CheckCircle,
  Eye,
  Clock,
  Shield,
  Star,
  ArrowRight,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Family Groups & Events - Plan, Manage & Celebrate Family and Community Events | Shristi Universe",
  description:
    "Bring families and communities together effortlessly. Organize birthdays, anniversaries, community events, and more with Shristi Universe's Family Groups & Events feature.",
  keywords: [
    "family groups",
    "event management",
    "community events",
    "private events",
    "public events",
    "family connection",
    "heritage preservation",
  ],
  authors: [{ name: "Shristi Universe" }],
  creator: "Shristi Universe",
  publisher: "Shristi Universe",
  openGraph: {
    title:
      "Family Groups & Events - Organize Family, Community & Group Events | Shristi Universe",
    description:
      "Plan family, community, and group events easily. Track participants, manage private/public visibility, and share memories securely.",
    url: "/features/events",
    siteName: "Shristi Universe",
    type: "website",
  },
};

export default function EventPage() {
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

  const standoutFeatures = [
    {
      title: "Built for Families",
      description: "Specifically designed for families, communities, and groups",
    },
    {
      title: "Simple Interface",
      description: "Intuitive user interface that anyone can use",
    },
    {
      title: "Centralized Management",
      description: "All your events in one organized system",
    },
    {
      title: "Privacy Controls",
      description: "Strong privacy settings for your events",
    },
    {
      title: "Real-time Tracking",
      description: "Track participants as they join",
    },
    {
      title: "No External Tools",
      description: "Seamless coordination without complexity",
    },
  ];

  const featuresList = [
    "Create events in minutes",
    "Choose between public or private events",
    "Manage participants effortlessly",
    "Track attendance in real time",
    "Edit event details anytime",
    "Transfer event ownership when required",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f6f3]">
      {/* Navigation */}
      <nav className="w-full px-6 py-4 bg-[#f8f6f3]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-xl font-bold text-[#2d3748]">
            Shristi Universe
          </span>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[#64748b] hover:text-[#5d87ff] transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="text-[#64748b] hover:text-[#5d87ff] transition-colors"
            >
              About
            </a>
            <button className="bg-[#5d87ff] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#4a6fe0] transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Warm cream background with blue accent */}
      <div className="relative w-full bg-[#f1ede8] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Calendar className="h-4 w-4 text-[#5d87ff]" />
                <span className="text-sm text-[#64748b]">
                  Family Groups & Events
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#2d3748] mb-6 leading-tight text-balance">
                Bring Families, Communities, and Groups Together
              </h1>
              <p className="text-lg text-[#64748b] mb-8 leading-relaxed max-w-xl">
                Organize birthdays, anniversaries, community events, and more
                with seamless planning and real-time coordination.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Birthdays", "Anniversaries", "Community", "Gatherings"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="bg-white/70 backdrop-blur-sm text-[#2d3748] px-4 py-2 rounded-full text-sm border border-[#e2ded9]"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <button className="bg-[#5d87ff] text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-[#4a6fe0] transition-all duration-300 shadow-lg shadow-[#5d87ff]/20 flex items-center gap-2">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-black/5">
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
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-[#f8f6f3] rounded-xl px-4 py-3"
                      >
                        <CheckCircle className="h-5 w-5 text-[#5d87ff]" />
                        <span className="text-[#2d3748]">{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-24 w-24 bg-[#5d87ff]/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 bg-[#5d87ff]/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Section 1: Event Management Features */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#5d87ff]/10 px-4 py-2 rounded-full mb-6">
                <Calendar className="h-4 w-4 text-[#5d87ff]" />
                <span className="text-sm font-medium text-[#5d87ff]">
                  Smart Management
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-6">
                A Smarter Way to Create and Manage Events
              </h2>
              <p className="text-[#64748b] mb-8 leading-relaxed">
                The Events feature in Shristi Universe is built to serve diverse
                needs — from intimate family occasions to large public community
                gatherings.
              </p>
              <ul className="space-y-4">
                {featuresList.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#5d87ff]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-[#5d87ff]" />
                    </div>
                    <span className="text-[#2d3748]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#3d4f6f] rounded-3xl p-8 text-white">
              <div className="flex items-center justify-between mb-8">
                <span className="text-white/60 text-sm">Event Platform</span>
                <span className="font-bold text-xl">SU</span>
              </div>
              <h3 className="text-3xl font-bold mb-2">Events</h3>
              <p className="text-white/60 mb-8">Complete Management Platform</p>
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
              <button className="mt-6 bg-[#5d87ff] text-white px-6 py-3 rounded-full text-sm font-medium w-full hover:bg-[#4a6fe0] transition-colors flex items-center justify-center gap-2">
                Explore Features
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Section 2: Event Categories */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#5d87ff]/10 px-4 py-2 rounded-full mb-4">
                <Target className="h-4 w-4 text-[#5d87ff]" />
                <span className="text-sm font-medium text-[#5d87ff]">
                  Categories
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-4">
                Event Categories Designed for Simplicity
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                Organized sections to help you discover, track, and manage all
                your events in one place
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {eventCategories.map((category, index) => (
                <div
                  key={index}
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
                        <div className="h-1.5 w-1.5 bg-[#5d87ff] rounded-full mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[#f1ede8] rounded-2xl p-6 border border-[#e2ded9]">
              <p className="text-[#64748b] text-sm">
                <strong className="text-[#2d3748]">Note:</strong> Private events
                are only visible to invited members. Public events appear in
                Suggested Events to encourage community engagement.
              </p>
            </div>
          </div>

          {/* Section 3: Public vs Private */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#5d87ff]/10 px-4 py-2 rounded-full mb-6">
                <Shield className="h-4 w-4 text-[#5d87ff]" />
                <span className="text-sm font-medium text-[#5d87ff]">
                  Privacy Control
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-6">
                Public vs Private Events: Full Control Over Privacy
              </h2>
              <p className="text-[#64748b] mb-8 leading-relaxed">
                Shristi Universe understands that not all events are meant for
                everyone. Users can decide the visibility of each event based on
                their requirements.
              </p>

              <div className="space-y-4">
                {privacyTypes.map((type, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-[#e2ded9] hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-10 w-10 rounded-xl bg-[#5d87ff]/10 flex items-center justify-center">
                        <div className="text-[#5d87ff]">{type.icon}</div>
                      </div>
                      <h3 className="text-lg font-bold text-[#2d3748]">
                        {type.title}
                      </h3>
                    </div>
                    <p className="text-[#64748b] mb-4 text-sm">
                      {type.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {type.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-[#f8f6f3] text-[#2d3748] px-3 py-1.5 rounded-full text-xs border border-[#e2ded9]"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#f1ede8] rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-6 mb-4 border border-[#e2ded9]">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="h-5 w-5 text-[#5d87ff]" />
                  <span className="font-medium text-[#2d3748]">
                    Private Event
                  </span>
                </div>
                <div className="h-2 bg-[#e2ded9] rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-[#5d87ff] rounded-full" />
                </div>
                <p className="text-sm text-[#64748b] mt-2">
                  12 of 16 invited guests confirmed
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[#e2ded9]">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-5 w-5 text-[#5d87ff]" />
                  <span className="font-medium text-[#2d3748]">
                    Public Event
                  </span>
                </div>
                <div className="h-2 bg-[#e2ded9] rounded-full overflow-hidden">
                  <div className="h-full w-full bg-[#5d87ff] rounded-full" />
                </div>
                <p className="text-sm text-[#64748b] mt-2">
                  45 community members participating
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Event Types */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-[#3d4f6f] rounded-3xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Star className="h-6 w-6 text-[#fbbf24]" />
                  <span className="text-white/80">More Than Meetings</span>
                </div>
                <h3 className="text-2xl font-bold mb-6">
                  Meaningful Life Events
                </h3>
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
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-[#fbbf24]/10 px-4 py-2 rounded-full mb-6">
                  <Star className="h-4 w-4 text-[#fbbf24]" />
                  <span className="text-sm font-medium text-[#d97706]">
                    Life Events
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-[#2d3748] mb-6">
                  More Than Meetings — Meaningful Life Events
                </h2>
                <p className="text-[#64748b] leading-relaxed">
                  The Events feature is equally powerful for personal and
                  cultural moments. By tracking participant counts, hosts can
                  plan better and ensure smoother execution, also managing
                  financial standards for their events.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Why it stands out */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#5d87ff]/10 px-4 py-2 rounded-full mb-4">
                <Target className="h-4 w-4 text-[#5d87ff]" />
                <span className="text-sm font-medium text-[#5d87ff]">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-4">
                Why Shristi Universe Events Stand Out
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                While many platforms focus only on public events or business
                meetings, Shristi Universe bridges the gap between personal,
                cultural, and community events.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {standoutFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-[#e2ded9] hover:border-[#5d87ff]/30 hover:shadow-lg hover:shadow-[#5d87ff]/5 transition-all duration-300"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#5d87ff]/10 flex items-center justify-center mb-4">
                    <Target className="h-5 w-5 text-[#5d87ff]" />
                  </div>
                  <h3 className="font-bold text-[#2d3748] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#64748b]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: CTA */}
          <div className="mb-12">
            <div className="bg-[#3d4f6f] rounded-3xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 h-64 w-64 bg-[#5d87ff]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 h-48 w-48 bg-[#5d87ff]/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
                  Bring Your Community Together
                </h2>
                <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
                  The Family Groups & Events feature in Shristi Universe
                  transforms the way people connect, plan, and celebrate
                  together. From private family occasions to large public
                  community events.
                </p>
                <button className="bg-[#5d87ff] text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-[#4a6fe0] transition-all duration-300 inline-flex items-center gap-2">
                  Start Planning Your First Event
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#f1ede8] border-t border-[#e2ded9] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[#64748b] text-sm">
            © 2024 Shristi Universe. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[#64748b] hover:text-[#5d87ff] text-sm transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[#64748b] hover:text-[#5d87ff] text-sm transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-[#64748b] hover:text-[#5d87ff] text-sm transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
