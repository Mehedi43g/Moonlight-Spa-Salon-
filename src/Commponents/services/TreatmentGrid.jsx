import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaSpa,
  FaHotTub,
  FaHands,
  FaRegClock,
} from "react-icons/fa";

const treatments = [
  {
    id: 1,
    title: "Hot Oil Massage",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    icon: <FaHotTub />,
    duration: "60-120 Minutes",
    price: "From ৳2,500",
    category: "Massage",
    slug: "/services/hot-oil-massage",
    description:
      "Warm aromatic oils combined with gentle pressure to release deep muscle tension and improve circulation.",
  },

  {
    id: 2,
    title: "Aromatherapy",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
    icon: <FaLeaf />,
    duration: "60-120 Minutes",
    price: "From ৳2,800",
    category: "Wellness",
    slug: "/services/aromatherapy",
    description:
      "Essential oil therapy designed to calm the nervous system and restore emotional balance.",
  },

  {
    id: 3,
    title: "Deep Tissue Massage",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    icon: <FaHands />,
    duration: "90-120 Minutes",
    price: "From ৳3,500",
    category: "Massage",
    slug: "/services/deep-tissue",
    description:
      "Target stubborn muscle knots, chronic pain, and improve mobility with focused pressure therapy.",
  },

  {
    id: 4,
    title: "Thai Massage",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    icon: <FaSpa />,
    duration: "90 Minutes",
    price: "From ৳3,200",
    category: "Massage",
    slug: "/services/thai-massage",
    description:
      "Traditional stretching techniques to improve flexibility, posture and body energy.",
  },
];
const TreatmentGrid = () => {
  return (
    <section className="py-24 bg-[#F9F5EF]">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[5px] text-[#C9A227] text-sm font-semibold">
            Premium Spa Collection
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#1C1C1C] leading-tight">

            Signature Spa Treatments

          </h2>

          <p className="mt-6 text-gray-600 leading-8">

            Discover our carefully selected luxury spa treatments,
            designed to restore your body, relax your mind,
            and elevate your wellness journey.

          </p>

        </div>
 

        <div className="mt-16 flex flex-col lg:flex-row gap-5 justify-between">

          <input  type="text" placeholder="Search treatment..."  className=" w-full lg:w-80 rounded-full border
            border-[#D4AF37]/30  bg-white px-6 py-4  outline-none  focus:border-[#D4AF37]"/>

          <div className="flex flex-wrap gap-3">

            <button className="px-6 py-3 rounded-full bg-[#D4AF37] text-white">
              All
            </button>

            <button className="px-6 py-3 rounded-full border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition">
              Massage
            </button>

            <button className="px-6 py-3 rounded-full border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition">
              Wellness
            </button>

            <button className="px-6 py-3 rounded-full border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition">
              Facial
            </button>

          </div>

        </div> 

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">

          {treatments.map((item) => (

            <article
              key={item.id}
              className="group overflow-hidden rounded-[30px] bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
 

              <div className="relative overflow-hidden">

                <img src={item.image} alt={item.title} loading="lazy"  className="h-65 w-full object-cover duration-700 group-hover:scale-110" />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute top-5 left-5 bg-[#D4AF37] text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg">
                  {item.icon}
                </div>

              </div>
 
 

<div className="flex flex-col p-6 h-90">
 

  <span className="inline-block w-fit rounded-full bg-[#FFF5DB] px-4 py-1 text-xs font-semibold text-[#B88B00]">
    {item.category}
  </span>
 
  <h3 className="mt-4 text-2xl font-bold text-[#222] min-h-16 flex items-center">
    {item.title}
  </h3>
 
  <p className="mt-3 text-gray-600 leading-7 min-h-21">
    {item.description}
  </p>
 

  <div className="mt-5 flex items-center justify-between">

    <div className="flex items-center gap-2 text-sm text-gray-600">

      <FaRegClock className="text-[#D4AF37]" />

      <span>{item.duration}</span>

    </div>

    <span className="text-lg font-bold text-[#D4AF37]">
      {item.price}
    </span>

  </div>
 

  <div className="mt-auto pt-6">

    <Link  to={item.slug} className=" flex h-12  w-full items-center justify-center rounded-full
      bg-[#1A1410]  text-white font-semibold transition-all duration-300  hover:bg-[#D4AF37]  hover:text-black " >
      View Treatment
    </Link>

  </div>

</div>

            </article>

          ))}

        </div>
      </div>
    </section>
  );

};

export default TreatmentGrid;
