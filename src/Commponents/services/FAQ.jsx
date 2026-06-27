import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
const faqs = [
  {
    id: 1,
    question: "Do I need to book an appointment in advance?",
    answer:
      "Yes. We recommend booking your appointment in advance to secure your preferred date and therapist.",
  },

  {
    id: 2,
    question: "What should I wear during my spa treatment?",
    answer:
      "Comfortable clothing is recommended. Disposable garments, towels and robes are provided for every guest.",
  },

  {
    id: 3,
    question: "Can I choose my preferred therapist?",
    answer:
      "Absolutely. You can request your preferred therapist during the booking process, subject to availability.",
  },

  {
    id: 4,
    question: "What payment methods do you accept?",
    answer:
      "We accept Cash, Visa, MasterCard, Mobile Banking and Online Payments.",
  },

  {
    id: 5,
    question: "Can I cancel or reschedule my appointment?",
    answer:
      "Yes. Please notify us at least 24 hours before your appointment to avoid cancellation charges.",
  },
];

const FAQ = () => {

  const [active, setActive] = useState(null);

  const toggleFAQ = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="bg-[#FFFDF9] py-24">

      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[5px] text-[#C9A227] text-sm font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#1C1C1C]">

            Everything You Need To Know

          </h2>

          <p className="mt-6 text-gray-600 leading-8">

            Find answers to the most common questions about our luxury spa,
            wellness treatments and booking process.

          </p>

        </div>

        <div className="mt-20 space-y-5">
          {faqs.map((item) => (

            <article
              key={item.id}
              className="
    overflow-hidden
    rounded-[22px]
    border
    border-[#E9DFC8]
    bg-white
    shadow-sm
    transition-all
    duration-300
    hover:shadow-xl
    "
            >

              {/* Question */}

              <button
                onClick={() => toggleFAQ(item.id)}
                className="
      flex
      w-full
      items-center
      justify-between
      gap-5
      px-8
      py-6
      text-left
      cursor-pointer
      "
              >

                <h3
                  className="
        text-lg
        lg:text-xl
        font-semibold
        text-[#222]
        leading-8
        "
                >
                  {item.question}
                </h3>

                <div
                  className="
        flex
        h-12
        w-12
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-[#FFF5DB]
        text-[#D4AF37]
        text-2xl
        transition-all
        duration-300
        "
                >

                  {active === item.id ? <FiMinus /> : <FiPlus />}

                </div>

              </button>

              {/* Answer */}

              <div
                className={`
      overflow-hidden
      transition-all
      duration-500
      ${active === item.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                  }
      `}
              >

                <div className="border-t border-[#F3E8CF] px-8 py-6">

                  <p className="leading-8 text-gray-600">

                    {item.answer}

                  </p>

                </div>

              </div>

            </article>

          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-20">

          <div className="rounded-[32px] bg-[#1A1410] px-8 py-14 lg:px-16 text-center">

            <span className="inline-block rounded-full bg-[#D4AF37]/20 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-[#D4AF37]">
              Still Have Questions?
            </span>

            <h3 className="mt-6 text-3xl lg:text-4xl font-bold text-white">
              Our Wellness Experts Are Here To Help
            </h3>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-300">
              If you couldn't find the answer you're looking for, feel free
              to contact our team. We'll help you choose the perfect spa
              treatment and schedule your appointment.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <Link
                to="/book-now"
                className="
                rounded-full
                bg-[#D4AF37]
                px-8
                py-4
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:bg-white
                "
              >
                Book Appointment
              </Link>

              <Link
                to="/contact"
                className="
                rounded-full
                border-2
                border-[#D4AF37]
                px-8
                py-4
                font-semibold
                text-[#D4AF37]
                transition-all
                duration-300
                hover:bg-[#D4AF37]
                hover:text-black
                "
              >
                Contact Our Team
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FAQ;