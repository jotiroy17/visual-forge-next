import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Team {
  name: string;
  logo: string;
}

interface ResponsiveMatchCardProps {
  homeTeam: Team;
  awayTeam: Team;
  score: {
    home: number;
    away: number;
  };
  round: string;
  isLive?: boolean;
}

export function ResponsiveMatchCard({ 
  homeTeam, 
  awayTeam, 
  score, 
  round, 
  isLive = true 
}: ResponsiveMatchCardProps) {
  return (
    <Card className="bg-match-bg border-border p-4 lg:p-6 mb-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
        <Badge variant="secondary" className="bg-success text-success-foreground w-fit">
          {isLive ? "LIVE" : "Upcoming"}
        </Badge>
        <div className="text-sm text-muted-foreground">{round}</div>
      </div>

      {/* Teams and Score */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Home Team */}
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-card rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
            <img src={homeTeam.logo} alt={homeTeam.name} className="w-8 h-8 lg:w-12 lg:h-12 object-contain" />
          </div>
          <div className="text-center md:text-left">
            <div className="font-medium text-foreground text-sm lg:text-base">{homeTeam.name}</div>
          </div>
        </div>

        {/* Score */}
        <div className="flex flex-col items-center justify-center order-first md:order-none">
          <div className="flex items-center gap-2 text-xl lg:text-2xl font-bold text-foreground mb-1">
            <span>{score.home}</span>
            <span className="text-muted-foreground text-sm lg:text-base">vs</span>
            <span>{score.away}</span>
          </div>
          {isLive && (
            <div className="flex gap-2 text-xs lg:text-sm text-muted-foreground">
              <div className="text-warning font-medium">13</div>
              <div>10</div>
              <div>10</div>
            </div>
          )}
        </div>

        {/* Away Team */}
        <div className="flex items-center gap-3 justify-center md:justify-end">
          <div className="text-center md:text-right order-2 md:order-first">
            <div className="font-medium text-foreground text-sm lg:text-base">{awayTeam.name}</div>
          </div>
          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-card rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
            <img src={awayTeam.logo} alt={awayTeam.name} className="w-8 h-8 lg:w-12 lg:h-12 object-contain" />
          </div>
        </div>
      </div>

      {/* Betting Options */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-4">
          <TabsTrigger value="overview" className="text-xs lg:text-sm">All matches</TabsTrigger>
          <TabsTrigger value="winner" className="text-xs lg:text-sm">Winner</TabsTrigger>
          <TabsTrigger value="total" className="text-xs lg:text-sm hidden lg:block">Total</TabsTrigger>
          <TabsTrigger value="handicap" className="text-xs lg:text-sm hidden lg:block">Handicap</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <Button 
              variant="secondary" 
              className="bg-odds-bg hover:bg-odds-hover hover:text-primary-foreground justify-between h-12"
            >
              <span>{homeTeam.name} Win</span>
              <span className="font-bold">1.75</span>
            </Button>
            <Button 
              variant="secondary" 
              className="bg-odds-bg hover:bg-odds-hover hover:text-primary-foreground justify-between h-12"
            >
              <span>{awayTeam.name} Win</span>
              <span className="font-bold">2.91</span>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="winner" className="space-y-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <Button 
              variant="secondary" 
              className="bg-odds-bg hover:bg-odds-hover hover:text-primary-foreground justify-between h-12"
            >
              <span>Map 1 - {homeTeam.name}</span>
              <span className="font-bold">1.89</span>
            </Button>
            <Button 
              variant="secondary" 
              className="bg-odds-bg hover:bg-odds-hover hover:text-primary-foreground justify-between h-12"
            >
              <span>Map 1 - {awayTeam.name}</span>
              <span className="font-bold">1.75</span>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="total" className="space-y-3">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <Button 
              variant="secondary" 
              className="bg-odds-bg hover:bg-odds-hover hover:text-primary-foreground justify-between"
            >
              <span>Over 26.5</span>
              <span className="font-bold">1.78</span>
            </Button>
            <Button 
              variant="secondary" 
              className="bg-odds-bg hover:bg-odds-hover hover:text-primary-foreground justify-between"
            >
              <span>Under 26.5</span>
              <span className="font-bold">1.82</span>
            </Button>
            <Button 
              variant="secondary" 
              className="bg-odds-bg hover:bg-odds-hover hover:text-primary-foreground justify-between"
            >
              <span>Exact 26</span>
              <span className="font-bold">8.50</span>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="handicap" className="space-y-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <Button 
              variant="secondary" 
              className="bg-odds-bg hover:bg-odds-hover hover:text-primary-foreground justify-between"
            >
              <span>{homeTeam.name} (-1.5)</span>
              <span className="font-bold">2.10</span>
            </Button>
            <Button 
              variant="secondary" 
              className="bg-odds-bg hover:bg-odds-hover hover:text-primary-foreground justify-between"
            >
              <span>{awayTeam.name} (+1.5)</span>
              <span className="font-bold">1.65</span>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}