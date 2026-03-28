const resourceGroups = [
  {
    title: "Crisis and Immediate Support",
    items: [
      "988 Suicide and Crisis Lifeline. Call or text 988",
      "Crisis Text Line. Text HOME to 741741",
    ],
  },
  {
    title: "Adoption, Identity, and Belonging",
    items: ["Adoptees Connect", "American Adoption Congress"],
  },
  {
    title: "Trauma and Healing",
    items: ["National Center for PTSD", "The Body Keeps the Score resources"],
  },
  {
    title: "Grief and Loss",
    items: ["What's Your Grief", "Option B"],
  },
];

const Resources = () => {
  return (
    <section id="resources" className="py-16 border-b border-border" aria-label="Resources and Support">
      <div className="max-w-[980px] mx-auto px-4">
        <h2>Resources and Support</h2>
        <p className="mb-6">Here are organizations, hotlines, and readings that offer additional support for mental health and wellbeing.</p>
        <div className="grid gap-3">
          {resourceGroups.map((group) => (
            <div key={group.title} className="bg-white border border-border rounded-xl p-6">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
