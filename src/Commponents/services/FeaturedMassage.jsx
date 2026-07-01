import { Link } from "react-router-dom";
import {
  FaSpa,
  FaLeaf,
  FaCheckCircle,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import serviceDetails from "../../data/serviceDetails";

const FeaturedMassage = () => {
  // Find the featured service (e.g. badge "Most Booked" or fallback to first service)
  const service = serviceDetails.find(s => s.hero.badge === "Most Booked") || serviceDetails[0];

  if (!service) return null;

  const lowestPrice = Math.min(...Object.values(service.pricing));
  const formattedPrice = `৳${lowestPrice.toLocaleString()}`;
  const durationRange = `${service.duration[0]} - ${service.duration[service.duration.length - 1]} Minutes`;

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[5px] text-[#C9A227] text-sm font-semibold">
            Featured Experience
          </span>
          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-[#1B1B1B]">
            Luxury Signature Massage
          </h2>
          <p className="mt-6 text-gray-600 leading-8">
            Discover our most loved massage therapy,
            specially designed for complete relaxation,
            muscle recovery and premium wellness.
          </p>
        </div>

        {/* Content */}
        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative group">
            <div className="overflow-hidden rounded-[35px]">
              <img
                src={service.hero.image}
                alt={service.hero.title}
                loading="lazy"
                className="h-[650px] w-full object-cover duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 rounded-[35px] bg-gradient-to-t from-black/50 via-transparent"></div>

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 rounded-3xl bg-white p-6 shadow-2xl max-w-[230px]">
              <span className="text-[#C9A227] font-semibold uppercase text-xs">
                Premium Care
              </span>
              <h4 className="mt-2 text-2xl font-bold">
                5★ Rated
              </h4>
              <p className="text-gray-600 mt-2 text-sm leading-6">
                Trusted by hundreds of happy clients every month.
              </p>
            </div>
          </div>

          {/* Content info */}
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-[#FFF7E5] px-5 py-3 text-[#C9A227] font-semibold uppercase text-xs tracking-wider">
              <FaSpa />
              {service.hero.badge || "Signature Treatment"}
            </div>

            <h3 className="mt-7 text-4xl font-bold leading-tight text-[#1B1B1B]">
              {service.hero.title}
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              {service.overview.fullDescription}
            </p>

            {/* Benefits */}
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {service.benefits.slice(0, 4).map((benefit, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <FaCheckCircle className="text-[#C9A227] mt-1 shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Price & Duration */}
            <div className="mt-10 flex flex-wrap gap-10">
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider">
                  Starting From
                </p>
                <h3 className="text-4xl font-bold text-[#C9A227] mt-1">
                  {formattedPrice}
                </h3>
              </div>

              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider">
                  Duration
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <FaClock className="text-[#C9A227]" />
                  <span className="text-gray-800 font-semibold">{durationRange}</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                to="/book-now"
                className="px-8 py-4 rounded-full bg-[#C9A227] font-semibold text-white hover:bg-black transition duration-300 shadow-md hover:shadow-lg"
              >
                Book Appointment
              </Link>

              <Link
                to={`/services/${service.slug}`}
                className="px-8 py-4 rounded-full border-2 border-[#C9A227] text-[#C9A227] font-semibold hover:bg-[#C9A227] hover:text-white transition duration-300 flex items-center gap-2"
              >
                View Details
                <FaArrowRight />
              </Link>
            </div>

            {/* Bottom Stats */}
            <div className="mt-14 grid grid-cols-3 gap-5">
              <div className="rounded-2xl bg-[#FAF7F0] p-6 text-center border border-[#EFE7D8]">
                <FaSpa className="mx-auto text-3xl text-[#C9A227]" />
                <h4 className="mt-4 text-2xl font-bold">10+</h4>
                <p className="text-gray-600 text-sm">Treatments</p>
              </div>

              <div className="rounded-2xl bg-[#FAF7F0] p-6 text-center border border-[#EFE7D8]">
                <FaLeaf className="mx-auto text-3xl text-[#C9A227]" />
                <h4 className="mt-4 text-2xl font-bold">100%</h4>
                <p className="text-gray-600 text-sm">Organic Oils</p>
              </div>

              <div className="rounded-2xl bg-[#FAF7F0] p-6 text-center border border-[#EFE7D8]">
                <FaCheckCircle className="mx-auto text-3xl text-[#C9A227]" />
                <h4 className="mt-4 text-2xl font-bold">4.9★</h4>
                <p className="text-gray-600 text-sm">Reviews</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedMassage;