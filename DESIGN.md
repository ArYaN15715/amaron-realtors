# Design Brief: Amaron Group Realtors

**Purpose:** Modern, conversion-focused real estate platform for a 17+ year execution-driven company in Ahmedabad. Tone: professional, structured, results-driven (not luxury, not commodity).

## Color Palette

| Token | Value | OKLCH | Purpose |
|:------|:------|:------|:--------|
| Primary | Deep Blue | `0.38 0.25 261` | Trust, professional authority |
| Accent | Emerald Green | `0.60 0.18 162` | Success, money, deal completion |
| CTA | Bright Green | `0.68 0.27 142` | WhatsApp conversions, urgency |
| Secondary | Charcoal | `0.22 0.02 261` | Text, hierarchical structure |
| Background | White | `0.99 0 0` | Clean, open space |
| Muted | Light Gray | `0.92 0.01 261` | Card backgrounds, sections |
| Border | Soft Gray | `0.88 0.01 261` | Subtle divisions, cards |

## Typography

| Layer | Font | Use Case | Weight |
|:------|:-----|:---------|:-------|
| Display | Space Grotesk | Headers, process steps, hero | 700 |
| Body | DM Sans | Content, property details, copy | 400–500 |
| Mono | Geist Mono | Property IDs, pricing, tech trust | 400–500 |

## Structural Zones

| Zone | Treatment | Spacing | Border |
|:-----|:----------|:--------|:-------|
| Header/Nav | Elevated white card, subtle border-b | Compact (0.75rem) | Soft gray 1px |
| Hero | Deep blue gradient, animated skyline | Full width | None |
| Hot Deals | Emerald ticker bar, scroll animation | Tight (0.5rem) | None |
| Cards | White/muted bg, soft shadow, hover lift | Standard (1rem) | Soft gray 1px |
| Process | Charcoal bg, 5 steps, emerald accents | Spacious (1.5rem) | None |
| Testimonials | Quote cards, author avatars | Standard (1rem) | Light muted |
| FAQ | Clean accordion, smooth expand | Compact (0.75rem) | Soft gray |
| Footer | Dark charcoal, link groups | Standard (1rem) | Subtle top border |
| Floats | CTA green, fixed positioning, pulsing | Always visible | Rounded full |

## Component Patterns

**Buttons:** Smooth 300ms transitions, hover opacity-90, active scale-95. Primary (blue), Accent (green), CTA (bright green).

**Property Cards:** Image-first, price/location overlay on hover, "View Details" CTA green button, shadow lift on hover.

**Property Modal:** Full details (images, description, amenities, pricing, contact), backdrop blur, dismiss on outside click.

**Process Steps:** Vertical timeline or horizontal 5-step flow, emerald connecting lines, step icons (1–5), brief text.

**Testimonials:** Quote card with author name/role, star rating, soft border or muted bg.

**FAQ:** Accordion with smooth expand/collapse keyframes, icon rotation on toggle.

**Hot Deals Ticker:** Continuous scroll animation, emerald text, urgency copy (e.g., "🔥 New Deal: Premium 2BHK in SG Highway – ₹1.2Cr").

**Floating WhatsApp:** Bright green button, fixed bottom-right, pulsing animation, link to WhatsApp.

**Sticky Mobile Bar:** Fixed bottom bar (call, WhatsApp, properties), accessible always on mobile.

## Motion & Interaction

| Element | Duration | Easing | Behavior |
|:--------|:---------|:-------|:---------|
| All transitions | 300ms | cubic-bezier(0.4, 0, 0.2, 1) | Smooth, professional |
| Hover lift (cards) | 300ms | ease-out | Translate Y -4px, shadow elevation |
| Scroll ticker | 30s | linear | Infinite loop |
| Float animation | 3s | ease-in-out | Floating CTA buttons |
| Accordion expand | 200ms | ease-out | Height transition |

## Constraints & Guardrails

- **No gradients in text:** Use color-only or gradient-text utility sparingly (hero headline only).
- **No animations on scroll:** Static layouts, no parallax or scroll-triggered effects (keep performance tight).
- **No decorative blurs:** Use transparent overlays only for card hover states or modal backdrops.
- **Minimal borders:** Use 1px soft gray, never harsh black or ultra-thin lines.
- **Hierarchy through weight/size:** Not color intensity or text shadows.
- **Mobile-first:** Responsive breakpoints (sm: 640px, md: 768px, lg: 1024px, 2xl: 1400px).

## Signature Detail

**Animated Hot Deals Ticker:** The scrolling emerald ticker with deal urgency messages creates a sense of active marketplace momentum. It's the single visual element that signals "deals are happening now" and drives conversion psychology.

**Process Flow Visualization:** The 5-step process with emerald connectors and step icons builds trust by showing transparency and structure. It's anti-luxury (no opacity play) but conveys professionalism and speed.

## Theme

Light mode only (no dark mode variant). Clean white backgrounds with structured zones. Deep blue primary builds trust; emerald accents signal success and money. Charcoal text for legibility. Professional execution-focused aesthetic — structured, confident, results-driven.
