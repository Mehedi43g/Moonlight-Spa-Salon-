import {
  FaClock,
  FaSpa,
  FaUserCheck,
  FaCheckCircle,
} from "react-icons/fa";

const ServiceOverview = ({ service }) => {
  if (!service) return null;

  return (
    <section className="bg-[#FCF8F2] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT */}
          <div>

            <span className="inline-block rounded-full bg-[#FFF4D6] px-5 py-2 text-sm font-semibold tracking-wide text-[#C89B2C]">
              SERVICE OVERVIEW
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight text-[#1A1410]">
              {service.hero.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {service.overview.fullDescription}
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">

              <div className="rounded-3xl bg-white p-6 shadow-sm border border-[#EFE4CC]">

                <div className="flex items-center gap-3">

                  <FaClock className="text-[#D4AF37] text-xl" />

                  <h4 className="font-semibold text-[#1A1410]">
                    Duration
                  </h4>

                </div>

                <p className="mt-3 text-gray-600">
                  {service.duration.join(" • ")}
                </p>

              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm border border-[#EFE4CC]">

                <div className="flex items-center gap-3">

                  <FaUserCheck className="text-[#D4AF37] text-xl" />

                  <h4 className="font-semibold text-[#1A1410]">
                    Therapist
                  </h4>

                </div>

                <p className="mt-3 text-gray-600">
                  {service.therapist}
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-[35px] bg-white border border-[#EFE4CC] shadow-lg p-8">

            <div className="flex items-center gap-3">

              <FaSpa className="text-[#D4AF37] text-3xl" />

              <h3 className="text-2xl font-bold text-[#1A1410]">
                What's Included
              </h3>

            </div>

            <div className="mt-8 space-y-5">

              {service.includes.map((item, index) => (

                <div
                  key={index}
                  className="flex items-start gap-4"
                >

                  <FaCheckCircle className="mt-1 text-[#D4AF37]" />

                  <span className="text-gray-700 leading-7">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            <div className="mt-10 rounded-3xl bg-[#FFF9EA] border border-[#F3E2AE] p-6">

              <p className="uppercase tracking-[4px] text-xs text-gray-500">
                Starting From
              </p>

              <h2 className="mt-2 text-4xl font-bold text-[#D4AF37]">
                ৳{Math.min(...Object.values(service.pricing)).toLocaleString()}
              </h2>

              <p className="mt-3 text-gray-600">
                Premium luxury spa experience with certified therapists.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ServiceOverview;