"use client";

import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import CustomsEntryDialog from "@/components/layout/dashboard/customs-dialog";
import { Eye } from "lucide-react";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [invoiceDialogOpen, setInvoiceDialogOpen] = useState(false);

  return (
    <div className="container mx-auto py-4 space-y-4 font-sans text-base">
      {/* Need Action Card */}
      <Card className="bg-white">
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center">
            <div>
              <h2 className="text-md">Need Action</h2>
              <p className="text-xs text-green-500">
                You must take action immediately.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-end">
              {!isApproved ? (
                <>
                  <Button variant="outline" className="bg-gray-50">
                    Reject
                  </Button>
                  <Button
                    className="bg-indigo-600 hover:bg-indigo-700"
                    onClick={() => setIsApproved(true)}
                  >
                    Approve
                  </Button>
                </>
              ) : (
                <Button
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => setInvoiceDialogOpen(true)}
                >
                  Send Invoice
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <Card className="bg-white">
        <CardContent className="p-4 sm:p-6">
          <div className="relative">
            <div className="absolute top-1.5 sm:top-2 left-0 right-0 h-0.5 bg-gray-200 z-0 mx-[10%]"></div>
            <div className="flex justify-between items-start gap-1 sm:gap-4">
              {[
                { label: "Quote", date: "Wed, 1 Ith Jan", active: true },
                { label: "Payment", date: "Wed, 3 Ith Jan", active: true },
                { label: "Shipment", date: "Wed, 10 Ith Jan", active: true },
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
            <Button variant="outline">Download Invoice</Button>
          </div>
        </CardContent>
      </Card>

      {/* Items Detail */}
      <Card className="bg-white">
        <CardContent className="p-4">
          <h2 className="text-xl font-bold">Items Detail</h2>
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 sm:p-4 text-xs sm:text-sm font-medium text-muted-foreground">
                  Product
                </th>
                <th className="text-center p-3 sm:p-4 text-xs sm:text-sm font-medium text-muted-foreground">
                  Qty
                </th>
              </tr>
            </thead>
            <tbody>
              <ItemRow />
              <ItemRow />
            </tbody>
          </table>
        </CardContent>
      </Card>

      <SendInvoiceDialog
        open={invoiceDialogOpen}
        setOpen={setInvoiceDialogOpen}
      />
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
        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full z-10 ${
          active ? "bg-[#5932EA]" : "bg-gray-400"
        }`}
      ></div>
      <p
        className={`mt-1 text-xs sm:text-sm font-medium ${
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
          <div className="h-12 w-12 sm:h-16 sm:w-16 bg-gray-200 flex items-center justify-center">
            <span className="text-xs text-gray-500">Image</span>
          </div>
          <span className="text-xs sm:text-sm">Product Name 1</span>
        </div>
      </td>
      <td className="p-3 sm:p-4 text-center text-xs sm:text-sm">X 1</td>
    </tr>
  );
}

function SendInvoiceDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Send Invoice</DialogTitle>
          <DialogDescription>
            Send invoice to the client for this shipment.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-2">
          <div>
            <label className="block text-sm font-medium">Recipient</label>
            <Input defaultValue="john.doe@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium">Amount</label>
            <Input defaultValue="$1,250.00" />
          </div>
          <div>
            <label className="block text-sm font-medium">Due Date</label>
            <Input type="date" defaultValue="2024-05-15" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <Textarea defaultValue="Please find attached the invoice for your recent shipment." />
          </div>
        </div>
        <div className="flex justify-end pt-4">
          <Button onClick={() => setOpen(false)}>Send Invoice</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
