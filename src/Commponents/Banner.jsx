// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import bann33 from '../assets/banner3.jpg'
import bann2 from '../assets/banner.jpg'
import banner3 from '../assets/banner2.jpg'


// import required modules
import { Pagination } from 'swiper/modules';
const Banner = () => {

  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
         <div className="relative">
           <img className="w-full h-100 object-cover " src={bann33} alt="Banner 1" />
           <div className="absolute top-[30%] left-[5%] ">
            <h3 className="text-[35px] font-bold text-white">Moonlight Spa & Salon</h3>
            <h4 className="text-[35px] font-bold text-[#D4AF37]">Rejuvenate Rediscover You.</h4>
            <p className="text-[12px] font-bold text-white">Experience the art of healing touch with out professional massage therapies</p>
            <div className="flex gap-10 pt-10">
            <button className="bg-[#D4AF37] text-white font-bold py-2 px-4 rounded cursor-pointer">Book an Appointment</button>
            <button className="border border-white text-white font-bold py-2 px-4 rounded cursor-pointer">View Servieces</button>
            </div>
           </div>
         </div>
          
          </SwiperSlide>
        <SwiperSlide>
         <div className="relative">
           <img className="w-full h-100 object-cover " src={bann2} alt="Banner 1" />
           <div className="absolute top-[30%] left-[5%] ">
            <h3 className="text-[35px] font-bold text-white">Moonlight Spa & Salon</h3>
            <h4 className="text-[35px] font-bold text-[#D4AF37]">Rejuvenate Rediscover You.</h4>
            <p className="text-[12px] font-bold text-white">Experience the art of healing touch with out professional massage therapies</p>
            <div className="flex gap-10 pt-10">
            <button className="bg-[#D4AF37] text-white font-bold py-2 px-4 rounded cursor-pointer">Book an Appointment</button>
            <button className="border border-white text-white font-bold py-2 px-4 rounded cursor-pointer">View Servieces</button>
            </div>
           </div>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="relative">
           <img className="w-full h-100 object-cover " src={banner3} alt="Banner 1" />
           <div className="absolute top-[30%] left-[5%] ">
            <h3 className="text-[35px] font-bold text-white">Moonlight Spa & Salon</h3>
            <h4 className="text-[35px] font-bold text-[#D4AF37]">Rejuvenate Rediscover You.</h4>
            <p className="text-[12px] font-bold text-white">Experience the art of healing touch with out professional massage therapies</p>
            <div className="flex gap-10 pt-10">
            <button className="bg-[#D4AF37] text-white font-bold py-2 px-4 rounded cursor-pointer">Book an Appointment</button>
            <button className="border border-white text-white font-bold py-2 px-4 rounded cursor-pointer">View Servieces</button>
            </div>
           </div>
         </div>
        </SwiperSlide>
      </Swiper>
  )
}

export default Banner