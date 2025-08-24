import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search, User, ShoppingCart, Settings, Bell } from "lucide-react";

export function BettingHeader() {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-foreground" />
        
        <div className="hidden md:flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search sports, teams, or events..." 
              className="pl-10 w-80 bg-background"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" className="hidden md:flex">
          <Bell className="w-4 h-4" />
        </Button>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">En</span>
          <div className="w-6 h-4 bg-success rounded-sm"></div>
        </div>

        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Add to Cart
        </Button>

        <Button variant="outline" className="border-border">
          Get Unlimited Downloads
        </Button>

        <div className="flex items-center gap-2">
          <Button className="bg-warning text-warning-foreground hover:bg-warning/90">
            Log In
          </Button>
          <Button className="bg-success text-success-foreground hover:bg-success/90">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}