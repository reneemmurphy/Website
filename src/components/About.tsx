import forestImg from "@/assets/forest-path.jpg";

const About = () => {
  return (
    <section id="about" className="py-16 border-b border-border" aria-label="About">
      <div className="max-w-[980px] mx-auto px-4 grid gap-6 md:grid-cols-[1.2fr_0.8fr] items-start">
        <div className="bg-white border border-border rounded-xl p-6">
          <h2>About My Approach</h2>
          <p>
            My counseling approach is grounded in relationship, reflection, and understanding clients' stories and relationships. I support adults navigating trauma, loss, life transitions, and questions of identity and belonging.
          </p>
          <p>
            My perspective is shaped by a diverse life path that has included early experiences in foster care and adoption, service in the military, a long career in the tech industry, and training in meditation and compassion based practices. These experiences deepen my respect for the complexity of people's stories and the many ways we adapt, survive, and reconnect.
          </p>
          <p>
            I bring a steady and curious presence to the counseling relationship, creating space for authentic expression and gentle transformation. My goal is to help clients reconnect with the places in themselves that have felt wounded or disconnected and begin to experience a greater sense of wholeness, trust, and ease.
          </p>
        </div>
        <div
          className="w-full min-h-[280px] rounded-xl border border-border bg-cover bg-center"
          style={{ backgroundImage: `url(${forestImg})` }}
          role="img"
          aria-label="Calm mossy forest path"
        />
      </div>
    </section>
  );
};

export default About;
