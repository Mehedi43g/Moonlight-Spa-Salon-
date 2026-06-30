import { Link } from "react-router-dom";
import { FaAward, FaChevronRight, FaHandsHelping } from "react-icons/fa";
import { MdSpa } from "react-icons/md";
import { GiLotus } from "react-icons/gi";

import { useBooking } from "../../context/BookingContext";

const ServiceHero = () => {
  const { openBookingModal } = useBooking();
  return (
    <section className="relative w-full h-[90vh] min-h-162.5 overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=2000&q=80"
        alt="Luxury Spa Services"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-[#0F0C08]/90 via-[#0F0C08]/70 to-[#0F0C08]/40"></div>

      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,#D4AF3720,transparent_45%)]"></div>

      <div className="relative z-10 flex items-center h-full">

        <div className="container mx-auto px-5 lg:px-10">


          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-[#D4AF37]/30 rounded-full px-5 py-2">

            <MdSpa className="text-[#D4AF37] text-xl" />

            <span className="uppercase tracking-[4px] text-sm text-[#D4AF37] font-semibold">
              Luxury Wellness Experience
            </span>

          </div>


          <div className="flex items-center gap-2 text-gray-300 text-sm mt-8">

            <Link
              to="/"
              className="hover:text-[#D4AF37] transition"
            >
              Home
            </Link>

            <FaChevronRight className="text-[10px]" />

            <span className="text-[#D4AF37]">
              Services
            </span>

          </div>


          <h1 className="mt-8 max-w-4xl text-white font-bold leading-tight">

            <span className="block text-[40px] md:text-[55px] xl:text-[72px]">
              Discover Our
            </span>

            <span className="block text-[#D4AF37] text-[45px] md:text-[65px] xl:text-[85px]">
              Signature Spa
            </span>

            <span className="block text-[40px] md:text-[55px] xl:text-[72px]">
              Treatments
            </span>

          </h1>
 

          <p className="mt-8 max-w-3xl text-gray-200 leading-8 text-lg md:text-xl">

            Restore harmony between your body, mind, and soul with our
            handcrafted luxury spa treatments. Every session is designed
            to reduce stress, relieve muscle tension, and create a deeply
            relaxing wellness experience.

          </p> 

          <div className="mt-12 flex flex-col sm:flex-row gap-5">

            <Link onClick={openBookingModal} className="inline-flex items-center  justify-center rounded-full bg-[#D4AF37] px-10
                  py-4 text-lg font-semibold  text-black transition-all duration-300 hover:scale-105  hover:bg-white shadow-2xl">
              Book Appointment
            </Link>

            <Link
              to="/packages"
              className=" inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md  px-10 py-4  text-lg font-semibold  text-white transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black">
              View Luxury Packages
            </Link>

          </div>
 

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">

            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-lg p-6">

              <h2 className="text-4xl font-bold text-[#D4AF37]">
                10+
              </h2>

              <p className="mt-2 text-gray-300">
                Years of Experience
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-lg p-6">

              <h2 className="text-4xl font-bold text-[#D4AF37]">
                25K+
              </h2>

              <p className="mt-2 text-gray-300">
                Happy Clients
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-lg p-6">

              <h2 className="text-4xl font-bold text-[#D4AF37]">
                15+
              </h2>

              <p className="mt-2 text-gray-300">
                Expert Therapists
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-lg p-6">

              <h2 className="text-4xl font-bold text-[#D4AF37]">
                100%
              </h2>

              <p className="mt-2 text-gray-300">
                Premium Natural Oils
              </p>

            </div>

          </div>

        </div>

      </div>
 

      <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="group rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-6 text-center transition-all duration-500 hover:bg-[#D4AF37] hover:text-black">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37] text-3xl text-black group-hover:bg-white">
            <MdSpa />
          </div>

          <h3 className="mt-5 text-xl font-bold">
            Luxury Therapy
          </h3>

          <p className="mt-3 text-sm leading-7 text-white/80 group-hover:text-black">
            Premium massage experiences designed for complete relaxation.
          </p>

        </div>

        <div className="group rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-6 text-center transition-all duration-500 hover:bg-[#D4AF37] hover:text-black">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37] text-3xl text-black group-hover:bg-white">
            <GiLotus />
          </div>

          <h3 className="mt-5 text-xl font-bold">
            Natural Wellness
          </h3>

          <p className="mt-3 text-sm leading-7 text-white/80 group-hover:text-black">
            Organic oils and herbal therapies for a healthier lifestyle.
          </p>

        </div>

        <div className="group rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-6 text-center transition-all duration-500 hover:bg-[#D4AF37] hover:text-black">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37] text-3xl text-black group-hover:bg-white">
            <FaHandsHelping />
          </div>

          <h3 className="mt-5 text-xl font-bold">
            Certified Experts
          </h3>

          <p className="mt-3 text-sm leading-7 text-white/80 group-hover:text-black">
            Experienced therapists delivering personalized wellness care.
          </p>

        </div>

        <div className="group rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-6 text-center transition-all duration-500 hover:bg-[#D4AF37] hover:text-black">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37] text-3xl text-black group-hover:bg-white">
            <FaAward />
          </div>

          <h3 className="mt-5 text-xl font-bold">
            Premium Experience
          </h3>

          <p className="mt-3 text-sm leading-7 text-white/80 group-hover:text-black">
            Five-star ambiance with luxury service and complete comfort.
          </p>

        </div>

      </div>

    </section>
  );
};

export default ServiceHero;