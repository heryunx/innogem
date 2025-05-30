"use client";

import * as React from "react";
import {
  IconDashboard,
  IconInnerShadowTop,
  IconListDetails,
  IconUsers,
  IconBrandCodesandbox,
  IconTransactionDollar,
  IconTruckDelivery,
  IconCalculator,
  IconSettings,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Reusable sidebar props
type AppSidebarProps = {
  role: "user" | "producer" | "admin" | "logistic";
} & React.ComponentProps<typeof Sidebar>;

// Simulasi data navigasi per role
const navItemsByRole = {
  user: [
    { title: "Dashboard", url: "/dashboard/user", icon: IconDashboard },
    {
      title: "My Invoices",
      url: "/dashboard/user/invoices",
      icon: IconListDetails,
    },
    {
      title: "Settings",
      url: "/dashboard/user/settings",
      icon: IconSettings,
    },
  ],
  producer: [
    { title: "Dashboard", url: "/dashboard/producer", icon: IconDashboard },
    {
      title: "Orders",
      url: "/dashboard/producer/orders",
      icon: IconTransactionDollar,
    },
    {
      title: "Products",
      url: "/dashboard/producer/products",
      icon: IconListDetails,
    },
  ],
  admin: [
    { title: "Dashboard", url: "/dashboard/admin", icon: IconDashboard },
    {
      title: "Orders",
      url: "/dashboard/admin/orders",
      icon: IconTransactionDollar,
    },
    {
      title: "Products",
      url: "/dashboard/admin/products",
      icon: IconBrandCodesandbox,
    },
    {
      title: "Producer",
      url: "/dashboard/admin/producers",
      icon: IconUsers,
    },
    {
      title: "Buyer",
      url: "/dashboard/admin/buyers",
      icon: IconUsers,
    },
    {
      title: "Estimate Cost",
      url: "/dashboard/admin/estimate-calculator",
      icon: IconCalculator,
    },
  ],
  logistic: [
    { title: "Dashboard", url: "/dashboard/logistic", icon: IconDashboard },
    {
      title: "Shipment",
      url: "/dashboard/logistic/shipment",
      icon: IconTruckDelivery,
    },
    {
      title: "Invoice",
      url: "/dashboard/logistic/products",
      icon: IconListDetails,
    },
  ],
};

const mockUser = {
  name: "shadcn",
  email: "m@example.com",
  avatar: "/avatars/shadcn.jpg",
};

export function AppSidebar({ role, ...props }: AppSidebarProps) {
  const navMain = navItemsByRole[role];

  return (
    <Sidebar collapsible="offcanvas" {...props} className="bg-white">
      <SidebarHeader className="bg-white">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter className="bg-white">
        <NavUser user={mockUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
