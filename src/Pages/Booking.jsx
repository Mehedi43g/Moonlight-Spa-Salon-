import Container from "../Commponents/Container";
import BookingHero from "../Commponents/Booking/BookingHero";
import BookingForm from "../Commponents/Booking/BookingForm";
import ContactInformation from "../Commponents/Booking/ContactInformation";
import BookingFAQ from "../Commponents/Booking/BookingFAQ";
import BookingCTA from "../Commponents/Booking/BookingCTA";

const Booking = () => {
  return (
    <main className="bg-[#FAF7F0] min-h-screen">
      {/* 1. Hero Block */}
      <BookingHero />

      {/* 2. Form & Contact Side-by-Side Grid */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
            {/* Left: Contact card */}
            <div className="lg:col-span-5 h-full">
              <ContactInformation />
            </div>

            {/* Right: Booking Form card */}
            <div className="lg:col-span-7 h-full">
              <BookingForm />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Booking policy Q&As */}
      <BookingFAQ />

      {/* 4. Final CTA */}
      <BookingCTA />
    </main>
  );
};

export default Booking;
