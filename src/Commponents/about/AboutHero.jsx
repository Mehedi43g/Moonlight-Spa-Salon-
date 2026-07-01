import { Link } from "react-router-dom";
import { FaChevronRight, FaInfoCircle } from "react-icons/fa";

const AboutHero = () => {
  return (
    <section className="relative w-full h-[50vh] min-h-[350px] overflow-hidden flex items-center">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=2000&q=80"
        alt="About Moonlight Spa"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0F0C08]/95 via-[#0F0C08]/85 to-[#0F0C08]/50"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,#D4AF3715,transparent_45%)]"></div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-[#D4AF37]/30 rounded-full px-5 py-2">
            <FaInfoCircle className="text-[#D4AF37] text-sm" />
            <span className="uppercase tracking-[4px] text-xs text-[#D4AF37] font-semibold">
              Get To Know Us
            </span>
          </div>

          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-gray-300 text-sm mt-6">
            <Link to="/" className="hover:text-[#D4AF37] transition">
              Home
            </Link>
            <FaChevronRight className="text-[10px]" />
            <span className="text-[#D4AF37]">About Us</span>
          </div>

          {/* Title */}
          <h1 className="mt-6 text-white font-bold leading-tight">
            <span className="block text-[32px] md:text-[46px] xl:text-[60px] leading-none font-light">
              Discover Our
            </span>
            <span className="block text-[#D4AF37] text-[36px] md:text-[52px] xl:text-[68px] leading-tight font-extrabold">
              Heritage & Story
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-gray-200 leading-8 text-base md:text-lg">
            Dedicated to providing world-class relaxation, custom body treatments, 
            and premium wellness therapy under luxurious private environments.
          </p>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
