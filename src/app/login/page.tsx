"use client";

import { useState } from "react";
import { Footer } from "@/components/layout/shop/footer";
import { Navbar } from "@/components/layout/shop/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"buyer" | "producer">("buyer");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login with activeTab role here
    console.log("Logging in as:", activeTab);
  };

  return (
    <>
      <Navbar />
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-3xl">
          <div className="flex flex-col gap-6">
            {/* Card */}
            <Card className="overflow-hidden p-0">
              <CardContent className="grid p-0 md:grid-cols-2">
                <form onSubmit={handleLogin} className="p-6 md:p-8">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center text-center">
                      <h1 className="text-2xl font-bold">Welcome back</h1>
                      <p className="text-muted-foreground text-balance">
                        Login to your {activeTab} account
                      </p>

                      {/* Tabs */}
                      <div className="w-full grid grid-cols-2 gap-4 mb-2 mt-4">
                        <Button
                          onClick={() => setActiveTab("buyer")}
                          className={`px-4 py-2 text-sm font-medium transition ${
                            activeTab === "buyer"
                              ? "bg-primary text-white"
                              : "bg-muted text-muted-foreground hover:bg-accent"
                          }`}
                        >
                          Buyer
                        </Button>
                        <Button
                          onClick={() => setActiveTab("producer")}
                          className={`px-4 py-2 text-sm font-medium transition ${
                            activeTab === "producer"
                              ? "bg-primary text-white"
                              : "bg-muted text-muted-foreground hover:bg-accent"
                          }`}
                        >
                          Producer
                        </Button>
                      </div>
                    </div>

                    <div className="grid gap-3">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                      />
                    </div>

                    <div className="grid gap-3">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <a
                          href="#"
                          className="ml-auto text-sm underline-offset-2 hover:underline"
                        >
                          Forgot your password?
                        </a>
                      </div>
                      <Input id="password" type="password" required />
                    </div>

                    <Button type="submit" className="w-full">
                      Login
                    </Button>

                    <div className="text-center text-sm">
                      Don&apos;t have an account?{" "}
                      <a href="#" className="underline underline-offset-4">
                        Sign up
                      </a>
                    </div>
                  </div>
                </form>

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
