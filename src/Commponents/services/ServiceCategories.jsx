import { Link } from "react-router-dom";
import Container from "../Container";

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

const categories = [
  {
    id: 1,
    title: "Hot Oil Massage",
    description:
      "Warm therapeutic oils combined with expert techniques to relieve muscle tension, improve circulation, and create complete body relaxation.",
    treatments: "12 Treatments",
    icon: <FaFire />,
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
    link: "/services/hot-oil-massage",
  },

  {
    id: 2,
    title: "Aromatherapy",
    description:
      "Luxury essential oil massage designed to calm the mind, reduce anxiety, and restore emotional balance.",
    treatments: "9 Treatments",
    icon: <FaLeaf />,
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
    link: "/services/aromatherapy",
  },

  {
    id: 3,
    title: "Deep Tissue Massage",
    description:
      "Target deep muscle layers to relieve chronic pain, improve mobility, and accelerate recovery.",
    treatments: "15 Treatments",
    icon: <FaHands />,
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop",
    link: "/services/deep-tissue",
  },

  {
    id: 4,
    title: "Thai Massage",
    description:
      "Traditional Thai stretching techniques that improve flexibility, posture, and overall body wellness.",
    treatments: "10 Treatments",
    icon: <MdOutlineSelfImprovement />,
    image:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop",
    link: "/services/thai-massage",
  },

  {
    id: 5,
    title: "Foot Reflexology",
    description:
      "Pressure-point therapy that stimulates natural healing and relieves stress throughout the body.",
    treatments: "8 Treatments",
    icon: <FaWalking />,
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    link: "/services/foot-reflexology",
  },

  {
    id: 6,
    title: "Facial Therapy",
    description:
      "Luxury facial treatments that deeply cleanse, hydrate, brighten, and rejuvenate your skin naturally.",
    treatments: "11 Treatments",
    icon: <MdOutlineFaceRetouchingNatural />,
    image:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop",
    link: "/services/facial-therapy",
  },
];

const ServiceCategories = () => {
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

                <Link to="/services" className="rounded-full
                  bg-[#D4AF37] px-8 py-4 font-semibold  text-black transition-all  duration-300  hover:scale-105  hover:bg-white " >
                  View All Services
                </Link>

                <Link  to="/book-now" className="  rounded-full  border  border-[#D4AF37]  px-8 py-4
                  font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:scale-105">
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