import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { X, MessageCircle, Settings, TrendingUp, ShoppingCart } from "lucide-react";

interface ResponsiveBettingSlipProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function ResponsiveBettingSlip({ isOpen = true, onClose }: ResponsiveBettingSlipProps) {
  const [activeTab, setActiveTab] = useState("slip");

  return (
    <div className={`w-full lg:w-80 bg-sidebar-bg border-l border-border min-h-full ${
      isOpen ? 'block' : 'hidden lg:block'
    }`}>
      <div className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="slip" className="text-sm">My Slip</TabsTrigger>
            <TabsTrigger value="bets" className="text-sm">My Bets</TabsTrigger>
          </TabsList>

          <TabsContent value="slip" className="space-y-4">
            <Card className="bg-card border-border p-4">
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">1 bet in Multiplay</span>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  Always win on Odds changes
                </div>
                
                <div className="bg-secondary p-3 rounded-lg">
                  <div className="text-sm font-medium text-foreground mb-1">Possible win</div>
                  <div className="text-2xl font-bold text-success">$398</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Max</span>
                    <span className="text-foreground font-medium">$198</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Min</span>
                    <span className="text-foreground font-medium">$0</span>
                  </div>
                </div>
                
                <Input 
                  placeholder="Enter stake amount..." 
                  className="bg-background"
                  defaultValue="100"
                />
                
                <Button className="w-full bg-success text-success-foreground hover:bg-success/90">
                  Place Bet $100
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="bets" className="space-y-4">
            <div className="text-center text-muted-foreground py-8">
              <div className="text-lg font-medium mb-2">No active bets</div>
              <div className="text-sm">Your betting history will appear here</div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Popular Bets Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Popular bets
          </h3>
          
          <div className="space-y-3">
            {[
              { match: "Navi vs Complex", team: "Navi", odds: "2.32" },
              { match: "Astralis vs Vitality", team: "Astralis", odds: "1.77" },
              { match: "G2 vs FaZe", team: "G2", odds: "2.15" },
            ].map((bet, index) => (
              <Card key={index} className="bg-odds-bg border-border p-3 hover:bg-odds-hover/10 transition-colors cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium text-foreground">{bet.match}</div>
                    <div className="text-xs text-muted-foreground">{bet.team} win</div>
                  </div>
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    {bet.odds}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Chat Section */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Betting Assistant</span>
          </div>
          
          {[1, 2].map((_, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-card rounded-lg border border-border">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-primary-foreground">AI</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-muted-foreground">
                  {index === 0 
                    ? "What can I help you with today?" 
                    : "Need help with betting strategies?"
                  }
                </div>
              </div>
            </div>
          ))}
          
          <Input 
            placeholder="Ask me anything about betting..." 
            className="bg-background text-sm"
          />
        </div>
      </div>
    </div>
  );
}