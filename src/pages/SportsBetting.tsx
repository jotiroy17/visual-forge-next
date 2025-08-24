import { Sidebar } from "@/components/Sidebar";
import { MatchCard } from "@/components/MatchCard";
import { BettingSlip } from "@/components/BettingSlip";
import { MatchDetails } from "@/components/MatchDetails";
import furiaLogo from "@/assets/furia-logo.png";
import outsidersLogo from "@/assets/outsiders-logo.png";

const SportsBetting = () => {
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
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <div className="flex-1 flex">
        <main className="flex-1 p-6">
          <div className="max-w-4xl">
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span>Home</span>
                <span>→</span>
                <span>Details</span>
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-4">Details</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-primary px-3 py-1 rounded">
                  <span className="text-primary-foreground font-medium">📊 Scoreboard</span>
                </div>
              </div>
            </div>

            <MatchCard {...matchData} />
            
            <MatchDetails />
          </div>
        </main>

        <BettingSlip />
      </div>
    </div>
  );
};

export default SportsBetting;