import { Card } from "@/components/ui/card";
import { Brain, Users, Smile, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Anxiety & Stress Management",
      description: "Learn practical techniques to manage overwhelming thoughts and find calm in daily life"
    },
    {
      icon: Smile,
      title: "Depression Support",
      description: "Work through feelings of sadness and rediscover joy and meaning in your life"
    },
    {
      icon: Users,
      title: "Relationship Counseling",
      description: "Improve communication and strengthen connections with those who matter most"
    },
    {
      icon: TrendingUp,
      title: "Personal Growth",
      description: "Develop self-awareness and build the skills for lasting positive change"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How I Can Help
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer specialized support for a range of mental health concerns, 
            tailoring my approach to meet your unique needs and goals.
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
