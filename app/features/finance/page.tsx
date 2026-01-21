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
// import Footer from "@/components/Footer";

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
        "Generate treasury reports"
      ]
    },
    {
      icon: <Gift className="h-6 w-6" />,
      title: "Puja & Ritual Funds",
      description: "Dedicated management for religious and ceremonial funds",
      features: [
        "Separate accounts for each puja/ritual",
        "Track donations and expenses",
        "Set fundraising goals",
        "Maintain religious event budgets"
      ]
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Donation Management",
      description: "Organize and track charitable contributions",
      features: [
        "Record individual and collective donations",
        "Track donation history",
        "Generate tax-friendly reports",
        "Set recurring donation schedules"
      ]
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "Expense Tracking",
      description: "Monitor all family group expenditures",
      features: [
        "Categorize expenses (events, maintenance, etc.)",
        "Split bills among members",
        "Set monthly/yearly budgets",
        "Analyze spending patterns"
      ]
    }
  ];

  const treasuryFeatures = [
    {
      title: "Real-Time Balance",
      description: "Always know your family treasury's current status"
    },
    {
      title: "Multi-Member Access",
      description: "Designated family members can view and manage funds"
    },
    {
      title: "Transaction History",
      description: "Complete audit trail of all financial activities"
    },
    {
      title: "Secure Backups",
      description: "Automatic cloud backup of all financial records"
    }
  ];

  const donationTypes = [
    {
      name: "Puja Donations",
      description: "Contributions for religious ceremonies and rituals",
      icon: "🕉️"
    },
    {
      name: "Family Events",
      description: "Funds collected for weddings, birthdays, anniversaries",
      icon: "🎉"
    },
    {
      name: "Community Service",
      description: "Contributions for social welfare and community projects",
      icon: "🤝"
    },
    {
      name: "Educational Funds",
      description: "Scholarships and educational support for family members",
      icon: "📚"
    }
  ];

  const securityFeatures = [
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Role-Based Access",
      description: "Control who can view, contribute, or manage funds"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "End-to-End Encryption",
      description: "Bank-level security for all financial data"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Transparency Reports",
      description: "Regular financial reports for all stakeholders"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Export Capabilities",
      description: "Download financial data in multiple formats"
    }
  ];

  const benefits = [
    "Eliminate cash handling and manual record-keeping",
    "Reduce financial misunderstandings within families",
    "Plan better for family events and rituals",
    "Maintain cultural traditions with modern efficiency",
    "Build collective family wealth systematically",
    "Ensure financial legacy preservation"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Page Header */}
      <div className="w-full bg-gradient-to-r from-green-600 to-emerald-500 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Family Finance Management – Track Treasury, Puja Funds & Donations
        </h1>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
          Preserve family wealth, manage collective funds, and handle religious contributions 
          with complete transparency and security.
        </p>
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Section 1: Introduction */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <DollarSign className="h-8 w-8 text-green-600" />
                Smart Family Finance Management
              </h2>
              <p className="text-gray-600 mb-4">
                Managing family finances, especially across generations and branches, 
                can be challenging. Cash transactions, manual records, and scattered 
                information often lead to confusion and mismanagement. Shristi Universe 
                solves this with a comprehensive Finance Management system designed 
                specifically for family groups.
              </p>
              <p className="text-gray-600 mb-4">
                Whether it's maintaining the family tree treasury, managing puja funds, 
                tracking donations, or handling collective savings, our platform provides 
                a secure, transparent, and organized solution that keeps every member 
                informed and every rupee accounted for.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 mt-6">
                <p className="text-gray-800 font-medium">
                  Transform how your family manages money – from traditional cash boxes 
                  to digital transparency, while preserving cultural values and financial wisdom.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl h-64 lg:h-80 flex items-center justify-center">
                <div className="text-center p-6">
                  <DollarSign className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium text-xl">
                    Family Finance Hub
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Key Features */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Complete Financial Management Suite
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Four powerful modules to handle every aspect of family group finances
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {financeFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <div className="text-green-600">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Family Tree Treasury */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Family Tree Treasury Management
              </h2>
              <p className="text-gray-600 mb-4">
                The heart of family finance – a centralized treasury that connects 
                all family branches and generations. No more scattered savings or 
                forgotten funds.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {treasuryFeatures.map((feature, index) => (
                  <div key={index} className="bg-white rounded-lg shadow p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-2">How it works:</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Each family member can contribute to the collective treasury</li>
                  <li>Approved members can make withdrawals for authorized expenses</li>
                  <li>Automatic notifications for all transactions</li>
                  <li>Monthly financial statements for transparency</li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl h-64 lg:h-80 flex items-center justify-center">
                <div className="text-center p-6">
                  <Building className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium text-xl">
                    Family Treasury Hub
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3.5: Financial Data Tables */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Financial Overview & Transaction History
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
              View summarized financial data in easy-to-read tables for transparency and quick insights.
            </p>

            {/* Treasury Balance Summary Table */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Family Tree Treasury Summary</h3>
              <table className="w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Total Balance</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Last Updated</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Collective Savings</td>
                    <td className="border border-gray-300 px-4 py-2">₹2,50,000</td>
                    <td className="border border-gray-300 px-4 py-2">Jan 21, 2026</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Puja Funds</td>
                    <td className="border border-gray-300 px-4 py-2">₹75,000</td>
                    <td className="border border-gray-300 px-4 py-2">Jan 20, 2026</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Donations</td>
                    <td className="border border-gray-300 px-4 py-2">₹50,000</td>
                    <td className="border border-gray-300 px-4 py-2">Jan 19, 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Transaction History Table */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Transactions</h3>
              <table className="w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Jan 21, 2026</td>
                    <td className="border border-gray-300 px-4 py-2">Monthly Contribution - Rajesh</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">+₹5,000</td>
                    <td className="border border-gray-300 px-4 py-2">Credit</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Jan 20, 2026</td>
                    <td className="border border-gray-300 px-4 py-2">Puja Expenses - Ganesh Chaturthi</td>
                    <td className="border border-gray-300 px-4 py-2 text-red-600">-₹2,500</td>
                    <td className="border border-gray-300 px-4 py-2">Debit</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Jan 19, 2026</td>
                    <td className="border border-gray-300 px-4 py-2">Donation - Community Project</td>
                    <td className="border border-gray-300 px-4 py-2 text-green-600">+₹1,000</td>
                    <td className="border border-gray-300 px-4 py-2">Credit</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Jan 18, 2026</td>
                    <td className="border border-gray-300 px-4 py-2">Family Event - Birthday</td>
                    <td className="border border-gray-300 px-4 py-2 text-red-600">-₹3,000</td>
                    <td className="border border-gray-300 px-4 py-2">Debit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: Puja Funds & Donations */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Puja Funds & Donation Management
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Specialized modules for religious contributions and charitable giving
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {donationTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="text-3xl mb-4">{type.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{type.name}</h3>
                  <p className="text-gray-600 text-sm">{type.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <BarChart className="h-6 w-6 text-purple-600" />
                Advanced Tracking Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">For Puja Funds:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span>Separate accounts for each deity/temple</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span>Ritual expense tracking (flowers, prasad, priest fees)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span>Annual puja budget planning</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">For Donations:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span>Recurring donation schedules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span>Tax deduction tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span>Receipt generation and storage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Security & Privacy */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Bank-Level Security & Privacy
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Your family's financial data is protected with enterprise-grade security
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="inline-flex p-3 bg-gray-100 rounded-lg mb-4">
                    <div className="text-gray-700">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Benefits of Digital Family Finance Management
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Preserving Tradition with Modern Technology
              </h3>
              <p className="text-gray-600">
                Shristi Universe bridges the gap between traditional family values and 
                modern financial management. While we digitize the process, we respect 
                and preserve the cultural significance of family savings, puja funds, 
                and collective giving. Our platform is designed to enhance, not replace, 
                the wisdom passed down through generations.
              </p>
            </div>
          </div>

          {/* Section 7: Conclusion CTA */}
          <div className="mb-20 text-center">
            <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl p-8 md:p-12 text-white shadow-xl">
              <h2 className="text-3xl font-bold mb-6">Secure Your Family's Financial Legacy</h2>
              <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
                From managing daily expenses to preserving funds for future generations, 
                Shristi Universe provides the perfect platform for modern family finance 
                management. Join thousands of families who have transformed their 
                financial management while strengthening family bonds.
              </p>
              <div className="mb-8">
                <p className="text-lg font-semibold max-w-3xl mx-auto">
                  Experience the peace of mind that comes with transparent, secure, 
                  and organized family finance management.
                </p>
              </div>
              <button className="bg-white text-green-600 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto">
                Start Managing Family Finances
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