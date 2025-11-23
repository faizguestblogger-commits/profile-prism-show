import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Digital Marketing Manager",
      company: "TechFlow Inc.",
      content: "Faiz's link building strategies helped us increase our domain authority by 15 points in just 6 months. His white-hat approach and attention to quality is exceptional.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "SEO Director",
      company: "GrowthLab Agency",
      content: "Working with Faiz was a game-changer for our clients. His outreach campaigns consistently deliver high-quality backlinks from relevant, authoritative sites.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Content Marketing Lead",
      company: "Velocity Digital",
      content: "Faiz's professionalism and expertise in guest post outreach is outstanding. He built relationships with top-tier publishers that continue to benefit our campaigns.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center animate-slide-up">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-6 shadow-soft border-border/50 hover:shadow-glow transition-smooth animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-accent font-medium">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
