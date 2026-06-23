import React from 'react'
import Container from './Container'
import { FaCheckCircle } from 'react-icons/fa'
import poster from '../assets/poster1.jpg'
const Poster = () => {
  return (
    <section className="bg-[#f3e8db]  py-16">
        <Container>
          <div className="flex items-center justify-between gap-6">
              <div className="w-4/12">
                <h3 className="text-[30px] text-black font-bold mb-4 font-poppins">Why Choose Us?</h3>
                <p className="text-[#1A1410] font-poppins text-[16px] pb-3">
                    Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Voluptas, voluptate.
                </p>
                <ul>
                    <li className="flex items-center gap-2 text-[#1A1410] font-poppins text-[16px] "><FaCheckCircle className="text-[#D4AF37]" /> Professional Therapist</li>
                    <li className="flex items-center gap-2 text-[#1A1410] font-poppins text-[16px] "><FaCheckCircle className="text-[#D4AF37]" />Premium Quality Oils</li>
                    <li className="flex items-center gap-2 text-[#1A1410] font-poppins text-[16px] "><FaCheckCircle className="text-[#D4AF37]" />Clean & Relaxing Environment</li>
                    <li className="flex items-center gap-2 text-[#1A1410] font-poppins text-[16px] "><FaCheckCircle className="text-[#D4AF37]" />Customer Satisfaction</li>
                </ul>
                <div className="pt-3">

                <p className="text-[#F8F3ED] font-poppins text-[16px] bg-[#D4AF37] rounded-[10px] py-2 cursor-pointer text-center w-[60%]">
                    Learn More About Us
                </p>
                </div>
            </div>
            <div className="w-6/12">
                <img className="w-full h-70 rounded-[10px]" src={poster} alt="" />
            </div>
          </div>
        </Container>
    </section>
  )
}

export default Poster