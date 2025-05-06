"use client";

import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CustomsEntryDialog from "@/components/layout/dashboard/customs-dialog";
import { Eye } from "lucide-react";

export default function OrderDetail() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container mx-auto py-4 px-4 space-y-6 font-sans text-base">
      {/* Timeline */}
      <Card className="bg-white">
        <CardContent className="p-4 sm:p-6">
          <div className="relative">
            <div className="absolute top-1.5 sm:top-2 left-0 right-0 h-0.5 bg-gray-200 z-0 mx-[10%]"></div>
            <div className="flex justify-between items-start gap-1 sm:gap-4">
              {[
                {
                  label: "Quote",
                  date: "Wed, 1 Ith Jan",
                  active: true,
                },
                {
                  label: "Payment",
                  date: "Wed, 3 Ith Jan",
                  active: true,
                },
                {
                  label: "Shipment",
                  date: "Wed, 10 Ith Jan",
                  active: true,
                },
                { label: "Shipped", date: "Wed, 19 Ith Jan", active: false },
                { label: "Completed", date: "Wed, 20 Ith Jan", active: false },
              ].map((item, index) => (
                <TimelinePoint key={index} {...item} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Order Info */}
      <Card className="bg-white">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <InfoItem label="No Order" value="121XXX2025" />
              <InfoItem label="Customer" value="John Doe" />
              <InfoItem
                label="Delivery Address"
                value={
                  <div className="space-y-1">
                    <p>J***n Doe, 089*****90</p>
                    <p className="break-words">
                      Jalan Yuli Kuspranaji Gabahan, RT.5/RW.12,
                    </p>
                    <p className="break-words">
                      Sumberadi, Mlati (Dusun GABAHAN RT5/RW12),
                    </p>
                    <p className="break-words">
                      KAB. SLEMAN, MLATI, DI YOGYAKARTA, ID, 55284
                    </p>
                  </div>
                }
              />
            </div>
            <div className="space-y-4">
              <InfoItem label="No Receipt" value="121XXX2025" />
              <InfoItem label="Method Delivery" value="Ocean 2FL" />
              <InfoItem label="Dimension" value="30 x 30 x 9 CM" />
            </div>
          </div>
          <Separator className="my-2" />
          <div className="w-full flex gap-4 justify-center sm:justify-end mt-4">
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => setOpen(true)}
            >
              <Eye className="h-4 w-4" />
              View Documents
            </Button>
            <CustomsEntryDialog open={open} setOpen={setOpen} />
            <Button variant="outline" className="">
              Download Invoice
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Items Detail */}
      <Card className="bg-white">
        <CardContent className="p-4">
          <h2 className="text-xl font-bold">Items Detail</h2>
          <div className="w-full">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 sm:p-4 text-xs sm:text-sm font-medium text-muted-foreground">
                    Product
                  </th>
                  <th className="text-center p-3 sm:p-4 text-xs sm:text-sm font-medium text-muted-foreground">
                    Qty
                  </th>
                  <th className="text-center p-3 sm:p-4 text-xs sm:text-sm font-medium text-muted-foreground">
                    Price
                  </th>
                  <th className="text-right p-3 sm:p-4 text-xs sm:text-sm font-medium text-muted-foreground">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                <ItemRow />
                <ItemRow />
              </tbody>
            </table>
          </div>
          <div className="p-3 sm:p-4 space-y-2">
            <div className="flex justify-between text-xs sm:text-sm">
              <span className="font-medium">Subtotal Order</span>
              <span className="font-medium">$3,200,000</span>
            </div>
            <div className="flex justify-between text-xs sm:text-sm">
              <span className="font-medium">Fees $ Charges</span>
              <span className="font-medium">$200,000</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between text-sm sm:text-base">
              <span className="font-bold">Total Order</span>
              <span className="font-bold">$3,000,000</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function TimelinePoint({
  label,
  date,
  active,
}: {
  label: string;
  date: string;
  active: boolean;
}) {
  return (
    <div className="flex-1 min-w-0 flex flex-col items-center text-center px-1">
      <div
        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full flex items-center justify-center z-10 ${
          active ? "bg-[#5932EA]" : "bg-gray-400"
        }`}
      ></div>
      <p
        className={`mt-1 text-xs sm:text-sm font-medium break-words ${
          active ? "text-[#5932EA]" : "text-gray-500"
        }`}
      >
        {label}
      </p>
      <p className="text-[10px] sm:text-xs text-gray-500">{date}</p>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500 flex-shrink-0">
        <span className="text-xs sm:text-sm">#</span>
      </div>
      <div>
        <h3 className="text-sm sm:text-base font-medium">{label}</h3>
        <div className="text-xs sm:text-sm text-gray-700">{value}</div>
      </div>
    </div>
  );
}

function ItemRow() {
  return (
    <tr className="border-b">
      <td className="p-3 sm:p-4">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="h-12 w-12 sm:h-16 sm:w-16 bg-gray-200 flex items-center justify-center flex-shrink-0">
            <span className="text-xs text-gray-500">Image</span>
          </div>
          <span className="text-xs sm:text-sm">Product Name 1</span>
        </div>
      </td>
      <td className="p-3 sm:p-4 text-center text-xs sm:text-sm">X 1</td>
      <td className="p-3 sm:p-4 text-center text-xs sm:text-sm">1000</td>
      <td className="p-3 sm:p-4 text-right text-xs sm:text-sm">$1,200</td>
    </tr>
  );
}
