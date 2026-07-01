import { Link } from "react-router-dom";
import {
  FaCrown,
  FaArrowRight,
  FaCheckCircle,
  FaFire,
} from "react-icons/fa";
import serviceDetails from "../../data/serviceDetails";

const PopularPackages = () => {
  // Dynamically pull images and titles from serviceDetails to construct packages
  const packages = [
    {
      id: 1,
      title: "Luxury Relax Package",
      image: serviceDetails.find(s => s.slug === "hot-oil-massage")?.hero?.image || "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&q=80",
      price: "৳4,999",
      duration: "2 Hours",
      badge: "Best Seller",
      features: [
        serviceDetails.find(s => s.slug === "hot-oil-massage")?.hero?.title || "Hot Oil Massage",
        serviceDetails.find(s => s.slug === "aroma-oil-massage")?.hero?.title || "Aroma Oil Massage",
        "Herbal Steam Bath",
        "Refreshing Welcome Drink",
      ],
      slug: "/packages/luxury-relax",
    },
    {
      id: 2,
      title: "Couple Romantic Spa",
      image: serviceDetails.find(s => s.slug === "b2b-massage")?.hero?.image || "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80",
      price: "৳8,500",
      duration: "3 Hours",
      badge: "Premium",
      features: [
        "Couple Treatment Session",
        serviceDetails.find(s => s.slug === "b2b-massage")?.hero?.title || "B2B Massage",
        "Private VIP Rose Suite",
        "Sparkling Wine & Fruits",
      ],
      slug: "/packages/couple-spa",
    },
    {
      id: 3,
      title: "Royal Wellness Special",
      image: serviceDetails.find(s => s.slug === "four-hand-massage")?.hero?.image || "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200&q=80",
      price: "৳11,999",
      duration: "2.5 Hours",
      badge: "Royal Luxury",
      features: [
        serviceDetails.find(s => s.slug === "four-hand-massage")?.hero?.title || "Four Hand Massage",
        serviceDetails.find(s => s.slug === "full-body-massage")?.hero?.title || "Full Body Massage",
        serviceDetails.find(s => s.slug === "foot-massage")?.hero?.title || "Foot Massage",
        "Complimentary Steam & Sauna",
      ],
      slug: "/packages/royal-wellness",
    },
  ];

  return (
    <section className="bg-[#FFFDF9] py-24">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[5px] text-[#C8A24C] text-sm font-semibold">
            Premium Packages
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#1A1A1A]">
            Our Most Popular Spa Packages
          </h2>
          <p className="mt-6 text-gray-600 leading-8">
            Carefully designed luxury wellness experiences combining our
            signature spa treatments into unforgettable premium packages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
          {packages.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-[30px] bg-white border border-[#E9DFC7] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-70 w-full object-cover duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

                <div className="absolute top-5 left-5 rounded-full bg-[#D4AF37] px-5 py-2 text-xs font-bold uppercase tracking-wider text-black shadow-lg">
                  {item.badge}
                </div>

                <div className="absolute top-5 right-5 w-14 h-14 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-[#D4AF37] text-2xl shadow-xl">
                  <FaCrown />
                </div>

                <div className="absolute bottom-5 left-5 rounded-2xl bg-white px-5 py-3 shadow-xl">
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Starting From
                  </p>
                  <h4 className="text-2xl font-bold text-[#D4AF37]">
                    {item.price}
                  </h4>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-7">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-[#222]">
                    {item.title}
                  </h3>
                  <span className="rounded-full bg-[#FFF7E5] px-4 py-2 text-xs font-semibold text-[#B68A00]">
                    {item.duration}
                  </span>
                </div>

                <div className="mt-8 space-y-4">
                  {item.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <FaCheckCircle className="text-[#D4AF37] shrink-0" />
                      <span className="text-gray-600">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-2 text-[#C89C2B]">
                  <FaFire />
                  <span className="font-semibold">
                    Limited Time Luxury Offer
                  </span>
                </div>

                <div className="mt-auto pt-10 flex flex-col gap-4">
                  <Link
                    to="/book-now"
                    className="group/btn flex items-center justify-center gap-2 rounded-full bg-[#1A1410] py-4 font-semibold text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
                  >
                    Book Package
                    <FaArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>

                  <Link
                    to="/packages"
                    className="flex items-center justify-center rounded-full border-2 border-[#D4AF37] py-4 font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 rounded-[40px] bg-[#1A1410] px-8 py-16 text-center">
          <span className="uppercase tracking-[5px] text-[#D4AF37] text-sm font-semibold">
            Exclusive Membership
          </span>
          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-white">
            Upgrade Your Wellness Journey
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-gray-300 leading-8">
            Become a premium member and enjoy exclusive discounts,
            complimentary treatments, priority booking and luxury
            wellness experiences throughout the year.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              to="/book-now"
              className="rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-white"
            >
              Book Your Package
            </Link>
            <Link
              to="/packages"
              className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              View All Packages
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PopularPackages;