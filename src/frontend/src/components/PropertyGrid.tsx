import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, MapPin, Maximize2, MessageCircle, Tag, Zap } from "lucide-react";
import { useState } from "react";
import { PROPERTIES } from "../data/properties";
import { useInView } from "../hooks/useInView";
import type { Property } from "../types";
import {
  generateWhatsAppUrl,
  getPropertyInquiryMessage,
} from "../utils/whatsapp";

const BADGE_STYLES: Record<string, string> = {
  "Hot Deal": "bg-destructive text-destructive-foreground",
  "New Launch": "bg-accent text-accent-foreground",
  "Price Drop": "bg-[oklch(0.62_0.19_38)] text-white",
  "Urgent Sale": "bg-destructive text-destructive-foreground",
  Premium: "bg-primary text-primary-foreground",
};

const FILTERS = ["All", "2BHK", "3BHK", "4BHK", "Villa", "Plot"];

interface PropertyGridProps {
  onViewDetails: (property: Property) => void;
}

function PropertyCard({
  property,
  onViewDetails,
  index,
}: {
  property: Property;
  onViewDetails: (p: Property) => void;
  index: number;
}) {
  return (
    <div
      className="bg-card rounded-xl overflow-hidden border border-border group card-accent-hover"
      data-ocid={`properties.item.${index + 1}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-107"
        />
        {/* Shimmer overlay on hover */}
        <div className="shimmer-overlay" aria-hidden="true" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {property.badge && (
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${BADGE_STYLES[property.badge] ?? "bg-muted text-foreground"}`}
            >
              {property.badge}
            </span>
          )}
          {property.isUrgent && (
            <span className="flex items-center gap-1 bg-[oklch(0.62_0.19_38)] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              <Zap size={10} />
              Urgent
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-lg px-2.5 py-1">
          <span className="font-display font-bold text-primary text-sm">
            {property.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-display font-semibold text-foreground text-base mb-1 line-clamp-1">
          {property.title}
        </h3>
        <div className="flex items-center gap-1 text-muted-foreground text-xs mb-3">
          <MapPin size={12} className="flex-shrink-0 text-accent" />
          <span className="truncate min-w-0">{property.location}</span>
        </div>

        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Tag size={11} className="text-accent" />
            {property.type}
          </span>
          {property.bhk && (
            <span className="flex items-center gap-1">
              <Bed size={11} className="text-accent" />
              {property.bhk} BHK
            </span>
          )}
          <span className="flex items-center gap-1">
            <Maximize2 size={11} className="text-accent" />
            {property.sizeSqft.toLocaleString()} sqft
          </span>
        </div>

        {/* Amenities preview */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {property.amenities.slice(0, 3).map((amenity) => (
            <Badge
              key={amenity}
              variant="secondary"
              className="text-xs px-2 py-0.5"
            >
              {amenity}
            </Badge>
          ))}
          {property.amenities.length > 3 && (
            <Badge variant="outline" className="text-xs px-2 py-0.5">
              +{property.amenities.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 text-xs hover:border-accent/50 hover:text-accent"
            onClick={() => onViewDetails(property)}
            data-ocid={`properties.view_details_button.${index + 1}`}
          >
            View Details
          </Button>
          <a
            href={generateWhatsAppUrl(
              getPropertyInquiryMessage(property.title, property.price),
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-md text-xs font-semibold text-white cta-green hover:opacity-90 transition-smooth"
            data-ocid={`properties.enquire_button.${index + 1}`}
          >
            <MessageCircle size={13} />
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PropertyGrid({ onViewDetails }: PropertyGridProps) {
  const [filter, setFilter] = useState("All");
  const [headerRef, headerVisible] = useInView<HTMLDivElement>({
    threshold: 0.2,
  });
  const [gridRef, gridVisible] = useInView<HTMLDivElement>({ threshold: 0.05 });

  const filtered =
    filter === "All"
      ? PROPERTIES
      : PROPERTIES.filter((p) => {
          const bhkLabel = p.bhk ? `${p.bhk}BHK` : "";
          return p.type === filter || bhkLabel === filter;
        });

  return (
    <div className="bg-background py-16 lg:py-20" id="properties">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <p
              className={`text-accent font-medium text-sm uppercase tracking-widest mb-2 reveal ${headerVisible ? "animate-fade-up in-view" : ""}`}
            >
              Curated Listings
            </p>
            <h2
              className={`font-display font-bold text-3xl lg:text-4xl text-foreground reveal ${headerVisible ? "animate-fade-up in-view animate-delay-100" : ""}`}
            >
              Featured Properties
            </h2>
            <p
              className={`text-muted-foreground mt-2 max-w-lg reveal ${headerVisible ? "animate-fade-up in-view animate-delay-200" : ""}`}
            >
              Handpicked deals across SG Highway, Jagatpur & Godrej Garden City
              — vetted, priced right, and ready to close.
            </p>
          </div>
          {/* Filter Tabs */}
          <div
            className={`flex flex-wrap gap-2 reveal ${headerVisible ? "animate-fade-up in-view animate-delay-300" : ""}`}
            data-ocid="properties.filter_tabs"
          >
            {FILTERS.map((f) => (
              <button
                type="button"
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-smooth border ${
                  filter === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-primary"
                }`}
                data-ocid={`properties.filter.${f.toLowerCase()}_tab`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          data-ocid="properties.list"
        >
          {filtered.map((property, i) => (
            <div
              key={property.id}
              className={`reveal ${gridVisible ? `animate-scale-in in-view ${i < 4 ? `animate-delay-${i * 100 || ""}`.replace("animate-delay-0", "") : "animate-delay-400"}` : ""}`}
            >
              <PropertyCard
                property={property}
                onViewDetails={onViewDetails}
                index={i}
              />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16" data-ocid="properties.empty_state">
            <p className="text-muted-foreground">
              No properties match this filter yet.
            </p>
            <button
              type="button"
              onClick={() => setFilter("All")}
              className="mt-4 text-primary font-medium hover:underline"
            >
              View all properties
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Looking for something specific? We have off-market deals not listed
            here.
          </p>
          <a
            href="https://wa.me/919876543210?text=Hi%20Amaron%20Group!%20I'm%20looking%20for%20properties%20not%20listed%20on%20your%20website.%20Can%20you%20help%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3 px-8 rounded-lg text-white cta-green font-semibold hover:opacity-90 transition-smooth"
            data-ocid="properties.get_custom_deals_button"
          >
            <MessageCircle size={18} />
            Get Custom Property Deals
          </a>
        </div>
      </div>
    </div>
  );
}
