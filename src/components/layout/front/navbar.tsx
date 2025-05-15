"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full text-white bg-innogem-blue dark:bg-innogem-dark-green dark:text-white">
      <div className="flex flex-col max-w-screen-xl px-8 mx-auto md:items-center md:justify-between md:flex-row">
        <div className="flex flex-row items-center justify-between py-6">
          <div className="flex justify-center items-center gap-2 md:mt-8">
            <Image
              src="/images/logo-1.png"
              alt="Logo"
              width={40}
              height={40}
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
          <button
            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            onClick={() => setOpen(!open)}
          >
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-6 h-6 text-white"
            >
              {!open ? (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>

        <nav
          className={`${
            open ? "flex h-auto py-4" : "hidden h-0 md:h-auto"
          } md:flex flex-col flex-grow md:items-center pb-4 md:pb-0 md:justify-end md:flex-row origin-top transition-all duration-300`}
        >
          <Link
            href="/front"
            className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-[#3A9C90] focus:outline-none focus:shadow-outline"
          >
            Home
          </Link>
          <Link
            href="#"
            className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-[#3A9C90] focus:outline-none focus:shadow-outline"
          >
            Blog
          </Link>
          <Link
            href="/front/about-us"
            className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-[#3A9C90] focus:outline-none focus:shadow-outline"
          >
            About Us
          </Link>

          {/* Login */}
          <Link
            href="#"
            className="px-6 py-2 mt-2 text-sm text-white border border-white rounded-full md:mt-8 md:ml-4 hover:bg-white hover:text-[#263A72] transition"
          >
            Login
          </Link>

          {/* Sign Up */}
          <Link
            href="#"
            className="px-6 py-2 mt-2 text-sm text-white bg-[#3A9C90] rounded-full md:mt-8 md:ml-4 hover:bg-[#2f746c] transition"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </div>
  );
}
