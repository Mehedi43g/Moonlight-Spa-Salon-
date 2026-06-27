import { Link } from "react-router-dom";
import {  FaCalendarCheck, FaSpa, FaLeaf,  FaArrowRight,} from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

const process = [
  {
    id: "01",
    icon: <FaCalendarCheck />,
    title: "Book Appointment",
    description:
      "Choose your preferred spa treatment, therapist, date and time through our easy online booking system.",
  },
  {
    id: "02",
    icon: <FaUserDoctor />,
    title: "Personal Consultation",
    description:
      "Our wellness expert will understand your needs and recommend the most suitable therapy.",
  },
  {
    id: "03",
    icon: <FaSpa />,
    title: "Luxury Treatment",
    description:
      "Enjoy premium massage therapy with aromatic oils, relaxing ambience and experienced therapists.",
  },
  {
    id: "04",
    icon: <FaLeaf />,
    title: "Refresh & Relax",
    description:
      "Complete your experience with herbal refreshments and personalized wellness recommendations.",
  },
];

const TreatmentProcess = () => {
  return (
    <section className="relative overflow-hidden bg-[#FCF8F3] py-24">
 

      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-5">
 

        <div className="max-w-3xl mx-auto text-center">

          <span className="uppercase tracking-[5px] text-[#D4AF37] text-sm font-semibold">

            Simple Booking Process

          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight">

            Your Wellness Journey
            <br />
            Starts Here

          </h2>

          <p className="mt-6 text-gray-600 leading-8">

            We've made your spa experience effortless. From booking your
            appointment to leaving completely refreshed, every step is carefully
            designed for comfort and luxury.

          </p>

        </div>
 

        <div className="relative mt-24">
 

          <div className="hidden lg:block absolute top-16 left-0 w-full h-0.75 bg-linear-to-r from-[#D4AF37]/20 via-[#D4AF37] to-[#D4AF37]/20 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
            {process.map((item) => (

              <article key={item.id} className=" group relative flex flex-col  h-full rounded-[30px] bg-white px-8 pt-14 pb-10 shadow-lg transition-all
              duration-500 hover:-translate-y-4  hover:shadow-2xl border border-transparent  hover:border-[#D4AF37]/40 " >


                <span className=" absolute  -top-7 left-1/2  -translate-x-1/2  flex h-14 w-14 items-center justify-center
                rounded-full  bg-[#D4AF37] text-lg font-bold  text-white shadow-xl " >
                  {item.id}
                </span>


                <div className="  mx-auto  flex h-20  w-20 items-center justify-center rounded-full  bg-[#FFF8E8]
                text-4xl  text-[#D4AF37] transition-all  duration-500 group-hover:rotate-12 group-hover:scale-110  " >
                  {item.icon}
                </div>


                <h3 className="mt-8 text-center text-2xl font-bold text-[#1A1A1A]">

                  {item.title}

                </h3>


                <p className="mt-5 text-center leading-8 text-gray-600 grow">

                  {item.description}

                </p>


                <div className="mt-8 flex justify-center">

                  <span className=" rounded-full
                  bg-[#FAF5EA] px-5 py-2 text-xs  font-semibold uppercase tracking-[3px]  text-[#D4AF37] " >
                    Premium Care
                  </span>

                </div>

              </article>

            ))}

          </div>

        </div>

        <div className="mt-24">

          <div className=" relative  overflow-hidden rounded-[40px] bg-[#1A1A1A]  px-8 py-14 lg:px-16 text-center " >


            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[100px]" />

            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[100px]" />

            <div className="relative z-10 max-w-3xl mx-auto">

              <span className="uppercase tracking-[5px] text-[#D4AF37] text-sm font-semibold">

                Luxury Wellness Awaits

              </span>

              <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-white leading-tight">

                Ready To Experience
                <br />
                Premium Spa Therapy?

              </h2>

              <p className="mt-6 text-gray-300 leading-8">

                Let our certified therapists help you relax, recharge and
                restore your body with luxurious massage treatments designed
                especially for you.

              </p>


              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

                <Link to="/book-now" className="  rounded-full  bg-[#D4AF37] px-9
                  py-4 font-semibold  text-white transition-all duration-300 hover:scale-105  hover:bg-[#bf8d00] " >
                  Book Appointment
                </Link>

                <Link to="/contact" className="  rounded-full border
                  border-[#D4AF37]  px-9 py-4 font-semibold  text-[#D4AF37]  transition-all duration-300  hover:bg-[#D4AF37]  hover:text-white  " >
                  Contact Us
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TreatmentProcess;