"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DetailFeatureRight from "@/components/layout/front/detail-feature-right";
import Footer from "@/components/layout/front/footer";
import { Globe2Icon, LightbulbIcon, User2Icon } from "lucide-react";
import Image from "next/image";

export default function AboutUsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const stats = [
    { id: 1, name: "Verified producers onboarded", value: "500+" },
    { id: 2, name: "European buyers connected", value: "100+" },
    { id: 3, name: "Completed shipments", value: "1,200+" },
    { id: 4, name: "Partner satisfaction rate", value: "97%" },
  ];

  const values = [
    {
      name: "Innovation",
      description:
        "We develop intelligent, tech-driven solutions that simplify global trade for businesses of all sizes.",
      icon: <LightbulbIcon className="h-6 w-6" />,
    },
    {
      name: "Trust",
      description:
        "We verify every partner to ensure security, transparency, and long-term business reliability.",
      icon: <User2Icon className="h-6 w-6" />,
    },
    {
      name: "Accessibility",
      description:
        "We empower local producers to scale globally through an intuitive, all-in-one platform.",
      icon: <Globe2Icon className="h-6 w-6" />,
    },
  ];

  return (
    <>
      <div className="bg-white dark:bg-[#0f172a]">
        {/* Hero Section */}
        <div className="relative bg-[#2F327D]">
          <div className="absolute inset-0">
            <Image
              className="w-full h-full object-cover opacity-20"
              src="/images/front/prod2.png"
              alt="About Innogem"
              fill
              priority
            />
            <div className="absolute inset-0 mix-blend-multiply" />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1
              data-aos="fade-up"
              className="text-3xl font-extrabold tracking-tight text-white dark:text-white sm:text-4xl"
            >
              About Innogem
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-6 text-xl text-blue-100 max-w-3xl"
            >
              Innogem GmbH is a B2B digital trade platform that bridges verified
              Indonesian producers and European buyers — simplifying compliance,
              logistics, and transactions.
            </p>
          </div>
        </div>

        {/* Story */}
        <DetailFeatureRight
          title="From local producers to global markets"
          highlight="our journey to build smarter trade"
          description="Founded in 2024, Innogem emerged from the need for secure, verified, and streamlined cross-border commerce. What started as a compliance tool has grown into a complete trade enablement platform — now trusted by businesses and logistics partners across continents."
          imageSrc="/images/front/prod2.png"
        />

        {/* Stats */}
        <div
          className="bg-gray-50 dark:bg-slate-900 pt-12 sm:pt-16"
          data-aos="fade-up"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-[#2F327D] dark:text-white sm:text-4xl">
                Growing with our verified ecosystem
              </h2>
              <p className="mt-3 text-xl text-gray-600 dark:text-gray-400 sm:mt-4">
                Trusted by exporters, importers, and partners across the globe.
              </p>
            </div>
          </div>
          <div className="mt-10 pb-12 sm:pb-16">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-gray-50 dark:bg-slate-900" />
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <dl className="rounded-lg bg-white dark:bg-slate-800 shadow-lg sm:grid sm:grid-cols-4">
                    {stats.map((stat) => (
                      <div
                        key={stat.id}
                        className="flex flex-col border-b border-gray-100 dark:border-slate-700 p-6 text-center sm:border-0 sm:border-r"
                        data-aos="zoom-in"
                        data-aos-delay={stat.id * 150}
                      >
                        <dt className="order-2 mt-2 text-lg font-medium text-gray-500 dark:text-slate-400">
                          {stat.name}
                        </dt>
                        <dd className="order-1 text-5xl font-extrabold text-[#F48C06]">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="py-12 bg-white dark:bg-[#0f172a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2
                data-aos="fade-up"
                className="text-base text-[#23BDEE] font-semibold tracking-wide uppercase"
              >
                Our Values
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-[#2F327D] dark:text-white sm:text-4xl"
              >
                What drives our mission
              </p>
            </div>

            <div className="mt-10" data-aos="fade-up" data-aos-delay="400">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                {values.map((value) => (
                  <div key={value.name} className="relative">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#23BDEE] text-white">
                      {value.icon}
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-[#2F327D] dark:text-white">
                      {value.name}
                    </p>
                    <p className="mt-2 ml-16 text-base text-gray-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#2F327D] mb-[-130px]">
          <div
            className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8"
            data-aos="zoom-in"
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to scale your global trade?</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-200">
              Join Innogem and get verified access to trusted buyers, producers,
              and logistics services.
            </p>
            <a
              href="#"
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#2F327D] bg-white hover:bg-gray-50 sm:w-auto transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
