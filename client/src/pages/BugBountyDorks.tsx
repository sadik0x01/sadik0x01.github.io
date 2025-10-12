import { useState } from "react";
import { Target, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// todo: remove mock functionality - Load from actual file in production
const bugBountyDorks = [
  "site:hackerone.com",
  "site:bugcrowd.com",
  "site:intigriti.com",
  "site:yeswehack.com",
  "inurl:security.txt",
  "site:*/security.txt",
  "\"bug bounty program\"",
  "\"responsible disclosure\"",
  "\"vulnerability disclosure\"",
  "intext:\"report security issue\"",
  "intext:\"security@\"",
  "\"hall of fame\"",
  "\"security policy\"",
  "\"report vulnerability\"",
  "\"bounty program\"",
  "inurl:responsible-disclosure",
  "inurl:security-policy",
  "\"/.well-known/security.txt\"",
  "\"submit a vulnerability\"",
  "\"coordinated disclosure\"",
];

export default function BugBountyDorks() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDorks = bugBountyDorks.filter((dork) =>
    dork.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDorkClick = (dork: string) => {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(dork)}`;
    window.open(searchUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-950 via-background to-amber-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover-elevate" data-testid="button-back">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>

        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-chart-4/20 rounded-full mb-6">
            <Target className="w-16 h-16 text-chart-4" />
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-black mb-4 text-foreground">
            Bug Bounty <span className="text-chart-4">Dorks</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Find bug bounty programs, security policies, and disclosure guidelines
          </p>
          <div className="h-1 w-32 bg-chart-4 mx-auto"></div>
        </div>

        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Target className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search dorks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-6 text-lg bg-card/50 backdrop-blur-sm border-chart-4/30 focus:border-chart-4"
              data-testid="input-search-dorks"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDorks.map((dork, index) => (
            <button
              key={index}
              onClick={() => handleDorkClick(dork)}
              className="p-4 bg-card/50 backdrop-blur-sm border border-chart-4/30 rounded-lg hover:border-chart-4 hover:shadow-lg hover:shadow-chart-4/20 transition-all text-left hover-elevate active-elevate-2 group"
              data-testid={`dork-button-${index}`}
            >
              <div className="flex items-start justify-between">
                <code className="text-sm font-mono text-foreground break-all">{dork}</code>
                <ExternalLink className="w-4 h-4 text-chart-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
              </div>
            </button>
          ))}
        </div>

        {filteredDorks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No dorks found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
