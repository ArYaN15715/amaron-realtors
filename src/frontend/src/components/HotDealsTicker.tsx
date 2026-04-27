import { HOT_DEAL_TEXTS } from "../data/properties";

export default function HotDealsTicker() {
  // Duplicate for seamless infinite scroll
  const items = [...HOT_DEAL_TEXTS, ...HOT_DEAL_TEXTS];

  return (
    <div
      className="bg-primary border-y border-primary/80 overflow-hidden py-3"
      data-ocid="hot_deals_ticker"
      aria-label="Hot property deals"
    >
      <div className="flex items-center gap-0">
        {/* Label with shimmer glow */}
        <div className="relative flex-shrink-0 flex items-center gap-2 bg-accent px-5 py-0.5 z-10 mr-4 animate-ticker-badge-glow">
          <span className="text-accent-foreground font-display font-bold text-sm tracking-wide uppercase">
            Hot Deals
          </span>
          <span className="w-2 h-2 rounded-full bg-accent-foreground animate-pulse-soft" />
          {/* Shimmer sweep over badge */}
          <div
            className="absolute inset-0 animate-shimmer pointer-events-none rounded-sm"
            aria-hidden="true"
          />
        </div>

        {/* Fire dots that pulse */}
        <div className="flex-shrink-0 flex items-center gap-1 mr-3">
          <span
            className="w-2 h-2 rounded-full bg-[oklch(0.62_0.19_38)] animate-pulse-soft"
            style={{ animationDelay: "0ms" }}
          />
          <span
            className="w-1.5 h-1.5 rounded-full bg-[oklch(0.68_0.27_142_/_0.7)] animate-pulse-soft"
            style={{ animationDelay: "300ms" }}
          />
          <span
            className="w-1 h-1 rounded-full bg-[oklch(0.62_0.19_38_/_0.5)] animate-pulse-soft"
            style={{ animationDelay: "600ms" }}
          />
        </div>

        {/* Scrolling ticker */}
        <div className="overflow-hidden flex-1 group">
          <div className="flex gap-12 animate-scroll-ticker group-hover:[animation-play-state:paused] whitespace-nowrap w-max">
            {items.map((text, i) => (
              <span
                key={`ticker-${text.slice(0, 20)}-${i}`}
                className="text-primary-foreground/90 text-sm font-body font-medium flex-shrink-0"
              >
                {text}
                <span className="mx-6 text-accent opacity-60">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
