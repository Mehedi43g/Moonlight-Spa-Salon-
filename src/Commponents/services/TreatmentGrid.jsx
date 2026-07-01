import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaSpa,
  FaHotTub,
  FaHands,
  FaRegClock,
  FaHeart,
  FaHandSparkles,
} from "react-icons/fa";
import {
  MdOutlineSpa,
  MdOutlineSelfImprovement,
  MdOutlineFaceRetouchingNatural,
  MdOutlineAirlineSeatFlat,
} from "react-icons/md";
import { GiLotus, GiFootTrip } from "react-icons/gi";
import serviceDetails from "../../data/serviceDetails";

const getCategory = (slug) => {
  if (slug === "foot-massage" || slug === "aroma-oil-massage") return "Wellness";
  return "Massage";
};

const getIcon = (slug) => {
  switch (slug) {
    case "hot-oil-massage":
      return <FaHotTub />;
    case "b2b-massage":
      return <FaHandSparkles />;
    case "four-hand-massage":
      return <FaHands />;
    case "six-hand-massage":
      return <FaSpa />;
    case "dry-massage":
      return <MdOutlineAirlineSeatFlat />;
    case "deep-tissue":
      return <FaHands />;
    case "thai-massage":
      return <MdOutlineSelfImprovement />;
    case "foot-massage":
      return <GiFootTrip />;
    case "aroma-oil-massage":
      return <FaLeaf />;
    case "nuru-massage":
      return <GiLotus />;
    case "sensual-massage":
      return <FaHeart />;
    case "full-body-massage":
      return <MdOutlineSpa />;
    default:
      return <MdOutlineSpa />;
  }
};

const TreatmentGrid = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTreatments = serviceDetails.filter((item) => {
    const category = getCategory(item.slug);
    const matchesCategory = activeCategory === "All" || category === activeCategory;
    const matchesSearch =
      item.hero.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.overview.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="treatment-grid" className="py-24 bg-[#F9F5EF]">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[5px] text-[#C9A227] text-sm font-semibold">
            Premium Spa Collection
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#1C1C1C] leading-tight">
            Signature Spa Treatments
          </h2>
          <p className="mt-6 text-gray-600 leading-8">
            Discover our carefully selected luxury spa treatments,
            designed to restore your body, relax your mind,
            and elevate your well-being.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mt-16 flex flex-col lg:flex-row gap-5 justify-between">
          <input
            type="text"
            placeholder="Search treatment..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full lg:w-80 rounded-full border border-[#D4AF37]/30 bg-white px-6 py-4 outline-none focus:border-[#D4AF37]"
          />

          <div className="flex flex-wrap gap-3">
            {["All", "Massage", "Wellness"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full border transition duration-300 font-semibold cursor-pointer ${
                  activeCategory === category
                    ? "bg-[#D4AF37] border-[#D4AF37] text-white"
                    : "border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
          {filteredTreatments.map((item) => {
            const category = getCategory(item.slug);
            const icon = getIcon(item.slug);
            const lowestPrice = Math.min(...Object.values(item.pricing));
            const formattedPrice = `From ৳${lowestPrice.toLocaleString()}`;
            const durationRange = `${item.duration[0]}-${item.duration[item.duration.length - 1]} Min`;

            return (
              <article
                key={item.id}
                className="group overflow-hidden rounded-[30px] bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.hero.image}
                    alt={item.hero.title}
                    loading="lazy"
                    className="h-65 w-full object-cover duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-5 left-5 bg-[#D4AF37] text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {icon}
                  </div>
                </div>

                <div className="flex flex-col p-6 flex-1 justify-between min-h-[300px]">
                  <div>
                    <span className="inline-block w-fit rounded-full bg-[#FFF5DB] px-4 py-1 text-xs font-semibold text-[#B88B00]">
                      {category}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold text-[#222] line-clamp-2">
                      {item.hero.title}
                    </h3>
                    <p className="mt-3 text-gray-600 leading-7 line-clamp-3">
                      {item.overview.shortDescription}
                    </p>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FaRegClock className="text-[#D4AF37]" />
                        <span>{durationRange}</span>
                      </div>
                      <span className="text-lg font-bold text-[#D4AF37]">
                        {formattedPrice}
                      </span>
                    </div>

                    <div className="mt-6">
                      <Link
                        to={`/services/${item.slug}`}
                        className="flex h-12 w-full items-center justify-center rounded-full bg-[#1A1410] text-white font-semibold transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
                      >
                        View Treatment
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredTreatments.length === 0 && (
          <div className="text-center mt-20">
            <h3 className="text-2xl font-semibold text-gray-500">
              No treatments found matching your criteria.
            </h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default TreatmentGrid;
