"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";
import { useProfileStore } from "@/stores/useProfileStore";

export function Navbar() {
  const { data: session, status } = useSession();
  const { profile } = useProfileStore();
  console.log("profile", profile);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-innogem-blue bg-innogem-blue">
      <div className="container px-6 md:px-10 flex h-16 items-center justify-between mx-auto">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-white font-bold text-xl">
            Innogem
          </Link>
        </div>

        {/* Search Input + Button */}
        <div className="flex md:w-[460px]">
          <div className="flex w-full">
            <Input
              type="search"
              placeholder="Search"
              className="text-xs md:text-none rounded-none rounded-l-md bg-white dark:bg-white border-r-0 focus:outline-none focus:ring-0"
            />
            <Button
              type="submit"
              className="rounded-l-none bg-white border border-l-0 hover:bg-innogem-green hover:text-white text-gray-600"
            >
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 sm:gap-8">
          {status === "loading" ? (
            <p className="text-white text-sm">Loading...</p>
          ) : session?.user ? (
            <>
              <Link
                href="/cart"
                className="text-white hover:text-innogem-green relative"
              >
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-3 h-3 bg-innogem-green text-white text-xs rounded-full">
                  0
                </span>
              </Link>
              <div className="relative group">
                <Avatar>
                  <AvatarFallback>
                    {profile?.full_name?.charAt(0) || "IN"}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute right-0 mt-0 w-40 bg-white border rounded-md shadow-lg hidden group-hover:block z-50">
                  <Link
                    href="/account/profile"
                    className="block px-4 py-2 text-sm text-innogem-blue hover:bg-innogem-green hover:text-white hover:rounded-md"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/account/settings"
                    className="block px-4 py-2 text-sm text-innogem-blue hover:bg-innogem-green hover:text-white hover:rounded-md"
                  >
                    My Orders
                  </Link>
                  <Button
                    variant={"ghost"}
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="w-full text-left block px-4 py-2 text-sm text-innogem-blue hover:bg-red-500 hover:text-white hover:rounded-md"
                  >
                    Logout
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <Link
              href="/login"
              className="text-white hover:text-innogem-green text-sm font-medium"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
