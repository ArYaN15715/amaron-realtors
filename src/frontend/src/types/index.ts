export interface Property {
  id: string;
  title: string;
  price: string; // e.g. "₹85 Lakhs" or "₹1.2 Cr"
  priceRaw: number; // in Lakhs for sorting
  location: string;
  type: "2BHK" | "3BHK" | "4BHK" | "Villa" | "Plot" | "Commercial";
  sizeSqft: number;
  bhk?: number;
  amenities: string[];
  imageUrl: string;
  badge?: "Hot Deal" | "New Launch" | "Price Drop" | "Urgent Sale" | "Premium";
  isUrgent?: boolean;
  description: string;
  floor?: string;
  possession?: string;
  rera?: string;
  facing?: string;
  parking?: number;
}

export interface LeadForm {
  name: string;
  phone: string;
  email?: string;
  message: string;
  inquiryType: "buy" | "sell" | "site-visit" | "general";
}

export interface NavItem {
  label: string;
  href: string;
}
