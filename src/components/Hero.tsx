import headshotImg from "@/assets/renee-headshot.jpg";

const Hero = () => {
  return (
    <header id="home" className="relative py-24 border-b border-border">
      <div className="max-w-[980px] mx-auto px-4">
        <img
          src={headshotImg}
          alt="Portrait of Renée M. Murphy"
          className="w-[180px] h-[180px] rounded-full object-cover border-4 border-white/90 shadow-lg mb-6"
        />
        <h1 className="font-serif text-[2rem] leading-tight mb-2">
          Renée M. Murphy, MA (Candidate)
        </h1>
        <p className="text-[var(--ink-soft)] text-[0.95rem] mb-3">
          Counselor in Training · Antioch University New England · Telehealth in New Hampshire
        </p>
        <p className="text-lg font-medium text-[var(--ink)] mb-6">
          Supporting clients in healing and deepening their capacity for connection, ease, and belonging.
        </p>
        <nav className="flex flex-wrap gap-3" aria-label="Primary">
          <a className="hero-btn-solid" href="#about">About My Approach</a>
          <a className="hero-btn-solid" href="#approach">How I Work</a>
          <a className="hero-btn-solid" href="#credentials">Credentials</a>
          <a className="hero-btn-solid" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Hero;
