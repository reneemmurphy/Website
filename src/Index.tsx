import { useEffect, useState } from "react";
import headshotImage from "@/assets/renee-headshot.jpg";
import heroPathImage from "@/assets/hero-path.jpg";
import forestPathImage from "@/assets/forest-path.jpg";
import mountainPathImage from "@/assets/mountain-path.jpg";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-page font-sans">

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-[60px] transition-all duration-400"
        style={{
          background: scrolled ? "rgba(245,241,234,0.97)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(28,28,26,0.1)" : "1px solid transparent",
        }}
      >
        <a href="#home" className="font-serif italic text-[0.9rem]"
          style={{ color: scrolled ? "var(--ink)" : "rgba(255,255,255,0.88)" }}>
          Renée M. Murphy
        </a>
        <ul className="flex gap-8 list-none">
          {["about", "populations", "approach", "credentials", "contact"].map((id) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className="text-[0.75rem] font-normal tracking-[0.1em] uppercase transition-colors duration-200 bg-transparent border-none cursor-pointer"
                style={{ color: scrolled ? "var(--ink-soft)" : "rgba(255,255,255,0.72)" }}
              >
                {id === "populations" ? "Who I Work With" : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <header id="home" className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroPathImage})`, filter: "brightness(0.52)" }} />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(18,28,20,0.95) 0%, rgba(18,28,20,0.45) 50%, rgba(18,28,20,0.12) 100%)" }} />
        <div className="relative w-full max-w-[940px] mx-auto px-10 pb-20 grid gap-12"
          style={{ gridTemplateColumns: "200px 1fr", alignItems: "flex-end" }}>
          <img
            src={headshotImage}
            alt="Renée M. Murphy"
            className="w-[200px] h-[260px] object-cover object-top border-2"
            style={{ borderColor: "rgba(255,255,255,0.18)" }}
          />
          <div>
            <span className="block text-[0.7rem] font-medium tracking-[0.16em] uppercase mb-4"
              style={{ color: "var(--earth-light)" }}>
              Counselor in Training · Massachusetts · Vermont
            </span>
            <h1 className="font-serif font-bold text-white leading-[1.1] mb-1"
              style={{ fontSize: "clamp(2.1rem, 3.8vw, 3rem)" }}>
              Renée M. Murphy
            </h1>
            <p className="text-[0.8rem] italic mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
              MA Candidate, Antioch University New England
            </p>
            <p className="text-[1.02rem] leading-[1.75] max-w-[510px] mb-8"
              style={{ color: "rgba(255,255,255,0.82)" }}>
              Most of what brings people to therapy is not a single event. It is the{" "}
              <strong className="text-white font-medium">
                accumulated weight of carrying difficult experience across a life
              </strong>{" "}
              and the way that weight shapes everything that comes after.
            </p>
            <div className="flex gap-3 flex-wrap mb-8">
              <button onClick={() => scrollTo("contact")} className="hero-btn-solid">Get in touch</button>
              <button onClick={() => scrollTo("about")} className="hero-btn">Learn more</button>
            </div>
            <div className="flex gap-6 flex-wrap pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.09)" }}>
              {["Trauma and complex trauma", "First responders and veterans", "Adoptees and identity"].map((label) => (
                <span key={label} className="pop-pill">{label}</span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="py-[5.5rem] px-10 bg-page-white border-t border-border">
        <div className="max-w-[940px] mx-auto grid gap-[4.5rem]"
          style={{ gridTemplateColumns: "1fr 320px", alignItems: "stretch" }}>
          <div className="flex flex-col">
            <span className="section-tag">About</span>
            <h2>A longer road than most</h2>
            <p>I came to this work through a life that has required me to understand a few things from the inside. I was in the foster care system before I was adopted at five. I served in the Air Force, then spent two years working on a suicide prevention crisis line. After that, decades in senior leadership in the technology industry. And now, in my fifties, I am completing an MA in Clinical Mental Health Counseling at Antioch University New England.</p>
            <p>That is not a conventional path. But it means I come to the counseling relationship with a clear-eyed understanding of what it is like to carry things for a long time. To be doing your best, managing as well as you can, while inside it is hard in ways that do not show. And to want more than that. To want to feel better, to be better, to not have it be this hard anymore.</p>
            <p>I am not going to tell you things were not as hard as they were. They were. And whatever you bring into this work, I can hold it. We cannot undo what happened or go back and make it different. But your relationship with your pain can change. The patterns, the way you manage your life, how you are with yourself and with others. That can shift. That is where the relief is.</p>
            <div className="callout-box">
              <strong>Research:</strong> Alongside my clinical training, I conduct research on the lived experience of adult adoptees, how people make meaning of interrupted origins and construct identity across a lifetime. That work shapes how I think clinically, and I bring it into the room without turning clients into subjects.
            </div>
            <div className="training-note">
              I am a counselor in training, not yet licensed, practicing under clinical supervision. If you need a licensed clinician right now, I can help you find one.
            </div>
          </div>
          <div className="relative overflow-hidden" style={{ minHeight: "500px" }}>
            <img src={mountainPathImage} alt="Autumn path with mountains"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "grayscale(18%)" }} />
          </div>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <section id="populations" className="py-[5.5rem] px-10 bg-page border-t border-border">
        <div className="max-w-[940px] mx-auto">
          <div className="mb-14">
            <span className="section-tag">Who I Work With</span>
            <h2 className="max-w-[680px]">People who are carrying things across a life</h2>
            <p className="max-w-[720px]">Most people who come to therapy have spent years managing something that was harder than it should have been. They have functioned. They have kept going. But underneath that, something is not right. The anxiety does not lift. The relationships feel harder than they should. Work that used to mean something does not anymore. Old wounds keep showing up in new situations. Life is not what you hoped it would be, and you are tired of just getting through it.</p>
            <p className="max-w-[720px]">These are the people who most often find their way here. If you do not see yourself exactly but something on this site resonates, reach out. That is enough to start.</p>
          </div>
          <div className="grid border border-border" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {[
              {
                num: "01",
                title: "Trauma survivors",
                body: ["Trauma is not always one event. More often it is a pattern. Early experiences that did not get processed, an environment that was not safe, the slow accumulation of things that had to be managed alone. What they have in common is the way the past keeps showing up in the present, shaping responses and relationships in ways that no longer serve you.",
                  "I draw on Internal Family Systems and somatic awareness, approaches that work with the whole person, not just the story you can tell about what happened."]
              },
              {
                num: "02",
                title: "First responders and veterans",
                body: ["The job selects for people who do not need help, and then systematically ensures they never ask for it. Cumulative stress, moral injury, the weight of what you have seen. These build up over years in ways that are real and significant and often invisible to everyone around you, including yourself.",
                  "I worked two years on a crisis line. I understand something about high-stakes emotional labor and what it costs over time. You do not have to translate your experience into therapy language before we can talk about it."]
              },
              {
                num: "03",
                title: "Adoptees and people with interrupted origins",
                body: ["I am an adult adoptee myself. The questions that come with that, about identity, belonging, original family, and the particular strangeness of a story that starts before you had words for it, do not resolve on a schedule. They surface at different stages of life, sometimes in unexpected ways.",
                  "My clinical work and my research both focus on how adoptees make meaning across a lifespan. This is not theoretical for me. I bring lived knowledge into this work, not just training."]
              }
            ].map((block, i) => (
              <div key={i} className="p-8" style={{ borderRight: i < 2 ? "1px solid rgba(28,28,26,0.1)" : "none" }}>
                <div className="font-serif font-bold leading-none mb-3"
                  style={{ fontSize: "2.25rem", color: "rgba(28,28,26,0.07)" }}>{block.num}</div>
                <h3>{block.title}</h3>
                {block.body.map((p, j) => <p key={j} style={{ fontSize: "0.95rem" }}>{p}</p>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="relative py-[5.5rem] px-10 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroPathImage})`, filter: "brightness(0.18) saturate(0.6)" }} />
        <div className="absolute inset-0" style={{ background: "rgba(245,241,234,0.9)" }} />
        <div className="relative max-w-[940px] mx-auto">
          <div className="mb-12">
            <span className="section-tag">Approach</span>
            <h2 className="mb-3">How I work</h2>
            <p className="max-w-[720px]">My work is collaborative. I do not apply a single method to everyone. I draw on several approaches depending on what you are dealing with and how you naturally move through things. What stays consistent is the orientation: relational, trauma-informed, and grounded in the belief that the therapeutic relationship itself is part of how healing happens.</p>
          </div>
          <div className="grid gap-10 mb-10" style={{ gridTemplateColumns: "1fr 1fr", gap: "2.5rem 3rem" }}>
            {[
              {
                tag: "Parts and self",
                title: "Internal Family Systems",
                body: "Internal Family Systems offers a way of understanding why you do the things you do. We all have parts of ourselves. The ones that protect us, the ones that criticize, the ones carrying old pain. IFS helps you recognize those parts, understand what they are trying to do, and find a way to make peace with them rather than fight them. I am completing IFS Level 1 training in May 2026 and draw on this framework throughout my work."
              },
              {
                tag: "Body and breath",
                title: "Somatic awareness",
                body: "The body holds so much of our pain. Long before we have words for what happened, the body is already keeping the record. Somatic practices help you reconnect with what your body has been carrying and find your way back to feeling safe and present. This includes breath work, grounding, and learning to notice what is happening inside you right now."
              },
              {
                tag: "Identity and meaning",
                title: "Narrative therapy",
                body: "Narrative therapy is a way to process through the things that have happened. To look at your story from the outside, separate who you are from what you have been through, and begin to rewrite the parts that have kept you stuck. The story you have been telling about yourself is not the only story."
              },
              {
                tag: "The outside world as part of healing",
                title: "Nature-based approaches",
                body: "There is something the natural world does that no therapy room can fully replicate. Being in it, really in it and not just passing through, helps calm the nervous system, lifts mood, and eases loneliness in ways that are hard to explain but easy to feel. I encourage clients to bring the outside world into their healing as something that actually works, not just a nice idea."
              }
            ].map((item, i) => (
              <div key={i} className="pt-6" style={{ borderTop: "2px solid rgba(139,94,60,0.2)" }}>
                <span className="method-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
          <div className="p-10" style={{
            background: "rgba(255,255,255,0.65)",
            border: "1px solid rgba(139,94,60,0.18)",
            borderTop: "3px solid var(--earth-light)"
          }}>
            <span className="method-tag">The ground of this work</span>
            <h3 style={{ fontSize: "1.2rem" }}>Compassion</h3>
            <p>Every person who comes into this work wants the same things: to be safe, to be happy, to be healthy, to live with ease. And every person is carrying some form of suffering. That is not a problem to fix. It is the shared human condition, and recognizing it is where compassion begins.</p>
            <p>Compassion, especially self-compassion, runs beneath everything I do. Not as a technique, but as an orientation toward yourself and your own pain. Many of the people I work with have spent years at war with themselves, holding themselves to a standard they would never apply to someone they loved. Part of this work is learning to turn toward yourself with the same open hand you might offer another person who is hurting.</p>
            <p>Most people find it far easier to be kind to someone else than to themselves. People are often surprised by how hard it is. Being gentle with yourself, after years of not being, is where some of the deepest work happens. And it changes things.</p>
          </div>
          <p className="mt-10 pt-7 text-[0.9rem]" style={{ borderTop: "1px solid rgba(28,28,26,0.1)", color: "var(--ink-soft)" }}>
            I currently see clients through my practicum placements at CSO in Athol, Massachusetts and Frontline Foundations in Bellows Falls, Vermont. I also offer telehealth. All services are provided under clinical supervision.
          </p>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section id="credentials" className="py-[5.5rem] px-10" style={{ background: "var(--forest-deep)" }}>
        <div className="max-w-[940px] mx-auto">
          <span className="section-tag" style={{ color: "var(--sage-light)" }}>Credentials</span>
          <h2 style={{ color: "white" }}>Training and background</h2>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "3rem 5rem" }}>
            <div>
              {[
                {
                  label: "Education",
                  items: [
                    { bold: "MA, Clinical Mental Health Counseling", sub: "Antioch University New England (in progress)" },
                    { bold: "BA, Social Sciences", sub: "Harvard University Extension School" }
                  ]
                },
                {
                  label: "Clinical focus",
                  items: [
                    { text: "Trauma and complex trauma across the lifespan" },
                    { text: "First responders and veterans" },
                    { text: "Adoption, identity, and interrupted origins" },
                    { text: "Life transitions and grief" }
                  ]
                },
                {
                  label: "Background",
                  items: [
                    { text: "U.S. Air Force veteran" },
                    { text: "Crisis line volunteer, two years" },
                    { text: "Former senior leader, technology industry" },
                    { text: "Adult adoptee and adoption researcher" }
                  ]
                }
              ].map((group, i) => (
                <div key={i} className="mb-9">
                  <span className="cred-label">{group.label}</span>
                  {group.items.map((item, j) => (
                    <div key={j} className="cred-item">
                      {"bold" in item ? <><strong style={{ color: "rgba(255,255,255,0.88)", fontWeight: 500 }}>{item.bold}</strong><br />{item.sub}</> : item.text}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div>
              {[
                {
                  label: "Specialized training",
                  items: [
                    { bold: "IFS Level 1", sub: " in progress, completion May 2026" },
                    { text: "Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)" },
                    { text: "Somatic Therapy Foundations" },
                    { text: "Compassion Cultivation Training" },
                    { text: "Meditation Instructor Certification" }
                  ]
                },
                {
                  label: "Affiliations",
                  items: [{ text: "AMHCA · ACA · NAADAC · NHMCA" }]
                }
              ].map((group, i) => (
                <div key={i} className="mb-9">
                  <span className="cred-label">{group.label}</span>
                  {group.items.map((item, j) => (
                    <div key={j} className="cred-item">
                      {"bold" in item ? <><strong style={{ color: "rgba(255,255,255,0.88)", fontWeight: 500 }}>{item.bold}</strong>{item.sub}</> : item.text}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 pt-8 text-[0.74rem] tracking-[0.12em] uppercase"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.2)" }}>
            Antioch University New England · Keene, NH
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-[5.5rem] px-10 bg-page-white border-t border-border">
        <div className="max-w-[940px] mx-auto grid gap-20" style={{ gridTemplateColumns: "1fr 1fr", alignItems: "start" }}>
          <div>
            <span className="section-tag">Contact</span>
            <h2>Get in touch</h2>
            <p className="mb-10" style={{ maxWidth: "440px" }}>I am currently accepting new clients. If you are not sure whether what I do would be useful for what you are dealing with, email me. I am glad to talk it through before you commit to anything.</p>
            <div className="mb-8">
              <span className="cf-label">Email</span>
              <a href="mailto:renee.morgan.murphy@gmail.com" className="font-serif text-[1.05rem]"
                style={{ color: "var(--ink)" }}>renee.morgan.murphy@gmail.com</a>
            </div>
            <div className="mb-8">
              <span className="cf-label">Where I see clients</span>
              <p className="text-[0.88rem] leading-[1.7]" style={{ color: "var(--ink-soft)" }}>
                I currently see clients through my practicum placements at CSO in Athol, Massachusetts and Frontline Foundations in Bellows Falls, Vermont. I also offer telehealth. All services are provided under clinical supervision.
              </p>
            </div>
            <div className="mb-8">
              <span className="cf-label">Ethics and practice</span>
              <p className="text-[0.88rem] leading-[1.7]" style={{ color: "var(--ink-soft)" }}>
                I adhere to the AMHCA Code of Ethics. I practice under supervision and am transparent about what that means. Confidentiality applies with the standard legal exceptions and I will explain those clearly at the start.
              </p>
            </div>
            <div className="relative overflow-hidden p-8 mt-2" style={{ background: "var(--forest-deep)" }}>
              <div className="absolute inset-0 bg-cover bg-center opacity-[0.09]"
                style={{ backgroundImage: `url(${forestPathImage})` }} />
              <div className="relative">
                <h3 style={{ color: "white", marginBottom: "0.6rem", fontSize: "1rem" }}>If you are in crisis</h3>
                <p className="text-[0.88rem] mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Please do not wait for an appointment. Reach out for immediate support.
                </p>
                <span className="block font-serif font-bold text-white mb-2" style={{ fontSize: "1.65rem" }}>
                  Call or text 988
                </span>
                <p className="text-[0.8rem]" style={{ color: "rgba(255,255,255,0.42)", lineHeight: 1.65 }}>
                  NH Rapid Response: 833-710-6477 · 24/7 statewide<br />
                  Or go to your nearest emergency department.
                </p>
              </div>
            </div>
          </div>
          <div>
            <span className="section-tag">Resources and support</span>
            <div className="grid gap-8" style={{ gridTemplateColumns: "1fr 1fr" }}>
              {[
                {
                  title: "Crisis support",
                  items: [
                    { name: "988 Suicide and Crisis Lifeline", detail: "Call or text 988 · 988lifeline.org · 24/7" },
                    { name: "NH Rapid Response", detail: "833-710-6477 · nh988.com · 24/7" },
                    { name: "Monadnock Family Services", detail: "(603) 357-4400 · mfs.org" },
                    { name: "Monadnock Peer Support", detail: "603-352-5093 · Evenings 4 to 9 PM, 365 days" }
                  ]
                },
                {
                  title: "First responders and veterans",
                  items: [
                    { name: "Safe Call Now", detail: "206-459-3020 · Confidential, 24/7, staffed by first responders" },
                    { name: "Copline", detail: "1-800-267-5463 · Law enforcement, retired officers · 24/7" },
                    { name: "Fire and EMS Helpline", detail: "1-888-275-6832 · National Volunteer Fire Council" },
                    { name: "Veterans Crisis Line", detail: "Call 988 then press 1 · Text 838255 · 24/7" },
                    { name: "EAPFirst (Vermont)", detail: "1-855-327-1669 · Vermont first responder support · 24/7" }
                  ]
                },
                {
                  title: "Adoption and identity",
                  items: [
                    { name: "Adoptees Connect", detail: "adopteesconnect.com · Peer support for adult adoptees" },
                    { name: "American Adoption Congress", detail: "americanadoptioncongress.org" },
                    { name: "Adoptee Rights Law Center", detail: "adopteerightslaw.com · OBC access and legal rights by state" }
                  ]
                },
                {
                  title: "Peer warm lines",
                  items: [
                    { name: "Wildflower Alliance", detail: "(888) 407-4515 · Trained peer supporters" },
                    { name: "Blackline", detail: "800-604-5841 · Centers BIPOC and LGBTQ+" },
                    { name: "Trans Lifeline", detail: "877-565-8860 · Run by and for trans people" },
                    { name: "The Trevor Project", detail: "1-866-488-7386 · LGBTQ+ youth" }
                  ]
                }
              ].map((group, i) => (
                <div key={i}>
                  <span className="res-group-title">{group.title}</span>
                  {group.items.map((item, j) => (
                    <div key={j} className="res-item">
                      <span className="res-name">{item.name}</span>
                      <span className="res-detail">{item.detail}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p className="mt-8 pt-5 text-[0.84rem] italic" style={{ borderTop: "1px solid rgba(28,28,26,0.1)", color: "var(--ink-soft)" }}>
              A fuller regional guide covering NH, Vermont, and western MA is available on request. Email me and I will send it.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex items-center justify-between px-10 py-6 text-[0.76rem] tracking-[0.04em]"
        style={{ background: "var(--forest-deep)", borderTop: "1px solid rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.25)" }}>
        <span>© 2026 Renée M. Murphy · Counselor in Training · AMHCA Ethics Compliant</span>
        <a href="mailto:renee.morgan.murphy@gmail.com" style={{ color: "rgba(255,255,255,0.25)" }}>
          renee.morgan.murphy@gmail.com
        </a>
      </footer>

    </div>
  );
};

export default Index;
