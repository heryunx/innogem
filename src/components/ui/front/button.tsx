import Link from "next/link";
import { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "secondary" | "gradient" | "link";
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const baseClasses =
    "px-5 py-3 rounded-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out";

  const variants: Record<string, string> = {
    primary:
      "bg-innogem-green text-white dark:bg-innogem-green dark:hover:bg-innogem-green dark:text-white",
    outline:
      "border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-gray-900",
    secondary:
      "bg-white text-gray-800 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",
    gradient:
      "text-white bg-gradient-to-r from-blue-500 to-indigo-700 hover:from-blue-600 hover:to-indigo-800",
    link: "bg-transparent px-0 py-0 rounded-none text-yellow-600 hover:underline hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300 hover:scale-100 transform-none transition-none",
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      passHref
    >
      {children}
    </Link>
  );
}
