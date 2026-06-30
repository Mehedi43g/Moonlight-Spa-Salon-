import { Link } from "react-router-dom";
import { FaClock, FaStar } from "react-icons/fa";
import { useBooking } from "../../context/BookingContext";

const DetailHero = ({ service }) => {
  const { openBookingModal } = useBooking();

  if (!service) return null;

  return (
    <section className="relative overflow-hidden">

      {/* Hero Section */}
      <div className="relative min-h-[95vh] flex items-center">

        {/* Background Image */}
        <img
          src={service.hero.image}
          alt={service.hero.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/55 to-black/20"></div>

        {/* Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-3xl">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-2 text-black font-semibold shadow-lg">
              <FaStar />
              {service.hero.badge}
            </span>

            {/* Subtitle */}
            <p className="mt-8 uppercase tracking-[6px] text-[#D4AF37] text-sm font-semibold">
              {service.hero.subtitle}
            </p>

            {/* Title */}
            <h1 className="mt-5 text-4xl md:text-6xl xl:text-7xl font-bold leading-tight text-white">
              {service.hero.title}
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
              {service.overview.shortDescription}
            </p>
                        {/* Price & Duration */}
            <div className="mt-10 flex flex-wrap items-center gap-6">

              {/* Price Card */}
              <div className="rounded-2xl border border-white/10 bg-white/10 px-8 py-5 backdrop-blur-md">

                <p className="text-sm uppercase tracking-[3px] text-gray-300">
                  Starting From
                </p>

                <h2 className="mt-2 text-4xl font-bold text-[#D4AF37]">
                  ৳{service.pricing[60].toLocaleString()}
                </h2>

              </div>

              {/* Duration Card */}
              <div className="rounded-2xl border border-white/10 bg-white/10 px-8 py-5 backdrop-blur-md">

                <div className="flex items-center gap-3 text-white">

                  <FaClock className="text-[#D4AF37]" />

                  <span className="font-medium">
                    {service.duration.join(" • ")}
                  </span>

                </div>

              </div>

            </div>

            {/* Book Button */}
            <div className="mt-12">

              <button
                type="button"
                onClick={() => openBookingModal()}
                className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#D4AF37] px-10 py-4 text-lg font-bold text-black shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white"
              >
                Book Appointment
              </button>

            </div>
                      </div>

        </div>

      </div>

    </section>
  );
};

export default DetailHero;