import { useState } from "react";
import ContactSection from "../components/ContactSection";
import FaqSection from "../components/FaqSection";
import HeroSection from "../components/HeroSection";
import HotDealsTicker from "../components/HotDealsTicker";
import LocationSection from "../components/LocationSection";
import ProcessSection from "../components/ProcessSection";
import PropertyGrid from "../components/PropertyGrid";
import PropertyModal from "../components/PropertyModal";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyUsSection from "../components/WhyUsSection";
import type { Property } from "../types";

export default function HomePage() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null,
  );

  return (
    <>
      <section id="home">
        <HeroSection />
      </section>

      <HotDealsTicker />

      <section id="properties">
        <PropertyGrid onViewDetails={setSelectedProperty} />
      </section>

      <section id="why-us">
        <WhyUsSection />
      </section>

      <section id="process">
        <ProcessSection />
      </section>

      <TestimonialsSection />

      <section id="faq">
        <FaqSection />
      </section>

      <LocationSection />

      <section id="contact">
        <ContactSection />
      </section>

      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </>
  );
}
