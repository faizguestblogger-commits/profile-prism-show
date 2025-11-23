import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <section className="relative gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bS0yIDBoLTJ2Mmgydi0yem0wLTRoMnYtMmgtMnYyem0wIDBoLTJ2Mmgydi0yem0yLTJoLTJ2Mmgydi0yem0wLTJoMnYtMmgtMnYyem0tMiAwaDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-block mb-6">
            <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 text-sm px-4 py-1.5">
              Available for Opportunities
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 tracking-tight">
            Faiz Hassan
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px w-12 bg-accent"></div>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
              SEO & Link Building Specialist
            </p>
            <div className="h-px w-12 bg-accent"></div>
          </div>
          
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Specializing in ethical, white-hat link-building strategies that strengthen domain authority and improve organic visibility through data-driven approaches.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-glow text-accent-foreground shadow-glow transition-smooth group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-smooth"
              onClick={() => window.open('https://www.linkedin.com/in/faizhassan-seo', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
