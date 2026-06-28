import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { GiLotusFlower } from "react-icons/gi";

const TreatmentSteps = ({ service }) => {
  return (
    <section className="py-24 bg-[#FDFBF8]">
      <div className="container mx-auto px-5">

        <div className="max-w-3xl mx-auto text-center">

          <GiLotusFlower className="mx-auto text-5xl text-[#D4AF37]" />

          <span className="uppercase tracking-[4px] text-[#D4AF37] text-sm font-semibold mt-4 block">
            Treatment Process
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1410] mt-5">
            How Your Treatment Works
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Every session follows a carefully designed treatment process
            to ensure maximum comfort, relaxation and professional care.
          </p>

        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-8">

          {service.treatmentSteps.map((step, index) => (

            <div key={step.title || index}
              className="group bg-white rounded-3xl border border-[#EFE7D8] p-8 shadow-sm hover:shadow-xl transition duration-300"
            >

              <div className="flex items-start gap-5">

                <div className="h-14 w-14 rounded-full bg-[#D4AF37] text-black flex items-center justify-center font-bold text-xl shrink-0">
                  {step.id}
                </div>

                <div>

                  <h3 className="text-2xl font-bold text-[#1A1410] flex items-center gap-2">
                    <FaCheckCircle className="text-[#D4AF37]" />
                    {step.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-8">
                    {step.description}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default TreatmentSteps;