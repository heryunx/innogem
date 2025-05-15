import Image from "next/image";

export default function Companies() {
  const companies = [
    {
      name: "Indonesia Trade Promotion Center",
      logo: "/images/companies/indonesia-trade.png",
    },
    { name: "Mandiri MCO", logo: "/images/companies/mandiri.png" },
    { name: "KSIP", logo: "/images/companies/ksip.webp" },
    { name: "Manohara Asri", logo: "/images/companies/mayasi.jpeg" },
    {
      name: "Grand Kakao Indonesia",
      logo: "/images/companies/grand-kakao.png",
    },
    { name: "Forin Logistics", logo: "/images/companies/forin-logistics.png" },
    { name: "Ruang Halal", logo: "/images/companies/ruanghalal.png" },
    { name: "Myneral Labs", logo: "/images/companies/myneral-labs.webp" },
  ];

  const duplicated = [...companies, ...companies];

  return (
    <section className="py-16 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-center mb-8 text-gray-400 font-medium">
          Trusted by Companies Worldwide
        </h1>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {duplicated.map((company, index) => (
              <div
                key={index}
                className="relative w-20 sm:w-24 md:w-32 aspect-[4/2] shrink-0 mx-2 sm:mx-4 filter grayscale contrast-100 hover:grayscale-0 transition duration-300"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
