import { Phone, Settings, Activity, BarChart3, Users, Mic, Webhook, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  activeItem?: string;
  onItemSelect?: (item: string) => void;
}

const navigationItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Activity,
    active: true
  },
  {
    id: "agents",
    label: "Voice Agents",
    icon: Mic
  },
  {
    id: "calls",
    label: "Call History",
    icon: Phone
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3
  },
  {
    id: "integrations",
    label: "Integrations",
    icon: Webhook
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings
  }
];

export const Sidebar = ({ activeItem = "dashboard", onItemSelect }: SidebarProps) => {
  return (
    <div className="w-64 h-screen bg-card/30 backdrop-blur-sm border-r border-border/50 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-voice">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">VoiceAI</h2>
            <p className="text-xs text-muted-foreground">Business Agent</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 h-11 px-3 transition-all duration-200",
                isActive 
                  ? "bg-gradient-voice text-white hover:bg-gradient-voice hover:opacity-90" 
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
              onClick={() => onItemSelect?.(item.id)}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Button>
          );
        })}
      </nav>

      {/* Status */}
      <div className="p-4 border-t border-border/50">
        <div className="p-3 rounded-lg bg-gradient-glass border border-voice-primary/20">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-voice-active animate-pulse-glow"></div>
            <span className="text-sm font-medium text-foreground">System Online</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Twilio connected • ngrok tunnel active
          </p>
        </div>
      </div>
    </div>
  );
};