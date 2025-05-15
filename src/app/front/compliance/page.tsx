import DetailFeatureLeft from "@/components/layout/front/detail-feature-left";
import DetailFeatureRight from "@/components/layout/front/detail-feature-right";
import Footer from "@/components/layout/front/footer";
import Hero from "@/components/layout/front/hero";

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Simplify Compliance Across Borders"
        description="Navigating cross-border trade regulations is complex — but Innogem makes it simple. Our built-in compliance support helps you meet all legal and procedural requirements for export and import."
        imageSrc="/images/front/compliance.png"
        imageAlt="Compliance Support"
        buttonText="Get Compliant with Innogem"
      />

      {/* Detail Feature Right */}
      <DetailFeatureRight
        title="Compliance built into every trade"
        highlight="no surprises, no delays"
        description="From product classification to documentation and customs procedures, Innogem automates and simplifies regulatory requirements. Our platform keeps you updated on the latest trade rules between Indonesia and Europe, so you can focus on growing your business, not dealing with red tape."
        imageSrc="/images/front/prod2.jpg"
      />

      {/* Detail Feature Left with Points */}
      <DetailFeatureLeft
        title="Why regulatory support is essential"
        highlight="in international trade"
        imageSrc="/images/front/prod2.jpg"
        features={[
          {
            icon: (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1FC281"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16v16H4z" />
                <path d="M9 9h6v6H9z" />
              </svg>
            ),
            text: "Ensure your products meet export and import regulations.",
          },
          {
            icon: (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1FC281"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3h18v18H3z" />
                <path d="M12 9v6" />
                <path d="M9 12h6" />
              </svg>
            ),
            text: "Automatically generate required shipping and customs documents.",
          },
          {
            icon: (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1FC281"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            ),
            text: "Stay updated with changing international trade laws.",
          },
        ]}
      />

      <Footer />
    </div>
  );
}
