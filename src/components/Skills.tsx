import { Code2, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const Skills = () => {
  const skills = [
    "Guest Post Outreach",
    "Content Placement",
    "Niche Edits",
    "Outreach Negotiation",
    "Contextual Backlinks",
    "White-Hat SEO",
    "Email Marketing",
    "Relationship Building"
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center animate-slide-up">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>
          
          <div className="flex flex-wrap gap-3 justify-center animate-slide-up">
            {skills.map((skill, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="px-6 py-3 text-base border-accent/30 text-foreground hover:bg-accent-soft hover:border-accent transition-smooth"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mt-12">
            <Card className="p-6 shadow-soft border-border/50 hover:shadow-glow transition-smooth">
              <Code2 className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Technical Skills</h3>
              <p className="text-muted-foreground">
                SEO tools, Analytics platforms, Outreach automation, Content management systems
              </p>
            </Card>
            
            <Card className="p-6 shadow-soft border-border/50 hover:shadow-glow transition-smooth">
              <GraduationCap className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Languages</h3>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Urdu</span> (Native) • <span className="font-semibold text-foreground">English</span> (Professional)
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
