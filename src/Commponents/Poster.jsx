import React from 'react'
import Container from './Container'
import { FaCheckCircle } from 'react-icons/fa'
import poster from '../assets/poster1.jpg'
import { Link } from 'react-router-dom'

const Poster = () => {
  return (
    <section className="bg-[#f3e8db] py-16">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-6">

          <div className="w-full lg:w-4/12 text-center lg:text-left">
            <h3 className="text-[28px] md:text-[35px] text-black font-bold mb-4 font-poppins">
              Why Choose Us?
            </h3>

            <p className="text-[#1A1410] font-poppins text-[14px] md:text-[16px] pb-5">
              Lorem ipsum dolor sit amet consectetur
              <br className="hidden md:block" />
              adipisicing elit. Voluptas, voluptate.
            </p>

            <ul className="flex flex-col gap-3">
              <li className="flex items-center justify-center lg:justify-start gap-2 text-[#1A1410] font-poppins text-[15px] md:text-[16px]">
                <FaCheckCircle className="text-[#D4AF37]" />
                Professional Therapist
              </li>

              <li className="flex items-center justify-center lg:justify-start gap-2 text-[#1A1410] font-poppins text-[15px] md:text-[16px]">
                <FaCheckCircle className="text-[#D4AF37]" />
                Premium Quality Oils
              </li>

              <li className="flex items-center justify-center lg:justify-start gap-2 text-[#1A1410] font-poppins text-[15px] md:text-[16px]">
                <FaCheckCircle className="text-[#D4AF37]" />
                Clean & Relaxing Environment
              </li>

              <li className="flex items-center justify-center lg:justify-start gap-2 text-[#1A1410] font-poppins text-[15px] md:text-[16px]">
                <FaCheckCircle className="text-[#D4AF37]" />
                Customer Satisfaction
              </li>
            </ul>

            <div className="pt-5 flex justify-center lg:justify-start">
              <Link  to="/about" className="text-[#F8F3ED] font-poppins text-[15px] md:text-[16px] bg-[#D4AF37] rounded-[10px] py-3 px-6 cursor-pointer text-center w-full sm:w-[70%] lg:w-[60%]">
                Learn More About Us
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-6/12">
            <img
              className="w-full h-62.5 md:h-87.5 lg:h-70 xl:h-87.5 object-cover rounded-[10px]"
              src={poster}
              alt=""
            />
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Poster