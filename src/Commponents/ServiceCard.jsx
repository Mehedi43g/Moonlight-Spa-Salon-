import Container from "./Container";
import { Link } from "react-router-dom";

// Images
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.jpg";

// Icons
import { GiThreeLeaves } from "react-icons/gi";
import {
  MdArrowOutward,
  MdOutlineSpa,
} from "react-icons/md";

import {
  FaLeaf,
  FaHandSparkles,
} from "react-icons/fa6";

import { GiLotusFlower } from "react-icons/gi";

const services = [
  {
    id: 1,
    image: card1,
    title: "Hot Oil Massage",
    icon: MdOutlineSpa,
    badge: "Most Popular",

    description:
      "Warm herbal oils combined with expert massage techniques to melt away stress, relax muscles and restore natural body balance.",

    startingPrice: "৳2,500",

    durations: [
      {
        title: "60 Min",
        link: "/services/hot-oil-massage/60",
      },
      {
        title: "90 Min",
        link: "/services/hot-oil-massage/90",
      },
      {
        title: "120 Min",
        link: "/services/hot-oil-massage/120",
      },
    ],
  },

  {
    id: 2,
    image: card2,
    title: "Aromatherapy",
    icon: FaLeaf,
    badge: "Luxury Care",

    description:
      "Essential oils carefully selected to calm your mind, reduce anxiety and create a complete wellness experience.",

    startingPrice: "৳2,800",

    durations: [
      {
        title: "60 Min",
        link: "/services/aromatherapy/60",
      },
      {
        title: "90 Min",
        link: "/services/aromatherapy/90",
      },
      {
        title: "120 Min",
        link: "/services/aromatherapy/120",
      },
    ],
  },

  {
    id: 3,
    image: card3,
    title: "Deep Tissue Massage",
    icon: FaHandSparkles,
    badge: "Best Seller",

    description:
      "Perfect for relieving chronic pain, improving flexibility and releasing deep muscle tension.",

    startingPrice: "৳3,000",

    durations: [
      {
        title: "60 Min",
        link: "/services/deep-tissue/60",
      },
      {
        title: "90 Min",
        link: "/services/deep-tissue/90",
      },
      {
        title: "120 Min",
        link: "/services/deep-tissue/120",
      },
    ],
  },

  {
    id: 4,
    image: card4,
    title: "Facial Rejuvenation",
    icon: GiLotusFlower,
    badge: "Premium",

    description:
      "Professional facial therapy that deeply hydrates your skin while giving you a naturally radiant glow.",

    startingPrice: "৳2,700",

    durations: [
      {
        title: "60 Min",
        link: "/services/facial/60",
      },
      {
        title: "90 Min",
        link: "/services/facial/90",
      },
      {
        title: "120 Min",
        link: "/services/facial/120",
      },
    ],
  },
];

const ServiceCard = () => {
  return (
    <section className="bg-linear-to-b from-[#FCF8F2] to-white py-24">

      <Container>

        {/* Header */}

        <div className="max-w-3xl mx-auto text-center">

          <GiThreeLeaves
            className="mx-auto text-[#D4AF37] text-5xl"
          />

          <span className="uppercase tracking-[5px] text-[#D4AF37] text-sm font-semibold mt-5 block">

            Premium Spa Experience

          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-[#1A1410] leading-tight">

            Relax, Refresh & Rejuvenate
            <br />
            With Our Signature Spa Treatments

          </h2>

          <p className="mt-6 text-gray-600 leading-8 text-lg">

            Every treatment is carefully designed to relax your body,
            calm your mind and restore your natural energy through
            luxurious spa therapies performed by experienced therapists.

          </p>

        </div>
 

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
          {services.map((service) => {
  const Icon = service.icon;

  return (
    <article key={service.id}
      className=" group  flex
      flex-col  overflow-hidden  rounded-[30px]  bg-white border  border-[#EFE7D8] shadow-md  hover:shadow-2xl hover:-translate-y-3  transition-all duration-500 " > 

      <div className="relative overflow-hidden">

        <img  src={service.image}  alt={service.title} loading="lazy" className=" h-72  w-full object-cover duration-700  group-hover:scale-110 " />
 

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"></div>
 

        <span className=" absolute  top-5  left-5  rounded-full  bg-[#D4AF37] px-4
          py-2 text-xs font-bold uppercase tracking-wider  text-black shadow-lg " >
          {service.badge}
        </span>
 

        <div className="  absolute
          right-5  bottom-5 h-16 w-16 rounded-full bg-white/90
          backdrop-blur-md flex items-center justify-center text-[#D4AF37] text-3xl  shadow-xl duration-500 group-hover:rotate-12  group-hover:scale-110 " >
          <Icon />
        </div>

      </div> 

      <div className="flex flex-col flex-1 p-7">

        <h3 className=" text-[26px]  font-bold  text-[#1A1410]  " >
          {service.title}
        </h3>

        <p className=" mt-4  text-gray-600 leading-7  flex-1 " >{service.description}
        </p> 

        <div className="  mt-7  rounded-2xl  border  border-[#F1E3B4]  bg-[#FFF8E8] p-5 " >
          <p className="  uppercase  tracking-[3px]  text-xs  text-gray-500  " >  Starting From </p>

          <h4
            className=" mt-2 text-3xl  font-bold   text-[#D4AF37] " > {service.startingPrice}
          </h4>

          <p className=" mt-1  text-sm  text-gray-500  " >  Professional Spa Treatment
          </p>

        </div> 

        <div className="grid grid-cols-3 gap-3 mt-7">

          {service.durations.map((item) => (

            <Link  key={item.title} to={item.link}
              className="  rounded-xl  border border-[#E9DEC0] bg-[#FCFAF4] py-3 text-center duration-300 hover:bg-[#D4AF37]
               hover:text-white  hover:border-[#D4AF37] " >
              <p className="font-semibold text-sm">  {item.title} </p> 
              <span className="text-xs">  View  </span>

            </Link>

          ))}

        </div> 

        <div className="mt-8 flex flex-col gap-3">

          <Link
            to="/book-now"  className=" flex items-center justify-center  gap-2  rounded-xl  bg-[#D4AF37]  py-4
            font-semibold  text-black  duration-300  hover:bg-[#1A1410]  hover:text-white  " >  Book Appointment  <MdArrowOutward className="text-xl" />
          </Link>

          <Link to={`/services/${service.title .toLowerCase() .replace(/\s+/g, "-")}`}
            className="  flex items-center justify-center  rounded-xl
            border  border-[#D4AF37]  py-4  font-semibold  text-[#D4AF37] duration-300  hover:bg-[#D4AF37]  hover:text-black " >
            View Details
          </Link>

        </div>

      </div>

    </article>
  );
})}
        </div> 
        <div className="mt-24">

          <div
            className="relative overflow-hidden rounded-[35px]  bg-[#1A1410] px-8 py-16 lg:px-20 " > 

            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl"></div>

            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl"></div>

            <div className="relative z-10">

              <div className="max-w-3xl mx-auto text-center">

                <span  className=" uppercase  tracking-[5px]  text-[#D4AF37]  text-sm  font-semibold " > Luxury Spa Experience
                </span>

                <h2 className=" mt-5 text-4xl lg:text-5xl font-bold text-white leading-tight " >
                   Your Journey To Relaxation  <br /> Starts Here
                </h2>

                <p className=" mt-6 text-gray-300 leading-8 text-lg">
                  Whether you want deep relaxation, stress relief,
                  skincare or premium body treatments,
                  our certified therapists are ready to give you
                  an unforgettable luxury spa experience.
                </p>

              </div> 
              <div
                className=" mt-12 flex flex-col  sm:flex-row justify-center gap-5 " >

                <Link to="/book-now" className=" rounded-full bg-[#D4AF37] px-10  py-4 text-center 
                font-bold  text-black duration-300  hover:scale-105  hover:bg-white " >
                  Book Appointment
                </Link>

                <Link to="/services" className=" rounded-full border border-[#D4AF37] px-10 py-4 text-center font-bold
                 text-[#D4AF37] duration-300 hover:bg-[#D4AF37] hover:text-black">
                  Explore All Services
                </Link>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default ServiceCard;