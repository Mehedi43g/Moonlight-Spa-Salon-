import { FaStar, FaQuoteLeft, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const testimonials = [
  {
    id: 1,
    name: "Sarah Williams",
    role: "Verified Client",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "Absolutely the best spa experience I've ever had. The therapists were highly professional and the atmosphere was incredibly relaxing.",
  },

  {
    id: 2,
    name: "David Johnson",
    role: "Premium Member",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "Luxury from beginning to end. Everything was perfectly organized and the massage completely relieved my back pain.",
  },

  {
    id: 3,
    name: "Emily Brown",
    role: "Verified Client",
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    review:
      "Beautiful environment, friendly staff and outstanding service. I will definitely visit again with my family.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#F9F5EF] py-24">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[5px] text-[#C9A227] text-sm font-semibold">

            Client Testimonials

          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#1C1C1C]">

            What Our Clients Say

          </h2>

          <p className="mt-6 text-gray-600 leading-8">

            Thousands of guests trust our luxury spa treatments.
            Their satisfaction is our biggest achievement.

          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
                    {testimonials.map((item) => (

            <article  key={item.id} className=" group  relative
              overflow-hidden  rounded-[30px] border  border-[#E7D9B6]  bg-white p-8  shadow-md transition-all  duration-500 hover:-translate-y-3 hover:shadow-2xl " >
 
              <div
                className=" absolute right-0  top-0  h-28 w-28  rounded-full  bg-[#D4AF37]/10  blur-3xl  " ></div>
 

              <div className="  mb-8  flex  h-16  w-16  items-center  justify-center  rounded-full  bg-[#FFF6DF] text-3xl  text-[#D4AF37] shadow-lg " >
                <FaQuoteLeft />
              </div>
 

              <p
                className="
                min-h-37.5
                leading-8
                text-gray-600
                "
              >
                {item.review}
              </p>

              {/* Rating */}

              <div className="mt-8 flex gap-1">

                {[...Array(item.rating)].map((_, index) => (

                  <FaStar
                    key={index}
                    className="text-[#F5B301]"
                  />

                ))}

              </div>

              {/* Client */}

              <div  className=" mt-10  flex items-center  gap-4 border-t  border-[#EFE4CC] pt-6 " >

                <img  src={item.image} alt={item.name} loading="lazy"  className="
                  h-16 w-16 rounded-full object-cover ring-4 ring-[#FFF3CF] " />

                <div className="flex-1">

                  <h3 className="text-xl font-bold text-[#222]">
                    {item.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-2">

                    <FaCheckCircle className="text-[#D4AF37]" />

                    <span className="text-sm font-medium text-gray-500">
                      {item.role}
                    </span>

                  </div>

                </div>

              </div>

            </article>

          ))}
                  </div>
 

        <div className="mt-24 rounded-[35px] bg-[#1A1410] px-8 py-14 lg:px-16">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

            <div>
              <h3 className="text-4xl lg:text-5xl font-bold text-[#D4AF37]">
                15K+
              </h3>

              <p className="mt-3 text-gray-300">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-4xl lg:text-5xl font-bold text-[#D4AF37]">
                4.9★
              </h3>

              <p className="mt-3 text-gray-300">
                Average Rating
              </p>
            </div>

            <div>
              <h3 className="text-4xl lg:text-5xl font-bold text-[#D4AF37]">
                12+
              </h3>

              <p className="mt-3 text-gray-300">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl lg:text-5xl font-bold text-[#D4AF37]">
                100%
              </h3>

              <p className="mt-3 text-gray-300">
                Satisfaction
              </p>
            </div>

          </div>
 

          <div className="mt-14 text-center">

            <h3 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Experience Pure Relaxation?
            </h3>

            <p className="mt-5 max-w-2xl mx-auto text-gray-300 leading-8">
              Join thousands of satisfied guests and discover why our spa
              is one of the most trusted luxury wellness destinations.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <Link to="/book-now" className="  rounded-full  bg-[#D4AF37]  px-8  py-4  font-semibold
                text-black transition-all  duration-300  hover:scale-105  hover:bg-white  " >
                Book Appointment
              </Link>

              <Link to="/contact" className=" rounded-full  border-2  border-white
                px-8  py-4 font-semibold  text-white transition-all  duration-300  hover:bg-white  hover:text-black " >
                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;