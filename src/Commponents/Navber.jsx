import Container from "./Container";
import {
  FaHome,
  FaSpa,
  FaGift,
  FaPhone,
} from "react-icons/fa";

const Navber = () => {
  return (
    <>
      <nav className="bg-[#1a141086] shadow fixed w-full h-20 top-0 left-0 z-50 backdrop-blur-sm">
        <Container>
          <div className="flex py-4 items-center justify-between font-poppins text-white">
            {/* Logo */}
            <div>
              <h2 className="text-[20px] font-bold">
                Moonlight Spa & Salon
              </h2>
            </div>

            {/* Desktop Menu */}
            <div>
              <div className="mx-auto justify-center items-center">
                <ul className="hidden lg:flex items-center gap-6 font-poppins text-[16px]">
                  <li className="cursor-pointer hover:text-[#D4AF37] transition-all">
                    Home
                  </li>
                  <li className="cursor-pointer hover:text-[#D4AF37] transition-all">
                    Services
                  </li>
                  <li className="cursor-pointer hover:text-[#D4AF37] transition-all">
                    Packages
                  </li>
                  <li className="cursor-pointer hover:text-[#D4AF37] transition-all">
                    About Us
                  </li>
                  <li className="cursor-pointer hover:text-[#D4AF37] transition-all">
                    Gallery
                  </li>
                  <li className="cursor-pointer hover:text-[#D4AF37] transition-all">
                    Blog
                  </li>
                  <li className="cursor-pointer hover:text-[#D4AF37] transition-all">
                    Contact
                  </li>

                  <a href="#">
                    <li className="bg-[#D4AF37] px-6 py-2 rounded-2xl cursor-pointer text-black font-semibold hover:scale-105 transition-all">
                      Book Now
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-[#1a1410] border-t border-[#D4AF37]/20 z-50 shadow-2xl">
        <ul className="grid grid-cols-4 py-3 text-white text-xs">
          <li className="flex flex-col items-center gap-1 text-[#D4AF37] cursor-pointer">
            <FaHome size={18} />
            <span>Home</span>
          </li>

          <li className="flex flex-col items-center gap-1 cursor-pointer">
            <FaSpa size={18} />
            <span>Services</span>
          </li>

          <li className="flex flex-col items-center gap-1 cursor-pointer">
            <FaGift size={18} />
            <span>Packages</span>
          </li>

          <li className="flex flex-col items-center gap-1 cursor-pointer">
            <FaPhone size={18} />
            <span>Contact</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navber;