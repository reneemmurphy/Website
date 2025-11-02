import { Card } from "@/components/ui/card";
import { Heart, Shield, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Creating a safe, non-judgmental space where you can be yourself"
    },
    {
      icon: Shield,
      title: "Confidential Support",
      description: "Your privacy and trust are my highest priorities"
    },
    {
      icon: Sparkles,
      title: "Evidence-Based",
      description: "Using proven therapeutic approaches tailored to your needs"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            About My Practice
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As an emerging mental health counselor, I'm dedicated to supporting individuals 
            through life's challenges with empathy, understanding, and evidence-based practices. 
            Whether you're dealing with anxiety, depression, relationship issues, or simply seeking 
            personal growth, I'm here to help you navigate your path forward.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={index}
                className="p-8 text-center hover:shadow-[var(--shadow-soft)] transition-all duration-300 border-border/50"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
