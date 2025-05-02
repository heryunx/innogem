"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ConfirmationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const addressId = searchParams.get("address") || "address1";

  const products = [
    {
      id: 1,
      name: "Apple iPhone 14 Pro Max 128GB",
      price: "$1399",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "AirPods Max Silver",
      price: "$549",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Apple Watch Series 9 GPS 41mm",
      price: "$399",
      image: "/placeholder.svg?height=60&width=60",
    },
  ];

  const handleBack = () => {
    router.push(`/checkout/shipping?address=${addressId}`);
  };

  const handleComplete = () => {
    // In a real app, you would submit the order to your backend
    alert("Purchase request submitted successfully!");
    router.push("/");
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border p-6 shadow-sm">
        <h2 className="text-lg font-medium">Summary</h2>

        <div className="space-y-2">
          {/* Product Items */}
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between bg-gray-50 p-2 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={"/images/placeholder-image.svg"}
                  alt={product.name}
                  width={60}
                  height={60}
                  className="rounded-md"
                />
                <span className="text-sm">{product.name}</span>
              </div>
              <span className="font-medium">{product.price}</span>
            </div>
          ))}

          {/* Address */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Address</h3>
            <p>1131 Dusty Townline, Jacksonville, TX 40322</p>
          </div>

          {/* Shipment Method */}
          <div className="mt-2">
            <h3 className="text-sm font-medium text-gray-500 mb-1">
              Shipment method
            </h3>
            <p>FOB (Free On Board)</p>
          </div>

          {/* Cost Breakdown */}
          <div className="space-y-2 mt-6 pt-4 border-t">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium">€4,500.00</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Tax</span>
              <span className="font-medium">$50</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated shipping</span>
              <span className="font-medium">€800.00</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Customs & VAT:</span>
              <span className="font-medium">To be determined</span>
            </div>
            <div className="flex justify-between pt-2 border-t font-semibold">
              <span>Total Estimate</span>
              <span>€5,300.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between gap-4 pt-2">
        <Button variant="outline" onClick={handleBack} className="flex-1 h-12">
          Back
        </Button>
        <Button
          onClick={handleComplete}
          className="flex-1 h-12 bg-black hover:bg-gray-800"
        >
          Purchase Request
        </Button>
      </div>
    </div>
  );
}
