import { Link } from "react-router-dom";
import Container from "../Container";
import serviceDetails from "../../data/serviceDetails";

import {
  MdArrowOutward,
  MdOutlineSpa,
  MdOutlineSelfImprovement,
  MdOutlineFaceRetouchingNatural,
} from "react-icons/md";

import {
  FaLeaf,
  FaHands,
  FaWalking,
  FaFire,
} from "react-icons/fa";

const getCategory = (slug) => {
  if (slug === "foot-massage" || slug === "aroma-oil-massage") return "Wellness";
  return "Massage";
};

const getIcon = (slug) => {
  switch (slug) {
    case "hot-oil-massage":
      return <FaFire />;
    case "aroma-oil-massage":
      return <FaLeaf />;
    case "deep-tissue":
      return <FaHands />;
    case "thai-massage":
      return <MdOutlineSelfImprovement />;
    case "foot-massage":
      return <FaWalking />;
    case "full-body-massage":
      return <MdOutlineSpa />;
    default:
      return <MdOutlineSpa />;
  }
};

const featuredSlugs = [
  "hot-oil-massage",
  "aroma-oil-massage",
  "deep-tissue",
  "thai-massage",
  "foot-massage",
  "full-body-massage"
];

const categories = featuredSlugs.map((slug, idx) => {
  const service = serviceDetails.find(s => s.slug === slug);
  if (!service) return null;
  const categoryName = getCategory(slug);
  const count = serviceDetails.filter(s => getCategory(s.slug) === categoryName).length;
  return {
    id: idx + 1,
    title: service.hero.title,
    description: service.overview.shortDescription,
    treatments: `${count} Treatment${count > 1 ? "s" : ""}`,
    icon: getIcon(slug),
    image: service.hero.image,
    link: `/services/${slug}`
  };
}).filter(Boolean);

const ServiceCategories = () => {
  const handleViewAllServices = (e) => {
    if (window.location.pathname === "/services") {
      e.preventDefault();
      const gridElement = document.getElementById("treatment-grid");
      if (gridElement) {
        gridElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-24 bg-linear-to-b from-[#FFFDF9] via-[#FAF6EF] to-[#F4EEE5] overflow-hidden">
      <Container>


        <div className="max-w-3xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#FFF8E7] px-5 py-2">

            <MdOutlineSpa className="text-[#D4AF37] text-xl" />

            <span className="uppercase tracking-[3px] text-xs font-semibold text-[#B88917]">
              Luxury Treatments
            </span>

          </div>

          <h2 className="mt-7 text-4xl lg:text-5xl font-bold text-[#1B1B1B] leading-tight">
            Explore Our Premium
            <span className="text-[#D4AF37]"> Spa Categories</span>
          </h2>

          <p className="mt-6 text-[17px] leading-8 text-gray-600">
            Discover a carefully selected collection of luxury massage,
            wellness, and beauty treatments designed to restore your body,
            refresh your mind, and elevate your lifestyle through exceptional
            spa experiences.
          </p>

        </div>

 

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 mt-20">
                    {categories.map((category) => (
            <article
              key={category.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-4xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]" >
 

              <div className="relative h-72.5 overflow-hidden">

                <img src={category.image} alt={category.title}  loading="lazy" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
 

                <div className="absolute inset-0 bg-linear-to-t from-[#111]/90 via-[#111]/20 to-transparent"></div>
 

                <span className="absolute top-5 left-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold tracking-wide text-[#B88917] shadow-lg">

                  {category.treatments}

                </span>
 

                <div className="  absolute  bottom-5  right-5  flex  h-16  w-16  items-center  justify-center  rounded-full
                  bg-[#D4AF37]  text-3xl  text-white  shadow-xl  transition-all duration-500  group-hover:rotate-12  group-hover:scale-110 " >
                  {category.icon}
                </div>

              </div>
 

              <div className="flex flex-1 flex-col p-8">

                <h3 className="text-[28px] font-bold text-[#222] leading-tight">

                  {category.title}

                </h3>

                <p className="mt-4 flex-1 text-[15px] leading-8 text-gray-600">

                  {category.description}

                </p>
 

                <div className="mt-7 mb-6 h-px w-full bg-linear-to-r from-[#D4AF37] via-[#EAD39A] to-transparent"></div>
 

                <Link  to={category.link} className=" inline-flex items-center gap-3
                  font-semibold  text-[#B88917] transition-all duration-300 hover:gap-5 hover:text-[#111] " >
                  Explore Treatments

                  <span className=" flex h-11 w-11  items-center justify-center
                    rounded-full  bg-[#FFF5DA] transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-white  " >
                    <MdArrowOutward className="text-xl" />
                  </span>

                </Link>

              </div>
 

              <div  className=" pointer-events-none  absolute inset-0  rounded-4xl
                border  border-transparent transition-all duration-500  group-hover:border-[#D4AF37]/40 " ></div>

            </article>
          ))}
                  </div>

        {/* Bottom CTA */}

        <div className="mt-24">

          <div className=" relative overflow-hidden rounded-[40px] bg-linear-to-r from-[#1A1714] via-[#24201B] to-[#2C2620]  px-8 py-16 lg:px-16 " >
 

            <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[120px]"></div>

            <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[120px]"></div>

            <div className="relative z-10 flex flex-col items-center text-center">

              <span className=" inline-flex items-center rounded-full border  border-[#D4AF37]/40
                bg-[#D4AF37]/10  px-5 py-2 text-sm font-semibold  uppercase tracking-[3px] text-[#D4AF37] ">
                Personalized Wellness
              </span>

              <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white lg:text-5xl">

                Not Sure Which Treatment
                <span className="text-[#D4AF37]">
                  {" "}Is Perfect For You?
                </span>

              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">

                Every guest is unique. Let our certified wellness specialists
                recommend the ideal spa treatment based on your lifestyle,
                body condition, and relaxation goals.

              </p>

              <div className="mt-10 flex flex-col gap-5 sm:flex-row">

                <Link
                  to="/services"
                  onClick={handleViewAllServices}
                  className="rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-white"
                >
                  View All Services
                </Link>

                <Link
                  to="/booking"
                  className="rounded-full border border-[#D4AF37] px-8 py-4 font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:scale-105"
                >
                  Book Consultation
                </Link>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};

export default ServiceCategories;