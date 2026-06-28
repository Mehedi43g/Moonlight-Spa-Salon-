import React from "react";
import Container from "../Container";

const Gallery = ({ service }) => {
  if (!service) return null;

  const images = service.gallery || [];

  return (
    <section className="py-24 bg-[#FCF8F2]">

      <Container>

        {/* Section Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">

            Gallery

          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#1A1410]">

            Explore Our
            <span className="text-[#D4AF37]">
              {" "}
              Luxury Spa
            </span>

          </h2>

          <p className="mt-6 text-[#6E6259] leading-8">

            Experience our elegant treatment rooms, premium atmosphere,
            professional therapists and relaxing environment through our
            exclusive gallery.

          </p>

        </div>

        {/* Gallery */}

        <div className="grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-4">

          {images.map((image, index) => (

            <div
              key={index}
              className={`group overflow-hidden rounded-3xl

              ${
                index === 0 || index === 3
                  ? "lg:row-span-2"
                  : ""
              }`}
            >

              <div className="relative h-full overflow-hidden rounded-3xl">

                <img
                  src={image}
                  alt={`${service.hero.title} ${index + 1}`}
                  className={`w-full object-cover transition-all duration-700 group-hover:scale-110

                  ${
                    index === 0 || index === 3
                      ? "h-[520px]"
                      : "h-[250px]"
                  }`}
                />

                {/* Overlay */}

                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100">

                  <div className="p-6">
                                        <span className="text-sm uppercase tracking-[3px] text-[#D4AF37]">

                      ORRA Luxury Spa

                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-white">

                      {service.hero.title}

                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-200">

                      Premium wellness experience with professional therapists
                      and a luxurious private environment.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Section */}

        <div className="mt-20 rounded-[32px] bg-[#1A1410] px-8 py-14 text-center">

          <span className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">

            Luxury Experience

          </span>

          <h3 className="mt-4 text-3xl lg:text-4xl font-bold text-white">

            Every Detail Is Designed For Your Comfort

          </h3>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-300">

            Our elegant spa environment combines luxury interiors,
            peaceful ambiance and professional hospitality to create a
            relaxing experience you'll always remember.

          </p>

        </div>

      </Container>

    </section>
  );
};

export default Gallery;