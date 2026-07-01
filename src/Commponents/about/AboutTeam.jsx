import Container from "../Container";
import { FaSpa } from "react-icons/fa";

const team = [
  {
    id: 1,
    name: "Elena Rostova",
    role: "Senior Esthetician & Aromatherapist",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    bio: "Elena has over 8 years of luxury spa experience. She specializes in signature aromatherapies and customized herbal facial skincare."
  },
  {
    id: 2,
    name: "Chloe Dubois",
    role: "Certified Deep Tissue Specialist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Chloe is trained in advanced muscular recovery. She excels at targeting deep knots, sports fatigue, and chronic back stiffness."
  },
  {
    id: 3,
    name: "Sarah Lin",
    role: "Traditional Thai stretching expert",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    bio: "Sarah holds certifications from premium Thai massage institutions. She specializes in yoga-assisted dry stretching."
  },
  {
    id: 4,
    name: "Jessica Winters",
    role: "Foot Reflexology Specialist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    bio: "Jessica targets systemic healing through precise reflexology stimulation. She helps stand-all-day professionals find relief."
  }
];

const AboutTeam = () => {
  return (
    <section className="py-24 bg-[#FCF9F3]">
      <Container>
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="uppercase tracking-[5px] text-[#C9A227] text-sm font-semibold">
            Certified Specialists
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#1C1C1C]">
            Meet Our Senior Therapists
          </h2>
          <p className="mt-6 text-gray-600 leading-8">
            Our wellness team consists of senior certified professionals committed to providing personalized, 
            world-class spa therapies for absolute comfort.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member) => (
            <article
              key={member.id}
              className="group overflow-hidden rounded-[30px] bg-white border border-[#EFE7D8] p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center"
            >
              {/* Photo */}
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-[#FFF5DB] shadow-md mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <span className="inline-block mt-2 rounded-full bg-[#FFF5DB] px-4 py-1 text-xs font-bold text-[#B88B00]">
                    {member.role}
                  </span>
                  <p className="mt-4 leading-7 text-gray-500 text-sm">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 flex justify-center text-[#D4AF37] text-xl">
                  <FaSpa />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutTeam;
