import Container from "./Container";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import {
  FaLocationDot,
  FaArrowUp,
} from "react-icons/fa6";

const Footer = () => {
  const WHATSAPP_LINK = "https://wa.me/8801540097587";
  return (
    <footer className="relative overflow-hidden bg-[#0F0C09] text-white">
      
      <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl"></div>

      <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl"></div>

      <Container>

        <div className="relative z-10 grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-5">
          
          <div className="lg:col-span-2">

            <span className="uppercase tracking-[5px] text-sm text-[#D4AF37] font-semibold">
              Premium Wellness
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight">
              Moonlight
              <br />
              Spa & Salon
            </h2>

            <p className="mt-6 max-w-md leading-8 text-gray-400">
              Experience premium spa therapies designed to relax your body,
              refresh your mind, and restore your natural balance.
              Every treatment is carefully crafted to provide a luxurious,
              peaceful, and unforgettable wellness journey.
            </p>


            <div className="mt-8 flex gap-4">

              <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/30
               bg-white/5 transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
              >
                <FaFacebookF />
              </a>

              <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/30
                 bg-white/5 transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
              >
                <FaInstagram />
              </a>

              <a
  href={WHATSAPP_LINK}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/30
  bg-white/5 transition-all duration-300 hover:bg-[#25D366] hover:text-white hover:scale-110"
>
  <FaWhatsapp size={20} />
</a>

            </div>

          </div>

          <div>

            <h3 className="text-2xl font-bold text-[#D4AF37]">
              Quick Links
            </h3>

            <nav className="mt-6">

              <ul className="space-y-4 text-gray-300">

                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/services">Services</Link>
                </li>

                <li>
                  <Link to="/packages">Packages</Link>
                </li>

                <li>
                  <Link to="/about">About Us</Link>
                </li>

                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>

                <li>
                  <Link to="/blog">Blog</Link>
                </li>

                <li>
                  <Link to="/contact">Contact</Link>
                </li>

              </ul>

            </nav>

          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#D4AF37]">
              Our Services
            </h3>
            <nav className="mt-6">
              <ul className="space-y-4 text-gray-300">

                <li>
                  <Link to="/services/hot-oil-massage" className="transition hover:text-[#D4AF37]" >
                    Hot Oil Massage
                  </Link>
                </li>

                <li>
                  <Link to="/services/aromatherapy" className="transition hover:text-[#D4AF37]" >
                    Aromatherapy Massage
                  </Link>
                </li>

                <li>
                  <Link to="/services/deep-tissue" className="transition hover:text-[#D4AF37]" >
                    Deep Tissue Massage
                  </Link>
                </li>

                <li>
                  <Link to="/services/thai-massage" className="transition hover:text-[#D4AF37]" >
                    Thai Massage
                  </Link>
                </li>

                <li>
                  <Link to="/services/facial-treatment" className="transition hover:text-[#D4AF37]" >
                    Facial Treatment
                  </Link>
                </li>

                <li>
                  <Link to="/services/body-scrub" className="transition hover:text-[#D4AF37]" >
                    Body Scrub
                  </Link>
                </li>

                <li>
                  <Link to="/services/foot-massage" className="transition hover:text-[#D4AF37]">
                    Foot Massage
                  </Link>
                </li>

              </ul>

            </nav>

          </div> 
          <div>

            <h3 className="text-2xl font-bold text-[#D4AF37]">
              Contact Us
            </h3>

            <address className="mt-6 not-italic space-y-5 text-gray-300">

              <div className="flex items-start gap-4">

                <div className="mt-1 text-[#D4AF37]">
                  <FaLocationDot />
                </div>

                <p> House 00, Road 00, <br /> Gulshan, Dhaka, Bangladesh </p>

              </div>

              <a href="tel:+8801700000000"
                className="flex items-center gap-4 transition hover:text-[#D4AF37]">
                <FaPhoneAlt className="text-[#D4AF37]" />

                +880 1700-000000
              </a>

              <a
                href="mailto:info@moonlightspa.com"
                className="flex items-center gap-4 break-all transition hover:text-[#D4AF37]">
                <FaEnvelope className="text-[#D4AF37]" />

                info@moonlightspa.com
              </a>

            </address> 

            <div className="mt-10">

              <h4 className="font-semibold text-white">
                Join Our Newsletter
              </h4>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                Receive exclusive spa offers, wellness tips and seasonal
                promotions directly in your inbox.
              </p>

              <form className="mt-6"> 
                <div className="overflow-hidden rounded-full border border-[#D4AF37]/30 bg-white"> 
                  <input
                    type="email"  placeholder="Enter your email address"  className="w-full bg-transparent px-6 py-4 text-black outline-none"  /> 
                </div>

                <button type="submit" className=" mt-4 w-full rounded-full bg-[#D4AF37] py-4 font-semibold  text-black
                  transition duration-300 hover:bg-white ">
                  Subscribe Now
                </button>

              </form>

            </div>

          </div>
                  </div>
 

        <div className="border-t border-[#D4AF37]/20 py-8">

          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row"> 

            <p className="text-center text-sm leading-7 text-gray-400">

              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-[#D4AF37]">
                Moonlight Spa & Salon
              </span>
              . All Rights Reserved.

              <br className="lg:hidden" />

              Crafted with care for a premium wellness experience.

            </p> 

            <nav>

              <ul className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">

                <li>
                  <Link to="/privacy-policy" className="transition hover:text-[#D4AF37]" >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link to="/terms-and-conditions" className="transition hover:text-[#D4AF37]" >
                    Terms & Conditions
                  </Link>
                </li>

                <li>
                  <Link to="/cookie-policy" className="transition hover:text-[#D4AF37]"> Cookie Policy </Link>
                </li>

                <li>
                  <Link to="/sitemap"className="transition hover:text-[#D4AF37]" >
                    Sitemap
                  </Link>
                </li>

              </ul>

            </nav>
            
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth",})} aria-label="Back to Top"
              className=" flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37] text-black
               shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white">
              <FaArrowUp />
            </button>

          </div>

        </div>

      </Container>

    </footer>
  );
};

export default Footer;