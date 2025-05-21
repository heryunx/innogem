"use client";

import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProducerDetail() {
  return (
    <div className="container mx-auto py-4 px-4 space-y-6 font-sans text-base">
      {/* Verification Status */}
      <Card className="bg-white">
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center">
            <div>
              <h2 className="text-md">Action Required</h2>
              <p className="text-xs text-red-500">
                This supplier registration requires verification.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-end">
              <Button variant="outline" className="bg-gray-50">
                Back
              </Button>
              <Button
                variant="outline"
                className="bg-gray-50 text-red-500 border-red-500 hover:bg-red-50"
              >
                Reject
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Verify
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Producer Info */}
      <Card className="bg-white">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <InfoItem label="Business Email" value="supplier@bizmail.co.id" />
              <InfoItem label="Full Name" value="John Doe" />
              <InfoItem label="Job Title" value="Owner" />
              <InfoItem label="Phone Number" value="+62 812-3456-7890" />
            </div>

            <div className="space-y-4">
              <InfoItem label="Company Name" value="PT Sumber Jaya Abadi" />
              <InfoItem label="CEO / President Director" value="Budi Santoso" />
              <InfoItem label="Tax ID (NPWP)" value="12.345.678.9-012.345" />
              <InfoItem
                label="Business Registration No. (NIB)"
                value="8123456789101"
              />
              <InfoItem label="Issuing Authority" value="OSS Indonesia" />

              <InfoItem
                label="Address"
                value={
                  <>
                    <p>Jl. Industri No. 12</p>
                    <p>Central Bandung, West Java</p>
                    <p>Indonesia</p>
                  </>
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500 flex-shrink-0">
        <span className="text-xs sm:text-sm">#</span>
      </div>
      <div>
        <h3 className="text-sm sm:text-base font-medium">{label}</h3>
        <div className="text-xs sm:text-sm text-gray-700">{value}</div>
      </div>
    </div>
  );
}
