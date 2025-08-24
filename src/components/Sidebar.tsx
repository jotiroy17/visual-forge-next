import { Home, Zap, Gamepad2, Trophy, Target, Clock, TrendingUp, Dumbbell, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const sportsCategories = [
  { icon: Home, label: "Home", active: false },
  { icon: Zap, label: "Live", active: false },
  { icon: Trophy, label: "Favorites", active: false },
  { icon: TrendingUp, label: "Promotions", active: false },
  { icon: Target, label: "eSports", active: false },
  { icon: Clock, label: "Quick Bets", active: false },
];

const games = [
  { icon: Trophy, label: "Football", active: true },
  { icon: Target, label: "Basketball", active: false },
  { icon: Gamepad2, label: "CS:GO", active: false },
  { icon: Users, label: "Basketball", active: false },
  { icon: Dumbbell, label: "Tennis", active: false },
  { icon: Trophy, label: "Esports", active: false },
  { icon: Target, label: "Golf 2", active: false },
  { icon: Users, label: "IGL", active: false },
  { icon: Dumbbell, label: "Ice Hockey", active: false },
  { icon: Trophy, label: "esGockey", active: false },
  { icon: Target, label: "Table Tennis", active: false },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-sidebar-bg border-r border-border min-h-screen">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Trophy className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">OnlineSports</span>
        </div>

        <div className="space-y-1 mb-8">
          {sportsCategories.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`w-full justify-start gap-3 h-10 px-3 ${
                item.active 
                  ? "bg-sidebar-hover text-primary" 
                  : "text-muted-foreground hover:bg-sidebar-hover hover:text-foreground"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Button>
          ))}
        </div>

        <div className="space-y-1">
          <h3 className="text-sm font-medium text-muted-foreground mb-3 px-3">Games</h3>
          {games.map((game, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`w-full justify-start gap-3 h-10 px-3 ${
                game.active 
                  ? "bg-sidebar-hover text-primary" 
                  : "text-muted-foreground hover:bg-sidebar-hover hover:text-foreground"
              }`}
            >
              <game.icon className="w-4 h-4" />
              {game.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}