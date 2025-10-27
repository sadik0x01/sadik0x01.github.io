import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/lib/theme-context";
import Home from "@/pages/Home";
import GoogleDorks from "@/pages/GoogleDorks";
import GitHubDorks from "@/pages/GitHubDorks";
import ShodanDorks from "@/pages/ShodanDorks";
import BugBountyDorks from "@/pages/BugBountyDorks";
import ReconMethodology from "@/pages/ReconMethodology";
import NotFound from "@/pages/not-found";

// Get the base path from environment or default to root
const basePath = import.meta.env.BASE_URL || '/';

function Router() {
  return (
    <WouterRouter base={basePath}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/google-dorks" component={GoogleDorks} />
        <Route path="/github-dorks" component={GitHubDorks} />
        <Route path="/shodan-dorks" component={ShodanDorks} />
        <Route path="/bug-bounty-dorks" component={BugBountyDorks} />
        <Route path="/recon-methodology" component={ReconMethodology} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
