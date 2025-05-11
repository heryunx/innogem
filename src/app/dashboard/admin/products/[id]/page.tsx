"use client";

import { useState } from "react";
import { ArrowLeft, Edit, Trash2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

export default function ProductDetail() {
  const router = useRouter();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  // Sample product data based on the product-form structure
  const product = {
    id: 1,
    productId: "121XXX2025",
    name: "Mangosteen Fruit",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category: "Fruit",
    price: "83",
    minOrderQuantity: "1000",
    hasOwnPackaging: true,
    ownPackagingMOQ: "10000",
    leadTime: "5 weeks",
    weight: "500",
    dimensions: {
      length: "10",
      width: "8",
      height: "6",
    },
    taxCategory: "physical",
    licenseKeys: false,
    links: [{ title: "Product Website", url: "https://example.com/product" }],
    status: "published",
    stock: 2000,
  };

  const handleDelete = () => {
    // Handle delete logic here
    console.log("Deleting product:", product.id);
    setDeleteDialogOpen(false);
    // Redirect after delete
    router.push("/dashboard/admin/products");
  };

  return (
    <div className="container mx-auto py-6 space-y-6">
      <Card>
        <CardContent>
          {/* Header with back button and actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => router.push("/dashboard/admin/products")}
                className="h-9 w-9"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <h1 className="text-xl font-semibold">Product Detail</h1>
            </div>

            <div className="flex gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                className="flex-1 sm:flex-none"
                onClick={() =>
                  router.push(`/dashboard/admin/products/${product.id}/review`)
                }
              >
                Review Product Onboarding
              </Button>
              <Button
                variant="outline"
                className="flex-1 sm:flex-none"
                onClick={() =>
                  router.push(`/dashboard/admin/products/${product.id}/edit`)
                }
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
              <Button
                variant="destructive"
                className="flex-1 sm:flex-none"
                onClick={() => setDeleteDialogOpen(true)}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left column - Images */}
          <div className="md:col-span-1 space-y-4">
            <div className="border rounded-lg overflow-hidden bg-gray-50 aspect-square flex items-center justify-center">
              <div className="text-center p-4">
                <div className="h-16 w-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-2">
                  <span className="text-gray-500">Image</span>
                </div>
                <p className="text-sm text-gray-500">Product Image</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="border rounded-md overflow-hidden bg-gray-50 aspect-square flex items-center justify-center"
                >
                  <span className="text-xs text-gray-500">Img {i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Product details */}
          <div className="md:col-span-2 space-y-6">
            {/* Basic Info */}
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Product ID: {product.productId}
                  </p>
                  <h2 className="text-2xl font-bold">{product.name}</h2>
                </div>
                <StatusBadge status={product.status} />
              </div>

              <div className="text-3xl font-bold">${product.price}</div>

              <p className="text-gray-700">{product.description}</p>
            </div>

            <Separator />

            {/* Product Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Product Details</h3>

              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <DetailItem label="Category" value={product.category} />
                <DetailItem label="Stock" value={`${product.stock} units`} />
                <DetailItem
                  label="Minimum Order Quantity"
                  value={product.minOrderQuantity}
                />
                <DetailItem
                  label="Tax Category"
                  value={capitalizeFirstLetter(product.taxCategory)}
                />
                <DetailItem label="Weight" value={`${product.weight} grams`} />
                <DetailItem
                  label="Dimensions"
                  value={`${product.dimensions.length} × ${product.dimensions.width} × ${product.dimensions.height} cm`}
                />
              </div>
            </div>

            <Separator />

            {/* Packaging Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Packaging Information</h3>

              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <DetailItem
                  label="Custom Packaging"
                  value={
                    product.hasOwnPackaging ? "Available" : "Not Available"
                  }
                />
                {product.hasOwnPackaging && (
                  <>
                    <DetailItem
                      label="Packaging MOQ"
                      value={product.ownPackagingMOQ}
                    />
                    <DetailItem label="Lead Time" value={product.leadTime} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Product</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this product? This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-between sm:justify-end gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete Product
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
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

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
