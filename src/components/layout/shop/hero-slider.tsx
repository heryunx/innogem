"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Mayasi",
    highlight: "Peanuts",
    description:
      "Crunchy Japanese-style coated peanuts with a savory-sweet flavor.",
    image: "/images/mayasi-example.png",
  },
  {
    title: "New",
    highlight: "Flavors",
    description: "Explore exciting new Mayasi peanut flavor combos.",
    image: "/images/mayasi-example.png",
  },
  {
    title: "Limited",
    highlight: "Edition",
    description: "Get the seasonal packs before they're gone!",
    image: "/images/mayasi-example.png",
  },
];

export function HeroSlider() {
  return (
    <section className="bg-gray-800 text-white">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-row items-center justify-between container px-6 md:px-10 mx-auto py-8 gap-6 sm:gap-10">
              {/* Text */}
              <div className="w-[55%] space-y-4 sm:space-y-6 text-left">
                <h1 className="text-2xl sm:text-4xl font-light leading-tight">
                  {slide.title}{" "}
                  <span className="font-bold">{slide.highlight}</span>
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">
                  {slide.description}
                </p>
                <div className="flex justify-start">
                  <Button
                    variant="outline"
                    className="bg-innogem-green border-innogem-dark-green text-white hover:bg-innogem-dark-green hover:text-white px-4 py-2 text-sm sm:text-base"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="w-[45%] flex justify-center">
                <Image
                  src={slide.image}
                  alt={`${slide.title} ${slide.highlight}`}
                  width={300}
                  height={300}
                  className="w-[70%] h-auto"
                  priority
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
