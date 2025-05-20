// Tidak ada "use client"

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function ShippingPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium">Select Shipping Method</h2>

      <RadioGroup className="space-y-4">
        {[
          {
            id: "standard",
            label: "Standard Shipping",
            description: "3-5 business days",
            price: "Free",
          },
          {
            id: "express",
            label: "Express Shipping",
            description: "1-2 business days",
            price: "$9.99",
          },
          {
            id: "overnight",
            label: "Overnight Shipping",
            description: "Next business day",
            price: "$19.99",
          },
        ].map((option) => (
          <div
            key={option.id}
            className="flex items-start space-x-2 bg-gray-50 p-4 rounded-lg"
          >
            <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
            <div className="flex-1">
              <div className="flex justify-between">
                <Label
                  htmlFor={option.id}
                  className="font-medium cursor-pointer"
                >
                  {option.label}
                </Label>
                <span className="font-medium">{option.price}</span>
              </div>
              <p className="text-sm text-gray-500">{option.description}</p>
            </div>
          </div>
        ))}
      </RadioGroup>

      {/* Navigation Buttons (hanya tampilan) */}
      <div className="flex justify-between pt-6">
        <Button variant="outline" className="w-[180px] h-12">
          Back
        </Button>
        <Button className="w-[180px] h-12 bg-black hover:bg-gray-800">
          Next
        </Button>
      </div>
    </div>
  );
}
