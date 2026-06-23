import React from 'react'
import Container from './Container'
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const Footer = () => {
  return (
    <section className="bg-[#0a0a09fa] text-white py-5">
        <Container>
            <div className="flex justify-between gap-3">

                <div className="w-2/12">
                    <h2 className='text-[24px] font-poppins font-semibold'>Moonlight <br /> Spa & Salon</h2>
                    <p>Your perfect escape from the stress of everyday life.</p>
                    <div className="flex gap-3 py-3">
                        <FaFacebook />
                        <FaInstagram />
                        <FaWhatsapp />
                    </div>
                </div>
                 <div className="w-2/12">
                    <h2 className='text-[24px] font-poppins font-semibold text-[#D4AF37]'>Quick Link</h2>
                    <div className="flex gap-3 py-3">
                         <ul>
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
                <div className="w-2/12">
                    <h2 className='text-[24px] font-poppins font-semibold text-[#D4AF37]'>Our Services</h2>
                    <div className="flex gap-3 py-3">
                         <ul>
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
                <div className="w-2/12">
                    <h2 className='text-[24px] font-poppins font-semibold text-[#D4AF37]'>Contact Us </h2>
                    <div className="flex gap-3 py-3">
                          <ul className='text-[16px] flex flex-col gap-3'>
                            <li className='flex items-center gap-2'>
                                 <FaLocationDot />
                                  Hot Oil Massage</li>
                            <li className='flex items-center gap-2'>
                                 <FaPhone />
                                  +1 (123) 456-7890</li>
                            <li className='flex items-center gap-2'>
                                 <FaEnvelope />
                                  info@moonlightspa.com</li>
                         </ul>
                    </div>
                </div>
                <div className="w-2/12">
                    <h2 className='text-[24px] font-poppins font-semibold text-[#D4AF37]'>Newsietter </h2>
                    <div className="flex gap-3 py-3">
                          <ul>
                            <li> Subescribe to get special offers and weilness tips</li>
                           
                         </ul>
                    </div>
                         <form className="flex">
                            <input type="email" placeholder='Enter your email' className='p-2 rounded-l-lg text-black '
                             className='border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black p-2 rounded-l-[5px]' />
                             <button type="submit" className='bg-[#D4AF37] cursor-pointer text-white p-2 rounded-r-lg hover:bg-[#D4AF37cc] transition-colors duration-300'>Subscribe</button>
                         </form>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Footer