import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Experience = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center animate-slide-up">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>
          
          <Card className="p-8 md:p-10 shadow-soft border-border/50 relative overflow-hidden animate-slide-up">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-accent"></div>
            
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-accent-soft p-3 rounded-lg">
                <Briefcase className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Link Building & Outreach Specialist
                </h3>
                <p className="text-accent font-semibold mb-1">June 2024 - July 2025</p>
                <p className="text-muted-foreground mb-6">Faisalabad, Pakistan</p>
              </div>
            </div>
            
            <ul className="space-y-4 ml-16">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0"></div>
                <p className="text-foreground/80">
                  Built high-quality, niche-relevant backlinks through guest posts, niche edits, and manual outreach campaigns
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0"></div>
                <p className="text-foreground/80">
                  Managed comprehensive email outreach campaigns, crafted personalized pitches, and maintained long-term relationships with webmasters
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0"></div>
                <p className="text-foreground/80">
                  Focused exclusively on white-hat link-building strategies to ensure safe and sustainable SEO growth for clients
                </p>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
