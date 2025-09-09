import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Clock, User, ExternalLink } from "lucide-react";

interface CallLog {
  id: string;
  caller: string;
  agent: string;
  duration: string;
  status: "completed" | "missed" | "ongoing";
  time: string;
  type: "inbound" | "outbound";
}

const mockCallLogs: CallLog[] = [
  {
    id: "1",
    caller: "John Smith",
    agent: "Business Agent",
    duration: "4m 32s",
    status: "completed",
    time: "2 mins ago",
    type: "inbound"
  },
  {
    id: "2",
    caller: "Sarah Johnson",
    agent: "Sales Agent",
    duration: "2m 15s",
    status: "ongoing",
    time: "5 mins ago",
    type: "inbound"
  },
  {
    id: "3",
    caller: "Mike Wilson",
    agent: "Business Agent",
    duration: "6m 48s",
    status: "completed",
    time: "12 mins ago",
    type: "outbound"
  },
  {
    id: "4",
    caller: "Emma Davis",
    agent: "Sales Agent",
    duration: "1m 22s",
    status: "missed",
    time: "18 mins ago",
    type: "inbound"
  },
  {
    id: "5",
    caller: "Robert Brown",
    agent: "Business Agent",
    duration: "3m 56s",
    status: "completed",
    time: "25 mins ago",
    type: "inbound"
  }
];

export const CallLogsTable = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="outline" className="border-voice-success text-voice-success bg-voice-success/10">
            Completed
          </Badge>
        );
      case "ongoing":
        return (
          <Badge variant="outline" className="border-voice-active text-voice-active bg-voice-active/10 animate-pulse-glow">
            Ongoing
          </Badge>
        );
      case "missed":
        return (
          <Badge variant="outline" className="border-voice-error text-voice-error bg-voice-error/10">
            Missed
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getTypeIcon = (type: string) => {
    return type === "inbound" ? "↓" : "↑";
  };

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Phone className="h-5 w-5 text-voice-primary" />
          Recent Call Logs
        </CardTitle>
        <CardDescription>
          Monitor recent voice agent interactions and call history
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockCallLogs.map((call) => (
            <div
              key={call.id}
              className="flex items-center justify-between p-4 rounded-lg bg-gradient-glass border border-border/30 hover:border-voice-primary/30 transition-all duration-200 group"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-voice-primary/10 border border-voice-primary/20">
                    <span className="text-voice-primary font-mono text-sm">
                      {getTypeIcon(call.type)}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-foreground">{call.caller}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{call.agent}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{call.duration}</span>
                </div>

                <div className="flex items-center gap-3">
                  {getStatusBadge(call.status)}
                  <span className="text-sm text-muted-foreground">{call.time}</span>
                </div>
              </div>

              <Button 
                variant="ghost" 
                size="sm" 
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <Button variant="outline">
            View All Call Logs
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};