import { Card } from "@/components/ui/card";
import { Brain, Users, Smile, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Trauma & Loss",
      description: "Navigate the impact of trauma and loss with compassionate, evidence-based support that honors your story"
    },
    {
      icon: TrendingUp,
      title: "Life Transitions",
      description: "Find clarity and strength during major life changes, discovering new possibilities for growth"
    },
    {
      icon: Users,
      title: "Identity & Belonging",
      description: "Explore questions of identity and belonging, building deeper connection with yourself and others"
    },
    {
      icon: Smile,
      title: "Wholeness & Integration",
      description: "Reconnect with parts of yourself that feel wounded or disconnected, moving toward greater ease"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How We Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Through collaboration and compassion, we explore how your experiences, culture, and 
            relationships have shaped you. Together, we work toward understanding and integration, 
            building self-awareness and connection that support lasting growth and change.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-[var(--shadow-soft)] transition-all duration-300 border-border/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20">
                      <Icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
