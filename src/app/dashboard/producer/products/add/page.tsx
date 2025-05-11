"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ExternalLink,
  Package,
  Plus,
  Ship,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

// Define the form data structure
interface ProductFormData {
  // Page 1
  name: string;
  description: string;
  category: string;
  price: string;
  minOrderQuantity: string;

  // Page 2
  taxCategory: string;
  licenseKeys: boolean;
  links: Array<{ title: string; url: string }>;

  // Page 3 (Shipping)
  weight: string;
  length: string;
  width: string;
  height: string;
  shippingMethod: string;
  requiresRefrigeration: boolean;
  isFragile: boolean;
  isHazardous: boolean;
  shippingFrom: string;
  customsDuties: string;
  shippingNotes: string;
  hasOwnPackaging: boolean;
  ownPackagingMOQ: string;
  standardLeadTime: string;
  customPackagingLeadTime: string;
  logisticsPartner: string;
  useOwnLogistics: boolean;
}

export default function ProductForm() {
  // State for current page
  const [currentPage, setCurrentPage] = useState<1 | 2 | 3>(1);

  // State for form data
  const [formData, setFormData] = useState<ProductFormData>({
    name: "Mangosteen Fruit",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category: "Fruit",
    price: "",
    minOrderQuantity: "",

    taxCategory: "digital",
    licenseKeys: false,
    links: [{ title: "", url: "" }],

    weight: "",
    length: "",
    width: "",
    height: "",
    shippingMethod: "cif",
    requiresRefrigeration: false,
    isFragile: false,
    isHazardous: false,
    shippingFrom: "",
    customsDuties: "ddp",
    shippingNotes: "",
    hasOwnPackaging: false,
    ownPackagingMOQ: "",
    standardLeadTime: "",
    customPackagingLeadTime: "",
    logisticsPartner: "dhl",
    useOwnLogistics: false,
  });

  // Handle input changes
  const handleChange = (
    field: keyof ProductFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setFormData((prev) => ({
      ...prev,
      category,
    }));
  };

  // Handle link changes
  const handleLinkChange = (
    index: number,
    field: "title" | "url",
    value: string
  ) => {
    const newLinks = [...formData.links];
    newLinks[index] = { ...newLinks[index], [field]: value };

    setFormData((prev) => ({
      ...prev,
      links: newLinks,
    }));
  };

  // Add a new link
  const addLink = () => {
    setFormData((prev) => ({
      ...prev,
      links: [...prev.links, { title: "", url: "" }],
    }));
  };

  // Navigation functions
  const goToNextPage = () => {
    if (currentPage === 1) setCurrentPage(2);
    else if (currentPage === 2) setCurrentPage(3);
  };

  const goToPreviousPage = () => {
    if (currentPage === 3) setCurrentPage(2);
    else if (currentPage === 2) setCurrentPage(1);
  };

  return (
    <div className="container mx-auto py-6">
      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border">
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
          {/* Form Section */}
          <div className="flex-1 p-8 bg-white">
            <div className="max-w-2xl mx-auto space-y-8">
              <div className="flex justify-between items-center">
                <h1 className="text-lg font-bold">Add Product</h1>
                <div className="bg-gray-100 px-4 py-2 rounded-full text-sm cursor-pointer">
                  PAGE {currentPage} / 3{" "}
                  <ChevronDown className="inline h-4 w-4 ml-1" />
                </div>
              </div>

              {currentPage === 1 ? (
                // Page 1 Content
                <>
                  {/* Images */}
                  <div className="space-y-2">
                    <Label>Images</Label>
                    <div className="border border-dashed rounded-md p-8 text-center">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                          <Upload className="h-5 w-5 text-gray-500" />
                        </div>
                        <p className="text-sm text-gray-600">
                          Drop your images here, or{" "}
                          <span className="text-indigo-600 cursor-pointer">
                            click to browse
                          </span>
                        </p>
                        <p className="text-xs text-gray-500">
                          1600 × 1200 (4:3) recommended, up to 10MB each.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      rows={5}
                      value={formData.description}
                      onChange={(e) =>
                        handleChange("description", e.target.value)
                      }
                    />
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <Label>Category</Label>
                    <div className="flex gap-3">
                      <CategoryButton
                        name="Fruit"
                        isSelected={formData.category === "Fruit"}
                        onClick={() => handleCategorySelect("Fruit")}
                      />
                      <CategoryButton
                        name="Food"
                        isSelected={formData.category === "Food"}
                        onClick={() => handleCategorySelect("Food")}
                      />
                      <CategoryButton
                        name="Drink"
                        isSelected={formData.category === "Drink"}
                        onClick={() => handleCategorySelect("Drink")}
                      />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="space-y-2">
                    <Label htmlFor="price">
                      Price <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-gray-500">
                        $
                      </span>
                      <Input
                        id="price"
                        className="pl-7"
                        value={formData.price}
                        onChange={(e) => handleChange("price", e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Minimum Order Quantity */}
                  <div className="space-y-2">
                    <Label htmlFor="min-order">
                      Minimum Order Quantity{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Input
                        id="min-order"
                        placeholder="Example: 1000"
                        className="pl-4"
                        value={formData.minOrderQuantity}
                        onChange={(e) =>
                          handleChange("minOrderQuantity", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  {/* Standard Lead Time - moved from page 3 */}
                  <div className="space-y-2">
                    <Label htmlFor="standard-lead-time">
                      Standard Lead Time <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="standard-lead-time"
                      placeholder="Example: 1-2 weeks"
                      value={formData.standardLeadTime}
                      onChange={(e) =>
                        handleChange("standardLeadTime", e.target.value)
                      }
                    />
                    <p className="text-xs text-gray-500">
                      Time from order to shipment with standard packaging
                    </p>
                  </div>

                  {/* Variants */}
                  <div className="space-y-2">
                    <Label>Variants</Label>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-gray-600"
                    >
                      Create a variant of this product{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </>
              ) : currentPage === 2 ? (
                // Page 2 Content
                <>
                  {/* Tax Category */}
                  <div className="space-y-2">
                    <Label htmlFor="tax-category">
                      Tax category <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.taxCategory}
                      onValueChange={(value) =>
                        handleChange("taxCategory", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a tax category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="digital">
                          Digital goods or services (excluding ebooks)
                        </SelectItem>
                        <SelectItem value="physical">Physical goods</SelectItem>
                        <SelectItem value="ebooks">Ebooks</SelectItem>
                        <SelectItem value="services">Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="border-t border-gray-200 my-6"></div>

                  {/* License Keys */}
                  <div className="flex items-center justify-between">
                    <Label htmlFor="license-keys">License keys</Label>
                    <Switch
                      id="license-keys"
                      checked={formData.licenseKeys}
                      onCheckedChange={(checked) =>
                        handleChange("licenseKeys", checked)
                      }
                    />
                  </div>

                  {/* Files to Access */}
                  <div className="space-y-2">
                    <Label>Files to access</Label>
                    <div className="border border-dashed rounded-md p-8 text-center">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                          <Upload className="h-5 w-5 text-gray-500" />
                        </div>
                        <p className="text-sm text-gray-600">
                          Drop your files here, or{" "}
                          <span className="text-indigo-600 cursor-pointer">
                            click to browse
                          </span>
                        </p>
                        <p className="text-xs text-gray-500">
                          Unlimited files, 5GB total limit.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Links to Gain Access */}
                  <div className="space-y-4">
                    <Label>Links to gain access</Label>

                    {formData.links.map((link, index) => (
                      <div key={index} className="grid grid-cols-2 gap-3">
                        <div>
                          <Label
                            htmlFor={`link-title-${index}`}
                            className="text-sm font-normal text-gray-600"
                          >
                            Link title
                          </Label>
                          <Input
                            id={`link-title-${index}`}
                            placeholder="My link"
                            value={link.title}
                            onChange={(e) =>
                              handleLinkChange(index, "title", e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor={`link-url-${index}`}
                            className="text-sm font-normal text-gray-600"
                          >
                            Link URL
                          </Label>
                          <Input
                            id={`link-url-${index}`}
                            placeholder="https://"
                            value={link.url}
                            onChange={(e) =>
                              handleLinkChange(index, "url", e.target.value)
                            }
                          />
                        </div>
                      </div>
                    ))}

                    <Button
                      variant="outline"
                      className="flex items-center gap-1"
                      size="sm"
                      onClick={addLink}
                    >
                      <Plus className="h-4 w-4" /> Add another link
                    </Button>
                  </div>
                </>
              ) : (
                // Page 3 Content - Shipping Options
                <>
                  {/* Weight */}
                  <div className="space-y-2">
                    <Label htmlFor="weight">
                      Weight <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="weight"
                        placeholder="0.00"
                        value={formData.weight}
                        onChange={(e) => handleChange("weight", e.target.value)}
                        className="flex-1"
                      />
                      <Select defaultValue="kg">
                        <SelectTrigger className="w-[100px]">
                          <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kg">Kilogram</SelectItem>
                          <SelectItem value="g">Gram</SelectItem>
                          <SelectItem value="lb">Pound</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Volume */}
                  <div className="space-y-2">
                    <Label htmlFor="volume">
                      Dimensions <span className="text-red-500">*</span>
                    </Label>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="space-y-1">
                        <Label
                          htmlFor="length"
                          className="text-xs text-gray-500"
                        >
                          Length
                        </Label>
                        <Input
                          id="length"
                          placeholder="0.00"
                          value={formData.length}
                          onChange={(e) =>
                            handleChange("length", e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-1">
                        <Label
                          htmlFor="width"
                          className="text-xs text-gray-500"
                        >
                          Width
                        </Label>
                        <Input
                          id="width"
                          placeholder="0.00"
                          value={formData.width}
                          onChange={(e) =>
                            handleChange("width", e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-1">
                        <Label
                          htmlFor="height"
                          className="text-xs text-gray-500"
                        >
                          Height
                        </Label>
                        <Input
                          id="height"
                          placeholder="0.00"
                          value={formData.height}
                          onChange={(e) =>
                            handleChange("height", e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">
                      All dimensions in centimeters (cm)
                    </p>
                  </div>

                  {/* Own Packaging Switch - Moved from page 1 */}
                  <div className="border-t border-gray-200 my-6 pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label
                          htmlFor="has-own-packaging"
                          className="font-medium"
                        >
                          Customized Packaging?
                        </Label>
                        <p className="text-xs text-gray-500 mt-1">
                          Offer custom packaging for this product
                        </p>
                      </div>
                      <Switch
                        id="has-own-packaging"
                        checked={formData.hasOwnPackaging}
                        onCheckedChange={(checked) =>
                          handleChange("hasOwnPackaging", checked)
                        }
                      />
                    </div>
                  </div>

                  {/* Conditional Advanced Inputs for Custom Packaging */}
                  {formData.hasOwnPackaging && (
                    <div className="space-y-4 bg-gray-50 p-4 rounded-md border border-gray-100">
                      {/* MOQ for custom packaging */}
                      <div className="space-y-2">
                        <Label htmlFor="own-packaging-moq">
                          Minimum Order Quantity for Custom Packaging
                        </Label>
                        <Input
                          id="own-packaging-moq"
                          placeholder="Example: 10000"
                          value={formData.ownPackagingMOQ}
                          onChange={(e) =>
                            handleChange("ownPackagingMOQ", e.target.value)
                          }
                        />
                      </div>

                      {/* Custom Packaging Lead Time */}
                      <div className="space-y-2">
                        <Label htmlFor="custom-packaging-lead-time">
                          Lead Time for Custom Packaging
                        </Label>
                        <Input
                          id="custom-packaging-lead-time"
                          placeholder="Example: 5-6 weeks"
                          value={formData.customPackagingLeadTime}
                          onChange={(e) =>
                            handleChange(
                              "customPackagingLeadTime",
                              e.target.value
                            )
                          }
                        />
                        <p className="text-xs text-gray-500">
                          This is typically longer than standard lead time due
                          to custom packaging production
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Logistics Partner - New section */}
                  <div className="space-y-4 mt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label
                          htmlFor="logistics-partner"
                          className="font-medium"
                        >
                          Logistics Partner
                        </Label>
                        <p className="text-xs text-gray-500 mt-1">
                          Select preferred logistics service provider
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Label htmlFor="own-logistics" className="text-sm">
                          Use own logistics
                        </Label>
                        <Switch
                          id="own-logistics"
                          checked={formData.useOwnLogistics}
                          onCheckedChange={(checked) =>
                            handleChange("useOwnLogistics", checked)
                          }
                        />
                      </div>
                    </div>

                    {!formData.useOwnLogistics ? (
                      <RadioGroup
                        value={formData.logisticsPartner}
                        onValueChange={(value) =>
                          handleChange("logisticsPartner", value)
                        }
                        className="space-y-2"
                      >
                        <div className="flex items-center space-x-2 border p-3 rounded-md">
                          <RadioGroupItem value="dhl" id="dhl" />
                          <Label htmlFor="dhl" className="flex-1">
                            <div className="font-medium">DHL</div>
                            <div className="text-xs text-gray-500">
                              International express shipping with tracking
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border p-3 rounded-md">
                          <RadioGroupItem value="fedex" id="fedex" />
                          <Label htmlFor="fedex" className="flex-1">
                            <div className="font-medium">FedEx</div>
                            <div className="text-xs text-gray-500">
                              Global shipping with customs clearance support
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border p-3 rounded-md">
                          <RadioGroupItem value="forin" id="forin" />
                          <Label htmlFor="forin" className="flex-1">
                            <div className="font-medium">Forin</div>
                            <div className="text-xs text-gray-500">
                              Specialized in Asia-Pacific shipping routes
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    ) : (
                      <div className="space-y-2 bg-gray-50 p-4 rounded-md border border-gray-100">
                        <Label htmlFor="shipping-notes">
                          Own Logistics Details
                        </Label>
                        <Textarea
                          id="shipping-notes"
                          rows={3}
                          placeholder="Provide details about your logistics arrangements"
                          value={formData.shippingNotes}
                          onChange={(e) =>
                            handleChange("shippingNotes", e.target.value)
                          }
                        />
                      </div>
                    )}
                  </div>

                  {/* Special Handling Requirements */}
                  <div className="space-y-2 mt-6">
                    <Label>Special Handling Requirements</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="refrigeration"
                          checked={formData.requiresRefrigeration}
                          onCheckedChange={(checked) =>
                            handleChange(
                              "requiresRefrigeration",
                              checked === true
                            )
                          }
                        />
                        <Label htmlFor="refrigeration" className="text-sm">
                          Requires refrigeration
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="fragile"
                          checked={formData.isFragile}
                          onCheckedChange={(checked) =>
                            handleChange("isFragile", checked === true)
                          }
                        />
                        <Label htmlFor="fragile" className="text-sm">
                          Fragile item
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="hazardous"
                          checked={formData.isHazardous}
                          onCheckedChange={(checked) =>
                            handleChange("isHazardous", checked === true)
                          }
                        />
                        <Label htmlFor="hazardous" className="text-sm">
                          Hazardous material
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Shipping Origin */}
                  <div className="space-y-2 mt-6">
                    <Label htmlFor="shipping-from">
                      Shipping From <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="shipping-from"
                      placeholder="Enter location (e.g., 'Jakarta, Indonesia')"
                      value={formData.shippingFrom}
                      onChange={(e) =>
                        handleChange("shippingFrom", e.target.value)
                      }
                    />
                  </div>

                  {/* Customs and Duties */}
                  <div className="space-y-2 mt-6">
                    <Label htmlFor="customs-duties">Customs and Duties</Label>
                    <Select
                      value={formData.customsDuties}
                      onValueChange={(value) =>
                        handleChange("customsDuties", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select customs option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ddp">
                          Delivered Duty Paid (DDP) - Seller pays duties
                        </SelectItem>
                        <SelectItem value="ddu">
                          Delivered Duty Unpaid (DDU) - Buyer pays duties
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {/* Action Buttons */}
              <div className="flex justify-between pt-4">
                {currentPage === 1 ? (
                  <Button variant="outline" disabled>
                    Back
                  </Button>
                ) : (
                  <Button variant="outline" onClick={goToPreviousPage}>
                    Back
                  </Button>
                )}

                <div className="space-x-3">
                  <Button variant="outline">Save as draft</Button>
                  {currentPage < 3 ? (
                    <Button
                      className="bg-indigo-600 hover:bg-indigo-700"
                      onClick={goToNextPage}
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button className="bg-indigo-600 hover:bg-indigo-700">
                      Publish product
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="lg:w-[400px] bg-[#f5f3ff] p-8">
            <div className="space-y-10">
              {currentPage === 1 ? (
                // Page 1 Help Content
                <>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      Add up to 10 images to your product.
                    </p>
                    <p className="text-gray-600 text-sm">
                      These are used to represent your product during checkout,
                      in email, social sharing and more.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-gray-700">We recommend:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Keep the name short and clear</li>
                      <li>50-60 characters is best for search engines</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p className="text-gray-700">We recommend:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Keep the description clear</li>
                      <li>120-160 characters is best for search engines</li>
                    </ul>
                  </div>
                </>
              ) : currentPage === 2 ? (
                // Page 2 Help Content
                <>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      Select the tax category for this product ·
                      <a
                        href="#"
                        className="text-indigo-600 inline-flex items-center ml-1"
                      >
                        Help <ExternalLink className="h-3 w-3 ml-0.5" />
                      </a>
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-gray-700">
                      Issue each customer a unique license key after purchase.
                      <a
                        href="#"
                        className="text-indigo-600 block mt-1 inline-flex items-center"
                      >
                        More info about license keys{" "}
                        <ExternalLink className="h-3 w-3 ml-0.5" />
                      </a>
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-gray-700">
                      Upload an unlimited number of files to your product. Your
                      customers will be given access to them after purchase.
                    </p>
                    <a
                      href="#"
                      className="text-indigo-600 inline-flex items-center"
                    >
                      More info about product files{" "}
                      <ExternalLink className="h-3 w-3 ml-0.5" />
                    </a>
                  </div>
                </>
              ) : (
                // Page 3 Help Content
                <>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-indigo-600" />
                      <p className="text-gray-700 font-medium">
                        Shipping Information
                      </p>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Accurate shipping details are crucial for smooth delivery
                      and customer satisfaction.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-gray-700">Custom Packaging:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>
                        Custom packaging typically requires higher minimum
                        orders
                      </li>
                      <li>
                        Lead times are usually longer for custom packaging
                      </li>
                      <li>
                        Consider offering both standard and custom options
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p className="text-gray-700">Shipping Terms:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>
                        <strong>CIF</strong>: Seller pays for cost, insurance,
                        and freight to destination port
                      </li>
                      <li>
                        <strong>FOB</strong>: Seller is responsible until goods
                        are loaded onto the vessel
                      </li>
                      <li>
                        <strong>EXW</strong>: Buyer assumes all transportation
                        costs and risks
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="text-indigo-600 inline-flex items-center mt-1"
                    >
                      Learn more about Incoterms{" "}
                      <ExternalLink className="h-3 w-3 ml-0.5" />
                    </a>
                  </div>

                  <div className="space-y-2">
                    <p className="text-gray-700">Logistics Partners:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>
                        Different partners offer varying rates and service
                        levels
                      </li>
                      <li>Consider transit times and tracking capabilities</li>
                      <li>
                        Some partners specialize in specific regions or product
                        types
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CategoryButtonProps {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

function CategoryButton({ name, isSelected, onClick }: CategoryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center justify-center gap-2 px-5 py-2 border rounded-md",
        isSelected
          ? "border-indigo-600 bg-indigo-50 text-indigo-600"
          : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
      )}
    >
      {name}
      {isSelected && <Check className="h-4 w-4" />}
    </button>
  );
}
