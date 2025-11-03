import { Card } from "@/components/ui/card";
import heroPathImage from "@/assets/hero-path.jpg";

const Credentials = () => {
  return (
    <section 
      className="py-16 border-t border-border" 
      id="credentials" 
      aria-label="Training and Credentials"
    >
      <div className="container mx-auto px-4 max-w-[980px]">
        <div 
          className="relative rounded-xl overflow-hidden border border-border"
          style={{
            backgroundImage: `url(${heroPathImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0" style={{ filter: 'brightness(0.7)' }} />
          <div className="absolute inset-0 bg-white/60" />
          
          <div className="relative p-6">
            <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm mb-4">
              Training and Credentials
            </span>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">Education</h3>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>MA, Clinical Mental Health Counseling, Antioch University New England (in progress)</li>
                <li>BA, Social Sciences, Harvard University Extension School</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3">Clinical Focus</h3>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Trauma and complex trauma</li>
                <li>Life transitions and grief</li>
                <li>Identity, belonging, and self trust</li>
                <li>Parts informed and somatic aware approaches</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3">Specialized Training</h3>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li><strong>IFS Level 1 Training</strong> in progress with expected completion May 2026</li>
                <li><strong>EMDR informed</strong> coursework and consultation</li>
                <li>Trauma Focused Cognitive Behavioral Therapy</li>
                <li>Somatic Therapy Foundations</li>
                <li>Compassion Cultivation Training</li>
                <li>Meditation Instructor Certification</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3">Professional Background</h3>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Lived experience in foster care and adoption</li>
                <li>U.S. Air Force veteran</li>
                <li>Former senior leader in the technology industry</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2">Affiliations</h3>
              <p>AMHCA · ACA · NAADAC · NHMCA</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
