import Image from "next/image";

interface DetailFeatureRightProps {
  title: string;
  highlight: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

export default function DetailFeatureRight({
  title,
  highlight,
  description,
  imageSrc,
  imageAlt = "Feature image",
}: DetailFeatureRightProps) {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          {/* Left Column - Text Content */}
          <div
            className="md:w-1/2 relative mb-10 md:mb-0"
            data-aos="fade-right"
          >
            {/* Decorative Circle */}
            <div className="bg-innogem-green rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse opacity-20"></div>

            {/* Text Content */}
            <div className="relative z-10">
              <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
                {title}{" "}
                <span className="text-innogem-green dark:text-innogem-green">
                  {highlight}
                </span>
              </h2>
              <p className="my-6 text-gray-600 dark:text-gray-300">
                {description}
              </p>
            </div>
          </div>

          {/* Right Column - Image with Decorations */}
          <div className="md:w-1/2 relative" data-aos="fade-left">
            {/* Top-left Decorative Box */}
            <div className="bg-innogem-blue w-24 h-24 absolute rounded-lg z-0 -top-3 -left-3 animate-pulse opacity-20"></div>

            {/* Image */}
            <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Bottom-right Decorative Box */}
            <div className="bg-innogem-green w-40 h-40 absolute rounded-lg z-0 -bottom-3 -right-3 animate-pulse opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
