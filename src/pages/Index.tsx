import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HowIWork from "@/components/HowIWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Services />
      <HowIWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
