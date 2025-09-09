import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Webhook, CheckCircle, AlertCircle, Settings, ExternalLink } from "lucide-react";

const Integrations = () => {
  const integrations = [
    {
      id: "twilio",
      name: "Twilio",
      description: "Voice calling and SMS capabilities",
      status: "connected",
      enabled: true,
      icon: "📞",
      config: {
        accountSid: "AC********************************",
        phoneNumber: "+1 (555) 123-4567"
      }
    },
    {
      id: "ngrok", 
      name: "ngrok",
      description: "Secure tunneling for local development",
      status: "connected",
      enabled: true,
      icon: "🔗",
      config: {
        tunnel: "https://abc123.ngrok.io",
        region: "us"
      }
    },
    {
      id: "openai",
      name: "OpenAI",
      description: "GPT-4 language model for conversations",
      status: "connected", 
      enabled: true,
      icon: "🤖",
      config: {
        model: "gpt-4",
        temperature: "0.7"
      }
    },
    {
      id: "elevenlabs",
      name: "ElevenLabs",
      description: "AI voice synthesis and speech generation",
      status: "pending",
      enabled: false,
      icon: "🗣️",
      config: null
    },
    {
      id: "deepgram",
      name: "Deepgram", 
      description: "Speech-to-text transcription service",
      status: "disconnected",
      enabled: false,
      icon: "🎤",
      config: null
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "connected":
        return (
          <Badge variant="outline" className="border-voice-success text-voice-success bg-voice-success/10">
            <CheckCircle className="h-3 w-3 mr-1" />
            Connected
          </Badge>
        );
      case "pending":
        return (
          <Badge variant="outline" className="border-voice-warning text-voice-warning bg-voice-warning/10">
            <AlertCircle className="h-3 w-3 mr-1" />
            Pending
          </Badge>
        );
      case "disconnected":
        return (
          <Badge variant="outline" className="border-voice-error text-voice-error bg-voice-error/10">
            <AlertCircle className="h-3 w-3 mr-1" />
            Disconnected
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
            Integrations
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage external services and API connections
          </p>
        </div>
        <Button className="bg-gradient-voice hover:opacity-90">
          <Webhook className="h-4 w-4 mr-2" />
          Add Integration
        </Button>
      </div>

      <div className="grid gap-6">
        {integrations.map((integration) => (
          <Card key={integration.id} className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{integration.icon}</div>
                  <div>
                    <CardTitle className="text-xl flex items-center gap-3">
                      {integration.name}
                      {getStatusBadge(integration.status)}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {integration.description}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Enabled</span>
                    <Switch 
                      checked={integration.enabled}
                      disabled={integration.status !== "connected"}
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Configure
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            {integration.config && (
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground">Configuration</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(integration.config).map(([key, value]) => (
                      <div key={key} className="p-3 rounded-lg bg-gradient-glass border border-border/30">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                        <p className="font-mono text-sm text-foreground mt-1">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {/* Integration Guide */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Integration Guide</CardTitle>
          <CardDescription>
            Learn how to set up and configure your integrations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <p className="font-medium">Twilio Setup Guide</p>
                <p className="text-sm text-muted-foreground">Configure phone numbers and webhooks</p>
              </div>
              <ExternalLink className="h-4 w-4 ml-auto" />
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <p className="font-medium">ngrok Configuration</p>
                <p className="text-sm text-muted-foreground">Secure tunnel setup for development</p>
              </div>
              <ExternalLink className="h-4 w-4 ml-auto" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Integrations;