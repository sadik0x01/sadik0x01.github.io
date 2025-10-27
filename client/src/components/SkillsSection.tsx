import { useEffect, useState, useRef } from "react";
import { Globe, Code, Smartphone, FileCode, Shield, Terminal } from "lucide-react";

const skills = [
  { name: "Web Application Pentesting", percentage: 90, icon: Globe },
  { name: "API Pentesting", percentage: 80, icon: Code },
  { name: "Mobile Pentesting", percentage: 75, icon: Smartphone },
  { name: "JavaScript", percentage: 85, icon: FileCode },
  { name: "Bash", percentage: 40, icon: Terminal },
  { name: "Smart Contract Hacking", percentage: 25, icon: Shield },
];

function SkillBar({ skill }: { skill: typeof skills[0] }) {
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const Icon = skill.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
          setTimeout(() => setWidth(skill.percentage), 100);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [skill.percentage, visible]);

  return (
    <div ref={ref} className="mb-8" data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <Icon className="w-5 h-5 text-primary" />
          <span className="font-semibold text-foreground">{skill.name}</span>
        </div>
        <span className="text-sm font-mono text-primary">{skill.percentage}%</span>
      </div>
      <div className="h-3 bg-card border border-border rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-chart-1 transition-all duration-1000 ease-out rounded-full shadow-lg shadow-primary/30"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section className="py-24 bg-card" id="skills">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
          {skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
