import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";

export const RealTimeStatus = () => {
  return (
    <Badge variant="outline" className="border-voice-active text-voice-active bg-voice-active/10 animate-pulse-glow">
      <Zap className="h-3 w-3 mr-1" />
      Live
    </Badge>
  );
};