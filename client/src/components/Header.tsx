import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/lib/theme-context";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Skills", path: "/#skills" },
    { name: "Achievements", path: "/#achievements" },
    { name: "Certifications", path: "/#certifications" },
    { name: "Writeups", path: "/#writeups" },
    { name: "Security Tools", path: "/#tools" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-display text-2xl font-black text-primary tracking-wider hover-elevate px-2 py-1 rounded-md cursor-pointer">
              SADIK0X01
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors hover-elevate rounded-md"
                data-testid={`nav-${item.name.toLowerCase().replace(" ", "-")}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover-elevate"
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover-elevate"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`mobile-nav-${item.name.toLowerCase().replace(" ", "-")}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
