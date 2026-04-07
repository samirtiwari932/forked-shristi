"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is Srishti Universe?",
    answer:
      "Srishti Universe is a family tree and community management platform that allows users to build family hierarchies, document ancestry, organize events, and manage communities digitally.",
  },
  {
    question: "Is Srishti Universe a family tree app?",
    answer:
      "Yes! While it specializes in family tree creation, it also supports community and group management, making it a complete platform for families and organizations.",
  },
  {
    question: "Can communities use Srishti Universe?",
    answer:
      "Absolutely. Communities, cultural groups, social organizations, and religious communities can all organize members, track events, and manage contributions easily within Srishti Universe.",
  },
  {
    question: "Is Srishti Universe free?",
    answer:
      "Srishti Universe offers a free plan to get started, allowing users to create family trees, manage events, and explore basic features. Advanced features may require a subscription.",
  },
  {
    question: "How do I create a family hierarchy?",
    answer:
      "Creating a family hierarchy is simple. Just sign up, add family members, define relationships, and start building your structured family tree. You can also document stories, photos, and events for each member.",
  },
];

const FAQItem = ({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div
      className={`group border rounded-2xl transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-[#5d87ff] shadow-md shadow-[#5d87ff]/10 bg-white"
          : "border-gray-200 bg-white hover:border-[#5d87ff]/40 hover:shadow-sm"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5d87ff] focus-visible:ring-offset-2 rounded-2xl"
        aria-expanded={isOpen}
      >
        {/* Q badge + question */}
        <div className="flex items-start gap-4">
          <span
            className={`shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-colors duration-300 ${
              isOpen
                ? "bg-[#5d87ff] text-white"
                : "bg-[#5d87ff]/10 text-[#5d87ff] group-hover:bg-[#5d87ff]/20"
            }`}
          >
            Q{index + 1}
          </span>
          <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-snug pt-0.5">
            {item.question}
          </h3>
        </div>

        {/* Chevron */}
        <span
          className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "border-[#5d87ff] bg-[#5d87ff]/5 rotate-180"
              : "border-gray-200 bg-gray-50 group-hover:border-[#5d87ff]/40"
          }`}
        >
          <svg
            className={`w-4 h-4 transition-colors duration-300 ${isOpen ? "text-[#5d87ff]" : "text-gray-500"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>

      {/* Answer panel */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5 pl-[4.5rem]">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-4 md:py-10 bg-gradient-to-b from-blue-50/60 to-white">
      <div className="container mx-auto px-4 md:px-12 lg:px-24 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#5d87ff]/10 border border-[#5d87ff]/20 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#5d87ff] animate-pulse" />
            <span className="text-xs font-semibold text-[#5d87ff] tracking-wide uppercase">
              Got Questions?
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-3">
            Frequently Asked <span className="text-[#5d87ff]">Questions</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-lg max-w-xl mx-auto">
            Everything You Need to Know About Srishti Universe
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              item={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-14 rounded-2xl bg-gradient-to-r from-[#5d87ff] to-indigo-600 p-6 md:p-8 text-center shadow-lg shadow-[#5d87ff]/20">
          <p className="text-white/90 text-sm md:text-base mb-4 font-medium">
            Still have questions? We'd love to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-[#5d87ff] font-bold px-6 py-3 rounded-xl text-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Contact Us
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
