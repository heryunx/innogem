"use client";

import { useState } from "react";
import { Footer } from "@/components/layout/shop/footer";
import { Navbar } from "@/components/layout/shop/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default function RegisterPage() {
  const [step, setStep] = useState(1);

  return (
    <>
      <Navbar />
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-4xl">
          <div className="flex flex-col gap-6">
            <Card className="overflow-hidden p-0">
              <CardContent className="grid p-0 md:grid-cols-2">
                <form
                  className="p-6 md:p-8"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (step === 1) {
                      setStep(2);
                    } else if (step === 2) {
                      setStep(3);
                    } else {
                      // Final submit
                      console.log("Submitting registration...");
                    }
                  }}
                >
                  <div className="flex flex-col gap-6">
                    {/* Title & Step Indicator */}
                    <div className="flex items-center justify-between">
                      <h1 className="text-2xl font-bold">Register for free</h1>
                      <span className="text-sm text-muted-foreground">
                        Page {step}/3
                      </span>
                    </div>

                    {/* Step 1 */}
                    {step === 1 && (
                      <>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Business email"
                          required
                        />
                        <Input
                          id="password"
                          type="password"
                          placeholder="Create Password"
                          required
                        />
                        <Input
                          id="confirm-password"
                          type="password"
                          placeholder="Confirm Password"
                          required
                        />
                      </>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                      <>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Company Name"
                          required
                        />
                        <Input
                          id="fullname"
                          type="text"
                          placeholder="Full Name"
                          required
                        />
                        <Input
                          id="jobtitle"
                          type="text"
                          placeholder="Job Title"
                          required
                        />
                        <div className="flex gap-3">
                          <Select defaultValue="ID">
                            <SelectTrigger className="w-24">
                              <SelectValue placeholder="Country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ID">+62 (ID)</SelectItem>
                              <SelectItem value="DE">+49 (DE)</SelectItem>
                              <SelectItem value="FR">+33 (FR)</SelectItem>
                              <SelectItem value="US">+1 (US)</SelectItem>
                              <SelectItem value="SG">+65 (SG)</SelectItem>
                              <SelectItem value="MY">+60 (MY)</SelectItem>
                            </SelectContent>
                          </Select>

                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Phone Number"
                            required
                            className="flex-1"
                          />
                        </div>
                      </>
                    )}

                    {/* Step 3 - Buyer in Europe */}
                    {step === 3 && (
                      <>
                        <Input placeholder="Managing Director / CEO" required />
                        <Input placeholder="VAT ID" required />
                        <Input placeholder="Registered Authority" required />
                        <Input
                          placeholder="Company Registration Number"
                          required
                        />
                      </>
                    )}

                    {/* Buttons */}
                    <div className="flex justify-end gap-2">
                      {step > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setStep(step - 1)}
                        >
                          Back
                        </Button>
                      )}
                      <Button type="submit">
                        {step < 3 ? "Next Step" : "Register"}
                      </Button>
                    </div>

                    {/* Footer Links */}
                    <div className="text-center text-sm">
                      Already have an account?{" "}
                      <a href="#" className="underline underline-offset-4">
                        Sign in
                      </a>
                    </div>
                    <div className="text-center text-sm">
                      Not a buyer?{" "}
                      <Link
                        href="/register/producer"
                        className="underline underline-offset-4"
                      >
                        Register here to become a supplier
                      </Link>
                    </div>
                  </div>
                </form>

                {/* Right-side Image */}
                <div className="bg-muted relative hidden md:block">
                  <Image
                    src="/images/placeholder-image.svg"
                    alt="Image"
                    width={500}
                    height={500}
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Terms and Privacy */}
            <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
              By clicking continue, you agree to our{" "}
              <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
