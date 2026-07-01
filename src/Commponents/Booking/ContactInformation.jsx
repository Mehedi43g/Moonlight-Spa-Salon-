import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa";

const ContactInformation = () => {
  return (
    <div className="rounded-[35px] border border-[#EFE7D8] bg-[#FFFDF9] p-8 lg:p-12 shadow-md hover:shadow-xl transition duration-500 h-full flex flex-col justify-between">
      
      {/* Block 1: Contact details */}
      <div>
        <h3 className="text-2xl font-bold text-[#1A1410] font-poppins mb-6">
          Salon Contact & Info
        </h3>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF5DB] text-[#D4AF37] text-xl shrink-0">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-[15px]">Our Address</h4>
              <p className="text-gray-600 text-sm mt-1 leading-6">
                House 45, Road 11, Banani<br />
                Dhaka - 1213, Bangladesh
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF5DB] text-[#D4AF37] text-xl shrink-0">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-[15px]">Call & WhatsApp</h4>
              <p className="text-gray-600 text-sm mt-1">
                +880 1540-097587
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF5DB] text-[#D4AF37] text-xl shrink-0">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-[15px]">Email Address</h4>
              <p className="text-gray-600 text-sm mt-1">
                info@moonlightspa.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF5DB] text-[#D4AF37] text-xl shrink-0">
              <FaClock />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-[15px]">Operating Hours</h4>
              <p className="text-gray-600 text-sm mt-1 leading-6">
                Mon - Sun: 10:00 AM - 10:00 PM<br />
                (Including Public Holidays)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Block 2: Trust points */}
      <div className="mt-10 border-t border-[#EFE7D8] pt-8">
        <h4 className="font-bold text-gray-800 text-[16px] mb-4">
          Why Book With Us?
        </h4>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <FaCheckCircle className="text-[#D4AF37] shrink-0" />
            <span className="text-gray-700 text-sm font-semibold">100% Certified Female Therapists</span>
          </li>
          <li className="flex items-center gap-3">
            <FaCheckCircle className="text-[#D4AF37] shrink-0" />
            <span className="text-gray-700 text-sm font-semibold">Private, Soundproof Luxury Rooms</span>
          </li>
          <li className="flex items-center gap-3">
            <FaCheckCircle className="text-[#D4AF37] shrink-0" />
            <span className="text-gray-700 text-sm font-semibold">Sanitized Robes, Towels & Linens</span>
          </li>
          <li className="flex items-center gap-3">
            <FaCheckCircle className="text-[#D4AF37] shrink-0" />
            <span className="text-gray-700 text-sm font-semibold">Premium Imported Aromatic Oils</span>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default ContactInformation;
