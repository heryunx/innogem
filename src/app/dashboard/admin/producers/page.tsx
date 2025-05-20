"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Search,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
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

export default function ProducerManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [selectedProducer, setSelectedProducer] = useState<
    (typeof producers)[0] | null
  >(null);
  const [adminNotes, setAdminNotes] = useState("");
  const [reviewStatus, setReviewStatus] = useState<
    "published" | "rejected" | "pending"
  >("pending");

  const openReviewModal = (producer: (typeof producers)[0]) => {
    setSelectedProducer(producer);
    setReviewStatus(producer.status);
    setAdminNotes("");
    setReviewModalOpen(true);
  };

  const handleSubmitReview = () => {
    console.log({
      producerId: selectedProducer?.id,
      newStatus: reviewStatus,
      adminNotes,
    });

    setReviewModalOpen(false);
    setAdminNotes("");
  };

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
                <TableRow key={producer.id} className="hover:bg-gray-50">
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
                      onClick={() => openReviewModal(producer)}
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

      <Dialog open={reviewModalOpen} onOpenChange={setReviewModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Review Producer Registration</DialogTitle>
            <DialogDescription>
              Review the submitted data and approve or reject this registration.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {selectedProducer && (
              <>
                <div>
                  <h4 className="font-semibold">Company Info</h4>
                  <p>
                    <b>Company Name:</b> {selectedProducer.companyName}
                  </p>
                  <p>
                    <b>Industry:</b> {selectedProducer.industry}
                  </p>
                  <p>
                    <b>Address:</b> {selectedProducer.address}
                  </p>
                </div>

                <Separator className="my-2" />

                <div>
                  <h4 className="font-semibold">PIC Info</h4>
                  <p>
                    <b>Name:</b> {selectedProducer.picName}
                  </p>
                  <p>
                    <b>Email:</b> {selectedProducer.email}
                  </p>
                  <p>
                    <b>Phone:</b> {selectedProducer.phone}
                  </p>
                </div>

                <Separator className="my-2" />

                <div className="space-y-2">
                  <Label>Review Status</Label>
                  <Select
                    value={reviewStatus}
                    onValueChange={(
                      value: "published" | "rejected" | "pending"
                    ) => setReviewStatus(value)}
                  >
                    <SelectTrigger className="w-full text-sm">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="published">Approve</SelectItem>
                      <SelectItem value="rejected">Reject</SelectItem>
                      <SelectItem value="pending">Keep Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Admin Notes</Label>
                  <Textarea
                    placeholder="Add notes about this review..."
                    value={adminNotes}
                    onChange={(e) => setAdminNotes(e.target.value)}
                    className="min-h-[100px] text-sm"
                  />
                </div>
              </>
            )}
          </div>

          <DialogFooter className="flex justify-between sm:justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => setReviewModalOpen(false)}
              className="h-9 text-sm"
            >
              Cancel
            </Button>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setReviewStatus("rejected");
                  handleSubmitReview();
                }}
                className="h-9 text-sm border-red-200 text-red-500 hover:bg-red-50"
              >
                <XCircle className="h-4 w-4 mr-2" />
                Reject
              </Button>
              <Button
                onClick={() => {
                  setReviewStatus("published");
                  handleSubmitReview();
                }}
                className="h-9 text-sm bg-green-600 hover:bg-green-700"
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Approve
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: "published" | "rejected" | "pending";
}) {
  if (status === "published") {
    return (
      <Badge className="bg-green-100 text-green-700 text-xs">Approved</Badge>
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
    status: "published" as const,
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
