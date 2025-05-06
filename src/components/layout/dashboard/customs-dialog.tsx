"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  AlertCircle,
  FileText,
  Eye,
  Download,
} from "lucide-react";

interface CustomsEntryDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function CustomsEntryDialog({
  open,
  setOpen,
}: CustomsEntryDialogProps) {
  const [activeDocument, setActiveDocument] = useState("commercial-invoice");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[900px] p-0 gap-0">
        <div className="flex items-center justify-between p-6 border-b">
          <DialogTitle className="text-xl font-bold">
            Customs Entry Documents
          </DialogTitle>
        </div>

        <div className="w-full">
          {/* Document tabs navigation */}
          <div className="grid grid-cols-5 gap-1 p-1 bg-gray-100">
            <DocumentTab
              title="Commercial Invoice"
              isActive={activeDocument === "commercial-invoice"}
              status="complete"
              onClick={() => setActiveDocument("commercial-invoice")}
            />
            <DocumentTab
              title="Packing List"
              isActive={activeDocument === "packing-list"}
              status="complete"
              onClick={() => setActiveDocument("packing-list")}
            />
            <DocumentTab
              title="Certificate of Origin"
              isActive={activeDocument === "certificate-of-origin"}
              status="complete"
              onClick={() => setActiveDocument("certificate-of-origin")}
            />
            <DocumentTab
              title="Bill of Lading"
              isActive={activeDocument === "bill-of-lading"}
              status="missing"
              onClick={() => setActiveDocument("bill-of-lading")}
            />
            <DocumentTab
              title="Customs Declaration"
              isActive={activeDocument === "customs-declaration"}
              status="complete"
              onClick={() => setActiveDocument("customs-declaration")}
            />
          </div>

          {/* Document content */}
          {activeDocument === "commercial-invoice" && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Commercial Invoice</h3>
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200 px-3 py-1"
                >
                  Received
                </Badge>
              </div>

              <p className="text-gray-600 mb-6">
                Official document issued by the seller to the buyer that
                includes a description of the goods, quantity, and price.
              </p>

              <div className="border rounded-lg p-8 mb-6">
                <div className="flex flex-col items-center justify-center gap-4">
                  <FileText className="h-16 w-16 text-gray-400" />
                  <h4 className="text-lg font-semibold">
                    Commercial Invoice for Organic Coffee Beans
                  </h4>
                  <p className="text-gray-500">Shipment SHP-2023-1234</p>

                  <div className="flex gap-2 mt-2">
                    <Button variant="outline" className="gap-2">
                      <Eye className="h-4 w-4" />
                      View
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>

              <DocumentsSummary received={4} total={5} />
            </div>
          )}

          {activeDocument === "packing-list" && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Packing List</h3>
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200 px-3 py-1"
                >
                  Received
                </Badge>
              </div>

              <p className="text-gray-600 mb-6">
                Document that itemizes the contents of a shipment, including
                quantity, description, and weight of each package.
              </p>

              <div className="border rounded-lg p-8 mb-6">
                <div className="flex flex-col items-center justify-center gap-4">
                  <FileText className="h-16 w-16 text-gray-400" />
                  <h4 className="text-lg font-semibold">
                    Packing List for Organic Coffee Beans
                  </h4>
                  <p className="text-gray-500">Shipment SHP-2023-1234</p>

                  <div className="flex gap-2 mt-2">
                    <Button variant="outline" className="gap-2">
                      <Eye className="h-4 w-4" />
                      View
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>

              <DocumentsSummary received={4} total={5} />
            </div>
          )}

          {activeDocument === "certificate-of-origin" && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Certificate of Origin</h3>
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200 px-3 py-1"
                >
                  Received
                </Badge>
              </div>

              <p className="text-gray-600 mb-6">
                Document certifying the country where the goods were
                manufactured or produced.
              </p>

              <div className="border rounded-lg p-8 mb-6">
                <div className="flex flex-col items-center justify-center gap-4">
                  <FileText className="h-16 w-16 text-gray-400" />
                  <h4 className="text-lg font-semibold">
                    Certificate of Origin for Organic Coffee Beans
                  </h4>
                  <p className="text-gray-500">Shipment SHP-2023-1234</p>

                  <div className="flex gap-2 mt-2">
                    <Button variant="outline" className="gap-2">
                      <Eye className="h-4 w-4" />
                      View
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>

              <DocumentsSummary received={4} total={5} />
            </div>
          )}

          {activeDocument === "bill-of-lading" && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Bill of Lading</h3>
                <Badge
                  variant="outline"
                  className="bg-red-50 text-red-700 border-red-200 px-3 py-1"
                >
                  Missing
                </Badge>
              </div>

              <p className="text-gray-600 mb-6">
                Legal document issued by a carrier to a shipper that details the
                type, quantity, and destination of goods.
              </p>

              <div className="border rounded-lg p-8 mb-6 border-dashed">
                <div className="flex flex-col items-center justify-center gap-4">
                  <AlertCircle className="h-16 w-16 text-red-400" />
                  <h4 className="text-lg font-semibold">
                    Bill of Lading Missing
                  </h4>
                </div>
              </div>

              <DocumentsSummary received={4} total={5} />
            </div>
          )}

          {activeDocument === "customs-declaration" && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Customs Declaration</h3>
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200 px-3 py-1"
                >
                  Received
                </Badge>
              </div>

              <p className="text-gray-600 mb-6">
                Official document filed with customs authorities declaring
                imported goods and their value.
              </p>

              <div className="border rounded-lg p-8 mb-6">
                <div className="flex flex-col items-center justify-center gap-4">
                  <FileText className="h-16 w-16 text-gray-400" />
                  <h4 className="text-lg font-semibold">
                    Customs Declaration for Organic Coffee Beans
                  </h4>
                  <p className="text-gray-500">Shipment SHP-2023-1234</p>

                  <div className="flex gap-2 mt-2">
                    <Button variant="outline" className="gap-2">
                      <Eye className="h-4 w-4" />
                      View
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>

              <DocumentsSummary received={4} total={5} />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface DocumentTabProps {
  title: string;
  isActive?: boolean;
  status: "complete" | "missing" | "pending";
  onClick?: () => void;
}

function DocumentTab({
  title,
  isActive = false,
  status,
  onClick,
}: DocumentTabProps) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded cursor-pointer
        ${isActive ? "bg-white shadow-sm" : "bg-transparent hover:bg-gray-50"}`}
      onClick={onClick}
    >
      <span className="text-sm font-medium truncate">{title}</span>
      {status === "complete" && (
        <CheckCircle className="h-4 w-4 text-green-500 ml-2 shrink-0" />
      )}
      {status === "missing" && (
        <AlertCircle className="h-4 w-4 text-red-500 ml-2 shrink-0" />
      )}
    </div>
  );
}

interface DocumentsSummaryProps {
  received: number;
  total: number;
}

function DocumentsSummary({ received, total }: DocumentsSummaryProps) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-gray-600">
        {received} of {total} required documents received
      </p>
      <Button className="px-6">Download All Documents</Button>
    </div>
  );
}
