const Footer = () => {
  return (
    <footer className="bg-foreground/5 py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center text-muted-foreground text-sm">
          <p className="mb-2">
            © {new Date().getFullYear()} withRenéeMurphy. All rights reserved.
          </p>
          <p className="text-xs mb-2">
            Renée M. Murphy, MA Clinical Mental Health Counseling Student • Antioch University New England
          </p>
          <p className="text-xs">
            If you are experiencing a mental health emergency, please call 988 (Suicide & Crisis Lifeline) 
            or visit your nearest emergency room.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
