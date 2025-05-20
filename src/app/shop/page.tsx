"use client";
import CategorySection from "@/components/layout/shop/categories";
import { Footer } from "@/components/layout/shop/footer";
import { HeroSlider } from "@/components/layout/shop/hero-slider";
import { Navbar } from "@/components/layout/shop/navbar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VerifiedIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSlider />

        {/* Categories Section */}
        <CategorySection />

        {/* Products Section */}
        <section className="w-full py-8">
          <div className="container flex justify-center items-center mx-auto px-6 md:px-10">
            <Tabs defaultValue="new" className="w-full">
              <TabsList className="mb-6 bg-transparent justify-start border-b rounded-none p-0 h-auto">
                <TabsTrigger
                  value="new"
                  className="rounded-none border-b-2 border-transparent border-none data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
                >
                  New Arrival
                </TabsTrigger>

                <TabsTrigger
                  value="bestseller"
                  className="rounded-none border-b-2 border-transparent border-none data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
                >
                  Bestseller
                </TabsTrigger>
                <TabsTrigger
                  value="featured"
                  className="rounded-none border-b-2 border-transparent border-none data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
                >
                  Featured Products
                </TabsTrigger>
              </TabsList>
              <TabsContent value="new" className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {Array.from({ length: 8 }, (_, i) => i + 1).map((item) => (
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
                                className="bg-innogem-dark-green hover:bg-innogem-green text-white w-full mt-2"
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
              </TabsContent>
              <TabsContent value="bestseller" className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {[5, 6, 7, 8].map((item) => (
                    <div key={item} className="group">
                      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-3">
                        <Image
                          src={"/placeholder.svg"}
                          alt={`Product ${item}`}
                          width={300}
                          height={300}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <h3 className="text-sm font-medium">Product {item}</h3>
                      <p className="font-bold mt-1">
                        ${Math.floor(Math.random() * 100) + 1}
                      </p>
                      <Button
                        onClick={() => router.push("/detail")}
                        className="w-full mt-2"
                      >
                        Buy Now
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="featured" className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {[9, 10, 11, 12].map((item) => (
                    <div key={item} className="group">
                      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-3">
                        <Image
                          src={"/placeholder.svg"}
                          alt={`Product ${item}`}
                          width={300}
                          height={300}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <h3 className="text-sm font-medium">Product {item}</h3>
                      <p className="font-bold mt-1">
                        ${Math.floor(Math.random() * 100) + 1}
                      </p>
                      <Button
                        onClick={() => router.push("/detail")}
                        className="w-full mt-2"
                      >
                        Buy Now
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
