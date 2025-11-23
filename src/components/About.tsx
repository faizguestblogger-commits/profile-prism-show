import { MapPin, Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center animate-slide-up">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>
          
          <Card className="p-8 md:p-10 shadow-soft border-border/50 animate-slide-up">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              I'm an <span className="text-accent font-semibold">SEO and Link Building Specialist</span> with hands-on experience in building relevant, high-quality, and contextual backlinks that strengthen domain authority and improve organic visibility.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I focus on creating ethical, white-hat link-building strategies through guest posts, niche edits, broken link building, and outreach campaigns. My approach combines technical SEO knowledge with relationship-building skills to deliver sustainable, long-term results for clients.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-muted-foreground">Faisalabad, Pakistan</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-muted-foreground">03223403667</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">faizhassan541@gmail.com</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
