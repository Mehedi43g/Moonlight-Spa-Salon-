import React from 'react'
import DetailHero from '../Commponents/serviceDetail/DetailHero'
import ServiceOverview from '../Commponents/serviceDetail/ServiceOverview'
import Benefits from '../Commponents/serviceDetail/Benefits'
import TreatmentStaps from '../Commponents/serviceDetail/TreatmentStaps'
import PricingPlans from '../Commponents/serviceDetail/PricingPlans'
import WhyChooseTreatment from '../Commponents/serviceDetail/WhyChooseTreatment'
import Gallery from '../Commponents/serviceDetail/Gallery'
import FAQ from '../Commponents/serviceDetail/FAQ'
import RelatedServices from '../Commponents/serviceDetail/RelatedServices'
import CTA from '../Commponents/serviceDetail/CTA'

const ServiceDetails = () => {
  return (
    <div>
      <DetailHero />

      <ServiceOverview />

      <Benefits />

      <TreatmentStaps />

      <PricingPlans />

      <WhyChooseTreatment />

      <Gallery />

      <FAQ />

      <RelatedServices />

      <CTA />
    </div>
  )
}

export default ServiceDetails