"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ExternalLink,
  Plus,
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

// Define the form data structure
interface ProductFormData {
  // Page 1
  name: string;
  description: string;
  category: string;
  price: string;
  minOrderQuantity: string;

  // Page 2
  weight: string;
  length: string;
  width: string;
  height: string;
  taxCategory: string;
  licenseKeys: boolean;
  links: Array<{ title: string; url: string }>;
}

export default function ProductForm() {
  // State for current page
  const [currentPage, setCurrentPage] = useState<1 | 2>(1);

  // State for form data
  const [formData, setFormData] = useState<ProductFormData>({
    name: "Mangosteen Fruit",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    category: "Fruit",
    price: "",
    minOrderQuantity: "",

    weight: "",
    length: "",
    width: "",
    height: "",
    taxCategory: "digital",
    licenseKeys: false,
    links: [{ title: "", url: "" }],
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
  const goToNextPage = () => setCurrentPage(2);
  const goToPreviousPage = () => setCurrentPage(1);

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6">
      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border">
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
          {/* Form Section */}
          <div className="flex-1 p-8 bg-white">
            <div className="max-w-2xl mx-auto space-y-8">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Add Product</h1>
                <div className="bg-gray-100 px-4 py-2 rounded-full text-sm cursor-pointer">
                  PAGE {currentPage} / 2{" "}
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
                      <span className="absolute left-3 top-2.5 text-gray-500">
                        $
                      </span>
                      <Input
                        id="min-order"
                        className="pl-7"
                        value={formData.minOrderQuantity}
                        onChange={(e) =>
                          handleChange("minOrderQuantity", e.target.value)
                        }
                      />
                    </div>
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
              ) : (
                // Page 2 Content
                <>
                  {/* Weight */}
                  <div className="space-y-2">
                    <Label htmlFor="weight">
                      Weight <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="weight"
                      placeholder="grams"
                      value={formData.weight}
                      onChange={(e) => handleChange("weight", e.target.value)}
                    />
                  </div>

                  {/* Volume */}
                  <div className="space-y-2">
                    <Label htmlFor="volume">
                      Volume <span className="text-red-500">*</span>
                    </Label>
                    <div className="grid grid-cols-3 gap-3">
                      <Input
                        id="length"
                        placeholder="Length"
                        value={formData.length}
                        onChange={(e) => handleChange("length", e.target.value)}
                      />
                      <Input
                        id="width"
                        placeholder="Width"
                        value={formData.width}
                        onChange={(e) => handleChange("width", e.target.value)}
                      />
                      <Input
                        id="height"
                        placeholder="Height"
                        value={formData.height}
                        onChange={(e) => handleChange("height", e.target.value)}
                      />
                    </div>
                  </div>

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
                  {currentPage === 1 ? (
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
              ) : (
                // Page 2 Help Content
                <>
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      Volume, package and graduated pricing options are also
                      available in advanced options
                    </p>
                  </div>

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
