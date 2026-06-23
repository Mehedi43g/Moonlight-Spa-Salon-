import React from 'react'
import Container from './Container'
import sp1 from '../assets/sp1.jpg'
import sp2 from '../assets/sp2.jpg'
import sp3 from '../assets/sp3.jpg'
import sp4 from '../assets/sp4.jpg'
const SpecialPackages = () => {
  return (
    <section className="bg-[#f8f1e9] py-10">
      <Container>
        <div className="">
          <h3 className="text-[#0a0a09] text-center font-poppins text-[24px]">Special Packages</h3>
          <div className="flex  gap-3">
            <div className="w-3/12 pt-3">
            <div className="bg-white rounded-[10px] shadow-xs">
              <a href="#">
                <img className="rounded-t-[10px] w-full h-30 object-cover " src={sp1} alt="product image" />
              </a>
              <div className="p-4">
                <div className="flex items-center space-x-3 ">
                   
                </div>
                <a href="#">
                  <h4 className="text-lg font-bold text-heading">Pelax Package</h4>
                  <p className="text-[16px] text-heading font-semibold tracking-tight">
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight
                  </p>
                </a>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-[20px] font-extrabold text-heading">৳1299</span>
                  <button type="button"
                    className="inline-flex items-center cursor-pointer text-white bg-[#D4AF37] rounded-lg px-5 py-2 focus:outline-none"> 
                    Book Now
                  </button>
                </div>
              </div>
            </div>

          </div>
          <div className="w-3/12 pt-3">
            <div className="bg-white rounded-[10px] shadow-xs">
              <a href="#">
                <img className="rounded-t-[10px] w-full h-30 object-cover " src={sp2} alt="product image" />
              </a>
              <div className="p-4">
                <div className="flex items-center space-x-3 ">
                   
                </div>
                <a href="#">
                  <h4 className="text-lg font-bold text-heading">Pelax Package</h4>
                  <p className="text-[16px] text-heading font-semibold tracking-tight">
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight
                  </p>
                </a>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-[20px] font-extrabold text-heading">৳1299</span>
                  <button type="button"
                    className="inline-flex items-center cursor-pointer text-white bg-[#D4AF37] rounded-lg px-5 py-2 focus:outline-none"> 
                    Book Now
                  </button>
                </div>
              </div>
            </div>

          </div>
          <div className="w-3/12 pt-3">
            <div className="bg-white rounded-[10px] shadow-xs">
              <a href="#">
                <img className="rounded-t-[10px] w-full h-30 object-cover " src={sp3} alt="product image" />
              </a>
              <div className="p-4">
                <div className="flex items-center space-x-3 ">
                   
                </div>
                <a href="#">
                  <h4 className="text-lg font-bold text-heading">Pelax Package</h4>
                  <p className="text-[16px] text-heading font-semibold tracking-tight">
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight
                  </p>
                </a>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-[20px] font-extrabold text-heading">৳1299</span>
                  <button type="button"
                    className="inline-flex items-center cursor-pointer text-white bg-[#D4AF37] rounded-lg px-5 py-2 focus:outline-none"> 
                    Book Now
                  </button>
                </div>
              </div>
            </div>

          </div>
          <div className="w-3/12 pt-3">
            <div className="bg-white rounded-[10px] shadow-xs">
              <a href="#">
                <img className="rounded-t-[10px] w-full h-30 object-cover " src={sp4} alt="product image" />
              </a>
              <div className="p-4">
                <div className="flex items-center space-x-3 ">
                   
                </div>
                <a href="#">
                  <h4 className="text-lg font-bold text-heading">Pelax Package</h4>
                  <p className="text-[16px] text-heading font-semibold tracking-tight">
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight
                  </p>
                </a>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-[20px] font-extrabold text-heading">৳1299</span>
                  <button type="button"
                    className="inline-flex items-center cursor-pointer text-white bg-[#D4AF37] rounded-lg px-5 py-2 focus:outline-none"> 
                    Book Now
                  </button>
                </div>
              </div>
            </div>

          </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SpecialPackages