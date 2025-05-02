"use client";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, Nut } from "lucide-react";
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
        <section className="bg-[#1D1B23] text-white">
          <div className="flex items-center justify-between container px-6 md:px-10 mx-auto py-12 gap-10">
            <div className="w-3/5 space-y-6 text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light">
                Mayasi <span className="font-bold">Peanuts</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-400">
                Crunchy Japanese-style coated peanuts with a savory-sweet
                flavor.
              </p>
              <div className="flex justify-start">
                <Button
                  variant="outline"
                  className="bg-[#1D1B23] border-white text-white hover:bg-white hover:text-black"
                >
                  Shop Now
                </Button>
              </div>
            </div>

            <div className="w-2/5 flex justify-center">
              <Image
                src="/images/mayasi-example.png"
                alt="Mayasi Peanuts"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full py-12">
          <div className="container px-6 md:px-10 flex-col items-center justify-center mx-auto mb-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Browse By Category</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next</span>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Link
                  key={item}
                  href={`/category/${item}`}
                  className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <Nut className="h-6 w-6 text-muted-foreground mb-2" />
                  <span className="text-sm font-medium">Category {item}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="w-full py-12">
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
                      className="bg-background rounded-lg shadow-sm overflow-hidden"
                    >
                      <Link href="/detail" prefetch={false}>
                        <Image
                          src="/images/placeholder-image.svg"
                          alt={`Product ${item}`}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover"
                          style={{ aspectRatio: "400/300", objectFit: "cover" }}
                        />
                        <div className="p-4">
                          <h3 className="text-sm font-medium">
                            Product {item}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptatibus.
                          </p>
                          <div className="flex items-center justify-between mt-4">
                            <div className="text-lg font-semibold">$89</div>
                            <div className="flex items-center gap-1">
                              <Button
                                onClick={() => router.push("/detail")}
                                className="w-full mt-2"
                              >
                                Buy Now
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
