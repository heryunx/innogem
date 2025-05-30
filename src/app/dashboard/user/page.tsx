import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Zap } from "lucide-react";

export default function DashboardUserPage() {
  return (
    <div className="container mx-auto py-4 space-y-4 font-sans text-base">
      <div className="h-full flex flex-col sm:flex-row gap-4">
        {/* Summary Profile */}
        <div className="w-full sm:w-1/2">
          <Card className="h-full">
            <CardContent className="h-full flex flex-col justify-between justify-center">
              <div className="flex justify-between items-center">
                <div className="flex gap-4">
                  <Avatar className="h-8 w-8 rounded-lg grayscale">
                    <AvatarImage src="/avatars/shadcn.jpg" alt="CN" />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">Buyer Name</span>
                    <span className="text-muted-foreground truncate text-xs">
                      buyer@gmail.com
                    </span>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs text-black/70"
                    >
                      Edit MyProfile
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-xl">
                    <DialogHeader>
                      <DialogTitle>Personal Information</DialogTitle>
                    </DialogHeader>

                    <div className="w-full flex gap-4">
                      <div className="w-full flex flex-col  gap-4">
                        <Label
                          htmlFor="name"
                          className="text-right font-normal text-black/50"
                        >
                          First Name
                        </Label>
                        <Input id="name" className="w-full" />
                      </div>
                      <div className="w-full flex flex-col  gap-4">
                        <Label
                          htmlFor="name"
                          className="text-right font-normal text-black/50"
                        >
                          Last Name
                        </Label>
                        <Input id="name" className="w-full" />
                      </div>
                    </div>
                    <div className="w-full flex gap-4">
                      <div className="w-full flex flex-col  gap-4">
                        <Label
                          htmlFor="name"
                          className="text-right font-normal text-black/50"
                        >
                          Job Title
                        </Label>
                        <Input id="name" className="w-full" />
                      </div>
                      <div className="w-full flex flex-col  gap-4">
                        <Label
                          htmlFor="name"
                          className="text-right font-normal text-black/50"
                        >
                          Company Name
                        </Label>
                        <Input id="name" className="w-full" />
                      </div>
                    </div>
                    <div className="w-full flex flex-col  gap-4">
                      <Label
                        htmlFor="name"
                        className="text-right font-normal text-black/50"
                      >
                        Email Address
                      </Label>
                      <Input id="name" className="w-full" />
                    </div>

                    <div className="w-full flex flex-col  gap-4">
                      <Label
                        htmlFor="name"
                        className="text-right font-normal text-black/50"
                      >
                        Phone Number
                      </Label>
                      <Input id="name" className="w-full" />
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary Cards */}
        <div className="w-full sm:w-1/2 grid grid-cols-2 gap-4">
          <Card className="h-full">
            <CardContent className="flex items-center h-full">
              <div className="h-8 w-8 rounded-full bg-amber-50 flex items-center justify-center">
                <Zap className="h-4 w-4 text-amber-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">In Progress</p>
                <h3 className="text-xl font-bold">3</h3>
              </div>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardContent className="flex items-center h-full">
              <div className="h-8 w-8 rounded-full bg-green-50 flex items-center justify-center">
                <Zap className="h-4 w-4 text-green-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Need Action</p>
                <h3 className="text-xl font-bold">4</h3>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
