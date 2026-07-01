import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useBooking } from "../../context/BookingContext";

const BookingCTA = () => {
  const { openBookingModal } = useBooking();

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
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Gold Blurs */}
      <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-[#D4AF37]/20 blur-[120px]"></div>
      <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-[#D4AF37]/20 blur-[120px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 text-center">
        <span className="inline-block rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-6 py-2 text-sm uppercase tracking-[4px] font-semibold text-[#D4AF37]">
          Start Your Transformation
        </span>

        <h2 className="mt-8 text-4xl lg:text-6xl font-bold text-white leading-tight">
          Ready to Experience<br />
          Ultimate Spa Relaxation?
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
          Escape the busy demands of daily life. Select one of our curated packages, or work with our staff 
          to customize a session suited to your body condition and personal relaxation goals. 
          World-class wellness is just a few clicks away.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <button
            onClick={openBookingModal}
            className="group inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-9 py-5 text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-white cursor-pointer"
          >
            <span>Book Your Package</span>
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <Link
            to="/contact"
            className="rounded-full border-2 border-white px-9 py-5 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"
          >
            Contact Our Team
          </Link>
        </div>

        {/* Dynamic Statistics */}
        <div className="mt-20 border-t border-white/10 pt-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-[#D4AF37]">25K+</h3>
              <p className="mt-3 text-gray-300 text-sm font-semibold uppercase tracking-wider">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-[#D4AF37]">4.9★</h3>
              <p className="mt-3 text-gray-300 text-sm font-semibold uppercase tracking-wider">Client Rating</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-[#D4AF37]">100%</h3>
              <p className="mt-3 text-gray-300 text-sm font-semibold uppercase tracking-wider">VIP Room Sanitized</p>
            </div>
            <div className="text-center">
              <h3 className="text-5xl font-bold text-[#D4AF37]">Senior</h3>
              <p className="mt-3 text-gray-300 text-sm font-semibold uppercase tracking-wider">Therapists Only</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookingCTA;
