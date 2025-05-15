// components/ServiceList.tsx
"use client";
import type { JSX } from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Service = {
  id: number;
  title: string;
  short: string;
  icon: JSX.Element;
  positionShort?: string;
  shortDescription: string;
  image?: string;
};

type Title = {
  title: string;
  desc: string;
};

type ServiceListProps = {
  title: Title;
  services: Service[];
  autoplay?: boolean;
};

export default function ServiceList({
  title,
  services,
  autoplay = true,
}: ServiceListProps) {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [autoPlay, setAutoPlay] = useState<boolean>(autoplay);

  useEffect(() => {
    if (!autoPlay) return;
    const intervalId = setInterval(() => {
      setActiveTab((prevTab) =>
        prevTab === services.length ? 1 : prevTab + 1
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, [autoPlay, services.length]);

  const handleClick = (id: number) => {
    setActiveTab(id);
    setAutoPlay(false);
  };

  return (
    <section className="bg-white dark:bg-gray-800 text-white">
      <div className="px-4 py-10 max-w-7xl mx-auto text-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4 text-innogem-blue dark:text-innogem-green">
            {title.title} <span className="text-yellow-500">Innogem?</span>
          </h2>{" "}
          <p className="lg:w-5xl text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base mb-10 px-4">
            {title.desc}
          </p>
        </div>

        <div className="flex justify-between items-center w-full">
          {services.map((service, index) => (
            <div
              key={service.id}
              role="button"
              tabIndex={0}
              aria-pressed={activeTab === service.id}
              className={`relative flex flex-col items-center flex-1 min-h-[220px] cursor-pointer transition-all ${
                index !== 0 ? "-ml-[10px] sm:-ml-[40px] lg:-ml-[580px]" : ""
              }`}
              onClick={() => handleClick(service.id)}
              onKeyDown={(e) => e.key === "Enter" && handleClick(service.id)}
            >
              {service.positionShort === "top-0" && (
                <>
                  <div className="absolute top-0 text-[10px] sm:text-xs text-center font-semibold text-gray-800 dark:text-gray-100 w-full">
                    {service.short}
                  </div>
                  <div className="absolute top-8 sm:top-4 w-1 h-6 sm:h-4 bg-[#facc15] rounded-full"></div>
                  <div className="absolute top-[48px] sm:top-[48px] md:top-[25px] w-3 h-3 bg-[#facc15] rounded-full"></div>
                </>
              )}
              {service.positionShort === "bottom-0" && (
                <>
                  <div className="absolute bottom-0 text-[10px] sm:text-xs text-center font-semibold text-gray-800 dark:text-gray-100 w-full">
                    {service.short}
                  </div>
                  <div className="absolute bottom-[48px] sm:bottom-[25px] w-3 h-3 bg-[#f59e0b] rounded-full"></div>
                  <div className="absolute bottom-8 sm:bottom-3 w-1 h-6 sm:h-4 bg-[#f59e0b] rounded-full"></div>
                </>
              )}

              <div className="mt-auto mb-auto relative z-10">
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full border-[10px] md:border-[12px] ${
                    service.positionShort === "top-0"
                      ? "border-[#facc15] border-r-transparent border-b-transparent rotate-[45deg]"
                      : "border-[#f59e0b] border-t-transparent border-l-transparent rotate-[45deg]"
                  }`}
                ></div>

                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-24 md:h-24 bg-white dark:bg-innogem-dark-green rounded-full shadow-md flex items-center justify-center text-xl md:text-2xl inset-shadow-2xs transition-transform duration-300 ${
                      service.id === activeTab
                        ? "border-2 border-yellow-300 scale-115"
                        : "text-gray-800 dark:text-gray-100"
                    }`}
                  >
                    {service.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:w-4xl mt-10 bg-white dark:bg-gray-900 rounded-xl border border-yellow-200 dark:border-yellow-600 shadow-md max-w-7xl mx-auto transition-all duration-500 ease-in-out">
          <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-0 lg:gap-8">
            <div className="w-full lg:w-1/2 space-y-4 p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full border-[6px] lg:border-[8px] border-yellow-400 dark:border-yellow-500 border-t-transparent border-l-transparent rotate-[45deg] flex items-center justify-center">
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center rotate-[-45deg]">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-2xl sm:text-3xl text-yellow-500">
                      {services[activeTab - 1].icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-600 dark:text-yellow-400 text-left">
                  {services[activeTab - 1].title}
                </h3>
              </div>

              <div
                className="text-gray-800 dark:text-gray-200 leading-relaxed text-sm sm:text-base text-left"
                dangerouslySetInnerHTML={{
                  __html: services[activeTab - 1].shortDescription,
                }}
              ></div>
            </div>

            <div className="relative w-full lg:w-1/2 h-[250px] sm:h-[300px] md:h-[350px]">
              <Image
                src={services[activeTab - 1].image || ""}
                alt={services[activeTab - 1].short}
                className="rounded-t-lg md:rounded-r-lg object-cover shadow-md"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
