import Image from "next/image";
import React from "react";

interface FeatureItem {
  icon: React.ReactNode;
  text: string;
}

interface DetailFeatureLeftProps {
  title: string;
  highlight: string;
  features: FeatureItem[];
  imageSrc: string;
  imageAlt?: string;
}

export default function DetailFeatureLeft({
  title,
  highlight,
  features,
  imageSrc,
  imageAlt = "Feature image",
}: DetailFeatureLeftProps) {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          {/* Left Column - Image */}
          <div
            className="md:w-1/2 relative mb-10 md:mb-0"
            data-aos="fade-right"
          >
            <div className="absolute w-32 h-32 rounded-full bg-[#33EFA0] z-0 left-4 -top-12 opacity-20 animate-pulse" />
            <div className="absolute w-5 h-5 rounded-full bg-[#33D9EF] z-0 left-36 -top-12 opacity-70 animate-ping" />

            <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute w-36 h-36 rounded-full bg-[#5B61EB] z-0 right-16 -bottom-4 opacity-20 animate-pulse" />
            <div className="absolute w-5 h-5 rounded-full bg-[#F56666] z-0 right-52 bottom-4 opacity-70 animate-ping" />
          </div>

          {/* Right Column - Features */}
          <div className="md:w-5/12" data-aos="fade-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-6">
              {title} <span className="text-innogem-green">{highlight}</span>
            </h2>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md">
                    {feature.icon}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
