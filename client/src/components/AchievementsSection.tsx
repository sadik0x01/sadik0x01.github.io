import { Award, Trophy, Building2 } from "lucide-react";
import { SiGoogle, SiFacebook, SiAdobe, SiSony } from "react-icons/si";

const achievements = [
  {
    company: "Google",
    icon: SiGoogle,
    title: "Bug Reported",
    description: "Honorable Mentions",
  },
  {
    company: "Facebook",
    icon: SiFacebook,
    title: "Bug Reported",
    description: "",
  },
  {
    company: "Microsoft",
    icon: Building2,
    title: "Acknowledged",
    description: "",
  },
  {
    company: "Adobe",
    icon: SiAdobe,
    title: "Hall of Fame",
    description: "",
  },
  {
    company: "Sony",
    icon: SiSony,
    title: "Received Swag",
    description: "",
  },
];

export default function AchievementsSection() {
  return (
    <section className="py-24 bg-background" id="achievements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            <Trophy className="inline-block w-10 h-10 mr-3 text-primary" />
            Achievements
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition from leading technology companies for security research and responsible disclosure
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.company}
                className="relative p-8 bg-card border border-border rounded-lg hover:border-primary hover:shadow-xl hover:shadow-primary/20 transition-all hover-elevate group"
                data-testid={`achievement-${achievement.company.toLowerCase()}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                    {achievement.company}
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-4 h-4 text-primary" />
                    <p className="font-semibold text-primary">{achievement.title}</p>
                  </div>
                  {achievement.description && (
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
