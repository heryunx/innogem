"use client";
import "aos/dist/aos.css";
import AOS from "aos";
import { ReactNode, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/layout/front/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeToggle from "@/components/theme-toggle";

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
}

export default function MainLayout({
  children,
  title = "Skilline Landing Page",
}: MainLayoutProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi (ms)
      once: false,
    });
  }, []);

  return (
    <div className="antialiased font-poppins">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Skilline - Online Learning Platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />

        <main>
          {children}
          <ThemeToggle />
        </main>
      </ThemeProvider>
    </div>
  );
}
