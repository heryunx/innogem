import Footer from "@/components/layout/front/footer";
import Hero from "@/components/layout/front/hero";
import ServiceList from "@/components/layout/front/service-list";
import {
  DollarSign,
  ShoppingCart,
  TicketsPlane,
  Truck,
  UserRoundPlus,
} from "lucide-react";

const title = {
  title: "Producer Workflow with",
  desc: "Innogem enables verified producers to sell confidently to global buyers. From registration and onboarding to payment and delivery, every step is streamlined, secure, and efficient.",
};

const services = [
  {
    id: 1,
    title: "Producer Registration & Verification",
    short: "Registration",
    icon: <UserRoundPlus size={25} color="#facc15" />,
    positionShort: "top-0",
    shortDescription:
      "Producers register their business and undergo Innogem’s verification process to ensure legitimacy and readiness for global trade.",
    image: "/images/front/registration.png",
  },
  {
    id: 2,
    title: "Product Onboarding",
    short: "Onboarding",
    icon: <TicketsPlane size={25} color="#f59e0b" />,
    positionShort: "bottom-0",
    shortDescription:
      "Once verified, producers can upload product listings, including specifications, images, certifications, and price details.",
    image: "/images/front/onboarding.png",
  },
  {
    id: 3,
    title: "Quotation & Order Management",
    short: "Orders",
    icon: <ShoppingCart size={25} color="#facc15" />,
    positionShort: "top-0",
    shortDescription:
      "Producers receive quotation requests or purchase orders directly from verified buyers through the Innogem system.",
    image: "/images/front/shopping.png",
  },
  {
    id: 4,
    title: "Logistics Coordination",
    short: "Shipping",
    icon: <Truck size={25} color="#f59e0b" />,
    positionShort: "bottom-0",
    shortDescription:
      "Innogem matches each order with logistics partners and provides the producer with pickup and delivery schedules.",
    image: "/images/front/logistic.jpg",
  },
  {
    id: 5,
    title: "Payment Tracking & Settlement",
    short: "Payment",
    icon: <DollarSign size={25} color="#facc15" />,
    positionShort: "top-0",
    shortDescription:
      "After the buyer confirms receipt, Innogem releases payment to the producer’s designated account.",
    image: "/images/front/payment.jpg",
  },
];

export default function Page() {
  return (
    <div>
      <Hero
        title="Empowering Producers for Global Trade"
        description="Innogem GmbH offers a secure and efficient platform for verified producers to enter the global market, ensuring seamless registration, product onboarding, and reliable logistics and payments."
        imageSrc="/images/container-1.png"
        imageAlt="Producer Workflow"
        buttonText="Start Your Journey"
      />
      <ServiceList services={services} title={title} />
      <Footer />
    </div>
  );
}
