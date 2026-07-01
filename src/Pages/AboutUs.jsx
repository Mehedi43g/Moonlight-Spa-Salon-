import AboutHero from "../Commponents/about/AboutHero";
import AboutStory from "../Commponents/about/AboutStory";
import AboutStats from "../Commponents/about/AboutStats";
import AboutTeam from "../Commponents/about/AboutTeam";
import Testimonials from "../Commponents/services/Testimonials";
import BookingCTA from "../Commponents/packages/BookingCTA";

const AboutUs = () => {
  return (
    <main>
      {/* 1. Page Header */}
      <AboutHero />

      {/* 2. Legacy and philosophy story */}
      <AboutStory />

      {/* 3. Metrics metrics banner */}
      <AboutStats />

      {/* 4. Expert staff profiles */}
      <AboutTeam />

      {/* 5. Client testimonials */}
      <Testimonials />

      {/* 6. Booking action banner */}
      <BookingCTA />
    </main>
  );
};

export default AboutUs;