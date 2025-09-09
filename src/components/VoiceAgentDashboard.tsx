import { Phone, Settings, Activity, Users, BarChart3, Mic, MicOff, PhoneCall } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MetricCard } from "./MetricCard";
import { CallLogsTable } from "./CallLogsTable";
import { RealTimeStatus } from "./RealTimeStatus";

const Dashboard = () => {
  const metrics = [
    {
      title: "Total Calls Today",
      value: "247",
      change: "+12%",
      icon: PhoneCall,
      trend: "up" as const
    },
    {
      title: "Active Calls",
      value: "8",
      change: "Live",
      icon: Activity,
      trend: "neutral" as const
    },
    {
      title: "Success Rate",
      value: "94.2%",
      change: "+2.1%",
      icon: BarChart3,
      trend: "up" as const
    },
    {
      title: "Avg Call Duration",
      value: "3m 42s",
      change: "-8s",
      icon: Users,
      trend: "down" as const
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-voice bg-clip-text text-transparent">
            Voice Agent Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Monitor and manage your AI-powered voice agents
          </p>
        </div>
        <div className="flex items-center gap-4">
          <RealTimeStatus />
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Agent Status */}
        <Card className="lg:col-span-2 border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mic className="h-5 w-5 text-voice-primary" />
              Agent Performance
            </CardTitle>
            <CardDescription>
              Real-time voice agent analytics and performance metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-glass border border-border/30">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-voice-active animate-pulse-glow"></div>
                  <div>
                    <p className="font-medium">Business Agent</p>
                    <p className="text-sm text-muted-foreground">Customer Support</p>
                  </div>
                </div>
                <Badge variant="outline" className="border-voice-active text-voice-active">
                  Active
                </Badge>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-glass border border-border/30">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-voice-active animate-pulse-glow"></div>
                  <div>
                    <p className="font-medium">Sales Agent</p>
                    <p className="text-sm text-muted-foreground">Lead Qualification</p>
                  </div>
                </div>
                <Badge variant="outline" className="border-voice-active text-voice-active">
                  Active
                </Badge>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/30">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-muted-foreground"></div>
                  <div>
                    <p className="font-medium">Technical Support</p>
                    <p className="text-sm text-muted-foreground">IT Helpdesk</p>
                  </div>
                </div>
                <Badge variant="secondary">
                  Standby
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Manage your voice agents
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full bg-gradient-voice hover:opacity-90 transition-opacity">
              <Phone className="h-4 w-4 mr-2" />
              Start New Agent
            </Button>
            <Button variant="outline" className="w-full">
              <Settings className="h-4 w-4 mr-2" />
              Configure Prompts
            </Button>
            <Button variant="outline" className="w-full">
              <BarChart3 className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
            <Button variant="outline" className="w-full">
              <Users className="h-4 w-4 mr-2" />
              Manage Integrations
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Call Logs */}
      <CallLogsTable />
    </div>
  );
};

export default Dashboard;