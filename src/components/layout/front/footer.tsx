"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-innogem-blue dark:bg-innogem-dark-blue text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Logo dan Tagline */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="flex justify-center items-center space-x-4">
            <div className="flex justify-center items-center gap-2">
              <Image
                src="/images/logo-1.png"
                alt="Logo"
                width={50}
                height={50}
                className=""
                priority
              />
              <Link
                href="/front"
                className="text-lg relative z-50 font-bold tracking-widest text-white dark:text-white rounded-lg focus:outline-none focus:shadow-outline"
              >
                Innogem
              </Link>
            </div>
            <span className="border-l border-gray-500 text-sm pl-5 py-2 font-semibold">
              Your Gateway to Global Trade
            </span>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <form
          className="text-center pb-16"
          onSubmit={(e) => e.preventDefault()}
        >
          <label
            htmlFor="newsletter-email"
            className="text-gray-300 font-semibold block mb-4"
          >
            Subscribe to get our Newsletter
          </label>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full sm:w-auto flex-grow py-3 px-5 rounded-full bg-transparent border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Email for newsletter subscription"
            />
            <button
              type="submit"
              className="w-full sm:w-auto font-semibold px-8 py-3 rounded-full bg-gradient-to-r from-[#545AE7] to-[#393FCF] hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </div>
        </form>

        {/* Navigation Links */}
        <nav
          className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8"
          aria-label="Footer navigation"
        >
          <Link
            href="/about-us"
            passHref
            className="hover:text-blue-300 transition-colors"
          >
            About Us
          </Link>
          <span className="text-gray-500" aria-hidden="true">
            |
          </span>
          <Link
            href="#"
            passHref
            className="hover:text-blue-300 transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-gray-500" aria-hidden="true">
            |
          </span>
          <Link
            href="#"
            passHref
            className="hover:text-blue-300 transition-colors"
          >
            Terms and Conditions
          </Link>
        </nav>

        {/* Copyright dan Credits */}
        <div className="text-center text-gray-400 text-sm pt-8 border-t border-gray-700">
          <p className="mb-3">
            © {new Date().getFullYear()} Innogem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
