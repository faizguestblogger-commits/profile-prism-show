import { Link2, FileText, Search, TrendingUp, Mail, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Link2,
      title: "Guest Post Outreach",
      description: "Strategic placement of high-quality content on authoritative websites to build natural backlinks and increase domain authority."
    },
    {
      icon: FileText,
      title: "Niche Edits",
      description: "Contextual link insertions within existing content on relevant websites for natural, powerful link building."
    },
    {
      icon: Search,
      title: "Broken Link Building",
      description: "Identifying and replacing broken links on authority sites with relevant, valuable content from your domain."
    },
    {
      icon: TrendingUp,
      title: "Link Building Strategy",
      description: "Comprehensive white-hat link building campaigns tailored to your niche and business goals for sustainable growth."
    },
    {
      icon: Mail,
      title: "Email Outreach Campaigns",
      description: "Personalized outreach to build relationships with webmasters and secure high-quality backlink opportunities."
    },
    {
      icon: Target,
      title: "SEO Consultation",
      description: "Expert guidance on technical SEO, on-page optimization, and link building strategies to improve organic visibility."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center animate-slide-up">
            Services
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 shadow-soft border-border/50 hover:shadow-glow transition-smooth group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-accent-soft p-3 rounded-lg w-fit mb-4 group-hover:bg-accent/20 transition-smooth">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-smooth">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
