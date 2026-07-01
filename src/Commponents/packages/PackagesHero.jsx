import { Link } from "react-router-dom";
import { FaCrown, FaChevronRight } from "react-icons/fa";
import { GiLotusFlower } from "react-icons/gi";
import packages from "../../data/packages";

const PackagesHero = () => {
  return (
    <section className="relative w-full h-[65vh] min-h-[400px] overflow-hidden flex items-center">
      {/* Background Image overlay */}
      <img
        src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2000&q=80"
        alt="Luxury Spa Packages"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-[#0F0C08]/95 via-[#0F0C08]/85 to-[#0F0C08]/50"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,#D4AF3715,transparent_45%)]"></div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-[#D4AF37]/30 rounded-full px-5 py-2">
            <GiLotusFlower className="text-[#D4AF37] text-xl" />
            <span className="uppercase tracking-[4px] text-sm text-[#D4AF37] font-semibold">
              Curated Wellness Journeys
            </span>
          </div>

          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-gray-300 text-sm mt-6">
            <Link to="/" className="hover:text-[#D4AF37] transition">
              Home
            </Link>
            <FaChevronRight className="text-[10px]" />
            <span className="text-[#D4AF37]">Packages</span>
          </div>

          {/* Header Title */}
          <h1 className="mt-6 text-white font-bold leading-tight max-w-4xl">
            <span className="block text-[36px] md:text-[50px] xl:text-[68px] leading-none">
              Exclusive Luxury
            </span>
            <span className="block text-[#D4AF37] text-[40px] md:text-[58px] xl:text-[76px] leading-tight">
              Spa Packages
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-gray-200 leading-8 text-base md:text-lg">
            Immerse yourself in complete tranquility. Our custom packages blend 
            our most requested signature massages, organic oil therapies, and 
            skincare routines into single, harmonized experiences.
          </p>

          {/* Stat Badges */}
          <div className="mt-8 flex flex-wrap gap-5 max-w-lg">
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-3">
              <span className="text-[#D4AF37] font-bold text-lg">{packages.length}+</span>
              <p className="text-gray-300 text-xs mt-1">Curated Offers</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-3">
              <span className="text-[#D4AF37] font-bold text-lg">90-180 Min</span>
              <p className="text-gray-300 text-xs mt-1">Session Duration</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-3">
              <span className="text-[#D4AF37] font-bold text-lg">VIP Suites</span>
              <p className="text-gray-300 text-xs mt-1">Premium Comfort</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PackagesHero;
