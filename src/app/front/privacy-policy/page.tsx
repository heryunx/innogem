import Footer from "@/components/layout/front/footer";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-[#2F327D] to-[#4A4EAE]">
          <div className="absolute inset-0">
            <Image
              className="w-full h-full object-cover opacity-20"
              src="/images/front/b2btrading.webp"
              alt="Privacy background"
              fill
              priority
            />
            <div className="absolute inset-0 bg-[#2F327D]/70 mix-blend-multiply" />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-extrabold text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
              Your privacy matters to us. Learn how we protect and use your
              data.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {[
              {
                title: "1. Introduction",
                content:
                  "At Innogem GmbH, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal data.",
              },
              {
                title: "2. Information We Collect",
                list: [
                  "Personal details (name, email, phone)",
                  "Company and address info",
                  "Browser & device data (IP, type, usage)",
                  "Form submissions and communications",
                ],
              },
              {
                title: "3. How We Use Your Data",
                list: [
                  "Delivering services and transactions",
                  "Enhancing user experience",
                  "Providing support and updates",
                  "Legal compliance and marketing (consent-based)",
                ],
              },
              {
                title: "4. Data Sharing",
                content:
                  "We never sell your data. We only share with trusted service providers or authorities when legally required or with your consent.",
              },
              {
                title: "5. Your Rights",
                list: [
                  "Access or update your data",
                  "Withdraw consent anytime",
                  "Request deletion or restriction",
                  "Lodge a complaint with authority",
                ],
              },
              {
                title: "6. Contact Us",
                content: (
                  <>
                    For any questions about this privacy policy, reach out at{" "}
                    <Link
                      href="mailto:privacy@innogem.ai"
                      className="text-[#23BDEE] font-medium hover:underline"
                    >
                      privacy@innogem.ai
                    </Link>
                    .
                  </>
                ),
              },
            ].map(({ title, content, list }, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-8 border border-gray-200"
                data-aos="fade-up"
              >
                <h2 className="text-2xl font-bold text-[#2F327D] mb-4">
                  {title}
                </h2>
                {content && <p className="text-gray-700">{content}</p>}
                {list && (
                  <ul className="mt-4 space-y-3 text-gray-700">
                    {list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-innogem-green shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#2F327D] mt-24">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Have concerns about your data?
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-200">
              We are committed to protecting your privacy. Contact us anytime.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link
                href="#"
                className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#2F327D] bg-white hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/front/impressum"
                className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-innogem-green hover:bg-innogem-dark-green transition-colors"
              >
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
