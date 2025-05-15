import Button from "@/components/ui/front/button";
import Image from "next/image";

interface HeroProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export default function Hero({
  title,
  description,
  imageSrc,
  imageAlt,
  buttonText,
  onButtonClick,
}: HeroProps) {
  return (
    <div className="bg-innogem-blue dark:bg-innogem-dark-green">
      <div className="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 py-16">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            className="mb-4 text-4xl md:text-5xl font-bold leading-tight text-white dark:text-white"
          >
            {title}
          </h1>
          <p
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="300"
            className="mb-8 text-lg md:text-xl text-white/80 dark:text-gray-300"
          >
            {description}
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            className="flex justify-center lg:justify-start"
          >
            <Button
              variant="primary"
              href="#"
              className="text-lg px-8 py-3 text-white"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div
          className="w-full lg:w-1/2 flex justify-center"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <div className="relative w-96 aspect-square">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Wave SVG transition */}
      <div className="text-white -mt-14 sm:-mt-24 lg:-mt-36 z-40 relative dark:text-[#0D1117]">
        <svg
          className="xl:h-40 xl:w-full text-white dark:text-gray-800"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            fill="currentColor"
          ></path>
        </svg>
        <div className="bg-white dark:bg-gray-800 w-full h-20 -mt-px"></div>
      </div>
    </div>
  );
}
