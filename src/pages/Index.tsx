import Hero from "@/components/Hero";
import About from "@/components/About";
import HowIWork from "@/components/HowIWork";
import Credentials from "@/components/Credentials";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <HowIWork />
      <Credentials />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
