"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BarChart3, FileText, Users, UserPlus, Download } from "lucide-react";

export default function SalesDashboard() {
  const [selectedMonth, setSelectedMonth] = useState("February");

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold text-[#0a0a5e]">
              February&apos;s Sales
            </h1>
            <p className="text-gray-500">Sales Summary</p>
          </div>
          <div className="flex gap-3">
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="January">January</SelectItem>
                <SelectItem value="February">February</SelectItem>
                <SelectItem value="March">March</SelectItem>
                <SelectItem value="April">April</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {/* Total Sales Card */}
          <Card className="bg-red-50 border-0">
            <CardContent className="p-6">
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-full bg-red-300 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-red-500" />
                </div>
                <h2 className="text-3xl font-bold mt-2">$1k</h2>
                <p className="text-gray-700">All Total Sales</p>
                <p className="text-blue-500 text-sm">+8% from last month</p>
              </div>
            </CardContent>
          </Card>

          {/* Orders Completed Card */}
          <Card className="bg-yellow-50 border-0">
            <CardContent className="p-6">
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-full bg-orange-300 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-orange-500" />
                </div>
                <h2 className="text-3xl font-bold mt-2">189</h2>
                <p className="text-gray-700">All Order Completed</p>
                <p className="text-blue-500 text-sm">+5% from last month</p>
              </div>
            </CardContent>
          </Card>

          {/* New Producer Card */}
          <Card className="bg-green-50 border-0">
            <CardContent className="p-6">
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-full bg-green-300 flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold mt-2">5</h2>
                <p className="text-gray-700">All New Producer</p>
                <p className="text-blue-500 text-sm">+1.2% from last month</p>
              </div>
            </CardContent>
          </Card>

          {/* New Buyer Card */}
          <Card className="bg-purple-50 border-0">
            <CardContent className="p-6">
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-full bg-purple-300 flex items-center justify-center">
                  <UserPlus className="h-6 w-6 text-purple-500" />
                </div>
                <h2 className="text-3xl font-bold mt-2">8</h2>
                <p className="text-gray-700">All New Buyer</p>
                <p className="text-blue-500 text-sm">0.5% from last month</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
