"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Navbar } from "@/components/layout/shop/navbar";
import { Footer } from "@/components/layout/shop/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { useProfileStore } from "@/stores/useProfileStore";

type FormValues = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const router = useRouter();
  const { fetchProfile } = useProfileStore();

  const onSubmit = async (data: FormValues) => {
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.error) {
      toast.error("Login failed. Please check your credentials.");
    } else if (res?.ok) {
      await fetchProfile();
      router.push("/");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-3xl">
          <div className="flex flex-col gap-6">
            <Card className="overflow-hidden p-0">
              <CardContent className="grid p-0 md:grid-cols-2">
                <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col text-center">
                      <h1 className="text-xl font-bold">Welcome back</h1>
                      <p className="text-sm text-muted-foreground text-balance">
                        Login to your account
                      </p>
                    </div>

                    <div className="grid gap-3">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">
                          {errors.email.message}
                        </p>
                      )}
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
                      <Input
                        id="password"
                        type="password"
                        {...register("password", {
                          required: "Password is required",
                        })}
                      />
                      {errors.password && (
                        <p className="text-sm text-red-500">
                          {errors.password.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Logging in..." : "Login"}
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
