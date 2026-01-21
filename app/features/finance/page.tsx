import { Metadata } from "next";
import {
  DollarSign,
  PieChart,
  Users,
  Shield,
  TrendingUp,
  CreditCard,
  Building,
  Calendar,
  Lock,
  Globe,
  Target,
  CheckCircle,
  Download,
  Upload,
  Eye,
  Clock,
  ArrowRight,
  Star,
  BarChart,
  Wallet,
  Gift,
  Heart,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "Family Finance Management - Track Treasury, Puja Funds & Donations | Shristi Universe",
  description:
    "Manage family group finances, track treasury, handle puja funds, donations, and collective savings securely with Shristi Universe's Finance Management feature.",
  keywords: [
    "family finance",
    "treasury management",
    "puja funds",
    "donations",
    "family savings",
    "collective funds",
    "financial transparency",
  ],
  authors: [{ name: "Shristi Universe" }],
  creator: "Shristi Universe",
  publisher: "Shristi Universe",
  openGraph: {
    title:
      "Family Finance Management - Track Treasury, Puja Funds & Donations | Shristi Universe",
    description:
      "Securely manage family group finances, puja funds, donations, and collective savings with complete transparency.",
    url: "/features/finance",
    siteName: "Shristi Universe",
    type: "website",
  },
};

export default function FinancePage() {
  const financeFeatures = [
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Family Tree Treasury",
      description: "Centralized fund management for entire family tree",
      features: [
        "Track collective family savings",
        "Manage shared expenses transparently",
        "Monitor contributions from all family members",
        "Generate treasury reports",
      ],
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Puja & Ritual Funds",
      description: "Dedicated management for religious and ceremonial funds",
      features: [
        "Separate accounts for each puja/ritual",
        "Track donations and expenses",
        "Set fundraising goals",
        "Maintain religious event budgets",
      ],
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Donation Management",
      description: "Organize and track charitable contributions",
      features: [
        "Record individual and collective donations",
        "Track donation history",
        "Generate tax-friendly reports",
        "Set recurring donation schedules",
      ],
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "Expense Tracking",
      description: "Monitor all family group expenditures",
      features: [
        "Categorize expenses (events, maintenance, etc.)",
        "Split bills among members",
        "Set monthly/yearly budgets",
        "Analyze spending patterns",
      ],
    },
  ];

  const treasuryFeatures = [
    {
      title: "Real-Time Balance",
      description: "Always know your family treasury's current status",
    },
    {
      title: "Multi-Member Access",
      description: "Designated family members can view and manage funds",
    },
    {
      title: "Transaction History",
      description: "Complete audit trail of all financial activities",
    },
    {
      title: "Secure Backups",
      description: "Automatic cloud backup of all financial records",
    },
  ];

  const donationTypes = [
    {
      name: "Puja Donations",
      description: "Contributions for religious ceremonies and rituals",
    },
    {
      name: "Family Events",
      description: "Funds collected for weddings, birthdays, anniversaries",
    },
    {
      name: "Community Service",
      description: "Contributions for social welfare and community projects",
    },
    {
      name: "Educational Funds",
      description: "Scholarships and educational support for family members",
    },
  ];

  const securityFeatures = [
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Role-Based Access",
      description: "Control who can view, contribute, or manage funds",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "End-to-End Encryption",
      description: "Bank-level security for all financial data",
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Transparency Reports",
      description: "Regular financial reports for all stakeholders",
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Export Capabilities",
      description: "Download financial data in multiple formats",
    },
  ];

  const benefits = [
    "Eliminate cash handling and manual record-keeping",
    "Reduce financial misunderstandings within families",
    "Plan better for family events and rituals",
    "Maintain cultural traditions with modern efficiency",
    "Build collective family wealth systematically",
    "Ensure financial legacy preservation",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f6f3]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full bg-[#f1ede8] py-20 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#5d87ff]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-20 w-48 h-48 bg-[#5d87ff]/5 rounded-full blur-2xl" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-6">
                <DollarSign className="h-4 w-4" />
                Finance Management
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#2d3748] mb-6 leading-tight text-balance">
                Family Finance Management
              </h1>
              <p className="text-lg text-[#64748b] leading-relaxed mb-8">
                Preserve family wealth, manage collective funds, and handle
                religious contributions with complete transparency and security.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white border border-[#e2ded9] rounded-full text-sm text-[#2d3748]">
                  Treasury
                </span>
                <span className="px-4 py-2 bg-[#5d87ff] text-white rounded-full text-sm">
                  Puja Funds
                </span>
                <span className="px-4 py-2 bg-white border border-[#e2ded9] rounded-full text-sm text-[#2d3748]">
                  Donations
                </span>
                <span className="px-4 py-2 bg-white border border-[#e2ded9] rounded-full text-sm text-[#2d3748]">
                  Savings
                </span>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e2ded9]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-[#2d3748]">
                    Treasury Overview
                  </h3>
                  <span className="px-3 py-1 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-xs font-medium">
                    Live
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#f8f6f3] rounded-2xl p-4">
                    <p className="text-sm text-[#64748b] mb-1">Total Balance</p>
                    <p className="text-2xl font-bold text-[#2d3748]">
                      ₹3,75,000
                    </p>
                  </div>
                  <div className="bg-[#f8f6f3] rounded-2xl p-4">
                    <p className="text-sm text-[#64748b] mb-1">This Month</p>
                    <p className="text-2xl font-bold text-[#5d87ff]">+₹25,000</p>
                  </div>
                  <div className="bg-[#f8f6f3] rounded-2xl p-4">
                    <p className="text-sm text-[#64748b] mb-1">Puja Funds</p>
                    <p className="text-2xl font-bold text-[#2d3748]">₹75,000</p>
                  </div>
                  <div className="bg-[#f8f6f3] rounded-2xl p-4">
                    <p className="text-sm text-[#64748b] mb-1">Donations</p>
                    <p className="text-2xl font-bold text-[#2d3748]">₹50,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-20">
          {/* Section 1: Introduction */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
            <div className="lg:w-1/2">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-6">
                <TrendingUp className="h-4 w-4" />
                Smart Management
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-6">
                Smart Family Finance Management
              </h2>
              <p className="text-[#64748b] mb-4 leading-relaxed">
                Managing family finances, especially across generations and
                branches, can be challenging. Cash transactions, manual records,
                and scattered information often lead to confusion and
                mismanagement.
              </p>
              <p className="text-[#64748b] mb-6 leading-relaxed">
                Whether it's maintaining the family tree treasury, managing puja
                funds, tracking donations, or handling collective savings, our
                platform provides a secure, transparent, and organized solution.
              </p>
              <div className="bg-[#3d4f6f] p-6 rounded-2xl">
                <p className="text-white font-medium leading-relaxed">
                  Transform how your family manages money – from traditional
                  cash boxes to digital transparency, while preserving cultural
                  values.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-[#f1ede8] rounded-3xl p-8 border border-[#e2ded9]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#5d87ff] rounded-2xl flex items-center justify-center">
                    <DollarSign className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2d3748]">
                      Family Finance Hub
                    </h3>
                    <p className="text-[#64748b]">All-in-one platform</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "Centralized fund tracking",
                    "Real-time balance updates",
                    "Automated notifications",
                    "Detailed reports",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-white rounded-xl px-4 py-3"
                    >
                      <CheckCircle className="h-5 w-5 text-[#5d87ff]" />
                      <span className="text-[#2d3748]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Key Features */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-4">
                <Star className="h-4 w-4" />
                Key Features
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-4">
                Complete Financial Management Suite
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                Four powerful modules to handle every aspect of family group
                finances
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {financeFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl border border-[#e2ded9] p-6 hover:shadow-lg hover:border-[#5d87ff]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 bg-[#5d87ff]/10 rounded-2xl">
                      <div className="text-[#5d87ff]">{feature.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2d3748]">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[#64748b]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#5d87ff] flex-shrink-0 mt-0.5" />
                        <span className="text-[#64748b]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Family Tree Treasury */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
            <div className="lg:w-1/2">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-6">
                <Building className="h-4 w-4" />
                Treasury
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-6">
                Family Tree Treasury Management
              </h2>
              <p className="text-[#64748b] mb-6 leading-relaxed">
                The heart of family finance – a centralized treasury that
                connects all family branches and generations. No more scattered
                savings or forgotten funds.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {treasuryFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-[#e2ded9] p-5"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-2 w-2 bg-[#5d87ff] rounded-full" />
                      <h3 className="font-semibold text-[#2d3748]">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-[#64748b] text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-[#f1ede8] p-6 rounded-2xl border border-[#e2ded9]">
                <h4 className="font-bold text-[#2d3748] mb-3">How it works:</h4>
                <ul className="space-y-2">
                  {[
                    "Each family member can contribute to the collective treasury",
                    "Approved members can make withdrawals for authorized expenses",
                    "Automatic notifications for all transactions",
                    "Monthly financial statements for transparency",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-[#64748b]"
                    >
                      <ArrowRight className="h-4 w-4 text-[#5d87ff] mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-[#3d4f6f] rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Building className="h-8 w-8 text-white" />
                  <h3 className="text-xl font-bold text-white">
                    Family Treasury Hub
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/70">Savings</span>
                      <span className="text-white font-bold">₹2,50,000</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-[#5d87ff] h-2 rounded-full"
                        style={{ width: "67%" }}
                      />
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/70">Puja Funds</span>
                      <span className="text-white font-bold">₹75,000</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-[#5d87ff] h-2 rounded-full"
                        style={{ width: "20%" }}
                      />
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/70">Donations</span>
                      <span className="text-white font-bold">₹50,000</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-[#5d87ff] h-2 rounded-full"
                        style={{ width: "13%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3.5: Financial Data Tables */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-4">
                <BarChart className="h-4 w-4" />
                Financial Overview
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-4">
                Financial Overview & Transaction History
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                View summarized financial data in easy-to-read tables for
                transparency and quick insights.
              </p>
            </div>

            {/* Treasury Balance Summary Table */}
            <div className="bg-white rounded-3xl border border-[#e2ded9] p-6 mb-6 overflow-hidden">
              <h3 className="text-xl font-bold text-[#2d3748] mb-6">
                Family Tree Treasury Summary
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#f1ede8]">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#2d3748] rounded-l-xl">
                        Category
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#2d3748]">
                        Total Balance
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#2d3748] rounded-r-xl">
                        Last Updated
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e2ded9]">
                    <tr className="hover:bg-[#f8f6f3] transition-colors">
                      <td className="px-6 py-4 text-[#2d3748]">
                        Collective Savings
                      </td>
                      <td className="px-6 py-4 text-[#2d3748] font-semibold">
                        ₹2,50,000
                      </td>
                      <td className="px-6 py-4 text-[#64748b]">Jan 21, 2026</td>
                    </tr>
                    <tr className="hover:bg-[#f8f6f3] transition-colors">
                      <td className="px-6 py-4 text-[#2d3748]">Puja Funds</td>
                      <td className="px-6 py-4 text-[#2d3748] font-semibold">
                        ₹75,000
                      </td>
                      <td className="px-6 py-4 text-[#64748b]">Jan 20, 2026</td>
                    </tr>
                    <tr className="hover:bg-[#f8f6f3] transition-colors">
                      <td className="px-6 py-4 text-[#2d3748]">Donations</td>
                      <td className="px-6 py-4 text-[#2d3748] font-semibold">
                        ₹50,000
                      </td>
                      <td className="px-6 py-4 text-[#64748b]">Jan 19, 2026</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Transaction History Table */}
            <div className="bg-white rounded-3xl border border-[#e2ded9] p-6 overflow-hidden">
              <h3 className="text-xl font-bold text-[#2d3748] mb-6">
                Recent Transactions
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#f1ede8]">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#2d3748] rounded-l-xl">
                        Date
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#2d3748]">
                        Description
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#2d3748]">
                        Amount
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[#2d3748] rounded-r-xl">
                        Type
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e2ded9]">
                    <tr className="hover:bg-[#f8f6f3] transition-colors">
                      <td className="px-6 py-4 text-[#64748b]">Jan 21, 2026</td>
                      <td className="px-6 py-4 text-[#2d3748]">
                        Monthly Contribution - Rajesh
                      </td>
                      <td className="px-6 py-4 text-[#22c55e] font-semibold">
                        +₹5,000
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-[#22c55e]/10 text-[#22c55e] rounded-full text-sm">
                          Credit
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f8f6f3] transition-colors">
                      <td className="px-6 py-4 text-[#64748b]">Jan 20, 2026</td>
                      <td className="px-6 py-4 text-[#2d3748]">
                        Puja Expenses - Ganesh Chaturthi
                      </td>
                      <td className="px-6 py-4 text-[#ef4444] font-semibold">
                        -₹2,500
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-[#ef4444]/10 text-[#ef4444] rounded-full text-sm">
                          Debit
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f8f6f3] transition-colors">
                      <td className="px-6 py-4 text-[#64748b]">Jan 19, 2026</td>
                      <td className="px-6 py-4 text-[#2d3748]">
                        Donation - Community Project
                      </td>
                      <td className="px-6 py-4 text-[#22c55e] font-semibold">
                        +₹1,000
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-[#22c55e]/10 text-[#22c55e] rounded-full text-sm">
                          Credit
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f8f6f3] transition-colors">
                      <td className="px-6 py-4 text-[#64748b]">Jan 18, 2026</td>
                      <td className="px-6 py-4 text-[#2d3748]">
                        Family Event - Birthday
                      </td>
                      <td className="px-6 py-4 text-[#ef4444] font-semibold">
                        -₹3,000
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-[#ef4444]/10 text-[#ef4444] rounded-full text-sm">
                          Debit
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Section 4: Puja Funds & Donations */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-4">
                <Gift className="h-4 w-4" />
                Specialized Modules
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-4">
                Puja Funds & Donation Management
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                Specialized modules for religious contributions and charitable
                giving
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {donationTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#e2ded9] p-6 text-center hover:shadow-lg hover:border-[#5d87ff]/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#5d87ff]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-[#5d87ff]" />
                  </div>
                  <h3 className="font-bold text-[#2d3748] mb-2">{type.name}</h3>
                  <p className="text-[#64748b] text-sm">{type.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl border border-[#e2ded9] p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#5d87ff]/10 rounded-2xl">
                  <BarChart className="h-6 w-6 text-[#5d87ff]" />
                </div>
                <h3 className="text-xl font-bold text-[#2d3748]">
                  Advanced Tracking Features
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-[#2d3748] mb-4">
                    For Puja Funds:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Separate accounts for each deity/temple",
                      "Ritual expense tracking (flowers, prasad, priest fees)",
                      "Annual puja budget planning",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#5d87ff] mt-0.5" />
                        <span className="text-[#64748b]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#2d3748] mb-4">
                    For Donations:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Recurring donation schedules",
                      "Tax deduction tracking",
                      "Receipt generation and storage",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#5d87ff] mt-0.5" />
                        <span className="text-[#64748b]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Security & Privacy */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-4">
                <Shield className="h-4 w-4" />
                Security
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-4">
                Bank-Level Security & Privacy
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                Your financial data is protected with enterprise-grade security
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#3d4f6f] rounded-2xl p-6 text-center"
                >
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Benefits */}
          <div className="bg-[#f1ede8] rounded-3xl p-8 lg:p-12 border border-[#e2ded9]">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-6">
                  <Target className="h-4 w-4" />
                  Benefits
                </span>
                <h2 className="text-3xl font-bold text-[#2d3748] mb-6">
                  Why Choose Our Finance Management?
                </h2>
                <p className="text-[#64748b] mb-8 leading-relaxed">
                  Experience the advantages of modern financial management while
                  preserving your family's traditions and values.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white rounded-xl px-4 py-3"
                    >
                      <CheckCircle className="h-5 w-5 text-[#5d87ff] flex-shrink-0" />
                      <span className="text-[#2d3748]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white rounded-3xl p-8 border border-[#e2ded9]">
                  <h3 className="text-xl font-bold text-[#2d3748] mb-6">
                    Ready to Get Started?
                  </h3>
                  <p className="text-[#64748b] mb-6 leading-relaxed">
                    Join thousands of families who have transformed their
                    financial management with our platform.
                  </p>
                  <div className="space-y-4">
                    <button className="w-full bg-[#5d87ff] text-white font-semibold py-4 px-6 rounded-xl hover:bg-[#4a6fd9] transition-colors flex items-center justify-center gap-2">
                      Start Managing Finances
                      <ArrowRight className="h-5 w-5" />
                    </button>
                    <button className="w-full bg-[#f1ede8] text-[#2d3748] font-semibold py-4 px-6 rounded-xl hover:bg-[#e2ded9] transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2d3748] py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/70">
            &copy; 2026 Shristi Universe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
