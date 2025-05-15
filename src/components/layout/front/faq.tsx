"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is Innogem?",
    answer:
      "Innogem is a digital platform that connects producers, logistics providers, and buyers to create an efficient and transparent supply chain.",
  },
  {
    question: "Who can use this platform?",
    answer:
      "The platform is designed for producers, logistics service providers, and buyers who want to conduct transactions within an integrated ecosystem.",
  },
  {
    question: "Is Innogem free to use?",
    answer:
      "Some features are available for free, while others may require a subscription to access premium tools.",
  },
  {
    question: "How do I sign up for Innogem?",
    answer:
      "You can sign up by clicking the 'Sign Up' button on the homepage and following the simple registration process.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 pb-20 py-10 text-gray-800 dark:text-gray-100 ">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#263A72]  dark:text-[#3A9C90] mb-4">
          Frequently Asked <span className="text-yellow-500">Questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-innogem-blue dark:border-innogem-green rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold focus:outline-none focus-visible:outline-none focus:ring-0 active:outline-none"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-sm text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
