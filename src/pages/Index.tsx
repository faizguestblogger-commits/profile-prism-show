import { Mail, Phone, MapPin, Linkedin, ExternalLink, Briefcase, GraduationCap, Code2, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
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
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Hero Section */}
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
              <Button size="lg" className="bg-accent hover:bg-accent-glow text-accent-foreground shadow-glow transition-smooth group">
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-smooth">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Experience Section */}
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

      {/* Skills Section */}
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

      {/* Projects Section */}
      <section className="py-20 md:py-28 bg-muted/30">
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

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 animate-slide-up">
              Let's Work Together
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            
            <p className="text-lg text-muted-foreground mb-10 animate-slide-up">
              I'm always interested in hearing about new projects and opportunities. Whether you need link building expertise or SEO consultation, let's connect!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-glow text-accent-foreground shadow-glow transition-smooth group"
                onClick={() => window.location.href = 'mailto:faizhassan541@gmail.com'}
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                faizhassan541@gmail.com
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-accent/30 text-foreground hover:bg-accent-soft hover:border-accent transition-smooth"
                onClick={() => window.open('https://www.linkedin.com/in/faizhassan-seo', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-primary-foreground/80">
              © 2024 Faiz Hassan. Built with passion for SEO & Digital Marketing.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
