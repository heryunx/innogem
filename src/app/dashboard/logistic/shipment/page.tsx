"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileOutput,
  Search,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  return (
    <div className="container mx-auto py-4 space-y-4 font-sans text-base">
      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="h-8 w-8 rounded-full bg-amber-50 flex items-center justify-center">
              <Zap className="h-4 w-4 text-amber-500" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Total Shipment</p>
              <h3 className="text-xl font-bold">256K</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="h-4 w-4 rounded-full bg-green-50 flex items-center justify-center">
              <CheckCircle2 className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Approved</p>
              <h3 className="text-xl font-bold">255K</h3>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <div className="h-4 w-4 rounded-full bg-red-50 flex items-center justify-center">
              <FileOutput className="h-6 w-6 text-red-400" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Rejected</p>
              <h3 className="text-xl font-bold">1K</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transactions Section */}
      <div className="bg-white rounded-lg border p-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">All Shipment</h2>
          <p className="text-xs text-muted-foreground">
            List of all shipment records
          </p>
        </div>

        <div className="flex flex-row justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-8 text-xs"
            />
          </div>

          <div className="flex gap-2">
            <Badge variant="secondary">
              <div className="flex items-center gap-1">
                <span className="text-xs text-muted-foreground">Status:</span>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full border-0 text-xs">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent className="text-xs">
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                    <SelectItem value="pending">Need Action</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </Badge>
            <Badge variant="secondary">
              <div className="flex items-center gap-1">
                <span className="text-muted-foreground text-xs">Sort by:</span>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-full border-0 text-xs">
                    <SelectValue placeholder="Newest" />
                  </SelectTrigger>
                  <SelectContent className="text-xs">
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="amount">Amount</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </Badge>
          </div>
        </div>

        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Shipment ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Route</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Dates</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Approval</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((shipment) => (
                <TableRow
                  key={shipment.id}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() => router.push(`/dashboard/logistic/shipment/detail`)}
                >
                  <TableCell className="font-medium">
                    {shipment.shipmentId}
                  </TableCell>
                  <TableCell className="text-sm">
                    <div className="font-semibold">{shipment.product}</div>
                    <div className="text-xs text-muted-foreground">
                      {shipment.company}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">
                    <div>📍 {shipment.routeFrom}</div>
                    <div>📍 {shipment.routeTo}</div>
                  </TableCell>
                  <TableCell className="text-sm">{shipment.type}</TableCell>
                  <TableCell className="text-sm">
                    <div>📅 {shipment.departure}</div>
                    <div>🕒 {shipment.arrival}</div>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-black text-white">In Transit</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-700">
                      Approved
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Update Location
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <p className="text-sm text-muted-foreground">
            Showing data 1 to 8 of 256K entries
          </p>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>

            {[1, 2, 3, 4].map((page) => (
              <PaginationButton
                key={page}
                page={page}
                currentPage={currentPage}
                onClick={() => setCurrentPage(page)}
              />
            ))}

            <span className="text-sm">...</span>

            <PaginationButton
              page={40}
              currentPage={currentPage}
              onClick={() => setCurrentPage(40)}
            />

            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(Math.min(40, currentPage + 1))}
              disabled={currentPage === 40}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: "paid" | "rejected" | "pending" }) {
  if (status === "paid") {
    return (
      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
        Paid
      </Badge>
    );
  }
  if (status === "rejected") {
    return (
      <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
        Rejected
      </Badge>
    );
  }
  return (
    <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
      Pending
    </Badge>
  );
}

function PaginationButton({
  page,
  currentPage,
  onClick,
}: {
  page: number;
  currentPage: number;
  onClick: () => void;
}) {
  const isActive = page === currentPage;
  return (
    <Button
      variant={isActive ? "default" : "outline"}
      size="icon"
      className={isActive ? "bg-primary text-primary-foreground" : ""}
      onClick={onClick}
    >
      {page}
    </Button>
  );
}

// Sample data
const transactions = [
  {
    id: 1,
    shipmentId: "SHP-2023-1234",
    product: "Organic Coffee Beans",
    company: "Eco Beans BV",
    routeFrom: "Jakarta, Indonesia",
    routeTo: "Rotterdam, Netherlands",
    type: "CIF",
    departure: "March 28, 2024",
    arrival: "April 15, 2024",
    status: "in_transit",
    approval: "approved",
  },
  {
    id: 2,
    shipmentId: "SHP-2023-1089",
    product: "Wooden Handicrafts",
    company: "Amsterdam Home Goods",
    routeFrom: "Surabaya, Indonesia",
    routeTo: "Amsterdam, Netherlands",
    type: "FOB",
    departure: "March 25, 2024",
    arrival: "April 12, 2024",
    status: "in_transit",
    approval: "approved",
  },
];
