import workshop from "../assets/images/workshop.png";

const About = () => {
  return (
    <div className="relative top-20 mb-8">
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Pure Velocity — Sri Lanka’s Home of Tesla Expertise
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Pure Velocity began with a simple idea: to bring world-class Tesla
              servicing to Sri Lanka. Founded by Shanil and Dilin — two
              entrepreneurs, tech lovers, and unapologetic car addicts — PV has
              grown into a full-service Tesla workshop backed by global
              experience.
            </p>

            <p className="mt-4 text-gray-700">
              With Sanjeev leading operations on the ground, Dinesh maintaining
              standards and finances with military precision, and Rukshan
              powering customer support and admin, PV runs like a perfectly
              balanced EV drivetrain.
            </p>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span> Honest work.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span> Cutting-edge
                diagnostics.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 font-bold">✓</span> Global
                knowledge. Local trust.
              </li>
            </ul>

            <p className="mt-6 text-sm text-gray-500">
              Our Mission: To become Sri Lanka’s most trusted and advanced Tesla
              service ecosystem, setting a new benchmark for EV maintenance,
              transparency, and customer care.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg bg-white">
            <img
              src={workshop}
              alt="Workshop image"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
