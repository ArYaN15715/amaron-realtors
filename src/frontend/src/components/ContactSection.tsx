import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";
import { useInView } from "../hooks/useInView";
import { AMARON_PHONE, generateWhatsAppUrl } from "../utils/whatsapp";

const INQUIRY_TYPES = [
  { value: "buy", label: "Looking to Buy" },
  { value: "sell", label: "Looking to Sell" },
  { value: "site-visit", label: "Book Site Visit" },
  { value: "general", label: "General Inquiry" },
];

const SOCIALS = [
  {
    icon: SiYoutube,
    href: "https://youtube.com/@amarongroup",
    label: "YouTube",
  },
  {
    icon: SiInstagram,
    href: "https://instagram.com/amarongroup",
    label: "Instagram",
  },
  {
    icon: SiFacebook,
    href: "https://facebook.com/amarongroup",
    label: "Facebook",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    inquiryType: "buy",
  });
  const [touched, setTouched] = useState({ name: false, phone: false });
  const [submitted, setSubmitted] = useState(false);

  const [formRef, formVisible] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const [rightRef, rightVisible] = useInView<HTMLDivElement>({
    threshold: 0.1,
  });

  const errors = {
    name: !form.name.trim() ? "Full name is required" : "",
    phone: !form.phone.trim() ? "Phone number is required" : "",
  };

  const showError = (field: "name" | "phone") =>
    (touched[field] || submitted) && errors[field];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (errors.name || errors.phone) return;
    const msg = `Hi Amaron Group!\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Email:* ${form.email || "N/A"}\n*Inquiry:* ${form.inquiryType}\n*Message:* ${form.message}`;
    window.open(generateWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative bg-primary py-16 lg:py-20 overflow-hidden">
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl pointer-events-none animate-pulse-soft" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Form */}
          <div
            ref={formRef}
            className={`reveal ${formVisible ? "animate-slide-in-left in-view" : ""}`}
          >
            <p className="text-accent font-medium text-sm uppercase tracking-widest mb-2">
              Let's Talk
            </p>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-3">
              Start Your Property Journey
            </h2>
            <p className="text-white/70 mb-8">
              Fill in your details and we'll connect on WhatsApp within minutes.
              No automated responses — a real advisor, every time.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              data-ocid="contact.form"
            >
              {/* Inquiry Type */}
              <div>
                <Label className="text-sm font-medium text-white mb-2 block">
                  I'm interested in
                </Label>
                <div className="grid grid-cols-2 gap-2">
                  {INQUIRY_TYPES.map((type) => (
                    <button
                      type="button"
                      key={type.value}
                      onClick={() =>
                        setForm({ ...form, inquiryType: type.value })
                      }
                      className={`px-3 py-2.5 rounded-lg text-sm font-medium border transition-smooth text-left ${
                        form.inquiryType === type.value
                          ? "border-accent bg-accent/20 text-accent"
                          : "border-white/20 bg-white/5 text-white/70 hover:border-accent/50 hover:text-white"
                      }`}
                      data-ocid={`contact.inquiry_type.${type.value}_button`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-white mb-1.5 block"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Rajesh Sharma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                    aria-invalid={!!showError("name")}
                    aria-describedby={
                      showError("name") ? "name-error" : undefined
                    }
                    className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-accent/40 focus-visible:border-accent ${
                      showError("name")
                        ? "border-destructive focus-visible:ring-destructive"
                        : ""
                    }`}
                    data-ocid="contact.name_input"
                  />
                  {showError("name") && (
                    <p
                      id="name-error"
                      className="text-destructive text-xs mt-1"
                      data-ocid="contact.name_input.field_error"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-white mb-1.5 block"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 XXXXX"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                    aria-invalid={!!showError("phone")}
                    aria-describedby={
                      showError("phone") ? "phone-error" : undefined
                    }
                    className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-accent/40 focus-visible:border-accent ${
                      showError("phone")
                        ? "border-destructive focus-visible:ring-destructive"
                        : ""
                    }`}
                    data-ocid="contact.phone_input"
                  />
                  {showError("phone") && (
                    <p
                      id="phone-error"
                      className="text-destructive text-xs mt-1"
                      data-ocid="contact.phone_input.field_error"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-white mb-1.5 block"
                >
                  Email (optional)
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="rajesh@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-accent/40 focus-visible:border-accent"
                  data-ocid="contact.email_input"
                />
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-white mb-1.5 block"
                >
                  Your Requirement
                </Label>
                <Textarea
                  id="message"
                  rows={3}
                  placeholder="E.g. Looking for a 3BHK ready flat near SG Highway under ₹1.2 Cr with good amenities..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-accent/40 focus-visible:border-accent"
                  data-ocid="contact.message_textarea"
                />
              </div>

              <Button
                type="submit"
                className="w-full py-3 cta-green text-white font-semibold hover:opacity-90 border-0"
                data-ocid="contact.submit_button"
              >
                <MessageCircle size={18} className="mr-2" />
                Send via WhatsApp
              </Button>
              <p className="text-xs text-white/50 text-center">
                You'll be redirected to WhatsApp with your details pre-filled.
                We respond within 30 minutes.
              </p>
            </form>
          </div>

          {/* Right: Contact info + socials */}
          <div
            ref={rightRef}
            className={`space-y-6 reveal ${rightVisible ? "animate-slide-in-right in-view" : ""}`}
          >
            {/* Quick Actions */}
            <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/15 space-y-4">
              <h3 className="font-display font-semibold text-white mb-2">
                Prefer to reach directly?
              </h3>
              <a
                href="https://wa.me/919876543210?text=Hi%20Amaron%20Group!%20I%20have%20a%20property%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-accent/50 transition-smooth group"
                data-ocid="contact.direct_whatsapp_link"
              >
                <div className="w-11 h-11 rounded-full cta-green flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-display font-semibold text-white text-sm">
                    Chat on WhatsApp
                  </p>
                  <p className="text-white/55 text-xs">
                    Fastest response — typically under 30 min
                  </p>
                </div>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary-foreground/30 transition-smooth"
                data-ocid="contact.phone_link"
              >
                <div className="w-11 h-11 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-display font-semibold text-white text-sm">
                    Call Us Directly
                  </p>
                  <p className="text-white/55 text-xs">
                    {AMARON_PHONE} · 9 AM – 8 PM daily
                  </p>
                </div>
              </a>
            </div>

            {/* Social Media */}
            <div className="bg-white/8 backdrop-blur-sm rounded-2xl p-6 border border-white/15">
              <h3 className="font-display font-semibold text-white mb-2">
                Follow for Property Updates
              </h3>
              <p className="text-white/60 text-sm mb-4">
                New listings, market insights, and deal alerts — straight to
                your feed.
              </p>
              <div className="flex gap-3">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex-1 flex flex-col items-center gap-2 py-3.5 bg-white/5 rounded-xl border border-white/10 hover:border-accent/50 hover:text-accent transition-smooth text-white/60"
                    data-ocid={`contact.social.${label.toLowerCase()}_link`}
                  >
                    <Icon size={22} />
                    <span className="text-xs font-medium text-white/70">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "500+", label: "Deals Closed" },
                { value: "17+", label: "Years Experience" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="text-center bg-accent/15 border border-accent/25 rounded-xl py-4"
                >
                  <p className="font-display font-bold text-accent text-xl">
                    {s.value}
                  </p>
                  <p className="text-white/65 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
