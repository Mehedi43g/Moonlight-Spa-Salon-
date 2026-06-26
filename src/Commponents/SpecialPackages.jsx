import Container from "./Container";
import { Link } from "react-router-dom";

import sp1 from "../assets/sp1.jpg";
import sp2 from "../assets/sp2.jpg";
import sp3 from "../assets/sp3.jpg";
import sp4 from "../assets/sp4.jpg";

import { GiLotusFlower } from "react-icons/gi";
import { MdArrowOutward } from "react-icons/md";

const packages = [
  {
    id: 1,
    image: sp1,
    title: "Relax Escape Package",
    badge: "Most Popular",

    description:
      "Enjoy a luxurious spa experience including a relaxing massage, herbal steam and calming aromatherapy session.",

    price: "৳2,999",

    duration: "90 Minutes",

    slug: "relax-escape-package",
  },

  {
    id: 2,
    image: sp2,
    title: "Couple Harmony Package",
    badge: "Luxury",

    description:
      "A romantic spa session for couples featuring full body massage, aromatherapy and premium refreshments.",

    price: "৳5,999",

    duration: "120 Minutes",

    slug: "couple-harmony-package",
  },

  {
    id: 3,
    image: sp3,
    title: "Royal Wellness Package",
    badge: "Premium",

    description:
      "Complete wellness treatment with hot oil massage, facial therapy and body polishing for total relaxation.",

    price: "৳4,499",

    duration: "150 Minutes",

    slug: "royal-wellness-package",
  },

  {
    id: 4,
    image: sp4,
    title: "Ultimate Spa Retreat",
    badge: "Best Value",

    description:
      "The complete luxury spa journey including massage, facial, steam bath and premium skincare treatment.",

    price: "৳6,999",

    duration: "180 Minutes",

    slug: "ultimate-spa-retreat",
  },
];

const SpecialPackages = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFDF9] via-[#F9F3EA] to-[#FFFDF9]">

      <Container>

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <GiLotusFlower className="mx-auto text-5xl text-[#D4AF37]" />

          <span className="uppercase tracking-[5px] text-[#D4AF37] text-sm font-semibold mt-5 block">
            Exclusive Spa Packages
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-[#1A1410] leading-tight">
            Luxury Spa Packages
            <br />
            Crafted For Complete Relaxation
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover carefully designed spa packages that combine our most
            popular treatments into one unforgettable wellness experience.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
          {packages.map((item) => (
  <article
    key={item.id}
    className="
    group
    flex
    flex-col
    overflow-hidden
    rounded-[30px]
    bg-white
    border
    border-[#EEE5D4]
    shadow-md
    hover:shadow-2xl
    hover:-translate-y-3
    duration-500
    "
  >
    {/* Image */}

    <div className="relative overflow-hidden">

      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="
        h-72
        w-full
        object-cover
        duration-700
        group-hover:scale-110
        "
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

      {/* Badge */}

      <span
        className="
        absolute
        top-5
        left-5
        rounded-full
        bg-[#D4AF37]
        px-4
        py-2
        text-xs
        font-bold
        uppercase
        tracking-wider
        text-black
        "
      >
        {item.badge}
      </span>

      {/* Duration */}

      <div
        className="
        absolute
        bottom-5
        right-5
        rounded-full
        bg-white/90
        backdrop-blur-md
        px-4
        py-2
        text-sm
        font-semibold
        text-[#1A1410]
        shadow-xl
        "
      >
        {item.duration}
      </div>

    </div>

    {/* Content */}

    <div className="flex flex-col flex-1 p-7">

      <h3 className="text-[26px] font-bold text-[#1A1410]">
        {item.title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600 flex-1">
        {item.description}
      </p>

      {/* Price */}

      <div
        className="
        mt-7
        rounded-2xl
        bg-[#FFF8E7]
        border
        border-[#ECDDA9]
        p-5
        "
      >
        <p className="uppercase tracking-[3px] text-xs text-gray-500">
          Package Price
        </p>

        <h4 className="mt-2 text-3xl font-bold text-[#D4AF37]">
          {item.price}
        </h4>

        <p className="text-sm mt-1 text-gray-500">
          Per Person
        </p>

      </div>

      {/* Buttons */}

      <div className="mt-8 flex flex-col gap-3">

        <Link
          to={`/packages/${item.slug}`}
          className="
          flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-[#D4AF37]
          py-4
          font-semibold
          text-black
          duration-300
          hover:bg-[#1A1410]
          hover:text-white
          "
        >
          View Package

          <MdArrowOutward className="text-xl" />
        </Link>

        <Link
          to="/book-now"
          className="
          flex
          items-center
          justify-center
          rounded-xl
          border
          border-[#D4AF37]
          py-4
          font-semibold
          text-[#D4AF37]
          duration-300
          hover:bg-[#D4AF37]
          hover:text-black
          "
        >
          Book Now
        </Link>

      </div>

    </div>

  </article>
))}
</div>
        {/* Bottom CTA */}

        <div className="mt-24">

          <div
            className="
            relative
            overflow-hidden
            rounded-[35px]
            bg-[#1A1410]
            px-8
            py-16
            lg:px-20
            "
          >

            {/* Background Glow */}

            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl"></div>

            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl"></div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">

              <span className="uppercase tracking-[5px] text-[#D4AF37] text-sm font-semibold">
                Exclusive Wellness
              </span>

              <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-white leading-tight">
                Create Your Own
                <br />
                Personalized Spa Package
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Looking for something unique? Our therapists can create a
                customized spa package tailored to your wellness goals,
                relaxation needs, and preferred treatments.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

                <Link
                  to="/book-now"
                  className="
                  rounded-full
                  bg-[#D4AF37]
                  px-10
                  py-4
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:scale-105
                  "
                >
                  Book Your Package
                </Link>

                <Link
                  to="/contact"
                  className="
                  rounded-full
                  border
                  border-[#D4AF37]
                  px-10
                  py-4
                  font-bold
                  text-[#D4AF37]
                  transition-all
                  duration-300
                  hover:bg-[#D4AF37]
                  hover:text-black
                  "
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default SpecialPackages;