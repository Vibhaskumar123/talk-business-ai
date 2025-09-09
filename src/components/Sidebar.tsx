import { Phone, Settings, Activity, BarChart3, Users, Mic, Webhook, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const navigationItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Activity,
    path: "/"
  },
  {
    id: "agents",
    label: "Voice Agents", 
    icon: Mic,
    path: "/agents"
  },
  {
    id: "calls",
    label: "Call History",
    icon: Phone,
    path: "/calls"
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    path: "/analytics"
  },
  {
    id: "integrations",
    label: "Integrations",
    icon: Webhook,
    path: "/integrations"
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    path: "/settings"
  }
];

export const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-card/30 backdrop-blur-sm border-r border-border/50 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border/50">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-voice">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">VoiceAI</h2>
            <p className="text-xs text-muted-foreground">Business Agent</p>
          </div>
        </NavLink>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 h-11 px-3 rounded-lg transition-all duration-200 text-left w-full",
                  isActive 
                    ? "bg-gradient-voice text-white" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )
              }
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </NavLink>
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