"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface EstimatedCostModalProps {
  estimatedProducts: {
    id: number;
    name: string;
    price: number;
    fees: number;
    netPrice: number;
  }[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function EstimatedCostModal({
  estimatedProducts,
  open,
  onOpenChange,
}: EstimatedCostModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[80vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            <span>Estimated Cost per Product</span>
            <button
              onClick={() => onOpenChange(false)}
              aria-label="Close"
              className="text-gray-500 hover:text-gray-700"
            ></button>
          </DialogTitle>
        </DialogHeader>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Product</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Fees</TableHead>
                <TableHead className="text-right font-semibold">
                  Net Price
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {estimatedProducts.map((p) => (
                <TableRow key={p.id} className="border-b">
                  <TableCell>{p.name}</TableCell>
                  <TableCell className="text-right">
                    ${p.price.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    ${p.fees.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right font-semibold text-green-600">
                    ${p.netPrice.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4 flex justify-end">
            <Button onClick={() => onOpenChange(false)}>Close</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
