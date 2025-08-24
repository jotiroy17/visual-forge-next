import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { BettingHeader } from "@/components/BettingHeader";
import { ResponsiveMatchCard } from "@/components/ResponsiveMatchCard";
import { ResponsiveBettingSlip } from "@/components/ResponsiveBettingSlip";
import { MatchDetails } from "@/components/MatchDetails";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, BarChart3 } from "lucide-react";
import furiaLogo from "@/assets/furia-logo.png";
import outsidersLogo from "@/assets/outsiders-logo.png";

const BettingDashboard = () => {
  const [bettingSlipOpen, setBettingSlipOpen] = useState(false);

  const matchData = {
    homeTeam: {
      name: "FURIA",
      logo: furiaLogo,
    },
    awayTeam: {
      name: "OutSiders", 
      logo: outsidersLogo,
    },
    score: {
      home: 0,
      away: 0,
    },
    round: "Break 1 of 5",
    isLive: true,
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <BettingHeader />
          
          <div className="flex flex-1 overflow-hidden">
            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
              <div className="p-4 lg:p-6">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-foreground">Details</span>
                </div>

                {/* Page Title */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
                  <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Match Details</h1>
                  
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge className="bg-primary text-primary-foreground flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      Scoreboard
                    </Badge>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="lg:hidden"
                      onClick={() => setBettingSlipOpen(!bettingSlipOpen)}
                    >
                      {bettingSlipOpen ? 'Close' : 'Open'} Betting Slip
                    </Button>
                  </div>
                </div>

                {/* Match Card */}
                <ResponsiveMatchCard {...matchData} />
                
                {/* Match Details */}
                <div className="lg:pr-6">
                  <MatchDetails />
                </div>
              </div>
            </main>

            {/* Betting Slip - Desktop always visible, Mobile toggle */}
            <div className={`${
              bettingSlipOpen ? 'block' : 'hidden'
            } lg:block w-full lg:w-80 border-l border-border`}>
              <ResponsiveBettingSlip 
                isOpen={bettingSlipOpen} 
                onClose={() => setBettingSlipOpen(false)} 
              />
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default BettingDashboard;