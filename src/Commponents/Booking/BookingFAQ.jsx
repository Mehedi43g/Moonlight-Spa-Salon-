import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import Container from "../Container";

const faqs = [
  {
    id: 1,
    question: "How far in advance should I book my appointment?",
    answer: "We recommend booking at least 24 hours in advance to secure your preferred date, time slot, and therapist gender preference. For weekends and holidays, 48 hours is ideal."
  },
  {
    id: 2,
    question: "What is your cancellation and rescheduling policy?",
    answer: "We understand that plans can change. If you need to cancel or reschedule, please notify us at least 4 hours before your scheduled appointment time so we can accommodate other guests."
  },
  {
    id: 3,
    question: "Can I choose the gender of my therapist?",
    answer: "Yes. All our massage therapists are certified female wellness professionals. You can request specific therapists if you have a preferred preference."
  },
  {
    id: 4,
    question: "Do I need to pay anything during the online booking?",
    answer: "No upfront payment is required when booking through our website or WhatsApp. You will pay at the salon counter after completing your treatment session."
  }
];

const BookingFAQ = () => {
  const [active, setActive] = useState(null);

  const toggleFAQ = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="bg-[#FFFDF9] py-24">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="uppercase tracking-[5px] text-[#C9A227] text-sm font-semibold">
            Appointment FAQs
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#1C1C1C]">
            Booking Questions
          </h2>
          <p className="mt-6 text-gray-600 leading-8">
            Read through common inquiries regarding appointment slots, policies, payment terms, and salon guidelines.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-5 max-w-4xl mx-auto">
          {faqs.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-[22px] border border-[#E9DFC8] bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="flex w-full items-center justify-between gap-5 px-8 py-6 text-left cursor-pointer focus:outline-none"
              >
                <h3 className="text-lg lg:text-xl font-semibold text-[#222] leading-8">
                  {item.question}
                </h3>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF5DB] text-[#D4AF37] text-2xl transition-all duration-300">
                  {active === item.id ? <FiMinus /> : <FiPlus />}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  active === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
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
      </Container>
    </section>
  );
};

export default BookingFAQ;
