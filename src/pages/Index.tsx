import { Sidebar } from "@/components/Sidebar";
import VoiceAgentDashboard from "@/components/VoiceAgentDashboard";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <VoiceAgentDashboard />
      </main>
    </div>
  );
};

export default Index;
