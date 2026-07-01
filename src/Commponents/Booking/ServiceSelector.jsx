import serviceDetails from "../../data/serviceDetails";
import packages from "../../data/packages";

const ServiceSelector = ({ value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
        Select Service or Package *
      </label>
      <select
        value={value}
        onChange={onChange}
        required
        className="w-full rounded-xl border border-[#D4AF37]/30 bg-white px-5 py-4 outline-none focus:border-[#D4AF37] text-gray-700 font-medium transition duration-300"
      >
        <option value="" disabled>-- Choose a treatment or package --</option>
        
        <optgroup label="Luxury Massages & Treatments">
          {serviceDetails.map((service) => {
            const minPrice = Math.min(...Object.values(service.pricing));
            return (
              <option key={service.id} value={service.hero.title}>
                {service.hero.title} ({service.duration.join("/")} Min) - From ৳{minPrice.toLocaleString()}
              </option>
            );
          })}
        </optgroup>

        <optgroup label="Curated Spa Packages">
          {packages.map((pkg) => (
            <option key={pkg.id} value={pkg.title}>
              {pkg.title} ({pkg.duration}) - {pkg.price}
            </option>
          ))}
        </optgroup>
      </select>
    </div>
  );
};

export default ServiceSelector;
