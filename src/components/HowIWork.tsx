const cards = [
  {
    title: "When Life Feels Stuck or Overwhelming",
    content: (
      <p>If you are hoping to make changes in your life but find it hard to follow through, I often draw on <strong>Motivational Interviewing</strong>. It is an evidence based approach that helps clarify values, resolve ambivalence, and build momentum toward meaningful change while honoring your autonomy and readiness.</p>
    ),
  },
  {
    title: "When Emotions or Thoughts Feel Unmanageable",
    content: (
      <p>When emotions or thoughts feel all consuming, I often integrate tools from <strong>Dialectical Behavior Therapy</strong>. DBT offers practical skills for regulating emotions, tolerating distress, and improving relationships while nurturing mindfulness and balance.</p>
    ),
  },
  {
    title: "When You Are Healing from Trauma",
    content: (
      <>
        <p>I view trauma as what happens when an experience overwhelms a person's capacity to process or cope in the moment. Healing involves supporting the nervous system in finding safety again and helping the mind and body integrate those experiences so they no longer feel as though they are happening in the present.</p>
        <p>I often combine <strong>Internal Family Systems</strong> and <strong>EMDR informed</strong> approaches with <strong>somatic and body based practices</strong>, supporting clients in reconnecting to sensation, movement, and grounded presence. This may also include <strong>nature based or mindfulness practices</strong> that help the body return to a sense of safety, vitality, and belonging.</p>
      </>
    ),
  },
  {
    title: "When You Are Searching for Meaning or Spiritual Connection",
    content: (
      <p>If you are exploring purpose, identity, or spirituality, I draw on <strong>Narrative Therapy</strong>, <strong>IFS</strong>, and <strong>embodied practices</strong> that bring awareness to both story and felt experience. I believe that healing and meaning making often include a spiritual dimension, whether that means reconnecting with something larger than oneself, finding peace, or deepening compassion and presence.</p>
    ),
  },
  {
    title: "A Collaborative Process",
    content: (
      <p>Therapy is not one size fits all. My role is to partner with you, to listen, offer perspective, and bring forward the tools that best support your process. Our work together focuses on cultivating balance, connection, and authenticity in relationship with yourself, others, and the world around you.</p>
    ),
  },
];

const HowIWork = () => {
  return (
    <section id="approach" className="py-16 border-b border-border" aria-label="How I Work">
      <div className="max-w-[980px] mx-auto px-4">
        <h2>How I Work</h2>
        <p className="mb-8">
          Change is hard, and no single approach works for everyone. My work is collaborative and flexible, drawing on several evidence based and experiential modalities to meet clients where they are. Together, we explore what feels most supportive for your goals and pace, building a process that fits who you are and how you naturally heal. Therapy can be a challenging process, but it is deeply worthwhile. It takes courage to begin and to stay with the work, and I believe that every step toward greater awareness and compassion matters.
        </p>
        <div className="grid gap-4">
          {cards.map((card) => (
            <div key={card.title} className="bg-white border border-border rounded-xl p-6">
              <h3>{card.title}</h3>
              {card.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
