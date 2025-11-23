import { useState } from "react";
import { Mail, Linkedin, ExternalLink, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center animate-slide-up">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          
          <p className="text-lg text-muted-foreground mb-10 text-center animate-slide-up">
            I'm always interested in hearing about new projects and opportunities. Whether you need link building expertise or SEO consultation, let's connect!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h3>
              <p className="text-foreground/70 leading-relaxed">
                Fill out the form and I'll get back to you within 24 hours. You can also reach me directly via email or LinkedIn.
              </p>
              
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-accent/30 hover:bg-accent-soft hover:border-accent transition-smooth"
                  onClick={() => window.location.href = 'mailto:faizhassan541@gmail.com'}
                >
                  <Mail className="mr-3 h-5 w-5 text-accent" />
                  faizhassan541@gmail.com
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-accent/30 hover:bg-accent-soft hover:border-accent transition-smooth"
                  onClick={() => window.open('https://www.linkedin.com/in/faizhassan-seo', '_blank')}
                >
                  <Linkedin className="mr-3 h-5 w-5 text-accent" />
                  Connect on LinkedIn
                  <ExternalLink className="ml-auto h-4 w-4" />
                </Button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div>
                <Input 
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-border/50 focus:border-accent transition-smooth"
                />
              </div>
              
              <div>
                <Input 
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-border/50 focus:border-accent transition-smooth"
                />
              </div>
              
              <div>
                <Textarea 
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-border/50 focus:border-accent transition-smooth min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent-glow text-accent-foreground shadow-glow transition-smooth group"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
