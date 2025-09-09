import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Phone, Search, Filter, Download, ExternalLink, Clock, User } from "lucide-react";

const CallHistory = () => {
  const calls = [
    {
      id: "call_001",
      caller: "John Smith",
      callerNumber: "+1 (555) 123-4567",
      agent: "Business Support Agent",
      startTime: "2024-01-15 10:30:24",
      duration: "4m 32s",
      status: "completed",
      outcome: "Issue Resolved",
      sentiment: "positive",
      recording: true
    },
    {
      id: "call_002", 
      caller: "Sarah Johnson",
      callerNumber: "+1 (555) 987-6543",
      agent: "Sales Qualification Agent",
      startTime: "2024-01-15 10:25:15",
      duration: "2m 15s",
      status: "completed",
      outcome: "Lead Qualified",
      sentiment: "positive",
      recording: true
    },
    {
      id: "call_003",
      caller: "Mike Wilson", 
      callerNumber: "+1 (555) 456-7890",
      agent: "Business Support Agent",
      startTime: "2024-01-15 10:18:42",
      duration: "6m 48s",
      status: "completed",
      outcome: "Transferred to Human",
      sentiment: "neutral",
      recording: true
    },
    {
      id: "call_004",
      caller: "Emma Davis",
      callerNumber: "+1 (555) 111-2222",
      agent: "Sales Qualification Agent", 
      startTime: "2024-01-15 10:12:33",
      duration: "1m 22s",
      status: "missed",
      outcome: "No Answer",
      sentiment: "neutral",
      recording: false
    },
    {
      id: "call_005",
      caller: "Robert Brown",
      callerNumber: "+1 (555) 333-4444",
      agent: "Business Support Agent",
      startTime: "2024-01-15 10:05:18",
      duration: "3m 56s", 
      status: "completed",
      outcome: "Information Provided",
      sentiment: "positive",
      recording: true
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="outline" className="border-voice-success text-voice-success bg-voice-success/10">
            Completed
          </Badge>
        );
      case "missed":
        return (
          <Badge variant="outline" className="border-voice-error text-voice-error bg-voice-error/10">
            Missed
          </Badge>
        );
      case "ongoing":
        return (
          <Badge variant="outline" className="border-voice-active text-voice-active bg-voice-active/10 animate-pulse-glow">
            Ongoing
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "text-voice-success";
      case "negative":
        return "text-voice-error";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-voice bg-clip-text text-transparent">
            Call History
          </h1>
          <p className="text-muted-foreground mt-2">
            Complete log of all voice agent interactions
          </p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </Button>
      </div>

      {/* Filters */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by caller name, number, or agent..."
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Call History Table */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-voice-primary" />
            Recent Calls
          </CardTitle>
          <CardDescription>
            Detailed call logs with recordings and transcripts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {calls.map((call) => (
              <div
                key={call.id}
                className="p-4 rounded-lg bg-gradient-glass border border-border/30 hover:border-voice-primary/30 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-voice-primary/10 border border-voice-primary/20">
                        <User className="h-4 w-4 text-voice-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{call.caller}</p>
                        <p className="text-sm text-muted-foreground">{call.callerNumber}</p>
                      </div>
                    </div>

                    <div className="hidden md:block">
                      <p className="text-sm font-medium text-foreground">{call.agent}</p>
                      <p className="text-sm text-muted-foreground">AI Agent</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{call.duration}</p>
                        <p className="text-sm text-muted-foreground">{call.startTime}</p>
                      </div>
                    </div>

                    <div className="hidden lg:block">
                      <p className="text-sm font-medium text-foreground">{call.outcome}</p>
                      <p className={`text-sm capitalize ${getSentimentColor(call.sentiment)}`}>
                        {call.sentiment} sentiment
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      {getStatusBadge(call.status)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {call.recording && (
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <Button variant="outline">
              Load More Calls
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CallHistory;