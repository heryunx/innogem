"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Pencil,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
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
import { useRouter } from "next/navigation";

export default function ProductManagement() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border">
        <div className="flex flex-col space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <h1 className="text-xl font-semibold">All Products</h1>
              <p className="text-sm text-muted-foreground">Active products</p>
            </div>

            <div className="flex sm:items-center flex-col md:flex-row gap-4 w-full md:w-auto">
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

              <Button
                className="bg-indigo-600 hover:bg-indigo-700 text-sm h-9"
                onClick={() => router.push("/dashboard/producer/products/add")}
              >
                <Plus className="mr-2 h-4 w-4" /> Add Product
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded border">
            <table className="w-full border-collapse min-w-[700px] text-sm">
              <thead>
                <tr className="border-b text-left bg-muted/50">
                  <th className="py-3 px-3 font-medium text-muted-foreground">
                    Product
                  </th>
                  <th className="py-3 px-3 font-medium text-muted-foreground">
                    Price
                  </th>
                  <th className="py-3 px-3 font-medium text-muted-foreground">
                    Stock
                  </th>
                  <th className="py-3 px-3 font-medium text-muted-foreground">
                    Status
                  </th>
                  <th className="py-3 px-3 font-medium text-muted-foreground">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="py-3 px-3">
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
                    </td>
                    <td className="py-3 px-3 font-medium">${product.price}</td>
                    <td className="py-3 px-3 font-medium">{product.stock}</td>
                    <td className="py-3 px-3">
                      <StatusBadge status={product.status} />
                    </td>
                    <td className="py-3 px-3">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 border-red-200 text-red-500 hover:text-red-500 hover:bg-red-50 hover:border-red-200"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
      </div>
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
    status: "published" as const,
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
