"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import Link from "next/link";
import { Apple, Computer, Popcorn } from "lucide-react";

const categories = [
  {
    name: "Electronics",
    icon: <Computer className="w-8 h-8 text-white" />,
  },
  {
    name: "Snacks",
    icon: <Popcorn className="w-8 h-8 text-white" />,
  },
  {
    name: "Fruits",
    icon: <Apple className="w-8 h-8 text-white" />,
  },
  {
    name: "Electronics",
    icon: <Computer className="w-8 h-8  text-white" />,
  },
  {
    name: "Snacks",
    icon: <Popcorn className="w-8 h-8 text-white" />,
  },
  {
    name: "Fruits",
    icon: <Apple className="w-8 h-8 text-white" />,
  },
  {
    name: "Electronics",
    icon: <Computer className="w-8 h-8 text-white" />,
  },
  {
    name: "Snacks",
    icon: <Popcorn className="w-8 h-8 text-white" />,
  },
  {
    name: "Fruits",
    icon: <Apple className="w-8 h-8 text-white" />,
  },
];

export default function CategorySection() {
  return (
    <section className="w-full pt-4">
      <div className="container px-6 md:px-10 mx-auto mb-2 relative">
        <Swiper
          slidesPerView="auto"
          spaceBetween={8}
          scrollbar={{
            draggable: true,
          }}
          modules={[Scrollbar]}
          className="category-swiper"
          style={{ overflow: "visible" }}
        >
          {categories.map((cat, index) => (
            <SwiperSlide
              key={index}
              className="!w-[88px] sm:!w-[100px] md:!w-[110px] lg:!w-[120px]"
            >
              <Link
                href={`/category/${index}`}
                className="flex flex-col items-center justify-center p-3 transition-colors"
              >
                <div className="text-4xl mb-2 p-3 bg-innogem-dark-green hover:bg-innogem-green rounded-md text-white shadow">
                  {cat.icon}
                </div>
                <span className="text-sm text-center font-medium">
                  {cat.name}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Scrollbar container */}
        <div className="flex justify-center mt-4">
          <div className="w-[60px] h-[4px] relative">
            <div className="swiper-scrollbar" />
          </div>
        </div>
      </div>

      {/* Custom scrollbar styling */}
      <style jsx>{`
        :global(.category-swiper .swiper-scrollbar) {
          position: absolute !important;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: #e5e5e5;
          border-radius: 2px;
        }

        :global(.category-swiper .swiper-scrollbar-drag) {
          background: #243665;
          border-radius: 2px;
        }
      `}</style>
    </section>
  );
}
