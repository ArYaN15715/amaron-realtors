import { Award, Eye, MapPin, Shield, Users, Zap } from "lucide-react";
import { useInView } from "../hooks/useInView";

const REASONS = [
  {
    icon: Award,
    title: "17+ Years of Expertise",
    description:
      "Deep market knowledge built over nearly two decades. We've seen every market cycle and know how to get the best deal at any time.",
  },
  {
    icon: Eye,
    title: "100% Transparent Process",
    description:
      "No hidden fees, no surprise charges. Every step is documented — from property search to final registration.",
  },
  {
    icon: Zap,
    title: "Faster Deal Closure",
    description:
      "Where others take months, we execute in weeks. Our streamlined process and strong builder relationships fast-track every deal.",
  },
  {
    icon: Shield,
    title: "Legal & Documentation Support",
    description:
      "Our in-house legal team ensures clean titles, verified documentation, and stress-free registration for every transaction.",
  },
  {
    icon: MapPin,
    title: "Local Area Authority",
    description:
      "Specialists in SG Highway, Jagatpur & Godrej Garden City. We know every project, builder, and micro-market price trend.",
  },
  {
    icon: Users,
    title: "Dedicated Relationship Manager",
    description:
      "One point of contact from first inquiry to key handover. No juggling multiple agents or repeated explanations.",
  },
];

const DELAY_MAP: Record<number, string> = {
  0: "",
  1: "animate-delay-100",
  2: "animate-delay-200",
  3: "animate-delay-300",
  4: "animate-delay-400",
  5: "animate-delay-500",
};

export default function WhyUsSection() {
  const [headingRef, headingVisible] = useInView<HTMLDivElement>({
    threshold: 0.2,
  });
  const [cardsRef, cardsVisible] = useInView<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div className="bg-background py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-12">
          <p
            className={`text-accent font-medium text-sm uppercase tracking-widest mb-2 reveal ${headingVisible ? "animate-fade-up in-view" : ""}`}
          >
            Why Amaron Group
          </p>
          <h2
            className={`font-display font-bold text-3xl lg:text-4xl text-foreground mb-4 reveal ${headingVisible ? "animate-fade-up in-view animate-delay-100" : ""}`}
          >
            The Partner You Choose When Deals Must Close
          </h2>
          <p
            className={`text-muted-foreground text-base reveal ${headingVisible ? "animate-fade-up in-view animate-delay-200" : ""}`}
          >
            We're not just real estate agents. We're execution specialists who
            take ownership of your deal end-to-end.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="why_us.list"
        >
          {REASONS.map((reason, i) => (
            <div
              key={reason.title}
              className={`group bg-card rounded-xl p-6 border border-border transition-smooth hover:-translate-y-2 hover:shadow-xl hover:border-accent/40 hover:bg-primary/[0.03] reveal ${cardsVisible ? `animate-scale-in in-view ${DELAY_MAP[i] ?? ""}` : ""}`}
              data-ocid={`why_us.item.${i + 1}`}
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-smooth group-hover:bg-accent/15 group-hover:ring-2 group-hover:ring-accent/30">
                <reason.icon
                  size={22}
                  className="text-primary transition-smooth group-hover:text-accent"
                />
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
