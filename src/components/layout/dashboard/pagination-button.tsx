import { Button } from "@/components/ui/button";

export function PaginationButton({
  page,
  currentPage,
  onClick,
}: {
  page: number;
  currentPage: number;
  onClick: () => void;
}) {
  const isActive = page === currentPage;

  return (
    <Button
      variant={isActive ? "default" : "outline"}
      size="icon"
      className={`h-8 w-8 text-sm ${
        isActive ? "bg-indigo-600 text-white hover:bg-indigo-700" : ""
      }`}
      onClick={onClick}
    >
      {page}
    </Button>
  );
}
