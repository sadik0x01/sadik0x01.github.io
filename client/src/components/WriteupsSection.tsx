import { BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WriteupsSection() {
  return (
    <section className="py-24 bg-card" id="writeups">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            <BookOpen className="inline-block w-10 h-10 mr-3 text-primary" />
            Writeups
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read my latest security writeups and research articles on Medium
          </p>
        </div>

        <div className="p-12 bg-background border-2 border-border rounded-lg hover:border-primary transition-all hover-elevate">
          <div className="font-mono text-lg text-muted-foreground mb-6">
            <span className="text-primary">$</span> open medium.com/@sadik0x01
          </div>
          
          <a
            href="https://sadik0x01.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="font-display text-lg px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40"
              data-testid="button-visit-medium"
            >
              Visit My Medium Blog
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </a>
          
          <p className="mt-6 text-sm text-muted-foreground">
            Follow me on Medium to stay updated with my latest findings
          </p>
        </div>
      </div>
    </section>
  );
}
