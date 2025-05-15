"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="fixed bottom-4 right-4 cursor-pointer bg-white dark:bg-[#191919] text-[#37352f] dark:text-[#ffffffcf] hover:bg-hover-background active:bg-active-background rounded-md border border-button-border-color p-1.5 [transition:background_20ms_ease-in,_color_0.15s] z-50"
      title="Toggle theme"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="w-6 h-6 dark:hidden" />
      <Moon className="w-6 h-6 hidden dark:block" />
    </button>
  );
}
