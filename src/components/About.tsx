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
                I'm bringing decades of leadership experience to the counseling profession. Currently pursuing my MA in Clinical Mental Health Counseling at Antioch University (graduating December 2026), I focus on trauma-informed care, social justice, and somatic practices.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                My extensive training includes over 70 hours in trauma-informed care, DBT, IFS (Internal Family Systems), and somatic therapy. I'm passionate about fostering resilience through culturally responsive, evidence-based care.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)</p>
                <p>• Dialectical Behavior Therapy (DBT) Intensive Training</p>
                <p>• Internal Family Systems (IFS) Trained</p>
                <p>• Foundations of Somatic Therapy for Trauma</p>
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
