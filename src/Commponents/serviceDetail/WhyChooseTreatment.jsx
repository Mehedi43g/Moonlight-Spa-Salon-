import React from "react";
import Container from "../Container";

import {
  FaCheckCircle,
  FaAward,
  FaUserShield,
  FaSpa,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";

const WhyChooseTreatment = ({ service }) => {
  if (!service) return null;

  const reasons = [
    {
      icon: <FaAward />,
      title: "Premium Quality",
      description:
        "Every treatment is designed to deliver a luxury spa experience using professional techniques.",
    },

    {
      icon: <FaUserShield />,
      title: "Professional Therapists",
      description:
        "Experienced and certified therapists ensure your comfort and complete relaxation.",
    },

    {
      icon: <FaSpa />,
      title: "Luxury Environment",
      description:
        "Private treatment rooms with premium ambience for a peaceful wellness journey.",
    },

    {
      icon: <FaHeart />,
      title: "Customer Satisfaction",
      description:
        "Thousands of happy guests trust our premium spa services every year.",
    },

    {
      icon: <FaLeaf />,
      title: "Natural Wellness",
      description:
        "High-quality oils and modern spa techniques help restore your body and mind.",
    },

    {
      icon: <FaCheckCircle />,
      title: "Trusted Service",
      description:
        "Safe, hygienic and professional treatments with attention to every detail.",
    },
  ];

  return (
    <section className="py-24 bg-white">

      <Container>

        <div className="max-w-3xl mx-auto text-center">

          <span className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">

            Why Choose Us

          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#1A1410]">

            Why Choose
            <span className="text-[#D4AF37]">
              {" "}
              {service.hero.title}
            </span>

          </h2>

          <p className="mt-6 text-[#6E6259] leading-8">

            We combine professional therapists, premium facilities and
            luxury hospitality to create a spa experience that leaves
            you refreshed, relaxed and completely satisfied.

          </p>

        </div>

        <div className="grid gap-8 mt-16 md:grid-cols-2 xl:grid-cols-3">
                    {reasons.map((item, index) => (

            <div
              key={index}
              className="group rounded-3xl border border-[#EFE7DC] bg-[#FCF8F2] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-2xl"
            >

              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#D4AF37] text-white text-2xl transition-all duration-300 group-hover:scale-110">

                {item.icon}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#1A1410]">

                {item.title}

              </h3>

              <p className="mt-4 leading-8 text-[#6E6259]">

                {item.description}

              </p>

            </div>

          ))}

        </div>

        {/* Bottom Highlight */}

        <div className="mt-20 rounded-[32px] bg-[#1A1410] px-8 py-14 text-center text-white">

          <span className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">

            Premium Experience

          </span>

          <h3 className="mt-4 text-3xl lg:text-4xl font-bold">

            Your Comfort Is Our Highest Priority

          </h3>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-300">

            From the moment you enter our spa until your session ends,
            every detail is carefully designed to provide an unforgettable
            luxury wellness experience. Our professional therapists,
            premium facilities and personalized care ensure that every
            visit leaves you refreshed, relaxed and completely satisfied.

          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">

            <div className="rounded-2xl bg-white/10 px-6 py-4">

              <h4 className="text-3xl font-bold text-[#D4AF37]">

                100%

              </h4>

              <p className="mt-1 text-sm text-gray-300">

                Privacy Guaranteed

              </p>

            </div>

            <div className="rounded-2xl bg-white/10 px-6 py-4">

              <h4 className="text-3xl font-bold text-[#D4AF37]">

                Premium

              </h4>

              <p className="mt-1 text-sm text-gray-300">

                Luxury Facilities

              </p>

            </div>

            <div className="rounded-2xl bg-white/10 px-6 py-4">

              <h4 className="text-3xl font-bold text-[#D4AF37]">

                Expert

              </h4>

              <p className="mt-1 text-sm text-gray-300">

                Professional Therapists

              </p>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default WhyChooseTreatment;