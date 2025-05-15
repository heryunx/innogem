import Image from "next/image";
import { Lightbulb, ShoppingCart } from "lucide-react";
import Button from "@/components/ui/front/button";

export default function WhatIsInnogem() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4">
        <div
          data-aos="flip-down"
          className="text-center max-w-screen-md mx-auto mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#263A72] dark:text-[#3A9C90] mb-4">
            What is <span className="text-yellow-500">Innogem?</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Innogem is a smart cross-border B2B trade platform that connects
            Indonesian <strong>producers</strong> with European{" "}
            <strong>buyers</strong>, streamlining product onboarding,
            compliance, logistics, and payments — all in one place.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="grid gap-8 sm:grid-cols-2 max-w-5xl mx-auto"
        >
          {/* Card For Producers */}
          <div className="relative rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition duration-300 h-[280px] group">
            <Image
              src="/images/front/prod2.png"
              alt="For Producers"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            {/* Overlay dengan transparansi */}
            <div className="absolute inset-0 bg-black opacity-40 group-hover:bg-opacity-60 transition duration-300 z-10"></div>

            {/* Konten di atas overlay */}
            <div className="relative p-6 flex flex-col items-center text-center text-white h-full justify-center z-20">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100 dark:bg-yellow-800 mb-4">
                <Lightbulb className="text-yellow-500 dark:text-yellow-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">For Producers</h3>
              <p className="mb-4">
                Onboard your products seamlessly and expand your reach to
                international buyers.
              </p>
              <Button
                href="/front/producer"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-darken"
              >
                Onboard Your Products
              </Button>
            </div>
          </div>

          {/* Card For Buyers */}
          <div className="relative rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition duration-300 h-[280px] group">
            <Image
              src="/images/front/importer.png"
              alt="For Buyers"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 group-hover:bg-opacity-60 transition duration-300 z-10"></div>

            {/* Konten */}
            <div className="relative p-6 flex flex-col items-center text-center text-white h-full justify-center z-20">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100 dark:bg-yellow-800 mb-4">
                <ShoppingCart className="text-yellow-500 dark:text-yellow-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">For Buyers</h3>
              <p className="mb-4">
                Explore a curated selection of export-ready products from
                trusted Indonesian producers.
              </p>
              <Button
                href="/front/buyer"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-darken"
              >
                Explore Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
