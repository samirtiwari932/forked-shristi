import { Metadata } from "next";
import {
  Users,
  Calendar,
  Bell,
  Share2,
  MessageSquare,
  Image,
  Video,
  Eye,
  Heart,
  Target,
  Flag,
} from "lucide-react";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Family Groups & Events - Plan, Manage & Celebrate Family and Community Events | Shristi Universe",
  description:
    "Bring families and communities together effortlessly. Organize birthdays, anniversaries, community events, and more with Shristi Universe’s Family Groups & Events feature.",
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
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Page Header */}
      <div className="w-full bg-linear-to-r from-green-500 to-emerald-500 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Bring Families, Communities, and Groups Together — Effortlessly
        </h1>
        {/* <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          In today’s fast-moving digital world, families and communities are
          more connected than ever, yet organizing meaningful gatherings still
          remains a challenge. Phone calls, scattered messages, and multiple
          social platforms often create confusion instead of clarity. Shristi
          Universe solves this problem by offering a powerful yet simple Family
          Groups & Events feature designed to help families, communities, and
          organizations plan, manage, and participate in events with ease and
          joy.
        </p> */}
        {/* <p className="text-lg max-w-3xl mx-auto mt-4">
          Whether it’s a private family birthday, an anniversary celebration, a
          community Kul Puja, or a group meeting, Shristi Universe provides a
          centralized and reliable event management experience that keeps
          everyone informed and involved.
        </p> */}
      </div>

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Section 1: Event Management Features */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                A Smarter Way to Create and Manage Events
              </h2>
              <p className="text-gray-600 mb-4">
                The Events feature in Shristi Universe is built to serve diverse
                needs — from intimate family occasions to large public community
                gatherings. Events are not limited to family activities alone;
                users can organize events for families, communities, and groups,
                making it a versatile solution for real-life connections.
              </p>
              <p className="text-gray-600 mb-2">Users can:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Create events in minutes</li>
                <li>Choose between public or private events</li>
                <li>Manage participants effortlessly</li>
                <li>Track attendance in real time</li>
                <li>Edit event details anytime</li>
                <li>Transfer event ownership when required</li>
              </ul>
              <p className="text-gray-600 mt-4">
                This flexibility makes Shristi Universe more than just an event
                tool — it becomes a complete family and community event
                management platform.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-linear-to-br from-green-100 to-emerald-100 rounded-2xl h-64 lg:h-80 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">📅</div>
                  <p className="text-gray-700 font-medium">
                    Create and Manage Events
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Event Categories */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Event Categories Designed for Simplicity
            </h2>

            {/* Suggested Events */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                1. Suggested Events
              </h3>
              <p className="text-gray-600 mb-2">
                The Suggested Events section helps users discover events happening
                around them within families, communities, or groups.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Displays upcoming public events</li>
                <li>Shows who is organizing the event</li>
                <li>
                  Provides essential details such as event description, host
                  name, and number of participants
                </li>
                <li>Allows users to view event details before deciding to participate</li>
              </ul>
            </div>

            {/* Going */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                2. Going (Upcoming Events)
              </h3>
              <p className="text-gray-600 mb-2">
                The Going section acts as your personal event calendar. Once you
                confirm participation in an event, it appears here.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Displays all events you plan to attend in the future</li>
                <li>Helps you stay organized and avoid missing important gatherings</li>
                <li>Works as a reminder hub for family, community, and group events</li>
              </ul>
            </div>

            {/* My Events */}
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                3. My Events (Events You Organize)
              </h3>
              <p className="text-gray-600 mb-2">
                The My Events section is a complete control center for event organizers.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>View all events they have created</li>
                <li>Organize events for families, communities, or groups</li>
                <li>Choose private or public visibility based on requirements</li>
                <li>Edit event information such as date, time, location, and description</li>
                <li>Manage participants efficiently</li>
                <li>Transfer event ownership to another trusted member</li>
              </ul>
              <p className="text-gray-600 mt-2">
                Private events are only visible to invited members. Public events
                appear in Suggested Events to encourage community engagement.
              </p>
            </div>
          </div>

          {/* Section 3: Public vs Private */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Public vs Private Events: Full Control Over Privacy
              </h2>
              <p className="text-gray-600 mb-2">
                Shristi Universe understands that not all events are meant for everyone. Users can decide the visibility of each event.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Private Events:</strong> Ideal for birthdays, anniversaries, family meetings, or internal group discussions. Only invited members can view and attend.
                </li>
                <li>
                  <strong>Public Events:</strong> Suitable for community programs, cultural events, Kul Puja, or open group meetings. Visible in Suggested Events section for wider participation.
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-linear-to-br from-blue-100 to-indigo-100 rounded-2xl h-64 lg:h-80 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">🔒</div>
                  <p className="text-gray-700 font-medium">Privacy Control</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: More Than Meetings */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              More Than Meetings — Meaningful Life Events
            </h2>
            <p className="text-gray-600 mb-4">
              The Events feature is equally powerful for personal and cultural moments:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Family birthdays and anniversaries</li>
              <li>Religious and cultural ceremonies</li>
              <li>Community gatherings and festivals</li>
              <li>Organizational or group meetings</li>
              <li>Social and networking events</li>
            </ul>
            <p className="text-gray-600 mt-2">
              By tracking participant counts, hosts can plan better and ensure smoother execution, also managing financial standards.
            </p>
          </div>

          {/* Section 5: Why it stands out */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Shristi Universe Events Stand Out
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>Built specifically for families, communities, and groups</li>
              <li>Simple and intuitive user interface</li>
              <li>Centralized event management system</li>
              <li>Strong privacy controls</li>
              <li>Real-time participant tracking</li>
              <li>Seamless coordination without external tools</li>
            </ul>
            <p className="text-gray-600 mt-2">
              While many platforms focus only on public events or business meetings, Shristi Universe bridges the gap between personal, cultural, and community events.
            </p>
          </div>

          {/* Section 6: Conclusion */}
          <div className="mb-20 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Conclusion</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The Family Groups & Events feature in Shristi Universe transforms
              the way people connect, plan, and celebrate together. From private
              family occasions to large public community events, the platform
              offers a secure, organized, and joyful experience for everyone
              involved. If you are looking for a reliable way to manage family
              events, community programs, or group activities without complexity,
              Shristi Universe provides the perfect digital space to bring people
              together — effortlessly.
            </p>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
