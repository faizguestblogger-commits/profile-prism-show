import { Award, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Projects = () => {
  const projects = [
    {
      title: "Relevant Authority Guest Post",
      description: "Worked with marketing agencies to build relevant, authority-driven contextual backlinks through strategic guest post placements.",
      icon: Award
    },
    {
      title: "Contextual Backlink Building",
      description: "Collaborated with multiple digital marketing agencies to build high-quality contextual backlinks on relevant and authority websites.",
      icon: Globe
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center animate-slide-up">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 shadow-soft border-border/50 hover:shadow-glow transition-smooth group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-accent-soft p-4 rounded-lg w-fit mb-6 group-hover:bg-accent/20 transition-smooth">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
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
