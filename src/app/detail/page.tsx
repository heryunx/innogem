"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Truck, Package, Shield } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function DetailPage() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="bg-[#fafafa]">
        {/* Header Section */}
        <div className="bg-white">
          <div className="container mx-auto py-8 px-4 sm:px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Images Section */}
              <div className="flex gap-4 flex-col md:flex-row">
                {/* Thumbnails */}
                <div className="hidden md:flex flex-col gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="w-20 h-20 border rounded-md overflow-hidden cursor-pointer hover:border-neutral-400"
                    >
                      <Image
                        src="/images/placeholder-image.svg"
                        alt={`Thumbnail ${item}`}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>

                {/* Main Image */}
                <div className="flex-1 border rounded-md overflow-hidden">
                  <Image
                    src="/images/placeholder-image.svg"
                    alt="Kacang Mayasi"
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Product Details Section */}
              <div className="flex flex-col gap-6">
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
                  <span className="text-base w-10 text-center">1</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-10 w-10"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => router.push("checkout/address")}
                    className="ml-4 flex-1 bg-black text-white hover:bg-black/90 text-sm hover:text-white hover:bg-black/90 cursor-pointer
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
                    className="bg-neutral-500 text-white hover:bg-neutral-600 text-sm cursor-pointer"
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
              <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
                <h2 className="text-lg mb-4">Product Information</h2>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Kacang Mayasi is a crunchy and savory snack made from
                  high-quality peanuts coated with a crispy flour layer and
                  seasoned with various traditional Indonesian flavors. Perfect
                  for relaxing, sharing with family, or as a tasty souvenir.
                </p>

                <div className="space-y-4 text-sm">
                  {[
                    [
                      "Ingredients",
                      "Peanuts, wheat flour, sugar, vegetable oil, salt",
                    ],
                    [
                      "Flavor Options",
                      "Original, Spicy, Cheese, Barbecue, Balado",
                    ],
                    ["The screen refresh rate", "120 Hz"],
                    ["The pixel density", "460 ppi"],
                    ["Screen type", "OLED"],
                    [
                      "Additionally",
                      <>
                        <div className="text-right flex flex-col items-end">
                          <span>Dynamic Island</span>
                          <span>Always-On display</span>
                          <span>HDR display</span>
                          <span>True Tone</span>
                          <span>Wide color (P3)</span>
                        </div>
                      </>,
                    ],
                    ["CPU", "A16 Bionic"],
                    ["Number of cores", "6"],
                  ].map(([title, content], index) => (
                    <div key={index}>
                      <div className="flex flex-col sm:flex-row justify-between py-2 gap-2">
                        <div className="font-medium">{title}</div>
                        <div className="text-right text-gray-700">
                          {content}
                        </div>
                      </div>
                      <Separator />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
                <h2 className="text-lg mb-4">Product Certification</h2>

                <div className="space-y-4 text-sm">
                  {[
                    [
                      "Ingredients",
                      "Peanuts, wheat flour, sugar, vegetable oil, salt",
                    ],
                    [
                      "Flavor Options",
                      "Original, Spicy, Cheese, Barbecue, Balado",
                    ],
                    ["The screen refresh rate", "120 Hz"],
                    ["The pixel density", "460 ppi"],
                    ["Screen type", "OLED"],
                    ["CPU", "A16 Bionic"],
                    ["Number of cores", "6"],
                  ].map(([title, content], index) => (
                    <div key={index}>
                      <div className="flex flex-col sm:flex-row justify-between py-2 gap-2">
                        <div className="font-medium">{title}</div>
                        <div className="text-right text-gray-700">
                          {content}
                        </div>
                      </div>
                      <Separator />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
                <h2 className="text-lg mb-4">Shipping Information</h2>

                <div className="space-y-4 text-sm">
                  {[
                    [
                      "Ingredients",
                      "Peanuts, wheat flour, sugar, vegetable oil, salt",
                    ],
                    [
                      "Flavor Options",
                      "Original, Spicy, Cheese, Barbecue, Balado",
                    ],
                    ["The screen refresh rate", "120 Hz"],
                    ["The pixel density", "460 ppi"],
                    ["Screen type", "OLED"],
                    ["CPU", "A16 Bionic"],
                    ["Number of cores", "6"],
                  ].map(([title, content], index) => (
                    <div key={index}>
                      <div className="flex flex-col sm:flex-row justify-between py-2 gap-2">
                        <div className="font-medium">{title}</div>
                        <div className="text-right text-gray-700">
                          {content}
                        </div>
                      </div>
                      <Separator />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
                <h2 className="text-lg mb-4">Customization Options</h2>

                <div className="space-y-4 text-sm">
                  {[
                    ["Label Sticker", "Lead time 1 week"],
                    [
                      "Packaging Customization",
                      "Lead time 2 weeks, minimum order 10000 pieces",
                    ],
                  ].map(([title, content], index) => (
                    <div key={index}>
                      <div className="flex flex-col sm:flex-row justify-between py-2 gap-2">
                        <div className="font-medium">{title}</div>
                        <div className="text-right text-gray-700">
                          {content}
                        </div>
                      </div>
                      <Separator />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-2/6">
              <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 h-auto">
                <h2 className="text-lg mb-4">Related Products</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item}>
                      <div className="flex items-center gap-4">
                        <Image
                          src="/images/placeholder-image.svg"
                          alt={`Related Product ${item}`}
                          width={80}
                          height={80}
                          className="object-cover w-20 h-20"
                        />
                        <div>
                          <h3 className="text-sm font-medium">
                            Product {item}
                          </h3>
                          <p className="text-sm text-neutral-600">$12.99</p>
                        </div>
                      </div>
                      <Separator className="mt-4"/>
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
