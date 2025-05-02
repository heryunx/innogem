import type React from "react";
import type { Metadata } from "next";
import ProgressSteps from "@/components/progress-steps";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Checkout process",
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="container px-6 md:px-10 mx-auto py-12 gap-10">
        <ProgressSteps />
        <div className="mt-12">{children}</div>
      </div>
      <Footer />
    </>
  );
}
