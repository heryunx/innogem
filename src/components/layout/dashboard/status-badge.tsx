import { Badge } from "lucide-react";

export function StatusBadge({
  status,
}: {
  status: "published" | "rejected" | "pending";
}) {
  if (status === "published") {
    return (
      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
        Published
      </Badge>
    );
  }

  if (status === "rejected") {
    return (
      <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
        Rejected
      </Badge>
    );
  }

  return (
    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
      Pending
    </Badge>
  );
}
