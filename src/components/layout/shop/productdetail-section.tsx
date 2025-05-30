// components/ProductDetailSection.tsx
import { Separator } from "@/components/ui/separator";

interface ProductDetailSectionProps {
  title: string;
  description?: string;
  items: { label: string; value: React.ReactNode }[];
}

export default function ProductDetailSection({
  title,
  description,
  items,
}: ProductDetailSectionProps) {
  return (
    <div className="bg-white dark:bg-background rounded-lg shadow-sm p-6 sm:p-8">
      <h2 className="text-lg mb-4 font-semibold">{title}</h2>
      {description && (
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
          {description}
        </p>
      )}
      <div className="space-y-4 text-sm">
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col sm:flex-row justify-between py-2 gap-2">
              <div className="font-medium">{item.label}</div>
              <div className="text-right text-muted-foreground">
                {item.value}
              </div>
            </div>
            <Separator />
          </div>
        ))}
      </div>
    </div>
  );
}
