import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Zap,
  Trophy,
  TrendingUp,
  Target,
  Clock,
  Gamepad2,
  Users,
  Dumbbell,
  ChevronDown,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Live", url: "/live", icon: Zap },
  { title: "Favorites", url: "/favorites", icon: Trophy },
  { title: "Promotions", url: "/promotions", icon: TrendingUp },
  { title: "eSports", url: "/esports", icon: Target },
  { title: "Quick Bets", url: "/quick-bets", icon: Clock },
];

const sportsItems = [
  { title: "Football", url: "/sports/football", icon: Trophy, active: true },
  { title: "Basketball", url: "/sports/basketball", icon: Users },
  { title: "CS:GO", url: "/sports/csgo", icon: Gamepad2 },
  { title: "Tennis", url: "/sports/tennis", icon: Dumbbell },
  { title: "Ice Hockey", url: "/sports/hockey", icon: Target },
  { title: "Baseball", url: "/sports/baseball", icon: Trophy },
  { title: "Golf", url: "/sports/golf", icon: Target },
  { title: "Table Tennis", url: "/sports/table-tennis", icon: Users },
  { title: "Esports", url: "/sports/esports", icon: Gamepad2 },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const [sportsExpanded, setSportsExpanded] = useState(true);
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-sidebar-hover text-primary font-medium"
      : "text-muted-foreground hover:bg-sidebar-hover hover:text-foreground";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-sidebar-bg">
        {/* Logo */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Trophy className="w-5 h-5 text-primary-foreground" />
            </div>
            {!isCollapsed && (
              <span className="text-xl font-bold text-foreground">OnlineBets</span>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) => 
                        `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${getNavCls({ isActive })}`
                      }
                    >
                      <item.icon className="w-4 h-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Sports Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center justify-between px-3">
            {!isCollapsed && (
              <>
                <span className="text-muted-foreground text-sm font-medium">Games</span>
                <button
                  onClick={() => setSportsExpanded(!sportsExpanded)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      sportsExpanded ? "rotate-0" : "-rotate-90"
                    }`}
                  />
                </button>
              </>
            )}
          </SidebarGroupLabel>
          
          {(sportsExpanded || isCollapsed) && (
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {sportsItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className={({ isActive }) => 
                          `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${getNavCls({ isActive })}`
                        }
                      >
                        <item.icon className="w-4 h-4" />
                        {!isCollapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          )}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}