"use client";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function FrequencyPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium">Select Delivery Frequency</h2>

      <RadioGroup className="space-y-4">
        {[
          {
            id: "one-time",
            label: "One-Time",
            description: "One-time delivery",
          },
          {
            id: "weekly",
            label: "Weekly",
            description: "Delivery every week",
          },
          {
            id: "biweekly",
            label: "Bi-Weekly",
            description: "Delivery every two weeks",
          },
          {
            id: "monthly",
            label: "Monthly",
            description: "Delivery once a month",
          },
        ].map((option) => (
          <div
            key={option.id}
            className="flex items-start space-x-2 bg-gray-50 p-4 rounded-lg"
          >
            <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
            <div className="flex-1">
              <Label htmlFor={option.id} className="font-medium cursor-pointer">
                {option.label}
              </Label>
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
