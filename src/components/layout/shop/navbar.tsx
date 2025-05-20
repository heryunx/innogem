import Link from "next/link";
import { Input } from "@/components/ui/input";
import { ShoppingCart, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
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

        {/* Icons */}
        <div className="flex items-center gap-4 sm:gap-8">
          <Link href="/cart" className="text-white hover:text-innogem-green">
            <ShoppingCart className="h-6 w-6 sm:h-7 sm:w-7" />
            <span className="sr-only">Cart</span>
          </Link>

          {/* User dropdown */}
          <div className="relative group">
            <div className="text-white hover:text-innogem-green">
              <User className="h-6 w-6 sm:h-7 sm:w-7" />
              <span className="sr-only">Account</span>
            </div>

            {/* Dropdown menu */}
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
              <Link
                href="/logout"
                className="block px-4 py-2 text-sm text-innogem-blue hover:bg-red-500 hover:text-white hover:rounded-md"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
