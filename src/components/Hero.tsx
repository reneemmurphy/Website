import { Button } from "@/components/ui/button";
import headshotImage from "@/assets/renee-headshot.jpg";
import heroPathImage from "@/assets/hero-path.jpg";

const Hero = () => {
  return (
    <header 
      className="relative py-24 border-0"
      id="home"
      role="banner"
      aria-label="Intro"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroPathImage})`,
          filter: 'brightness(0.8)'
        }}
      />
      <div className="absolute inset-0 bg-white/25" />
      
      <div className="container relative mx-auto px-4 max-w-[980px]">
        <img 
          src={headshotImage}
          alt="Portrait of Renée M. Murphy"
          className="w-[180px] h-[180px] rounded-full object-cover border-4 border-white/90 shadow-lg mb-4"
        />
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Renée M. Murphy, MA (Candidate)
        </h1>
        <p className="text-muted-foreground text-sm mb-3">
          Counselor in Training · Antioch University New England · Telehealth in New Hampshire
        </p>
        <p className="text-lg font-semibold mb-4">
          Supporting clients in healing and deepening their capacity for connection, ease, and belonging.
        </p>
        <nav aria-label="Primary" className="flex flex-wrap gap-3">
          <Button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            About My Approach
          </Button>
          <Button onClick={() => document.getElementById('approach')?.scrollIntoView({ behavior: 'smooth' })}>
            How I Work
          </Button>
          <Button onClick={() => document.getElementById('credentials')?.scrollIntoView({ behavior: 'smooth' })}>
            Credentials
          </Button>
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Hero;
