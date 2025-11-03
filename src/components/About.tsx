import { Card } from "@/components/ui/card";
import { Heart, Shield, Sparkles } from "lucide-react";
import headshotImage from "@/assets/renee-headshot.jpg";

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
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={headshotImage} 
                alt="Renée M. Murphy, MA Clinical Mental Health Counseling Student" 
                className="rounded-2xl shadow-[var(--shadow-card)] w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Meet Renée Murphy
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                My counseling approach is grounded in relationship, reflection, and understanding clients' stories and relationships. I specialize in supporting adults navigating trauma, loss, life transitions, and questions of identity and belonging. My perspective is shaped by a diverse life path that has included early experiences in foster care and adoption, service in the military, a long career in the tech industry, and training in meditation and compassion-based practices.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                These experiences deepen my respect for the complexity of people's stories and the many ways we adapt, survive, and reconnect. I believe counseling begins when people feel safe enough to explore the stories, patterns, and parts of themselves shaped by experience, culture, and family. Guided by collaboration and compassion, I help clients explore how these influences have shaped their relationships with themselves and others. Through this process, they begin to rediscover trust in their own wisdom and capacity for connection.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I bring a steady and curious presence to the counseling relationship, creating space for authentic expression and gentle transformation. My goal is to help clients reconnect with the parts of themselves that feel wounded or disconnected and start to experience a greater sense of wholeness, trust, and ease. Together, we work toward understanding and integration, building self-awareness and connection in ways that support lasting growth and change. Throughout my clinical and research work, I aim to honor the resilience that emerges when people understand their stories and begin to live with renewed peace and connection.
              </p>
              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-sm font-medium text-foreground mb-2">Clinical Training & Education</p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>• MA Clinical Mental Health Counseling, Antioch University (Dec 2026)</p>
                  <p>• 70+ hours: Trauma-Informed Care, DBT, IFS, Somatic Therapy</p>
                  <p>• TF-CBT Certified • IFS Level 1 Training</p>
                </div>
              </div>
            </div>
          </div>
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
