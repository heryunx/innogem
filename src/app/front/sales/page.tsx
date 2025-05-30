import DetailFeatureLeft from "@/components/layout/front/detail-feature-left";
import DetailFeatureRight from "@/components/layout/front/detail-feature-right";
import Footer from "@/components/layout/front/footer";
import Hero from "@/components/layout/front/hero";

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Maximize Your Sales in Europe"
        description="Providing businesses with targeted market insights, B2B matchmaking, and localized marketing strategies to drive international growth and lasting partnerships."
        imageSrc="/images/front/matchmaking.png"
        imageAlt="European Market Strategy"
        buttonText="Start Expanding"
      />

      {/* Detail Feature Right */}
      <DetailFeatureRight
        title="Targeted Market Intelligence"
        highlight="for faster, smarter decisions"
        description="Innogem equips businesses with in-depth insights about European demand trends, buyer behaviors, and compliance requirements. This helps producers make informed decisions and enter markets with confidence."
        imageSrc="/images/front/sales-1.webp"
      />

      {/* Detail Feature Left */}
      <DetailFeatureLeft
        title="B2B Matchmaking & Localized Promotion"
        highlight="to drive real business outcomes"
        imageSrc="/images/front/sales-2.webp"
        features={[
          {
            icon: (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="#FF6B6B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M16 3h5v5" />
                <path d="M8 21H3v-5" />
                <path d="M21 3L14 10" />
                <path d="M3 21l7-7" />
              </svg>
            ),
            text: "Match producers with relevant buyers using trade profiles.",
          },
          {
            icon: (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="#FF6B6B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16v16H4z" />
                <path d="M4 9h16" />
              </svg>
            ),
            text: "Customize product messaging for each target region in Europe.",
          },
          {
            icon: (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="#FF6B6B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
              </svg>
            ),
            text: "Drive demand through digital campaigns and trade exhibitions.",
          },
        ]}
      />

      <Footer />
    </div>
  );
}
