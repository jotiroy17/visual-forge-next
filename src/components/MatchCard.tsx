import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface MatchCardProps {
  homeTeam: {
    name: string;
    logo: string;
  };
  awayTeam: {
    name: string;
    logo: string;
  };
  score: {
    home: number;
    away: number;
  };
  round: string;
  isLive?: boolean;
}

export function MatchCard({ homeTeam, awayTeam, score, round, isLive = true }: MatchCardProps) {
  return (
    <Card className="bg-match-bg border-border p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <Badge variant="secondary" className="bg-success text-success-foreground">
          {isLive ? "LIVE" : "Upcoming"}
        </Badge>
        <div className="text-sm text-muted-foreground">{round}</div>
      </div>

      <div className="flex items-center justify-center gap-8 mb-6">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mb-2 overflow-hidden">
            <img src={homeTeam.logo} alt={homeTeam.name} className="w-12 h-12 object-contain" />
          </div>
          <span className="font-medium text-foreground">{homeTeam.name}</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 text-2xl font-bold text-foreground mb-1">
            <span>{score.home}</span>
            <span className="text-muted-foreground">vs</span>
            <span>{score.away}</span>
          </div>
          {isLive && (
            <div className="flex flex-col items-center text-sm text-muted-foreground">
              <div className="text-warning font-medium">13</div>
              <div>10</div>
              <div>10</div>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center mb-2 overflow-hidden">
            <img src={awayTeam.logo} alt={awayTeam.name} className="w-12 h-12 object-contain" />
          </div>
          <span className="font-medium text-foreground">{awayTeam.name}</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
        <Button variant="secondary" className="bg-odds-bg hover:bg-odds-hover hover:text-primary-foreground text-sm">
          All matches
        </Button>
        <Button variant="secondary" className="bg-odds-bg hover:bg-odds-hover hover:text-primary-foreground text-sm">
          Winner
        </Button>
        <Button variant="secondary" className="bg-odds-bg hover:bg-odds-hover hover:text-primary-foreground text-sm">
          Total
        </Button>
        <Button variant="secondary" className="bg-odds-bg hover:bg-odds-hover hover:text-primary-foreground text-sm">
          Handicap
        </Button>
      </div>
    </Card>
  );
}