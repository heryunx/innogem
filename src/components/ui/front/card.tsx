import Link from "next/link";

export interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg?: string;
  className?: string;
  href?: string;
}

export default function Card({
  icon,
  title,
  description,
  iconBg = "#5B72EE",
  className = "",
  href,
}: CardProps) {
  const cardContent = (
    <div
      className={`
        bg-white dark:bg-innogem-dark-green text-gray-800 dark:text-gray-100
        shadow-xl hover:shadow-2xl transition-shadow
        p-6 rounded-xl flex flex-col h-full
        text-center
        ${href ? "cursor-pointer hover:scale-[1.02] transition-transform" : ""}
        ${className}
      `}
    >
      <div
        style={{ background: iconBg }}
        className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
      >
        {icon}
      </div>
      <div className="flex flex-col flex-grow justify-between mt-[-2rem]">
        <h1 className="font-semibold text-xl mb-3 lg:px-14">{title}</h1>
        <p className="px-4 text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );

  return href ? (
    <Link href={href} passHref>
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
}
