"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Minus,
  Plus,
  Truck,
  Package,
  Shield,
  VerifiedIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/shop/navbar";
import { Footer } from "@/components/layout/shop/footer";
import ProductDetailSection from "@/components/layout/shop/productdetail-section";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/thumbs";
import { Thumbs } from "swiper/modules";

import type { Swiper as SwiperType } from "swiper";

const images = [
  "/images/placeholder-image.svg",
  "/images/placeholder-image.svg",
  "/images/placeholder-image.svg",
  "/images/placeholder-image.svg",
];

export default function DetailPage() {
  const router = useRouter();

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Navbar />
      <div className="bg-[#fafafa]">
        {/* Header Section */}
        <div className="bg-white">
          <div className="container mx-auto py-8 px-4 sm:px-6 md:px-10">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Product Images Section */}
              <div className="w-full md:w-2/5 flex flex-col gap-4">
                {/* Main Image Swiper */}
                <div className="relative w-full aspect-square border rounded-md overflow-hidden">
                  <Swiper
                    modules={[Thumbs]}
                    thumbs={{
                      swiper:
                        thumbsSwiper && !thumbsSwiper.destroyed
                          ? thumbsSwiper
                          : null,
                    }}
                    spaceBetween={10}
                    slidesPerView={1}
                    onSlideChange={(swiper) =>
                      setActiveIndex(swiper.activeIndex)
                    }
                    className="w-full h-full"
                  >
                    {images.map((src, idx) => (
                      <SwiperSlide key={idx} className="relative">
                        <Image
                          src={src}
                          alt={`Main image ${idx + 1}`}
                          fill
                          className="object-contain"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Slide count */}
                  <div className="absolute bottom-2 right-2 bg-innogem-green bg-opacity-60 text-white text-sm px-2 py-1 rounded-md z-99">
                    {activeIndex + 1} / {images.length}
                  </div>
                </div>

                {/* Thumbnails Swiper */}
                <Swiper
                  onSwiper={setThumbsSwiper}
                  modules={[Thumbs]}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  className="w-full hidden md:flex"
                >
                  {images.map((src, idx) => (
                    <SwiperSlide
                      key={idx}
                      className={`rounded-md overflow-hidden cursor-pointer !w-20 !h-20 ${
                        activeIndex === idx
                          ? "border-2 border-innogem-green"
                          : "border border-neutral-300 hover:border-neutral-400"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`Thumbnail ${idx + 1}`}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Product Details Section */}
              <div className="w-full md:w-3/5 flex flex-col gap-6">
                <h1 className="text-xl font-semibold">Kacang Mayasi</h1>

                <div className="flex items-center gap-2">
                  <span className="text-base font-bold">$13.99</span>
                  <span className="text-sm text-neutral-400 line-through">
                    $14.99
                  </span>
                </div>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  Enhanced capabilities thanks to an enlarged display of 6.7
                  inches and work without recharging throughout the day.
                  Incredible photos as in weak, yes and in bright light using
                  the new system with two cameras{" "}
                  <Link href="#" className="text-neutral-500 hover:underline">
                    more...
                  </Link>
                </p>

                <div className="flex items-center gap-4 my-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-10 w-10"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    defaultValue={1}
                    className="w-16 text-center border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-innogem-green"
                    min={1}
                    max={100}
                    step={1}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      if (value < 1) e.target.value = "1";
                      else if (value > 100) e.target.value = "100";
                    }}
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-10 w-10"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => router.push("checkout/address")}
                    className="ml-4 flex-1 bg-innogem-green text-white text-sm hover:text-white hover:bg-innogem-dark-green cursor-pointer
                    transition-colors duration-200 ease-in-out rounded-md h-10"
                  >
                    Send Inquiry
                  </Button>
                </div>

                <div className="bg-neutral-100 p-4 rounded-lg flex justify-between items-center mt-4">
                  <p className="font-medium text-sm">Sample Price: $13.99</p>
                  <Button
                    onClick={() => router.push("/checkout/address?type=sample")}
                    variant="secondary"
                    className="bg-innogem-green/60 text-white hover:bg-innogem-dark-green/60 text-sm cursor-pointer"
                  >
                    Get Sample
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  {[
                    { icon: Truck, label: "Lead Time", value: "14 - 30 days" },
                    {
                      icon: Package,
                      label: "Minimum Order",
                      value: "500 Pieces",
                    },
                    { icon: Shield, label: "Guaranteed", value: "1 year" },
                  ].map(({ icon: Icon, label, value }, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div className="bg-neutral-100 p-3 rounded-full">
                        <Icon className="h-5 w-5 text-neutral-600" />
                      </div>
                      <p className="font-medium text-sm">{label}</p>
                      <p className="text-sm">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Section */}
        <div className="container mx-auto py-8 px-4 sm:px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-center py-8 gap-6 md:gap-10">
            {/* Left Column */}
            <div className="flex flex-col gap-6 md:gap-10 w-full md:w-4/6">
              <ProductDetailSection
                title="Product Information"
                description="Kacang Mayasi is a premium Indonesian snack made from roasted peanuts with a crispy flour coating. It combines traditional Indonesian flavors with export-quality standards, suitable for European markets."
                items={[
                  { label: "Product Name", value: "Kacang Mayasi" },
                  {
                    label: "Ingredients",
                    value: "Peanuts, wheat flour, vegetable oil, sugar, salt",
                  },
                  {
                    label: "Flavor Variants",
                    value: "Original, Spicy, Cheese, Barbecue, Balado",
                  },
                  { label: "Packaging Size", value: "30g / 70g / 150g" },
                  { label: "Shelf Life", value: "12 months" },
                ]}
              />

              <ProductDetailSection
                title="Product Certification"
                items={[
                  { label: "Halal Certification", value: "LPPOM MUI" },
                  {
                    label: "BPOM (Indonesia FDA)",
                    value: "RI MD Registration",
                  },
                  { label: "Export License", value: "Available" },
                  {
                    label: "EU Standard Compliance",
                    value: "Available on request",
                  },
                ]}
              />

              <ProductDetailSection
                title="Shipping Information"
                items={[
                  { label: "Origin", value: "Indonesia" },
                  { label: "Export Port", value: "Tanjung Priok, Jakarta" },
                  { label: "Lead Time", value: "2–3 weeks after payment" },
                  { label: "MOQ", value: "500 cartons" },
                ]}
              />

              <ProductDetailSection
                title="Customization Options"
                items={[
                  {
                    label: "Private Label",
                    value: "Yes, available for MOQ 10,000 pcs",
                  },
                  { label: "OEM Packaging", value: "Custom design accepted" },
                  {
                    label: "Multilingual Label",
                    value: "English / German / Bahasa Indonesia",
                  },
                ]}
              />
            </div>

            {/* Right Column */}
            <div className="w-full md:w-2/6">
              <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 h-auto">
                <h2 className="text-lg mb-4">Related Products</h2>
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="bg-background rounded-lg shadow-sm overflow-hidden border border-transparent hover:border hover:border-innogem-green"
                    >
                      <Link href="/detail" prefetch={false}>
                        <div className="relative">
                          <Image
                            src="/images/placeholder-image.svg"
                            alt={`Product ${item}`}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover"
                            style={{
                              aspectRatio: "400/300",
                              objectFit: "cover",
                            }}
                          />

                          <div className="absolute top-0 right-0 bg-red-500/90 text-white text-xs px-2 py-1 rounded">
                            20% OFF
                          </div>

                          <div className="absolute top-0 left-0 bg-innogem-green/90 text-white text-xs font-bold px-2 py-1 rounded">
                            <VerifiedIcon className="" size={20} />
                          </div>
                        </div>

                        <div className="p-4">
                          <h3 className="text-sm font-medium">
                            Product {item}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit...
                          </p>
                          <div className="flex items-center justify-between mt-4">
                            <div className="text-lg font-semibold">$89</div>
                            <div className="flex items-center gap-1">
                              <Button
                                onClick={() => router.push("/detail")}
                                className="bg-innogem-green hover:bg-innogem-dark-green text-white w-full mt-2"
                              >
                                Detail
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
