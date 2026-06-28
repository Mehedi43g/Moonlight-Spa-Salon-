import { useParams } from "react-router-dom";
import serviceDetails from "../data/serviceDetails";

import DetailHero from "../Commponents/serviceDetail/DetailHero";
import ServiceOverview from "../Commponents/serviceDetail/ServiceOverview";
import Benefits from "../Commponents/serviceDetail/Benefits";
import TreatmentStaps from "../Commponents/serviceDetail/TreatmentStaps";
import PricingPlans from "../Commponents/serviceDetail/PricingPlans";
import WhyChooseTreatment from "../Commponents/serviceDetail/WhyChooseTreatment";
import Gallery from "../Commponents/serviceDetail/Gallery";
import FAQ from "../Commponents/serviceDetail/FAQ";
import RelatedServices from "../Commponents/serviceDetail/RelatedServices";
import CTA from "../Commponents/serviceDetail/CTA";

const ServiceDetails = () => {
  const { slug } = useParams();

  const service = serviceDetails.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Service Not Found
        </h1>
      </section>
    );
  }

  return (
    <main>
      <DetailHero service={service} />

      <ServiceOverview service={service} />

      <Benefits service={service} />

      <TreatmentStaps service={service} />

      <PricingPlans service={service} />

      <WhyChooseTreatment service={service} />

      <Gallery service={service} />

      <FAQ service={service} />

      <RelatedServices service={service} />

      <CTA service={service} />
    </main>
  );
};

export default ServiceDetails;