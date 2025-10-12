import { Search, Github, Server, Target, Radar } from "lucide-react";
import { Link } from "wouter";

const tools = [
  {
    name: "Google Dorks",
    path: "/google-dorks",
    icon: Search,
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-chart-3/50 hover:border-chart-3",
    description: "Advanced Google search operators for recon",
  },
  {
    name: "GitHub Dorks",
    path: "/github-dorks",
    icon: Github,
    gradient: "from-purple-500/20 to-violet-500/20",
    borderColor: "border-chart-2/50 hover:border-chart-2",
    description: "Discover secrets in code repositories",
  },
  {
    name: "Shodan Dorks",
    path: "/shodan-dorks",
    icon: Server,
    gradient: "from-red-500/20 to-rose-500/20",
    borderColor: "border-chart-5/50 hover:border-chart-5",
    description: "IoT and infrastructure reconnaissance",
  },
  {
    name: "Bug Bounty Dorks",
    path: "/bug-bounty-dorks",
    icon: Target,
    gradient: "from-yellow-500/20 to-amber-500/20",
    borderColor: "border-chart-4/50 hover:border-chart-4",
    description: "Find bug bounty programs and platforms",
  },
  {
    name: "Recon Methodology",
    path: "/recon-methodology",
    icon: Radar,
    gradient: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-primary/50 hover:border-primary",
    description: "Comprehensive reconnaissance toolkit",
  },
];

export default function SecurityToolsGrid() {
  return (
    <section className="py-24 bg-background" id="tools">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Security <span className="text-primary">Tools</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful reconnaissance and security research tools for bug bounty hunters
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link key={tool.name} href={tool.path}>
                <div
                  className={`block p-8 bg-gradient-to-br ${tool.gradient} bg-card border-2 ${tool.borderColor} rounded-lg hover:shadow-2xl hover:shadow-primary/20 transition-all cursor-pointer hover-elevate group`}
                  data-testid={`tool-card-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-2xl font-bold mb-2 text-foreground">
                    {tool.name}
                  </h3>
                  <p className="text-muted-foreground">{tool.description}</p>
                  <div className="mt-4 text-primary font-semibold group-hover:translate-x-2 transition-transform inline-block">
                    Launch Tool →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
