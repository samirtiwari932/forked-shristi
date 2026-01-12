"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

/**
 * Shristi Universe – Terms & Conditions Page (React + Vite, .tsx)
 * Primary colors: #5d87ff (primary) and white
 * TailwindCSS recommended. If Tailwind isn't configured, inline styles still ensure colors render.
 * Leave space for logo at the top (replace the placeholder with your <img /> or Logo component).
 */

export default function TermsAndConditions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
    >
      {/* Top Bar / Header */}
      <header
        className="w-full sticky top-0 z-20 shadow"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="mx-auto max-w-4xl px-4 py-3 flex items-center gap-4">
          {/* Logo placeholder */}
          <Link href="/" title="Go to Home">
            <div className="h-10 w-[120px] rounded-xl cursor-pointer flex items-center justify-center">
              <img
                src="/assets/images/shristi_logo.png"
                alt="Shristi Universe"
                className="h-8 object-contain"
              />
            </div>
          </Link>

          <div className="flex-1">
            <h1 className="text-dark font-semibold text-lg leading-tight">
              Shristi Universe — Terms & Conditions
            </h1>
            <p className="text-dark/90 text-xs">
              Effective Date: June 18, 2025
            </p>
          </div>
          {/* Optional CTA buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-3 py-2 rounded-xl text-sm font-medium bg-[#5d87ff] text-white hover:bg-[#5d87ff]/90 transition"
            >
              Print
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 py-6">
        {/* Intro Card */}
        <section className="rounded-2xl shadow border border-slate-200 overflow-hidden mb-6">
          <div className="px-6 py-4" style={{ backgroundColor: "#5d87ff" }}>
            <h2 className="text-white text-base font-semibold">Welcome</h2>
            <p className="text-white/90 text-sm">
              These Terms and Conditions ("Terms") govern your access to and use
              of our website, mobile application, and related services
              (collectively, the "Services"). By using our Services, you agree
              to comply with and be bound by these Terms. If you do not agree,
              please discontinue using the Services.
            </p>
          </div>
          <div className="px-6 py-5 bg-white">
            <ul className="text-sm text-slate-700 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li className="flex items-start gap-2">
                <span
                  className="mt-0.5 h-2 w-2 rounded-full"
                  style={{ backgroundColor: "#5d87ff" }}
                />
                <span>
                  Service name: <strong>Shristi Universe</strong> ("Shristi",
                  "we", "us", "our")
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  className="mt-0.5 h-2 w-2 rounded-full"
                  style={{ backgroundColor: "#5d87ff" }}
                />
                <span>
                  Effective Date: <strong>June 18, 2025</strong>
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="mb-6">
          <div className="rounded-2xl border border-slate-200 bg-white shadow">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-slate-800 font-semibold">
                Table of Contents
              </h3>
              <span
                className="text-xs px-2 py-1 rounded-full text-white"
                style={{ backgroundColor: "#5d87ff" }}
              >
                Quick Nav
              </span>
            </div>
            <nav className="px-6 py-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {[
                "eligibility",
                "account-registration",
                "acceptable-use",
                "ugc-and-safety",
                "content-ownership",
                "donations-expenses-vault",
                "privacy",
                "suspension-termination",
                "account-deletion",
                "disclaimers",
                "limitation-liability",
                "intellectual-property",
                "international-users",
                "changes",
                "governing-law",
                "contact",
              ].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="underline-offset-4 hover:underline text-slate-700"
                  style={{ color: "#5d87ff" }}
                >
                  {titleFromId(id)}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Sections */}
        <ArticleSection id="eligibility" title="1. Eligibility">
          <p>
            You must be at least 13 years old (or the minimum legal age in your
            country) to use our Services. If you are under 18, you confirm that
            you have parental or guardian consent. By using Shristi, you
            represent that you meet these requirements.
          </p>
        </ArticleSection>

        <ArticleSection
          id="account-registration"
          title="2. Account Registration"
        >
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Provide accurate information (e.g., name, email, username) when
              creating an account.
            </li>
            <li>
              You are responsible for safeguarding your credentials and
              activities under your account.
            </li>
            <li>
              We may suspend or terminate accounts for false information,
              misuse, or violations.
            </li>
          </ul>
        </ArticleSection>

        <ArticleSection id="acceptable-use" title="3. Acceptable Use">
          <p className="mb-3">Use Shristi lawfully and respectfully. Do not:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Post or share illegal, abusive, harassing, defamatory, or
              discriminatory content.
            </li>
            <li>Upload malware, attempt to hack, or disrupt Services.</li>
            <li>
              Infringe intellectual property (images, posts, records without
              permission).
            </li>
            <li>
              Misuse family tree, blogs, donations, vault, or messaging for
              spam, fraud, or deception.
            </li>
          </ul>
        </ArticleSection>

        {/* NEW: UGC & Safety */}
        <ArticleSection
          id="ugc-and-safety"
          title="3A. User‑Generated Content & Safety"
        >
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Users may share posts and stories with connected and followed
              users within the app. To maintain a safe environment,
              objectionable content, abusive behavior, or any violation of our
              community guidelines is not tolerated.
            </li>
            <li>
              Users can <strong>report objectionable content</strong> directly
              via the app. All reports are reviewed within{" "}
              <strong>24 hours</strong>, and offending content may be removed.
            </li>
            <li>
              Users may <strong>block</strong> or <strong>unfollow</strong>{" "}
              other users to prevent unwanted interactions.
            </li>
            <li>
              Repeated violations may result in account suspension or permanent
              removal.
            </li>
          </ul>
        </ArticleSection>

        <ArticleSection
          id="content-ownership"
          title="4. Content Ownership & Rights"
        >
          <ul className="list-disc pl-5 space-y-2">
            <li>
              You retain ownership of the content you upload (family tree
              entries, posts, images, vault files).
            </li>
            <li>
              By posting, you grant Shristi a{" "}
              <strong>non-exclusive, worldwide, royalty-free license</strong> to
              use, display, and share your content within the Services as
              intended (e.g., blogs, groups, family tree sharing).
            </li>
            <li>
              You are solely responsible for the accuracy of information you
              provide.
            </li>
          </ul>
        </ArticleSection>

        <ArticleSection
          id="donations-expenses-vault"
          title="5. Donations, Expenses & Vault"
        >
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Financial records are for logging donations/expenses only. No
              transactions are processed.
            </li>
            <li>
              Vault content is encrypted and accessible by you; you are
              responsible for what you store.
            </li>
            <li>
              We are not liable for data loss due to negligence (e.g., weak
              passwords).
            </li>
          </ul>
        </ArticleSection>

        <ArticleSection id="privacy" title="6. Privacy">
          <p>
            Your use of our Services is also governed by our Privacy Policy.
            Please review it to understand how we collect, use, and safeguard
            data. {/* Link your actual route/url here */}
          </p>
        </ArticleSection>

        <ArticleSection
          id="suspension-termination"
          title="7. Suspension & Termination"
        >
          <ul className="list-disc pl-5 space-y-2">
            <li>
              We may suspend or terminate your account without prior notice for
              violations, risk of harm, or legal reasons.
            </li>
            <li>You may request account deactivation at any time.</li>
          </ul>
        </ArticleSection>

        {/* NEW: Account Deletion */}
        <ArticleSection id="account-deletion" title="7A. Account Deletion">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Users have the right to permanently delete their account and all
              associated content.
            </li>
            <li>
              This option is available directly in the app under{" "}
              <strong>Settings → Delete Account</strong>.
            </li>
            <li>
              Once requested, account and content are scheduled for deletion and
              are typically removed from our systems within{" "}
              <strong>30 days</strong>. Limited data may be retained where
              required by law, to resolve disputes, or enforce agreements.
            </li>
            <li>
              Content that others have shared or reshared may remain visible to
              those users unless they also delete it.
            </li>
          </ul>
        </ArticleSection>

        <ArticleSection id="disclaimers" title="8. Disclaimers">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              The Services are provided “as is” and “as available.” No guarantee
              of uninterrupted or error-free access.
            </li>
            <li>
              We are not liable for losses due to downtime, unauthorized access,
              or events beyond our control.
            </li>
            <li>
              User-posted information reflects personal input; we do not
              guarantee its accuracy.
            </li>
          </ul>
        </ArticleSection>

        <ArticleSection
          id="limitation-liability"
          title="9. Limitation of Liability"
        >
          <p>
            To the maximum extent permitted by law, Shristi Universe and its
            affiliates shall not be liable for any indirect, incidental, or
            consequential damages arising from your use of the Services.
          </p>
        </ArticleSection>

        <ArticleSection
          id="intellectual-property"
          title="10. Intellectual Property"
        >
          <ul className="list-disc pl-5 space-y-2">
            <li>
              All rights to Shristi’s branding, logos, software, and features
              remain with Shristi Universe.
            </li>
            <li>
              You may not copy, reproduce, or distribute our Services without
              prior written consent.
            </li>
          </ul>
        </ArticleSection>

        <ArticleSection
          id="international-users"
          title="11. International Users"
        >
          <p>
            If you access our Services outside Nepal, you are responsible for
            compliance with local laws.
          </p>
        </ArticleSection>

        <ArticleSection id="changes" title="12. Changes to Terms">
          <p>
            We may update these Terms periodically. Continued use after updates
            means you accept the new Terms. Significant changes will be notified
            via email or within the platform.
          </p>
        </ArticleSection>

        <ArticleSection id="governing-law" title="13. Governing Law">
          <p>
            These Terms are governed by the laws of Nepal, without regard to
            conflict of law principles.
          </p>
        </ArticleSection>

        <ArticleSection id="contact" title="14. Contact Us">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:info@shristiuniverse.com"
                className="underline"
                style={{ color: "#5d87ff" }}
              >
                info@shristiuniverse.com
              </a>
            </li>
            <li>Address: Not publicly disclosed at this time</li>
          </ul>
        </ArticleSection>

        {/* Footer note */}
        <footer className="mt-10 mb-16 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Shristi Universe. All rights reserved.
        </footer>
      </main>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg hover:bg-slate-100 bg-white"
          title="Back to top"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" style={{ color: "#5d87ff" }} />
        </button>
      )}
    </div>
  );
}

function titleFromId(id: string): string {
  const map: Record<string, string> = {
    eligibility: "1. Eligibility",
    "account-registration": "2. Account Registration",
    "acceptable-use": "3. Acceptable Use",
    "ugc-and-safety": "3A. User‑Generated Content & Safety",
    "content-ownership": "4. Content Ownership & Rights",
    "donations-expenses-vault": "5. Donations, Expenses & Vault",
    privacy: "6. Privacy",
    "suspension-termination": "7. Suspension & Termination",
    "account-deletion": "7A. Account Deletion",
    disclaimers: "8. Disclaimers",
    "limitation-liability": "9. Limitation of Liability",
    "intellectual-property": "10. Intellectual Property",
    "international-users": "11. International Users",
    changes: "12. Changes to Terms",
    "governing-law": "13. Governing Law",
    contact: "14. Contact Us",
  };
  return map[id] ?? id;
}

function ArticleSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-6 scroll-mt-24">
      <div className="rounded-2xl border border-slate-200 bg-white shadow">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-slate-800 font-semibold">{title}</h3>
        </div>
        <div className="px-6 py-5 text-sm text-slate-700 leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}
