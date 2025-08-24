import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const matchStats = [
  {
    category: "Match Winner",
    homeTeam: "FURIA",
    homeOdds: "1.75",
    awayTeam: "OutSiders", 
    awayOdds: "2.91"
  },
  {
    category: "Winner, Map 1",
    homeTeam: "FURIA",
    homeOdds: "1.89",
    awayTeam: "OutSiders",
    awayOdds: "1.75"
  },
  {
    category: "Winner, Map 2", 
    homeTeam: "FURIA",
    homeOdds: "1.61",
    awayTeam: "OutSiders",
    awayOdds: "2.17"
  },
  {
    category: "Winner, Map 3",
    homeTeam: "FURIA", 
    homeOdds: "1.69",
    awayTeam: "OutSiders",
    awayOdds: "1.90"
  }
];

const detailedStats = [
  {
    category: "Handicap, Map 1",
    expanded: false,
    stats: [
      { description: "Over 26.5", homeOdds: "1.78", awayOdds: "1.82" },
      { description: "Over 27.5", homeOdds: "2.02", awayOdds: "1.60" },
      { description: "Over 28.5", homeOdds: "2.87", awayOdds: "1.37" }
    ]
  },
  {
    category: "Map 1 result and total rounds",
    expanded: false,
    stats: [
      { description: "FURIA and over 26.5", homeOdds: "3.60", awayOdds: "" },
      { description: "FURIA and under 26.5", homeOdds: "3.30", awayOdds: "" }
    ]
  }
];

export function MatchDetails() {
  return (
    <div className="space-y-4">
      {matchStats.map((stat, index) => (
        <Card key={index} className="bg-match-bg border-border">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-foreground font-medium">{stat.category}</span>
              <ChevronUp className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
          <div className="px-4 pb-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-between items-center">
                <span className="text-foreground">{stat.homeTeam}</span>
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="bg-odds-bg hover:bg-odds-hover hover:text-primary-foreground min-w-[60px]"
                >
                  {stat.homeOdds}
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground">{stat.awayTeam}</span>
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="bg-odds-bg hover:bg-odds-hover hover:text-primary-foreground min-w-[60px]"
                >
                  {stat.awayOdds}
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}

      {detailedStats.map((section, index) => (
        <Card key={index} className="bg-match-bg border-border">
          <div className="p-4 flex items-center justify-between cursor-pointer">
            <span className="text-foreground font-medium">{section.category}</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
        </Card>
      ))}

      <Card className="bg-match-bg border-border">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-foreground font-medium">Total kills, Map 1, Round 1</span>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Odd</span>
              <div className="flex gap-4">
                <Button variant="secondary" size="sm" className="bg-odds-bg hover:bg-odds-hover hover:text-primary-foreground">
                  2.15
                </Button>
                <span className="text-foreground">Limit</span>
                <Button variant="secondary" size="sm" className="bg-odds-bg hover:bg-odds-hover hover:text-primary-foreground">
                  1.65
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}