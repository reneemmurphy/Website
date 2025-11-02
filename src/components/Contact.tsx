import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ready to Take the First Step?
            </h2>
            <p className="text-lg text-muted-foreground">
              Reaching out is the first step towards positive change. 
              I'm here to support you on your journey.
            </p>
          </div>

          <Card className="p-8 md:p-12 shadow-[var(--shadow-card)]">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                        contact@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">
                        Virtual sessions available<br />
                        Serving clients nationwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="bg-muted/50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Session Information</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Individual sessions: 50 minutes</li>
                    <li>• Flexible scheduling options</li>
                    <li>• Teletherapy & in-person available</li>
                    <li>• Accepting new clients</li>
                  </ul>
                </div>
                <Button 
                  size="lg" 
                  className="w-full shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all"
                >
                  Schedule Your Consultation
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
