import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaLinkedin, FaFacebook, FaGithub, FaDiscord, FaMedium } from "react-icons/fa";
import { SiHackthebox } from "react-icons/si";
import { Mail } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: FaTwitter, url: "https://x.com/sadik0x01", label: "Twitter/X" },
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/sadik0x01/", label: "LinkedIn" },
  { icon: FaFacebook, url: "https://www.facebook.com/sadik0x01", label: "Facebook" },
  { icon: FaGithub, url: "https://github.com/sadik0x01", label: "GitHub" },
  { icon: FaDiscord, url: "https://discord.com/users/1033024826799030312", label: "Discord" },
  { icon: SiHackthebox, url: "https://app.hackthebox.com/profile/1314761", label: "Hack The Box" },
  { icon: FaMedium, url: "https://sadik0x01.medium.com/", label: "Medium" },
  { icon: Mail, url: "mailto:sadikm0x01@gmail.com", label: "Email" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background" id="home">
      <ParticlesBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <div className="mb-8">
          <img
            src="/profile.jpg"
            alt="Sadik Mahmud Profile"
            className="w-48 h-48 mx-auto rounded-full border-4 border-primary shadow-2xl animate-pulse-glow object-cover"
            data-testid="img-profile"
          />
        </div>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black mb-4 text-foreground">
          SADIK MAHMUD
        </h1>
        
        <div className="text-xl sm:text-2xl lg:text-3xl font-medium mb-2 text-muted-foreground font-accent">
          <span className="text-primary">@sadik0x01</span>
        </div>

        <div className="h-16 sm:h-20 flex items-center justify-center mb-8">
          <TypeAnimation
            sequence={[
              "Bug Bounty Hunter",
              2000,
              "Security Researcher",
              2000,
              "Cybersecurity Enthusiast",
              2000,
              "Web Pentester",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary"
            repeat={Infinity}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all hover-elevate active-elevate-2"
                aria-label={social.label}
                data-testid={`link-social-${social.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Icon className="w-6 h-6 text-foreground" />
              </a>
            );
          })}
        </div>

        <a href="#tools">
          <Button
            size="lg"
            className="font-display text-lg px-8 py-6 shadow-lg shadow-primary/30 hover:shadow-primary/50"
            data-testid="button-view-tools"
          >
            View Security Tools
          </Button>
        </a>
      </div>
    </section>
  );
}
