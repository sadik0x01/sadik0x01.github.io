import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { FaTwitter, FaLinkedin, FaFacebook, FaGithub, FaDiscord, FaMedium } from "react-icons/fa";
import { SiHackthebox } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socialContacts = [
  { icon: FaTwitter, url: "https://x.com/sadik0x01", label: "Twitter/X" },
  { icon: FaLinkedin, url: "https://www.linkedin.com/in/sadik0x01/", label: "LinkedIn" },
  { icon: FaFacebook, url: "https://www.facebook.com/sadik0x01", label: "Facebook" },
  { icon: FaGithub, url: "https://github.com/sadik0x01", label: "GitHub" },
  { icon: FaDiscord, url: "https://discord.com/users/1033024826799030312", label: "Discord" },
  { icon: SiHackthebox, url: "https://app.hackthebox.com/profile/1314761", label: "Hack The Box" },
  { icon: FaMedium, url: "https://sadik0x01.medium.com/", label: "Medium" },
  { icon: Mail, url: "mailto:sadikm0x01@gmail.com", label: "Email" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For prototype: simulate form submission
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent! ✓",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-24 bg-background" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-4"></div>
          <p className="text-2xl text-muted-foreground">
            Don't Be Shy — Say Hi! 👋
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  required
                  className="font-mono"
                  data-testid="input-name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                  className="font-mono"
                  data-testid="input-email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  rows={6}
                  required
                  className="font-mono"
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full font-display text-lg"
                data-testid="button-send-message"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
              Connect With Me
            </h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out through any of these platforms. I'm always open to discussing security research, collaboration opportunities, or just chatting about cybersecurity!
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {socialContacts.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all hover-elevate group"
                    data-testid={`contact-link-${social.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <Icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors mb-2" />
                    <span className="text-xs text-center text-muted-foreground group-hover:text-primary transition-colors">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="p-6 bg-card border border-border rounded-lg">
              <h4 className="font-semibold text-foreground mb-4">Direct Contact</h4>
              <a
                href="mailto:sadikm0x01@gmail.com"
                className="text-primary hover:underline font-mono text-lg"
                data-testid="link-email"
              >
                sadikm0x01@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
