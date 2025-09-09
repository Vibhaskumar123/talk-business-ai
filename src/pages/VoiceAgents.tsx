import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, Settings, Play, Pause, Volume2, Brain, MessageSquare } from "lucide-react";

const VoiceAgents = () => {
  const agents = [
    {
      id: "1",
      name: "Business Support Agent",
      description: "Handles general customer inquiries and support requests",
      status: "active",
      model: "GPT-4",
      voice: "Sarah",
      language: "English",
      callsToday: 127,
      avgRating: 4.8
    },
    {
      id: "2", 
      name: "Sales Qualification Agent",
      description: "Pre-qualifies leads and schedules sales calls",
      status: "active",
      model: "GPT-4",
      voice: "Daniel",
      language: "English",
      callsToday: 89,
      avgRating: 4.9
    },
    {
      id: "3",
      name: "Technical Support Agent", 
      description: "Provides technical assistance and troubleshooting",
      status: "standby",
      model: "GPT-4",
      voice: "Brian",
      language: "English",
      callsToday: 0,
      avgRating: 4.7
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge variant="outline" className="border-voice-active text-voice-active bg-voice-active/10 animate-pulse-glow">
            Active
          </Badge>
        );
      case "standby":
        return (
          <Badge variant="secondary">
            Standby
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-voice bg-clip-text text-transparent">
            Voice Agents
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage and configure your AI voice agents
          </p>
        </div>
        <Button className="bg-gradient-voice hover:opacity-90">
          <Play className="h-4 w-4 mr-2" />
          Create New Agent
        </Button>
      </div>

      <div className="grid gap-6">
        {agents.map((agent) => (
          <Card key={agent.id} className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-glass border border-voice-primary/20">
                    <Mic className="h-6 w-6 text-voice-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{agent.name}</CardTitle>
                    <CardDescription className="mt-1">{agent.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {getStatusBadge(agent.status)}
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Configure
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Model</p>
                  <div className="flex items-center gap-2">
                    <Brain className="h-4 w-4 text-voice-primary" />
                    <span className="font-medium">{agent.model}</span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Voice</p>
                  <div className="flex items-center gap-2">
                    <Volume2 className="h-4 w-4 text-voice-primary" />
                    <span className="font-medium">{agent.voice}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Language</p>
                  <span className="font-medium">{agent.language}</span>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Calls Today</p>
                  <span className="font-bold text-2xl text-voice-primary">{agent.callsToday}</span>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Avg Rating</p>
                  <span className="font-bold text-2xl text-voice-success">{agent.avgRating}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Button 
                    variant={agent.status === "active" ? "destructive" : "default"}
                    size="sm"
                    className={agent.status === "active" ? "" : "bg-gradient-voice hover:opacity-90"}
                  >
                    {agent.status === "active" ? (
                      <>
                        <Pause className="h-4 w-4 mr-2" />
                        Stop
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Start
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VoiceAgents;