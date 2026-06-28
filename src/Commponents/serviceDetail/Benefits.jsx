import {
  FaCheckCircle,
  FaLeaf,
  FaSpa,
  FaHeart,
  FaBed,
  FaHandHoldingHeart,
} from "react-icons/fa";

const iconMap = [
  <FaLeaf />,
  <FaSpa />,
  <FaHeart />,
  <FaBed />,
  <FaHandHoldingHeart />,
  <FaCheckCircle />,
];

const Benefits = ({ service }) => {
  if (!service) return null;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-block rounded-full bg-[#FFF5DB] px-5 py-2 text-sm font-semibold tracking-[3px] text-[#C89B2C]">
            WHY YOU'LL LOVE IT
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-[#1A1410] leading-tight">
            Benefits Of This Treatment
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every treatment is carefully designed to improve your physical,
            mental and emotional wellness while providing a luxury spa
            experience.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

          {service.benefits.map((benefit, index) => (

            <div
              key={index}
              className="
                group
                rounded-[30px]
                border
                border-[#EFE4CC]
                bg-[#FCF8F2]
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#D4AF37]
                hover:shadow-2xl
              "
            >

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#D4AF37]
                  text-3xl
                  text-white
                  transition-all
                  duration-500
                  group-hover:rotate-6
                  group-hover:scale-110
                "
              >
                {iconMap[index % iconMap.length]}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#1A1410]">
                {benefit}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Experience professional spa therapy that helps improve your
                overall wellbeing while creating complete relaxation for your
                body and mind.
              </p>

            </div>

          ))}

        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-[35px] bg-[#1A1410] px-8 py-12 lg:px-16">

          <div className="grid lg:grid-cols-3 gap-10 text-center">

            <div>

              <h3 className="text-5xl font-bold text-[#D4AF37]">
                100%
              </h3>

              <p className="mt-3 text-gray-300">
                Premium Quality Service
              </p>

            </div>

            <div>

              <h3 className="text-5xl font-bold text-[#D4AF37]">
                5000+
              </h3>

              <p className="mt-3 text-gray-300">
                Happy Clients
              </p>

            </div>

            <div>

              <h3 className="text-5xl font-bold text-[#D4AF37]">
                10+
              </h3>

              <p className="mt-3 text-gray-300">
                Years Of Luxury Experience
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Benefits;