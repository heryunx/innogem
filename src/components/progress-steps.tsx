"use client";

import { usePathname } from "next/navigation";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProgressSteps() {
  const pathname = usePathname();

  const steps = [
    { id: 1, name: "Address", path: "/checkout/address" },
    { id: 2, name: "Frequency", path: "/checkout/frequency" },
    { id: 3, name: "Shipping", path: "/checkout/shipping" },
    { id: 4, name: "Confirmation", path: "/checkout/confirmation" },
  ];

  const getCurrentStepIndex = () => {
    const currentStep = steps.findIndex((step) => pathname.includes(step.path));
    return currentStep !== -1 ? currentStep : 0;
  };

  const currentStepIndex = getCurrentStepIndex();

  return (
    <div className="flex justify-between items-center">
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
          <div className="flex flex-col justidy-center items-center mt-2">
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
