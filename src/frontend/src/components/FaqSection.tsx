import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useInView } from "../hooks/useInView";

const FAQS = [
  {
    q: "What areas does Amaron Group specialize in?",
    a: "We specialize in SG Highway, Jagatpur Road, Godrej Garden City, Thaltej, Ambli-Bopal, and Bodakdev areas of Ahmedabad. These are our core zones where we have deep market knowledge and strong builder relationships.",
  },
  {
    q: "What is the buying process and how long does it take?",
    a: "Our typical process: requirement discussion → property shortlisting (1-2 days) → site visits → negotiation & due diligence (3-7 days) → token advance → sale agreement → registration. From start to key handover is typically 3-6 weeks for ready properties. For under-construction, it's faster since only booking is needed.",
  },
  {
    q: "Are there any brokerage fees for buyers?",
    a: "Our brokerage is fully transparent and disclosed upfront before any deal proceeds. For buyer-side transactions, typically 1-2% of the deal value applies. For sellers, we work on a fixed fee model. No surprises, ever.",
  },
  {
    q: "Can you help with home loan assistance?",
    a: "Yes. We have tie-ups with leading banks (SBI, HDFC, ICICI, Axis) and our team will help you get the best interest rate and smooth loan approval. This service is complimentary for our clients.",
  },
  {
    q: "Do you help NRI clients buy or sell property remotely?",
    a: "Absolutely. We have dedicated processes for NRI transactions — video property tours, online documentation, Power of Attorney guidance, and regular WhatsApp/video updates. We have helped 50+ NRI clients complete transactions from abroad.",
  },
  {
    q: "How do I know a property is legally clear?",
    a: "Every property we recommend goes through our internal checklist: title verification, RERA registration status, encumbrance certificate check, and builder track record review. We only bring you legally sound options.",
  },
  {
    q: "What makes Amaron Group different from online portals?",
    a: "Online portals list thousands of unverified properties. We curate, verify, negotiate, and execute. You get a dedicated advisor who takes ownership of your deal — not just a listing to browse.",
  },
];

const DELAY_MAP: Record<number, string> = {
  0: "",
  1: "animate-delay-100",
  2: "animate-delay-200",
  3: "animate-delay-300",
  4: "animate-delay-400",
  5: "animate-delay-500",
  6: "animate-delay-600",
};

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const [headingRef, headingVisible] = useInView<HTMLDivElement>({
    threshold: 0.2,
  });
  const [listRef, listVisible] = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <div className="relative bg-primary py-16 lg:py-20 overflow-hidden">
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-12">
          <p
            className={`text-accent font-medium text-sm uppercase tracking-widest mb-2 reveal ${headingVisible ? "animate-fade-up in-view" : ""}`}
          >
            Got Questions?
          </p>
          <h2
            className={`font-display font-bold text-3xl lg:text-4xl text-white mb-4 reveal ${headingVisible ? "animate-fade-up in-view animate-delay-100" : ""}`}
          >
            Frequently Asked Questions
          </h2>
          <p
            className={`text-white/65 reveal ${headingVisible ? "animate-fade-up in-view animate-delay-200" : ""}`}
          >
            Everything you need to know before making your property decision.
          </p>
        </div>

        <div ref={listRef} className="space-y-3" data-ocid="faq.list">
          {FAQS.map((faq, i) => (
            <div
              key={faq.q.slice(0, 30)}
              className={`glass-card rounded-xl overflow-hidden reveal ${listVisible ? `animate-fade-up in-view ${DELAY_MAP[i] ?? ""}` : ""}`}
              data-ocid={`faq.item.${i + 1}`}
            >
              <button
                type="button"
                className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                data-ocid={`faq.toggle.${i + 1}`}
              >
                <span className="font-display font-semibold text-white text-sm sm:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-accent flex-shrink-0 mt-0.5 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>

              {/* Smooth expand with grid-rows transition */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-4 pt-0">
                    <p className="text-white/70 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
