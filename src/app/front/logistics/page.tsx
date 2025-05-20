import DetailFeatureLeft from "@/components/layout/front/detail-feature-left";
import DetailFeatureRight from "@/components/layout/front/detail-feature-right";
import Footer from "@/components/layout/front/footer";
import Hero from "@/components/layout/front/hero";

export default function Page() {
  return (
    <div>
      {/* Hero */}
      <Hero
        title="Seamless Logistics from Factory to Destination"
        description="Innogem’s End-to-End Logistics Solution connects producers and buyers with reliable logistic partners to handle pickup, warehousing, international shipping, and last-mile delivery — all in one streamlined workflow."
        imageSrc="/images/front/logistics.png"
        imageAlt="Logistics Workflow"
        buttonText="See How It Works"
      />

      {/* Section 1 */}
      <DetailFeatureRight
        title="Integrated shipping, warehousing, and delivery"
        highlight="built into the platform"
        description="Producers no longer need to coordinate with multiple providers. Innogem’s logistics system automates pickup requests, connects with verified logistics companies, manages export documentation, and tracks shipments in real time — from the factory floor to the buyer’s door."
        imageSrc="/images/front/warehouse.jpg"
      />

      {/* Section 2 */}
      <DetailFeatureLeft
        title="Why logistics integration matters"
        highlight="for international trade"
        imageSrc="/images/front/international-trade.jpg"
        features={[
          {
            icon: (
              <svg
                className="w-6 h-6 text-innogem-green"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3h18v18H3z" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            ),
            text: "Save time and cost by eliminating third-party coordination.",
          },
          {
            icon: (
              <svg
                className="w-6 h-6 text-innogem-green"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
              </svg>
            ),
            text: "Real-time tracking ensures transparency for all stakeholders.",
          },
          {
            icon: (
              <svg
                className="w-6 h-6 text-innogem-green"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
                <path d="M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
              </svg>
            ),
            text: "Customs clearance and documentation handled by the platform.",
          },
        ]}
      />

      <Footer />
    </div>
  );
}
