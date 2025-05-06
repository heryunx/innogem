"use client";

import * as React from "react";
import {
  IconDashboard,
  IconFileDescription,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
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
  role: "user" | "producer" | "admin";
} & React.ComponentProps<typeof Sidebar>;

// Simulasi data navigasi per role
const navItemsByRole = {
  user: [
    { title: "Dashboard", url: "/dashboard/user", icon: IconDashboard },
    {
      title: "Invoices",
      url: "/dashboard/user/invoices",
      icon: IconListDetails,
    },
  ],
  producer: [
    { title: "Dashboard", url: "/dashboard/producer", icon: IconDashboard },
    {
      title: "Orders",
      url: "/dashboard/producer/orders",
      icon: IconListDetails,
    },
    {
      title: "Products",
      url: "/dashboard/producer/products",
      icon: IconListDetails,
    },
    {
      title: "Settings",
      url: "/dashboard/producer/settings",
      icon: IconSettings,
    },
  ],
  admin: [
    { title: "Dashboard", url: "/dashboard/admin", icon: IconDashboard },
    { title: "Manage Users", url: "/dashboard/admin/users", icon: IconUsers },
    {
      title: "Reports",
      url: "/dashboard/admin/reports",
      icon: IconFileDescription,
    },
    { title: "Settings", url: "/dashboard/admin/settings", icon: IconSettings },
  ],
};

const navSecondary = [
  { title: "Settings", url: "#", icon: IconSettings },
  { title: "Get Help", url: "#", icon: IconHelp },
];

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
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter className="bg-white">
        <NavUser user={mockUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
