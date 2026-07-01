import { Link } from "react-router-dom";
import { FaCrown, FaCheck, FaHeart, FaGlassCheers, FaClock } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { useBooking } from "../../context/BookingContext";
import packages from "../../data/packages";

const FeaturedPackage = () => {
  const { openBookingModal } = useBooking();
  
  // Find the featured package (or fallback to second package)
  const pkg = packages.find(p => p.featured) || packages[1];

  if (!pkg) return null;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-24 -right-32 h-96 w-96 rounded-full bg-[#D4AF37]/5 blur-[120px]" />
      <div className="absolute bottom-20 -left-32 h-96 w-96 rounded-full bg-[#D4AF37]/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="uppercase tracking-[5px] text-[#C9A227] text-sm font-semibold">
            Signature Experience
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#1C1C1C] leading-tight">
            Our Elite Featured Package
          </h2>
          <p className="mt-6 text-gray-600 leading-8">
            Treat yourself and your loved ones to our top-tier signature spa package. 
            Designed to offer comprehensive full-body recovery, skin radiance, and absolute calm.
          </p>
        </div>

        {/* Dynamic Split Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image block */}
          <div className="lg:col-span-6 relative group">
            <div className="overflow-hidden rounded-[40px] shadow-2xl">
              <img
                src={pkg.image}
                alt={pkg.title}
                loading="lazy"
                className="h-[600px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Soft overlay */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-t from-black/40 via-transparent"></div>

            {/* floating badge card */}
            <div className="absolute bottom-8 right-8 rounded-3xl bg-white p-6 shadow-2xl max-w-[240px] border border-[#EFE7D8]">
              <div className="flex items-center gap-3 text-[#D4AF37] text-xl">
                <FaCrown />
                <span className="font-bold text-sm uppercase tracking-wider">Royal Treatment</span>
              </div>
              <p className="text-gray-600 mt-2 text-sm leading-6">
                Curated room decoration, premium massage oils, and senior specialists.
              </p>
            </div>
          </div>

          {/* Right Column: Content block */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-[#FFF7E5] px-5 py-2.5 text-[#C9A227] font-semibold text-xs uppercase tracking-wider">
              <FaHeart className="text-sm" />
              {pkg.badge}
            </div>

            <h3 className="mt-6 text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] leading-tight">
              {pkg.title}
            </h3>

            <p className="mt-6 leading-8 text-gray-600 text-lg">
              {pkg.description}
            </p>

            {/* Package inclusions checkmarks */}
            <div className="mt-8 border-t border-[#EFE8DA] pt-8">
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-5">
                Included Treatments & Services
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {pkg.services.map((service, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFF5DB] text-[#D4AF37] shrink-0 mt-0.5">
                      <FaCheck className="text-xs" />
                    </div>
                    <span className="text-gray-800 font-semibold">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price & duration banner */}
            <div className="mt-10 flex flex-wrap gap-10">
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider">
                  Price
                </p>
                <div className="flex items-baseline gap-2 mt-1">
                  <h3 className="text-4xl font-black text-[#D4AF37]">
                    {pkg.price}
                  </h3>
                  <span className="text-sm text-gray-500 font-medium">/ per person</span>
                </div>
              </div>

              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider">
                  Duration
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <FaClock className="text-[#D4AF37] text-lg" />
                  <span className="text-gray-800 font-extrabold text-xl">{pkg.duration}</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-5">
              <button
                onClick={openBookingModal}
                className="px-10 py-5 rounded-full bg-[#C9A227] text-black font-extrabold text-lg hover:bg-black hover:text-white transition duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Book Package Now
              </button>

              <Link
                to="/contact"
                className="px-10 py-5 rounded-full border-2 border-[#C9A227] text-[#C9A227] font-bold text-lg hover:bg-[#C9A227] hover:text-black transition duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>Request Custom Suite</span>
                <MdArrowOutward />
              </Link>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedPackage;
