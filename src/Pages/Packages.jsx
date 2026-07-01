import PackagesHero from "../Commponents/packages/PackagesHero";
import FeaturedPackage from "../Commponents/packages/FeaturedPackage";
import PackageGrid from "../Commponents/packages/PackageGrid";
import PackageComparison from "../Commponents/packages/PackageComparison";
import PackageBenefits from "../Commponents/packages/PackageBenefits";
import Testimonials from "../Commponents/services/Testimonials";
import PackageFAQ from "../Commponents/packages/PackageFAQ";
import BookingCTA from "../Commponents/packages/BookingCTA";

const Packages = () => {
  return (
    <main>
      {/* 1. Hero banner of the page */}
      <PackagesHero />

      {/* 2. Grid listing all packages */}
      <PackageGrid />

      {/* 3. Wide banner highlighting the signature couple package */}
      <FeaturedPackage />

      {/* 4. Comparison sheet for package offerings */}
      <PackageComparison />

      {/* 5. General value details of packages */}
      <PackageBenefits />

      {/* 6. Client feedback section */}
      <Testimonials />

      {/* 7. expandable accordion FAQs */}
      <PackageFAQ />

      {/* 8. Call to action booking banner */}
      <BookingCTA />
    </main>
  );
};

export default Packages;