import Companies from "@/components/layout/front/companies";
import FAQSection from "@/components/layout/front/faq";
import Features from "@/components/layout/front/features";
import Footer from "@/components/layout/front/footer";
import Hero from "@/components/layout/front/hero";
import WhatIsInnogem from "@/components/layout/front/what-is";

export default function FrontPage() {
  return (
    <div>
      <Hero
        title="Bridging Indonesia and Germany Through Smart Trade"
        description="Innogem GmbH is a curated B2B marketplace that simplifies cross-border trade, connects verified partners, and provides end-to-end logistics and compliance support."
        imageSrc="/images/container-1.png"
        imageAlt="Cross-border Trade"
        buttonText="Get Started"
      />
      <Companies />
      <Features />
      <WhatIsInnogem />
      <FAQSection />
      <Footer />
    </div>
  );
}
