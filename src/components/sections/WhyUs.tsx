import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { whyUs } from "@/lib/constants";

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-sand">
      <div className="mx-auto max-w-6xl space-y-10 px-6 py-16 md:py-20">
        <SectionTitle
          eyebrow="Why TacticalDev"
          title="Built for high-stakes delivery"
          description="We integrate directly with leadership teams to deliver software that scales under pressure."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {whyUs.map((item) => (
            <Card key={item.title} className="space-y-3">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="text-sm text-ink-3">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
