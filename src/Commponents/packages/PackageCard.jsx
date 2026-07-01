import { Link } from "react-router-dom";
import { FaCheckCircle, FaClock, FaCalendarAlt } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { useBooking } from "../../context/BookingContext";

const PackageCard = ({ item }) => {
  const { openBookingModal } = useBooking();

  return (
    <article
      className="group flex flex-col overflow-hidden rounded-[35px] bg-white border border-[#EEE5D4] shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
    >
      {/* Image Block */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"></div>

        {/* Badge */}
        <span className="absolute top-5 left-5 rounded-full bg-[#D4AF37] px-5 py-2 text-xs font-bold uppercase tracking-wider text-black shadow-lg">
          {item.badge}
        </span>

        {/* Duration */}
        <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 text-sm font-semibold text-[#1A1410] shadow-xl">
          <FaClock className="text-[#D4AF37]" />
          <span>{item.duration}</span>
        </div>
      </div>

      {/* Content Block */}
      <div className="flex flex-col flex-1 p-8">
        <h3 className="text-[26px] font-bold text-[#1A1410] leading-tight">
          {item.title}
        </h3>
        
        <p className="mt-4 leading-7 text-gray-600">
          {item.description}
        </p>

        {/* Included Services Checklist */}
        <div className="mt-6 border-t border-[#EFE7D8] pt-6 flex-1">
          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
            Included Treatments
          </h4>
          <ul className="space-y-3">
            {item.services.map((service, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <FaCheckCircle className="text-[#D4AF37] shrink-0" />
                <span className="text-gray-700 text-[15px] font-medium">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing Block */}
        <div className="mt-8 rounded-2xl bg-[#FFF8E7] border border-[#ECDDA9] p-5">
          <span className="uppercase tracking-[3px] text-xs font-semibold text-gray-500 block">
            Package Value Price
          </span>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-extrabold text-[#D4AF37]">
              {item.price}
            </span>
            <span className="text-sm text-gray-500 font-medium">
              / per person
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-3">
          <button
            onClick={openBookingModal}
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#D4AF37] hover:bg-[#1A1410] hover:text-white py-4 font-bold text-black duration-300 shadow-md cursor-pointer"
          >
            <span>Book Appointment</span>
            <MdArrowOutward className="text-xl" />
          </button>

          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 rounded-2xl border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black py-4 font-semibold text-[#D4AF37] duration-300 cursor-pointer"
          >
            <FaCalendarAlt className="text-sm" />
            <span>Customize Booking</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PackageCard;
