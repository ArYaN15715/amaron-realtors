import { Star } from "lucide-react";
import { useInView } from "../hooks/useInView";

const TESTIMONIALS = [
  {
    name: "Rajesh Sharma",
    location: "Bought 3BHK at Godrej Garden City",
    review:
      "Hassle-free experience from start to finish. Amaron's team understood exactly what I was looking for and closed my deal in 3 weeks. The documentation support was excellent.",
    rating: 5,
    initials: "RS",
  },
  {
    name: "Priya Mehta",
    location: "Invested in SG Highway Plot",
    review:
      "Transparent process, honest pricing. They showed me 4 options — not 40. Found my ideal investment property quickly. The legal check they ran saved me from a problematic title issue.",
    rating: 5,
    initials: "PM",
  },
  {
    name: "Darshan Patel",
    location: "Sold Villa in Jagatpur",
    review:
      "Sold my property 12% above my expected price. Their negotiation skills and local network are genuinely impressive. Communication was prompt — never had to chase them for updates.",
    rating: 5,
    initials: "DP",
  },
  {
    name: "Kavita & Suresh Joshi",
    location: "Bought 2BHK, First Home Buyers",
    review:
      "As first-time buyers, we had many questions. Amaron team patiently walked us through every step. They even connected us with a good home loan advisor. Truly customer-first approach.",
    rating: 5,
    initials: "KJ",
  },
  {
    name: "Amit Kapoor",
    location: "NRI — Purchased from Canada",
    review:
      "Handled my complete property purchase remotely. Virtual tours, Power of Attorney guidance, and kept me updated at every step. Seamless for an NRI transaction.",
    rating: 5,
    initials: "AK",
  },
  {
    name: "Neeraj Gupta",
    location: "Upgraded from 2BHK to 4BHK",
    review:
      "They coordinated both the sale of my old flat and purchase of new one simultaneously. Exceptional coordination and zero stress on my end. Will recommend to everyone.",
    rating: 5,
    initials: "NG",
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

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} stars`}>
      {["1", "2", "3", "4", "5"].slice(0, count).map((n) => (
        <Star
          key={n}
          size={14}
          className="text-[oklch(var(--chart-4))] fill-[oklch(var(--chart-4))]"
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [headingRef, headingVisible] = useInView<HTMLDivElement>({
    threshold: 0.2,
  });
  const [cardsRef, cardsVisible] = useInView<HTMLDivElement>({
    threshold: 0.08,
  });

  return (
    <div className="relative bg-primary py-16 lg:py-20 overflow-hidden">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern pointer-events-none" />

      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-primary-foreground/5 blur-3xl pointer-events-none animate-pulse-soft" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-12">
          <p
            className={`text-accent font-medium text-sm uppercase tracking-widest mb-2 reveal ${headingVisible ? "animate-fade-up in-view" : ""}`}
          >
            Client Stories
          </p>
          <h2
            className={`font-display font-bold text-3xl lg:text-4xl text-white mb-4 reveal ${headingVisible ? "animate-fade-up in-view animate-delay-100" : ""}`}
          >
            What Our Clients Say
          </h2>
          <p
            className={`text-white/65 reveal ${headingVisible ? "animate-fade-up in-view animate-delay-200" : ""}`}
          >
            Real words from real clients. Authentic experiences, not marketing
            copy.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          data-ocid="testimonials.list"
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card rounded-xl p-5 transition-smooth hover:-translate-y-1 reveal ${cardsVisible ? `animate-fade-up in-view ${DELAY_MAP[i] ?? ""}` : ""}`}
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <StarRating count={t.rating} />
              <p className="text-white/80 text-sm leading-relaxed mt-3 mb-4 line-clamp-4">
                "{t.review}"
              </p>
              <div className="flex items-center gap-3 border-t border-white/10 pt-3">
                <div className="w-9 h-9 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-white text-xs">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-display font-semibold text-white text-sm">
                    {t.name}
                  </p>
                  <p className="text-white/55 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
