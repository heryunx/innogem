"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { addresses } from "@/lib/checkout-data";
import { Edit, X } from "lucide-react";

export default function UserAddressPage() {
  return (
    <div className="container mx-auto py-4 px-4 space-y-6 font-sans text-base">
      <Card className="px-6">
        <div className="flex justify-end">
          <Button className="flex justify-end w-fit text-xs ">
            + Add New Address
          </Button>
        </div>

        {addresses.map((address) => (
          <div
            key={address.id}
            className="flex items-start space-x-2 bg-gray-50 p-4 rounded-lg"
          >
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <Label
                    htmlFor={address.id}
                    className="font-medium cursor-pointer"
                  >
                    {address.name}
                  </Label>
                  <span
                    className={`text-xs px-2 py-0.5 rounded text-white",
                    address.type === "HOME" ? "bg-black" : "bg-black"
                  `}
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
        ))}
      </Card>
    </div>
  );
}
