import React, { useState } from "react";
import Container from "../Container";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = ({ service }) => {
  if (!service) return null;

  const faqs = service.faq || [];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">

      <Container>

        {/* Heading */}

        <div className="max-w-3xl mx-auto text-center">

          <span className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">

            Frequently Asked Questions

          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#1A1410]">

            Everything You Need
            <span className="text-[#D4AF37]"> To Know</span>

          </h2>

          <p className="mt-6 leading-8 text-[#6E6259]">

            Have questions about{" "}
            <span className="font-semibold text-[#1A1410]">
              {service.hero.title}
            </span>
            ? Here are the answers to the questions our guests ask most
            frequently.

          </p>

        </div>

        {/* FAQ */}

        <div className="max-w-4xl mx-auto mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-[#ECE5DB] bg-[#FCF8F2] transition-all duration-300"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-7 text-left"
              >

                <h3 className="pr-8 text-lg md:text-xl font-semibold text-[#1A1410]">

                  {faq.question}

                </h3>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-white">

                  {activeIndex === index ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )}

                </div>

              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  activeIndex === index
                    ? "max-h-96"
                    : "max-h-0"
                }`}
              >

                <div className="px-7 pb-7">

                  <p className="leading-8 text-[#6E6259]">
                                        {faq.answer}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-[32px] bg-[#1A1410] px-8 py-14 text-center">

          <span className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">

            Still Have Questions?

          </span>

          <h3 className="mt-4 text-3xl lg:text-4xl font-bold text-white">

            We're Here To Help You

          </h3>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-300">

            If you couldn't find the answer you're looking for, our
            friendly team is always ready to assist you. Contact us
            anytime for personalized recommendations and booking support.

          </p>

          <button
            className="mt-10 rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#bf9c2c]"
          >
            Contact Our Team
          </button>

        </div>

      </Container>

    </section>
  );
};

export default FAQ;