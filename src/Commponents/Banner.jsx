// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Images
import banner1 from "../assets/banner3.jpg";
import banner2 from "../assets/banner.jpg";
import banner3 from "../assets/banner2.jpg";

// Icons
import { FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: banner1,
    alt: "Luxury Spa Treatment Room at Moonlight Spa & Salon",

    badge: "Luxury Wellness Experience",

    title: "Moonlight Spa & Salon",

    heading: "Escape the Stress. Embrace Pure Relaxation.",

    description:
      "Experience premium spa therapies designed to relax your body, refresh your mind, and restore your natural beauty. Every treatment is tailored to create a peaceful and luxurious wellness journey.",

    primaryBtn: "Book Your Appointment",

    secondaryBtn: "Explore Our Services",
  },

  {
    id: 2,
    image: banner2,
    alt: "Professional Massage Therapy at Moonlight Spa",

    badge: "Professional Massage Therapy",

    title: "Moonlight Spa & Salon",

    heading: "Relax Your Body. Renew Your Soul.",

    description:
      "Our expert therapists combine modern wellness techniques with traditional healing practices to deliver an unforgettable spa experience in a calm and elegant environment.",

    primaryBtn: "Reserve Your Session",

    secondaryBtn: "View Treatments",
  },

  {
    id: 3,
    image: banner3,
    alt: "Premium Beauty & Wellness Services",

    badge: "Premium Beauty & Wellness",

    title: "Moonlight Spa & Salon",

    heading: "Luxury Care That You Truly Deserve.",

    description:
      "Step into a world of comfort where every massage, facial, and wellness treatment is designed to help you feel refreshed, confident, and completely rejuvenated.",

    primaryBtn: "Book Today",

    secondaryBtn: "Discover More",
  },
];

const Banner = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade]}
      effect="fade"
      loop={true}
      speed={1200}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      className="w-full h-full"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
                    <div className="relative w-full h-[100vh] min-h-[700px] overflow-hidden">

            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
              loading={slide.id === 1 ? "eager" : "lazy"}
            />

            {/* Luxury Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30"></div>

            {/* Soft Dark Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content */}

            <div className="absolute inset-0 flex items-center">

              <div className="w-full max-w-7xl mx-auto px-5 lg:px-8">

                <div className="max-w-3xl">

                  {/* Premium Badge */}

                  <div className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/50 bg-white/10 backdrop-blur-md px-5 py-2 mb-6">

                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>

                    <span className="uppercase tracking-[4px] text-[11px] md:text-xs font-semibold text-[#D4AF37]">
                      {slide.badge}
                    </span>

                  </div>

                  {/* SEO H1 */}

                  <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">

                    {slide.title}

                  </h1>

                  {/* Luxury Heading */}

                  <h2 className="mt-5 text-[#D4AF37] text-2xl md:text-4xl lg:text-5xl font-semibold leading-snug max-w-3xl">

                    {slide.heading}

                  </h2>

                  {/* Description */}

                  <p className="mt-7 text-gray-200 text-base md:text-lg leading-8 max-w-2xl">

                    {slide.description}

                  </p>

                  {/* Buttons */}

                  <div className="flex flex-col sm:flex-row gap-5 mt-10">

                    <button
                      className="
                      inline-flex
                      items-center
                      justify-center
                      gap-3
                      bg-[#D4AF37]
                      text-black
                      px-8
                      py-4
                      rounded-full
                      font-semibold
                      hover:bg-white
                      duration-300
                      shadow-xl
                      cursor-pointer
                      "
                    >
                      {slide.primaryBtn}

                      <FaArrowRight />
                    </button>

                    <button
                      className="
                      inline-flex
                      items-center
                      justify-center
                      border
                      border-white/40
                      bg-white/10
                      backdrop-blur-md
                      text-white
                      px-8
                      py-4
                      rounded-full
                      font-semibold
                      hover:bg-white
                      hover:text-black
                      duration-300
                      cursor-pointer
                      "
                    >
                      {slide.secondaryBtn}
                    </button>

                  </div>

                  {/* Premium Stats */}

                  <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl">

                    <div>

                      <h3 className="text-[#D4AF37] text-3xl font-bold">
                        10+
                      </h3>

                      <p className="text-gray-300 mt-2 text-sm">
                        Years of Experience
                      </p>

                    </div>

                    <div>

                      <h3 className="text-[#D4AF37] text-3xl font-bold">
                        5K+
                      </h3>

                      <p className="text-gray-300 mt-2 text-sm">
                        Happy Clients
                      </p>

                    </div>

                    <div>

                      <h3 className="text-[#D4AF37] text-3xl font-bold">
                        100%
                      </h3>

                      <p className="text-gray-300 mt-2 text-sm">
                        Premium Care
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </SwiperSlide>
      ))}
          </Swiper>
  );
};

export default Banner;