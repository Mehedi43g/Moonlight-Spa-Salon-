import { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";
import { useBooking } from "../context/BookingContext";
import {
  FaBars,
  FaTimes,
  FaSpa,
} from "react-icons/fa";

const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Packages",
    path: "/packages",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openBookingModal } = useBooking();

  return (
    <> 
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300
        ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      ></div> 
      <nav className="fixed top-0 left-0 w-full h-20 z-50 bg-[#1a141086] backdrop-blur-md shadow">

        <Container>

          <div className="h-20 flex items-center justify-between">
 

            <NavLink
              to="/"
              className="flex items-center gap-2"
            >
              <FaSpa
                size={26}
                className="text-[#D4AF37]"
              />

              <h2 className="text-white text-[22px] font-bold">
                Moonlight Spa
              </h2>
            </NavLink>
 

            <ul className="hidden lg:flex items-center gap-8 text-white font-medium">

              {menuItems.map((item) => (
                <li key={item.path}>

                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative pb-2 transition-all duration-300
                      ${
                        isActive
                          ? "text-[#D4AF37]"
                          : "hover:text-[#D4AF37]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.name}

                        <span
                          className={`absolute left-0 -bottom-1 h-0.5 bg-[#D4AF37]
                          transition-all duration-300
                          ${
                            isActive
                              ? "w-full"
                              : "w-0"
                          }`}
                        ></span>
                      </>
                    )}
                  </NavLink>

                </li>
              ))}

              <button onClick={openBookingModal} className="bg-[#D4AF37] text-black px-6 py-2 rounded-full font-semibold hover:scale-105 duration-300 cursor-pointer">
                Book Now
                </button>

            </ul> 

            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-white"
            >
              <FaBars size={26} />
            </button>

          </div>

        </Container>

      </nav> 

      <div
        className={`fixed top-0 right-0 h-screen
        w-72.5
        bg-[#1a1410]
        z-50
        transition-all
        duration-500
        ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* Drawer Header */}

        <div className="flex items-center justify-between p-6 border-b border-[#D4AF37]/20">

          <h2 className="text-white font-bold text-xl">
            Moonlight Spa
          </h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-white"
          >
            <FaTimes size={24} />
          </button>

        </div> 

        <div className="flex flex-col p-6 gap-2">

          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `relative px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-[#D4AF37] text-black font-semibold"
                    : "text-white hover:bg-[#2d241d] hover:text-[#D4AF37]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Book Button */}

          <button
            onClick={() => setMenuOpen(false)}
            className="mt-6 w-full bg-[#D4AF37] text-black py-3 rounded-full font-semibold hover:scale-[1.02] transition-all duration-300"
          >
            Book Now
          </button>

        </div>

      </div>

    </>
  );
};

export default Navbar;