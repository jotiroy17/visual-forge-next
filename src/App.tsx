import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BettingDashboard from "./pages/BettingDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BettingDashboard />} />
          <Route path="/live" element={<BettingDashboard />} />
          <Route path="/favorites" element={<BettingDashboard />} />
          <Route path="/promotions" element={<BettingDashboard />} />
          <Route path="/esports" element={<BettingDashboard />} />
          <Route path="/quick-bets" element={<BettingDashboard />} />
          <Route path="/sports/:sport" element={<BettingDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
