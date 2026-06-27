import { FaAward, FaLeaf,  FaSpa, FaUserShield, FaHeart,  FaClock,} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaAward />,
    title: "Certified Therapists",
    description:
      "Our experienced therapists are professionally trained to deliver world-class wellness treatments.",
  },

  {
    id: 2,
    icon: <FaLeaf />,
    title: "100% Organic Products",
    description:
      "We use only premium natural oils and skincare products for maximum relaxation.",
  },

  {
    id: 3,
    icon: <FaSpa />,
    title: "Luxury Private Rooms",
    description:
      "Elegant treatment rooms designed to provide complete privacy and peaceful relaxation.",
  },

  {
    id: 4,
    icon: <FaUserShield />,
    title: "Safe & Hygienic",
    description:
      "Every treatment room and equipment is sanitized following premium hygiene standards.",
  },

  {
    id: 5,
    icon: <FaHeart />,
    title: "Personalized Care",
    description:
      "Each therapy session is customized according to your body condition and wellness goals.",
  },

  {
    id: 6,
    icon: <FaClock />,
    title: "Easy Online Booking",
    description:
      "Book your appointment anytime in just a few clicks with instant confirmation.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background Glow */}

      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="uppercase tracking-[5px] text-[#D4AF37] text-sm font-semibold">

            Why Choose Us

          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight">

            Experience Luxury
            <br />
            Beyond Expectations

          </h2>

          <p className="mt-6 leading-8 text-gray-600">

            Every treatment is carefully crafted to give you complete
            relaxation, premium comfort, and a memorable wellness
            experience that keeps you coming back.

          </p>

        </div>
 

        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center"> 

          <div className="relative group">

            <div className="overflow-hidden rounded-[35px] shadow-2xl">

              <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80" alt="Luxury Spa"
                loading="lazy" className=" h-162.5 w-full
                object-cover transition-all duration-700 group-hover:scale-110  " />

            </div>
 

            <div className="absolute inset-0 rounded-[35px] bg-linear-to-t from-black/50 via-transparent to-transparent"></div>
 

            <div className="  absolute  bottom-8  left-8 rounded-3xl  bg-white px-7  py-6 shadow-2xl max-w-60  " >

              <span className="uppercase text-xs tracking-[4px] text-[#D4AF37] font-semibold">

                Premium Spa

              </span>

              <h3 className="mt-2 text-4xl font-bold text-[#1A1A1A]">

                4.9★

              </h3>

              <p className="mt-2 text-gray-600 leading-7">

                Rated Excellent by thousands of satisfied clients.

              </p>

            </div>

          </div>

          {/* Right Side */}

          <div className="grid sm:grid-cols-2 gap-6">

            {features.map((item) => (

              <article
                key={item.id}
                className=" group rounded-[28px]  bg-white  p-7 shadow-lg  border border-[#EFE8DA] 
                transition-all duration-500  hover:-translate-y-2  hover:border-[#D4AF37] hover:shadow-2xl  " >
  
                <div  className=" flex h-16  w-16  items-center  justify-center  rounded-full    bg-[#FFF8E8]
                  text-[#D4AF37] text-3xl  transition-all  duration-500 group-hover:rotate-12  group-hover:scale-110 " >
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#1A1A1A]">

                  {item.title}

                </h3>

                <p className="mt-4 leading-7 text-gray-600">

                  {item.description}

                </p>

              </article>

            ))}

          </div>

        </div> 

        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="rounded-[30px] bg-[#FFF9EE] p-8 text-center border border-[#F3E3B4] shadow-sm hover:shadow-xl transition-all duration-300">

            <h3 className="text-5xl font-bold text-[#D4AF37]">
              10+
            </h3>

            <p className="mt-3 text-gray-600 font-medium">
              Years Experience
            </p>

          </div>

          <div className="rounded-[30px] bg-[#FFF9EE] p-8 text-center border border-[#F3E3B4] shadow-sm hover:shadow-xl transition-all duration-300">

            <h3 className="text-5xl font-bold text-[#D4AF37]">
              5K+
            </h3>

            <p className="mt-3 text-gray-600 font-medium">
              Happy Clients
            </p>

          </div>

          <div className="rounded-[30px] bg-[#FFF9EE] p-8 text-center border border-[#F3E3B4] shadow-sm hover:shadow-xl transition-all duration-300">

            <h3 className="text-5xl font-bold text-[#D4AF37]">
              30+
            </h3>

            <p className="mt-3 text-gray-600 font-medium">
              Premium Treatments
            </p>

          </div>

          <div className="rounded-[30px] bg-[#FFF9EE] p-8 text-center border border-[#F3E3B4] shadow-sm hover:shadow-xl transition-all duration-300">

            <h3 className="text-5xl font-bold text-[#D4AF37]">
              4.9★
            </h3>

            <p className="mt-3 text-gray-600 font-medium">
              Customer Rating
            </p>

          </div>

        </div>
 

        <div className="mt-24">

          <div className="relative overflow-hidden rounded-[40px] bg-[#1B1B1B] px-8 py-16 lg:px-16 text-center">

            <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[100px]" />

            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[100px]" />

            <div className="relative z-10 max-w-3xl mx-auto">

              <span className="uppercase tracking-[5px] text-[#D4AF37] text-sm font-semibold">

                Start Your Wellness Journey

              </span>

              <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-white leading-tight">

                Relax Your Body,
                <br />
                Refresh Your Mind

              </h2>

              <p className="mt-6 text-gray-300 leading-8">

                Experience luxury spa treatments designed to restore your
                energy, reduce stress and give you complete peace of mind.

              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

                <a href="/book-now" className=" rounded-full  bg-[#D4AF37]  px-10
                  py-4 font-semibold  text-white  transition-all  duration-300  hover:bg-[#b8860b]  hover:scale-105  " >
                  Book Appointment
                </a>

                <a  href="/contact"  className=" rounded-full border  border-[#D4AF37]
                  px-10 py-4  font-semibold  text-[#D4AF37] transition-all   duration-300  hover:bg-[#D4AF37]  hover:text-white " >
                  Contact Us
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;