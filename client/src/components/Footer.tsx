export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="h-0.5 w-32 bg-primary mx-auto mb-6"></div>
          <p className="text-sm text-muted-foreground">
            © 2025 Sadik0x01. Let's make the web safer together.
          </p>
          <a
            href="/robots.txt"
            target="_blank"
            className="text-xs text-muted-foreground hover:text-primary transition-colors mt-2 inline-block"
            data-testid="link-robots"
          >
            robots.txt
          </a>
        </div>
      </div>
    </footer>
  );
}
