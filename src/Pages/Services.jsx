import CTA from "../Commponents/services/CTA";
import FAQ from "../Commponents/services/FAQ";
import FeaturedMassage from "../Commponents/services/FeaturedMassage";
import PopularPackages from "../Commponents/services/PopularPackages";
import ServiceCategories from "../Commponents/services/ServiceCategories";
import ServiceHero from "../Commponents/services/ServiceHero";
import Testimonials from "../Commponents/services/Testimonials";
import TreatmentGrid from "../Commponents/services/TreatmentGrid";
import TreatmentProcess from "../Commponents/services/TreatmentProcess";
import WhyChooseUs from "../Commponents/services/WhyChooseUs";


const Services = () => {
  return (
    <>
      <ServiceHero />
      <ServiceCategories />
      <TreatmentGrid />
      <FeaturedMassage />
      <TreatmentProcess />
      <WhyChooseUs />
      <PopularPackages />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
};

export default Services;