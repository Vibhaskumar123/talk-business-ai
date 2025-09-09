import { LucideIcon, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: "up" | "down" | "neutral";
}

export const MetricCard = ({ title, value, change, icon: Icon, trend }: MetricCardProps) => {
  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-voice-success" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-voice-error" />;
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-voice-success";
      case "down":
        return "text-voice-error";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group animate-fade-in">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-gradient-glass border border-voice-primary/20 group-hover:border-voice-primary/40 transition-colors">
              <Icon className="h-6 w-6 text-voice-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">{title}</p>
              <p className="text-3xl font-bold text-foreground">{value}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          {getTrendIcon()}
          <span className={cn("text-sm font-medium", getTrendColor())}>
            {change}
          </span>
          <span className="text-sm text-muted-foreground">
            {trend === "neutral" ? "" : "from yesterday"}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};