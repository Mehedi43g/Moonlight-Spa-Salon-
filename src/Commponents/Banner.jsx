// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import bann33 from '../assets/banner3.jpg';
import bann2 from '../assets/banner.jpg';
import banner3 from '../assets/banner2.jpg';

// import required modules
import { Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <div className="relative">
          <img
            className="w-full h-[500px] md:h-[650px] lg:h-[800px] object-cover"
            src={bann33}
            alt="Banner 1"
          />

          <div className="absolute top-[25%] md:top-[30%] left-[5%] w-[90%] md:w-[80%] lg:w-auto">
            <h3 className="text-[24px] md:text-[40px] lg:text-[55px] font-bold text-white">
              Moonlight Spa & Salon
            </h3>

            <h4 className="text-[20px] md:text-[35px] lg:text-[50px] font-bold text-[#D4AF37]">
              Rejuvenate Rediscover You.
            </h4>

            <p className="text-[12px] md:text-[16px] lg:text-[18px] font-medium text-white max-w-[700px] mt-2">
              Experience the art of healing touch with our professional massage
              therapies
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 pt-6 lg:pt-10">
              <button className="bg-[#D4AF37] text-white font-bold py-3 px-6 rounded cursor-pointer">
                Book an Appointment
              </button>

              <button className="border border-white text-white font-bold py-3 px-6 rounded cursor-pointer">
                View Services
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative">
          <img
            className="w-full h-[500px] md:h-[650px] lg:h-[800px] object-cover"
            src={bann2}
            alt="Banner 2"
          />

          <div className="absolute top-[25%] md:top-[30%] left-[5%] w-[90%] md:w-[80%] lg:w-auto">
            <h3 className="text-[24px] md:text-[40px] lg:text-[55px] font-bold text-white">
              Moonlight Spa & Salon
            </h3>

            <h4 className="text-[20px] md:text-[35px] lg:text-[50px] font-bold text-[#D4AF37]">
              Rejuvenate Rediscover You.
            </h4>

            <p className="text-[12px] md:text-[16px] lg:text-[18px] font-medium text-white max-w-[700px] mt-2">
              Experience the art of healing touch with our professional massage
              therapies
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 pt-6 lg:pt-10">
              <button className="bg-[#D4AF37] text-white font-bold py-3 px-6 rounded cursor-pointer">
                Book an Appointment
              </button>

              <button className="border border-white text-white font-bold py-3 px-6 rounded cursor-pointer">
                View Services
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative">
          <img
            className="w-full h-[500px] md:h-[650px] lg:h-[800px] object-cover"
            src={banner3}
            alt="Banner 3"
          />

          <div className="absolute top-[25%] md:top-[30%] left-[5%] w-[90%] md:w-[80%] lg:w-auto">
            <h3 className="text-[24px] md:text-[40px] lg:text-[55px] font-bold text-white">
              Moonlight Spa & Salon
            </h3>

            <h4 className="text-[20px] md:text-[35px] lg:text-[50px] font-bold text-[#D4AF37]">
              Rejuvenate Rediscover You.
            </h4>

            <p className="text-[12px] md:text-[16px] lg:text-[18px] font-medium text-white max-w-[700px] mt-2">
              Experience the art of healing touch with our professional massage
              therapies
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 pt-6 lg:pt-10">
              <button className="bg-[#D4AF37] text-white font-bold py-3 px-6 rounded cursor-pointer">
                Book an Appointment
              </button>

              <button className="border border-white text-white font-bold py-3 px-6 rounded cursor-pointer">
                View Services
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;