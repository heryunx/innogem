"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type CostType = "flat" | "percentage";

interface CostField {
  type: CostType;
  value: string;
}

interface Estimate {
  id: number;
  route: string;
  costType: "CIF" | "FOB";
  shipmentType: "FCL" | "LCL";
  customs: CostField;
  trucking: CostField;
  unloading: CostField;
  ratePerCbm: CostField;
  status: "active" | "draft" | "archived";
}

export default function Page() {
  const [estimates, setEstimates] = useState<Estimate[]>([
    {
      id: 1,
      route: "Indonesia - Germany",
      costType: "CIF",
      shipmentType: "FCL",
      customs: { type: "flat", value: "1200" },
      trucking: { type: "flat", value: "800" },
      unloading: { type: "flat", value: "500" },
      ratePerCbm: { type: "flat", value: "150" },
      status: "active",
    },
    {
      id: 2,
      route: "Indonesia - Netherlands",
      costType: "FOB",
      shipmentType: "LCL",
      customs: { type: "percentage", value: "5" },
      trucking: { type: "flat", value: "600" },
      unloading: { type: "flat", value: "300" },
      ratePerCbm: { type: "flat", value: "120" },
      status: "draft",
    },
    {
      id: 3,
      route: "Indonesia - Germany",
      costType: "FOB",
      shipmentType: "LCL",
      customs: { type: "flat", value: "1100" },
      trucking: { type: "flat", value: "750" },
      unloading: { type: "flat", value: "400" },
      ratePerCbm: { type: "percentage", value: "3" },
      status: "archived",
    },
  ]);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  // Form data state, init with empty or default values
  const [formData, setFormData] = useState<Omit<Estimate, "id">>({
    route: "",
    costType: "CIF",
    shipmentType: "FCL",
    customs: { type: "flat", value: "" },
    trucking: { type: "flat", value: "" },
    unloading: { type: "flat", value: "" },
    ratePerCbm: { type: "flat", value: "" },
    status: "draft",
  });

  // For editing existing estimate, track editingId
  const [editingId, setEditingId] = useState<number | null>(null);

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  function StatusBadge({
    status,
  }: {
    status: "active" | "draft" | "archived";
  }) {
    if (status === "active") {
      return (
        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
          Active
        </Badge>
      );
    }
    if (status === "archived") {
      return (
        <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-200">
          Archived
        </Badge>
      );
    }
    return (
      <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
        Draft
      </Badge>
    );
  }

  // Validate form fields simple example
  function validateForm() {
    const newErrors: Record<string, string> = {};

    if (!formData.route.trim()) newErrors.route = "Route is required";
    if (!formData.costType) newErrors.costType = "Cost type is required";
    if (!formData.shipmentType)
      newErrors.shipmentType = "Shipment type is required";

    // Check cost fields
    (["customs", "trucking", "unloading", "ratePerCbm"] as const).forEach(
      (field) => {
        const costField = formData[field];
        if (!costField.value.trim()) {
          newErrors[field] = `${
            field.charAt(0).toUpperCase() + field.slice(1)
          } is required`;
        } else if (
          costField.type === "percentage" &&
          (isNaN(Number(costField.value)) ||
            Number(costField.value) < 0 ||
            Number(costField.value) > 100)
        ) {
          newErrors[field] = `${
            field.charAt(0).toUpperCase() + field.slice(1)
          } must be a valid percentage (0-100)`;
        } else if (
          costField.type === "flat" &&
          (isNaN(Number(costField.value)) || Number(costField.value) < 0)
        ) {
          newErrors[field] = `${
            field.charAt(0).toUpperCase() + field.slice(1)
          } must be a valid number`;
        }
      }
    );

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function resetForm() {
    setFormData({
      route: "",
      costType: "CIF",
      shipmentType: "FCL",
      customs: { type: "flat", value: "" },
      trucking: { type: "flat", value: "" },
      unloading: { type: "flat", value: "" },
      ratePerCbm: { type: "flat", value: "" },
      status: "draft",
    });
    setErrors({});
    setEditingId(null);
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateForm()) return;

    if (editingId !== null) {
      // Edit existing
      setEstimates((prev) =>
        prev.map((item) =>
          item.id === editingId ? { id: editingId, ...formData } : item
        )
      );
    } else {
      // Add new
      const newId = estimates.length
        ? Math.max(...estimates.map((e) => e.id)) + 1
        : 1;
      setEstimates((prev) => [...prev, { id: newId, ...formData }]);
    }

    setModalOpen(false);
    resetForm();
  }

  function onEdit(id: number) {
    const est = estimates.find((e) => e.id === id);
    if (!est) return;
    setFormData({
      route: est.route,
      costType: est.costType,
      shipmentType: est.shipmentType,
      customs: est.customs,
      trucking: est.trucking,
      unloading: est.unloading,
      ratePerCbm: est.ratePerCbm,
      status: est.status,
    });
    setEditingId(id);
    setModalOpen(true);
  }

  return (
    <div className="container mx-auto py-4 space-y-4 font-sans text-base">
      {/* Header and Add Button */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Estimate Calculator</h2>
          <p className="text-xs text-muted-foreground">
            Admin overview of estimated cost/rate based on shipping route
          </p>
        </div>
        <Button
          onClick={() => {
            resetForm();
            setModalOpen(true);
          }}
        >
          Add Estimate
        </Button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border p-6 space-y-6">
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Route</TableHead>
                <TableHead>Cost Type</TableHead>
                <TableHead>Shipment Type</TableHead>
                <TableHead>Customs</TableHead>
                <TableHead>Trucking</TableHead>
                <TableHead>Unloading</TableHead>
                <TableHead>Rate/CBM</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {estimates.map((estimate) => (
                <TableRow
                  key={estimate.id}
                  className="cursor-pointer hover:bg-gray-50"
                >
                  <TableCell className="text-xs">{estimate.route}</TableCell>
                  <TableCell className="text-xs">{estimate.costType}</TableCell>
                  <TableCell className="text-xs">
                    {estimate.shipmentType}
                  </TableCell>
                  <TableCell className="text-xs">
                    {estimate.customs.type === "percentage"
                      ? `${estimate.customs.value}%`
                      : `$${Number(estimate.customs.value).toLocaleString()}`}
                  </TableCell>
                  <TableCell className="text-xs">
                    {estimate.trucking.type === "percentage"
                      ? `${estimate.trucking.value}%`
                      : `$${Number(estimate.trucking.value).toLocaleString()}`}
                  </TableCell>
                  <TableCell className="text-xs">
                    {estimate.unloading.type === "percentage"
                      ? `${estimate.unloading.value}%`
                      : `$${Number(estimate.unloading.value).toLocaleString()}`}
                  </TableCell>
                  <TableCell className="text-xs">
                    {estimate.ratePerCbm.type === "percentage"
                      ? `${estimate.ratePerCbm.value}%`
                      : `$${Number(
                          estimate.ratePerCbm.value
                        ).toLocaleString()}`}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={estimate.status} />
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => onEdit(estimate.id)}>Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-h-[90vh] overflow-auto w-full max-w-2xl p-6">
          <DialogHeader>
            <DialogTitle>
              {editingId !== null ? "Edit Estimate" : "Add New Estimate"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={onSubmit} className="space-y-4">
            {/* Route */}
            <div>
              <label htmlFor="route" className="block text-sm font-medium mb-1">
                Route <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="route"
                value={formData.route}
                onChange={(e) =>
                  setFormData((fd) => ({ ...fd, route: e.target.value }))
                }
                className={`w-full rounded border px-3 py-2 ${
                  errors.route ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.route && (
                <p className="text-red-600 text-xs mt-1">{errors.route}</p>
              )}
            </div>

            {/* Cost Type */}
            <div>
              <label
                htmlFor="costType"
                className="block text-sm font-medium mb-1"
              >
                Cost Type <span className="text-red-500">*</span>
              </label>
              <select
                id="costType"
                value={formData.costType}
                onChange={(e) =>
                  setFormData((fd) => ({
                    ...fd,
                    costType: e.target.value as "CIF" | "FOB",
                  }))
                }
                className={`w-full rounded border px-3 py-2 ${
                  errors.costType ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="CIF">CIF</option>
                <option value="FOB">FOB</option>
              </select>
              {errors.costType && (
                <p className="text-red-600 text-xs mt-1">{errors.costType}</p>
              )}
            </div>

            {/* Shipment Type */}
            <div>
              <label
                htmlFor="shipmentType"
                className="block text-sm font-medium mb-1"
              >
                Shipment Type <span className="text-red-500">*</span>
              </label>
              <select
                id="shipmentType"
                value={formData.shipmentType}
                onChange={(e) =>
                  setFormData((fd) => ({
                    ...fd,
                    shipmentType: e.target.value as "FCL" | "LCL",
                  }))
                }
                className={`w-full rounded border px-3 py-2 ${
                  errors.shipmentType ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="FCL">FCL</option>
                <option value="LCL">LCL</option>
              </select>
              {errors.shipmentType && (
                <p className="text-red-600 text-xs mt-1">
                  {errors.shipmentType}
                </p>
              )}
            </div>

            {/* Cost fields with input + dropdown */}
            {(["customs", "trucking", "unloading", "ratePerCbm"] as const).map(
              (field) => {
                const costField = formData[field];

                return (
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium mb-1 capitalize"
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2 items-center">
                      <Input
                        id={field}
                        type="number"
                        min={0}
                        max={costField.type === "percentage" ? 100 : undefined}
                        step={0.01}
                        placeholder={
                          costField.type === "percentage"
                            ? "e.g. 10"
                            : "e.g. 1200"
                        }
                        value={costField.value}
                        aria-invalid={!!errors[field]}
                        aria-describedby={`${field}-error`}
                        onChange={(e) =>
                          setFormData((fd) => ({
                            ...fd,
                            [field]: { ...costField, value: e.target.value },
                          }))
                        }
                        className="flex-grow"
                      />
                      <Select
                        value={costField.type}
                        onValueChange={(newType) =>
                          setFormData((fd) => ({
                            ...fd,
                            [field]: {
                              type: newType as CostType,
                              value: costField.value,
                            },
                          }))
                        }
                        aria-label={`${field} cost type`}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="flat">Flat Rate ($)</SelectItem>
                          <SelectItem value="percentage">
                            Percentage (%)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {errors[field] && (
                      <p
                        id={`${field}-error`}
                        className="text-red-600 text-xs mt-1"
                      >
                        {errors[field]}
                      </p>
                    )}
                  </div>
                );
              }
            )}

            {/* Status */}
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium mb-1"
              >
                Status <span className="text-red-500">*</span>
              </label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) =>
                  setFormData((fd) => ({
                    ...fd,
                    status: e.target.value as "active" | "draft" | "archived",
                  }))
                }
                className={`w-full rounded border px-3 py-2 ${
                  errors.status ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="active">Active</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>
              {errors.status && (
                <p className="text-red-600 text-xs mt-1">{errors.status}</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-4">
              <DialogClose asChild>
                <Button type="button" onClick={() => resetForm()}>
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">
                {editingId !== null ? "Update" : "Save"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
