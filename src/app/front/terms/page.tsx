import Footer from "@/components/layout/front/footer";
import Image from "next/image";
import Link from "next/link";
import {
  FileCheck2,
  Shield,
  Handshake,
  AlertTriangle,
  Clock,
  Mail,
} from "lucide-react";

export default function TermsAndConditionsPage() {
  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-[#2F327D] to-[#4A4EAE]">
          <div className="absolute inset-0">
            <Image
              className="w-full h-full object-cover opacity-20"
              src="/images/front/b2btrading.webp"
              alt="Terms background"
              fill
              priority
            />
            <div className="absolute inset-0 bg-[#2F327D]/70 mix-blend-multiply" />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-extrabold text-white tracking-tight">
              Terms & Conditions
            </h1>
            <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
              Read our terms and conditions carefully before using our services.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {[
              {
                icon: <FileCheck2 className="text-innogem-green w-6 h-6" />,
                title: "1. Acceptance of Terms",
                content:
                  "By accessing or using our website and services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.",
              },
              {
                icon: <Handshake className="text-innogem-green w-6 h-6" />,
                title: "2. Use of Services",
                content:
                  "You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the site.",
              },
              {
                icon: <Shield className="text-innogem-green w-6 h-6" />,
                title: "3. Intellectual Property",
                content:
                  "All content on this site, including text, graphics, logos, and images, is the property of Innogem GmbH or its licensors, and protected by intellectual property laws.",
              },
              {
                icon: <AlertTriangle className="text-innogem-green w-6 h-6" />,
                title: "4. Limitation of Liability",
                content:
                  "We are not liable for any direct or indirect damages resulting from the use or inability to use our services. Use of our site is at your own risk.",
              },
              {
                icon: <Clock className="text-innogem-green w-6 h-6" />,
                title: "5. Changes to Terms",
                content:
                  "We reserve the right to update these Terms at any time. Changes will be effective upon posting. Continued use of our services implies acceptance.",
              },
              {
                icon: <Mail className="text-innogem-green w-6 h-6" />,
                title: "6. Contact Us",
                content: (
                  <>
                    For questions about these Terms, contact us at{" "}
                    <Link
                      href="mailto:legal@innogem.ai"
                      className="text-[#23BDEE] font-medium hover:underline"
                    >
                      legal@innogem.ai
                    </Link>
                    .
                  </>
                ),
              },
            ].map(({ icon, title, content }, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-8 border border-gray-200"
                data-aos="fade-up"
              >
                <div className="flex items-center gap-3 mb-4">
                  {icon}
                  <h2 className="text-2xl font-bold text-[#2F327D]">{title}</h2>
                </div>
                <p className="text-gray-700">{content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#2F327D] mt-24">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Questions about our Terms?
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-200">
              We’re here to help you understand your rights and
              responsibilities.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#2F327D] bg-white hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/front/privacy-policy"
                className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-innogem-green hover:bg-innogem-dark-green transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
