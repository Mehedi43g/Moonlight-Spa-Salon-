import { GiThreeLeaves } from "react-icons/gi"
import Container from "./Container"
import card1 from "../assets/card1.jpg"
import card2 from "../assets/card2.jpg"
import card3 from "../assets/card3.jpg"
import card4 from "../assets/card4.jpg"
import { MdArrowRightAlt, MdOutlineOilBarrel } from "react-icons/md"

const ServiceCard = () => {
  return (
    <section className="py-10 bg-[#F8F3ED]">
      <Container>
        <div className="flex justify-center">
          <div className="items-center flex flex-col w-full max-w-[500px] text-center gap-4 px-4 mx-auto">
            <GiThreeLeaves className="text-5xl text-[#D4A017]" />
            <h3 className="text-[28px] md:text-[34px] font-bold font-poppins">
              Our Popular Services
            </h3>
            <p className="text-[14px] md:text-[16px] font-poppins">
              Choose From our wide range of expert massage therapies designed to
              relax your body, mind, and soul.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-5 pt-10">

          <div className="w-full sm:w-[48%] md:w-[46%] lg:w-[31%] xl:w-[23%] bg-[#FFFFFF] rounded-[10px] overflow-hidden shadow-sm">
            <div className="relative">
              <img
                src={card1}
                alt="card1"
                className="w-full h-[180px] sm:h-[200px] lg:h-[150px] object-cover"
              />
              <div className="absolute bottom-[-16px] left-2 p-2 rounded-full bg-[#D4A017]">
                <MdOutlineOilBarrel className="text-2xl text-[#FFFFFF]" />
              </div>
            </div>

            <div className="py-5 px-3">
              <h4 className="text-[20px] font-bold font-poppins">
                Hot Oil Massage
              </h4>
              <p className="text-[14px] font-poppins">
                Relaxes your muscles and improve blood circulation.
              </p>

              <div>
                <div className="box flex flex-wrap gap-3">
                  <div>
                    <p className="bg-[#d49e174b] p-1 rounded-[10px]">60 Min</p>
                    <p className="font-bold">৳ 2,500</p>
                  </div>

                  <div>
                    <p className="bg-[#d49e174b] p-1 rounded-[10px]">90 Min</p>
                    <p className="font-bold">৳ 3,500</p>
                  </div>

                  <div>
                    <p className="bg-[#d49e174b] p-1 rounded-[10px]">120 Min</p>
                    <p className="font-bold">৳ 4,500</p>
                  </div>
                </div>

                <div className="pt-4 text-center">
                  <a
                    href="#"
                    className="bg-amber-50 text-amber-500 hover:bg-amber-600 flex items-center hover:text-white py-2 mx-auto justify-center rounded-full font-bold"
                  >
                    Book Now
                    <MdArrowRightAlt className="font-medium text-[30px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-[48%] md:w-[46%] lg:w-[31%] xl:w-[23%] bg-[#FFFFFF] rounded-[10px] overflow-hidden shadow-sm">
            <div className="relative">
              <img
                src={card2}
                alt="card2"
                className="w-full h-[180px] sm:h-[200px] lg:h-[150px] object-cover"
              />
              <div className="absolute bottom-[-16px] left-2 p-2 rounded-full bg-[#D4A017]">
                <MdOutlineOilBarrel className="text-2xl text-[#FFFFFF]" />
              </div>
            </div>

            <div className="py-5 px-3">
              <h4 className="text-[20px] font-bold font-poppins">
                Hot Oil Massage
              </h4>
              <p className="text-[14px] font-poppins">
                Relaxes your muscles and improve blood circulation.
              </p>

              <div>
                <div className="box flex flex-wrap gap-3">
                  <div>
                    <p className="bg-[#d49e174b] p-1 rounded-[10px]">60 Min</p>
                    <p className="font-bold">৳ 2,500</p>
                  </div>

                  <div>
                    <p className="bg-[#d49e174b] p-1 rounded-[10px]">90 Min</p>
                    <p className="font-bold">৳ 3,500</p>
                  </div>

                  <div>
                    <p className="bg-[#d49e174b] p-1 rounded-[10px]">120 Min</p>
                    <p className="font-bold">৳ 4,500</p>
                  </div>
                </div>

                <div className="pt-4 text-center">
                  <a
                    href="#"
                    className="bg-amber-50 text-amber-500 hover:bg-amber-600 flex items-center hover:text-white py-2 mx-auto justify-center rounded-full font-bold"
                  >
                    Book Now
                    <MdArrowRightAlt className="font-medium text-[30px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-[48%] md:w-[46%] lg:w-[31%] xl:w-[23%] bg-[#FFFFFF] rounded-[10px] overflow-hidden shadow-sm">
            <div className="relative">
              <img
                src={card3}
                alt="card3"
                className="w-full h-[180px] sm:h-[200px] lg:h-[150px] object-cover"
              />
              <div className="absolute bottom-[-16px] left-2 p-2 rounded-full bg-[#D4A017]">
                <MdOutlineOilBarrel className="text-2xl text-[#FFFFFF]" />
              </div>
            </div>

            <div className="py-5 px-3">
              <h4 className="text-[20px] font-bold font-poppins">
                Hot Oil Massage
              </h4>
              <p className="text-[14px] font-poppins">
                Relaxes your muscles and improve blood circulation.
              </p>

              <div>
                <div className="box flex flex-wrap gap-3">
                  <div>
                    <p className="bg-[#d49e174b] p-1 rounded-[10px]">60 Min</p>
                    <p className="font-bold">৳ 2,500</p>
                  </div>

                  <div>
                    <p className="bg-[#d49e174b] p-1 rounded-[10px]">90 Min</p>
                    <p className="font-bold">৳ 3,500</p>
                  </div>

                  <div>
                    <p className="bg-[#d49e174b] p-1 rounded-[10px]">120 Min</p>
                    <p className="font-bold">৳ 4,500</p>
                  </div>
                </div>

                <div className="pt-4 text-center">
                  <a
                    href="#"
                    className="bg-amber-50 text-amber-500 hover:bg-amber-600 flex items-center hover:text-white py-2 mx-auto justify-center rounded-full font-bold"
                  >
                    Book Now
                    <MdArrowRightAlt className="font-medium text-[30px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-[48%] md:w-[46%] lg:w-[31%] xl:w-[23%] bg-[#FFFFFF] rounded-[10px] overflow-hidden shadow-sm">
            <div className="relative">
              <img
                src={card4}
                alt="card4"
                className="w-full h-[180px] sm:h-[200px] lg:h-[150px] object-cover"
              />
              <div className="absolute bottom-[-16px] left-2 p-2 rounded-full bg-[#D4A017]">
                <MdOutlineOilBarrel className="text-2xl text-[#FFFFFF]" />
              </div>
            </div>

            <div className="py-5 px-3">
              <h4 className="text-[20px] font-bold font-poppins">
                Aromatherapy Massage
              </h4>
              <p className="text-[14px] font-poppins">
                Relaxes your muscles and improve blood circulation.
              </p>

              <div>
                <div className="box flex flex-wrap gap-3">
                  <div>
                    <p className="bg-[#d49e174b] p-1 rounded-[10px]">60 Min</p>
                    <p className="font-bold">৳ 2,500</p>
                  </div>

                  <div>
                    <p className="bg-[#d49e174b] p-1 rounded-[10px]">90 Min</p>
                    <p className="font-bold">৳ 3,500</p>
                  </div>

                  <div>
                    <p className="bg-[#d49e174b] p-1 rounded-[10px]">120 Min</p>
                    <p className="font-bold">৳ 4,500</p>
                  </div>
                </div>

                <div className="pt-4 text-center">
                  <a
                    href="#"
                    className="bg-amber-50 text-amber-500 hover:bg-amber-600 flex items-center hover:text-white py-2 mx-auto justify-center rounded-full font-bold"
                  >
                    Book Now
                    <MdArrowRightAlt className="font-medium text-[30px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default ServiceCard