import Footer from "@/components/layout/front/footer";
import { Building2Icon, MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ImpressumPage() {
  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-[#2F327D]">
          <div className="absolute inset-0">
            <Image
              className="w-full h-full object-cover opacity-20"
              src="/images/front/b2btrading.webp"
              alt="Legal documents background"
              fill
              priority
            />
            <div
              className="absolute inset-0 bg-[#2F327D] mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Impressum
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl">
              Legal information according to § 5 TMG (German Telemedia Act)
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg text-gray-600 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#2F327D]">
              Service Provider
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <Building2Icon className="h-5 w-5 text-innogem-green mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Innogem GmbH</h3>
                  <p className="text-gray-600">40549 Dusseldorf</p>
                  <p className="text-gray-600">Heerdter Lohweg 212</p>
                </div>
              </div>

              <div className="flex items-start">
                <MailIcon className="h-5 w-5 text-innogem-green mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Contact</h3>
                  <p className="text-gray-600">
                    Email:{" "}
                    <Link
                      href="mailto:info@innogem.com"
                      className="text-[#23BDEE] hover:underline"
                    >
                      info@innogem.ai
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <PhoneIcon className="h-5 w-5 text-innogem-green mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+49 30 12345678</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#2F327D] mt-12">
              Legal Information
            </h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-medium text-gray-900">Represented by</h3>
                <p className="text-gray-600">
                  Alex Johnson (CEO), Maria Garcia (CLO)
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Registered Authority
                </h3>
                <p className="text-gray-600">Amtsgericht Düsseldorf</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  VAT Identification Number
                </h3>
                <p className="text-gray-600">DE123456789</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">
                  Company Registration Number
                </h3>
                <p className="text-gray-600">HRB 123456</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#2F327D]">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Need further assistance?
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-200">
              Our legal team is happy to answer any questions you may have.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#2F327D] bg-white hover:bg-gray-50 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/privacy"
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
