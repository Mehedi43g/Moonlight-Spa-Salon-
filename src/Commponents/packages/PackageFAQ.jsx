import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Container from "../Container";

const faqs = [
  {
    id: 1,
    question: "Can I customize the treatments inside a package?",
    answer: "Yes, absolutely! We understand that everyone has unique wellness needs. You can consult with our senior therapists before your session to substitute treatments (e.g. exchanging a facial for a foot massage) of comparable value."
  },
  {
    id: 2,
    question: "Do I need to book in advance for spa packages?",
    answer: "Yes, we strongly recommend booking at least 24 to 48 hours in advance. Because our packages are longer in duration (ranging from 90 to 180 minutes) and require VIP suite preparations, booking ahead secures your preferred time slot and therapist."
  },
  {
    id: 3,
    question: "Are the couple rooms completely private?",
    answer: "Yes. Our Couple Harmony Package includes full private occupancy of a soundproof executive couple suite. This suite features private changing rooms, dedicated steam, a luxury shower, and an isolated relaxation lounge area."
  },
  {
    id: 4,
    question: "What if a package contains a treatment I cannot take?",
    answer: "Your safety is our top priority. If you have medical concerns, skin conditions, or are pregnant and cannot take specific treatments (such as a steam bath or deep tissue massage), we will happily substitute them with safer alternatives like gentle aroma oil massage or foot massage."
  },
  {
    id: 5,
    question: "Can we book spa packages for group events or parties?",
    answer: "Yes! We accommodate birthdays, bridal showers, anniversaries, and corporate wellness events. Please contact our receptionist or group coordinator directly to arrange customized schedules, special room setups, and group discount pricing."
  }
];

const PackageFAQ = () => {
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
            Frequently Asked Questions
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#1C1C1C]">
            Spa Package FAQs
          </h2>
          <p className="mt-6 text-gray-600 leading-8">
            Got questions about customizing your package, couple suites, or booking requirements? Find clear answers from our wellness experts.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-5 max-w-5xl mx-auto">
          {faqs.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-[22px] border border-[#E9DFC8] bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              {/* Question button */}
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

              {/* Answer block */}
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

export default PackageFAQ;
