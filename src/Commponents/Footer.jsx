import React from 'react'
import Container from './Container'
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const Footer = () => {
  return (
    <section className="bg-[#0a0a09fa] text-white py-10">
      <Container>
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between gap-8">

          <div className="w-full md:w-[48%] lg:w-2/12">
            <h2 className='text-[24px] font-poppins font-semibold'>
              Moonlight <br /> Spa & Salon
            </h2>

            <p className='mt-3 text-gray-300'>
              Your perfect escape from the stress of everyday life.
            </p>

            <div className="flex gap-4 py-4 text-xl">
              <FaFacebook className='cursor-pointer hover:text-[#D4AF37]' />
              <FaInstagram className='cursor-pointer hover:text-[#D4AF37]' />
              <FaWhatsapp className='cursor-pointer hover:text-[#D4AF37]' />
            </div>
          </div>

          <div className="w-full md:w-[48%] lg:w-2/12">
            <h2 className='text-[24px] font-poppins font-semibold text-[#D4AF37]'>
              Quick Link
            </h2>

            <div className="py-3">
              <ul className='flex flex-col gap-2'>
                <li>Home</li>
                <li>Services</li>
                <li>Packages</li>
                <li>About Us</li>
                <li>Gallery</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-[48%] lg:w-2/12">
            <h2 className='text-[24px] font-poppins font-semibold text-[#D4AF37]'>
              Our Services
            </h2>

            <div className="py-3">
              <ul className='flex flex-col gap-2'>
                <li>Hot Oil Massage</li>
                <li>B2B Massage</li>
                <li>Four-Handed Massage</li>
                <li>Six Hand Massage</li>
                <li>Dry Massage</li>
                <li>Deep Tissue Massage</li>
                <li>Thai Massage</li>
                <li>Foot Massage</li>
                <li>Full Body Massage ...</li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-[48%] lg:w-2/12">
            <h2 className='text-[24px] font-poppins font-semibold text-[#D4AF37]'>
              Contact Us
            </h2>

            <div className="py-3">
              <ul className='text-[16px] flex flex-col gap-4'>
                <li className='flex items-start gap-2'>
                  <FaLocationDot className='mt-1' />
                  Hot Oil Massage
                </li>

                <li className='flex items-center gap-2'>
                  <FaPhone />
                  +1 (123) 456-7890
                </li>

                <li className='flex items-center gap-2 break-all'>
                  <FaEnvelope />
                  info@moonlightspa.com
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-[48%] lg:w-2/12">
            <h2 className='text-[24px] font-poppins font-semibold text-[#D4AF37]'>
              Newsletter
            </h2>

            <div className="py-3">
              <ul>
                <li>
                  Subscribe to get special offers and wellness tips
                </li>
              </ul>
            </div>

            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder='Enter your email'
                className='border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-white text-black p-3 rounded-t-[5px] sm:rounded-l-[5px] sm:rounded-tr-none w-full'
              />

              <button
                type="submit"
                className='bg-[#D4AF37] cursor-pointer text-white p-3 rounded-b-[5px] sm:rounded-r-[5px] sm:rounded-bl-none hover:bg-[#D4AF37cc] transition-colors duration-300'
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Footer