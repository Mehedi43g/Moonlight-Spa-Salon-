import Container from "../Container";
import { FaCrown, FaSpa, FaLeaf } from "react-icons/fa";
import { FaHandSparkles } from "react-icons/fa6";

const benefits = [
  {
    id: 1,
    icon: <FaCrown />,
    title: "Exceptional Price Value",
    description: "Our package rates offer savings of up to 25% compared to booking the individual treatments separately."
  },
  {
    id: 2,
    icon: <FaHandSparkles />,
    title: "Curated Harmonies",
    description: "Therapies are sequenced intentionally (e.g. steam preceding massage) to maximize physiological and mental relaxation."
  },
  {
    id: 3,
    icon: <FaSpa />,
    title: "Extended Suite Bookings",
    description: "Enjoy longer, uninterrupted occupancy in our premium, soundproof rooms with private steam, bath, and changing areas."
  },
  {
    id: 4,
    icon: <FaLeaf />,
    title: "Holistic Wellness Care",
    description: "Curated combinations address physical muscle recovery, natural skincare glow, and mental stress relief in a single visit."
  }
];

const PackageBenefits = () => {
  return (
    <section className="py-24 bg-[#FCF8F2] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-[#D4AF37]/5 blur-[120px]" />
      
      <Container>
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="uppercase tracking-[5px] text-[#C9A227] text-sm font-semibold">
            Why Spa Packages?
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#1C1C1C] leading-tight">
            The Benefits of Curated Wellness
          </h2>
          <p className="mt-6 text-gray-600 leading-8 text-[17px]">
            Curated spa packages provide a more complete wellness experience. 
            Enjoy holistic therapy, luxurious room upgrades, and unmatched financial value.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((item) => (
            <article
              key={item.id}
              className="group rounded-[30px] bg-white border border-[#EFE7D8] p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF8E8] text-[#D4AF37] text-3xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                {item.icon}
              </div>
              
              <h3 className="mt-6 text-xl font-bold text-[#1A1A1A]">
                {item.title}
              </h3>
              
              <p className="mt-4 leading-7 text-gray-600 text-[15px] flex-1">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PackageBenefits;
