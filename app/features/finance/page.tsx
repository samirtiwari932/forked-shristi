"use client";

import { useState, useEffect } from "react";
import {
  DollarSign,
  PieChart,
  Users,
  Shield,
  Building,
  Lock,
  Target,
  CheckCircle,
  Download,
  Eye,
  ArrowRight,
  Star,
  BarChart,
  Wallet,
  Gift,
  Heart,
  FileText,
  Globe,
  Zap,
  UserPlus,
  Calendar,
  Settings,
  Activity,
  CreditCard,
  Layers,
  Clock,
  Menu,
  X,
  ChevronRight,
  TrendingUp,
  Upload,
} from "lucide-react";
import { motion } from "framer-motion";
import LiveFinanceOverview from "@/components/Finance/LiveFinanceOverview";
import Navbar from "@/components/Navbar";

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

// Types
interface FinanceFeature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface ProgramFeature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface RoleFeature {
  id: number;
  role: string;
  icon: React.ReactNode;
  permissions: string[];
  color: string;
}

interface UseCase {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface SecurityFeature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: "credit" | "debit";
}

interface TreasuryBalance {
  id: number;
  category: string;
  totalBalance: number;
  lastUpdated: string;
}

export default function FinancePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [transactions] = useState<Transaction[]>([
    {
      id: 1,
      date: "Jan 21, 2026",
      description: "Monthly Contribution - Rajesh",
      amount: 5000,
      type: "credit",
    },
    {
      id: 2,
      date: "Jan 20, 2026",
      description: "Puja Expenses - Ganesh Chaturthi",
      amount: 2500,
      type: "debit",
    },
    {
      id: 3,
      date: "Jan 19, 2026",
      description: "Donation - Community Project",
      amount: 1000,
      type: "credit",
    },
    {
      id: 4,
      date: "Jan 18, 2026",
      description: "Family Event - Birthday",
      amount: 3000,
      type: "debit",
    },
  ]);

  const [treasuryBalances] = useState<TreasuryBalance[]>([
    {
      id: 1,
      category: "Collective Savings",
      totalBalance: 250000,
      lastUpdated: "Jan 21, 2026",
    },
    {
      id: 2,
      category: "Puja Funds",
      totalBalance: 75000,
      lastUpdated: "Jan 20, 2026",
    },
    {
      id: 3,
      category: "Donations",
      totalBalance: 50000,
      lastUpdated: "Jan 19, 2026",
    },
  ]);

  const financeFeatures: FinanceFeature[] = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
      icon: <Heart className="h-6 w-6" />,
      title: "Donation Management",
      description: "Organize and track charitable contributions",
      features: [
        "Record individual and collective donations",
        "Track donation history with donor details",
        "Generate tax-friendly reports",
        "Set recurring donation schedules",
      ],
    },
    {
      id: 4,
      icon: <PieChart className="h-6 w-6" />,
      title: "Expense Tracking",
      description: "Monitor all family group expenditures",
      features: [
        "Categorize expenses (events, maintenance, etc.)",
        "Real-time balance updates",
        "Set monthly/yearly budgets",
        "Analyze spending patterns",
      ],
    },
  ];

  const programFeatures: ProgramFeature[] = [
    {
      id: 1,
      icon: <FileText className="h-5 w-5" />,
      title: "Program Creation",
      description:
        "Create finance programs with name, description, and QR code for easy fund collection",
    },
    {
      id: 2,
      icon: <Users className="h-5 w-5" />,
      title: "Tree-Based Access",
      description:
        "Link programs to family trees or organizational groups for controlled visibility",
    },
    {
      id: 3,
      icon: <UserPlus className="h-5 w-5" />,
      title: "Donor Management",
      description:
        "Record donor name, amount, address, and contact for complete transparency",
    },
    {
      id: 4,
      icon: <Activity className="h-5 w-5" />,
      title: "Live Balance",
      description:
        "Automatic calculation of total collection, expenses, and net balance",
    },
  ];

  const roleFeatures: RoleFeature[] = [
    {
      id: 1,
      role: "Program Owner",
      icon: <Settings className="h-6 w-6" />,
      permissions: [
        "Add and edit donor entries",
        "Record and manage expenses",
        "Upload QR codes for payments",
        "Transfer program ownership",
        "Full financial record access",
      ],
      color: "bg-[#5d87ff]",
    },
    {
      id: 2,
      role: "Program Members",
      icon: <Eye className="h-6 w-6" />,
      permissions: [
        "View all financial transactions",
        "See total collections and expenses",
        "Access real-time balance updates",
        "Download financial reports",
        "Read-only access (no modifications)",
      ],
      color: "bg-[#3d4f6f]",
    },
  ];

  const useCases: UseCase[] = [
    {
      id: 1,
      icon: <Calendar className="h-6 w-6" />,
      title: "Event Planning",
      description:
        "Manage finances for weddings, festivals, and family gatherings with transparent fund tracking",
    },
    {
      id: 2,
      icon: <Building className="h-6 w-6" />,
      title: "Community Organizations",
      description:
        "Track contributions and expenses for clubs, trusts, and non-profit organizations",
    },
    {
      id: 3,
      icon: <Globe className="h-6 w-6" />,
      title: "Heritage Preservation",
      description:
        "Maintain financial records for cultural programs and legacy-driven initiatives",
    },
    {
      id: 4,
      icon: <Users className="h-6 w-6" />,
      title: "Family Groups",
      description:
        "Manage collective family funds, shared expenses, and joint savings transparently",
    },
  ];

  const securityFeatures: SecurityFeature[] = [
    {
      id: 1,
      icon: <Lock className="h-6 w-6" />,
      title: "Role-Based Access",
      description:
        "Control who can view, contribute, or manage funds with granular permissions",
    },
    {
      id: 2,
      icon: <Shield className="h-6 w-6" />,
      title: "Data Protection",
      description:
        "Bank-level security with encryption for all sensitive financial information",
    },
    {
      id: 3,
      icon: <Eye className="h-6 w-6" />,
      title: "Transparency Reports",
      description:
        "Regular financial reports and audit trails for all stakeholders",
    },
    {
      id: 4,
      icon: <Download className="h-6 w-6" />,
      title: "Export Capabilities",
      description:
        "Download financial data in multiple formats for record-keeping",
    },
  ];

  const benefits = [
    "Eliminate cash handling and manual record-keeping",
    "Reduce financial misunderstandings within families",
    "Plan better for family events and rituals",
    "Maintain cultural traditions with modern efficiency",
    "Build collective family wealth systematically",
    "Ensure financial legacy preservation across generations",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "features", "security"];
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f6f3]">
      {/* Navbar */}
     <Navbar />
     
      {/* Hero Section */}
      <motion.div
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
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-10 right-10 w-72 h-72 bg-[#5d87ff]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-20 w-48 h-48 bg-[#5d87ff]/5 rounded-full blur-2xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div variants={slideInLeft} className="lg:w-1/2">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-6"
              >
                <DollarSign className="h-4 w-4" />
                Finance Management
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl lg:text-5xl font-bold text-[#2d3748] mb-6 leading-tight"
              >
                Transparent Finance Management for Families & Communities
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-lg text-[#64748b] leading-relaxed mb-8"
              >
                Manage donations, track expenses, and plan finances for
                families, community events, and heritage programs with
                transparent and secure software by Shristi Universe.
              </motion.p>

              <motion.div
                variants={staggerContainer}
                className="flex flex-wrap gap-3"
              >
                {[
                  "Donations",
                  "Expense Tracking",
                  "Fund Planning",
                  "Transparency",
                ].map((tag, index) => (
                  <motion.span
                    key={tag}
                    variants={scaleIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-full text-sm ${
                      tag === "Expense Tracking"
                        ? "bg-[#5d87ff] text-white"
                        : "bg-white border border-[#e2ded9] text-[#2d3748]"
                    }`}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={slideInRight} className="lg:w-1/2">
              <LiveFinanceOverview />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
          {/* Centralized Finance System */}
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
                <Layers className="h-4 w-4" />
                Centralized System
              </motion.span>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold text-[#2d3748] mb-6"
              >
                A Centralized Finance System Built for Families and Communities
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-[#64748b] mb-4 leading-relaxed"
              >
                Effective financial management is the backbone of every
                successful family group and community organization. Shristi
                Universe's Finance Management feature brings clarity,
                transparency, and accountability to shared finances.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-[#64748b] mb-6 leading-relaxed"
              >
                Finances in families and communities are deeply connected to
                trust and shared responsibility. Our system allows you to manage
                funds based on family trees, community groups, or organizational
                structures—ensuring financial records align with real-world
                relationships.
              </motion.p>

              <motion.div
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                className="bg-[#3d4f6f] p-6 rounded-2xl"
              >
                <p className="text-white font-medium leading-relaxed">
                  No more scattered notebooks, spreadsheets, or messaging apps.
                  Everything is organized in one secure digital space—accessible
                  only to the right people.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={slideInRight} className="lg:w-1/2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#f1ede8] rounded-3xl p-8 border border-[#e2ded9]"
              >
                <h3 className="text-xl font-bold text-[#2d3748] mb-6">
                  Perfect For:
                </h3>
                <div className="space-y-3">
                  {[
                    "Family groups managing collective funds",
                    "Community organizations and clubs",
                    "Trusts and non-profit organizations",
                    "Cultural and heritage preservation programs",
                    "Event planning committees",
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

          {/* Creating a Finance Program */}
          <motion.div
            id="features"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-4">
                <Zap className="h-4 w-4" />
                Program Creation
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-4">
                Creating a Finance Program
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                Set up dedicated finance programs for different initiatives
                without mixing records
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {programFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
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
                  className="bg-white rounded-2xl border border-[#e2ded9] p-6 hover:border-[#5d87ff]/30 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-[#5d87ff]/10 rounded-xl flex items-center justify-center mb-4"
                  >
                    <div className="text-[#5d87ff]">{feature.icon}</div>
                  </motion.div>
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
              viewport={{ once: true }}
              className="bg-[#f1ede8] rounded-3xl p-8 border border-[#e2ded9]"
            >
              <h3 className="text-xl font-bold text-[#2d3748] mb-6">
                Program Setup Process:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {[
                    {
                      step: 1,
                      title: "Add Program Details",
                      description:
                        "Enter program name and description to identify your initiative",
                    },
                    {
                      step: 2,
                      title: "Upload QR Code",
                      description:
                        "Add QR code image of the account receiving funds for easy digital payments",
                    },
                  ].map((item) => (
                    <motion.div
                      key={item.step}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-8 h-8 bg-[#5d87ff] rounded-lg flex items-center justify-center shrink-0 mt-1"
                      >
                        <span className="text-white font-bold text-sm">
                          {item.step}
                        </span>
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-[#2d3748] mb-1">
                          {item.title}
                        </h4>
                        <p className="text-[#64748b] text-sm">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="space-y-4">
                  {[
                    {
                      step: 3,
                      title: "Select Tree/Group",
                      description:
                        "Choose relevant family tree or organizational group for controlled access",
                    },
                    {
                      step: 4,
                      title: "Privacy Control",
                      description:
                        "Only selected members can view finance details—ensuring privacy",
                    },
                  ].map((item) => (
                    <motion.div
                      key={item.step}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-8 h-8 bg-[#5d87ff] rounded-lg flex items-center justify-center shrink-0 mt-1"
                      >
                        <span className="text-white font-bold text-sm">
                          {item.step}
                        </span>
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-[#2d3748] mb-1">
                          {item.title}
                        </h4>
                        <p className="text-[#64748b] text-sm">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Transparency and Accountability - Role-Based Access */}
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
                Access Control
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-4">
                Transparency and Accountability
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                Role-based access control promotes financial transparency while
                preventing unauthorized changes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {roleFeatures.map((role, index) => (
                <motion.div
                  key={role.id}
                  variants={scaleIn}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-3xl border border-[#e2ded9] p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 ${role.color} rounded-2xl flex items-center justify-center`}
                    >
                      <div className="text-white">{role.icon}</div>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2d3748]">
                        {role.role}
                      </h3>
                      <p className="text-sm text-[#64748b]">
                        {role.id === 1
                          ? "Full control & management"
                          : "View-only access"}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {role.permissions.map((permission, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="h-5 w-5 text-[#5d87ff] shrink-0 mt-0.5" />
                        <span className="text-[#64748b]">{permission}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 bg-[#5d87ff]/5 rounded-2xl p-6 border border-[#5d87ff]/20"
            >
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-[#5d87ff] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#2d3748] mb-2">
                    Building Trust Through Structure
                  </h4>
                  <p className="text-[#64748b]">
                    This structure promotes financial transparency while
                    preventing unauthorized changes—building trust among
                    families, communities, and organizations. Members can view
                    transactions and verify balances, but only authorized owners
                    can make modifications.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Donor Management & Expense Tracking */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-start gap-12 mb-24"
          >
            <motion.div variants={slideInLeft} className="lg:w-1/2">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-6">
                <UserPlus className="h-4 w-4" />
                Donor Management
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-6">
                Donor Management with Real-Time Updates
              </h2>
              <p className="text-[#64748b] mb-6 leading-relaxed">
                Tracking donations accurately is critical for community trust
                and long-term sustainability. Our system allows program owners
                to record every contribution clearly and systematically.
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl border border-[#e2ded9] p-6 mb-6"
              >
                <h4 className="font-semibold text-[#2d3748] mb-4">
                  When Adding a Donor:
                </h4>
                <ul className="space-y-3">
                  {[
                    {
                      label: "Donor Name",
                      desc: "Full name for identification",
                    },
                    {
                      label: "Amount Contributed",
                      desc: "Exact donation amount",
                    },
                    { label: "Address", desc: "Complete contact address" },
                    {
                      label: "Contact Number",
                      desc: "Phone number for communication",
                    },
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-6 h-6 bg-[#5d87ff]/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      >
                        <div className="w-2 h-2 bg-[#5d87ff] rounded-full" />
                      </motion.div>
                      <div>
                        <span className="font-medium text-[#2d3748]">
                          {item.label}
                        </span>
                        <p className="text-sm text-[#64748b]">{item.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#22c55e]/5 rounded-2xl p-5 border border-[#22c55e]/20"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="h-5 w-5 text-[#22c55e]" />
                  <h4 className="font-semibold text-[#2d3748]">
                    Instant Transparency
                  </h4>
                </div>
                <p className="text-[#64748b] text-sm">
                  Each donation is instantly reflected in the program's total
                  collection, visible to all authorized members. This creates a
                  transparent donation tracking system, reducing confusion and
                  disputes.
                </p>
              </motion.div>
            </motion.div>

            <motion.div variants={slideInRight} className="lg:w-1/2">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#ef4444]/10 text-[#ef4444] rounded-full text-sm font-medium mb-6">
                <CreditCard className="h-4 w-4" />
                Expense Tracking
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-6">
                Expense Tracking with Balance Updates
              </h2>
              <p className="text-[#64748b] mb-6 leading-relaxed">
                Managing expenses is just as important as collecting funds. Our
                expense recording is straightforward and transparent,
                automatically updating balances in real-time.
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl border border-[#e2ded9] p-6 mb-6"
              >
                <h4 className="font-semibold text-[#2d3748] mb-4">
                  For Every Expense:
                </h4>
                <ul className="space-y-3">
                  {[
                    {
                      label: "Expense Details",
                      desc: "Clear description of expenditure",
                    },
                    { label: "Amount Spent", desc: "Exact expense amount" },
                    {
                      label: "Relevant Information",
                      desc: "Additional context for clarity",
                    },
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-6 h-6 bg-[#ef4444]/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      >
                        <div className="w-2 h-2 bg-[#ef4444] rounded-full" />
                      </motion.div>
                      <div>
                        <span className="font-medium text-[#2d3748]">
                          {item.label}
                        </span>
                        <p className="text-sm text-[#64748b]">{item.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#5d87ff]/5 rounded-2xl p-5 border border-[#5d87ff]/20"
              >
                <div className="flex items-center gap-2 mb-2">
                  <BarChart className="h-5 w-5 text-[#5d87ff]" />
                  <h4 className="font-semibold text-[#2d3748]">
                    Automatic Calculation
                  </h4>
                </div>
                <p className="text-[#64748b] text-sm">
                  The system automatically deducts expenses from total
                  collection and updates the net balance in real time. All
                  transactions—both income and expenses—are visible to members,
                  ensuring open financial reporting.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Financial Data Tables */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-4">
                <BarChart className="h-4 w-4" />
                Financial Overview
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-4">
                Financial Overview & Transaction History
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                View summarized financial data in easy-to-read tables for
                transparency and quick insights
              </p>
            </motion.div>

            {/* Treasury Balance Summary Table */}
            <motion.div
              variants={scaleIn}
              className="bg-white rounded-3xl border border-[#e2ded9] p-6 mb-6 overflow-hidden"
            >
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
                    {treasuryBalances.map((balance) => (
                      <motion.tr
                        key={balance.id}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ backgroundColor: "#f8f6f3" }}
                        className="transition-colors"
                      >
                        <td className="px-6 py-4 text-[#2d3748]">
                          {balance.category}
                        </td>
                        <td className="px-6 py-4 text-[#2d3748] font-semibold">
                          ₹{balance.totalBalance.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-[#64748b]">
                          {balance.lastUpdated}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Transaction History Table */}
            <motion.div
              variants={scaleIn}
              className="bg-white rounded-3xl border border-[#e2ded9] p-6 overflow-hidden"
            >
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
                    {transactions.map((transaction) => (
                      <motion.tr
                        key={transaction.id}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ backgroundColor: "#f8f6f3" }}
                        className="transition-colors"
                      >
                        <td className="px-6 py-4 text-[#64748b]">
                          {transaction.date}
                        </td>
                        <td className="px-6 py-4 text-[#2d3748]">
                          {transaction.description}
                        </td>
                        <td
                          className={`px-6 py-4 font-semibold ${
                            transaction.type === "credit"
                              ? "text-[#22c55e]"
                              : "text-[#ef4444]"
                          }`}
                        >
                          {transaction.type === "credit" ? "+" : "-"}₹
                          {transaction.amount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              transaction.type === "credit"
                                ? "bg-[#22c55e]/10 text-[#22c55e]"
                                : "bg-[#ef4444]/10 text-[#ef4444]"
                            }`}
                          >
                            {transaction.type === "credit" ? "Credit" : "Debit"}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>

          {/* Use Cases */}
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
                Use Cases
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-4">
                Ideal for Events, Communities & Heritage Programs
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                Our finance feature is tightly connected with various community
                activities and long-term initiatives
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.id}
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
                    className="w-14 h-14 bg-[#5d87ff]/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  >
                    <div className="text-[#5d87ff]">{useCase.icon}</div>
                  </motion.div>
                  <h3 className="font-bold text-[#2d3748] mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-[#64748b] text-sm">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#f1ede8] rounded-3xl p-8 border border-[#e2ded9]"
            >
              <h3 className="text-xl font-bold text-[#2d3748] mb-6">
                Funds Can Be:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Tracked Separately",
                    desc: "Per program without mixing records",
                  },
                  {
                    title: "Allocated for Specific Purposes",
                    desc: "Plan how money will be used",
                  },
                  {
                    title: "Reviewed by Members",
                    desc: "All involved members can review spending",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-[#5d87ff] mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-[#2d3748] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[#64748b]">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-[#64748b] mt-6">
                This makes it easier to evaluate spending and ensure funds are
                aligned with the event's goals—whether it's a family gathering,
                cultural festival, charity drive, or educational program.
              </p>
            </motion.div>
          </motion.div>

          {/* Heritage Preservation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center gap-12 mb-24"
          >
            <motion.div variants={slideInLeft} className="lg:w-1/2">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-6">
                <Globe className="h-4 w-4" />
                Legacy
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-6">
                Supporting Heritage Preservation and Long-Term Initiatives
              </h2>
              <p className="text-[#64748b] mb-6 leading-relaxed">
                For communities focused on heritage preservation, cultural
                programs, or long-term social initiatives, financial
                transparency is essential. Our platform enables organizations to
                maintain clean financial histories and build trust across
                generations.
              </p>

              <div className="space-y-4">
                {[
                  "Maintain clean financial histories",
                  "Build trust across generations",
                  "Preserve records for future reference",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-[#e2ded9]"
                  >
                    <CheckCircle className="h-5 w-5 text-[#5d87ff]" />
                    <span className="text-[#2d3748]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={slideInRight} className="lg:w-1/2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#3d4f6f] rounded-3xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="h-8 w-8 text-white" />
                  <h3 className="text-xl font-bold text-white">
                    Legacy-Driven Structure
                  </h3>
                </div>
                <p className="text-white/80 mb-6">
                  By linking finance data with family trees and organizational
                  hierarchies, the platform reflects real community
                  structures—making it ideal for legacy-driven initiatives.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur rounded-2xl p-5"
                >
                  <p className="text-white text-sm leading-relaxed">
                    "Financial records become part of your family's heritage,
                    preserved digitally for future generations to understand and
                    learn from."
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Security & Privacy */}
          <motion.div
            id="security"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-4">
                <Shield className="h-4 w-4" />
                Security
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-4">
                Secure, Organized, and Future-Ready Finance Management
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                Security and structure are fundamental to Shristi Universe's
                design. Your financial data is protected with enterprise-grade
                security.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
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
                  className="bg-[#3d4f6f] rounded-2xl p-6 text-center hover:bg-[#3d4f6f]/90 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  >
                    <div className="text-white">{feature.icon}</div>
                  </motion.div>
                  <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-[#e2ded9] p-8"
            >
              <h3 className="text-xl font-bold text-[#2d3748] mb-6">
                Financial Data Protection:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Eye className="h-8 w-8 text-[#5d87ff]" />,
                    title: "Authorized Access Only",
                    desc: "Visible only to authorized members",
                  },
                  {
                    icon: <Shield className="h-8 w-8 text-[#5d87ff]" />,
                    title: "Role-Based Permissions",
                    desc: "Protected through granular access control",
                  },
                  {
                    icon: <Users className="h-8 w-8 text-[#5d87ff]" />,
                    title: "Community Structure",
                    desc: "Structured around families and groups",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-[#5d87ff]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-[#2d3748] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#64748b]">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              <p className="text-[#64748b] text-center mt-6">
                This ensures that sensitive financial information remains
                protected while still promoting openness and accountability
                within the community.
              </p>
            </motion.div>
          </motion.div>

          {/* Why Choose Section */}
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
                Why Choose Us
              </span>
              <h2 className="text-3xl font-bold text-[#2d3748] mb-4">
                Why Shristi Universe for Finance Management?
              </h2>
              <p className="text-[#64748b] max-w-2xl mx-auto">
                Not just a finance tool—it is a community-centric ecosystem that
                connects multiple aspects of family and community management
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-linear-to-br from-[#5d87ff]/5 to-[#3d4f6f]/5 rounded-3xl p-8 lg:p-12 border border-[#e2ded9]"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                {[
                  {
                    icon: <DollarSign className="h-6 w-6" />,
                    label: "Finance Management",
                  },
                  {
                    icon: <Users className="h-6 w-6" />,
                    label: "Family Tree Systems",
                  },
                  {
                    icon: <Building className="h-6 w-6" />,
                    label: "Group Collaboration",
                  },
                  {
                    icon: <Calendar className="h-6 w-6" />,
                    label: "Event Planning",
                  },
                  {
                    icon: <Globe className="h-6 w-6" />,
                    label: "Heritage Preservation",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-2xl p-5 text-center border border-[#e2ded9]"
                  >
                    <div className="w-12 h-12 bg-[#5d87ff]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <div className="text-[#5d87ff]">{item.icon}</div>
                    </div>
                    <p className="text-sm font-semibold text-[#2d3748]">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-[#64748b] text-lg">
                By integrating these elements, the system empowers families and
                communities to manage money responsibly, transparently, and
                collaboratively.
              </p>
            </motion.div>
          </motion.div>

          {/* Benefits & CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="bg-[#f1ede8] rounded-3xl p-8 lg:p-12 border border-[#e2ded9]"
          >
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div variants={slideInLeft} className="lg:w-1/2">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d87ff]/10 text-[#5d87ff] rounded-full text-sm font-medium mb-6">
                  <Target className="h-4 w-4" />
                  Benefits
                </span>
                <h2 className="text-3xl font-bold text-[#2d3748] mb-6">
                  Transform Your Financial Management
                </h2>
                <p className="text-[#64748b] mb-8 leading-relaxed">
                  Experience the advantages of modern financial management while
                  preserving your family's traditions and values. From donation
                  tracking to program-based planning, we provide everything you
                  need.
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
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
                    Ready to Get Started?
                  </h3>
                  <p className="text-[#64748b] mb-6 leading-relaxed">
                    Join thousands of families and communities who have
                    transformed their financial management with Shristi
                    Universe. Start building trust, maintaining transparency,
                    and planning for the future—together.
                  </p>
                  <div className="space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-[#5d87ff] text-white font-semibold py-4 px-6 rounded-xl hover:bg-[#4a6fd9] transition-colors flex items-center justify-center gap-2"
                    >
                      Start Managing Finances
                      <ArrowRight className="h-5 w-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-[#f1ede8] text-[#2d3748] font-semibold py-4 px-6 rounded-xl hover:bg-[#e2ded9] transition-colors"
                    >
                      Learn More
                    </motion.button>
                  </div>
                  <p className="text-xs text-[#64748b] text-center mt-6">
                    No credit card required • Free to start • Cancel anytime
                  </p>
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
              &copy; 2026 Shristi Universe. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
