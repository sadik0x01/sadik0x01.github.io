import { useState } from "react";
import { Radar, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// todo: remove mock functionality - Load from actual file in production
const reconDorks = [
  "site:example.com",
  "site:*.example.com",
  "inurl:example.com",
  "intext:example.com",
  "site:pastebin.com example.com",
  "site:github.com example.com",
  "site:stackoverflow.com example.com",
  "site:twitter.com example.com",
  "site:linkedin.com example.com",
  "whois example.com",
  "nslookup example.com",
  "dig example.com",
  "site:crt.sh example.com",
  "site:dnsdumpster.com example.com",
  "site:shodan.io example.com",
  "site:censys.io example.com",
  "site:wayback example.com",
  "site:archive.org example.com",
  "robots.txt example.com",
  "sitemap.xml example.com",
];

export default function ReconMethodology() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDorks = reconDorks.filter((dork) =>
    dork.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDorkClick = (dork: string) => {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(dork)}`;
    window.open(searchUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-background to-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover-elevate" data-testid="button-back">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>

        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-primary/20 rounded-full mb-6">
            <Radar className="w-16 h-16 text-primary" />
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-black mb-4 text-foreground">
            Recon <span className="text-primary">Methodology</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Comprehensive reconnaissance toolkit for passive information gathering
          </p>
          <div className="h-1 w-32 bg-primary mx-auto"></div>
        </div>

        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Radar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search dorks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-6 text-lg bg-card/50 backdrop-blur-sm border-primary/30 focus:border-primary"
              data-testid="input-search-dorks"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDorks.map((dork, index) => (
            <button
              key={index}
              onClick={() => handleDorkClick(dork)}
              className="p-4 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all text-left hover-elevate active-elevate-2 group"
              data-testid={`dork-button-${index}`}
            >
              <div className="flex items-start justify-between">
                <code className="text-sm font-mono text-foreground break-all">{dork}</code>
                <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
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
