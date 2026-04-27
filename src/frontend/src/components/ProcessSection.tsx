import { MessageCircle } from "lucide-react";
import { useInView } from "../hooks/useInView";
import {
  generateWhatsAppUrl,
  getGeneralInquiryMessage,
} from "../utils/whatsapp";

const STEPS = [
  {
    number: "01",
    title: "Requirement Understanding",
    description:
      "We start with a structured conversation — budget, preferred location, property type, and timeline. No vague inquiry forms.",
    duration: "30 min",
  },
  {
    number: "02",
    title: "Property Shortlisting",
    description:
      "We filter from our live inventory and off-market network to share only 3-5 options that precisely match your criteria.",
    duration: "24–48 hrs",
  },
  {
    number: "03",
    title: "Site Visits Arranged",
    description:
      "We coordinate site visits with builders and owners. You see only verified, available properties — no time-wasting viewings.",
    duration: "48–72 hrs",
  },
  {
    number: "04",
    title: "Negotiation & Due Diligence",
    description:
      "Our team negotiates on your behalf and runs full legal and documentation checks — title, RERA, encumbrances.",
    duration: "3–7 days",
  },
  {
    number: "05",
    title: "Deal Closure",
    description:
      "Token advance, agreement, and registration — all handled with our legal support. Your keys, on time, stress-free.",
    duration: "7–21 days",
  },
];

const DELAY_CLASSES = [
  "",
  "animate-delay-100",
  "animate-delay-200",
  "animate-delay-300",
  "animate-delay-400",
];

export default function ProcessSection() {
  const [headingRef, headingVisible] = useInView<HTMLDivElement>({
    threshold: 0.2,
  });
  const [stepsRef, stepsVisible] = useInView<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div className="relative bg-primary py-16 lg:py-20 overflow-hidden">
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern pointer-events-none" />

      {/* Glow accent blob */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none animate-float" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl pointer-events-none animate-pulse-soft" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-12">
          <p
            className={`text-accent font-medium text-sm uppercase tracking-widest mb-2 reveal ${headingVisible ? "animate-fade-up in-view" : ""}`}
          >
            How We Work
          </p>
          <h2
            className={`font-display font-bold text-3xl lg:text-4xl text-primary-foreground mb-4 reveal ${headingVisible ? "animate-fade-up in-view animate-delay-100" : ""}`}
          >
            Our 5-Step Execution Process
          </h2>
          <p
            className={`text-primary-foreground/70 text-base reveal ${headingVisible ? "animate-fade-up in-view animate-delay-200" : ""}`}
          >
            Structure over chaos. Discipline over luck. Every deal follows this
            proven process.
          </p>
        </div>

        <div
          ref={stepsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10"
          data-ocid="process.steps"
        >
          {STEPS.map((step, i) => {
            const isOdd = i % 2 !== 0;
            const animClass = isOdd
              ? "animate-slide-in-right"
              : "animate-slide-in-left";
            const delayClass = DELAY_CLASSES[i] ?? "";
            return (
              <div
                key={step.number}
                className={`relative bg-primary-foreground/5 border border-primary-foreground/15 rounded-xl p-5 hover:border-accent/50 transition-smooth group/step reveal ${stepsVisible ? `${animClass} in-view ${delayClass}` : ""}`}
                data-ocid={`process.step.${i + 1}`}
              >
                {/* Connector line for desktop */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-2 w-4 h-0.5 bg-accent/40" />
                )}

                {/* Step number with hover glow */}
                <div className="font-display font-bold text-3xl text-accent/60 mb-3 transition-smooth group-hover/step:text-accent group-hover/step:[text-shadow:0_0_20px_oklch(0.6_0.18_162_/_0.7)]">
                  {step.number}
                </div>

                <h3 className="font-display font-semibold text-primary-foreground text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/65 text-sm leading-relaxed mb-3">
                  {step.description}
                </p>
                <div className="inline-flex items-center gap-1.5 bg-accent/20 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-accent text-xs font-medium">
                    {step.duration}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href={generateWhatsAppUrl(getGeneralInquiryMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3.5 px-8 rounded-lg text-white cta-green font-semibold hover:opacity-90 transition-smooth hover:ring-2 hover:ring-accent/40 ring-offset-2"
            data-ocid="process.start_now_button"
          >
            <MessageCircle size={18} />
            Start My Property Search Now
          </a>
        </div>
      </div>
    </div>
  );
}
