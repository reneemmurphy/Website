import { Card } from "@/components/ui/card";

const Resources = () => {
  return (
    <section 
      className="py-16 border-t border-border" 
      id="resources" 
      aria-label="Resources and Support"
    >
      <div className="container mx-auto px-4 max-w-[980px]">
        <h2 className="text-2xl font-semibold mb-4">Resources and Support</h2>
        <p className="mb-6 leading-relaxed">
          Here are organizations, hotlines, and readings that offer additional support for mental health and wellbeing.
        </p>

        <div className="grid gap-3">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Crisis and Immediate Support</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>988 Suicide and Crisis Lifeline. Call or text 988</li>
              <li>Crisis Text Line. Text HOME to 741741</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Adoption, Identity, and Belonging</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Adoptees Connect</li>
              <li>American Adoption Congress</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Trauma and Healing</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>National Center for PTSD</li>
              <li>The Body Keeps the Score resources</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-3">Grief and Loss</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>What's Your Grief</li>
              <li>Option B</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resources;
