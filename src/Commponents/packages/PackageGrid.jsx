import Container from "../Container";
import PackageCard from "./PackageCard";
import packages from "../../data/packages";

const PackageGrid = () => {
  return (
    <section className="py-24 bg-[#FCF9F3]">
      <Container>
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-[5px] text-[#C9A227] text-sm font-semibold">
            All Curated Packages
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-[#1C1C1C] leading-tight">
            Our Spa Package Collections
          </h2>
          <p className="mt-6 text-gray-600 leading-8">
            Browse our full selection of wellness packages. Whether you are looking for a quick stress-relief escape, 
            a couples retreat, or a full-day royal spa package, we have something perfect for you.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 mt-16 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} item={pkg} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PackageGrid;
