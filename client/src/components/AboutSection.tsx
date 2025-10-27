import { Shield, Code, Search, FileText } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Bug Bounty Hunter",
    description: "Specializing in discovering critical security vulnerabilities",
  },
  {
    icon: Code,
    title: "Web Pentester",
    description: "Expert in web application security testing and exploitation",
  },
  {
    icon: Search,
    title: "Security Researcher",
    description: "Dedicated to advancing cybersecurity knowledge and practices",
  },
  {
    icon: FileText,
    title: "Vulnerability Assessment",
    description: "Rigorous testing to strengthen digital defenses",
  },
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-background" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              As an <span className="text-primary font-semibold">ethical hacker</span> and dedicated bug bounty hunter, I specialize in uncovering and addressing critical security vulnerabilities across{" "}
              <span className="text-primary">Web applications</span>,{" "}
              <span className="text-primary">Mobile apps</span>, and{" "}
              <span className="text-primary">APIs</span>.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              My approach involves rigorous{" "}
              <span className="text-primary font-semibold">Vulnerability Assessments</span> and{" "}
              <span className="text-primary font-semibold">Penetration Testing</span>, aimed at strengthening an organization's digital defenses.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Driven by a profound passion for cybersecurity, I actively work to find and fix flaws, thereby enhancing overall digital safety and fostering a more secure online ecosystem.
            </p>
            
            <div className="mt-8 p-4 bg-card border border-border rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-semibold text-foreground">Dhaka, Bangladesh</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Specialization</p>
                  <p className="font-semibold text-foreground">Security Research</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-muted-foreground mb-1">Languages</p>
                  <p className="font-semibold text-foreground">English, Bangla, Hindi, Urdu</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all hover-elevate"
                  data-testid={`card-highlight-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-display text-lg font-bold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
