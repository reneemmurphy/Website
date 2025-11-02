import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-path.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <div className="mb-4">
            <span className="text-2xl font-light text-muted-foreground">withRenéeMurphy</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Your Journey to
            <span className="block text-primary mt-2">Healing Begins Here</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            A compassionate space where you can explore your thoughts, process your emotions, 
            and develop the tools you need to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="text-lg px-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all"
            >
              Schedule a Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
