import { Clock, ExternalLink, MapPin } from "lucide-react";
import { useInView } from "../hooks/useInView";

const AREAS = [
  { name: "SG Highway", tag: "Premium Corridor", projects: "50+ projects" },
  { name: "Jagatpur Road", tag: "Fast Growth", projects: "35+ projects" },
  {
    name: "Godrej Garden City",
    tag: "Township Living",
    projects: "Full township",
  },
  { name: "Thaltej", tag: "Corporate Hub", projects: "40+ projects" },
  { name: "Ambli-Bopal", tag: "High Returns", projects: "60+ projects" },
  { name: "Bodakdev", tag: "Ultra Luxury", projects: "25+ projects" },
];

const DELAY_MAP: Record<number, string> = {
  0: "",
  1: "animate-delay-100",
  2: "animate-delay-200",
  3: "animate-delay-300",
  4: "animate-delay-400",
  5: "animate-delay-500",
};

export default function LocationSection() {
  const [contentRef, contentVisible] = useInView<HTMLDivElement>({
    threshold: 0.1,
  });
  const [areasRef, areasVisible] = useInView<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <div className="bg-muted/30 py-16 lg:py-20" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Content */}
          <div ref={contentRef}>
            <p
              className={`text-accent font-medium text-sm uppercase tracking-widest mb-2 reveal ${contentVisible ? "animate-fade-up in-view" : ""}`}
            >
              Our Territory
            </p>
            <h2
              className={`font-display font-bold text-3xl lg:text-4xl text-foreground mb-4 reveal ${contentVisible ? "animate-fade-up in-view animate-delay-100" : ""}`}
            >
              Ahmedabad's Fastest-Growing Corridors
            </h2>
            <p
              className={`text-muted-foreground mb-8 leading-relaxed reveal ${contentVisible ? "animate-fade-up in-view animate-delay-200" : ""}`}
            >
              We operate exclusively across Ahmedabad's premium real estate belt
              — the SG Highway axis and its surrounding micro-markets. Our local
              depth means you get insider pricing, first access to new launches,
              and genuine market intelligence.
            </p>

            <div
              ref={areasRef}
              className="grid grid-cols-2 gap-3 mb-8"
              data-ocid="location.areas_list"
            >
              {AREAS.map((area, i) => (
                <div
                  key={area.name}
                  className={`bg-card border border-border rounded-lg p-3.5 hover:border-accent/50 hover:-translate-y-1.5 hover:shadow-md transition-smooth reveal ${areasVisible ? `animate-scale-in in-view ${DELAY_MAP[i] ?? ""}` : ""}`}
                  data-ocid={`location.area.${i + 1}`}
                >
                  <div className="flex items-start gap-2">
                    <MapPin
                      size={14}
                      className="text-accent mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <p className="font-display font-semibold text-foreground text-sm">
                        {area.name}
                      </p>
                      <p className="text-muted-foreground text-xs mt-0.5">
                        {area.tag} · {area.projects}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-4 flex-1">
                <MapPin
                  size={18}
                  className="text-accent flex-shrink-0 mt-0.5"
                />
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">
                    Office Address
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    SG Highway, Near Pakwan Cross Roads, Ahmedabad, Gujarat –
                    380054
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-4 flex-1">
                <Clock size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">
                    Working Hours
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Mon – Sun: 9:00 AM – 8:00 PM
                    <br />
                    WhatsApp available 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map embed */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-border shadow-card h-96 bg-muted/50">
              <iframe
                title="Amaron Group Realtors — Ahmedabad Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117807.30555254604!2d72.43151799999999!3d23.020600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84b6d4eb9a2b%3A0x5b8f0b0b0b0b0b0b!2sSG%20Highway%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.google.com/?q=SG+Highway+Ahmedabad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
              data-ocid="location.open_maps_link"
            >
              <ExternalLink size={14} />
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
