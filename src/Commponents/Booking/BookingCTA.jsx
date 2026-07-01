import { Link } from "react-router-dom";
import Container from "../Container";

const BookingCTA = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-[40px] bg-[#1A1410] px-8 py-16 lg:px-16 text-center">
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[100px]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="uppercase tracking-[5px] text-[#D4AF37] text-sm font-semibold">
              Special Requests
            </span>
            <h2 className="mt-5 text-3xl lg:text-4xl font-bold text-white">
              Planning a Group Event or Couples Celebration?
            </h2>
            <p className="mt-6 text-gray-300 leading-8">
              We cater to anniversaries, corporate wellness sessions, bridal showers, and customized spa days. 
              Get in touch with our manager directly to outline your event parameters and secure custom rates.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-5">
              <a
                href="https://wa.me/8801540097587"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#D4AF37] px-10 py-4 font-bold text-black transition duration-300 hover:bg-white hover:scale-105"
              >
                Chat Group Booking
              </a>
              <Link
                to="/contact"
                className="rounded-full border border-[#D4AF37] px-10 py-4 font-bold text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-black"
              >
                Contact Reception
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BookingCTA;
