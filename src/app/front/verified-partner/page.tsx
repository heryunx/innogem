import DetailFeatureLeft from "@/components/layout/front/detail-feature-left";
import DetailFeatureRight from "@/components/layout/front/detail-feature-right";
import Footer from "@/components/layout/front/footer";
import Hero from "@/components/layout/front/hero";

export default function Page() {
  return (
    <div>
      <Hero
        title="Build Trust with Verified Partners"
        description="Innogem's Verified Partner Ecosystem ensures every producer, buyer, and service provider meets global trade standards."
        imageSrc="/images/front/verified.png"
        imageAlt="Verified Partners Network"
        buttonText="Explore the Ecosystem"
      />

      <DetailFeatureRight
        title="Work with trusted companies"
        highlight="through our Verified Partner Ecosystem"
        description="Innogem ensures that all partners — from producers and buyers to logistics and financial service providers — are carefully screened and verified. This creates a secure, high-trust environment for cross-border transactions, reducing risks and ensuring quality and compliance on both sides."
        imageSrc="/images/front/prod2.jpg"
      />

      <DetailFeatureLeft
        title="Why verification matters"
        highlight="in global B2B trading"
        imageSrc="/images/front/prod2.jpg"
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
                <path d="M20 6L9 17l-5-5" />
              </svg>
            ),
            text: "Each partner is verified for legal and operational legitimacy.",
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
                <path d="M12 6v6l4 2" />
              </svg>
            ),
            text: "Background checks reduce fraud and delays in the supply chain.",
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
                <path d="M3 3h18v18H3z" />
                <path d="M16 3v18" />
              </svg>
            ),
            text: "Only verified partners can access trade and logistic features.",
          },
        ]}
      />

      <Footer />
    </div>
  );
}
