import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bed,
  Building2,
  Calendar,
  Car,
  CheckCircle2,
  Compass,
  MapPin,
  Maximize2,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { useEffect } from "react";
import type { Property } from "../types";
import {
  generateWhatsAppUrl,
  getPropertyInquiryMessage,
  getSiteVisitMessage,
} from "../utils/whatsapp";

const BADGE_STYLES: Record<string, string> = {
  "Hot Deal": "bg-destructive text-destructive-foreground",
  "New Launch": "bg-accent text-accent-foreground",
  "Price Drop": "bg-[oklch(0.62_0.19_38)] text-white",
  "Urgent Sale": "bg-destructive text-destructive-foreground",
  Premium: "bg-primary text-primary-foreground",
};

interface PropertyModalProps {
  property: Property;
  onClose: () => void;
}

export default function PropertyModal({
  property,
  onClose,
}: PropertyModalProps) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <dialog
      open
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-transparent w-full h-full max-w-none m-0"
      data-ocid="property_modal.dialog"
      aria-label={property.title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onClose();
        }}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
        data-ocid="property_modal.backdrop"
      />

      {/* Modal Panel */}
      <div className="relative bg-card w-full sm:max-w-2xl lg:max-w-3xl max-h-[92vh] sm:max-h-[88vh] rounded-t-2xl sm:rounded-2xl overflow-hidden flex flex-col shadow-elevated-lg">
        {/* Image Header */}
        <div className="relative h-56 sm:h-64 flex-shrink-0">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-card/90 flex items-center justify-center hover:bg-card transition-colors"
            aria-label="Close modal"
            data-ocid="property_modal.close_button"
          >
            <X size={16} />
          </button>

          {/* Badge */}
          {property.badge && (
            <div className="absolute top-3 left-3">
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full ${BADGE_STYLES[property.badge] ?? "bg-muted text-foreground"}`}
              >
                {property.badge}
              </span>
            </div>
          )}

          {/* Price overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <h2 className="font-display font-bold text-xl text-white leading-tight">
                {property.title}
              </h2>
              <div className="flex items-center gap-1 text-white/80 text-sm mt-1">
                <MapPin size={13} />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="font-display font-bold text-2xl text-accent">
                {property.price}
              </span>
              {property.isUrgent && (
                <div className="text-[oklch(0.78_0.17_60)] text-xs font-medium">
                  ⚡ Urgent Sale
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content — scrollable */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {/* Key specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Building2, label: "Type", value: property.type },
              ...(property.bhk
                ? [{ icon: Bed, label: "BHK", value: `${property.bhk} BHK` }]
                : []),
              {
                icon: Maximize2,
                label: "Area",
                value: `${property.sizeSqft.toLocaleString()} sqft`,
              },
              ...(property.floor
                ? [{ icon: Building2, label: "Floor", value: property.floor }]
                : []),
              ...(property.facing
                ? [{ icon: Compass, label: "Facing", value: property.facing }]
                : []),
              ...(property.possession
                ? [
                    {
                      icon: Calendar,
                      label: "Possession",
                      value: property.possession,
                    },
                  ]
                : []),
              ...(property.parking
                ? [
                    {
                      icon: Car,
                      label: "Parking",
                      value: `${property.parking} Car`,
                    },
                  ]
                : []),
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-muted/50 rounded-lg p-3 flex flex-col gap-1"
              >
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                  <Icon size={12} className="text-accent" />
                  {label}
                </div>
                <span className="font-display font-semibold text-foreground text-sm">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-2">
              About this Property
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-3">
              Amenities
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {property.amenities.map((a) => (
                <div key={a} className="flex items-center gap-2">
                  <CheckCircle2
                    size={14}
                    className="text-accent flex-shrink-0"
                  />
                  <span className="text-sm text-muted-foreground">{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RERA */}
          {property.rera && (
            <div className="bg-muted/30 rounded-lg px-4 py-3 border border-border">
              <span className="text-xs text-muted-foreground">
                RERA Reg. No.:{" "}
              </span>
              <span className="text-xs font-mono text-foreground">
                {property.rera}
              </span>
            </div>
          )}
        </div>

        {/* Fixed CTA footer */}
        <div className="flex-shrink-0 border-t border-border bg-card px-5 py-4 flex flex-col sm:flex-row gap-3">
          <a
            href={generateWhatsAppUrl(
              getPropertyInquiryMessage(property.title, property.price),
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg text-white cta-green font-semibold hover:opacity-90 transition-smooth"
            data-ocid="property_modal.whatsapp_enquire_button"
          >
            <MessageCircle size={18} />
            Enquire on WhatsApp
          </a>
          <a
            href={generateWhatsAppUrl(getSiteVisitMessage(property.title))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/5 transition-smooth"
            data-ocid="property_modal.book_visit_button"
          >
            <Calendar size={16} />
            Book Site Visit
          </a>
          <a
            href="tel:+919876543210"
            className="sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-muted text-foreground hover:bg-muted/70 transition-smooth"
            data-ocid="property_modal.call_button"
          >
            <Phone size={16} />
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>
    </dialog>
  );
}
