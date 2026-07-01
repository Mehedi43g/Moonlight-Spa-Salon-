import Container from "../Container";
import { FaCrown, FaCheck, FaTimes } from "react-icons/fa";
import { GiLotus } from "react-icons/gi";

const PackageComparison = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <GiLotus className="mx-auto text-5xl text-[#D4AF37]" />
          <span className="uppercase tracking-[5px] text-[#D4AF37] text-sm font-semibold mt-5 block">
            Compare Options
          </span>
          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-[#1A1410] leading-tight">
            Which Package Is Right For You?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Compare pricing, duration, room types, and key features to select the perfect spa package for your needs.
          </p>
        </div>

        {/* Comparison Table wrapper with horizontal scroll for responsiveness */}
        <div className="overflow-x-auto rounded-[35px] border border-[#EEE5D4] shadow-lg max-w-6xl mx-auto bg-white">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[#1A1410] text-white">
                <th className="p-6 text-lg font-bold">Features & Details</th>
                <th className="p-6 text-lg font-bold text-center">Relax Escape</th>
                <th className="p-6 text-lg font-bold text-center text-[#D4AF37] relative">
                  Couple Harmony
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#D4AF37] text-black text-[9px] px-3 py-1 font-bold tracking-widest uppercase">
                    Signature
                  </span>
                </th>
                <th className="p-6 text-lg font-bold text-center">Royal Wellness</th>
                <th className="p-6 text-lg font-bold text-center">Ultimate Spa</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EFE7D8] text-gray-700">
              
              {/* Price */}
              <tr className="hover:bg-[#FCF9F3] transition duration-300">
                <td className="p-6 font-bold text-black">Package Price</td>
                <td className="p-6 text-center font-extrabold text-[#D4AF37] text-xl">৳2,999</td>
                <td className="p-6 text-center font-extrabold text-[#D4AF37] text-xl bg-[#FFFDF9]">৳5,999</td>
                <td className="p-6 text-center font-extrabold text-[#D4AF37] text-xl">৳4,499</td>
                <td className="p-6 text-center font-extrabold text-[#D4AF37] text-xl">৳6,999</td>
              </tr>

              {/* Duration */}
              <tr className="hover:bg-[#FCF9F3] transition duration-300">
                <td className="p-6 font-bold text-black">Duration</td>
                <td className="p-6 text-center font-medium">90 Minutes</td>
                <td className="p-6 text-center font-medium bg-[#FFFDF9]">120 Minutes</td>
                <td className="p-6 text-center font-medium">150 Minutes</td>
                <td className="p-6 text-center font-medium">180 Minutes</td>
              </tr>

              {/* Room Type */}
              <tr className="hover:bg-[#FCF9F3] transition duration-300">
                <td className="p-6 font-bold text-black">Private Spa Room</td>
                <td className="p-6 text-center">Standard Luxury Room</td>
                <td className="p-6 text-center bg-[#FFFDF9] font-bold text-black">Private VIP Couple Suite</td>
                <td className="p-6 text-center">Deluxe Treatment Room</td>
                <td className="p-6 text-center font-bold text-black">Executive VIP Suite</td>
              </tr>

              {/* Refreshments */}
              <tr className="hover:bg-[#FCF9F3] transition duration-300">
                <td className="p-6 font-bold text-black">Refreshments</td>
                <td className="p-6 text-center">Welcome Drink</td>
                <td className="p-6 text-center bg-[#FFFDF9]">Sparkling Juice & Fruit Platter</td>
                <td className="p-6 text-center">Herbal Tea & Snacks</td>
                <td className="p-6 text-center">Premium Tea, Fruits & Snacks</td>
              </tr>

              {/* Included Services Count */}
              <tr className="hover:bg-[#FCF9F3] transition duration-300">
                <td className="p-6 font-bold text-black">Inclusions</td>
                <td className="p-6 text-center">4 Treatments</td>
                <td className="p-6 text-center bg-[#FFFDF9]">4 Premium Services</td>
                <td className="p-6 text-center">4 Signature Services</td>
                <td className="p-6 text-center">4 Advanced Treatments</td>
              </tr>

              {/* Steam & Sauna Access */}
              <tr className="hover:bg-[#FCF9F3] transition duration-300">
                <td className="p-6 font-bold text-black">Steam & Sauna</td>
                <td className="p-6 text-center flex justify-center mt-1"><FaCheck className="text-emerald-500" /></td>
                <td className="p-6 text-center bg-[#FFFDF9]"><FaCheck className="text-emerald-500 mx-auto" /></td>
                <td className="p-6 text-center flex justify-center mt-1"><FaTimes className="text-red-400" /></td>
                <td className="p-6 text-center"><FaCheck className="text-emerald-500 mx-auto" /></td>
              </tr>

              {/* Custom Consultation */}
              <tr className="hover:bg-[#FCF9F3] transition duration-300">
                <td className="p-6 font-bold text-black">Free Customization</td>
                <td className="p-6 text-center flex justify-center mt-1"><FaTimes className="text-red-400" /></td>
                <td className="p-6 text-center bg-[#FFFDF9]"><FaCheck className="text-emerald-500 mx-auto" /></td>
                <td className="p-6 text-center flex justify-center mt-1"><FaCheck className="text-emerald-500" /></td>
                <td className="p-6 text-center"><FaCheck className="text-emerald-500 mx-auto" /></td>
              </tr>

              {/* Ideal For */}
              <tr className="hover:bg-[#FCF9F3] transition duration-300">
                <td className="p-6 font-bold text-black">Best For</td>
                <td className="p-6 text-center text-sm font-medium text-gray-500">Quick Stress Relief & Relaxation</td>
                <td className="p-6 text-center text-sm font-semibold text-[#D4AF37] bg-[#FFFDF9]">Couples, Anniversaries & Romance</td>
                <td className="p-6 text-center text-sm font-medium text-gray-500">Body Rejuvenation & Muscle Relief</td>
                <td className="p-6 text-center text-sm font-medium text-gray-500">Ultimate Full-Body Recovery</td>
              </tr>

            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
};

export default PackageComparison;
