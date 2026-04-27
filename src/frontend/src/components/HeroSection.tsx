import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { useInView } from "../hooks/useInView";
import {
  generateWhatsAppUrl,
  getGeneralInquiryMessage,
} from "../utils/whatsapp";

const STATS = [
  { value: "17+", label: "Years of Expertise" },
  { value: "500+", label: "Successful Deals" },
  { value: "100%", label: "Transaction Transparency" },
  { value: "50%", label: "Faster Deal Closure" },
];

const TRUST_POINTS = [
  "SG Highway & Godrej Garden City specialists",
  "No hidden fees — full transparency guaranteed",
  "Dedicated relationship manager for every client",
];

export default function HeroSection() {
  const [contentRef, contentVisible] = useInView<HTMLDivElement>({
    threshold: 0.1,
  });

  const scrollToProperties = () => {
    const el = document.querySelector("#properties");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden bg-primary">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern pointer-events-none" />

      {/* Animated glow blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/15 blur-3xl animate-float pointer-events-none"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-primary-foreground/8 blur-3xl animate-float pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-accent/8 blur-3xl animate-pulse-soft pointer-events-none" />

      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-city-skyline.dim_1400x700.jpg')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/70" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div ref={contentRef} className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-1.5 mb-6 reveal ${contentVisible ? "animate-fade-up in-view" : ""}`}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
            <span className="text-accent text-sm font-body font-medium">
              Ahmedabad's Most Trusted Real Estate Partner
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6 reveal ${contentVisible ? "animate-fade-up in-view animate-delay-100" : ""}`}
          >
            Delivering Property Deals with{" "}
            <span className="text-accent">Absolute Certainty</span>
          </h1>

          {/* Subtext */}
          <p
            className={`text-primary-foreground/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl reveal ${contentVisible ? "animate-fade-up in-view animate-delay-200" : ""}`}
          >
            17+ years of fast, transparent deal execution on SG Highway,
            Jagatpur & Godrej Garden City. We don't just show properties — we
            close deals.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-3 mb-10 reveal ${contentVisible ? "animate-fade-up in-view animate-delay-300" : ""}`}
          >
            <a
              href={generateWhatsAppUrl(getGeneralInquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-lg text-white font-semibold cta-green hover:opacity-90 active:scale-95 transition-smooth text-base ring-offset-2 hover:ring-2 hover:ring-accent/50"
              data-ocid="hero.whatsapp_cta_button"
            >
              <MessageCircle size={20} />
              Get Free Consultation
            </a>
            <button
              type="button"
              onClick={scrollToProperties}
              className="inline-flex items-center justify-center gap-2 py-3.5 px-7 rounded-lg border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-smooth text-base font-semibold hover:ring-2 hover:ring-primary-foreground/20 ring-offset-1"
              data-ocid="hero.view_properties_button"
            >
              View Properties
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Trust points with stagger */}
          <div className="flex flex-col gap-2">
            {TRUST_POINTS.map((point, i) => (
              <div
                key={point}
                className={`flex items-center gap-2 reveal ${contentVisible ? `animate-slide-in-left in-view animate-delay-${(i + 3) * 100}` : ""}`}
              >
                <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                <span className="text-primary-foreground/75 text-sm">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Bar with staggered scale-in */}
      <div className="relative border-t border-primary-foreground/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-primary-foreground/15">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center py-7 px-4 reveal ${contentVisible ? `animate-scale-in in-view animate-delay-${(i + 3) * 100}` : ""}`}
                data-ocid={`hero.stat.${stat.label.toLowerCase().replace(/\s+/g, "_")}`}
              >
                <span className="font-display font-bold text-3xl text-accent">
                  {stat.value}
                </span>
                <span className="text-primary-foreground/65 text-xs font-body uppercase tracking-wide mt-1 text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick CTA ribbon */}
      <div className="relative bg-primary-foreground/5 border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-primary-foreground/70 text-sm">
            📞 Need help now? Our experts are available 9 AM – 8 PM, 7 days a
            week.
          </p>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-1.5 text-accent font-medium text-sm hover:underline flex-shrink-0"
            data-ocid="hero.phone_cta_link"
          >
            <Phone size={14} />
            +91 98765 43210
          </a>
        </div>
      </div>
    </div>
  );
}
