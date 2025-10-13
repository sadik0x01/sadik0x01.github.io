import { Lock, Award } from "lucide-react";

export default function CertificationsSection() {
  return (
    <section className="py-24 bg-card" id="certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            <Award className="inline-block w-10 h-10 mr-3 text-primary" />
            Certifications
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="p-12 bg-background border-2 border-dashed border-border rounded-lg text-center">
            <Lock className="w-20 h-20 mx-auto mb-6 text-muted-foreground/50" />
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
              Coming Soon...
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-2">
              Professional certifications and credentials will be displayed here.
            </p>
            <p className="text-sm text-muted-foreground">
              Stay tuned for updates on OSCP, CEH, and other security certifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
