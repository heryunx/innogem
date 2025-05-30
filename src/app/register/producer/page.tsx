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
import { Textarea } from "@/components/ui/textarea";

export default function RegisterProducerPage() {
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
                    if (step < 3) {
                      setStep(step + 1);
                    } else {
                      console.log("Submitting registration...");
                    }
                  }}
                >
                  <div className="flex flex-col gap-6">
                    {/* Title & Step Indicator */}
                    <div className="flex items-center justify-between">
                      <h1 className="text-2xl font-bold">
                        Register for supplier
                      </h1>
                      <span className="text-sm text-muted-foreground">
                        Page {step}/3
                      </span>
                    </div>

                    {/* Step 1 */}
                    {step === 1 && (
                      <>
                        <div className="grid gap-3">
                          <Input
                            id="email"
                            type="email"
                            placeholder="Business email"
                            required
                          />
                        </div>

                        <div className="grid gap-3">
                          <Input
                            id="password"
                            type="password"
                            placeholder="Create Password"
                            required
                          />
                        </div>

                        <div className="grid gap-3">
                          <Input
                            id="confirm-password"
                            type="password"
                            placeholder="Confirm Password"
                            required
                          />
                        </div>
                      </>
                    )}

                    {/* Step 2 */}
                    {step === 2 && (
                      <>
                        <div className="flex gap-3">
                          <Input
                            placeholder="First/Given Name"
                            required
                            className="w-full"
                          />
                          <Input placeholder="Last/Family Name" required />
                        </div>

                        <div className="grid gap-1">
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="--Select Job Title--" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Manager">Manager</SelectItem>
                              <SelectItem value="Director">Director</SelectItem>
                              <SelectItem value="Owner">Owner</SelectItem>
                              <SelectItem value="Purchasing">
                                Purchasing
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Input placeholder="Company Name" required />

                        <div className="flex gap-3">
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Indonesia" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ID">Indonesia</SelectItem>
                            </SelectContent>
                          </Select>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="--Select State/Province--" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="DKI Jakarta">
                                DKI Jakarta
                              </SelectItem>
                              <SelectItem value="Jawa Barat">
                                Jawa Barat
                              </SelectItem>
                              <SelectItem value="Jawa Tengah">
                                Jawa Tengah
                              </SelectItem>
                              <SelectItem value="Jawa Timur">
                                Jawa Timur
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex gap-3">
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="--Select City--" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Jakarta">Jakarta</SelectItem>
                              <SelectItem value="Bandung">Bandung</SelectItem>
                              <SelectItem value="Surabaya">Surabaya</SelectItem>
                              <SelectItem value="Semarang">Semarang</SelectItem>
                            </SelectContent>
                          </Select>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="--Select District--" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Central Jakarta">
                                Central Jakarta
                              </SelectItem>
                              <SelectItem value="West Jakarta">
                                West Jakarta
                              </SelectItem>
                              <SelectItem value="East Jakarta">
                                East Jakarta
                              </SelectItem>
                              <SelectItem value="North Jakarta">
                                North Jakarta
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Input
                          className="w-1/2"
                          placeholder="Zip/Postal Code"
                          required
                        />

                        <Textarea placeholder="Address Line" required />

                        <div className="flex gap-3">
                          <Select defaultValue="ID">
                            <SelectTrigger className="w-24">
                              <SelectValue placeholder="Code" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="CN">+86</SelectItem>
                              <SelectItem value="ID">+62</SelectItem>
                            </SelectContent>
                          </Select>
                          <Input
                            type="tel"
                            placeholder="Tel Number"
                            required
                            className="flex-1"
                          />
                        </div>
                      </>
                    )}

                    {/* Step 3 */}
                    {step === 3 && (
                      <>
                        <Input
                          placeholder="President Director / CEO"
                          required
                        />
                        <Input
                          placeholder="Tax Identification Number (NPWP)"
                          required
                        />
                        <Input
                          placeholder="Issuing Authority (e.g., OSS, BKPM)"
                          required
                        />
                        <Input
                          placeholder="Business Registration Number (NIB)"
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
