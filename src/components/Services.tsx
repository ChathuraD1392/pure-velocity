import { services } from "../assets/data/services";
import Service_Card from "./essentials/Service_Card";

const Services = () => {
  return (
    <div className="relative top-10 mb-8">
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">
            Tesla Services & Repairs
          </h2>
          <p className="text-center mt-3 text-gray-600">
            We specialise 100% in Tesla vehicles — nothing else.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Service_Card service={s} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-700">
              If it has a battery, a motor, and a Tesla badge — we’ve got it
              covered.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
