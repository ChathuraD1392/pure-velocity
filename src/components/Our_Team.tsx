import p1 from "../assets/images/p1.jpeg";
import p2 from "../assets/images/p2.webp";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import p5 from "../assets/images/p5.jpg";

const Our_Team = () => {
  return (
    <div className="relative top-10 mb-8">
      <section id="team" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">Our Team</h2>
          <p className="text-center text-gray-600 mt-2">
            Passionate people building a better EV experience for Sri Lanka.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Shanil */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 overflow-hidden mb-4">
                <img
                  src={p1}
                  alt="Shanil Wijewardena"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold">Shanil Wijewardena</h4>
              <p className="text-sm text-gray-600">
                Co-Founder / Growth, Technology & Finance Director
              </p>
              <p className="mt-3 text-sm text-gray-700">
                The brains, calculator, and turbocharger behind Pure Velocity —
                a systems builder who dreams in KPIs and Autopilot quirks.
              </p>
            </div>

            {/* Dilin */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 overflow-hidden mb-4">
                <img
                  src={p2}
                  alt="Dilin Arambewela"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold">Dilin Arambewela</h4>
              <p className="text-sm text-gray-600">
                Co-Founder / Growth, Sales & Operations Director
              </p>
              <p className="mt-3 text-sm text-gray-700">
                A sales powerhouse with entrepreneurial instincts and a knack
                for closing deals at lightning speed.
              </p>
            </div>

            {/* Sanjeev */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 overflow-hidden mb-4">
                <img
                  src={p3}
                  alt="Sanjeev Dassanayake"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold">Sanjeev Dassanayake</h4>
              <p className="text-sm text-gray-600">Managing Director</p>
              <p className="mt-3 text-sm text-gray-700">
                The steady engine running operations — part businessman, part
                mechanic whisperer.
              </p>
            </div>

            {/* Dinesh */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 overflow-hidden mb-4">
                <img
                  src={p4}
                  alt="Dinesh Wijewardena"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold">Dinesh Wijewardena</h4>
              <p className="text-sm text-gray-600">
                Servicing & Finance Manager
              </p>
              <p className="mt-3 text-sm text-gray-700">
                Guardian of inventory and strict keeper of standards and
                finances.
              </p>
            </div>

            {/* Rukshan */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 overflow-hidden mb-4">
                <img
                  src={p5}
                  alt="Rukshan Hewage"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold">Rukshan Hewage</h4>
              <p className="text-sm text-gray-600">
                Sales, Support & Administration Manager
              </p>
              <p className="mt-3 text-sm text-gray-700">
                The customer support all-rounder — always ready with a smile and
                a solution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Our_Team;
