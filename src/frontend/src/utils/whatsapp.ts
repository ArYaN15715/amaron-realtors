export const AMARON_WHATSAPP = "+919876543210";
export const AMARON_PHONE = "+91 98765 43210";

export function generateWhatsAppUrl(
  message: string,
  phone: string = AMARON_WHATSAPP,
): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encoded}`;
}

export function getPropertyInquiryMessage(
  propertyTitle: string,
  price: string,
): string {
  return `Hi Amaron Group Realtors! I'm interested in the property: *${propertyTitle}* (${price}). Please share more details and arrange a site visit. Thank you!`;
}

export function getGeneralInquiryMessage(): string {
  return `Hi Amaron Group Realtors! I'm looking for a property in Ahmedabad (SG Highway / Jagatpur / Godrej Garden City area). Please help me find the right deal!`;
}

export function getSiteVisitMessage(propertyTitle?: string): string {
  if (propertyTitle) {
    return `Hi Amaron Group! I'd like to book a site visit for: *${propertyTitle}*. Please confirm a convenient time. Thank you!`;
  }
  return `Hi Amaron Group! I'd like to book a site visit. Please share available slots. Thank you!`;
}
