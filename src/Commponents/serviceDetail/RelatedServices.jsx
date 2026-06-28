import React from "react";
import { Link } from "react-router-dom";

import Container from "../Container";
import services from "../../data/services";

const RelatedServices = ({ service }) => {

  if (!service) return null;

  const related = services.filter((item) =>
    service.relatedServices?.includes(item.slug)
  );
  return (
    <section className="py-24 bg-[#FCF8F2]">

      <Container>

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">

            Related Services

          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#1A1410]">

            You May Also Like

          </h2>

          <p className="mt-6 leading-8 text-[#6E6259]">

            Discover more premium spa treatments carefully selected to
            complement your wellness journey.

          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          
          {related.map((item) => (

            <div
              key={item.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover transition duration-700 hover:scale-110"
                />

              </div>

              <div className="p-7">

                <span className="inline-block rounded-full bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37]">

                  {item.category}

                </span>

                <h3 className="mt-5 text-2xl font-bold text-[#1A1410]">

                  {item.title}

                </h3>

                <p className="mt-4 leading-7 text-[#6E6259]">

                  {item.shortDescription}

                </p>

                <div className="mt-6 flex items-center justify-between">

                  <div>

                    <span className="text-sm text-[#6E6259]">

                      Starting From

                    </span>

                    <h4 className="text-2xl font-bold text-[#D4AF37]">

                      ৳{item.startingPrice.toLocaleString()}

                    </h4>

                  </div>
                                    <Link
                    to={`/services/${item.slug}/60`}
                    className="rounded-xl bg-[#D4AF37] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#bf9c2c]"
                  >
                    View Details
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-4xl bg-[#1A1410] px-8 py-14 text-center">

          <span className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">

            Luxury Wellness

          </span>

          <h3 className="mt-4 text-3xl lg:text-4xl font-bold text-white">

            Discover More Premium Treatments

          </h3>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-300">

            Explore our collection of luxury spa services, each designed
            to help you relax, recover and enjoy a world-class wellness
            experience.

          </p>

          <Link
            to="/services"
            className="mt-10 inline-flex rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#bf9c2c]"
          >
            Explore All Services
          </Link>

        </div>

      </Container>

    </section>
  )
}

export default RelatedServices