"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PaginationButton } from "@/components/layout/dashboard/pagination-button";
import SummaryCards from "@/components/layout/dashboard/summary-cards";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";

export default function ProducerManagement() {
  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();

  return (
    <div className="container mx-auto py-4 space-y-4 font-sans text-base">
      <SummaryCards
        title="Producers"
        valuetotal={256}
        valueapproved={123}
        valuerejected={17}
      />
      <div className="bg-white rounded-lg p-4 space-y-4 sm:p-6 shadow-sm border">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold">
              All Producer Registrations
            </h1>
            <p className="text-sm text-muted-foreground">
              Registered suppliers or producers
            </p>
          </div>

          <div className="flex sm:items-center gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-72">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-8 text-sm"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                Sort by:
              </span>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[120px] text-sm h-9">
                  <SelectValue placeholder="Newest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="rounded border overflow-x-auto">
          <Table className="min-w-[700px]">
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>Company Name</TableHead>
                <TableHead>PIC Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {producers.map((producer) => (
                <TableRow
                  key={producer.id}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() =>
                    router.push(`/dashboard/admin/producers/detail`)
                  }
                >
                  <TableCell>{producer.companyName}</TableCell>
                  <TableCell>{producer.picName}</TableCell>
                  <TableCell>{producer.email}</TableCell>
                  <TableCell>
                    <StatusBadge status={producer.status} />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant={
                        producer.status === "pending" ? "default" : "outline"
                      }
                      size="sm"
                      className="h-8 text-xs"
                    >
                      {producer.status === "pending" ? "Review" : "View"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            Showing data 1 to 5 of 256 entries
          </p>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            {[1, 2, 3].map((page) => (
              <PaginationButton
                key={page}
                page={page}
                currentPage={currentPage}
                onClick={() => setCurrentPage(page)}
              />
            ))}
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: "verified" | "rejected" | "pending";
}) {
  if (status === "verified") {
    return (
      <Badge className="bg-green-100 text-green-700 text-xs">Verified</Badge>
    );
  } else if (status === "rejected") {
    return <Badge className="bg-red-100 text-red-700 text-xs">Rejected</Badge>;
  }
  return (
    <Badge className="bg-orange-100 text-orange-700 text-xs">Pending</Badge>
  );
}

const producers = [
  {
    id: 1,
    companyName: "PT Sumber Makmur",
    industry: "Food Processing",
    address: "Jl. Industri No. 123, Jakarta",
    picName: "Andi Santoso",
    email: "andi@sumbermakmur.com",
    phone: "0812-3456-7890",
    status: "pending" as const,
  },
  {
    id: 2,
    companyName: "CV Aneka Logistik",
    industry: "Logistics",
    address: "Jl. Raya Bekasi No. 10, Bekasi",
    picName: "Budi Wijaya",
    email: "budi@anekalogistik.co.id",
    phone: "0821-0000-1111",
    status: "verified" as const,
  },
  {
    id: 3,
    companyName: "UD Maju Terus",
    industry: "Agriculture",
    address: "Desa Sukamaju RT 01 RW 02, Sumedang",
    picName: "Siti Aminah",
    email: "siti@majuterus.id",
    phone: "0813-2345-6789",
    status: "rejected" as const,
  },
];
