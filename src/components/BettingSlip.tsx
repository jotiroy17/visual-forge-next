import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X, MessageCircle, Settings, TrendingUp } from "lucide-react";

interface BettingSlipProps {
  isOpen?: boolean;
}

export function BettingSlip({ isOpen = false }: BettingSlipProps) {
  return (
    <div className="w-80 bg-sidebar-bg border-l border-border min-h-screen p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          <Button size="sm" variant="secondary" className="bg-success text-success-foreground">
            My Slip
          </Button>
          <Button size="sm" variant="ghost" className="text-muted-foreground">
            My Bets
          </Button>
        </div>
        <Button size="sm" variant="ghost" className="text-muted-foreground">
          <Settings className="w-4 h-4" />
        </Button>
      </div>

      <Card className="bg-card border-border p-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground mb-1">1 betsx in Multiplay</div>
          <div className="text-sm text-muted-foreground mb-4">
            Always win on Odds changes
          </div>
          <div className="bg-secondary p-2 rounded mb-4">
            <div className="text-lg font-bold text-foreground">Possible win</div>
            <div className="text-xl font-bold text-success">$398</div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Max</span>
              <span className="text-foreground">$198</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Min</span>
              <span className="text-foreground">$0</span>
            </div>
          </div>
          <Button className="w-full bg-success text-success-foreground hover:bg-success/90">
            Place Bet $100
          </Button>
        </div>
      </Card>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          Popular bets
        </h3>
        <div className="space-y-2">
          {[
            { match: "Navi", odds: "2.32", team: "Complex" },
            { match: "Astrois - Astrois", odds: "1.77", team: "" },
          ].map((bet, index) => (
            <Card key={index} className="bg-odds-bg border-border p-3">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm font-medium text-foreground">{bet.match}</div>
                  {bet.team && <div className="text-xs text-muted-foreground">{bet.team}</div>}
                </div>
                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                  {bet.odds}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-foreground">What can I do for you?</span>
        </div>
        
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">AI</span>
            </div>
            <div className="flex-1">
              <div className="text-sm text-muted-foreground">What can I do for you?</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}