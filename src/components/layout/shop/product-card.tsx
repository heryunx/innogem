"use client";

import { Button } from "@/components/ui/button";
import { VerifiedIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  id: string;
  title: string;
  description: string;
  price: number;
  discount?: number; // in percentage
  image: string;
  isVerified?: boolean;
};

export default function ProductCard({
  id,
  title,
  description,
  price,
  discount,
  image,
  isVerified,
}: ProductCardProps) {
  const discountedPrice = discount
    ? (price - price * (discount / 100)).toFixed(2)
    : price.toFixed(2);

  return (
    <div className="bg-background rounded-lg shadow-sm overflow-hidden border border-transparent hover:border hover:border-innogem-green transition">
      <Link href={`/detail/${id}`} prefetch={false}>
        <div className="relative">
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="w-full h-48 object-cover"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
          />

          {discount && (
            <div className="absolute top-2 right-2 bg-red-500/90 text-white text-xs px-2 py-1 rounded shadow">
              {discount}% OFF
            </div>
          )}

          {isVerified && (
            <div className="absolute top-2 left-2 bg-innogem-green/90 text-white text-xs px-2 py-1 rounded-full shadow">
              <VerifiedIcon size={18} />
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-sm font-semibold line-clamp-1">{title}</h3>
          <p className="text-xs text-muted-foreground line-clamp-2">
            {description}
          </p>
          <div className="flex items-center justify-between mt-4">
            <div className="text-lg font-bold text-primary">
              ${discountedPrice}
            </div>
            <Button
              asChild
              className="bg-innogem-dark-green hover:bg-innogem-green text-white text-sm px-3 py-1"
            >
              <Link href={`/detail/${id}`}>Detail</Link>
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
}
