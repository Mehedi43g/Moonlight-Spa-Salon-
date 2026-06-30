import React from "react";
import { Link } from "react-router-dom";

import Container from "../Container";
import { useBooking } from "../../context/BookingContext";
import {
  FaCheckCircle,
  FaCrown,
  FaFire,
} from "react-icons/fa";

const PricingPlans = ({ service }) => {
  if (!service) return null;
  const { openBookingModal } = useBooking();

  const durations = service.duration || [];

  const features = [
    "Professional Female Therapist",
    "Luxury Private Room",
    "Premium Hygiene",
    "Fresh Towels",
    "Welcome Drink",
    "Relaxation Environment",
  ];

  return (
    <section className="py-20 bg-[#FCF8F2]">

      <Container>

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-[#D4AF37] uppercase tracking-[4px] font-semibold">
            Pricing Plans
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#1A1410]">

            Choose Your Perfect Session

          </h2>

          <p className="mt-5 text-[#6E6259] leading-8">

            Every session is designed to provide a premium spa
            experience with professional therapists, luxury
            facilities and complete relaxation.

          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 mt-16 lg:grid-cols-3">

          {durations.map((minute) => {

            const price = service.pricing?.[minute];

            const popular = minute === 90;

            const vip = minute === 120;

            return (

              <div
                key={minute}
                className={`relative rounded-3xl border bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl

                ${
                  popular
                    ? "border-[#D4AF37] shadow-xl"
                    : "border-gray-200"
                }`}
              >

                {/* Badge */}

                {popular && (

                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">

                    <span className="flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-2 text-sm font-semibold text-white">

                      <FaFire />

                      Most Popular

                    </span>

                  </div>

                )}

                {vip && (

                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">

                    <span className="flex items-center gap-2 rounded-full bg-[#1A1410] px-5 py-2 text-sm font-semibold text-white">

                      <FaCrown />

                      VIP Experience

                    </span>

                  </div>

                )}

                <div className="p-8">

                  <h3 className="text-3xl font-bold text-[#1A1410]">

                    {minute} Minutes

                  </h3>

                  <p className="mt-3 text-[#6E6259]">

                    Premium luxury massage session with professional service.

                  </p>

                  <div className="mt-8">

                    <span className="text-[#D4AF37] text-5xl font-bold">

                      ৳{price.toLocaleString()}

                    </span>

                  </div>

                  <div className="mt-8 space-y-4">  {features.map((item, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >

                      <FaCheckCircle className="text-[#D4AF37] text-lg shrink-0" />

                      <span className="text-[#5C5148]">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

                {/* Buttons */}

                <div className="mt-10 space-y-4">

                  <button onClick={() => openBookingModal()} 
                    className={`w-full flex items-center justify-center rounded-xl py-4 font-semibold transition-all duration-300

                    ${
                      popular
                        ? "bg-[#D4AF37] text-white hover:bg-[#bf9c2c]"
                        : vip
                        ? "bg-[#1A1410] text-white hover:bg-black"
                        : "bg-[#F3ECE2] text-[#1A1410] hover:bg-[#D4AF37] hover:text-white"
                    }`}
                  >
                    Book Now
                  </button>

                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center rounded-xl border border-[#D4AF37] py-4 font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-white"
                  >
                    Contact Us
                  </Link>

                </div>

              </div>

            </div>

            );

          })}

        </div>

      </Container>

    </section>
  );
};

export default PricingPlans;