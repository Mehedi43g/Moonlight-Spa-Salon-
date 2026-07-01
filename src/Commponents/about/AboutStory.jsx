import Container from "../Container";
import { FaSpa, FaCertificate, FaLeaf } from "react-icons/fa";

const AboutStory = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-20 -right-32 h-80 w-80 rounded-full bg-[#D4AF37]/5 blur-[100px]" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Story details */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="uppercase tracking-[5px] text-[#C9A227] text-sm font-semibold">
                Our Legacy
              </span>
              <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-tight">
                Established In 2016 for Premium Wellness
              </h2>
              <p className="mt-6 text-gray-600 leading-8 text-[16px]">
                Moonlight Spa started with a simple vision: to create an isolated haven of absolute silence and physical healing. 
                Over the past decade, we have grown into Dhaka's premiere spa salon, serving thousands of local and VIP guests 
                seeking muscular recovery, stress relief, and natural skincare treatment.
              </p>
            </div>

            {/* List block */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF5DB] text-[#D4AF37] text-xl shrink-0 mt-1">
                  <FaSpa />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-[17px]">Luxury Private Ambiance</h4>
                  <p className="text-gray-600 text-sm mt-1 leading-6">
                    Every massage or body scrub is performed inside quiet private rooms or VIP executive suites, 
                    fitted with private steam rooms and clean linens.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF5DB] text-[#D4AF37] text-xl shrink-0 mt-1">
                  <FaCertificate />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-[17px]">Experienced Specialists Only</h4>
                  <p className="text-gray-600 text-sm mt-1 leading-6">
                    We employ senior female therapists certified in dry stretching, deep tissue relief, and 
                    traditional aroma blends.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF5DB] text-[#D4AF37] text-xl shrink-0 mt-1">
                  <FaLeaf />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-[17px]">100% Organic Products</h4>
                  <p className="text-gray-600 text-sm mt-1 leading-6">
                    We only use high-grade natural herbal oils, moisturizing creams, and skincare masks free from parabens or artificial fragrances.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image display */}
          <div className="lg:col-span-5 relative group">
            <div className="overflow-hidden rounded-[35px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
                alt="Moonlight Spa Interior Suite"
                className="h-[550px] w-full object-cover transition-transform duration-750 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 rounded-[35px] bg-gradient-to-t from-black/30 via-transparent"></div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default AboutStory;
