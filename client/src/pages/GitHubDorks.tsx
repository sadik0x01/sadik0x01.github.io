import { useState } from "react";
import { Github, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// todo: remove mock functionality - Load from actual file in production
const githubDorks = [
  "extension:pem private",
  "extension:ppk private",
  "extension:sql mysql dump",
  "extension:json api.forecast.io",
  "extension:json mongolab.com",
  "extension:yaml mongolab.com",
  "HEROKU_API_KEY language:json",
  "HEROKU_API_KEY language:shell",
  "AWS_ACCESS_KEY_ID",
  "AWS_SECRET_ACCESS_KEY",
  "api_key",
  "access_token",
  "private_key",
  "secret",
  "credentials",
  "password",
  "token",
  "auth",
  "authorization",
  "Bearer",
];

export default function GitHubDorks() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDorks = githubDorks.filter((dork) =>
    dork.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDorkClick = (dork: string) => {
    const searchUrl = `https://github.com/search?q=${encodeURIComponent(dork)}&type=code`;
    window.open(searchUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-background to-violet-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover-elevate" data-testid="button-back">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>

        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-chart-2/20 rounded-full mb-6">
            <Github className="w-16 h-16 text-chart-2" />
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-black mb-4 text-foreground">
            GitHub <span className="text-chart-2">Dorks</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover exposed secrets, credentials, and sensitive data in code repositories
          </p>
          <div className="h-1 w-32 bg-chart-2 mx-auto"></div>
        </div>

        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Github className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search dorks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-6 text-lg bg-card/50 backdrop-blur-sm border-chart-2/30 focus:border-chart-2"
              data-testid="input-search-dorks"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDorks.map((dork, index) => (
            <button
              key={index}
              onClick={() => handleDorkClick(dork)}
              className="p-4 bg-card/50 backdrop-blur-sm border border-chart-2/30 rounded-lg hover:border-chart-2 hover:shadow-lg hover:shadow-chart-2/20 transition-all text-left hover-elevate active-elevate-2 group"
              data-testid={`dork-button-${index}`}
            >
              <div className="flex items-start justify-between">
                <code className="text-sm font-mono text-foreground break-all">{dork}</code>
                <ExternalLink className="w-4 h-4 text-chart-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
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
