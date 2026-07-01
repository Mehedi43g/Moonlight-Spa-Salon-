import Container from "../Container";

const AboutStats = () => {
  return (
    <section className="py-16 bg-[#1A1410] relative overflow-hidden">
      <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[100px]" />
      <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[100px]" />

      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center relative z-10 max-w-5xl mx-auto">
          <div>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-[#D4AF37] font-poppins">15+</h3>
            <p className="mt-3 text-gray-300 text-sm uppercase tracking-wider font-semibold">Certified Specialists</p>
          </div>
          
          <div>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-[#D4AF37] font-poppins">25K+</h3>
            <p className="mt-3 text-gray-300 text-sm uppercase tracking-wider font-semibold">Happy Guests Served</p>
          </div>

          <div>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-[#D4AF37] font-poppins">12+</h3>
            <p className="mt-3 text-gray-300 text-sm uppercase tracking-wider font-semibold">Dynamic Treatments</p>
          </div>

          <div>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-[#D4AF37] font-poppins">4.9★</h3>
            <p className="mt-3 text-gray-300 text-sm uppercase tracking-wider font-semibold">Average Customer Rating</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutStats;
