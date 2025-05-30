"use client";
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";
import { Plus } from "lucide-react";
import AddressCard from "@/components/address-card";
import { addresses } from "@/lib/checkout-data";

export default function AddressPage() {
  const selectedAddress = "address1"; // nilai default statis

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium">Select Address</h2>

      <RadioGroup
        value={selectedAddress}
        className="space-y-4"
        onValueChange={() => {}}
      >
        {addresses.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
            isSelected={selectedAddress === address.id}
            onSelect={() => {}}
          />
        ))}
      </RadioGroup>

      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300 border-dashed"></div>
        </div>
        <div className="relative flex justify-center">
          <Button
            variant="outline"
            className="bg-white rounded-full h-10 w-10 p-0 flex items-center justify-center border-gray-300"
          >
            <Plus className="h-5 w-5" />
            <span className="sr-only">Add New Address</span>
          </Button>
        </div>
      </div>
      <div className="text-center text-sm">Add New Address</div>

      {/* Navigation Buttons (hanya layout) */}
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
