import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1800&q=80')",
        }}
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/75"></div>

      {/* Gold Blur */}

      <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-[#D4AF37]/20 blur-[120px]"></div>

      <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-[#D4AF37]/20 blur-[120px]"></div>

      {/* Content */}

      <div className="relative z-10 max-w-6xl mx-auto px-5 text-center">

        <span className="inline-block rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-6 py-2 text-sm uppercase tracking-[4px] font-semibold text-[#D4AF37]">

          Luxury Wellness Experience

        </span>

        <h2 className="mt-8 text-4xl lg:text-6xl font-bold text-white leading-tight">

          Ready To Relax,<br />

          Refresh & Rejuvenate?

        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">

          Escape the stress of everyday life and enjoy premium spa treatments
          designed to restore your body, calm your mind and renew your energy.
          Experience luxury wellness with our expert therapists.

        </p>
        {/* CTA Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            to="/book-now"
            className="
            group
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-[#D4AF37]
            px-9
            py-5
            text-lg
            font-semibold
            text-black
            transition-all
            duration-300
            hover:scale-105
            hover:bg-white
            "
          >
            Book Your Appointment

            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            to="/contact"
            className="
            rounded-full
            border-2
            border-white
            px-9
            py-5
            text-lg
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-white
            hover:text-black
            "
          >
            Contact Our Team
          </Link>

        </div>

        {/* Features */}

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div
            className="
            rounded-[25px]
            border
            border-white/10
            bg-white/10
            p-8
            backdrop-blur-md
            "
          >
            <h3 className="text-2xl font-bold text-white">
              Certified Therapists
            </h3>

            <p className="mt-4 leading-8 text-gray-300">
              Highly experienced wellness professionals delivering world-class
              luxury spa treatments with personalized care.
            </p>
          </div>

          <div
            className="
            rounded-[25px]
            border
            border-white/10
            bg-white/10
            p-8
            backdrop-blur-md
            "
          >
            <h3 className="text-2xl font-bold text-white">
              Premium Facilities
            </h3>

            <p className="mt-4 leading-8 text-gray-300">
              Elegant private rooms, soothing ambience and premium-quality
              products for the ultimate spa experience.
            </p>
          </div>

          <div
            className="
            rounded-[25px]
            border
            border-white/10
            bg-white/10
            p-8
            backdrop-blur-md
            "
          >
            <h3 className="text-2xl font-bold text-white">
              100% Relaxation
            </h3>

            <p className="mt-4 leading-8 text-gray-300">
              Every treatment is carefully designed to reduce stress, restore
              balance and leave you completely refreshed.
            </p>
          </div>

        </div>
        {/* Luxury Statistics */}

        <div className="mt-20 border-t border-white/10 pt-12">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="text-center">

              <h3 className="text-5xl font-bold text-[#D4AF37]">
                15K+
              </h3>

              <p className="mt-3 text-gray-300">
                Happy Clients
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-5xl font-bold text-[#D4AF37]">
                4.9★
              </h3>

              <p className="mt-3 text-gray-300">
                Customer Rating
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-5xl font-bold text-[#D4AF37]">
                12+
              </h3>

              <p className="mt-3 text-gray-300">
                Years Experience
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-5xl font-bold text-[#D4AF37]">
                100%
              </h3>

              <p className="mt-3 text-gray-300">
                Premium Care
              </p>

            </div>

          </div>

        </div>

        {/* Bottom Text */}

        <div className="mt-16">

          <p className="text-center text-gray-400 leading-8 max-w-3xl mx-auto">

            Your journey toward complete relaxation begins here.
            Let our experienced therapists provide an unforgettable luxury spa
            experience designed especially for your body, mind and soul.

          </p>

        </div>

      </div>

    </section>

  );
};

export default CTA;