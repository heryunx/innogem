import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset } from "@/components/ui/sidebar";

export default function DashboardUserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppSidebar variant="inset" role="admin" />

      <SidebarInset className="bg-[#FAFBFF] px-4">
        <SiteHeader roles="Innogem" />
        <div className="bg-[#FAFBFF] flex flex-1 flex-col">{children}</div>
      </SidebarInset>
    </>
  );
}
