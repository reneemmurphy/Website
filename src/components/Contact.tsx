import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section 
      className="py-16 border-t border-border" 
      id="contact" 
      aria-label="Contact and Ethics"
    >
      <div className="container mx-auto px-4 max-w-[980px]">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact and Ethics</h2>
          <p className="mb-3">
            <strong>Email</strong> · <a href="mailto:renee.morgan.murphy@gmail.com" className="text-primary hover:underline">renee.morgan.murphy@gmail.com</a>
          </p>
          <p className="mb-4">
            <strong>Location</strong> · Richmond, New Hampshire · Telehealth only
          </p>
          <p className="mb-3 leading-relaxed">
            I adhere to the AMHCA Code of Ethics and am committed to confidentiality, integrity, and culturally responsive care.
          </p>
          <p className="leading-relaxed">
            <strong>If you are in crisis</strong> call or text 988 or go to your nearest emergency department.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
