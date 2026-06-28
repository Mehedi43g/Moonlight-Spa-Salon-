import React from "react";
import { Link } from "react-router-dom";

import Container from "../Container";

import { FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";

const CTA = ({ service }) => {
  if (!service) return null;

  return (
    <section className="py-24 bg-[#FCF8F2]">

      <Container>

        <div className="relative overflow-hidden rounded-[40px] bg-[#1A1410]">

          {/* Background */}

          <div className="absolute inset-0 opacity-10">

            <img
              src={service.hero.image}
              alt={service.hero.title}
              className="w-full h-full object-cover"
            />

          </div>

          <div className="relative z-10 px-8 py-20 lg:px-20">

            <div className="max-w-4xl mx-auto text-center">

              <span className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">

                Ready To Relax?

              </span>

              <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">

                Experience Premium
                <span className="text-[#D4AF37]">
                  {" "}
                  {service.hero.title}
                </span>

              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-300">

                Book your luxury spa session today and enjoy the perfect
                combination of comfort, privacy and professional therapy.
                Let us help you relax your body and refresh your mind.

              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
                                <Link
                  to={`/book-now?service=${service.slug}`}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#bf9c2c]"
                >
                  <FaCalendarCheck />
                  Book Appointment
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#1A1410]"
                >
                  <FaPhoneAlt />
                  Contact Us
                </Link>

              </div>

              {/* Features */}

              <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                  <h3 className="text-3xl font-bold text-[#D4AF37]">
                    100%
                  </h3>

                  <p className="mt-2 text-gray-300">
                    Private Luxury Rooms
                  </p>

                </div>

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                  <h3 className="text-3xl font-bold text-[#D4AF37]">
                    Expert
                  </h3>

                  <p className="mt-2 text-gray-300">
                    Professional Therapists
                  </p>

                </div>

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                  <h3 className="text-3xl font-bold text-[#D4AF37]">
                    24/7
                  </h3>

                  <p className="mt-2 text-gray-300">
                    Booking Support
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default CTA;