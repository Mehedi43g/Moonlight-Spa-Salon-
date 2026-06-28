import { Link } from "react-router-dom";
import { FaArrowRight, FaClock, FaStar } from "react-icons/fa";

const DetailHero = ({ service }) => {
  if (!service) return null;

  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}

      <div className="relative h-[95vh] min-h-[750px]">

        <img
          src={service.hero.image}
          alt={service.hero.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20"></div>

        {/* Content */}

        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center">

          <div className="max-w-3xl">

            <span className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-2 text-black font-semibold">

              <FaStar />

              {service.hero.badge}

            </span>

            <p className="mt-8 uppercase tracking-[6px] text-[#D4AF37] text-sm font-semibold">

              {service.hero.subtitle}

            </p>

            <h1 className="mt-5 text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-white">

              {service.hero.title}

            </h1>

            <p className="mt-8 text-lg text-gray-300 leading-8 max-w-2xl">

              {service.overview.shortDescription}

            </p>

            {/* Price */}

            <div className="mt-10 flex flex-wrap items-center gap-6">

              <div className="rounded-2xl bg-white/10 backdrop-blur-md px-8 py-5 border border-white/10">

                <p className="text-gray-300 text-sm uppercase tracking-[3px]">

                  Starting From

                </p>

                <h2 className="mt-2 text-4xl font-bold text-[#D4AF37]">

                  ৳{service.pricing[60].toLocaleString()}

                </h2>

              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur-md px-8 py-5 border border-white/10">

                <div className="flex items-center gap-3 text-white">

                  <FaClock />

                  <span>

                    {service.duration.join(" • ")}

                  </span>

                </div>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                to="/book-now"
                className="rounded-full bg-[#D4AF37] px-10 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:bg-white"
              >
                Book Appointment
              </Link>

              <Link
                to="/packages"
                className="rounded-full border border-[#D4AF37] px-10 py-4 font-bold text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-black"
              >
                View Luxury Packages
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DetailHero;