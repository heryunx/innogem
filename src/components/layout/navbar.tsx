import Link from "next/link";
import { Input } from "@/components/ui/input";
import { ShoppingCart, User } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container px-6 md:px-10 flex h-16 items-center justify-between mx-auto">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl">
            Innogem
          </Link>
        </div>
        <div className="hidden md:flex md:w-[460px]">
          <Input
            type="search"
            placeholder="Search"
            className="rounded-md border-gray-200"
          />
        </div>
        {/* <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="font-medium">
            Home
          </Link>
          <Link
            href="/about"
            className="text-muted-foreground hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground hover:text-foreground"
          >
            Contact Us
          </Link>
          <Link
            href="/blog"
            className="text-muted-foreground hover:text-foreground"
          >
            Blog
          </Link>
        </nav> */}
        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="text-muted-foreground hover:text-foreground"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Link>
          <Link
            href="/account"
            className="text-muted-foreground hover:text-foreground"
          >
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
