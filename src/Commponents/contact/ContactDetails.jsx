import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaDirections } from "react-icons/fa";

const ContactDetails = () => {
  return (
    <div className="rounded-[35px] border border-[#EFE7D8] bg-[#FFFDF9] p-8 lg:p-12 shadow-md hover:shadow-xl transition duration-500 h-full flex flex-col justify-between space-y-8">
      
      <div>
        <h3 className="text-2xl font-bold text-[#1A1410] font-poppins mb-6">
          Location & Hours
        </h3>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF5DB] text-[#D4AF37] text-xl shrink-0">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-[15px]">Our Spa Location</h4>
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
              <h4 className="font-bold text-gray-800 text-[15px]">Call / Message Reception</h4>
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
              <h4 className="font-bold text-gray-800 text-[15px]">Direct Email Queries</h4>
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

      {/* Embedded Map Frame */}
      <div className="relative overflow-hidden rounded-[25px] border-2 border-[#EFE7D8] shadow-md flex-1 min-h-[220px]">
        <iframe
          title="Moonlight Spa Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1558231269584!2d90.40263657591343!3d23.795267687704153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c0c000001%3A0x6b9ef25bf923a1ff!2sRoad%2011%2C%20Banani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>

    </div>
  );
};

export default ContactDetails;
