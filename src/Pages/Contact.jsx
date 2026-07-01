import Container from "../Commponents/Container";
import ContactHero from "../Commponents/contact/ContactHero";
import ContactForm from "../Commponents/contact/ContactForm";
import ContactDetails from "../Commponents/contact/ContactDetails";
import FAQ from "../Commponents/services/FAQ";

const Contact = () => {
  return (
    <main className="bg-[#FAF7F0] min-h-screen">
      {/* 1. Page Header */}
      <ContactHero />

      {/* 2. Form & Contacts details */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
            {/* Left: Contact Info & Map */}
            <div className="lg:col-span-5 h-full">
              <ContactDetails />
            </div>

            {/* Right: Messaging Form */}
            <div className="lg:col-span-7 h-full">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. General FAQs */}
      <FAQ />
    </main>
  );
};

export default Contact;