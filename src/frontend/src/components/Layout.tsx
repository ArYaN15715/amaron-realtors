import { Building2, ExternalLink, MessageCircle, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";
import {
  AMARON_PHONE,
  generateWhatsAppUrl,
  getGeneralInquiryMessage,
} from "../utils/whatsapp";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const SOCIAL_LINKS = [
  {
    icon: SiYoutube,
    href: "https://youtube.com/@amarongroup",
    label: "YouTube",
    color: "hover:text-red-500",
  },
  {
    icon: SiInstagram,
    href: "https://instagram.com/amarongroup",
    label: "Instagram",
    color: "hover:text-pink-500",
  },
  {
    icon: SiFacebook,
    href: "https://facebook.com/amarongroup",
    label: "Facebook",
    color: "hover:text-blue-500",
  },
  {
    icon: SiX,
    href: "https://x.com/amarongroup",
    label: "X / Twitter",
    color: "hover:text-foreground",
  },
];

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Layout({ children }: LayoutProps) {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border" data-ocid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-sm">
                    AG
                  </span>
                </div>
                <div>
                  <p className="font-display font-bold text-primary text-lg">
                    AMARON GROUP
                  </p>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase">
                    Realtors
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-xs">
                17+ years of delivering real estate deals with speed,
                transparency, and absolute certainty. Your trusted partner for
                SG Highway, Jagatpur & Godrej Garden City properties.
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground ${color} transition-colors duration-200`}
                    data-ocid={`footer.social.${label.toLowerCase().replace(/\s.*/, "")}_link`}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display font-semibold text-foreground mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(link.href);
                      }}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      data-ocid={`footer.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display font-semibold text-foreground mb-4">
                Contact Us
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Building2
                    size={15}
                    className="text-accent mt-0.5 flex-shrink-0"
                  />
                  <p className="text-sm text-muted-foreground">
                    SG Highway, Jagatpur Road &<br />
                    Godrej Garden City, Ahmedabad
                  </p>
                </div>
                <a
                  href={`tel:${AMARON_PHONE}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-ocid="footer.phone_link"
                >
                  <Phone size={14} className="text-accent" />
                  {AMARON_PHONE}
                </a>
                <a
                  href={generateWhatsAppUrl(getGeneralInquiryMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium cta-green text-white px-4 py-2 rounded-lg hover:opacity-90 transition-smooth"
                  data-ocid="footer.whatsapp_button"
                >
                  <MessageCircle size={14} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              © {year} Amaron Group Realtors. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline inline-flex items-center gap-0.5"
              >
                caffeine.ai <ExternalLink size={10} />
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={generateWhatsAppUrl(getGeneralInquiryMessage())}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 rounded-full cta-green text-white flex items-center justify-center shadow-elevated-lg hover:opacity-90 active:scale-95 transition-smooth"
        style={{ animation: "float 3s ease-in-out infinite" }}
        data-ocid="floating_whatsapp_button"
      >
        <MessageCircle size={26} />
      </a>

      {/* Sticky Mobile Bottom Bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card border-t border-border shadow-elevated-lg"
        data-ocid="mobile_sticky_bar"
      >
        <div className="grid grid-cols-3 divide-x divide-border">
          <a
            href="tel:+919876543210"
            className="flex flex-col items-center gap-1 py-3 text-primary hover:bg-muted transition-colors"
            data-ocid="mobile_sticky_bar.call_button"
          >
            <Phone size={20} />
            <span className="text-[10px] font-body font-medium">Call</span>
          </a>
          <a
            href={generateWhatsAppUrl(getGeneralInquiryMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-3 cta-green text-white hover:opacity-90 transition-smooth"
            data-ocid="mobile_sticky_bar.whatsapp_button"
          >
            <MessageCircle size={20} />
            <span className="text-[10px] font-body font-medium">WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => scrollTo("#properties")}
            className="flex flex-col items-center gap-1 py-3 text-primary hover:bg-muted transition-colors"
            data-ocid="mobile_sticky_bar.properties_button"
          >
            <Building2 size={20} />
            <span className="text-[10px] font-body font-medium">
              Properties
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
