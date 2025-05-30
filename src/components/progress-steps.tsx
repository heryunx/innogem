"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = {
  id: number;
  name: string;
};

export default function ProgressSteps() {
  // Contoh langkah statis (default non-sample)
  const steps: Step[] = [
    { id: 1, name: "Address" },
    { id: 2, name: "Frequency" },
    { id: 3, name: "Shipping" },
    { id: 4, name: "Confirmation" },
  ];

  // Contoh current step index statis (misal step ke-2 aktif)
  const currentStepIndex = 1;

  return (
    <div className="flex justify-center gap-10 sm:gap-20 items-center">
      {steps.map((step, index) => (
        <div
          key={step.id}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex justify-center items-center">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm",
                index === currentStepIndex
                  ? "bg-black text-white"
                  : index < currentStepIndex
                  ? "bg-gray-300 text-gray-700"
                  : "bg-gray-200 text-gray-400"
              )}
            >
              {index < currentStepIndex ? (
                <Check className="h-4 w-4" />
              ) : (
                step.id
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-2">
            <p
              className={cn(
                "text-xs",
                index === currentStepIndex ? "text-black" : "text-gray-400"
              )}
            >
              Step {step.id}
            </p>
            <p
              className={cn(
                "text-xs",
                index === currentStepIndex ? "text-black" : "text-gray-400"
              )}
            >
              {step.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
