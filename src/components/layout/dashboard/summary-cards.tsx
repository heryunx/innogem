import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, FileOutput, Zap } from "lucide-react";

interface SummaryCardsProps {
  title?: string;
  valuetotal: number;
  valueapproved: number;
  valuerejected: number;
}

export default function SummaryCards({
  title,
  valuetotal,
  valueapproved,
  valuerejected,
}: SummaryCardsProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardContent className="flex items-center gap-4 p-4">
          <div className="h-8 w-8 rounded-full bg-amber-50 flex items-center justify-center">
            <Zap className="h-4 w-4 text-amber-500" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Total {title}</p>
            <h3 className="text-xl font-bold">{valuetotal}</h3>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center gap-4 p-4">
          <div className="h-4 w-4 rounded-full bg-green-50 flex items-center justify-center">
            <CheckCircle2 className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Approved</p>
            <h3 className="text-xl font-bold">{valueapproved}</h3>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center gap-4 p-4">
          <div className="h-4 w-4 rounded-full bg-red-50 flex items-center justify-center">
            <FileOutput className="h-6 w-6 text-red-400" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Rejected</p>
            <h3 className="text-xl font-bold">{valuerejected}</h3>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
