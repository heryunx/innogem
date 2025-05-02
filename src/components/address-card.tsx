"use client";

import { Edit, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Address } from "@/lib/checkout-data";

interface AddressCardProps {
  address: Address;
  isSelected: boolean;
  onSelect: () => void;
}

export default function AddressCard({
  address,
  isSelected,
  onSelect,
}: AddressCardProps) {
  return (
    <div className="flex items-start space-x-2 bg-gray-50 p-4 rounded-lg">
      <RadioGroupItem
        value={address.id}
        id={address.id}
        className="mt-1"
        checked={isSelected}
        onClick={onSelect}
      />
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <Label htmlFor={address.id} className="font-medium cursor-pointer">
              {address.name}
            </Label>
            <span
              className={cn(
                "text-xs px-2 py-0.5 rounded text-white",
                address.type === "HOME" ? "bg-black" : "bg-black"
              )}
            >
              {address.type}
            </span>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Edit className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <X className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </Button>
          </div>
        </div>
        <div className="mt-1 text-sm text-gray-700">
          <p>
            {address.street} {address.city}, {address.state} {address.zip}
          </p>
          <p>{address.phone}</p>
        </div>
      </div>
    </div>
  );
}
