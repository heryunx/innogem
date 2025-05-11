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
import { useRouter } from "next/navigation";
import SummaryCards from "@/components/layout/dashboard/summary-cards";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ProductManagement() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);
  const [adminNotes, setAdminNotes] = useState("");
  const [reviewStatus, setReviewStatus] = useState<
    "published" | "rejected" | "pending"
  >("pending");

  const openReviewModal = (product: (typeof products)[0]) => {
    setSelectedProduct(product);
    setReviewStatus(product.status);
    setAdminNotes("");
    setReviewModalOpen(true);
  };

  const handleSubmitReview = () => {
    // Here you would handle the admin review submission
    console.log({
      productId: selectedProduct?.id,
      newStatus: reviewStatus,
      adminNotes,
    });

    // Close the modal and reset form
    setReviewModalOpen(false);
    setAdminNotes("");
  };

  return (
    <div className="container mx-auto py-4 space-y-4 font-sans text-base">
      {/* Summary Cards */}
      <SummaryCards
        title="Products"
        valuetotal={1902}
        valueapproved={1200}
        valuerejected={89}
      />
      <div className="bg-white rounded-lg p-4 space-y-4 sm:p-6 shadow-sm border">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold">All Products</h1>
            <p className="text-sm text-muted-foreground">Active products</p>
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
                  <SelectItem value="price-high">Price: High</SelectItem>
                  <SelectItem value="price-low">Price: Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="rounded border overflow-x-auto">
          <Table className="min-w-[700px]">
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="text-muted-foreground">Product</TableHead>
                <TableHead className="text-muted-foreground">Price</TableHead>
                <TableHead className="text-muted-foreground">Stock</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-muted-foreground">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() =>
                    router.push(`/dashboard/admin/products/detail`)
                  }
                >
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-gray-200 flex items-center justify-center rounded border">
                        <span className="text-xs text-gray-500">Image</span>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          No Product: {product.productId}
                        </p>
                        <p className="font-medium">{product.name}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    ${product.price}
                  </TableCell>
                  <TableCell className="font-medium">{product.stock}</TableCell>
                  <TableCell>
                    <StatusBadge status={product.status} />
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {product.status === "pending" ? (
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => openReviewModal(product)}
                          className="h-8 text-xs"
                        >
                          Review
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            router.push(
                              `/dashboard/admin/products/${product.id}`
                            )
                          }
                          className="h-8 text-xs"
                        >
                          View
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            Showing data 1 to 5 of 256K entries
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
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
              className="h-8 w-8"
              onClick={() => setCurrentPage(Math.min(40, currentPage + 1))}
              disabled={currentPage === 40}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Admin Review Modal */}
      <Dialog open={reviewModalOpen} onOpenChange={setReviewModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Review Product</DialogTitle>
            <DialogDescription>
              Review product details and approve or reject this product for
              publication.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {selectedProduct && (
              <>
                <div className="flex items-start gap-4">
                  <div className="h-20 w-20 bg-gray-200 flex items-center justify-center rounded border flex-shrink-0">
                    <span className="text-xs text-gray-500">Image</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">{selectedProduct.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Product ID: {selectedProduct.productId}
                    </p>
                    <div className="flex gap-4 text-sm">
                      <span className="font-medium">
                        Price: ${selectedProduct.price}
                      </span>
                      <span className="font-medium">
                        Stock: {selectedProduct.stock}
                      </span>
                    </div>
                  </div>
                </div>

                <Separator className="my-2" />

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Product Description</h4>
                  <p className="text-sm text-muted-foreground">
                    This is a sample product description. The actual description
                    would be loaded from the product data.
                  </p>
                </div>

                <Separator className="my-2" />

                <div className="space-y-2">
                  <Label htmlFor="status" className="text-sm font-medium">
                    Review Status
                  </Label>
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
                      <SelectItem value="published">
                        Approve & Publish
                      </SelectItem>
                      <SelectItem value="rejected">Reject</SelectItem>
                      <SelectItem value="pending">Keep Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-sm font-medium">
                    Admin Notes
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Add notes about this product review..."
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
                className="h-9 text-sm border-red-200 text-red-500 hover:text-red-500 hover:bg-red-50 hover:border-red-200"
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
      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-xs">
        Published
      </Badge>
    );
  }

  if (status === "rejected") {
    return (
      <Badge className="bg-red-100 text-red-700 hover:bg-red-100 text-xs">
        Rejected
      </Badge>
    );
  }

  return (
    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 text-xs">
      Pending
    </Badge>
  );
}

// Sample data
const products = [
  {
    id: 1,
    productId: "121XXX2025",
    name: "Product Name 1",
    price: "83",
    stock: 2000,
    status: "pending" as const,
  },
  {
    id: 2,
    productId: "121XXX2025",
    name: "Product Name 2",
    price: "99",
    stock: 1500,
    status: "published" as const,
  },
  {
    id: 3,
    productId: "121XXX2025",
    name: "Product Name 3",
    price: "50",
    stock: 500,
    status: "rejected" as const,
  },
  {
    id: 4,
    productId: "121XXX2025",
    name: "Product Name 4",
    price: "70",
    stock: 750,
    status: "pending" as const,
  },
  {
    id: 5,
    productId: "121XXX2025",
    name: "Product Name 5",
    price: "120",
    stock: 900,
    status: "published" as const,
  },
];
