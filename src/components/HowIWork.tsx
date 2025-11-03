import { Card } from "@/components/ui/card";
import forestImage from "@/assets/forest-path.jpg";
import heroPathImage from "@/assets/hero-path.jpg";

const HowIWork = () => {
  return (
    <section id="approach" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8 text-center">
            How I Work
          </h2>
          <div className="bg-[#FAFAF7] dark:bg-muted/30 rounded-2xl p-12 md:p-16">
            <p className="text-lg md:text-xl text-[#4F4F4F] dark:text-muted-foreground leading-relaxed mb-6">
              Change is hard, and no single approach works for everyone. My work is collaborative and flexible, drawing on several evidence based and experiential modalities to meet clients where they are. Together, we explore what feels most supportive for your goals and pace, building a process that fits who you are and how you naturally heal.
            </p>
            <p className="text-lg md:text-xl text-[#4F4F4F] dark:text-muted-foreground leading-relaxed">
              Therapy can be a challenging process, but it is deeply worthwhile. It takes courage to begin and to stay with the work, and I believe that every step toward greater awareness and compassion matters.
            </p>
          </div>
        </div>

        {/* When Life Feels Stuck */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="p-8 md:p-12 border-border/50">
            <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
              <div className="md:col-span-2 mb-6 md:mb-0">
                <img 
                  src={forestImage} 
                  alt="Mossy forest path representing growth and change"
                  className="rounded-xl w-full shadow-sm"
                />
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
                  When Life Feels Stuck or Overwhelming
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  If you are hoping to make changes in your life but find it hard to follow through, I often draw on Motivational Interviewing (MI). It is an evidence based approach that helps clarify values, resolve ambivalence, and build momentum toward meaningful change while honoring your autonomy and readiness.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* When Emotions Feel Unmanageable */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="p-8 md:p-12 bg-[#EAEDEA] dark:bg-muted/50 border-border/50">
            <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              When Emotions or Thoughts Feel Unmanageable
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When emotions or thoughts feel all consuming, I often integrate tools from Dialectical Behavior Therapy (DBT). DBT offers practical skills for regulating emotions, tolerating distress, and improving relationships while nurturing mindfulness and balance.
            </p>
          </Card>
        </div>

        {/* When You Are Healing from Trauma */}
        <div className="max-w-5xl mx-auto mb-12">
          <div 
            className="relative rounded-2xl overflow-hidden shadow-sm"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url(${heroPathImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
                When You Are Healing from Trauma
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I view trauma as what happens when an experience overwhelms a person's capacity to process or cope in the moment. Healing involves supporting the nervous system in finding safety again and helping the mind and body integrate those experiences so they no longer feel as though they are happening in the present.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I often combine Internal Family Systems (IFS) and EMDR informed approaches with somatic and body based practices, supporting clients in reconnecting to sensation, movement, and grounded presence. This may also include nature based or mindfulness practices that help the body return to a sense of safety, vitality, and belonging.
              </p>
            </div>
          </div>
        </div>

        {/* When You Are Searching for Meaning */}
        <div className="max-w-5xl mx-auto mb-12">
          <div 
            className="relative rounded-2xl overflow-hidden shadow-sm"
            style={{
              backgroundImage: `linear-gradient(rgba(250, 250, 247, 0.85), rgba(250, 250, 247, 0.85)), url(${forestImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
                When You Are Searching for Meaning or Spiritual Connection
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If you are exploring purpose, identity, or spirituality, I draw on Narrative Therapy, IFS, and embodied practices that bring awareness to both story and felt experience. I believe that healing and meaning making often include a spiritual dimension, whether that means reconnecting with something larger than oneself, finding peace, or deepening compassion and presence.
              </p>
            </div>
          </div>
        </div>

        {/* A Collaborative Process */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#D9DDD8] dark:bg-muted/40 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
              A Collaborative Process
            </h3>
            <p className="text-lg text-[#4F4F4F] dark:text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              Therapy is not one size fits all. My role is to partner with you, to listen, offer perspective, and bring forward the tools that best support your process. Our work together focuses on cultivating balance, connection, and authenticity in relationship with yourself, others, and the world around you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
