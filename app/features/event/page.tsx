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
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

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
      icon: <Eye className="h-6 w-6" />,
      title: "Suggested Events",
      description: "Discover events happening around you within families, communities, or groups.",
      features: [
        "Displays upcoming public events",
        "Shows who is organizing the event",
        "Provides essential details such as event description, host name, and number of participants",
        "Allows users to view event details before deciding to participate"
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Going (Upcoming Events)",
      description: "Your personal event calendar for all events you plan to attend.",
      features: [
        "Displays all events you plan to attend in the future",
        "Helps you stay organized and avoid missing important gatherings",
        "Works as a reminder hub for family, community, and group events"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "My Events (Events You Organize)",
      description: "Complete control center for event organizers.",
      features: [
        "View all events they have created",
        "Organize events for families, communities, or groups",
        "Choose private or public visibility based on requirements",
        "Edit event information such as date, time, location, and description",
        "Manage participants efficiently",
        "Transfer event ownership to another trusted member"
      ]
    }
  ];

  const privacyTypes = [
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Private Events",
      color: "bg-purple-100 text-purple-600",
      description: "Ideal for birthdays, anniversaries, family meetings, or internal group discussions.",
      features: [
        "Only invited members can view and attend",
        "Complete privacy for personal gatherings",
        "Perfect for intimate family moments"
      ]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Public Events",
      color: "bg-blue-100 text-blue-600",
      description: "Suitable for community programs, cultural events, Kul Puja, or open group meetings.",
      features: [
        "Visible in Suggested Events section",
        "Encourages wider participation",
        "Great for community engagement"
      ]
    }
  ];

  const eventTypes = [
    "Family birthdays and anniversaries",
    "Religious and cultural ceremonies",
    "Community gatherings and festivals",
    "Organizational or group meetings",
    "Social and networking events"
  ];

  const standoutFeatures = [
    "Built specifically for families, communities, and groups",
    "Simple and intuitive user interface",
    "Centralized event management system",
    "Strong privacy controls",
    "Real-time participant tracking",
    "Seamless coordination without external tools"
  ];

  const featuresList = [
    "Create events in minutes",
    "Choose between public or private events",
    "Manage participants effortlessly",
    "Track attendance in real time",
    "Edit event details anytime",
    "Transfer event ownership when required"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />

      {/* Page Header - Enhanced with modern styling */}
      <div className="relative w-full bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 py-20 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Bring Families, Communities, and Groups Together — Effortlessly
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Organize birthdays, anniversaries, community events, and more with seamless planning and real-time coordination.
          </p>
          <div className="mt-8">
            <button className="bg-white text-purple-600 font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg">
              Get Started
              <ArrowRight className="h-5 w-5 inline ml-2" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Section 1: Event Management Features - Improved layout */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 flex items-center gap-4">
                <Calendar className="h-10 w-10 text-purple-600" />
                A Smarter Way to Create and Manage Events
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                The Events feature in Shristi Universe is built to serve diverse needs — from intimate family occasions to large public community gatherings. Events are not limited to family activities alone; users can organize events for families, communities, and groups, making it a versatile solution for real-life connections.
              </p>
              <p className="text-gray-600 mb-6 text-lg">Users can:</p>
              <ul className="space-y-3 mb-8">
                {featuresList.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100 shadow-sm">
                <p className="text-gray-800 font-semibold text-lg">
                  This flexibility makes Shristi Universe more than just an event tool — it becomes a complete family and community event management platform.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl h-80 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center p-8">
                  <Calendar className="h-20 w-20 text-purple-600 mx-auto mb-6" />
                  <p className="text-gray-700 font-semibold text-2xl">
                    Create and Manage Events
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Event Categories - Modern cards with hover */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
              Event Categories Designed for Simplicity
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-16 text-lg">
              Organized sections to help you discover, track, and manage all your events in one place
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {eventCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-purple-100 rounded-xl">
                      <div className="text-purple-600">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">{category.description}</p>
                  <ul className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="h-2 w-2 bg-purple-500 rounded-full mt-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <p className="text-gray-700 text-lg">
                <strong>Note:</strong> Private events are only visible to invited members. Public events appear in Suggested Events to encourage community engagement.
              </p>
            </div>
          </div>

          {/* Section 3: Public vs Private - Enhanced cards */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 flex items-center gap-4">
                <Shield className="h-10 w-10 text-blue-600" />
                Public vs Private Events: Full Control Over Privacy
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Shristi Universe understands that not all events are meant for everyone. Users can decide the visibility of each event.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                {privacyTypes.map((type, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-xl ${type.color}`}>
                        {type.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-6">{type.description}</p>
                    <ul className="space-y-3">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl h-80 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center p-8">
                  <Shield className="h-20 w-20 text-blue-600 mx-auto mb-6" />
                  <p className="text-gray-700 font-semibold text-2xl">Privacy Control</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: More Than Meetings - Modern list */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 flex items-center gap-4">
              <Star className="h-10 w-10 text-yellow-500" />
              More Than Meetings — Meaningful Life Events
            </h2>
            <p className="text-gray-600 mb-12 text-lg">
              The Events feature is equally powerful for personal and cultural moments. By tracking participant counts, hosts can plan better and ensure smoother execution, also managing financial standards.
            </p>
            
            <div className="bg-white rounded-2xl shadow-lg p-12 mb-12 border border-gray-100">
              <ul className="space-y-4">
                {eventTypes.map((type, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="h-3 w-3 bg-purple-600 rounded-full flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 5: Why it stands out - Grid with modern cards */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-gray-800 mb-12">
              Why Shristi Universe Events Stand Out
            </h2>
            <p className="text-gray-600 mb-12 text-lg">
              While many platforms focus only on public events or business meetings, Shristi Universe bridges the gap between personal, cultural, and community events.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {standoutFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                  <Target className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Conclusion CTA - Enhanced */}
          <div className="mb-24 text-center">
            <div className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl">
              <h2 className="text-5xl font-bold mb-8">Bring Your Community Together</h2>
              <p className="text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
                The Family Groups & Events feature in Shristi Universe transforms the way people connect, plan, and celebrate together. From private family occasions to large public community events, the platform offers a secure, organized, and joyful experience for everyone involved.
              </p>
              <div className="mb-12">
                <p className="text-xl font-semibold max-w-3xl mx-auto">
                  If you are looking for a reliable way to manage family events, community programs, or group activities without complexity, Shristi Universe provides the perfect digital space to bring people together — effortlessly.
                </p>
              </div>
              <button className="bg-white text-purple-600 font-bold px-10 py-5 rounded-full text-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-3 mx-auto">
                Start Planning Your First Event
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}