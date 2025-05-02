import { SectionCards } from "@/components/section-cards";

export default function DashboardPage() {
  return (
    <div className="@container/main flex flex-1 flex-col gap-2 bg-white">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
      </div>
    </div>
  );
}
