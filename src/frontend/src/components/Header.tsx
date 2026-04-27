import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  generateWhatsAppUrl,
  getGeneralInquiryMessage,
} from "../utils/whatsapp";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
          isScrolled
            ? "bg-card shadow-card border-b border-border"
            : "bg-card/95 backdrop-blur-sm"
        }`}
        data-ocid="header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <button
              type="button"
              onClick={() => scrollToSection("#home")}
              className="flex items-center gap-2 group"
              data-ocid="header.logo_link"
            >
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-display font-bold text-sm">
                  AG
                </span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-primary text-base tracking-tight">
                  AMARON GROUP
                </span>
                <span className="text-[10px] font-body text-muted-foreground tracking-widest uppercase">
                  Realtors
                </span>
              </div>
            </button>
            <nav
              className="hidden md:flex items-center gap-6"
              data-ocid="header.nav"
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNav(e, item.href)}
                  className="text-sm font-body font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
                  data-ocid={`header.nav.${item.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                data-ocid="header.phone_link"
              >
                <Phone size={15} />
                <span>+91 98765 43210</span>
              </a>
              <a
                href={generateWhatsAppUrl(getGeneralInquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta text-sm px-4 py-2 rounded-lg text-white font-semibold cta-green hover:opacity-90 active:scale-95 transition-smooth"
                data-ocid="header.talk_to_expert_button"
              >
                Talk to Expert
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              data-ocid="header.mobile_menu_toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div
            className="md:hidden bg-card border-t border-border shadow-elevated-lg"
            data-ocid="header.mobile_menu"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNav(e, item.href)}
                  className="px-4 py-3 text-base font-body font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  data-ocid={`header.mobile_nav.${item.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-border">
                <a
                  href={generateWhatsAppUrl(getGeneralInquiryMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-3 rounded-lg text-white font-semibold cta-green hover:opacity-90 transition-smooth"
                  data-ocid="header.mobile_talk_to_expert_button"
                >
                  Talk to Expert on WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
      {/* Spacer */}
      <div className="h-16 lg:h-18" />
    </>
  );
}
