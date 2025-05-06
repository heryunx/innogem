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
              <p className="text-xs text-muted-foreground">Total Orders</p>
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
          <h2 className="text-xl font-semibold">All Orders</h2>
          <p className="text-xs text-muted-foreground">
            List of all orders made by users
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
                <TableHead>No Invoice</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Total Payment</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow
                  key={transaction.id}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() =>
                    router.push(`/dashboard/producer/orders/detail`)
                  }
                >
                  <TableCell className="text-xs">
                    {transaction.orderNo}
                  </TableCell>
                  <TableCell className="text-xs">
                    {transaction.product}
                  </TableCell>
                  <TableCell className="text-xs">
                    {transaction.totalPayment}
                  </TableCell>
                  <TableCell className="text-xs">{transaction.date}</TableCell>
                  <TableCell>
                    <StatusBadge status={transaction.status} />
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
    orderNo: "INV-20240501-001",
    product: "Kacang Mayasi Internasional",
    totalPayment: "$1,000,000",
    date: "2025-05-01",
    payment: "Bank Transfer",
    status: "pending" as const,
  },
  {
    id: 2,
    orderNo: "INV-20240501-002",
    product: "Kacang Mayasi Internasional",
    totalPayment: "$1,000",
    date: "2025-05-01",
    payment: "Credit Card",
    status: "rejected" as const,
  },
  {
    id: 3,
    orderNo: "INV-20240501-003",
    product: "Kacang Mayasi Internasional",
    totalPayment: "$500,000",
    date: "2025-04-30",
    payment: "Credit Card",
    status: "paid" as const,
  },
  {
    id: 4,
    orderNo: "INV-20240430-004",
    product: "Kacang Mayasi Internasional",
    totalPayment: "$2,000",
    date: "2025-04-30",
    payment: "Credit Card",
    status: "paid" as const,
  },
];
